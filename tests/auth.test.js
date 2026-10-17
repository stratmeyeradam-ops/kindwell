// tests/auth.test.js
// Email + password identity through better-auth, with KindWell's own session
// helpers on the same schema.

import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';
import {
  createAuth,
  validateSession,
  destroySession,
  updateUserLocale,
  getUserById
} from '../src/auth/index.js';
import { createSessionForUser, SESSION_TTL_MS } from '../src/auth/sessions.js';
import { registerUser } from './fixtures.js';
import { activateSubscription, TIERS } from '../src/services/memberships.js';
import { createThread, createReply } from '../src/services/circle.js';
import { enrollCourse, completeLesson, getCourseBySlug, listCourses } from '../src/services/courses.js';
import { processOrder } from '../src/services/store.js';

const ORIGIN = 'http://localhost';
const authEnv = { APP_ORIGIN: ORIGIN, BETTER_AUTH_SECRET: 'test-secret-test-secret-test-secret' };

function authRequest(path, body) {
  return new Request(`${ORIGIN}/api/auth${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: ORIGIN },
    body: JSON.stringify(body)
  });
}

describe('Email + password identity (better-auth)', () => {
  let db;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
  });

  test('better-auth owns the schema and exposes a request handler', () => {
    const auth = createAuth(db, authEnv);
    assert.ok(auth);
    assert.equal(typeof auth.handler, 'function');
  });

  test('sign-up creates a free member with a hashed credential and a validatable session', async () => {
    const auth = createAuth(db, authEnv);
    const res = await auth.handler(authRequest('/sign-up/email', {
      email: 'New@Example.com', password: 'correct-horse-battery', name: 'New Member', role: 'admin', tier: 'supported'
    }));
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.ok(body.token, 'autoSignIn returns a session token');

    const userRow = await db.prepare('SELECT * FROM user WHERE email = ?').bind('new@example.com').first();
    assert.ok(userRow, 'email is stored lowercased');
    assert.equal(userRow.tier, 'free');
    assert.equal(userRow.role, 'member');
    assert.equal(userRow.locale, 'en');

    const account = await db.prepare('SELECT * FROM account WHERE userId = ?').bind(userRow.id).first();
    assert.equal(account.providerId, 'credential');
    assert.ok(account.password, 'a password hash is stored');
    assert.notEqual(account.password, 'correct-horse-battery', 'never the plaintext password');

    const validated = await validateSession(db, body.token);
    assert.ok(validated, 'better-auth session rows are readable by validateSession');
    assert.equal(validated.user.id, userRow.id);
  });

  test('sign-in accepts the right password and rejects the wrong one', async () => {
    const auth = createAuth(db, authEnv);
    await auth.handler(authRequest('/sign-up/email', {
      email: 'member@example.com', password: 'correct-horse-battery', name: 'Member'
    }));

    const ok = await auth.handler(authRequest('/sign-in/email', {
      email: 'member@example.com', password: 'correct-horse-battery'
    }));
    assert.equal(ok.status, 200);
    assert.ok((await ok.json()).token);

    const bad = await auth.handler(authRequest('/sign-in/email', {
      email: 'member@example.com', password: 'wrong-password'
    }));
    assert.notEqual(bad.status, 200);
  });

  test('passwords shorter than 8 characters are refused', async () => {
    const auth = createAuth(db, authEnv);
    const res = await auth.handler(authRequest('/sign-up/email', {
      email: 'short@example.com', password: 'short', name: 'Short'
    }));
    assert.notEqual(res.status, 200);
    const row = await db.prepare('SELECT id FROM user WHERE email = ?').bind('short@example.com').first();
    assert.equal(row, null);
  });

  test('duplicate sign-up for an existing email does not create a second user', async () => {
    const auth = createAuth(db, authEnv);
    await auth.handler(authRequest('/sign-up/email', {
      email: 'same@example.com', password: 'correct-horse-battery', name: 'First'
    }));
    const second = await auth.handler(authRequest('/sign-up/email', {
      email: 'same@example.com', password: 'another-password', name: 'Second'
    }));
    assert.notEqual(second.status, 200);
    const { count } = await db.prepare('SELECT COUNT(*) as count FROM user WHERE email = ?')
      .bind('same@example.com').first();
    assert.equal(count, 1);
  });

  test('minted sessions validate and expire as ISO timestamps', async () => {
    const { user } = await registerUser(db, { email: 'sess@example.com', name: 'Session Member' });
    const now = new Date().toISOString();
    const session = await createSessionForUser(db, user.id, { now });
    const row = await db.prepare('SELECT * FROM session WHERE token = ?').bind(session.token).first();
    assert.equal(typeof row.expiresAt, 'string');
    assert.ok(row.expiresAt.endsWith('Z'), 'ISO string, matching what validateSession compares');
    assert.equal(Date.parse(row.expiresAt) - Date.parse(now), SESSION_TTL_MS);

    const validated = await validateSession(db, session.token);
    assert.ok(validated);
    assert.equal(validated.user.id, user.id);
  });

  test('expired sessions do not validate', async () => {
    const { user } = await registerUser(db, { email: 'old@example.com', name: 'Old Session' });
    const session = await createSessionForUser(db, user.id, {
      now: new Date(Date.now() - SESSION_TTL_MS - 60_000).toISOString()
    });
    assert.equal(await validateSession(db, session.token), null);
    assert.equal(await validateSession(db, null), null);
    assert.equal(await validateSession(db, 'not-a-token'), null);
  });

  test('validates active session and returns user profile', async () => {
    const { user, session } = await registerUser(db, {
      email: 'session_test@example.com',
      name: 'Session Test'
    });

    const validated = await validateSession(db, session.token);
    assert.ok(validated);
    assert.equal(validated.user.id, user.id);
    assert.equal(validated.user.email, 'session_test@example.com');
    assert.equal(validated.session.token, session.token);
  });

  test('destroySession removes session from the session table immediately', async () => {
    const { session } = await registerUser(db, {
      email: 'logout_test@example.com',
      name: 'Logout Test'
    });

    assert.ok(await validateSession(db, session.token));

    await destroySession(db, session.token);

    assert.equal(await validateSession(db, session.token), null);
    const dbRow = await db.prepare('SELECT * FROM session WHERE token = ?').bind(session.token).first();
    assert.equal(dbRow, null);
  });

  test('locale persistence updates the user record and ignores unknown locales', async () => {
    const { user } = await registerUser(db, {
      email: 'locale_user@example.com',
      name: 'Locale User',
      locale: 'en'
    });
    assert.equal(user.locale, 'en');

    await updateUserLocale(db, user.id, 'pt-BR');
    assert.equal((await getUserById(db, user.id)).locale, 'pt-BR');

    await updateUserLocale(db, user.id, 'fr');
    assert.equal((await getUserById(db, user.id)).locale, 'pt-BR', 'unsupported locale is ignored');
  });
});

describe('Member data links to the better-auth user.id', () => {
  let db;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);
  });

  test('membership association', async () => {
    const { user } = await registerUser(db, { email: 'membership_user@example.com', name: 'Member Rel' });

    await activateSubscription(db, { userId: user.id, tier: TIERS.STEADY });

    const sub = await db.prepare('SELECT * FROM subscriptions WHERE user_id = ?').bind(user.id).first();
    assert.ok(sub);
    assert.equal(sub.user_id, user.id);
    assert.equal(sub.tier, 'steady');

    assert.equal((await getUserById(db, user.id)).tier, 'steady');
  });

  test('favorites', async () => {
    const { user } = await registerUser(db, { email: 'fav_user@example.com', name: 'Fav Rel' });

    const favId = 'fav_' + Math.random().toString(36).slice(2, 10);
    await db.prepare('INSERT INTO saved_favorites (id, user_id, item_type, item_id, created_at) VALUES (?, ?, ?, ?, ?)')
      .bind(favId, user.id, 'practice', 'arrive', new Date().toISOString()).run();

    const favRow = await db.prepare('SELECT * FROM saved_favorites WHERE user_id = ?').bind(user.id).first();
    assert.ok(favRow);
    assert.equal(favRow.user_id, user.id);
  });

  test('course progress', async () => {
    const { user } = await registerUser(db, { email: 'course_user@example.com', name: 'Course Rel' });
    await activateSubscription(db, { userId: user.id, tier: TIERS.SUPPORTED });
    const supUser = await getUserById(db, user.id);

    const [first] = await listCourses(db, 'en');
    const course = await getCourseBySlug(db, first.slug, 'en');
    const enrollment = await enrollCourse(db, supUser, course.id);
    assert.equal(enrollment.userId, user.id);

    const progRes = await completeLesson(db, {
      enrollmentId: enrollment.id,
      lessonId: course.modules[0].lessons[0].id,
      reflectionNote: 'Learning to pause.'
    });
    assert.ok(progRes.success);
  });

  test('Circle threads and replies', async () => {
    const { user } = await registerUser(db, { email: 'circle_auth@example.com', name: 'Circle Auth Member' });
    await activateSubscription(db, { userId: user.id, tier: TIERS.SUPPORTED });
    const supUser = await getUserById(db, user.id);

    const thread = await createThread(db, supUser, {
      spaceId: 'gentle-check-in',
      title: 'A quiet evening check-in',
      body: 'Taking a slow breath with tea.'
    });
    assert.equal(thread.userId, user.id);

    const reply = await createReply(db, supUser, { threadId: thread.id, body: 'Right there with you.' });
    assert.equal(reply.userId, user.id);
  });

  test('store orders', async () => {
    const { user } = await registerUser(db, { email: 'store_buyer@example.com', name: 'Store Buyer' });

    const order = await processOrder(db, {
      user,
      customerEmail: user.email,
      customerName: user.name,
      items: [{ productId: 'prod_mug', quantity: 1 }],
      shippingAddress: { state: 'OR', country: 'US' }
    });

    const orderRow = await db.prepare('SELECT * FROM orders WHERE id = ?').bind(order.orderId).first();
    assert.equal(orderRow.user_id, user.id);
    assert.deepEqual(order.downloadLinks, [], 'merch orders issue no download links');
  });
});

describe('Sign-in routes', () => {
  let db;
  let app;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);
    const { createApp } = await import('../src/app.js');
    app = createApp(db);
  });

  test('retired PayPal sign-in entry points land on the account page', async () => {
    const start = await app.request('/auth/paypal', {}, authEnv);
    assert.equal(start.status, 302);
    assert.equal(start.headers.get('location'), '/account');
    assert.doesNotMatch(start.headers.get('location'), /paypal\.com/);

    const localized = await app.request('/auth/paypal?locale=es', {}, authEnv);
    assert.equal(localized.headers.get('location'), '/es/account');

    const callback = await app.request('/auth/paypal/callback?code=x&state=y', {}, authEnv);
    assert.equal(callback.status, 301);
    assert.equal(callback.headers.get('location'), '/account');
  });

  test('retired credential endpoints redirect instead of accepting credentials', async () => {
    for (const path of ['/api/auth/register', '/api/auth/login', '/api/auth/request-reset', '/api/auth/complete-reset']) {
      const res = await app.request(path, { method: 'POST' }, authEnv);
      assert.equal(res.status, 303, path);
      assert.equal(res.headers.get('location'), '/account', path);
    }
  });

  test('the account page offers email + password sign-in to signed-out visitors', async () => {
    const html = await (await app.request('/account', {}, authEnv)).text();
    assert.match(html, /\/api\/auth\/'\s*\+\s*\(mode === 'signup' \? 'sign-up' : 'sign-in'\)\s*\+\s*'\/email'/);
    assert.match(html, /type="password"/);
    assert.doesNotMatch(html, /href="\/auth\/paypal/, 'no PayPal sign-in link is offered');
  });

  test('a kindwell_session cookie signs the member in and logout destroys it', async () => {
    const { user, session } = await registerUser(db, { email: 'cookie@example.com', name: 'Cookie Member' });
    const cookie = `kindwell_session=${session.token}`;

    const signedIn = await (await app.request('/account', { headers: { cookie } }, authEnv)).text();
    assert.match(signedIn, /Cookie Member|cookie@example\.com/);

    const out = await app.request('/api/auth/logout', { method: 'POST', headers: { cookie } }, authEnv);
    assert.equal(out.status, 302);
    assert.equal(await validateSession(db, session.token), null);
    assert.ok(user.id);
  });

  test('a member who signs up through better-auth is signed in on the next page load, and logout ends it', async () => {
    const res = await app.request('/api/auth/sign-up/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: ORIGIN },
      body: JSON.stringify({ email: 'fresh@example.com', password: 'correct-horse-battery', name: 'Fresh Member' })
    }, authEnv);
    assert.equal(res.status, 200);
    const cookie = res.headers.get('set-cookie').split(';')[0];
    assert.match(cookie, /^better-auth\.session_token=/);

    const page = await (await app.request('/account', { headers: { cookie } }, authEnv)).text();
    assert.match(page, /Fresh Member|fresh@example\.com/, 'the new member is recognised');

    const out = await app.request('/api/auth/logout', { method: 'POST', headers: { cookie, Origin: ORIGIN } }, authEnv);
    assert.equal(out.status, 302);
    const { count } = await db.prepare(
      'SELECT COUNT(*) as count FROM session s JOIN user u ON u.id = s.userId WHERE u.email = ?'
    ).bind('fresh@example.com').first();
    assert.equal(count, 0, 'the server-side session row is gone');

    const after = await (await app.request('/account', { headers: { cookie } }, authEnv)).text();
    assert.doesNotMatch(after, /Fresh Member|fresh@example\.com/, 'the old cookie no longer signs anyone in');
  });

  test('a forged better-auth cookie signs nobody in', async () => {
    const page = await (await app.request('/account', {
      headers: { cookie: 'better-auth.session_token=forged.signature' }
    }, authEnv)).text();
    assert.match(page, /type="password"/, 'the sign-in form is shown');
  });
});
