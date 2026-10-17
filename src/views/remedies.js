// src/views/remedies.js
// 12 Holistic Care & Botanical Remedies Guide View

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';

export async function renderRemediesPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const rows = await db.prepare(`
    SELECT r.id, r.category, r.slug,
           rt.title, rt.summary, rt.botanical_allies, rt.somatic_approaches,
           rt.cautions, rt.pregnancy_warning, rt.escalation_flags
    FROM remedies r
    JOIN remedy_translations rt ON r.id = rt.remedy_id AND rt.locale = ?
    ORDER BY r.id ASC
  `).bind(locale).all();

  const remedies = rows.results.map(r => ({
    ...r,
    allies: JSON.parse(r.botanical_allies || '[]'),
    somatic: JSON.parse(r.somatic_approaches || '[]'),
    cautions: JSON.parse(r.cautions || '[]'),
    escalation: JSON.parse(r.escalation_flags || '[]')
  }));

  const titles = {
    en: 'Natural Remedies & Whole-Person Healing — KindWell',
    es: 'Remedios tradicionales y bienestar integral — KindWell',
    'pt-BR': 'Remédios tradicionais e cuidado integral — KindWell'
  };

  const descriptions = {
    en: 'Evidence-informed herbal wisdom, teas, circadian care, and non-clinical approaches for common physical discomforts with clear boundaries.',
    es: 'Sabiduría botánica responsable, hábitos de descanso, infusiones suaves y límites claros de atención a la salud.',
    'pt-BR': 'Abordagens naturais e tradicionais para o bem-estar cotidiano, chás botânicos e respeito aos limites da saúde.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.remedies}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 50px);color:var(--ink);margin:0 0 16px;line-height:1.15;">
        Tend the whole person.<br><em>Gently, naturally, honestly.</em>
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${descriptions[locale] || descriptions.en}
      </p>
      <div style="background:var(--paper);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--muted);text-align:left;">
        <strong style="color:var(--deep);">Educational information:</strong> We share traditional wellness wisdom, not medical prescriptions. Natural herbs can interact with medications. Consult a pharmacist or qualified clinician for severe or persistent symptoms.
      </div>
    </div>
  </section>

  <!-- Remedies Grid -->
  <section class="section" style="padding:60px 0;">
    <div class="container">
      <div class="grid grid-2" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 300px), 1fr));gap:36px;">
        ${remedies.map((r, idx) => `
          <article class="card remedy-card" id="${r.slug}" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">
                  ${r.category}
                </span>
                <span style="font-size:13px;color:var(--muted);font-weight:600;">#0${idx + 1}</span>
              </div>
              <h2 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 10px;">${r.title}</h2>
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 20px;">${r.summary}</p>

              <!-- Botanical Allies -->
              <div style="margin-bottom:18px;">
                <strong style="font-size:13px;text-transform:uppercase;color:var(--deep);display:block;margin-bottom:6px;">Botanical Allies:</strong>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;color:var(--ink);">
                  ${r.allies.map(a => `<li>${a}</li>`).join('')}
                </ul>
              </div>

              <!-- Somatic & Lifestyle Approaches -->
              <div style="margin-bottom:18px;">
                <strong style="font-size:13px;text-transform:uppercase;color:var(--deep);display:block;margin-bottom:6px;">Somatic & Lifestyle Care:</strong>
                <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;color:var(--ink);">
                  ${r.somatic.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>

              <!-- Cautions & Pregnancy Warnings -->
              <div style="background:var(--cream);border-radius:16px;padding:16px;border:1px solid var(--line);margin-bottom:16px;font-size:13px;line-height:1.5;">
                <strong style="color:var(--deep);display:block;margin-bottom:4px;">Cautions & Safety:</strong>
                ${r.cautions.map(c => `<div style="margin-bottom:4px;">&bull; ${c}</div>`).join('')}
                ${r.pregnancy_warning ? `<div style="margin-top:6px;color:var(--danger);"><strong>Pregnancy:</strong> ${r.pregnancy_warning}</div>` : ''}
              </div>
            </div>

            <!-- Escalation & Red Flags -->
            <div style="border-top:1px solid var(--line);padding-top:14px;font-size:12px;color:var(--muted);line-height:1.5;">
              <strong style="color:var(--danger);">When to seek immediate care:</strong>
              ${r.escalation.join(' &middot; ')}
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
    path: '/remedies',
    locale,
    user,
    bodyContent
  });
}
