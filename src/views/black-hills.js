// src/views/black-hills.js
// Black Hills well-being: seasonal living, places to practice, a forest
// practice, safety, and local support. Trilingual text lives in
// src/db/content/black-hills.js.
// Gating: overview, forest practice, one practice per season, and two places
// are free; full seasonal rhythms and all places are Kind+.

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { hasTier, TIERS } from '../services/memberships.js';
import { BLACK_HILLS, PLACE_NAMES, SEASON_ICONS, FREE_PLACE_COUNT } from '../db/content/black-hills.js';

const IMG = '/assets/images';

export async function renderBlackHillsPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const b = BLACK_HILLS[locale] || BLACK_HILLS.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
  const member = hasTier(user, TIERS.KIND);

  const places = b.places.map((p, i) => ({ ...p, name: PLACE_NAMES[i] }));

  const seasonCard = (s, i) => `
    <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
      <div style="font-size:28px;" aria-hidden="true">${SEASON_ICONS[i]}</div>
      <h3 style="font-family:var(--serif);font-size:24px;margin:6px 0 2px;color:var(--ink);">${s.name}</h3>
      <p style="font-size:13px;color:var(--muted);margin:0 0 12px;font-weight:600;">${s.months}</p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 12px;">${s.feel}</p>
      ${member ? `
      <ul style="font-size:14px;line-height:1.6;padding-left:18px;margin:0 0 12px;">${s.practices.map(p => `<li>${p}</li>`).join('')}</ul>
      <div style="background:var(--cream);border-radius:14px;padding:12px 14px;border:1px solid var(--line);font-size:13px;line-height:1.5;color:var(--muted);"><strong style="color:var(--deep);">${b.careLabel}</strong> ${s.care}</div>`
      : `<p style="font-size:14px;line-height:1.6;margin:0;"><strong style="color:var(--deep);">${b.tryLabel}</strong> ${s.practices[0]}</p>`}
    </article>`;

  const placeCard = (p) => `
    <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:24px;border:1px solid var(--line);">
      <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">${p.area}</span>
      <h3 style="font-family:var(--serif);font-size:21px;margin:10px 0 8px;color:var(--ink);">${p.name}</h3>
      <p style="font-size:14px;line-height:1.6;margin:0 0 10px;">${p.why}</p>
      <p style="font-size:14px;line-height:1.6;margin:0;color:var(--muted);"><strong style="color:var(--deep);">${b.practiceLabel}</strong> ${p.practice}</p>
    </article>`;

  const shown = member ? places : places.slice(0, FREE_PLACE_COUNT);
  const locked = places.length - shown.length;

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 56px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 340px), 1fr));gap:40px;align-items:center;">
      <div>
        <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
          <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${b.crumb}
        </p>
        <h1 style="font-family:var(--serif);font-size:clamp(34px, 4.5vw, 50px);color:var(--ink);margin:0 0 16px;line-height:1.15;">
          ${b.h1a}<br><em>${b.h1b}</em>
        </h1>
        <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0;">${b.lead}</p>
      </div>
      <img src="${IMG}/hills-well-path.webp" alt="" style="width:100%;border-radius:var(--radius);box-shadow:var(--shadow);object-fit:cover;aspect-ratio:3/2;">
    </div>
  </section>

  <section class="section" style="padding:56px 0 24px;">
    <div class="container" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 340px), 1fr));gap:40px;align-items:center;">
      <div class="prose">
        <h2 style="font-family:var(--serif);">${b.guestH}</h2>
        <p>${b.guest}</p>
        <h2 style="font-family:var(--serif);">${b.forestH}</h2>
        <ol>${b.forest.map(f => `<li>${f}</li>`).join('')}</ol>
      </div>
      <img src="${IMG}/forest-path.webp" alt="" loading="lazy" style="width:100%;border-radius:var(--radius);box-shadow:var(--shadow);object-fit:cover;aspect-ratio:3/2;">
    </div>
  </section>

  <section class="section" style="padding:24px 0 48px;">
    <div class="container">
      <h2 style="font-family:var(--serif);text-align:center;margin-bottom:28px;">${b.seasonsH}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 260px), 1fr));gap:24px;">
        ${b.seasons.map(seasonCard).join('')}
      </div>
    </div>
  </section>

  <section class="section" style="padding:0 0 24px;">
    <div class="container">
      <img src="${IMG}/pine-river-valley.webp" alt="" loading="lazy" style="width:100%;max-height:420px;object-fit:cover;border-radius:var(--radius);">
    </div>
  </section>

  <section class="section" style="padding:24px 0 48px;">
    <div class="container">
      <h2 style="font-family:var(--serif);text-align:center;margin-bottom:8px;">${b.placesH}</h2>
      <p style="text-align:center;color:var(--muted);max-width:640px;margin:0 auto 28px;">${b.placesLead}</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 280px), 1fr));gap:24px;">
        ${shown.map(placeCard).join('')}
      </div>
      ${locked > 0 ? `
      <div class="card" style="margin-top:28px;background:var(--cream);border:1px dashed var(--deep);border-radius:var(--radius);padding:28px;text-align:center;">
        <h3 style="font-family:var(--serif);font-size:22px;margin:0 0 8px;">${b.lockedH(locked)}</h3>
        <p style="color:var(--muted);margin:0 0 16px;">${b.lockedP}</p>
        <a class="btn" href="${prefix}/pricing">${b.seeMemberships}</a>
      </div>` : ''}
    </div>
  </section>

  <section class="section" style="padding:0 0 64px;">
    <div class="container prose" style="max-width:820px;">
      <h2 style="font-family:var(--serif);">${b.safetyH}</h2>
      <ul>${b.safety.map(s => `<li>${s}</li>`).join('')}</ul>
      <h2 style="font-family:var(--serif);">${b.supportH}</h2>
      <ul>${b.support.map(s => `<li>${s}</li>`).join('')}</ul>
      <p>${b.circleCta.replace('{circle}', `${prefix}/circle`)}</p>
    </div>
  </section>
  `;

  return renderLayout({
    title: b.metaTitle,
    description: b.metaDesc,
    path: '/black-hills',
    locale,
    user,
    bodyContent
  });
}
