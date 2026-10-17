// src/views/crystals.js
// Crystals, minerals, folklore traditions, physical care, and reflection practices

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';

export async function renderCrystalsPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const rows = await db.prepare(`
    SELECT id, slug, name, spiritual_association, traditions,
           appearance, care_instructions, mohs_hardness,
           reflection_practice, safety_notes
    FROM crystals
    WHERE locale = ?
    ORDER BY name ASC
  `).bind(locale).all();

  const crystals = rows.results;

  const titles = {
    en: 'Crystal Folklore & Mindful Anchors — KindWell',
    es: 'Tradiciones minerales y presencia consciente — KindWell',
    'pt-BR': 'Tradições minerais e presença atenta — KindWell'
  };

  const descriptions = {
    en: 'An educational guide to mineral traditions, physical stone care, Mohs hardness, water safety, and reflective practices.',
    es: 'Guía educativa sobre minerales, dureza de Mohs, cuidado en agua y prácticas de contemplación sin promesas milagrosas.',
    'pt-BR': 'Guia informativo sobre cristais, propriedades físicas, segurança e práticas de foco para dias serenos.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.crystals}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Earth, form, and quiet anchors.
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${descriptions[locale] || descriptions.en}
      </p>
      <div style="background:var(--paper);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--muted);text-align:left;">
        <strong style="color:var(--deep);">Symbolic & contemplative:</strong> Crystals and stones are natural physical touchstones for reflection and focus. We honor historical folklore while clearly distinguishing cultural traditions from medical treatment. Crystals do not replace clinical healthcare.
      </div>
    </div>
  </section>

  <!-- Crystal Grid -->
  <section class="section" style="padding:60px 0;">
    <div class="container">
      <div class="grid grid-2" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 300px), 1fr));gap:36px;">
        ${crystals.map(c => `
          <article class="card crystal-card" id="${c.slug}" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span class="pill" style="background:var(--lav);color:var(--lav-deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">
                  Mohs ${c.mohs_hardness}
                </span>
                <span style="font-size:13px;color:var(--deep);font-weight:600;">${c.spiritual_association.split(',')[0]}</span>
              </div>
              <h2 style="font-family:var(--serif);font-size:26px;color:var(--ink);margin:0 0 6px;">${c.name}</h2>
              <p style="font-size:14px;font-weight:600;color:var(--deep);margin:0 0 16px;">${c.spiritual_association}</p>

              <!-- Traditions & Appearance -->
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 14px;">
                <strong>Cultural tradition:</strong> ${c.traditions}
              </p>
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 20px;">
                <strong>Physical appearance:</strong> ${c.appearance}
              </p>

              <!-- Reflection Practice -->
              <div style="background:var(--cream);border-radius:16px;padding:18px;border:1px solid var(--line);margin-bottom:18px;">
                <strong style="font-size:13px;text-transform:uppercase;color:var(--deep);display:block;margin-bottom:6px;">Reflection practice:</strong>
                <p style="margin:0;font-size:14px;line-height:1.6;color:var(--ink);">${c.reflection_practice}</p>
              </div>
            </div>

            <!-- Care & Safety -->
            <div style="border-top:1px solid var(--line);padding-top:16px;font-size:13px;line-height:1.5;color:var(--muted);">
              <div style="margin-bottom:6px;"><strong>Physical care:</strong> ${c.care_instructions}</div>
              <div style="color:var(--danger);"><strong>Safety:</strong> ${c.safety_notes}</div>
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
    path: '/crystals',
    locale,
    user,
    bodyContent
  });
}
