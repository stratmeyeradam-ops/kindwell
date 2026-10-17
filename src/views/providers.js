// src/views/providers.js
// Vetted mental health directory and crisis resources view in Generation 2 styling

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';

export async function renderProvidersPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const titles = {
    en: 'Verified Mental Health Directory & Crisis Support — KindWell',
    es: 'Directorio verificado de salud mental y crisis — KindWell',
    'pt-BR': 'Diretório confiável de saúde mental e apoio em crise — KindWell'
  };

  const descriptions = {
    en: 'Vetted clinical mental health locators, low-cost therapy collectives, and 24/7 free crisis hotlines. Find compassionate care when you need more than self-practice.',
    es: 'Líneas de ayuda en crisis gratuitas, directorios de terapeutas con licencia y clínicas comunitarias accesibles.',
    'pt-BR': 'Canais de emergência 24h, clínicas sociais de psicoterapia e diretórios de profissionais licenciados.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.providers}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        Compassionate care,<br><em>when you need more.</em>
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${descriptions[locale] || descriptions.en}
      </p>
      <div style="background:var(--mint);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--deep);text-align:left;">
        <strong>Immediate crisis?</strong> Call or text <strong>988</strong> (US) anytime for free, confidential, 24/7 support.
      </div>
    </div>
  </section>

  <!-- Provider Directory List -->
  <section class="section" style="padding:60px 0 80px;">
    <div class="container" style="max-width:920px;">
      <!-- Category 1: Free Crisis Support -->
      <div style="margin-bottom:48px;">
        <h2 style="font-family:var(--serif);font-size:28px;color:var(--ink);margin:0 0 8px;">1. Free, Confidential Crisis Support</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 24px;">Immediate, 24/7 listening and de-escalation for yourself or someone you care about.</p>

        <div style="display:flex;flex-direction:column;gap:18px;">
          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:2px solid var(--sage);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0;">988 Suicide & Crisis Lifeline</h3>
              <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">24/7 Free Call or Text</span>
            </div>
            <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
              National network of local crisis centers providing free and confidential emotional support to people in suicidal crisis or emotional distress. Spanish language available (press 2).
            </p>
            <div style="display:flex;gap:16px;align-items:center;font-size:14px;font-weight:600;">
              <a href="tel:988" style="color:var(--deep);">Call or Text 988</a>
              <span style="color:var(--line);">|</span>
              <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" style="color:var(--deep);">988lifeline.org &rarr;</a>
            </div>
          </article>

          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0;">Crisis Text Line</h3>
              <span class="pill" style="background:var(--cream);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">Text HOME to 741741</span>
            </div>
            <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
              Connect with a trained crisis counselor via SMS text message. Free, 24/7, high-volume support for panic, anxiety, self-harm, and grief.
            </p>
            <a href="https://www.crisistextline.org" target="_blank" rel="noopener noreferrer" style="color:var(--deep);font-weight:600;font-size:14px;">
              crisistextline.org &rarr;
            </a>
          </article>
        </div>
      </div>

      <!-- Category 2: Affordable & Sliding Scale Therapy -->
      <div style="margin-bottom:48px;">
        <h2 style="font-family:var(--serif);font-size:28px;color:var(--ink);margin:0 0 8px;">2. Affordable & Sliding-Scale Clinical Therapy</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 24px;">Directories dedicated to low-cost, sliding-scale, and accessible psychotherapy.</p>

        <div style="display:flex;flex-direction:column;gap:18px;">
          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0;">Open Path Psychotherapy Collective</h3>
              <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">$30–$70/session</span>
            </div>
            <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
              Non-profit nationwide network of mental health clinicians providing affordable, in-office and online psychotherapy sessions for individuals and families without adequate mental health insurance.
            </p>
            <a href="https://openpathcollective.org" target="_blank" rel="noopener noreferrer" style="color:var(--deep);font-weight:600;font-size:14px;">
              openpathcollective.org &rarr;
            </a>
          </article>

          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0;">SAMHSA National Helpline</h3>
              <span class="pill" style="background:var(--cream);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">1-800-662-4357</span>
            </div>
            <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
              Substance Abuse and Mental Health Services Administration treatment referral service. Confidential, 24/7 information service in English and Spanish for individuals facing mental health or substance use challenges.
            </p>
            <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" style="color:var(--deep);font-weight:600;font-size:14px;">
              samhsa.gov/find-help &rarr;
            </a>
          </article>

          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
              <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0;">NAMI HelpLine</h3>
              <span class="pill" style="background:var(--cream);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">Mon–Fri 10am–10pm ET</span>
            </div>
            <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
              National Alliance on Mental Illness free peer-support service providing answers, practical resources, and community support. Call 1-800-950-NAMI or text "HelpLine" to 62640.
            </p>
            <a href="https://www.nami.org/help" target="_blank" rel="noopener noreferrer" style="color:var(--deep);font-weight:600;font-size:14px;">
              nami.org/help &rarr;
            </a>
          </article>
        </div>
      </div>

      <!-- Category 3: Clinical Therapist Locators -->
      <div>
        <h2 style="font-family:var(--serif);font-size:28px;color:var(--ink);margin:0 0 8px;">3. Licensed Provider Search Locators</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 24px;">Comprehensive search tools to filter by insurance, specialty, and location.</p>

        <div style="display:flex;flex-direction:column;gap:18px;">
          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
            <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 8px;">Psychology Today Therapist Directory</h3>
            <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
              The largest national directory of licensed psychologists, clinical social workers, and counselors. Filter by zip code, accepted insurance plans, and therapeutic modalities.
            </p>
            <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer" style="color:var(--deep);font-weight:600;font-size:14px;">
              psychologytoday.com &rarr;
            </a>
          </article>

          <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid var(--line);">
            <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 8px;">American Psychological Association (APA) Locator</h3>
            <p style="font-size:15px;color:var(--muted);line-height:1.6;margin:0 0 16px;">
              Official psychologist locator provided by the APA. Locate doctoral-level licensed clinical psychologists in your state.
            </p>
            <a href="https://locator.apa.org" target="_blank" rel="noopener noreferrer" style="color:var(--deep);font-weight:600;font-size:14px;">
              locator.apa.org &rarr;
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/providers',
    locale,
    user,
    bodyContent
  });
}
