// src/views/homeopathy.js
// Homeopathy as a tradition: principles, potency notation, classic remedy
// keynotes, and situational guides. Trilingual text lives in
// src/db/content/homeopathy.js.
// Gating: overview + first six remedies free; all remedies Kind+;
// situational guides and the home-kit worksheet Steady+.

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { hasTier, TIERS } from '../services/memberships.js';
import { HOMEOPATHY, REMEDY_NAMES, FREE_REMEDY_COUNT } from '../db/content/homeopathy.js';

const IMG = '/assets/images';

export async function renderHomeopathyPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const h = HOMEOPATHY[locale] || HOMEOPATHY.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
  const fullGuide = hasTier(user, TIERS.KIND);
  const steady = hasTier(user, TIERS.STEADY);

  const remedies = h.remedies.map((r, i) => ({ ...r, name: REMEDY_NAMES[i] }));
  const visible = fullGuide ? remedies : remedies.slice(0, FREE_REMEDY_COUNT);
  const lockedCount = remedies.length - visible.length;

  const card = (r, idx) => `
    <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
        <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">${r.source}</span>
        <span style="font-size:13px;color:var(--muted);font-weight:600;">${String(idx + 1).padStart(2, '0')}</span>
      </div>
      <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:6px 0 10px;"><em>${r.name}</em></h3>
      <p style="font-size:15px;line-height:1.6;color:var(--ink);margin:0 0 10px;">${r.keynote}</p>
      <p style="font-size:14px;line-height:1.55;color:var(--muted);margin:0 0 14px;"><strong style="color:var(--deep);">${h.pictureLabel}</strong> ${r.picture}</p>
      <div style="background:var(--cream);border-radius:14px;padding:12px 14px;border:1px solid var(--line);font-size:13px;line-height:1.5;color:var(--muted);">
        <strong style="color:var(--deep);">${h.noteLabel}</strong> ${r.note}
      </div>
    </article>`;

  const lockedBlock = lockedCount > 0 ? `
    <div class="card" style="margin-top:36px;background:var(--cream);border:1px dashed var(--deep);border-radius:var(--radius);padding:32px;text-align:center;">
      <h3 style="font-family:var(--serif);font-size:24px;margin:0 0 8px;color:var(--ink);">${h.lockedH(lockedCount)}</h3>
      <p style="color:var(--muted);margin:0 0 18px;">${h.lockedP}</p>
      <a class="btn" href="${prefix}/pricing">${h.seeMemberships}</a>
    </div>` : '';

  const guideCard = (g) => `
    <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;border:1px solid var(--line);">
      <h3 style="font-family:var(--serif);font-size:22px;margin:0 0 6px;color:var(--ink);">${g.title}</h3>
      <p style="color:var(--muted);font-size:14px;margin:0 0 14px;">${g.intro}</p>
      <strong style="font-size:13px;text-transform:uppercase;color:var(--deep);">${h.firstSteps}</strong>
      <ul style="font-size:14px;line-height:1.6;padding-left:18px;margin:6px 0 14px;">${g.steps.map(s => `<li>${s}</li>`).join('')}</ul>
      <strong style="font-size:13px;text-transform:uppercase;color:var(--deep);">${h.tradition}</strong>
      <p style="font-size:14px;line-height:1.6;margin:6px 0 14px;">${g.tradition}</p>
      <div style="border-top:1px solid var(--line);padding-top:12px;font-size:13px;line-height:1.5;color:var(--muted);">
        <strong style="color:var(--danger);">${h.redFlags}:</strong> ${g.flags.join(' &middot; ')}
      </div>
    </article>`;

  const guidesSection = steady ? `
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 320px), 1fr));gap:24px;">
        ${h.guides.map(guideCard).join('')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 320px), 1fr));gap:32px;align-items:center;margin-top:48px;">
        <img src="${IMG}/garden-soil.webp" alt="" loading="lazy" style="width:100%;border-radius:var(--radius);object-fit:cover;aspect-ratio:3/2;">
        <div class="prose">
          <h3 style="font-family:var(--serif);font-size:24px;">${h.worksheetH}</h3>
          <ol style="line-height:1.8;">${h.worksheet.map(w => `<li>${w}</li>`).join('')}</ol>
        </div>
      </div>` : `
      <div class="card" style="background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);padding:24px;text-align:center;">
        ${h.guidesLocked} <a href="${prefix}/pricing" style="text-decoration:underline;">${h.compare}</a>
      </div>`;

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 56px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 340px), 1fr));gap:40px;align-items:center;">
      <div>
        <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
          <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${h.crumb}
        </p>
        <h1 style="font-family:var(--serif);font-size:clamp(34px, 4.5vw, 50px);color:var(--ink);margin:0 0 16px;line-height:1.15;">
          ${h.h1a}<br><em>${h.h1b}</em>
        </h1>
        <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 0 20px;">${h.lead}</p>
        <div style="background:var(--paper);border-radius:18px;padding:16px 20px;border:1px solid var(--line);font-size:14px;color:var(--muted);">
          <strong style="color:var(--deep);">${h.positionLabel}</strong> ${h.position}
        </div>
      </div>
      <img src="${IMG}/tea-cups-journal.webp" alt="" style="width:100%;border-radius:var(--radius);box-shadow:var(--shadow);object-fit:cover;aspect-ratio:3/2;">
    </div>
  </section>

  <section class="section" style="padding:56px 0 24px;">
    <div class="container" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 340px), 1fr));gap:40px;align-items:start;">
      <div class="prose">
        <h2 style="font-family:var(--serif);">${h.originH}</h2>
        <p>${h.origin}</p>
        <ul>${h.principles.map(p => `<li>${p}</li>`).join('')}</ul>
        <h2 style="font-family:var(--serif);">${h.labelH}</h2>
        <p>${h.label}</p>
        <h2 style="font-family:var(--serif);">${h.loveH}</h2>
        <p>${h.love}</p>
      </div>
      <img src="${IMG}/healing-hands.webp" alt="" loading="lazy" style="width:100%;max-width:420px;justify-self:center;border-radius:var(--radius);box-shadow:var(--shadow);">
    </div>
  </section>

  <section class="section" style="padding:24px 0 56px;">
    <div class="container">
      <h2 style="font-family:var(--serif);text-align:center;margin-bottom:8px;">${h.listH}</h2>
      <p style="text-align:center;color:var(--muted);max-width:640px;margin:0 auto 32px;">${h.listLead}</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 300px), 1fr));gap:28px;">
        ${visible.map(card).join('')}
      </div>
      ${lockedBlock}
    </div>
  </section>

  <section class="section" style="padding:24px 0 56px;background:var(--cream);border-top:1px solid var(--line);">
    <div class="container" style="padding-top:32px;">
      <h2 style="font-family:var(--serif);text-align:center;margin-bottom:8px;">${h.guidesH}</h2>
      <p style="text-align:center;color:var(--muted);max-width:640px;margin:0 auto 28px;">${h.guidesLead}</p>
      ${guidesSection}
    </div>
  </section>

  <section class="section" style="padding:48px 0 64px;">
    <div class="container prose" style="max-width:820px;">
      <h2 style="font-family:var(--serif);">${h.helpH}</h2>
      <ul>${h.help.map(x => `<li>${x}</li>`).join('')}</ul>
      <p style="font-size:14px;color:var(--muted);">${h.helpLocal}</p>
    </div>
  </section>
  `;

  return renderLayout({
    title: h.metaTitle,
    description: h.metaDesc,
    path: '/homeopathy',
    locale,
    user,
    bodyContent
  });
}
