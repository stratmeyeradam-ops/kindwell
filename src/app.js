// src/app.js
// Universal Cloudflare Worker & Node.js application for KindWell

import { Hono } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, resolve, sep } from 'node:path';
import { randomUUID } from 'node:crypto';
import { createHash } from 'node:crypto';

import { normalizeLocale, getAppOrigin } from './config.js';
import { createLocalD1, initSchema } from './db/index.js';
import { createRuntimeEnv } from './db/runtime.js';
import { seedDatabase } from './db/seed.js';
import { validateSession, destroySession, createAuth } from './auth/index.js';
import { cancelSubscription, getStripeCustomerId, TIERS } from './services/memberships.js';
import { completeLesson, enrollCourse } from './services/courses.js';
import { submitQuizAnswers } from './services/quizzes.js';
import { canAccessQuizzes } from './services/memberships.js';
import { createThread, createReply, reportContent, listPendingReports, reviewReport, getCircleSpaceBySlug } from './services/circle.js';
import { processOrder, verifyAndConsumeDownload } from './services/store.js';
import {
  handlePrintifyWebhook,
  verifyPrintifyWebhookSignature,
  getPrintifyMode
} from './services/printify.js';
import {
  sendPhysicalOrderReceivedEmail,
  sendPhysicalOrderShippedEmail
} from './services/email.js';
import { generateSitemapXml, generateRobotsTxt } from './services/sitemap.js';
import {
  createMembershipCheckout,
  createBillingPortalSession,
  constructWebhookEvent,
  isStripeConfigured,
  retrieveCheckoutSession,
  tierFromMetadata,
  toIso,
  createStripeClient,
  subscriptionFields,
  invoiceSubscriptionId
} from './services/stripe.js';
import { applyStripeSubscriptionStatus } from './services/memberships.js';
import { reconcileAll, reconcilePendingSubscriptions } from './services/reconciliation.js';
import { createStoreCheckout, fulfillStoreSession, retrieveStoreSession } from './services/store-checkout.js';
import { sendOrderToPrintify } from './services/fulfilment.js';
import { renderAdminOrdersPage } from './views/admin-orders.js';

// Content types for the private digital deliverables served by /api/download.
const CONTENT_TYPES = {
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.csv': 'text/csv; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.epub': 'application/epub+zip'
};

