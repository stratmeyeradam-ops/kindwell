// src/services/courses.js
// Course enrollment, lesson progress, reflection notes, and certificate generation

import { randomBytes } from 'node:crypto';
import { canAccessCourseIntro, canAccessCourseFull } from './memberships.js';

/**
 * Lists all available courses for a locale.
 */
export async function listCourses(db, locale = 'en') {
  const query = `
    SELECT c.id, c.slug, c.is_premium, c.level, c.estimated_hours,
           ct.title, ct.subtitle, ct.description, ct.learning_outcomes
    FROM courses c
    JOIN course_translations ct ON c.id = ct.course_id AND ct.locale = ?
    ORDER BY c.created_at ASC
  `;
  const rows = await db.prepare(query).bind(locale).all();
  return rows.results.map(r => ({
    ...r,
    learningOutcomes: JSON.parse(r.learning_outcomes || '[]')
  }));
}

/**
 * Fetches a single course with its modules and lessons.
 */
export async function getCourseBySlug(db, slug, locale = 'en') {
  const course = await db.prepare(`
    SELECT c.id, c.slug, c.is_premium, c.level, c.estimated_hours,
           ct.title, ct.subtitle, ct.description, ct.learning_outcomes
    FROM courses c
    JOIN course_translations ct ON c.id = ct.course_id AND ct.locale = ?
    WHERE c.slug = ?
  `).bind(locale, slug).first();

  if (!course) return null;

  course.learningOutcomes = JSON.parse(course.learning_outcomes || '[]');

  // Get modules
  const modulesRes = await db.prepare(`
    SELECT m.id, m.slug, m.sort_order,
           mt.title, mt.description
    FROM modules m
    JOIN module_translations mt ON m.id = mt.module_id AND mt.locale = ?
    WHERE m.course_id = ?
    ORDER BY m.sort_order ASC
  `).bind(locale, course.id).all();

  const modules = [];
  for (const m of modulesRes.results) {
    const lessonsRes = await db.prepare(`
      SELECT l.id, l.slug, l.sort_order, l.duration_minutes,
             lt.title, lt.content, lt.reflection_prompt, lt.worksheet_reference
      FROM lessons l
      JOIN lesson_translations lt ON l.id = lt.lesson_id AND lt.locale = ?
      WHERE l.module_id = ?
      ORDER BY l.sort_order ASC
    `).bind(locale, m.id).all();

    modules.push({
      ...m,
      lessons: lessonsRes.results
    });
  }

  course.modules = modules;
  return course;
}

/**
 * Enrolls a user in a course.
 */
export async function enrollCourse(db, user, courseId) {
  if (!user) throw new Error('Please sign in to enroll in a course.');

  const course = await db.prepare('SELECT id, is_premium FROM courses WHERE id = ?').bind(courseId).first();
  if (!course) throw new Error('Course not found.');

  // Check user entitlement
  if (course.is_premium && !canAccessCourseIntro(user) && !canAccessCourseFull(user)) {
    throw new Error('This course requires a Steady ($10/mo) or Supported ($20/mo) membership.');
  }

  const existing = await db.prepare('SELECT id, status FROM enrollments WHERE user_id = ? AND course_id = ?')
    .bind(user.id, courseId).first();

  if (existing) {
    return existing;
  }

  const enrollmentId = 'enr_' + randomBytes(12).toString('hex');
  const now = new Date().toISOString();

  await db.prepare(`
    INSERT INTO enrollments (id, user_id, course_id, status, enrolled_at)
    VALUES (?, ?, ?, 'active', ?)
  `).bind(enrollmentId, user.id, courseId, now).run();

  return { id: enrollmentId, userId: user.id, courseId, status: 'active', enrolledAt: now };
}

/**
 * Records lesson completion and optional reflection notes.
 */
