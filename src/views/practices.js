// src/views/practices.js
// 12 Micro-practices library view with categories, time filters, and guided steps

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';

export async function renderPracticesPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const rows = await db.prepare(`
    SELECT p.id, p.category, p.duration_minutes, p.slug, p.is_premium,
           pt.title, pt.subtitle, pt.description, pt.steps, pt.why_it_helps
    FROM practices p
    JOIN practice_translations pt ON p.id = pt.practice_id AND pt.locale = ?
    ORDER BY p.duration_minutes ASC, p.id ASC
  `).bind(locale).all();

  const practices = rows.results.map(r => ({
    ...r,
    steps: JSON.parse(r.steps || '[]')
  }));

  const titles = {
    en: 'KindWell Practices — Gentle Somatic & Emotional Micro-Exercises',
    es: 'Prácticas KindWell — Ejercicios breves de calma y presencia',
    'pt-BR': 'Práticas KindWell — Microexercícios somáticos e de serenidade'
  };

  const descriptions = {
    en: 'Short, practical somatic exercises for grounding, boundaries, self-compassion, grief, and emotional defusion. No forced positivity.',
    es: 'Ejercicios sencillos de enraizamiento corporal, límites sanos, autocompasión y acompañamiento del dolor cotidiano.',
    'pt-BR': 'Exercícios práticos de respiração, presença no corpo, limites afetuosos e acolhimento emocional no dia a dia.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:800px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.practices}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Small enough to use.<br><em>Strong enough to matter.</em>
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto;">
        ${descriptions[locale] || descriptions.en}
      </p>
    </div>
  </section>

  <!-- Filter & Practices Grid -->
  <section class="section" style="padding:60px 0;">
    <div class="container">
      <!-- Category Tabs -->
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:48px;">
        <button class="pill active-pill" onclick="filterPractices('all')" style="background:var(--deep);color:var(--paper);border:none;padding:8px 20px;border-radius:50px;font-size:14px;font-weight:600;">All practices (12)</button>
        <button class="pill" onclick="filterPractices('Grounding')" style="background:var(--paper);color:var(--ink);border:1px solid var(--line);padding:8px 18px;border-radius:50px;font-size:14px;">Grounding</button>
        <button class="pill" onclick="filterPractices('Emotions')" style="background:var(--paper);color:var(--ink);border:1px solid var(--line);padding:8px 18px;border-radius:50px;font-size:14px;">Emotions</button>
        <button class="pill" onclick="filterPractices('Self-Compassion')" style="background:var(--paper);color:var(--ink);border:1px solid var(--line);padding:8px 18px;border-radius:50px;font-size:14px;">Self-Compassion</button>
        <button class="pill" onclick="filterPractices('Relationships')" style="background:var(--paper);color:var(--ink);border:1px solid var(--line);padding:8px 18px;border-radius:50px;font-size:14px;">Relationships</button>
        <button class="pill" onclick="filterPractices('Grief')" style="background:var(--paper);color:var(--ink);border:1px solid var(--line);padding:8px 18px;border-radius:50px;font-size:14px;">Grief</button>
      </div>

      <div class="grid grid-2" id="practices-container" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));gap:32px;">
        ${practices.map((p, idx) => `
          <article class="card practice-card" data-category="${p.category}" id="${p.id}" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">
                  ${p.category} &middot; ${p.duration_minutes} min
                </span>
                <span style="font-size:13px;color:var(--muted);font-weight:600;">#0${idx + 1}</span>
              </div>
              <h2 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 4px;">${p.title}</h2>
              <p style="font-size:14px;font-weight:600;color:var(--deep);margin:0 0 14px;">${p.subtitle}</p>
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 20px;">${p.description}</p>

              <div style="background:var(--cream);border-radius:18px;padding:20px;border:1px solid var(--line);margin-bottom:20px;">
                <strong style="font-size:13px;text-transform:uppercase;color:var(--deep);display:block;margin-bottom:8px;">Step-by-step guidance:</strong>
                <ol style="margin:0;padding-left:20px;font-size:14px;line-height:1.7;color:var(--ink);">
                  ${p.steps.map(s => `<li style="margin-bottom:6px;">${s}</li>`).join('')}
                </ol>
              </div>
            </div>

            <div style="border-top:1px solid var(--line);padding-top:16px;font-size:13px;color:var(--muted);line-height:1.5;">
              <strong style="color:var(--ink);">Why it helps:</strong> ${p.why_it_helps}
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <script>
    function filterPractices(category) {
      const cards = document.querySelectorAll('.practice-card');
      const pills = document.querySelectorAll('.pill');
      pills.forEach(p => {
        p.style.background = 'var(--paper)';
        p.style.color = 'var(--ink)';
      });
      event.target.style.background = 'var(--deep)';
      event.target.style.color = 'var(--paper)';

      cards.forEach(card => {
        if (category === 'all' || card.dataset.category.toLowerCase() === category.toLowerCase()) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/practices',
    locale,
    user,
    bodyContent
  });
}
