// src/views/pricing.js
// Membership tiers ($0 / $5 / $10 / $20) and the checkout hand-off

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';

export async function renderPricingPage(db, { locale = 'en', user = null, env = {} } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
  const currentTier = user?.tier || 'free';
  // Tiers are always shown; the switch only decides whether they are buyable,
  // so nobody hits a dead end mid-checkout.
  const membershipsEnabled = String(env.MEMBERSHIPS_ENABLED ?? 'true').toLowerCase() !== 'false';

  const openingSoon = {
    en: 'Opening soon', es: 'Muy pronto', 'pt-BR': 'Em breve'
  };
  const openingSoonNote = {
    en: 'Memberships are paused for a moment. The store is open now.',
    es: 'Las membresías están en pausa por un momento. La tienda ya está abierta.',
    'pt-BR': 'As assinaturas estão pausadas por um momento. A loja já está aberta.'
  };

  // One rule for every tier's call to action.
  const tierCta = (tier, price, cls) => {
    if (currentTier === tier) {
      return `<div style="text-align:center;font-weight:600;color:var(--deep);font-size:14px;padding:10px 0;">Current tier</div>`;
    }
    if (!membershipsEnabled) {
      return `<button type="button" disabled aria-disabled="true" class="btn ${cls}" style="opacity:.55;cursor:not-allowed;">${openingSoon[locale] || openingSoon.en}</button>`;
    }
    return `<a href="${({"kind":"https://buy.stripe.com/dRmdR8663c3ffvn1Uw0kE0d","steady":"https://buy.stripe.com/14AeVcamjd7jbf7eHi0kE0e","supported":"https://buy.stripe.com/7sY14m51Z9V7ab3bv60kE0f"})[tier] || ('/api/membership/subscribe?tier=' + tier)}" class="btn ${cls}" style="display:inline-block;width:100%;text-align:center;">Join for ${price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)}/mo</a>`;
  };

  const descriptions = {
    en: 'Simple, accessible membership options from free public education to our full community circle and course curriculum.',
    es: 'Opciones de membresía accesibles: desde contenidos públicos gratuitos hasta participación activa en el Círculo y cursos.',
    'pt-BR': 'Planos conscientes e acessíveis: da leitura gratuita à participação ativa no Círculo e cursos completos.'
  };
  const titles = {
    en: 'Membership Plans & Pricing — KindWell',
    es: 'Planes de membresía y precios — KindWell',
    'pt-BR': 'Planos de assinatura e valores — KindWell'
  };
  const bodyContent = `
  ${!membershipsEnabled ? `
  <div style="background:var(--mint);border-bottom:1px solid var(--line);padding:14px 0;">
    <div class="container" style="max-width:840px;text-align:center;font-size:14px;color:var(--deep);">
      ${openingSoonNote[locale] || openingSoonNote.en}
      <a href="${prefix}/store" style="text-decoration:underline;margin-left:6px;">Visit the store &rarr;</a>
    </div>
  </div>
  ` : ''}
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.pricing}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Choose what supports you today.
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${descriptions[locale] || descriptions.en}
      </p>
      <div style="background:var(--paper);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--muted);text-align:left;">
        <strong style="color:var(--deep);">Gentle commitment:</strong> Cancel or adjust your subscription anytime in your account settings with complete peace of mind. Individual counseling sessions are separate and not included in memberships.
      </div>
    </div>
  </section>

  <!-- Pricing Cards Grid -->
  <section class="section" style="padding:60px 0 80px;">
    <div class="container">
      <div class="grid grid-4" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:24px;align-items:stretch;">
        <!-- Free Tier -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span class="pill" style="background:var(--cream);color:var(--muted);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">Public Access</span>
            <h2 style="font-family:var(--serif);font-size:30px;color:var(--ink);margin:12px 0 4px;">Free</h2>
            <div style="font-size:28px;font-weight:700;color:var(--ink);margin-bottom:20px;">$0</div>
            <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ All public articles & guides</li>
              <li>✓ Core remedies library</li>
              <li>✓ Core grounding exercises</li>
              <li>✓ Verified provider directory</li>
              <li>✓ Store browsing</li>
            </ul>
          </div>
          ${currentTier === 'free' ? `
            <div style="text-align:center;font-weight:600;color:var(--deep);font-size:14px;padding:10px 0;">Current tier</div>
          ` : `
            <a class="btn outline small" href="${prefix}/account">Revert to Free</a>
          `}
        </article>

        <!-- Kind ($5) -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">Daily Anchor</span>
            <h2 style="font-family:var(--serif);font-size:30px;color:var(--ink);margin:12px 0 4px;">Kind</h2>
            <div style="font-size:28px;font-weight:700;color:var(--ink);margin-bottom:20px;">$5 <span style="font-size:14px;font-weight:400;color:var(--muted);">/ month</span></div>
            <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ Everything in Free</li>
              <li>✓ Daily morning affirmation</li>
              <li>✓ Daily contemplative reflection</li>
              <li>✓ Daily journal prompt</li>
              <li>✓ Saved favorites library</li>
              <li>✓ Monthly member wellness letter</li>
            </ul>
          </div>
          ${tierCta('kind', 5.00, 'outline small')}
        </article>

        <!-- Steady ($10) -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:2px solid var(--sage);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">Deeper Care</span>
            <h2 style="font-family:var(--serif);font-size:30px;color:var(--ink);margin:12px 0 4px;">Steady</h2>
            <div style="font-size:28px;font-weight:700;color:var(--ink);margin-bottom:20px;">$10 <span style="font-size:14px;font-weight:400;color:var(--muted);">/ month</span></div>
            <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ Everything in Kind</li>
              <li>✓ All reflective self-assessments</li>
              <li>✓ Full 12 somatic & emotion practices</li>
              <li>✓ Downloadable practice worksheets</li>
              <li>✓ Deeper Reiki & mineral education</li>
              <li>✓ Read-only Circle community access</li>
              <li>✓ Course introductory modules</li>
            </ul>
          </div>
          ${tierCta('steady', 10.00, 'small')}
        </article>

        <!-- Supported ($20) -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span class="pill" style="background:var(--lav);color:var(--lav-deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">Full Circle</span>
            <h2 style="font-family:var(--serif);font-size:30px;color:var(--ink);margin:12px 0 4px;">Supported</h2>
            <div style="font-size:28px;font-weight:700;color:var(--ink);margin-bottom:20px;">$20 <span style="font-size:14px;font-weight:400;color:var(--muted);">/ month</span></div>
            <ul style="list-style:none;padding:0;margin:0 0 28px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ Everything in Steady</li>
              <li>✓ Full KindWell Circle posting & replying</li>
              <li>✓ Complete course curriculum access</li>
              <li>✓ Course participation certificates</li>
            </ul>
          </div>
          ${tierCta('supported', 20.00, 'outline small')}
        </article>
      </div>
    </div>
  </section>

  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/pricing',
    locale,
    user,
    bodyContent
  });
}