export async function completeLesson(db, { enrollmentId, lessonId, reflectionNote = null }) {
  const enrollment = await db.prepare('SELECT * FROM enrollments WHERE id = ?').bind(enrollmentId).first();
  if (!enrollment) throw new Error('Enrollment not found.');

  // A lesson only counts toward the enrollment's own course. Without this a
  // member could complete another course's lessons and mint its certificate.
  const owns = await db.prepare(`
    SELECT 1 AS ok FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE l.id = ? AND m.course_id = ?
  `).bind(lessonId, enrollment.course_id).first();
  if (!owns) throw new Error('Lesson does not belong to this course.');

  const progressId = 'prog_' + randomBytes(12).toString('hex');
  const now = new Date().toISOString();

  await db.prepare(`
    INSERT INTO lesson_progress (id, enrollment_id, lesson_id, completed, reflection_note, updated_at)
    VALUES (?, ?, ?, 1, ?, ?)
    ON CONFLICT(enrollment_id, lesson_id) DO UPDATE SET
      completed = 1,
      reflection_note = COALESCE(?, reflection_note),
      updated_at = ?
  `).bind(progressId, enrollmentId, lessonId, reflectionNote, now, reflectionNote, now).run();

  // Check if all lessons in the course are completed
  const totalLessons = await db.prepare(`
    SELECT count(l.id) as count
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE m.course_id = ?
  `).bind(enrollment.course_id).first();

  const completedLessons = await db.prepare(`
    SELECT count(lp.id) as count
    FROM lesson_progress lp
    WHERE lp.enrollment_id = ? AND lp.completed = 1
  `).bind(enrollmentId).first();

  let certificate = null;
  if (totalLessons.count > 0 && completedLessons.count >= totalLessons.count) {
    // Mark enrollment completed
    await db.prepare("UPDATE enrollments SET status = 'completed', completed_at = ? WHERE id = ?")
      .bind(now, enrollmentId).run();

    // Check or generate certificate
    certificate = await getOrCreateCertificate(db, enrollmentId);
  }

  return {
    success: true,
    completedLessons: completedLessons.count,
    totalLessons: totalLessons.count,
    isCourseCompleted: completedLessons.count >= totalLessons.count,
    certificate
  };
}

/**
 * Normalises a certificates row to the shape the views and callers expect.
 */
function toCertificate(row) {
  return {
    id: row.id,
    enrollmentId: row.enrollment_id,
    userId: row.user_id,
    courseId: row.course_id,
    studentName: row.student_name,
    verificationCode: row.verification_code,
    issuedAt: row.issued_at
  };
}

/**
 * Gets or creates an educational certificate of participation.
 */
export async function getOrCreateCertificate(db, enrollmentId) {
  const existing = await db.prepare('SELECT * FROM certificates WHERE enrollment_id = ?').bind(enrollmentId).first();
  // Always return the camelCase shape callers render, whether the row was just
  // created or already existed — otherwise a returning graduate sees
  // "Verification code: undefined".
  if (existing) return toCertificate(existing);

  const enrollment = await db.prepare(`
    SELECT e.id, e.user_id, e.course_id, u.name as student_name
    FROM enrollments e
    JOIN user u ON e.user_id = u.id
    WHERE e.id = ?
  `).bind(enrollmentId).first();

  if (!enrollment) return null;

  const certId = 'cert_' + randomBytes(12).toString('hex');
  const verificationCode = 'KW-' + randomBytes(4).toString('hex').toUpperCase() + '-' + Date.now().toString(36).toUpperCase();
  const now = new Date().toISOString();

  await db.prepare(`
    INSERT INTO certificates (id, enrollment_id, user_id, course_id, student_name, verification_code, issued_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(certId, enrollmentId, enrollment.user_id, enrollment.course_id, enrollment.student_name, verificationCode, now).run();

  return {
    id: certId,
    enrollmentId,
    userId: enrollment.user_id,
    courseId: enrollment.course_id,
    studentName: enrollment.student_name,
    verificationCode,
    issuedAt: now
  };
}

/**
 * Public certificate verification.
 */
export async function verifyCertificate(db, verificationCode, locale = 'en') {
  const cert = await db.prepare(`
    SELECT c.id, c.student_name, c.verification_code, c.issued_at,
           ct.title as course_title, ct.subtitle as course_subtitle
    FROM certificates c
    JOIN course_translations ct ON c.course_id = ct.course_id AND ct.locale = ?
    WHERE c.verification_code = ?
  `).bind(locale, verificationCode).first();

  if (!cert) return null;

  return {
    isValid: true,
    verificationCode: cert.verification_code,
    studentName: cert.student_name,
    courseTitle: cert.course_title,
    issuedAt: cert.issued_at,
    disclaimer: 'This certificate represents educational participation and completion of an independent KindWell self-paced learning program. It does not confer professional licensure, clinical credentialing, or medical qualification.'
  };
}