import { renderHomePage } from './views/home.js';
import { renderPracticesPage } from './views/practices.js';
import { renderRemediesPage } from './views/remedies.js';
import { renderHomeopathyPage } from './views/homeopathy.js';
import { renderBlackHillsPage } from './views/black-hills.js';
import { renderReikiPage } from './views/reiki.js';
import { renderCrystalsPage } from './views/crystals.js';
import { renderCoursesPage } from './views/courses.js';
import { renderCoursePlayer } from './views/course-player.js';
import { renderQuizzesPage, renderQuizRunner, renderQuizResult } from './views/quizzes.js';
import { renderCirclePage } from './views/circle.js';
import { renderStorePage, renderOrderSuccessPage } from './views/store.js';
import { renderPractitionersPage } from './views/practitioners.js';
import { renderProvidersPage } from './views/providers.js';
import { renderPricingPage } from './views/pricing.js';
import { renderAccountPage } from './views/account.js';
import { renderTrustPage } from './views/trust.js';
export function createApp(customDb = null) {
  const app = new Hono();

  // On Node there is no Worker `env` binding, so inject the process environment
  // once and let every existing `c.env.X` call site keep working. A caller that
  // supplies its own database (the tests) keeps the context it was given.
  const runtimeEnv = customDb ? null : createRuntimeEnv();
  if (runtimeEnv) {
    app.use('*', async (c, next) => {
      c.env = runtimeEnv;
      await next();
    });
  }

  // Lazy-initialized local D1 database for Node development / testing
  let localDb = customDb;

  async function getDb(c) {
    if (c.env?.DB) {
      return c.env.DB;
    }
    if (!localDb) {
      localDb = createLocalD1(':memory:');
      await initSchema(localDb);
      await seedDatabase(localDb);
    }
    return localDb;
  }

  // Helper for static file responses in Node
  function serveLocalFile(c, filePath, contentType) {
    if (existsSync(filePath)) {
      const data = readFileSync(filePath);
      return c.body(data, 200, { 'Content-Type': contentType });
    }
    return c.text('Not Found', 404);
  }

  // 1. Static Assets & Metadata Routes
  app.get('/robots.txt', (c) => {
    return c.text(generateRobotsTxt(), 200, { 'Content-Type': 'text/plain' });
  });

  app.get('/sitemap.xml', (c) => {
    return c.text(generateSitemapXml(), 200, { 'Content-Type': 'application/xml; charset=utf-8' });
  });

  // Health check endpoint
  app.get('/api/health', (c) => {
    return c.json({
      status: 'ok',
      service: 'kindwell-app',
      version: '2.0.0',
      timestamp: new Date().toISOString()
    });
  });

  app.get('/site.webmanifest', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    return serveLocalFile(c, join(process.cwd(), 'public/site.webmanifest'), 'application/manifest+json');
  });

  app.get('/favicon.ico', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    return serveLocalFile(c, join(process.cwd(), 'public/favicon.ico'), 'image/x-icon');
  });

  app.get('/favicon.svg', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    return serveLocalFile(c, join(process.cwd(), 'public/favicon.svg'), 'image/svg+xml');
  });

  app.get('/favicon-48x48.png', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    return serveLocalFile(c, join(process.cwd(), 'public/favicon-48x48.png'), 'image/png');
  });

  app.get('/apple-touch-icon.png', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    return serveLocalFile(c, join(process.cwd(), 'public/apple-touch-icon.png'), 'image/png');
  });

  app.get('/icon-192x192.png', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    return serveLocalFile(c, join(process.cwd(), 'public/icon-192x192.png'), 'image/png');
  });

  app.get('/icon-512x512.png', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    return serveLocalFile(c, join(process.cwd(), 'public/icon-512x512.png'), 'image/png');
  });

  app.get('/assets/*', async (c) => {
    if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
    const relPath = c.req.path.replace(/^\/assets\//, '');
    const localPath = join(process.cwd(), 'public/assets', relPath);

    const mimes = {
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.webp': 'image/webp',
      '.png': 'image/png',
      '.svg': 'image/svg+xml',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.json': 'application/json'
    };
    const ext = extname(localPath).toLowerCase();
    const mime = mimes[ext] || 'application/octet-stream';
    return serveLocalFile(c, localPath, mime);
  });

  app.get('/assets/assets/*', (c) => {
    const clean = c.req.path.replace('/assets/assets/', '/assets/');
    return c.redirect(clean, 301);
  });

  // 2. Clean URL Redirects (legacy .html & trailing double-slash bug)
  app.get('/providers//', (c) => c.redirect('/providers', 301));
  app.get('/providers/', (c) => c.redirect('/providers', 301));

  app.use('*', async (c, next) => {
    const p = c.req.path;
    if (p.endsWith('.html')) {
      if (p === '/index.html') return c.redirect('/', 301);
      return c.redirect(p.slice(0, -5), 301);
    }
    await next();
  });

  // 3. Global Session & Locale Middleware
  app.use('*', async (c, next) => {
    const path = c.req.path;
    let locale = 'en';

    if (path.startsWith('/es/') || path === '/es') {
      locale = 'es';
    } else if (path.startsWith('/pt-br/') || path === '/pt-br') {
      locale = 'pt-BR';
    }
    c.set('locale', locale);

    // Session validation. Sign-in is better-auth email+password, whose signed
    // session cookie is verified by better-auth itself; the user row it returns
    // carries tier/role/locale as additional fields, read fresh each request.
    const db = await getDb(c);
    const cookieHeader = c.req.header('cookie') || '';
    if (cookieHeader.includes('better-auth.session_token')) {
      const result = await createAuth(db, c.env).api.getSession({ headers: c.req.raw.headers }).catch(() => null);
      if (result?.user) {
        c.set('user', { ...result.user, tier: result.user.tier || 'free', role: result.user.role || 'member' });
        c.set('session', result.session);
      }
    } else {
      // Sessions issued before the move to email sign-in.
      const sessionToken = getCookie(c, 'kindwell_session');
      const sessionData = sessionToken ? await validateSession(db, sessionToken) : null;
      if (sessionData) {
        c.set('user', sessionData.user);
        c.set('session', sessionData.session);
      }
    }

    await next();
  });

  // 4. Helper to register localized routes
  function registerLocalizedRoutes(prefix, locale) {
    // Home
    app.get(prefix || '/', async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderHomePage(db, { locale, user });
      return c.html(html);
    });

    // Practices
    app.get(`${prefix}/practices`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderPracticesPage(db, { locale, user });
      return c.html(html);
    });

    // Remedies
    app.get(`${prefix}/remedies`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderRemediesPage(db, { locale, user });
      return c.html(html);
    });

    // Homeopathy
    app.get(`${prefix}/homeopathy`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      return c.html(await renderHomeopathyPage(db, { locale, user }));
    });

    // Black Hills
    app.get(`${prefix}/black-hills`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      return c.html(await renderBlackHillsPage(db, { locale, user }));
    });

    // Reiki
    app.get(`${prefix}/reiki`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderReikiPage(db, { locale, user });
      return c.html(html);
    });

    // Crystals
    app.get(`${prefix}/crystals`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderCrystalsPage(db, { locale, user });
      return c.html(html);
    });

    // Courses Catalog
    app.get(`${prefix}/courses`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderCoursesPage(db, { locale, user });
      return c.html(html);
    });

    // Course Player
    app.get(`${prefix}/courses/:slug`, async (c) => {
      const slug = c.req.param('slug');
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderCoursePlayer(db, { slug, locale, user });
      return c.html(html);
    });

    app.get(`${prefix}/courses/:slug/:lessonSlug`, async (c) => {
      const slug = c.req.param('slug');
      const lessonSlug = c.req.param('lessonSlug');
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderCoursePlayer(db, { slug, lessonSlug, locale, user });
      return c.html(html);
    });

    // Quizzes Catalog
    app.get(`${prefix}/quiz`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderQuizzesPage(db, { locale, user });
      return c.html(html);
    });

    // Quiz Runner
    app.get(`${prefix}/quiz/:slug`, async (c) => {
      const slug = c.req.param('slug');
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderQuizRunner(db, { slug, locale, user });
      return c.html(html);
    });

    // Circle Community
    app.get(`${prefix}/circle`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderCirclePage(db, { spaceSlug: 'gentle-check-in', locale, user });
      return c.html(html);
    });

    app.get(`${prefix}/circle/:spaceSlug`, async (c) => {
      const spaceSlug = c.req.param('spaceSlug');
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderCirclePage(db, { spaceSlug, locale, user });
      return c.html(html);
    });

    app.get(`${prefix}/circle/:spaceSlug/:threadId`, async (c) => {
      const spaceSlug = c.req.param('spaceSlug');
      const threadId = c.req.param('threadId');
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderCirclePage(db, { spaceSlug, threadId, locale, user, reportSubmitted: Boolean(c.req.query('report_submitted')) });
      return c.html(html);
    });

    // Store
    app.get(`${prefix}/store`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderStorePage(db, { locale, user, env: c.env });
      return c.html(html);
    });

    // Practitioners
    app.get(`${prefix}/practitioners`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderPractitionersPage(db, { locale, user });
      return c.html(html);
    });

    // Providers Directory
    app.get(`${prefix}/providers`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderProvidersPage(db, { locale, user });
      return c.html(html);
    });

    // Pricing & Membership
    app.get(`${prefix}/membership`, (c) => c.redirect(`${prefix}/pricing`, 302));
    app.get(`${prefix}/subscribe`, (c) => c.redirect(`${prefix}/pricing`, 302));
    app.get(`${prefix}/pricing`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const html = await renderPricingPage(db, { locale, user, env: c.env });
      return c.html(html);
    });

    // Account & Auth
    app.get(`${prefix}/account`, async (c) => {
      const db = await getDb(c);
      const user = c.get('user');
      const error = c.req.query('error');
      const success = c.req.query('success');

      // If this member has a subscription still waiting on Stripe, settle it
      // before rendering so they see their membership rather than a stale
      // "pending". Gated on a cheap DB check first — on the common path this
      // costs one indexed read and no provider call at all.
      if (user) {
        try {
          const pending = await db.prepare(`
            SELECT 1 FROM subscriptions
            WHERE user_id = ? AND status = 'pending' AND provider_sub_id IS NOT NULL
            LIMIT 1
          `).bind(user.id).first();
          if (pending) {
            await reconcilePendingSubscriptions(db, c.env, { userId: user.id, limit: 3 });
          }
        } catch (reconcileError) {
          // Never let reconciliation block the page.
          console.error('Account reconciliation skipped:', reconcileError.message);
        }
      }

      const html = await renderAccountPage(db, { locale, user, error, success, env: c.env });
      return c.html(html);
    });

    // Trust & Legal Pages
    const trustPages = ['about', 'editorial', 'boundaries', 'standards', 'contact', 'privacy', 'terms', 'refund'];
    for (const pageKey of trustPages) {
      app.get(`${prefix}/${pageKey}`, (c) => {
        const user = c.get('user');
        const html = renderTrustPage({ pageKey, locale, user });
        return c.html(html);
      });
    }
    // Aliases for health limits & ethics
    app.get(`${prefix}/health-limits`, (c) => c.redirect(`${prefix}/boundaries`, 301));
    app.get(`${prefix}/ethics`, (c) => c.redirect(`${prefix}/standards`, 301));
  }

  // Register English (/), Spanish (/es), and Brazilian Portuguese (/pt-br)
  registerLocalizedRoutes('', 'en');
  registerLocalizedRoutes('/es', 'es');
  registerLocalizedRoutes('/pt-br', 'pt-BR');

  // Trailing slash redirects for language roots
  app.get('/es/', (c) => c.redirect('/es', 301));
  app.get('/pt-br/', (c) => c.redirect('/pt-br', 301));

  // 5. API & Action Endpoints
  // Sign-in is email + password through better-auth, mounted at /api/auth/*.
  // The PayPal OAuth flow is gone; its old entry points redirect to the account
  // page so existing links and bookmarks still land somewhere useful.
  const SESSION_COOKIE = {
    path: '/',
    httpOnly: true,
    sameSite: 'Lax',
    secure: true,
    maxAge: 30 * 24 * 60 * 60
  };

  app.get('/auth/paypal', (c) => {
    const locale = normalizeLocale(c.req.query('locale'));
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
    return c.redirect(`${prefix}/account`);
  });

  app.get('/auth/paypal/callback', (c) => c.redirect('/account', 301));

  // Admin: orders and Printify hand-off. Admins only; hidden from search.
  function requireAdmin(c) {
    const user = c.get('user');
    return user && String(user.role || '').toLowerCase() === 'admin' ? user : null;
  }

  app.get('/admin/orders', async (c) => {
    const user = requireAdmin(c);
    c.header('X-Robots-Tag', 'noindex, nofollow');
    if (!user) return c.redirect('/account?next=/admin/orders');
    const db = await getDb(c);
    const orders = (await db.prepare('SELECT * FROM orders ORDER BY created_at DESC LIMIT 200').all())?.results || [];
    const items = {};
    if (orders.length) {
      const rows = (await db.prepare(`
        SELECT oi.order_id, oi.product_id, oi.quantity, oi.variant_title, p.type, pt.name
        FROM order_items oi
        JOIN products p ON p.id = oi.product_id
        LEFT JOIN product_translations pt ON pt.product_id = oi.product_id AND pt.locale = 'en'
        WHERE oi.order_id IN (${orders.map(() => '?').join(',')})
      `).bind(...orders.map((o) => o.id)).all())?.results || [];
      for (const r of rows) (items[r.order_id] ||= []).push(r);
    }
    return c.html(renderAdminOrdersPage({ orders, items, user, flash: c.req.query('flash') || '' }));
  });

  app.post('/admin/orders/:id/printify', async (c) => {
    if (!requireAdmin(c)) return c.json({ error: 'FORBIDDEN' }, 403);
    const db = await getDb(c);
    const result = await sendOrderToPrintify(db, c.env, c.req.param('id'));
    const flash = { sent: 'Sent to Printify production.', created: 'Created in Printify; approve it there to print.', failed: `Printify refused it: ${result.error}`, not_sent: 'Printify is not connected yet.', no_merch: 'That order has no merch.', missing: 'Order not found.' }[result.status] || result.status;
    return c.redirect(`/admin/orders?flash=${encodeURIComponent(flash)}`, 303);
  });

  // Manual subscription reconciliation sweep.
  app.post('/api/admin/reconcile', async (c) => {
    const user = c.get('user');
    if (!user) return c.json({ error: 'AUTHENTICATION_REQUIRED' }, 401);
    if (String(user.role || '').toLowerCase() !== 'admin') {
      return c.json({ error: 'FORBIDDEN' }, 403);
    }
    try {
      const db = await getDb(c);
      return c.json({ success: true, ...(await reconcileAll(db, c.env)) });
    } catch (error) {
      return c.json({ error: 'RECONCILE_FAILED', message: error.message }, 503);
    }
  });

  // Cron entry point for hPanel.
  //
  // An external scheduler runs a shell command, not a browser, so it cannot
  // hold a session. It authenticates with a shared secret instead. Without
  // CRON_SECRET set the endpoint stays closed rather than open.
  app.post('/api/cron/reconcile', async (c) => {
    const expected = c.env?.CRON_SECRET
      || (typeof process !== 'undefined' ? process.env?.CRON_SECRET : null);
    if (!expected) return c.json({ error: 'CRON_NOT_CONFIGURED' }, 503);
    const supplied = c.req.query('secret')
      || (c.req.header('authorization') || '').replace(/^Bearer\s+/i, '');
    if (supplied !== expected) return c.json({ error: 'FORBIDDEN' }, 403);
    try {
      const db = await getDb(c);
      return c.json({ success: true, ...(await reconcileAll(db, c.env)) });
    } catch (error) {
      return c.json({ error: 'RECONCILE_FAILED', message: error.message }, 503);
    }
  });

  app.post('/api/auth/logout', async (c) => {
    const db = await getDb(c);
    // End the better-auth session (server row + cookie) and any legacy one.
    const signOut = await createAuth(db, c.env).api.signOut({ headers: c.req.raw.headers, asResponse: true }).catch(() => null);
    for (const cookie of signOut?.headers?.getSetCookie?.() || []) c.header('set-cookie', cookie, { append: true });
    const token = getCookie(c, 'kindwell_session');
    if (token) {
      await destroySession(db, token);
      deleteCookie(c, 'kindwell_session', { path: '/' });
    }
    const locale = c.get('locale') || 'en';
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
    return c.redirect(`${prefix}/account`);
  });

  // Retired credential endpoints. Kept as explicit redirects so old bookmarks,
  // form posts and password-manager entries land somewhere sensible.
  for (const retired of ['/api/auth/register', '/api/auth/login', '/api/auth/request-reset', '/api/auth/complete-reset']) {
    app.post(retired, (c) => c.redirect('/account', 303));
  }
  app.get('/auth/reset', (c) => c.redirect('/account', 301));

  // Membership checkout: a Stripe Checkout subscription session. The app
  // never touches card data.
  async function startMembershipCheckout(c, { tier, locale, promo = null }) {
    const origin = getAppOrigin(c.env);

    if (!isStripeConfigured(c.env)) {
      throw new Error('Membership billing is not switched on yet.');
    }
    const db = await getDb(c);
    const user = c.get('user');
    const customerId = user ? await getStripeCustomerId(db, user.id) : null;
    if (customerId) {
      const current = await db.prepare("SELECT 1 FROM subscriptions WHERE user_id = ? AND provider = 'stripe' AND status IN ('active', 'past_due', 'pending') LIMIT 1").bind(user.id).first();
      if (current) {
        const portal = await createBillingPortalSession(c.env, { customerId, origin });
        return { provider: 'stripe', url: portal.url };
      }
    }
    const session = await createMembershipCheckout(c.env, { user, tier, locale, origin, promo, customerId });
    return { provider: 'stripe', id: session.id, url: session.url };
  }

  app.post('/api/membership/checkout', async (c) => {
    const user = c.get('user');
    if (!user) return c.json({ error: 'AUTHENTICATION_REQUIRED' }, 401);
    if (String(c.env?.MEMBERSHIPS_ENABLED ?? 'true').toLowerCase() === 'false') {
      return c.json({ error: 'MEMBERSHIPS_NOT_OPEN', message: 'Memberships are paused.' }, 503);
    }
    const body = await c.req.json().catch(() => ({}));
    const tier = String(body?.tier || '');
    if (![TIERS.KIND, TIERS.STEADY, TIERS.SUPPORTED].includes(tier)) {
      return c.json({ error: 'INVALID_TIER' }, 400);
    }
    try {
      const locale = normalizeLocale(body?.locale || c.get('locale'));
      return c.json(await startMembershipCheckout(c, { tier, locale, promo: body?.promo || c.req.query('promo') || null }));
    } catch (error) {
      return c.json({ error: 'CHECKOUT_CREATE_FAILED', message: error.message }, 503);
    }
  });

  // Membership return. Both providers land here: the storefront redirects back
  // after payment, and Stripe appends its session id. Either way the member's
  // real state is re-read from the provider and pending rows are settled now.
  app.get('/api/membership/return', async (c) => {
    let user = c.get('user');
    const locale = normalizeLocale(c.req.query('locale'));
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
    const db = await getDb(c);
    const sessionId = c.req.query('session_id');

    if (!user) return c.redirect(`${prefix}/account?checkout_session=${encodeURIComponent(sessionId || '')}&success=${encodeURIComponent('Sign in or create your account to access your membership using the email from checkout.')}`);
    try {
      const sessionId = c.req.query('session_id');
      if (sessionId && isStripeConfigured(c.env)) {
        const session = await retrieveCheckoutSession(c.env, sessionId);
        const subscriptionId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id;
        const email = (session.customer_details?.email || session.customer_email || '').toLowerCase().trim();
        const belongsToUser = session.metadata?.user_id ? session.metadata.user_id === user.id : email === user.email.toLowerCase();
        if (!belongsToUser) throw new Error('Sign in with the account used for this checkout.');
        if (session.mode === 'subscription' && subscriptionId) {
          const subscription = await createStripeClient(c.env).subscriptions.retrieve(subscriptionId);
          await applyStripeSubscriptionStatus(db, { ...subscriptionFields(c.env, subscription), userId: user.id });
          // Persist ownership for renewals even when the purchase began as a guest.
          if (!subscription.metadata?.user_id) await createStripeClient(c.env).subscriptions.update(subscriptionId, { metadata: { user_id: user.id } });
        }
      }

      // A storefront purchase arrives with no session id at all — Stripe owns
      // that payment, so the order-polling job is what confirms it. Settle this
      // member's pending rows immediately so they do not have to wait for cron.
      const { reconcilePendingSubscriptions } = await import('./services/reconciliation.js');
      await reconcilePendingSubscriptions(db, c.env, { userId: user.id, limit: 5 });

      return c.redirect(`${prefix}/account?success=${encodeURIComponent('Your billing status has been updated.')}`);
    } catch (error) {
      return c.redirect(`${prefix}/account?error=${encodeURIComponent(error.message)}`);
    }
  });

  // Legacy PayPal return URL, and the Stripe return path, both normalise here.
  app.get('/paypal/subscription/return', (c) => c.redirect('/account', 301));
  app.get('/api/stripe/return', (c) => {
    const locale = normalizeLocale(c.req.query('locale'));
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
    const query = new URL(c.req.url).search;
    return c.redirect(`${prefix}/api/membership/return${query}`, 302);
  });

  // Direct GET Membership Subscribe link so buttons on / and /pricing go straight to Stripe Checkout
  app.get('/api/membership/subscribe', async (c) => {
    const locale = normalizeLocale(c.req.query('locale') || c.get('locale'));
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
    if (String(c.env?.MEMBERSHIPS_ENABLED ?? 'true').toLowerCase() === 'false') {
      return c.redirect(`${prefix}/pricing?error=${encodeURIComponent('Memberships are paused.')}`);
    }
    const tier = (c.req.query('tier') || 'kind').toString();
    if (![TIERS.KIND, TIERS.STEADY, TIERS.SUPPORTED].includes(tier)) {
      return c.redirect(`${prefix}/pricing?error=${encodeURIComponent('Choose Kind, Steady, or Supported.')}`);
    }
    try {
      const { url } = await startMembershipCheckout(c, { tier, locale, promo: c.req.query('promo') || null });
      return c.redirect(url, 303);
    } catch (err) {
      return c.redirect(`${prefix}/pricing?error=${encodeURIComponent(err.message)}`);
    }
  });

  // Membership Subscribe — the pricing page's form post.
  app.post('/api/membership/subscribe', async (c) => {
    const user = c.get('user');
    const locale = normalizeLocale(c.get('locale'));
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

// Guest subscriptions allowed directly via Stripe Checkout

    if (String(c.env?.MEMBERSHIPS_ENABLED ?? 'true').toLowerCase() === 'false') {
      return c.redirect(`${prefix}/pricing?error=${encodeURIComponent('Memberships are paused.')}`);
    }
    const body = await c.req.parseBody();
    const tier = body.tier?.toString() || 'kind';
    if (![TIERS.KIND, TIERS.STEADY, TIERS.SUPPORTED].includes(tier)) {
      return c.redirect(`${prefix}/pricing?error=${encodeURIComponent('Choose Kind, Steady, or Supported.')}`);
    }

    try {
      const { url } = await startMembershipCheckout(c, { tier, locale, promo: body.promo?.toString() || null });
      return c.redirect(url, 303);
    } catch (err) {
      return c.redirect(`${prefix}/pricing?error=${encodeURIComponent(err.message)}`);
    }
  });

  app.post('/api/membership/portal', async (c) => {
    const user = c.get('user');
    if (!user) return c.redirect('/account', 303);
    try {
      const customerId = await getStripeCustomerId(await getDb(c), user.id);
      const portal = await createBillingPortalSession(c.env, { customerId, origin: getAppOrigin(c.env) });
      return c.redirect(portal.url, 303);
    } catch (error) {
      return c.redirect(`/account?error=${encodeURIComponent('Billing could not be opened. Please try again.')}`, 303);
    }
  });

  // Membership Cancel
  app.post('/api/membership/cancel', async (c) => {
    const user = c.get('user');
    const locale = c.get('locale') || 'en';
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

    if (!user) return c.redirect(`${prefix}/account`);

    const db = await getDb(c);
    // Stop renewal at Stripe first: marking it locally alone would keep
    // billing the member. Access continues to the end of the paid period.
    const live = await db.prepare(`
      SELECT provider_sub_id FROM subscriptions
      WHERE user_id = ? AND status = 'active' AND provider = 'stripe' AND provider_sub_id IS NOT NULL
    `).bind(user.id).all();
    try {
      if (live.results.length) {
        const { createStripeClient } = await import('./services/stripe.js');
        const stripe = createStripeClient(c.env);
        for (const row of live.results) {
          await stripe.subscriptions.update(row.provider_sub_id, { cancel_at_period_end: true });
        }
      }
    } catch (error) {
      console.error('[kindwell] stripe cancel failed', error?.message);
      return c.redirect(`${prefix}/account?error=${encodeURIComponent('We could not reach billing to cancel. Nothing was changed; please try again in a moment.')}`);
    }
    await cancelSubscription(db, user.id);
    return c.redirect(`${prefix}/account?success=${encodeURIComponent('Your membership will not renew. You keep access until the end of this billing period.')}`);
  });

  // Course Complete Lesson
  app.post('/api/courses/complete-lesson', async (c) => {
    const user = c.get('user');
    const body = await c.req.parseBody();
    const courseSlug = body.courseSlug?.toString();
    const lessonSlug = body.lessonSlug?.toString();
    const lessonId = body.lessonId?.toString();
    const reflectionNote = body.reflectionNote?.toString();
    const locale = c.get('locale') || 'en';
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

    if (!user) {
      return c.redirect(`${prefix}/account?error=Please+sign+in+to+save+your+lesson+progress.`);
    }

    const db = await getDb(c);
    // Find or create enrollment
    const course = await db.prepare('SELECT id FROM courses WHERE slug = ?').bind(courseSlug).first();
    if (!course) return c.redirect(`${prefix}/courses`);

    let enrollment = await db.prepare('SELECT id FROM enrollments WHERE user_id = ? AND course_id = ?')
      .bind(user.id, course.id).first();

    if (!enrollment) {
      // enrollCourse enforces the membership tier for premium courses.
      try {
        enrollment = await enrollCourse(db, user, course.id);
      } catch (err) {
        return c.redirect(`${prefix}/pricing?error=${encodeURIComponent(err.message)}`);
      }
    }

    try {
      await completeLesson(db, {
        enrollmentId: enrollment.id,
        lessonId,
        reflectionNote
      });
    } catch (err) {
      console.error('Lesson completion failed:', err.message);
      return c.redirect(`${prefix}/courses/${courseSlug}?error=${encodeURIComponent(err.message)}`);
    }

    return c.redirect(`${prefix}/courses/${courseSlug}/${lessonSlug}`);
  });

  // Quiz Evaluate
  app.post('/api/quiz/evaluate', async (c) => {
    const body = await c.req.parseBody();
    const quizId = body.quizId?.toString();
    const locale = (body.locale || 'en').toString();
    const user = c.get('user');
    if (!canAccessQuizzes(user)) {
      const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
      return c.redirect(`${prefix}/pricing`, 303);
    }
    const db = await getDb(c);

    const answers = [];
    for (const [k, v] of Object.entries(body)) {
      if (k.startsWith('answer_')) {
        answers.push({ questionId: k.replace('answer_', ''), tag: v.toString() });
      }
    }

    const evaluation = await submitQuizAnswers(db, {
      quizId,
      userId: user?.id || null,
      answers,
      locale
    });

    const html = renderQuizResult({ evaluation, locale, user });
    return c.html(html);
  });

  // Circle Post Thread
  app.post('/api/circle/thread', async (c) => {
    const user = c.get('user');
    const body = await c.req.parseBody();
    const spaceId = body.spaceId?.toString();
    const spaceSlug = body.spaceSlug?.toString();
    const title = body.title?.toString();
    const content = body.body?.toString();
    const locale = (body.locale || 'en').toString();
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

    if (!user) {
      return c.redirect(`${prefix}/account?error=Please+sign+in+to+post+in+the+Circle.`);
    }

    const db = await getDb(c);
    try {
      // The composer sends spaceId, but resolve the slug too so a post can
      // never be written with a null space_id.
      let resolvedSpaceId = spaceId;
      if (!resolvedSpaceId && spaceSlug) {
        const space = await getCircleSpaceBySlug(db, spaceSlug, locale);
        resolvedSpaceId = space?.id;
      }
      if (!resolvedSpaceId) {
        return c.redirect(`${prefix}/circle?error=${encodeURIComponent('Choose a space for your post.')}`);
      }
      const thread = await createThread(db, user, { spaceId: resolvedSpaceId, title, body: content, locale });
      return c.redirect(`${prefix}/circle/${spaceSlug || (await getCircleSpaceBySlug(db, resolvedSpaceId, locale))?.slug}/${thread.id}`);
    } catch (err) {
      return c.redirect(`${prefix}/circle/${spaceSlug || ''}?error=${encodeURIComponent(err.message)}`);
    }
  });

  // Circle Reply
  app.post('/api/circle/reply', async (c) => {
    const user = c.get('user');
    const body = await c.req.parseBody();
    const threadId = body.threadId?.toString();
    const content = body.body?.toString();
    const locale = c.get('locale') || 'en';
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

    if (!user) {
      return c.redirect(`${prefix}/account?error=Please+sign+in+to+reply.`);
    }

    const db = await getDb(c);
    try {
    await createReply(db, user, { threadId, body: content });
    // Redirect to the thread view, not a non-existent /circle/view/:id path.
    // We need the spaceSlug to build the correct URL; fetch it from the thread.
    const threadRow = await db.prepare(
      "SELECT t.space_id, s.slug as space_slug FROM circle_threads t JOIN circle_spaces s ON s.id = t.space_id WHERE t.id = ?"
    ).bind(threadId).first();
    const spaceSlug = threadRow?.space_slug || 'gentle-check-in';
    return c.redirect(`${prefix}/circle/${spaceSlug}/${threadId}`);
    } catch (err) {
      return c.redirect(`${prefix}/circle?error=${encodeURIComponent(err.message)}`);
    }
  });


  // Circle Report Content
  app.post('/api/circle/report', async (c) => {
    const user = c.get('user');
    const body = await c.req.parseBody();
    const threadId = body.threadId?.toString();
    const postId = body.postId?.toString();
    const reason = body.reason?.toString();
    const locale = c.get('locale') || 'en';
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

    if (!user) {
      return c.redirect(`${prefix}/account?error=Please+sign+in+to+report+content.`);
    }

    const db = await getDb(c);
    try {
      await reportContent(db, user, { threadId, postId, reason });
      let redirectTo = `${prefix}/circle`;
      if (threadId) {
        const tRow = await db.prepare(
          "SELECT t.space_id, s.slug as space_slug FROM circle_threads t JOIN circle_spaces s ON s.id = t.space_id WHERE t.id = ?"
        ).bind(threadId).first();
        const spaceSlug = tRow?.space_slug || 'gentle-check-in';
        redirectTo = `${prefix}/circle/${spaceSlug}/${threadId}`;
      } else if (postId) {
        const pRow = await db.prepare(
          "SELECT p.thread_id, t.space_id, s.slug as space_slug FROM circle_posts p JOIN circle_threads t ON t.id = p.thread_id JOIN circle_spaces s ON s.id = t.space_id WHERE p.id = ?"
        ).bind(postId).first();
        const spaceSlug = pRow?.space_slug || 'gentle-check-in';
        redirectTo = `${prefix}/circle/${spaceSlug}/${pRow?.thread_id || postId}`;
      }
      return c.redirect(`${redirectTo}?report_submitted=true`);
    } catch (err) {
      let errorRedirect = `${prefix}/circle`;
      if (threadId) {
        const tRow = await db.prepare(
          "SELECT t.space_id, s.slug as space_slug FROM circle_threads t JOIN circle_spaces s ON s.id = t.space_id WHERE t.id = ?"
        ).bind(threadId).first();
        const spaceSlug = tRow?.space_slug || 'gentle-check-in';
        errorRedirect = `${prefix}/circle/${spaceSlug}/${threadId}`;
      } else if (postId) {
        const pRow = await db.prepare(
          "SELECT p.thread_id, t.space_id, s.slug as space_slug FROM circle_posts p JOIN circle_threads t ON t.id = p.thread_id JOIN circle_spaces s ON s.id = t.space_id WHERE p.id = ?"
        ).bind(postId).first();
        const spaceSlug = pRow?.space_slug || 'gentle-check-in';
        errorRedirect = `${prefix}/circle/${spaceSlug}/${pRow?.thread_id || postId}`;
      }
      return c.redirect(`${errorRedirect}?error=${encodeURIComponent(err.message)}`);
    }
  });

  // Moderation: List pending reports (requires moderator or admin role)
  app.get('/api/circle/moderation/reports', async (c) => {
    const user = c.get('user');
    if (!user) return c.json({ error: 'AUTHENTICATION_REQUIRED' }, 401);
    if (user.role !== 'moderator' && user.role !== 'admin') {
      return c.json({ error: 'INSUFFICIENT_PERMISSIONS' }, 403);
    }
    const db = await getDb(c);
    const limit = Math.min(100, Number(c.req.query('limit')) || 50);
    const offset = Number(c.req.query('offset')) || 0;
    const reports = await listPendingReports(db, { limit, offset });
    const totalRow = await db.prepare('SELECT COUNT(*) as count FROM circle_reports WHERE status = ?').bind('pending').first();
    return c.json({ reports, total: totalRow?.count || 0, limit, offset });
  });

  // Moderation: Review a report (requires moderator or admin role)
  app.post('/api/circle/moderation/review', async (c) => {
    const user = c.get('user');
    if (!user) return c.json({ error: 'AUTHENTICATION_REQUIRED' }, 401);
    if (user.role !== 'moderator' && user.role !== 'admin') {
      return c.json({ error: 'INSUFFICIENT_PERMISSIONS' }, 403);
    }
    const body = await c.req.parseBody();
    const reportId = body.reportId?.toString();
    const action = body.action?.toString();
    const note = body.note?.toString() || '';
    if (!reportId) return c.json({ error: 'Report ID required.' }, 400);
    if (!['dismiss', 'hide_thread', 'hide_post'].includes(action)) {
      return c.json({ error: 'Invalid action. Use dismiss, hide_thread, or hide_post.' }, 400);
    }
    const db = await getDb(c);
    try {
      const result = await reviewReport(db, user.id, reportId, action, note);
      return c.json(result);
    } catch (err) {
      return c.json({ error: err.message }, 400);
    }
  });

  // Legacy payment endpoints. Payment is handled by Stripe Checkout, so these only exist to catch old bookmarks and links.
  app.post('/api/paypal/store/orders', (c) =>
    c.json({ error: 'PAYPAL_RETIRED', message: 'Checkout now runs through the KindWell store.' }, 410));
  app.post('/api/paypal/store/orders/:paypalOrderId/capture', (c) =>
    c.json({ error: 'PAYPAL_RETIRED', message: 'Checkout now runs through the KindWell store.' }, 410));
  app.get('/paypal/checkout/return', (c) => c.redirect('/store/checkout/success', 301));
  // Keep fulfillment-hosted mockup URLs out of the public storefront source.
  app.get('/api/store/product-image/:productId', async (c) => {
    const db = await getDb(c);
    const product = await db.prepare(`
      SELECT image_url FROM products WHERE id = ? AND type = 'printify_merch' AND is_active = 1
    `).bind(c.req.param('productId')).first();
    if (!product?.image_url) return c.text('Not Found', 404);
    try {
      const image = await fetch(product.image_url, { signal: AbortSignal.timeout(8000) });
      if (!image.ok) return c.redirect('/assets/store-editorial.webp', 302);
      return new Response(image.body, { headers: {
        'Content-Type': image.headers.get('content-type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400'
      } });
    } catch {
      return c.redirect('/assets/store-editorial.webp', 302);
    }
  });
  // Store checkout.
  //
  // Store sales: Stripe Checkout (one-time payment), fulfilled through
  // Printify. Only ids and a quantity come from the browser; price, shipping
  // and the variant are resolved server-side.
  app.get('/api/store/checkout', async (c) => {
    const locale = normalizeLocale(c.req.query('locale') || c.get('locale'));
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
    const productId = c.req.query('productId');
    if (!productId) {
      return c.redirect(`${prefix}/store?error=${encodeURIComponent('That item is not available for checkout.')}`);
    }
    try {
      if (!isStripeConfigured(c.env)) throw new Error('The store checkout is not switched on yet.');
      const db = await getDb(c);
      const session = await createStoreCheckout(c.env, db, {
        user: c.get('user'),
        productId,
        variantId: c.req.query('variantId') || null,
        quantity: c.req.query('quantity') || '1',
        locale,
        origin: getAppOrigin(c.env)
      });
      return c.redirect(session.url, 303);
    } catch (err) {
      return c.redirect(`${prefix}/store?error=${encodeURIComponent(err.message)}`);
    }
  });

  app.post('/api/store/checkout', async (c) => {
    const body = await c.req.parseBody();
    const locale = normalizeLocale(body.locale?.toString());
    const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');
    const productId = body.productId?.toString();
    if (!productId) {
      return c.redirect(`${prefix}/store?error=${encodeURIComponent('That item is not available for checkout.')}`);
    }
    try {
      if (!isStripeConfigured(c.env)) throw new Error('The store checkout is not switched on yet.');
      const db = await getDb(c);
      const session = await createStoreCheckout(c.env, db, {
        user: c.get('user'),
        productId,
        variantId: body.variantId?.toString() || null,
        quantity: body.quantity?.toString(),
        locale,
        origin: getAppOrigin(c.env)
      });
      return c.redirect(session.url, 303);
    } catch (err) {
      return c.redirect(`${prefix}/store?error=${encodeURIComponent(err.message)}`);
    }
  });

  // Where Stripe returns the buyer. The order is fulfilled here if the webhook
  // has not arrived yet; fulfilment is idempotent, so both paths are safe.
  app.get('/store/checkout/success', async (c) => {
    const user = c.get('user');
    const sessionId = c.req.query('session_id');
    const db = await getDb(c);
    let order = null;
    let locale = normalizeLocale(c.req.query('locale'));
    try {
      if (sessionId) {
        const session = await retrieveStoreSession(c.env, sessionId);
        locale = normalizeLocale(session.metadata?.locale || locale);
        order = await fulfillStoreSession(c.env, db, session);
      }
    } catch (err) {
      console.error('[store] success-page fulfilment failed:', err.message);
    }
    return c.html(renderOrderSuccessPage({ order, locale, user }));
  });

  // Retired PayPal webhook endpoint.
  app.post('/api/webhooks/paypal', (c) =>
    c.json({ error: 'PAYPAL_RETIRED', message: 'Stripe is the billing provider.' }, 410));

  // Stripe webhook: the membership lifecycle, independent of the return URL.
  // Handles both /api/webhooks/stripe and /api/stripe/webhook (as registered in Stripe Dashboard)
  const handleStripeWebhook = async (c) => {
    const rawBody = await c.req.text();
    let event;
    try {
      event = constructWebhookEvent(c.env, rawBody, c.req.header('stripe-signature'));
    } catch (error) {
      return c.json({ error: 'WEBHOOK_SIGNATURE_INVALID', message: error.message }, 401);
    }

    const db = await getDb(c);
    try {
      const object = event.data?.object || {};
      const customerId = typeof object.customer === 'string' ? object.customer : null;

      switch (event.type) {
        case 'checkout.session.completed':
        case 'checkout.session.async_payment_succeeded': {
          if (object.metadata?.kind === 'store') {
            await fulfillStoreSession(c.env, db, object);
            break;
          }
          const subscriptionId = typeof object.subscription === 'string' ? object.subscription : object.subscription?.id;
          if (subscriptionId) {
            const subscription = await createStripeClient(c.env).subscriptions.retrieve(subscriptionId);
            let userId = object.metadata?.user_id || subscription.metadata?.user_id;
            if (!userId) {
              const email = (object.customer_details?.email || object.customer_email || '').toLowerCase().trim();
              const existing = email ? await db.prepare('SELECT id FROM user WHERE lower(email) = ?').bind(email).first() : null;
              userId = existing?.id;
            }
            if (userId) await applyStripeSubscriptionStatus(db, { ...subscriptionFields(c.env, subscription), userId });
          }
          break;
        }

        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
        case 'customer.subscription.paused':
        case 'customer.subscription.resumed':
        case 'invoice.paid':
        case 'invoice.payment_failed': {
          const subscriptionId = event.type.startsWith('invoice.') ? invoiceSubscriptionId(object) : object.id;
          if (subscriptionId) {
            // Read current state so delayed events cannot undo a later plan change.
            const subscription = await createStripeClient(c.env).subscriptions.retrieve(subscriptionId);
            const fields = subscriptionFields(c.env, subscription);
            const existing = await db.prepare('SELECT user_id FROM subscriptions WHERE provider_sub_id = ? LIMIT 1').bind(subscriptionId).first();
            fields.userId ||= existing?.user_id;
            if (fields.userId) await applyStripeSubscriptionStatus(db, fields);
          }
          break;
        }

        default:
          break;
      }

      return c.json({ received: true });
    } catch (error) {
      return c.json({ error: 'STRIPE_WEBHOOK_PROCESSING_FAILED', message: error.message }, 503);
    }
  };

  app.post('/api/webhooks/stripe', handleStripeWebhook);
  app.post('/api/stripe/webhook', handleStripeWebhook);

  // Printify webhook receiver. Printify's public API does not document a
  // signing header; if a secret is configured, reject unsigned requests.
  app.post('/api/webhooks/printify', async (c) => {
    const rawBody = await c.req.text();
    const secret = c.env?.PRINTIFY_WEBHOOK_SECRET || '';
    const signature = c.req.header('x-pfy-signature')
      || c.req.header('x-printify-signature')
      || c.req.header('x-webhook-signature')
      || '';

    if (getPrintifyMode(c.env) === 'live' && !secret) {
      return c.json({ error: 'Printify webhook verification is not configured.' }, 503);
    }
    if (secret && !verifyPrintifyWebhookSignature(rawBody, signature, secret)) {
      return c.json({ error: 'Invalid webhook signature.' }, 401);
    }

    let payload;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return c.json({ error: 'Webhook payload must be valid JSON.' }, 400);
    }

    try {
      const db = await getDb(c);
      const result = await handlePrintifyWebhook(db, payload, {
        env: c.env,
        sendEmail: (args) => args.eventType === 'printify_order_shipped'
          ? sendPhysicalOrderShippedEmail(args)
          : sendPhysicalOrderReceivedEmail(args)
      });
      return c.json(result);
    } catch (err) {
      return c.json({ error: err.message || 'Unable to process Printify webhook.' }, 400);
    }
  });

  // Protected Digital Download Route
  app.get('/api/download/:token', async (c) => {
    const token = c.req.param('token');
    const db = await getDb(c);

    let download;
    try {
      download = await verifyAndConsumeDownload(db, token);
    } catch (err) {
      return c.text(err.message, 403);
    }

    // Serve the real deliverable from the private digital/ directory. A paid
    // member must never receive a placeholder file in place of their purchase.
    if (download.digitalFileKey) {
      const root = resolve(process.cwd(), 'private');
      const filePath = resolve(root, download.digitalFileKey);
      // Refuse any path that escapes the private root.
      if (!filePath.startsWith(root + sep)) {
        console.error('Rejected download path traversal:', download.digitalFileKey);
        return c.text('This download is not available.', 404);
      }
      if (existsSync(filePath)) {
        const ext = extname(filePath).toLowerCase();
        const filename = `${download.slug}${ext || '.pdf'}`;
        return new Response(readFileSync(filePath), {
          headers: {
            'Content-Type': CONTENT_TYPES[ext] || 'application/octet-stream',
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Content-Length': String(statSync(filePath).size)
          }
        });
      }
      // The entitlement is real but the file is missing: say so plainly rather
      // than sending a silent stub that looks like a successful purchase.
      console.error('Digital deliverable missing on disk:', download.digitalFileKey);
      return c.text(
        'Your download is ready but the file is temporarily unavailable. '
        + 'Please contact support@kindwell.org and we will send it immediately.',
        503
      );
    }

    return c.text('This download is not available. Please contact support@kindwell.org.', 404);
  });

  // Native Better Auth endpoints, including email verification.
  app.on(['GET', 'POST'], '/api/auth/*', async (c) => {
    const db = await getDb(c);
    return createAuth(db, c.env).handler(c.req.raw);
  });

  return app;
}

export default createApp();
