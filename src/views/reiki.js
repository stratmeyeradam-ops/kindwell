// src/views/reiki.js
// Reiki foundations, Usui traditions, self-practice rituals, and ethical boundaries

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { markdownToHtml } from './markdown.js';

export async function renderReikiPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const articles = await db.prepare(`
    SELECT id, slug, title, summary, content
    FROM reiki_articles
    WHERE locale = ?
    ORDER BY sort_order ASC
  `).bind(locale).all();

  const titles = {
    en: 'Reiki Traditions & Quiet Presence — KindWell',
    es: 'Tradición y práctica de Reiki — KindWell',
    'pt-BR': 'Tradição e práticas de Reiki — KindWell'
  };

  const descriptions = {
    en: 'An educational exploration of Usui Reiki: history, the five principles, what to expect in a session, daily self-practice, and clear ethical boundaries.',
    es: 'Aproximación educativa al Usui Reiki: orígenes históricos, los cinco principios diarios, qué esperar en una sesión y límites éticos de cuidado.',
    'pt-BR': 'Guia reflexivo e educativo sobre o Reiki tradicional: história, princípios diários, autoprática e respeito aos limites da saúde.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.reiki}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Reiki, presence, and quiet care.
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${descriptions[locale] || descriptions.en}
      </p>
      <div style="background:var(--paper);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--muted);text-align:left;">
        <strong style="color:var(--deep);">Complementary wellness:</strong> Reiki is a contemplative art of presence and relaxation. It does not diagnose, treat, or cure medical illness, and is never a substitute for licensed psychiatric or medical care.
      </div>
    </div>
  </section>

  <!-- Articles & Guides -->
  <section class="section" style="padding:60px 0;">
    <div class="container" style="max-width:860px;">
      ${articles.results.map(a => `
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);margin-bottom:40px;">
          <h2 style="font-family:var(--serif);font-size:28px;color:var(--ink);margin:0 0 12px;line-height:1.25;">
            ${a.title}
          </h2>
          <p style="font-size:16px;font-weight:500;color:var(--deep);margin:0 0 24px;line-height:1.5;">
            ${a.summary}
          </p>
          <div style="font-size:15px;line-height:1.7;color:var(--ink);" class="article-body">
            ${markdownToHtml(a.content)}
          </div>
        </article>
      `).join('')}

      <!-- Finding a Respectful Practitioner -->
      <div style="background:var(--cream);border-radius:var(--radius);padding:36px;border:1px solid var(--line);margin-top:20px;">
        <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 12px;">What to look for in a Reiki practitioner</h3>
        <ul style="margin:0;padding-left:20px;font-size:15px;line-height:1.7;color:var(--muted);">
          <li><strong>Clear consent:</strong> The practitioner always asks for your consent before touch, and respects hands-off / near-body preferences without hesitation.</li>
          <li><strong>Zero medical claims:</strong> Ethical practitioners never guarantee physical cures, never diagnose illness, and never instruct you to cease medication.</li>
          <li><strong>Emotional safety:</strong> You should feel grounded and free to open your eyes, adjust your posture, or pause the session at any moment.</li>
        </ul>
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/reiki',
    locale,
    user,
    bodyContent
  });
}

