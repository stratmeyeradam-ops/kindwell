// tests/courses-quizzes.test.js
import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';
import { registerUser } from './fixtures.js';
import { activateSubscription, TIERS } from '../src/services/memberships.js';
import {
  listCourses,
  getCourseBySlug,
  enrollCourse,
  completeLesson,
  verifyCertificate,
  getOrCreateCertificate
} from '../src/services/courses.js';
import {
  listQuizzes,
  getQuizBySlug,
  submitQuizAnswers
} from '../src/services/quizzes.js';
import { COURSES_A } from '../src/db/content/courses-a.js';
import { COURSES_B } from '../src/db/content/courses-b.js';
import { QUIZZES } from '../src/db/content/quizzes.js';

const ALL_COURSES = [...COURSES_A, ...COURSES_B];
const lessonCount = (course) => course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

describe('Courses & Reflective Quizzes Engine', () => {
  let db;
  let user;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);
    const res = await registerUser(db, { email: 'student@kindwell.org', name: 'Student User' });
    user = res.user;
    // Upgrade to Supported for full course access
    await activateSubscription(db, { userId: user.id, tier: TIERS.SUPPORTED });
    user = await db.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
  });

  test('listCourses returns every authored course, translated in all three locales', async () => {
    assert.ok(ALL_COURSES.length >= 3);
    for (const locale of ['en', 'es', 'pt-BR']) {
      const courses = await listCourses(db, locale);
      assert.equal(courses.length, ALL_COURSES.length, `${locale} lists every course`);
      for (const source of ALL_COURSES) {
        const listed = courses.find((c) => c.slug === source.slug);
        assert.ok(listed, `${source.slug} is listed in ${locale}`);
        assert.equal(listed.title, source[locale].title);
        assert.ok(Array.isArray(listed.learningOutcomes));
      }
    }
    const en = await listCourses(db, 'en');
    for (const slug of ['self-compassion-and-kindness', 'radical-acceptance-foundations', 'spiritual-reflection-contemplative-support']) {
      assert.ok(en.some((c) => c.slug === slug), `${slug} keeps its original slug`);
    }
  });

  test('getCourseBySlug returns the full hierarchy of modules and lessons', async () => {
    for (const source of ALL_COURSES) {
      const course = await getCourseBySlug(db, source.slug, 'en');
      assert.ok(course, source.slug);
      assert.equal(course.id, source.id);
      assert.equal(course.modules.length, source.modules.length);
      const lessons = course.modules.flatMap((m) => m.lessons);
      assert.equal(lessons.length, lessonCount(source));
      for (const lesson of lessons) {
        assert.ok(lesson.title, `${lesson.id} has a title`);
        assert.ok(lesson.content, `${lesson.id} has content`);
      }
    }
  });

  test('course enrollment is gated to Steady and above', async () => {
    const { user: free } = await registerUser(db, { email: 'free_student@kindwell.org', name: 'Free Student' });
    const course = await getCourseBySlug(db, 'self-compassion-and-kindness', 'en');
    await assert.rejects(() => enrollCourse(db, free, course.id), /Steady \(\$10\/mo\) or Supported \(\$20\/mo\)/);
    await assert.rejects(() => enrollCourse(db, null, course.id), /sign in/);
    await assert.rejects(() => enrollCourse(db, user, 'course_nope'), /not found/);
  });

  test('course progress tracking, reflection saving, and certificate generation', async () => {
    const course = await getCourseBySlug(db, 'self-compassion-and-kindness', 'en');
    const enrollment = await enrollCourse(db, user, course.id);
    assert.equal(enrollment.status, 'active');
    assert.equal((await enrollCourse(db, user, course.id)).id, enrollment.id, 're-enrolling is idempotent');

    const lessons = course.modules.flatMap((m) => m.lessons);
    assert.ok(lessons.length >= 2);

    // Complete first lesson
    const r1 = await completeLesson(db, {
      enrollmentId: enrollment.id,
      lessonId: lessons[0].id,
      reflectionNote: 'Noticing when my shoulders tense up during busy days.'
    });
    assert.equal(r1.completedLessons, 1);
    assert.equal(r1.totalLessons, lessons.length);
    assert.equal(r1.isCourseCompleted, false);
    assert.equal(r1.certificate, null);

    // Verify reflection note was saved
    const p1 = await db.prepare('SELECT reflection_note FROM lesson_progress WHERE enrollment_id = ? AND lesson_id = ?')
      .bind(enrollment.id, lessons[0].id).first();
    assert.equal(p1.reflection_note, 'Noticing when my shoulders tense up during busy days.');

    // Completing the same lesson again does not double count, and keeps the note
    const again = await completeLesson(db, { enrollmentId: enrollment.id, lessonId: lessons[0].id });
    assert.equal(again.completedLessons, 1);
    const kept = await db.prepare('SELECT reflection_note FROM lesson_progress WHERE enrollment_id = ? AND lesson_id = ?')
      .bind(enrollment.id, lessons[0].id).first();
    assert.equal(kept.reflection_note, 'Noticing when my shoulders tense up during busy days.');

    // Complete the rest; only the final lesson finishes the course
    let last;
    for (const [index, lesson] of lessons.slice(1).entries()) {
      last = await completeLesson(db, { enrollmentId: enrollment.id, lessonId: lesson.id, reflectionNote: `Note ${index}` });
      if (index < lessons.length - 2) assert.equal(last.isCourseCompleted, false);
    }
    assert.equal(last.isCourseCompleted, true);
    assert.ok(last.certificate);
    assert.ok(last.certificate.verificationCode.startsWith('KW-'));

    const enrollmentRow = await db.prepare('SELECT status FROM enrollments WHERE id = ?').bind(enrollment.id).first();
    assert.equal(enrollmentRow.status, 'completed');

    // Verify certificate via public verification helper
    const certVerification = await verifyCertificate(db, last.certificate.verificationCode, 'en');
    assert.equal(certVerification.isValid, true);
    assert.equal(certVerification.studentName, user.name);
    assert.equal(certVerification.courseTitle, course.title);
    assert.ok(certVerification.disclaimer.includes('educational participation'));
    assert.equal(await verifyCertificate(db, 'KW-NOT-REAL', 'en'), null);
  });

  test('a completed course keeps one certificate with a stable shape', {}, async () => {
    const course = await getCourseBySlug(db, 'self-compassion-and-kindness', 'en');
    const enrollment = await enrollCourse(db, user, course.id);
    for (const lesson of course.modules.flatMap((m) => m.lessons)) {
      await completeLesson(db, { enrollmentId: enrollment.id, lessonId: lesson.id });
    }
    const first = await getOrCreateCertificate(db, enrollment.id);
    const second = await getOrCreateCertificate(db, enrollment.id);
    assert.ok(first.verificationCode);
    assert.equal(second.verificationCode, first.verificationCode);
  });

  test('lessons from another course never count toward a certificate', {}, async () => {
    const [a, b] = ALL_COURSES;
    const target = await getCourseBySlug(db, a.slug, 'en');
    const other = await getCourseBySlug(db, b.slug, 'en');
    const enrollment = await enrollCourse(db, user, target.id);
    let result;
    for (const lesson of other.modules.flatMap((m) => m.lessons)) {
      result = await completeLesson(db, { enrollmentId: enrollment.id, lessonId: lesson.id }).catch(() => null);
    }
    assert.ok(!result?.isCourseCompleted, 'another course\'s lessons did not complete this one');
    const cert = await db.prepare('SELECT id FROM certificates WHERE enrollment_id = ?').bind(enrollment.id).first();
    assert.equal(cert, null);
  });

  test('the complete-lesson route records progress for an entitled member', {}, async () => {
    const { createApp } = await import('../src/app.js');
    const app = createApp(db);
    const { session } = await registerUser(db, { email: 'route_student@kindwell.org', name: 'Route Student' });
    const member = await db.prepare('SELECT id FROM user WHERE email = ?').bind('route_student@kindwell.org').first();
    await activateSubscription(db, { userId: member.id, tier: TIERS.SUPPORTED });
    const course = await getCourseBySlug(db, 'self-compassion-and-kindness', 'en');
    const lesson = course.modules[0].lessons[0];

    const res = await app.request('/api/courses/complete-lesson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', cookie: `kindwell_session=${session.token}` },
      body: new URLSearchParams({ courseSlug: course.slug, lessonSlug: lesson.slug, lessonId: lesson.id, reflectionNote: 'Via the form.' }).toString()
    }, {});
    assert.equal(res.status, 302);
    const row = await db.prepare(`
      SELECT lp.reflection_note FROM lesson_progress lp JOIN enrollments e ON e.id = lp.enrollment_id
      WHERE e.user_id = ? AND lp.lesson_id = ?
    `).bind(member.id, lesson.id).first();
    assert.equal(row?.reflection_note, 'Via the form.');

    const anonymous = await app.request('/api/courses/complete-lesson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ courseSlug: course.slug, lessonId: lesson.id }).toString()
    }, {});
    // The error text is form-encoded, so `+` stands for a space — read the
    // query parameter the way a browser would rather than raw-decoding.
    const location = anonymous.headers.get('location');
    const errorText = new URLSearchParams(location.split('?')[1] || '').get('error') || '';
    assert.match(errorText, /sign in/i);
  });

  test('the complete-lesson route does not let a Free member enroll in or finish a premium course', {}, async () => {
    const { createApp } = await import('../src/app.js');
    const app = createApp(db);
    const { user: free, session } = await registerUser(db, { email: 'free_route@kindwell.org', name: 'Free Route' });
    const course = await getCourseBySlug(db, 'self-compassion-and-kindness', 'en');
    for (const lesson of course.modules.flatMap((m) => m.lessons)) {
      await app.request('/api/courses/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', cookie: `kindwell_session=${session.token}` },
        body: new URLSearchParams({ courseSlug: course.slug, lessonSlug: lesson.slug, lessonId: lesson.id }).toString()
      }, {});
    }
    const enrollment = await db.prepare('SELECT id FROM enrollments WHERE user_id = ?').bind(free.id).first();
    assert.equal(enrollment, null, 'no enrollment without entitlement');
    const cert = await db.prepare('SELECT id FROM certificates WHERE user_id = ?').bind(free.id).first();
    assert.equal(cert, null, 'no certificate without entitlement');
  });

  test('every authored quiz is listed with its questions in all locales', async () => {
    for (const locale of ['en', 'es', 'pt-BR']) {
      const quizzes = await listQuizzes(db, locale);
      assert.equal(quizzes.length, QUIZZES.length, `${locale} lists every quiz`);
    }
    for (const source of QUIZZES) {
      const quiz = await getQuizBySlug(db, source.slug, 'en');
      assert.ok(quiz, source.slug);
      assert.equal(quiz.questions.length, source.questions.length);
      for (const question of quiz.questions) {
        assert.ok(question.options.length >= 2, `${question.id} offers a choice`);
        for (const option of question.options) {
          assert.ok(source.results[option.tag], `${source.slug}: option tag "${option.tag}" maps to one of the quiz's own results`);
        }
      }
    }
  });

  test('reflective quiz scoring uses the quiz\'s own results and stays non-clinical', async () => {
    const restQuiz = await getQuizBySlug(db, 'what-kind-of-rest-do-i-need', 'en');
    assert.ok(restQuiz);
    const source = QUIZZES.find((q) => q.id === restQuiz.id);

    const evaluation = await submitQuizAnswers(db, {
      quizId: restQuiz.id,
      userId: user.id,
      answers: restQuiz.questions.map((q) => ({ questionId: q.id, tag: 'sensory' })),
      locale: 'en'
    });

    assert.equal(evaluation.primaryNeed, 'sensory');
    assert.equal(evaluation.theme, source.results.sensory.en.title);
    assert.equal(evaluation.reflection, source.results.sensory.en.summary);
    assert.deepEqual(evaluation.recommendations.practices, source.results.sensory.practices);
    assert.deepEqual(evaluation.recommendations.tips, source.results.sensory.en.recommendations);

    const stored = await db.prepare('SELECT result_profile, user_id FROM quiz_results WHERE id = ?').bind(evaluation.id).first();
    assert.equal(stored.result_profile, 'sensory');
    assert.equal(stored.user_id, user.id);

    const localized = await submitQuizAnswers(db, {
      quizId: restQuiz.id,
      answers: [{ questionId: restQuiz.questions[0].id, tag: 'sensory' }],
      locale: 'es'
    });
    assert.equal(localized.theme, source.results.sensory.es.title);
  });

  test('every quiz scores to its own result for each of its result keys, with no clinical language', async () => {
    for (const source of QUIZZES) {
      for (const [key, result] of Object.entries(source.results)) {
        for (const locale of ['en', 'es', 'pt-BR']) {
          const evaluation = await submitQuizAnswers(db, {
            quizId: source.id,
            answers: [{ questionId: 'q', tag: key }, { questionId: 'q2', tag: key }],
            locale
          });
          assert.equal(evaluation.primaryNeed, key);
          assert.equal(evaluation.theme, result[locale].title, `${source.slug}/${key}/${locale}`);
          const text = `${evaluation.theme} ${evaluation.reflection}`.toLowerCase();
          assert.ok(!/diagnos(is|ed|e)\b|disorder/.test(text), `${source.slug}/${key}/${locale} stays non-clinical`);
        }
      }
    }
  });

  test('the majority answer wins', async () => {
    const source = QUIZZES.find((q) => q.slug === 'self-compassion-check-in');
    const [a, b] = Object.keys(source.results);
    const evaluation = await submitQuizAnswers(db, {
      quizId: source.id,
      answers: [{ tag: a }, { tag: b }, { tag: b }],
      locale: 'en'
    });
    assert.equal(evaluation.primaryNeed, b);
    assert.equal(evaluation.theme, source.results[b].en.title);
  });
});
