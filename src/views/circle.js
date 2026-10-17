// src/views/circle.js
// KindWell Circle community spaces, discussions, and respectful guidelines view

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { listCircleSpaces, getCircleSpaceBySlug, listThreads, getThreadWithPosts } from '../services/circle.js';
import { canPostInCircle, canReadCircle } from '../services/memberships.js';
import { markdownToHtml } from './markdown.js';

export async function renderCirclePage(db, {
  spaceSlug = 'gentle-check-in',
  threadId = null,
  locale = 'en',
  user = null,
  reportSubmitted = false
} = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const spaces = await listCircleSpaces(db, locale);
  const currentSpace = (await getCircleSpaceBySlug(db, spaceSlug, locale)) || spaces[0];

  let activeThread = null;
  let threads = [];

  if (threadId) {
    activeThread = await getThreadWithPosts(db, threadId);
  } else if (currentSpace) {
    threads = await listThreads(db, currentSpace.id, { locale });
  }

  const isPoster = canPostInCircle(user);
  const isReader = canReadCircle(user);
  // Reading the Circle is a Steady benefit: below that, visitors see which
  // conversations exist (titles) but not what members wrote.
  const readLocked = !isReader;
  if (readLocked) {
    activeThread = null;
    threads = threads.map((th) => ({ ...th, body: '' }));
  }

  const titles = {
    en: 'The KindWell Circle — Peer Wellness & Gentle Community',
    es: 'El Círculo KindWell — Comunidad y escucha serena',
    'pt-BR': 'O Círculo KindWell — Comunidade serena e acolhimento'
  };

  const descriptions = {
    en: 'Four quiet, respectful community spaces for sharing honest reflections, small wins, and supportive presence.',
    es: 'Cuatro salas comunitarias tranquilas para compartir notas sinceras, pequeñas victorias y presencia atenta.',
    'pt-BR': 'Quatro espaços comunitários acolhedores para desabafos sinceros, pequenas vitórias e apoio mútuo.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 50px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.circle}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 14px;line-height:1.2;">
        The KindWell Circle.
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 20px;">
        ${descriptions[locale] || descriptions.en}
      </p>
    </div>
  </section>

  <!-- Community Guidelines Strip -->
  <section style="background:var(--paper);border-bottom:1px solid var(--line);padding:20px 0;font-size:14px;">
    <div class="container" style="display:flex;gap:24px;justify-content:center;flex-wrap:wrap;color:var(--muted);">
      <span>✨ <strong>Speak from experience</strong></span>
      <span>👂 <strong>Ask before giving advice</strong></span>
      <span>🌿 <strong>No medical diagnosis</strong></span>
      <span>🔒 <strong>Protect everyone’s privacy</strong></span>
    </div>
  </section>

  <!-- Circle Layout: Spaces Sidebar + Thread Feed -->
  <section class="section" style="padding:48px 0 80px;">
    <div class="container circle-layout" style="align-items:start;">
      <!-- Left Sidebar: Spaces -->
      <aside class="circle-sidebar" style="background:var(--paper);border-radius:var(--radius);padding:24px;border:1px solid var(--line);box-shadow:var(--shadow);">
        <h3 style="font-family:var(--serif);font-size:18px;color:var(--ink);margin:0 0 16px;">Community Spaces</h3>
        <ul style="list-style:none;padding:0;margin:0;">
          ${spaces.map(s => {
            const isActive = currentSpace && currentSpace.id === s.id && !threadId;
            return `
              <li style="margin-bottom:8px;">
                <a href="${prefix}/circle/${s.slug}" style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;font-size:15px;${isActive ? 'background:var(--mint);color:var(--deep);font-weight:600;' : 'color:var(--ink);'}">
                  <span>${s.icon || '🌿'}</span>
                  <span>${s.name}</span>
                </a>
              </li>
            `;
          }).join('')}
        </ul>

        <div style="border-top:1px solid var(--line);padding-top:20px;margin-top:24px;font-size:13px;color:var(--muted);line-height:1.6;">
          <strong style="color:var(--ink);display:block;margin-bottom:6px;">Circle Access</strong>
          Steady members ($10/mo) have read-only access. Supported members ($20/mo) can post and reply.
          ${!user ? `
            <div style="margin-top:12px;">
              <a href="${prefix}/account" style="color:var(--deep);font-weight:600;text-decoration:underline;">Sign in</a> to participate.
            </div>
          ` : ''}
        </div>
      </aside>

      <!-- Right Main: Active Thread or Feed -->
      <main class="circle-content">
        ${activeThread ? `
          <!-- Individual Thread View -->
          <div style="margin-bottom:24px;">
            <a href="${prefix}/circle/${currentSpace.slug}" style="color:var(--deep);font-weight:600;font-size:14px;">&larr; Back to ${currentSpace.name}</a>
          </div>

          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);margin-bottom:32px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:13px;color:var(--muted);">
              <strong>${escapeHtml(activeThread.author_name)}</strong>
              <span class="pill" style="background:var(--cream);color:var(--deep);font-size:11px;padding:2px 8px;border-radius:10px;text-transform:uppercase;">${activeThread.author_tier}</span>
              <span>&middot;</span>
              <span>${new Date(activeThread.created_at).toLocaleDateString(locale)}</span>
            </div>
            <h1 style="font-family:var(--serif);font-size:28px;color:var(--ink);margin:0 0 16px;line-height:1.25;">
              ${escapeHtml(activeThread.title)}
            </h1>
            <div style="font-size:16px;line-height:1.7;color:var(--ink);margin:0 0 24px;">${markdownToHtml(activeThread.body)}</div>
            <div style="border-top:1px solid var(--line);padding-top:12px;display:flex;justify-content:flex-end;gap:8px;">
              <button onclick="reportModal('${activeThread.id}')" style="background:none;border:none;color:var(--muted);font-size:12px;cursor:pointer;">Report post</button>
              ${reportSubmitted ? '<span style="color:var(--mint);font-size:12px;font-weight:600;">Report submitted — thank you.</span>' : ''}
            </div>
          </article>

          <!-- Replies List -->
          <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 20px;">
            Replies (${activeThread.posts.length})
          </h3>

          <div style="display:flex;flex-direction:column;gap:18px;margin-bottom:36px;">
            ${activeThread.posts.map(p => `
              <div style="background:var(--paper);border-radius:18px;padding:24px;border:1px solid var(--line);">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:13px;color:var(--muted);">
                  <strong>${escapeHtml(p.author_name)}</strong>
                  <span class="pill" style="background:var(--cream);color:var(--deep);font-size:11px;padding:2px 8px;border-radius:10px;text-transform:uppercase;">${p.author_tier}</span>
                  <span>&middot;</span>
                  <span>${new Date(p.created_at).toLocaleDateString(locale)}</span>
                </div>
                <p style="font-size:15px;line-height:1.6;color:var(--ink);margin:0;white-space:pre-wrap;">${escapeHtml(p.body)}</p>
              </div>
            `).join('')}
            ${activeThread.posts.length === 0 ? `<p style="font-size:15px;color:var(--muted);">No replies yet. Be the first to offer gentle presence.</p>` : ''}
          </div>

          <!-- Reply Composer -->
          ${isPoster ? `
            <div style="background:var(--paper);border-radius:var(--radius);padding:32px;border:1px solid var(--line);box-shadow:var(--shadow);">
              <h4 style="font-family:var(--serif);font-size:20px;color:var(--ink);margin:0 0 12px;">Leave a reply</h4>
              <form method="POST" action="/api/circle/reply" style="display:flex;flex-direction:column;gap:14px;">
                <input type="hidden" name="threadId" value="${activeThread.id}">
                <textarea name="body" rows="4" placeholder="Share a kind reflection or quiet support..." required style="width:100%;border-radius:12px;border:1px solid var(--line);padding:14px;font-family:var(--sans);font-size:15px;background:var(--cream);"></textarea>
                <button type="submit" class="btn small" style="align-self:flex-start;">Post reply</button>
              </form>
            </div>
          ` : `
            <div style="background:var(--cream);border-radius:18px;padding:24px;border:1px solid var(--line);text-align:center;">
              <p style="margin:0 0 12px;font-size:15px;color:var(--ink);">
                Posting and replying in the KindWell Circle is available to Supported members ($10/mo).
              </p>
              <a class="btn small" href="${prefix}/pricing">Upgrade to Supported ($20/mo)</a>
            </div>
          `}
        ` : `
          <!-- Space Threads Feed -->
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;flex-wrap:wrap;gap:16px;">
            <div>
              <h2 style="font-family:var(--serif);font-size:28px;color:var(--ink);margin:0 0 4px;">
                ${currentSpace?.name || 'Community'}
              </h2>
              <p style="font-size:15px;color:var(--muted);margin:0;">
                ${currentSpace?.description || ''}
              </p>
            </div>

            ${isPoster ? `
              <button onclick="document.getElementById('thread-composer').style.display = 'block';" class="btn small">
                + New post
              </button>
            ` : ''}
          </div>

          <!-- Thread Composer Modal/Box -->
          ${isPoster ? `
            <div id="thread-composer" style="display:none;background:var(--paper);border-radius:var(--radius);padding:32px;border:2px solid var(--sage);box-shadow:var(--shadow);margin-bottom:32px;">
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 14px;">Create a post in ${currentSpace.name}</h3>
              <form method="POST" action="/api/circle/thread" style="display:flex;flex-direction:column;gap:14px;">
                <input type="hidden" name="spaceId" value="${currentSpace.id}">
                <input type="hidden" name="spaceSlug" value="${currentSpace.slug}">
                <input type="hidden" name="locale" value="${locale}">
                <input type="text" name="title" placeholder="Title of your reflection..." required style="width:100%;border-radius:10px;border:1px solid var(--line);padding:12px;font-size:16px;background:var(--cream);">
                <textarea name="body" rows="5" placeholder="Share what is on your mind..." required style="width:100%;border-radius:10px;border:1px solid var(--line);padding:12px;font-family:var(--sans);font-size:15px;background:var(--cream);"></textarea>
                <div style="display:flex;gap:12px;justify-content:flex-end;">
                  <button type="button" onclick="document.getElementById('thread-composer').style.display = 'none';" class="btn text small">Cancel</button>
                  <button type="submit" class="btn small">Publish to Circle</button>
                </div>
              </form>
            </div>
          ` : ''}

          <!-- Threads List -->
          <div style="display:flex;flex-direction:column;gap:20px;">
            ${readLocked ? `
            <div style="background:var(--cream);border-radius:14px;padding:18px 20px;border:1px solid var(--line);margin-bottom:16px;">
              <strong>Reading the Circle is part of the Steady membership ($10/mo).</strong>
              <span style="color:var(--muted);"> Supported ($20/mo) members can also post and reply.</span>
              <a class="btn small" style="margin-left:8px;" href="${prefix}/pricing">See memberships</a>
            </div>` : ''}
            ${threads.map(th => `
              <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px 32px;box-shadow:var(--shadow);border:1px solid var(--line);">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;font-size:13px;color:var(--muted);">
                  <strong>${escapeHtml(th.author_name)}</strong>
                  <span class="pill" style="background:var(--cream);color:var(--deep);font-size:11px;padding:2px 8px;border-radius:10px;text-transform:uppercase;">${th.author_tier}</span>
                  <span>&middot;</span>
                  <span>${new Date(th.created_at).toLocaleDateString(locale)}</span>
                </div>
                <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 10px;line-height:1.3;">
                  <a href="${prefix}/circle/${currentSpace.slug}/${th.id}" style="color:var(--ink);">
                    ${escapeHtml(th.title)}
                  </a>
                </h3>
                <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
                  ${escapeHtml(th.body.replace(/[#*_>`-]/g, '').slice(0, 180))}${th.body.length > 180 ? '...' : ''}
                </p>
                <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;">
                  <span style="color:var(--deep);font-weight:600;">${th.reply_count} replies</span>
                  <a href="${prefix}/circle/${currentSpace.slug}/${th.id}" style="color:var(--deep);font-weight:600;">Read discussion &rarr;</a>
                </div>
              </article>
            `).join('')}

            ${threads.length === 0 ? `
              <div style="background:var(--paper);border-radius:var(--radius);padding:48px;text-align:center;border:1px solid var(--line);box-shadow:var(--shadow);">
                <p style="font-size:16px;color:var(--muted);margin:0 0 16px;">
                  No reflections have been shared in this space yet.
                </p>
                ${isPoster ? `
                  <button onclick="document.getElementById('thread-composer').style.display = 'block';" class="btn small">
                    Start the first conversation
                  </button>
                ` : `
                  <p style="font-size:14px;color:var(--muted);">Supported members ($10/mo) can start discussions in this space.</p>
                `}
              </div>
            ` : ''}
          </div>
        `}
      </main>
    </div>
  </section>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: `/circle/${currentSpace?.slug || ''}`,
    locale,
    user,
    bodyContent
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
