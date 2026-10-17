// src/views/account.js
// Authentication shell (Login/Register) and Member Dashboard view

import { renderLayout } from './layout.js';
import { ui } from '../locales/ui-strings.js';
import { canReadWellnessLetter, getStripeCustomerId } from '../services/memberships.js';

// Sign-in copy. Email and password is the only way in, so the card explains the
// choice rather than just presenting a button.
const signIn = {
  heading: {
    en: 'Welcome to KindWell',
    es: 'Bienvenida a KindWell',
    'pt-BR': 'Bem-vinda à KindWell'
  },
  blurb: {
    en: 'Sign in with your email and password — the same account holds your membership and anything you order.',
    es: 'Inicia sesión con tu correo y contraseña: la misma cuenta guarda tu membresía y tus pedidos.',
    'pt-BR': 'Entre com seu e-mail e senha — a mesma conta guarda sua assinatura e seus pedidos.'
  },
  signInButton: {
    en: 'Sign in',
    es: 'Iniciar sesión',
    'pt-BR': 'Entrar'
  },
  createButton: {
    en: 'Create an account',
    es: 'Crear una cuenta',
    'pt-BR': 'Criar uma conta'
  },
  nameLabel: { en: 'Your name', es: 'Tu nombre', 'pt-BR': 'Seu nome' },
  emailLabel: { en: 'Email', es: 'Correo electrónico', 'pt-BR': 'E-mail' },
  passwordLabel: { en: 'Password', es: 'Contraseña', 'pt-BR': 'Senha' },
  footnote: {
    en: 'Choose a password of at least 8 characters. We store it hashed, never in plain text.',
    es: 'Elige una contraseña de al menos 8 caracteres. La guardamos cifrada, nunca en texto plano.',
    'pt-BR': 'Escolha uma senha de pelo menos 8 caracteres. Guardamos com hash, nunca em texto puro.'
  }
};

