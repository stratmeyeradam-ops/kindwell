// src/views/course-player.js
// Interactive course player, progress tracking, and certificate renderer

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { getCourseBySlug, getOrCreateCertificate } from '../services/courses.js';
import { canAccessCourseIntro, canAccessCourseFull } from '../services/memberships.js';
import { markdownToHtml } from './markdown.js';

export async function renderCoursePlayer(db, {
  slug,
  lessonSlug = null,
  locale = 'en',
  user = null
}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const course = await getCourseBySlug(db, slug, locale);
  if (!course) {
    return renderNotFound(locale, user);
  }

  // Find active lesson (or first lesson in first module)
  let activeLesson = null;
  let activeModule = null;

  for (const m of course.modules) {
    for (const l of m.lessons) {
      if (!activeLesson) {
        activeLesson = l;
        activeModule = m;
      }
      if (lessonSlug && l.slug === lessonSlug) {
        activeLesson = l;
        activeModule = m;
        break;
      }
    }
  }

  // Entitlement: a premium course's first lesson is the Steady intro; every
  // other lesson needs Supported. Locked lessons show their title and an
  // upgrade path, never their text.
  const firstLessonId = course.modules[0]?.lessons[0]?.id;
  const isIntroLesson = activeLesson && activeLesson.id === firstLessonId;
  const lessonLocked = Boolean(course.is_premium && activeLesson && !(
    canAccessCourseFull(user) || (isIntroLesson && canAccessCourseIntro(user))
  ));

  // Check enrollment and progress if user is logged in
  let enrollment = null;
  let progressMap = {};
  let certificate = null;

  if (user) {
    enrollment = await db.prepare('SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?')
      .bind(user.id, course.id).first();

    if (enrollment) {
      const pRows = await db.prepare('SELECT lesson_id, completed, reflection_note FROM lesson_progress WHERE enrollment_id = ?')
        .bind(enrollment.id).all();
      for (const p of pRows.results) {
        progressMap[p.lesson_id] = p;
      }

      if (enrollment.status === 'completed') {
        certificate = await getOrCreateCertificate(db, enrollment.id);
      }
    }
  }

  const currentReflection = (activeLesson && progressMap[activeLesson.id]?.reflection_note) || '';
  const isLessonCompleted = Boolean(activeLesson && progressMap[activeLesson.id]?.completed);

  const bodyContent = `
  <section class="section" style="padding:32px 0 60px;">
    <div class="container">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:16px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> /
        <a href="${prefix}/courses" style="text-decoration:underline;">${t.nav.courses}</a> /
        ${course.title}
      </p>

      <!-- Certificate Banner if Course is Completed -->
      ${certificate ? `
        <div style="background:var(--paper);border:2px solid var(--sage);border-radius:var(--radius);padding:36px;text-align:center;margin-bottom:40px;box-shadow:var(--shadow);">
          <span style="font-size:32px;display:block;margin-bottom:8px;">🎓</span>
          <h2 style="font-family:var(--serif);font-size:32px;color:var(--ink);margin:0 0 8px;">Certificate of Educational Participation</h2>
          <p style="font-size:16px;color:var(--muted);margin:0 0 16px;">
            Proudly awarded to <strong>${certificate.studentName}</strong> for completing <em>${course.title}</em>.
          </p>
          <div style="background:var(--cream);border-radius:12px;padding:10px 20px;display:inline-block;font-size:13px;font-family:monospace;color:var(--deep);border:1px solid var(--line);margin-bottom:12px;">
            Verification code: ${certificate.verificationCode}
          </div>
          <p style="font-size:12px;color:var(--muted);max-width:600px;margin:0 auto;line-height:1.4;">
            This certificate represents personal self-paced study with KindWell. It does not confer professional licensure, psychiatric accreditation, or medical credentials.
          </p>
        </div>
      ` : ''}

      <!-- Course Player Shell: Sidebar + Content -->
      <div class="lesson-layout" style="display:grid;grid-template-columns:300px 1fr;gap:36px;align-items:start;">
        <!-- Left Sidebar: Modules & Lessons -->
        <aside class="lesson-sidebar" style="background:var(--paper);border-radius:var(--radius);padding:24px;border:1px solid var(--line);box-shadow:var(--shadow);">
          <h3 style="font-family:var(--serif);font-size:20px;color:var(--ink);margin:0 0 6px;">${course.title}</h3>
          <span style="font-size:12px;color:var(--deep);font-weight:700;text-transform:uppercase;display:block;margin-bottom:16px;">
            ${course.level} &middot; ~${course.estimated_hours}h
          </span>

          <div class="module-list">
            ${course.modules.map(m => `
              <div style="margin-bottom:16px;">
                <div style="font-size:13px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid var(--line);">
                  ${m.title}
                </div>
                <ul style="list-style:none;padding:0;margin:0;">
                  ${m.lessons.map(l => {
                    const isCurrent = activeLesson && activeLesson.id === l.id;
                    const isDone = Boolean(progressMap[l.id]?.completed);
                    return `
                      <li style="margin-bottom:6px;">
                        <a href="${prefix}/courses/${course.slug}/${l.slug}" style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;font-size:14px;${isCurrent ? 'background:var(--mint);color:var(--deep);font-weight:600;' : 'color:var(--ink);'}">
                          <span style="font-size:12px;">${isDone ? '✓' : '○'}</span>
                          <span>${l.title}</span>
                        </a>
                      </li>
                    `;
                  }).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          ${!user ? `
            <div style="border-top:1px solid var(--line);padding-top:16px;margin-top:20px;font-size:13px;color:var(--muted);text-align:center;">
              <a href="${prefix}/account" style="color:var(--deep);font-weight:600;text-decoration:underline;">Sign in</a> to save your lesson notes and certificate.
            </div>
          ` : ''}
        </aside>

        <!-- Right Main: Active Lesson Content -->
        <main class="lesson-content" style="background:var(--paper);border-radius:var(--radius);padding:40px;border:1px solid var(--line);box-shadow:var(--shadow);">
          ${activeLesson ? `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <span class="pill" style="background:var(--cream);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">
                ${activeLesson.duration_minutes} minutes
              </span>
              ${isLessonCompleted ? `<span style="color:var(--sage);font-weight:600;font-size:14px;">✓ Lesson completed</span>` : ''}
            </div>

            <h1 style="font-family:var(--serif);font-size:32px;color:var(--ink);margin:0 0 24px;line-height:1.2;">
              ${activeLesson.title}
            </h1>

            ${lessonLocked ? `
            <div style="background:var(--cream);border-radius:18px;padding:28px;border:1px solid var(--line);margin-bottom:32px;">
              <h3 style="font-family:var(--serif);font-size:20px;margin:0 0 8px;color:var(--ink);">${isIntroLesson ? 'This introduction is part of the Steady membership' : 'This lesson is part of the Supported membership'}</h3>
              <p style="font-size:15px;color:var(--muted);margin:0 0 16px;">${isIntroLesson ? 'Steady ($10/mo) opens every course introduction. Supported ($20/mo) opens every full course.' : 'Supported ($20/mo) opens every lesson of every course, plus posting in the Circle.'}</p>
              <a class="btn small" href="${prefix}/pricing">See memberships</a>
            </div>
            ` : `
            <div class="lesson-body" style="font-size:16px;line-height:1.75;color:var(--ink);margin-bottom:36px;">
              ${markdownToHtml(activeLesson.content)}
            </div>

            <!-- Reflection Box -->
            <div style="background:var(--cream);border-radius:18px;padding:24px;border:1px solid var(--line);margin-bottom:32px;">
              <h3 style="font-family:var(--serif);font-size:20px;margin:0 0 8px;color:var(--ink);">Reflection Journal</h3>
              <p style="font-size:14px;color:var(--muted);margin:0 0 14px;">
                ${activeLesson.reflection_prompt || 'What thoughts or sensations arise as you contemplate this lesson?'}
              </p>

              <form method="POST" action="/api/courses/complete-lesson" style="display:flex;flex-direction:column;gap:12px;">
                <input type="hidden" name="courseSlug" value="${course.slug}">
                <input type="hidden" name="lessonSlug" value="${activeLesson.slug}">
                <input type="hidden" name="lessonId" value="${activeLesson.id}">
                <textarea name="reflectionNote" rows="4" placeholder="Write your thoughts quietly here (saved to your personal account)..." style="width:100%;border-radius:12px;border:1px solid var(--line);padding:14px;font-family:var(--sans);font-size:15px;background:var(--paper);">${currentReflection}</textarea>

                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
                  <span style="font-size:13px;color:var(--muted);">Private and visible only to you</span>
                  <button type="submit" class="btn small" style="background:var(--deep);color:var(--paper);">
                    ${isLessonCompleted ? 'Update Reflection' : 'Save Reflection & Complete Lesson'}
                  </button>
                </div>
              </form>
            </div>
            `}
          ` : `
            <p>Select a lesson from the menu on the left to begin.</p>
          `}
        </main>
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: `${activeLesson ? activeLesson.title + ' — ' : ''}${course.title} — KindWell`,
    description: course.subtitle,
    path: `/courses/${course.slug}`,
    locale,
    user,
    bodyContent
  });
}

function renderNotFound(locale, user) {
  return renderLayout({
    title: 'Course Not Found — KindWell',
    description: 'We could not find the course you were looking for.',
    path: '/courses',
    locale,
    user,
    bodyContent: `<section class="section" style="text-align:center;padding:100px 0;"><h1>Course not found</h1><p><a href="/courses">Return to courses catalog &rarr;</a></p></section>`
  });
}
