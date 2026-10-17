// src/views/courses.js
// Courses catalog view for KindWell

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { listCourses } from '../services/courses.js';

export async function renderCoursesPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const courses = await listCourses(db, locale);

  const titles = {
    en: 'Guided Self-Paced Courses — KindWell',
    es: 'Cursos formativos a tu propio ritmo — KindWell',
    'pt-BR': 'Cursos formativos no seu próprio ritmo — KindWell'
  };

  const descriptions = {
    en: 'Self-compassion, radical acceptance, and contemplative spiritual care woven into accessible self-paced modules.',
    es: 'Autocompasión, aceptación consciente y acompañamiento espiritual en programas formativos accesibles.',
    'pt-BR': 'Cursos sobre autocompaixão, aceitação consciente e espiritualidade acolhedora no seu ritmo.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.courses}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Learn at your pace,<br><em>with gentle company.</em>
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${descriptions[locale] || descriptions.en}
      </p>
      <div style="background:var(--paper);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--muted);text-align:left;">
        <strong style="color:var(--deep);">Educational curriculum:</strong> Our courses offer personal self-reflection and contemplative learning. They do not confer medical licensure, therapy degrees, or professional certification.
      </div>
    </div>
  </section>

  <!-- Courses Grid -->
  <section class="section" style="padding:60px 0;">
    <div class="container">
      <div class="grid grid-3" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:32px;">
        ${courses.map(c => `
          <article class="card course-card" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">
                  ${c.level} &middot; ~${c.estimated_hours}h
                </span>
                <span style="font-size:12px;color:var(--muted);font-weight:600;">Self-paced</span>
              </div>
              <h2 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 8px;line-height:1.25;">${c.title}</h2>
              <p style="font-size:14px;font-weight:600;color:var(--deep);margin:0 0 14px;">${c.subtitle}</p>
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 20px;">${c.description}</p>

              <div style="background:var(--cream);border-radius:16px;padding:18px;border:1px solid var(--line);margin-bottom:24px;">
                <strong style="font-size:13px;text-transform:uppercase;color:var(--deep);display:block;margin-bottom:8px;">What you will explore:</strong>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;color:var(--ink);">
                  ${c.learningOutcomes.map(o => `<li>${o}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div style="border-top:1px solid var(--line);padding-top:20px;display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:14px;color:var(--muted);">Included with Supported ($20/mo)</span>
              <a class="btn small" href="${prefix}/courses/${c.slug}">Start course &rarr;</a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/courses',
    locale,
    user,
    bodyContent
  });
}