export async function renderAccountPage(db, {
  env = {},
  locale = 'en',
  user = null,
  error = null,
  success = null
} = {}) {
  const t = ui[locale] || ui.en;
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  let enrollments = [];
  let wellnessLetters = [];
  let subscription = null;
  let billingCustomerId = null;

  if (user) {
    billingCustomerId = await getStripeCustomerId(db, user.id);
    // Fetch active enrollments with course titles
    const enrRows = await db.prepare(`
      SELECT e.id, e.status, e.enrolled_at, e.completed_at,
             c.slug as course_slug, ct.title as course_title,
             (SELECT verification_code FROM certificates WHERE enrollment_id = e.id) as certificate_code
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      JOIN course_translations ct ON c.id = ct.course_id AND ct.locale = ?
      WHERE e.user_id = ?
      ORDER BY e.enrolled_at DESC
    `).bind(locale, user.id).all();
    enrollments = enrRows.results;

    // Fetch subscription details
    subscription = await db.prepare(`
      SELECT tier, amount, status, current_period_end, cancel_at_period_end
      FROM subscriptions
      WHERE user_id = ? AND status = 'active'
      ORDER BY created_at DESC LIMIT 1
    `).bind(user.id).first();

    // Fetch wellness letters if user is Kind ($5) or higher
    if (canReadWellnessLetter(user)) {
      const letRows = await db.prepare(`
        SELECT id, slug, title, publish_date, summary, content
        FROM wellness_letters
        WHERE locale = ?
        ORDER BY publish_date DESC
      `).bind(locale).all();
      wellnessLetters = letRows.results;
    }
  }

  const titles = {
    en: user ? `Your Account — ${user.name}` : 'Sign In or Join — KindWell',
    es: user ? `Tu cuenta — ${user.name}` : 'Acceso o registro — KindWell',
    'pt-BR': user ? `Sua conta — ${user.name}` : 'Entrar ou cadastrar-se — KindWell'
  };

  const descriptions = {
    en: 'Access your KindWell daily affirmations, enrolled courses, certificates, and community settings.',
    es: 'Gestiona tu membresía, cursos matriculados, certificados y lecturas personales.',
    'pt-BR': 'Acesse seus cursos, certificados, reflexões salvas e gerencie sua assinatura.'
  };

  const bodyContent = `
  <section class="section" style="padding:40px 0 80px;">
    <div class="container" style="max-width:920px;">
      <!-- Flash Messages -->
      ${error ? `
        <div style="background:#fde8e8;border:1px solid #f8b4b4;color:#9b1c1c;padding:16px 20px;border-radius:14px;margin-bottom:24px;font-size:15px;">
          ${escapeHtml(error)}
        </div>
      ` : ''}
      ${success ? `
        <div style="background:#def7ec;border:1px solid #bcf0da;color:#03543f;padding:16px 20px;border-radius:14px;margin-bottom:24px;font-size:15px;">
          ${escapeHtml(success)}
        </div>
      ` : ''}

      ${user ? `
        <!-- Authenticated Member Dashboard -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;flex-wrap:wrap;gap:16px;border-bottom:1px solid var(--line);padding-bottom:24px;">
          <div>
            <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">
              ${user.tier} Tier Member
            </span>
            <h1 style="font-family:var(--serif);font-size:36px;color:var(--ink);margin:8px 0 4px;">
              Welcome, ${escapeHtml(user.name)}.
            </h1>
            <p style="font-size:14px;color:var(--muted);margin:0;">${escapeHtml(user.email)}</p>
          </div>

          <form method="POST" action="/api/auth/logout">
            <button type="submit" class="btn outline small">${t.nav.signOut}</button>
          </form>
        </div>

        <div class="account-grid" style="display:grid;gap:32px;margin-bottom:40px;">
          <!-- Subscription Box -->
          <div style="background:var(--paper);border-radius:var(--radius);padding:32px;border:1px solid var(--line);box-shadow:var(--shadow);">
            <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 12px;">Membership Status</h3>
            <div style="font-size:16px;font-weight:600;color:var(--deep);margin-bottom:8px;text-transform:capitalize;">
              Current plan: ${user.tier} ($${subscription?.amount ? subscription.amount.toFixed(2) : '0.00'}/mo)
            </div>
            ${billingCustomerId ? `
              <form method="POST" action="/api/membership/portal" style="margin-bottom:16px">
                <button type="submit" class="btn small">${locale === 'es' ? 'Gestionar facturación' : locale === 'pt-BR' ? 'Gerenciar cobrança' : 'Manage billing, plan & invoices'}</button>
              </form>
            ` : ''}
            ${subscription ? `
              <p style="font-size:14px;color:var(--muted);margin-bottom:20px;line-height:1.5;">
                ${subscription.cancel_at_period_end ? 'Access ends' : 'Renews'}: ${new Date(subscription.current_period_end).toLocaleDateString(locale)}
              </p>
              <form method="POST" action="/api/membership/cancel">
                <button type="submit" class="btn text small" style="color:var(--danger);padding:0;" onclick="return confirm('Are you sure you want to cancel your active membership?');">
                  Cancel subscription &rarr;
                </button>
              </form>
            ` : `
              <p style="font-size:14px;color:var(--muted);margin-bottom:20px;">
                You are currently on our free plan. Upgrade anytime to access daily reflections, full courses, and community spaces.
              </p>
              <a class="btn small" href="${prefix}/pricing">Explore membership options &rarr;</a>
            `}
          </div>

          <!-- Courses & Progress -->
          <div style="background:var(--paper);border-radius:var(--radius);padding:32px;border:1px solid var(--line);box-shadow:var(--shadow);">
            <h3 style="font-family:var(--serif);font-size:22px;color:var(--ink);margin:0 0 12px;">Course Enrollments</h3>
            ${enrollments.length > 0 ? `
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;">
                ${enrollments.map(e => `
                  <li style="border-bottom:1px solid var(--line);padding-bottom:10px;">
                    <div style="font-weight:600;font-size:15px;color:var(--ink);margin-bottom:4px;">${e.course_title}</div>
                    <div style="font-size:13px;color:var(--muted);display:flex;justify-content:space-between;">
                      <span>Status: ${e.status}</span>
                      ${e.certificate_code ? `<span style="color:var(--sage);font-weight:600;">Code: ${e.certificate_code}</span>` : ''}
                      <a href="${prefix}/courses/${e.course_slug}" style="color:var(--deep);font-weight:600;">Continue &rarr;</a>
                    </div>
                  </li>
                `).join('')}
              </ul>
            ` : `
              <p style="font-size:14px;color:var(--muted);margin-bottom:16px;">You haven’t enrolled in any courses yet.</p>
              <a class="btn small" href="${prefix}/courses">Browse courses &rarr;</a>
            `}
          </div>
        </div>

        <!-- Member Wellness Letter for Kind+ -->
        ${wellnessLetters.length > 0 ? `
          <div style="background:var(--cream);border-radius:var(--radius);padding:36px;border:1px solid var(--line);margin-bottom:32px;">
            <span class="pill" style="background:var(--mint);color:var(--deep);font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;">Member Benefit</span>
            <h3 style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:10px 0 8px;">Monthly Member Wellness Letter</h3>
            <div style="font-size:16px;font-weight:600;color:var(--deep);margin-bottom:12px;">${wellnessLetters[0].title}</div>
            <p style="font-size:15px;line-height:1.7;color:var(--ink);white-space:pre-wrap;margin:0;">${wellnessLetters[0].content}</p>
          </div>
        ` : ''}

      ` : `
        <!-- Unauthenticated View: email + password -->
        <div style="max-width:540px;margin:0 auto;background:var(--paper);border-radius:var(--radius);padding:44px;box-shadow:var(--shadow);border:1px solid var(--line);">
          <h1 style="font-family:var(--serif);font-size:28px;color:var(--ink);margin:0 0 12px;text-align:center;">${signIn.heading[locale] || signIn.heading.en}</h1>
          <p style="font-size:15px;line-height:1.7;color:var(--muted);margin:0 0 28px;text-align:center;">
            ${signIn.blurb[locale] || signIn.blurb.en}
          </p>

          <div style="display:flex;gap:8px;margin-bottom:24px;background:var(--cream);border-radius:12px;padding:6px;">
            <button type="button" id="tab-signin" class="btn small" style="flex:1;padding:10px;">${signIn.signInButton[locale] || signIn.signInButton.en}</button>
            <button type="button" id="tab-signup" class="btn outline small" style="flex:1;padding:10px;">${signIn.createButton[locale] || signIn.createButton.en}</button>
          </div>

          <form id="auth-form" style="display:flex;flex-direction:column;gap:14px;">
            <label id="name-field" style="display:none;font-size:14px;color:var(--ink);">
              ${signIn.nameLabel[locale] || signIn.nameLabel.en}
              <input name="name" type="text" autocomplete="name" style="width:100%;margin-top:6px;padding:12px;border:1px solid var(--line);border-radius:10px;font-size:15px;">
            </label>
            <label style="font-size:14px;color:var(--ink);">
              ${signIn.emailLabel[locale] || signIn.emailLabel.en}
              <input name="email" type="email" required autocomplete="email" style="width:100%;margin-top:6px;padding:12px;border:1px solid var(--line);border-radius:10px;font-size:15px;">
            </label>
            <label style="font-size:14px;color:var(--ink);">
              ${signIn.passwordLabel[locale] || signIn.passwordLabel.en}
              <input name="password" type="password" required minlength="8" autocomplete="current-password" style="width:100%;margin-top:6px;padding:12px;border:1px solid var(--line);border-radius:10px;font-size:15px;">
            </label>
            <div id="auth-error" style="display:none;background:#fde8e8;border:1px solid #f8b4b4;color:#9b1c1c;padding:12px 14px;border-radius:10px;font-size:14px;"></div>
            <button type="submit" id="auth-submit" class="btn" style="width:100%;padding:15px;font-size:16px;">${signIn.signInButton[locale] || signIn.signInButton.en}</button>
          </form>

          <p style="font-size:13px;line-height:1.6;color:var(--muted);margin:22px 0 0;text-align:center;">
            ${signIn.footnote[locale] || signIn.footnote.en}
          </p>
        </div>
        <script>
        (function () {
          var mode = 'signin';
          var prefix = ${JSON.stringify(prefix)};
          var labels = ${JSON.stringify({
            signIn: signIn.signInButton[locale] || signIn.signInButton.en,
            create: signIn.createButton[locale] || signIn.createButton.en
          })};
          var tabIn = document.getElementById('tab-signin');
          var tabUp = document.getElementById('tab-signup');
          var nameField = document.getElementById('name-field');
          var submit = document.getElementById('auth-submit');
          var err = document.getElementById('auth-error');
          var form = document.getElementById('auth-form');

          function setMode(next) {
            mode = next;
            var creating = next === 'signup';
            nameField.style.display = creating ? 'block' : 'none';
            nameField.querySelector('input').required = creating;
            submit.textContent = creating ? labels.create : labels.signIn;
            tabIn.className = creating ? 'btn outline small' : 'btn small';
            tabUp.className = creating ? 'btn small' : 'btn outline small';
            err.style.display = 'none';
          }
          tabIn.addEventListener('click', function () { setMode('signin'); });
          tabUp.addEventListener('click', function () { setMode('signup'); });

          form.addEventListener('submit', async function (event) {
            event.preventDefault();
            err.style.display = 'none';
            submit.disabled = true;
            var data = new FormData(form);
            var payload = { email: data.get('email'), password: data.get('password') };
            if (mode === 'signup') payload.name = data.get('name');
            try {
              var res = await fetch('/api/auth/' + (mode === 'signup' ? 'sign-up' : 'sign-in') + '/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              });
              var body = await res.json().catch(function () { return {}; });
              if (!res.ok) throw new Error(body.message || 'That did not work. Check your details and try again.');
              var checkoutSession = new URLSearchParams(window.location.search).get('checkout_session');
              window.location.href = checkoutSession ? '/api/membership/return?locale=' + encodeURIComponent(${JSON.stringify(locale)}) + '&session_id=' + encodeURIComponent(checkoutSession) : prefix + '/account';
            } catch (e) {
              err.textContent = e.message;
              err.style.display = 'block';
              submit.disabled = false;
            }
          });
        })();
        </script>
      `}
    </div>
  </section>
  `;

  return renderLayout({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/account',
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
