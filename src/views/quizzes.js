// src/views/quizzes.js
// Reflective self-assessments catalog, runner, and result view

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { listQuizzes, getQuizBySlug } from '../services/quizzes.js';
import { canAccessQuizzes } from '../services/memberships.js';

export async function renderQuizzesPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const quizzes = await listQuizzes(db, locale);

  const titles = {
    en: 'Gentle Self-Inquiry & Reflections — KindWell',
    es: 'Reflexiones y pausas de autoconocimiento — KindWell',
    'pt-BR': 'Reflexões e pausas de autopercepção — KindWell'
  };

  const descriptions = {
    en: 'Reflective self-assessments designed to help you listen to your body and mind without labels, scores, or judgment.',
    es: 'Cuestionarios reflexivos para entender qué necesitas hoy, sin diagnósticos clínicos ni clasificaciones rígidas.',
    'pt-BR': 'Reflexões cuidadosas para escutar seu corpo e sua mente, sem diagnósticos clínicos ou rótulos.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:800px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.quizzes}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Listen to what is here,<br><em>without judgment.</em>
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${descriptions[locale] || descriptions.en}
      </p>
      <div style="background:var(--paper);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--muted);text-align:left;">
        <strong style="color:var(--deep);">Educational self-inquiry:</strong> These reflections are contemplative exercises, not diagnostic tests. They do not evaluate depression, anxiety, or medical conditions.
      </div>
    </div>
  </section>

  <!-- Quizzes Grid -->
  <section class="section" style="padding:60px 0;">
    <div class="container">
      <div class="grid grid-3" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:32px;">
        ${quizzes.map(q => `
          <article class="card quiz-card" style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;margin-bottom:12px;display:inline-block;">
                ${q.tier_required === 'free' ? 'Free' : 'Included in Steady ($10/mo)'}
              </span>
              <h2 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 8px;line-height:1.25;">${q.title}</h2>
              <p style="font-size:14px;font-weight:600;color:var(--deep);margin:0 0 14px;">${q.subtitle}</p>
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 24px;">${q.description}</p>
            </div>
            <a class="btn small" href="${prefix}/quiz/${q.slug}" style="align-self:flex-start;">
              Start reflection &rarr;
            </a>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/quiz',
    locale,
    user,
    bodyContent
  });
}

export async function renderQuizRunner(db, { slug, locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const quiz = await getQuizBySlug(db, slug, locale);
  if (!quiz) {
    return renderQuizzesPage(db, { locale, user });
  }
  const quizLocked = quiz.tier_required !== 'free' && !canAccessQuizzes(user);

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:760px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> /
        <a href="${prefix}/quiz" style="text-decoration:underline;">${t.nav.quizzes}</a> /
        ${quiz.title}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(32px, 4vw, 42px);color:var(--ink);margin:0 0 12px;line-height:1.2;">
        ${quiz.title}
      </h1>
      <p class="lead" style="font-size:17px;line-height:1.6;color:var(--muted);margin:0 auto 20px;">
        ${quiz.description}
      </p>
    </div>
  </section>

  <section class="section" style="padding:60px 0;">
    <div class="container" style="max-width:760px;">
      ${quizLocked ? `
      <div style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);text-align:center;">
        <h2 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 12px;">Reflections are part of the Steady membership</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 20px;">Steady ($10/mo) opens every reflection, the full practice library and every course introduction.</p>
        <a class="btn" href="${prefix}/pricing">See memberships</a>
      </div>
      ` : `
      <form method="POST" action="/api/quiz/evaluate" style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);">
        <input type="hidden" name="quizId" value="${quiz.id}">
        <input type="hidden" name="locale" value="${locale}">

        ${quiz.questions.length > 0 ? quiz.questions.map((q, idx) => `
          <div style="margin-bottom:36px;padding-bottom:28px;border-bottom:1px solid var(--line);">
            <div style="font-size:13px;font-weight:700;color:var(--deep);text-transform:uppercase;margin-bottom:8px;">
              Question 0${idx + 1} of 0${quiz.questions.length}
            </div>
            <h3 style="font-family:var(--serif);font-size:20px;color:var(--ink);margin:0 0 18px;line-height:1.35;">
              ${q.question}
            </h3>
            <div style="display:flex;flex-direction:column;gap:12px;">
              ${q.options.map(opt => `
                <label style="display:flex;align-items:flex-start;gap:12px;padding:14px 18px;border-radius:12px;border:1px solid var(--line);background:var(--cream);cursor:pointer;">
                  <input type="radio" name="answer_${q.id}" value="${opt.tag}" required style="margin-top:4px;">
                  <span style="font-size:15px;color:var(--ink);line-height:1.5;">${opt.label}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `).join('') : `
          <p style="font-size:16px;color:var(--muted);text-align:center;padding:20px 0;">
            This reflective exercise is an open journal contemplation. Take three slow breaths, notice what your body is experiencing, and reflect on what would bring you relief today.
          </p>
        `}

        <div style="text-align:center;margin-top:28px;">
          <button type="submit" class="btn" style="padding:14px 32px;font-size:16px;">
            Complete this reflection &rarr;
          </button>
        </div>
      </form>
      `}
    </div>
  </section>
  `;

  return renderLayout({
    title: `${quiz.title} — KindWell`,
    description: quiz.description,
    path: `/quiz/${quiz.slug}`,
    locale,
    user,
    bodyContent
  });
}

export function renderQuizResult({ evaluation, locale = 'en', user = null }) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:800px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> /
        <a href="${prefix}/quiz" style="text-decoration:underline;">${t.nav.quizzes}</a> /
        Reflection Results
      </p>
      <span class="pill" style="background:var(--mint);color:var(--deep);font-size:13px;font-weight:700;padding:6px 18px;border-radius:20px;margin-bottom:16px;display:inline-block;">
        Your Reflection
      </span>
      <h1 style="font-family:var(--serif);font-size:clamp(32px, 4.5vw, 44px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        ${evaluation.theme}
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.7;color:var(--muted);margin:0 auto 24px;">
        ${evaluation.reflection}
      </p>
    </div>
  </section>

  <!-- Suggested Next Steps -->
  <section class="section" style="padding:60px 0;">
    <div class="container" style="max-width:800px;">
      <div style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);margin-bottom:32px;">
        ${(evaluation.recommendations.tips || []).length ? `
        <h2 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 16px;">What might help</h2>
        <ul style="padding-left:20px;margin:0 0 28px;line-height:1.7;">
          ${evaluation.recommendations.tips.map((tip) => `<li style="margin-bottom:8px;">${tip}</li>`).join('')}
        </ul>` : ''}
        <h2 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 16px;">Recommended practices for today</h2>
        <p style="font-size:15px;color:var(--muted);margin-bottom:20px;">
          Try one gentle somatic exercise right now to give your system immediate support:
        </p>
        <div style="display:flex;gap:12px;flex-direction:column;margin-bottom:28px;">
          ${evaluation.recommendations.practices.map(p => `
            <a href="${prefix}/practices#${p}" style="background:var(--cream);border-radius:14px;padding:16px 20px;border:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;font-weight:600;color:var(--deep);">
              <span>Practice: ${p.replace(/-/g, ' ')}</span>
              <span>&rarr;</span>
            </a>
          `).join('')}
        </div>

        ${(evaluation.recommendations.remedies || []).length ? `<h3 style="font-family:var(--serif);font-size:20px;color:var(--ink);margin:0 0 12px;">Complementary remedies to explore</h3>` : ''}
        <div style="display:flex;gap:12px;flex-direction:column;">
          ${evaluation.recommendations.remedies.map(r => `
            <a href="${prefix}/remedies#${r}" style="background:var(--cream);border-radius:14px;padding:16px 20px;border:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;font-weight:600;color:var(--ink);">
              <span>Remedy guide: ${r.replace(/-/g, ' ')}</span>
              <span>&rarr;</span>
            </a>
          `).join('')}
        </div>
      </div>

      <div style="text-align:center;">
        <a class="btn text" href="${prefix}/quiz">&larr; Return to all reflections</a>
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: `${evaluation.theme} — KindWell Reflection`,
    description: evaluation.reflection.slice(0, 150) + '...',
    path: '/quiz/results',
    locale,
    user,
    bodyContent
  });
}
