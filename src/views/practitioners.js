// src/views/practitioners.js
// Truthful companion care directory and network standards view

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { listPractitioners, getPractitionerNetworkStandards } from '../services/practitioners.js';

export async function renderPractitionersPage(db, { locale = 'en', user = null } = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  const practitioners = await listPractitioners(db, locale);
  const standards = getPractitionerNetworkStandards(locale);

  const titles = {
    en: 'Spiritual Companions & Care Standards — KindWell',
    es: 'Acompañamiento contemplativo y ética de cuidado — KindWell',
    'pt-BR': 'Cuidado contemplativo e padrões de acolhimento — KindWell'
  };

  const descriptions = {
    en: 'Learn about our approach to contemplative listening, spiritual direction, grief companioning, and our ethical standards for future network practitioners.',
    es: 'Conoce nuestra visión sobre la escucha sin juicios, el acompañamiento en el duelo y los estándares éticos de nuestra red.',
    'pt-BR': 'Nossos princípios de acolhimento sereno, escuta no luto e compromissos éticos para futuros cuidadores.'
  };

  const bodyContent = `
  <section class="section hero" style="padding:40px 0 60px;background:var(--cream);border-bottom:1px solid var(--line);">
    <div class="container" style="max-width:840px;text-align:center;">
      <p class="breadcrumb" style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        <a href="${prefix || '/'}" style="text-decoration:underline;">${t.nav.home}</a> / ${t.nav.practitioners}
      </p>
      <h1 style="font-family:var(--serif);font-size:clamp(36px, 4.5vw, 48px);color:var(--ink);margin:0 0 16px;line-height:1.2;">
        ${standards.headline}
      </h1>
      <p class="lead" style="font-size:18px;line-height:1.6;color:var(--muted);margin:0 auto 24px;">
        ${standards.lead}
      </p>
      <div style="background:var(--paper);border-radius:18px;padding:16px 24px;border:1px solid var(--line);display:inline-block;font-size:14px;color:var(--muted);text-align:left;">
        <strong style="color:var(--deep);">Clear boundaries:</strong> Contemplative companions offer spiritual reflection and presence. They do not provide psychiatric diagnoses or clinical psychotherapy.
      </div>
    </div>
  </section>

  <!-- Companion Care Availability -->
  <section class="section" style="padding:60px 0;">
    <div class="container" style="max-width:860px;">
      <article class="card" style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);margin-bottom:48px;">
        <div style="display:flex;gap:20px;align-items:center;margin-bottom:20px;">
          <div style="width:56px;height:56px;border-radius:50%;background:var(--mint);color:var(--deep);display:flex;align-items:center;justify-content:center;font-size:24px;">
            🌿
          </div>
          <div>
            <h2 style="font-family:var(--serif);font-size:26px;color:var(--ink);margin:0 0 4px;">
              ${locale === 'es' ? 'Disponibilidad de acompañamiento' : (locale === 'pt-BR' ? 'Disponibilidade de atendimento' : 'Companion Care Availability')}
            </h2>
            <span style="font-size:14px;color:var(--deep);font-weight:600;">
              ${locale === 'es' ? 'Atención individual' : (locale === 'pt-BR' ? 'Atendimento individual' : 'Individual Support')}
            </span>
          </div>
        </div>
        <p style="font-size:16px;line-height:1.7;color:var(--ink);margin:0 0 20px;">
          ${locale === 'es'
            ? 'El acompañamiento espiritual individual no se encuentra disponible actualmente para nuevos consultantes. En este momento dedicamos nuestra energía al acompañamiento grupal en los cursos y el Círculo KindWell. Cuando se incorporen acompañantes a nuestra red, sus perfiles y enlaces de contacto se publicarán en este espacio.'
            : (locale === 'pt-BR'
            ? 'O acompanhamento espiritual individual não está disponível para novos clientes no momento. Estamos dedicando nossa atenção aos cursos e aos espaços comunitários do Círculo KindWell. Conforme novos cuidadores forem integrados à nossa rede, seus perfis verificados serão apresentados aqui.'
            : 'Individual spiritual support is not currently available for new clients. Our team is dedicating full focus to our community spaces, curriculum, and network standards. When individual companionship opens, verified practitioner profiles will be shared here.')}
        </p>
        <div style="background:var(--cream);border-radius:14px;padding:16px 20px;border:1px solid var(--line);font-size:14px;color:var(--ink);">
          <strong>Status:</strong> ${locale === 'es' ? 'Consultas individuales temporalmente cerradas' : (locale === 'pt-BR' ? 'Atendimentos individuais temporariamente pausados' : 'Individual spiritual support is not currently available for new clients.')}
        </div>
      </article>

      <!-- Modalities We Support -->
      <div style="background:var(--paper);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow);border:1px solid var(--line);margin-bottom:48px;">
        <h3 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0 0 16px;">Companion care modalities</h3>
        <p style="font-size:15px;color:var(--muted);line-height:1.6;margin-bottom:24px;">
          As KindWell grows, we will welcome ethical practitioners across several contemplative disciplines:
        </p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${standards.modalities.map(m => `
            <div style="background:var(--cream);border-radius:14px;padding:18px 20px;border:1px solid var(--line);">
              <h4 style="font-family:var(--serif);font-size:18px;color:var(--ink);margin:0 0 4px;">${m.name}</h4>
              <p style="font-size:14px;color:var(--muted);margin:0;line-height:1.5;">${m.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Ethical Pledge & Onboarding -->
      <div style="background:var(--cream);border-radius:var(--radius);padding:36px;border:1px solid var(--line);">
        <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 12px;">Our Ethical Commitment</h3>
        <p style="font-size:15px;color:var(--ink);line-height:1.6;margin-bottom:20px;">
          ${standards.ethicalPledge}
        </p>
        <p style="font-size:14px;color:var(--muted);line-height:1.6;margin:0;">
          ${standards.onboardingNote}
        </p>
      </div>
    </div>
  </section>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/practitioners',
    locale,
    user,
    bodyContent
  });
}
