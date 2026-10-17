// src/views/home.js
// Homepage view rendering all 12 prioritized content areas in cohesive Generation 2 editorial style

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';

export async function renderHomePage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const localFeature = {
    en: { eyebrow: 'Rooted in the Black Hills', bhTitle: 'Well-being with the land and the seasons', bhText: 'Places to slow down, a ten-minute forest practice, and how to live well through a Black Hills year.', bhCta: 'Explore the Black Hills →', hoTitle: 'Homeopathy, explained honestly', hoText: 'Twenty classic remedies of the tradition, how to read a label, and when to skip the cupboard and get care.', hoCta: 'Read the guide →' },
    es: { eyebrow: 'Con raíces en las Black Hills', bhTitle: 'Bienestar con la tierra y las estaciones', bhText: 'Lugares para bajar el ritmo, una práctica de diez minutos en el bosque y cómo vivir bien un año en las Black Hills.', bhCta: 'Explorar las Black Hills →', hoTitle: 'La homeopatía, explicada con honestidad', hoText: 'Veinte remedios clásicos de la tradición, cómo leer una etiqueta y cuándo dejar la alacena y buscar atención.', hoCta: 'Leer la guía →' },
    'pt-BR': { eyebrow: 'Raízes nas Black Hills', bhTitle: 'Bem-estar com a terra e as estações', bhText: 'Lugares para desacelerar, uma prática de dez minutos na floresta e como viver bem um ano nas Black Hills.', bhCta: 'Conhecer as Black Hills →', hoTitle: 'Homeopatia, explicada com honestidade', hoText: 'Vinte remédios clássicos da tradição, como ler um rótulo e quando deixar o armário de lado e buscar atendimento.', hoCta: 'Ler o guia →' }
  }[locale] || null;
  const lf = localFeature;
  // 1. Fetch Today's Affirmation
  const todayStr = new Date().toISOString().split('T')[0];
  let todayAff = await db.prepare(`
    SELECT affirmation, reflection, journal_prompt
    FROM affirmations
    WHERE date = ? AND locale = ?
  `).bind(todayStr, locale).first();

  if (!todayAff) {
    // Fallback to latest affirmation for this locale
    todayAff = await db.prepare(`
      SELECT affirmation, reflection, journal_prompt
      FROM affirmations
      WHERE locale = ?
      ORDER BY date DESC LIMIT 1
    `).bind(locale).first();
  }

  // 2. Fetch Featured Practices (first 3)
  const practices = await db.prepare(`
    SELECT p.id, p.category, p.duration_minutes, p.slug,
           pt.title, pt.subtitle, pt.description
    FROM practices p
    JOIN practice_translations pt ON p.id = pt.practice_id AND pt.locale = ?
    ORDER BY p.is_premium ASC, p.duration_minutes ASC
    LIMIT 3
  `).bind(locale).all();

  // 3. Fetch Featured Remedies (first 3)
  const remedies = await db.prepare(`
    SELECT r.id, r.category, r.slug,
           rt.title, rt.summary
    FROM remedies r
    JOIN remedy_translations rt ON r.id = rt.remedy_id AND rt.locale = ?
    LIMIT 3
  `).bind(locale).all();

  // 4. Fetch Courses (3)
  const courses = await db.prepare(`
    SELECT c.id, c.slug, c.level, c.estimated_hours,
           ct.title, ct.subtitle, ct.description
    FROM courses c
    JOIN course_translations ct ON c.id = ct.course_id AND ct.locale = ?
    LIMIT 3
  `).bind(locale).all();

  const bodyContent = `
  <!-- 1. Hero Section -->
  <section class="section hero" style="padding-top:40px;padding-bottom:60px;">
    <div class="container grid grid-2" style="align-items:center;gap:48px;">
      <div>
        <p class="eyebrow" style="color:var(--deep);font-weight:600;letter-spacing:0.05em;text-transform:uppercase;font-size:13px;margin-bottom:12px;">
          ${t.slogan}
        </p>
        <h1 style="font-family:var(--serif);font-size:clamp(40px, 5vw, 56px);line-height:1.15;color:var(--ink);margin:0 0 20px;">
          A steadier place<br><em>to land.</em>
        </h1>
        <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin-bottom:28px;">
          Practical emotional wellness, somatic grounding, herbal wisdom, and contemplative spiritual care. No forced positivity. No pretending you have to solve everything today.
        </p>
        <div style="display:flex;gap:14px;flex-wrap:wrap;">
          <a class="btn" href="${prefix}/practices">${t.home.tryGrounding}</a>
          <a class="btn text" href="${prefix}/pricing">${t.home.viewTiers}</a>
        </div>
      </div>
      <div class="hero-visual" style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);">
        <img src="/assets/kindwell-hero.webp" alt="KindWell gentle botanical presence" width="1200" height="800" style="width:100%;height:auto;display:block;">
      </div>
    </div>
  </section>

  <!-- 2. Today's KindWell (Affirmation & Reflection) -->
  <section class="section soft-band" style="background:var(--paper);border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:60px 0;">
    <div class="container" style="max-width:860px;text-align:center;">
      <span class="pill" style="display:inline-block;background:var(--mint);color:var(--deep);padding:6px 16px;border-radius:50px;font-size:13px;font-weight:600;margin-bottom:20px;">
        ${t.home.todayBadge}
      </span>
      <h2 style="font-family:var(--serif);font-size:clamp(28px, 4vw, 38px);color:var(--ink);margin:0 0 16px;line-height:1.25;">
        &ldquo;${todayAff?.affirmation || 'You do not have to solve everything today.'}&rdquo;
      </h2>
      <p style="font-size:18px;line-height:1.7;color:var(--muted);margin:0 auto 24px;max-width:720px;">
        ${todayAff?.reflection || 'Today only asks you to live today. Put down the burden of having the next ten years figured out.'}
      </p>
      ${todayAff?.journal_prompt ? `
        <div style="background:var(--cream);border-radius:18px;padding:18px 24px;display:inline-block;margin-top:8px;border:1px solid var(--line);text-align:left;">
          <strong style="color:var(--deep);font-size:14px;display:block;margin-bottom:4px;">Reflection prompt:</strong>
          <span style="font-size:15px;color:var(--ink);">${todayAff.journal_prompt}</span>
        </div>
      ` : ''}
    </div>
  </section>

  <!-- 3. Somatic Practices Library -->
  <section class="section" style="padding:80px 0;">
    <div class="container">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px;flex-wrap:wrap;gap:20px;">
        <div>
          <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
            ${t.home.practicesEyebrow}
          </p>
          <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0;">
            ${t.home.practicesTitle}
          </h2>
        </div>
        <a class="btn text" href="${prefix}/practices" style="font-weight:600;">${t.home.viewAllPractices}</a>
      </div>

      <div class="grid grid-3" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;">
        ${practices.results.map(p => `
          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span style="font-size:12px;font-weight:700;color:var(--deep);text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:12px;">
                ${p.category} &middot; ${p.duration_minutes} min
              </span>
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 10px;">${p.title}</h3>
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 20px;">${p.description}</p>
            </div>
            <a href="${prefix}/practices#${p.id}" style="font-weight:600;color:var(--deep);display:inline-flex;align-items:center;gap:6px;">
              Practice now &rarr;
            </a>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Black Hills & Homeopathy -->
  <section class="section" style="padding:80px 0;">
    <div class="container">
      <p class="eyebrow" style="text-align:center;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--deep);font-weight:700;margin:0 0 24px;">${lf.eyebrow}</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 340px), 1fr));gap:32px;">
        <a href="${prefix}/black-hills" class="card" style="display:block;background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);text-decoration:none;color:inherit;">
          <img src="/assets/images/hills-well-path.webp" alt="" loading="lazy" style="width:100%;aspect-ratio:3/2;object-fit:cover;display:block;">
          <div style="padding:24px 28px;">
            <h3 style="font-family:var(--serif);font-size:26px;margin:0 0 8px;color:var(--ink);">${lf.bhTitle}</h3>
            <p style="color:var(--muted);line-height:1.6;margin:0 0 12px;">${lf.bhText}</p>
            <span style="color:var(--deep);font-weight:700;">${lf.bhCta}</span>
          </div>
        </a>
        <a href="${prefix}/homeopathy" class="card" style="display:block;background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);text-decoration:none;color:inherit;">
          <img src="/assets/images/tea-cups-journal.webp" alt="" loading="lazy" style="width:100%;aspect-ratio:3/2;object-fit:cover;display:block;">
          <div style="padding:24px 28px;">
            <h3 style="font-family:var(--serif);font-size:26px;margin:0 0 8px;color:var(--ink);">${lf.hoTitle}</h3>
            <p style="color:var(--muted);line-height:1.6;margin:0 0 12px;">${lf.hoText}</p>
            <span style="color:var(--deep);font-weight:700;">${lf.hoCta}</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 4. Remedies & Holistic Care -->
  <section class="section" style="background:var(--cream);padding:80px 0;border-top:1px solid var(--line);">
    <div class="container grid grid-2" style="align-items:center;gap:48px;">
      <div>
        <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
          ${t.home.remediesEyebrow}
        </p>
        <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;line-height:1.2;">
          ${t.home.remediesTitle}
        </h2>
        <p style="font-size:17px;line-height:1.6;color:var(--muted);margin-bottom:24px;">
          ${t.home.remediesLead}
        </p>
        <div style="display:flex;gap:12px;flex-direction:column;margin-bottom:28px;">
          ${remedies.results.map((r, i) => `
            <a href="${prefix}/remedies#${r.slug}" style="background:var(--paper);border-radius:16px;padding:16px 20px;border:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;">
              <div>
                <span style="font-size:11px;font-weight:700;color:var(--deep);text-transform:uppercase;">0${i + 1} &middot; ${r.category}</span>
                <div style="font-family:var(--serif);font-size:17px;color:var(--ink);font-weight:600;">${r.title}</div>
              </div>
              <span style="color:var(--deep);">&rarr;</span>
            </a>
          `).join('')}
        </div>
        <a class="btn outline" href="${prefix}/remedies">${t.home.viewAllRemedies}</a>
      </div>
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);">
        <img src="/assets/remedies-herbs.svg" alt="KindWell botanical allies" width="900" height="900" style="width:100%;height:auto;display:block;background:var(--paper);">
      </div>
    </div>
  </section>

  <!-- 5. Contemplative Traditions: Reiki & Crystals -->
  <section class="section" style="padding:80px 0;">
    <div class="container">
      <div style="text-align:center;max-width:720px;margin:0 auto 48px;">
        <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin-bottom:8px;">
          ${t.home.reikiEyebrow}
        </p>
        <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;">
          ${t.home.reikiTitle}
        </h2>
        <p style="font-size:17px;color:var(--muted);line-height:1.6;">
          ${t.home.reikiLead}
        </p>
      </div>

      <div class="grid grid-2" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:32px;">
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);">
          <span style="font-size:28px;display:block;margin-bottom:12px;">🌿</span>
          <h3 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 12px;">Usui Reiki Foundations</h3>
          <p style="font-size:15px;color:var(--muted);line-height:1.6;margin-bottom:20px;">
            Explore the history of Mikao Usui, the five daily principles of peace, what happens during quiet sessions, and self-treatment rituals for personal restoration.
          </p>
          <a class="btn text" href="${prefix}/reiki">${t.home.learnReiki}</a>
        </article>

        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);">
          <span style="font-size:28px;display:block;margin-bottom:12px;">💎</span>
          <h3 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 12px;">Mineral Traditions & Reflection</h3>
          <p style="font-size:15px;color:var(--muted);line-height:1.6;margin-bottom:20px;">
            Learn how stones like amethyst, rose quartz, and tourmaline have been used for centuries as grounding anchors, with careful notes on mineral hardness, care, and safety.
          </p>
          <a class="btn text" href="${prefix}/crystals">${t.home.exploreCrystals}</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 6. Courses -->
  <section class="section" style="background:var(--paper);padding:80px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
    <div class="container">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px;flex-wrap:wrap;gap:20px;">
        <div>
          <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
            ${t.home.coursesEyebrow}
          </p>
          <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0;">
            ${t.home.coursesTitle}
          </h2>
        </div>
        <a class="btn text" href="${prefix}/courses" style="font-weight:600;">${t.home.viewCourses}</a>
      </div>

      <div class="grid grid-3" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;">
        ${courses.results.map(c => `
          <article class="card" style="background:var(--cream);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span style="font-size:12px;font-weight:700;color:var(--deep);text-transform:uppercase;display:block;margin-bottom:12px;">
                ${c.level} &middot; ~${c.estimated_hours} hours
              </span>
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 10px;">${c.title}</h3>
              <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 20px;">${c.subtitle}</p>
            </div>
            <a class="btn small" href="${prefix}/courses/${c.slug}" style="align-self:flex-start;">
              View course details &rarr;
            </a>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 7. Reflective Quizzes -->
  <section class="section" style="padding:80px 0;">
    <div class="container grid grid-2" style="align-items:center;gap:48px;">
      <div>
        <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
          ${t.home.quizEyebrow}
        </p>
        <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;line-height:1.2;">
          ${t.home.quizTitle}
        </h2>
        <p style="font-size:17px;line-height:1.6;color:var(--muted);margin-bottom:24px;">
          ${t.home.quizLead}
        </p>
        <a class="btn" href="${prefix}/quiz">${t.home.takeQuiz}</a>
      </div>
      <div style="background:var(--paper);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line);">
        <h3 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 8px;">What Kind of Rest Do I Need?</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.6;margin-bottom:20px;">
          Sleep is only one of seven distinct forms of human recovery. Take our gentle 2-minute check-in to see whether sensory, physical, mental, or emotional quiet is what your body craves.
        </p>
        <a class="btn outline small" href="${prefix}/quiz/what-kind-of-rest-do-i-need">Start this reflection &rarr;</a>
      </div>
    </div>
  </section>

  <!-- 8. KindWell Circle Community -->
  <section class="section" style="background:var(--paper);padding:80px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
    <div class="container grid grid-2" style="align-items:center;gap:48px;">
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);">
        <img src="/assets/circle-editorial.webp" alt="KindWell Circle community" width="1200" height="800" style="width:100%;height:auto;display:block;">
      </div>
      <div>
        <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
          ${t.home.circleEyebrow}
        </p>
        <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;line-height:1.2;">
          ${t.home.circleTitle}
        </h2>
        <p style="font-size:17px;line-height:1.6;color:var(--muted);margin-bottom:24px;">
          ${t.home.circleLead}
        </p>
        <ul style="list-style:none;padding:0;margin:0 0 28px;line-height:2.0;font-size:15px;color:var(--ink);">
          <li>🌿 <strong>Gentle Check-In:</strong> An unhurried place to share how you are today.</li>
          <li>🕯️ <strong>Practice Together:</strong> Notes and questions on the 12 somatic practices.</li>
          <li>🌧️ <strong>Being With It:</strong> Compassionate space for grief and open questions.</li>
          <li>✨ <strong>Quiet Wins:</strong> Celebrating the tiny victories of daily gentleness.</li>
        </ul>
        <a class="btn" href="${prefix}/circle">${t.home.visitCircle}</a>
      </div>
    </div>
  </section>

  <!-- 9. Membership Tiers ($0 / $5 / $10 / $20) -->
  <section class="section" style="padding:80px 0;" id="membership">
    <div class="container">
      <div style="text-align:center;max-width:720px;margin:0 auto 48px;">
        <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin-bottom:8px;">
          ${t.home.membershipEyebrow}
        </p>
        <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;">
          ${t.home.membershipTitle}
        </h2>
        <p style="font-size:17px;color:var(--muted);line-height:1.6;">
          ${t.home.membershipLead}
        </p>
      </div>

      <div class="grid grid-4" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:24px;">
        <!-- Free -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span style="font-size:13px;font-weight:700;color:var(--deep);text-transform:uppercase;">Community</span>
            <h3 style="font-family:var(--serif);font-size:28px;margin:8px 0 4px;">Free</h3>
            <div style="font-size:24px;font-weight:700;color:var(--ink);margin-bottom:16px;">$0</div>
            <ul style="list-style:none;padding:0;margin:0 0 24px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ All public articles & guides</li>
              <li>✓ Core remedies library</li>
              <li>✓ Core somatic grounding exercises</li>
              <li>✓ Verified provider & crisis directory</li>
              <li>✓ Store browsing</li>
            </ul>
          </div>
          <a class="btn outline small" href="${prefix}/account">Start free</a>
        </article>

        <!-- Kind ($5) -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span style="font-size:13px;font-weight:700;color:var(--deep);text-transform:uppercase;">Kind</span>
            <h3 style="font-family:var(--serif);font-size:28px;margin:8px 0 4px;">Kind</h3>
            <div style="font-size:24px;font-weight:700;color:var(--ink);margin-bottom:16px;">$5 <span style="font-size:14px;font-weight:400;color:var(--muted);">/ month</span></div>
            <ul style="list-style:none;padding:0;margin:0 0 24px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ Everything in Free</li>
              <li>✓ Daily affirmation & reflection</li>
              <li>✓ Daily journal prompt</li>
              <li>✓ Saved personal favorites</li>
              <li>✓ Monthly member wellness letter</li>
            </ul>
          </div>
          <a class="btn outline small" href="https://buy.stripe.com/dRmdR8663c3ffvn1Uw0kE0d">Join for $5/mo</a>
        </article>

        <!-- Steady ($10) -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:2px solid var(--sage);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span style="font-size:13px;font-weight:700;color:var(--sage);text-transform:uppercase;">Steady</span>
            <h3 style="font-family:var(--serif);font-size:28px;margin:8px 0 4px;">Steady</h3>
            <div style="font-size:24px;font-weight:700;color:var(--ink);margin-bottom:16px;">$10 <span style="font-size:14px;font-weight:400;color:var(--muted);">/ month</span></div>
            <ul style="list-style:none;padding:0;margin:0 0 24px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ Everything in Kind</li>
              <li>✓ All reflective quizzes & self-checks</li>
              <li>✓ Full 12 somatic & emotion practices</li>
              <li>✓ Printable worksheets & cards</li>
              <li>✓ Read-only Circle community access</li>
              <li>✓ Course introductory modules</li>
            </ul>
          </div>
          <a class="btn small" href="https://buy.stripe.com/14AeVcamjd7jbf7eHi0kE0e">Join for $10/mo</a>
        </article>

        <!-- Supported ($20) -->
        <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <span style="font-size:13px;font-weight:700;color:var(--lav-deep);text-transform:uppercase;">Supported</span>
            <h3 style="font-family:var(--serif);font-size:28px;margin:8px 0 4px;">Full Circle</h3>
            <div style="font-size:24px;font-weight:700;color:var(--ink);margin-bottom:16px;">$20 <span style="font-size:14px;font-weight:400;color:var(--muted);">/ month</span></div>
            <ul style="list-style:none;padding:0;margin:0 0 24px;font-size:14px;line-height:1.8;color:var(--muted);">
              <li>✓ Everything in Steady</li>
              <li>✓ Full KindWell Circle posting & replying</li>
              <li>✓ Complete course curriculum access</li>
              <li>✓ Course completion certificates</li>
            </ul>
          </div>
          <a class="btn outline small" href="https://buy.stripe.com/7sY14m51Z9V7ab3bv60kE0f">Join for $20/mo</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 10. Curated Store Preview -->
  <section class="section" style="background:var(--cream);padding:80px 0;border-top:1px solid var(--line);">
    <div class="container grid grid-2" style="align-items:center;gap:48px;">
      <div>
        <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
          ${t.home.storeEyebrow}
        </p>
        <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;line-height:1.2;">
          ${t.home.storeTitle}
        </h2>
        <p style="font-size:17px;line-height:1.6;color:var(--muted);margin-bottom:24px;">
          ${t.home.storeLead}
        </p>
        <div style="display:flex;gap:12px;margin-bottom:28px;">
          <div style="background:var(--paper);border-radius:16px;padding:20px;flex:1;border:1px solid var(--line);">
            <strong style="display:block;font-family:var(--serif);font-size:18px;margin-bottom:4px;">Digital Downloads</strong>
            <span style="font-size:14px;color:var(--muted);">Instant access PDF workbooks, practice cards, and printable trackers.</span>
          </div>
          <div style="background:var(--paper);border-radius:16px;padding:20px;flex:1;border:1px solid var(--line);">
            <strong style="display:block;font-family:var(--serif);font-size:18px;margin-bottom:4px;">Organic Merchandise</strong>
            <span style="font-size:14px;color:var(--muted);">Botanical ceramic mugs, linen journals, and certified organic tees.</span>
          </div>
        </div>
        <a class="btn" href="${prefix}/store">${t.home.visitStore}</a>
      </div>
      <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);">
        <img src="/assets/store-editorial.webp" alt="KindWell curated journals and workbooks" width="900" height="900" style="width:100%;height:auto;display:block;">
      </div>
    </div>
  </section>

  <!-- 11. Practitioner Network & Spiritual Counseling -->
  <section class="section" style="padding:80px 0;">
    <div class="container grid grid-2" style="align-items:center;gap:48px;">
      <div style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
          <div style="width:56px;height:56px;border-radius:50%;background:var(--mint);color:var(--deep);display:flex;align-items:center;justify-content:center;font-size:24px;">
            🌿
          </div>
          <div>
            <h3 style="font-family:var(--serif);font-size:22px;margin:0;color:var(--ink);">Companion Care Network</h3>
            <span style="font-size:13px;color:var(--deep);font-weight:600;">Contemplative Listening &amp; Spiritual Support</span>
          </div>
        </div>
        <p style="font-size:15px;color:var(--muted);line-height:1.6;margin-bottom:16px;">
          ${locale === 'es' ? 'El acompañamiento espiritual individual no se encuentra disponible actualmente para nuevos consultantes. Nuestro compromiso actual está en los cursos y la comunidad.' : (locale === 'pt-BR' ? 'O acompanhamento espiritual individual não está disponível para novos clientes no momento. Nosso foco atual está nos cursos e nos espaços de partilha comunitária.' : 'Individual spiritual support is not currently available for new clients. Our team is dedicating full focus to our curriculum, practices, and community spaces.')}
        </p>
        <div style="background:var(--cream);border-radius:12px;padding:12px 16px;font-size:14px;color:var(--ink);border:1px solid var(--line);">
          <strong>Status:</strong> ${locale === 'es' ? 'Consultas individuales temporalmente cerradas' : (locale === 'pt-BR' ? 'Atendimentos individuais temporariamente pausados' : 'Individual spiritual support is not currently available for new clients.')}
        </div>
      </div>
      <div>
        <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
          ${t.home.practitionerEyebrow}
        </p>
        <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;line-height:1.2;">
          ${t.home.practitionerTitle}
        </h2>
        <p style="font-size:17px;line-height:1.6;color:var(--muted);margin-bottom:24px;">
          ${t.home.practitionerLead}
        </p>
        <a class="btn outline" href="${prefix}/practitioners">${t.home.readStandards}</a>
      </div>
    </div>
  </section>

  <!-- 12. Verified Help & Crisis Directory -->
  <section class="section" style="background:var(--mint);padding:80px 0;border-top:1px solid var(--line);">
    <div class="container" style="max-width:860px;text-align:center;">
      <p class="eyebrow" style="color:var(--deep);font-weight:600;text-transform:uppercase;font-size:13px;margin:0 0 8px;">
        ${t.home.directoryEyebrow}
      </p>
      <h2 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:0 0 16px;">
        ${t.home.directoryTitle}
      </h2>
      <p style="font-size:17px;color:var(--deep);line-height:1.6;margin-bottom:28px;">
        ${t.home.directoryLead}
      </p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
        <a class="btn" href="${prefix}/providers">${t.home.findHelp}</a>
        <a class="btn outline" href="tel:988" style="background:var(--paper);">Call or text 988</a>
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: `${t.brand} — ${t.tagline}`,
    description: t.footer.aboutKindwell,
    path: '/',
    locale,
    user,
    bodyContent
  });
}
