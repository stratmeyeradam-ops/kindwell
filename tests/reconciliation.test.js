// tests/reconciliation.test.js
// The second path to completion: hPanel cron sweeps that settle Stripe
// memberships whose webhook/return never landed, and discover Hostinger store
// orders (the Ecommerce API has no order webhook).

import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { seedDatabase } from '../src/db/seed.js';
import { registerUser } from './fixtures.js';
import {
  reconcilePendingSubscriptions,
  reconcileAll,
  ABANDON_AFTER_DAYS
} from '../src/services/reconciliation.js';
import { recordPendingStripeSubscription, TIERS } from '../src/services/memberships.js';

const env = { STRIPE_SECRET_KEY: 'sk_test_dummy' };

// A Stripe stub that records what was asked of it.
function stubStripe({ subscriptions = {}, throwFor = {} } = {}) {
  const calls = { retrieve: [], factory: 0 };
  const client = {
    subscriptions: {
      async retrieve(id) {
        calls.retrieve.push(id);
        if (throwFor[id]) throw new Error(throwFor[id]);
        return subscriptions[id];
      }
    }
  };
  return {
    calls,
    stripeFactory: () => { calls.factory += 1; return client; }
  };
}

function stripeSubscription(id, status, { tier, userId } = {}) {
  return {
    id,
    status,
    customer: `cus_${id}`,
    metadata: { ...(tier ? { tier } : {}), ...(userId ? { user_id: userId } : {}) },
    current_period_start: 1_790_000_000,
    current_period_end: 1_792_592_000
  };
}

describe('Stripe membership reconciliation', () => {
  let db;
  const now = new Date('2026-09-15T12:00:00.000Z');
  const oldEnough = new Date(now.getTime() - 10 * 60 * 1000).toISOString();

  async function pending(user, tier, stripeSubscriptionId, createdAt = oldEnough) {
    const { id } = await recordPendingStripeSubscription(db, { userId: user.id, tier, stripeSubscriptionId });
    await db.prepare('UPDATE subscriptions SET created_at = ? WHERE id = ?').bind(createdAt, id).run();
    return id;
  }

  const statusOf = async (id) => (await db.prepare('SELECT status FROM subscriptions WHERE id = ?').bind(id).first()).status;
  const tierOf = async (userId) => (await db.prepare('SELECT tier FROM user WHERE id = ?').bind(userId).first()).tier;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);
  });

  test('activates a subscription whose confirmation never arrived', async () => {
    const { user } = await registerUser(db, { email: 'lost@kindwell.org', name: 'Lost Activation' });
    const id = await pending(user, TIERS.SUPPORTED, 'sub_LOST');
    const stripe = stubStripe({ subscriptions: { sub_LOST: stripeSubscription('sub_LOST', 'active', { tier: 'supported', userId: user.id }) } });

    const summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.examined, 1);
    assert.equal(summary.activated, 1);
    assert.deepEqual(stripe.calls.retrieve, ['sub_LOST']);

    assert.equal(await statusOf(id), 'active');
    assert.equal(await tierOf(user.id), TIERS.SUPPORTED, 'access granted without any webhook');
    const row = await db.prepare('SELECT provider_customer_id, current_period_end FROM subscriptions WHERE id = ?').bind(id).first();
    assert.equal(row.provider_customer_id, 'cus_sub_LOST');
    assert.equal(row.current_period_end, new Date(1_792_592_000 * 1000).toISOString());
  });

  test('falls back to the local row when Stripe metadata is missing', async () => {
    const { user } = await registerUser(db, { email: 'nometa@kindwell.org', name: 'No Metadata' });
    const id = await pending(user, TIERS.STEADY, 'sub_NOMETA');
    const stripe = stubStripe({ subscriptions: { sub_NOMETA: stripeSubscription('sub_NOMETA', 'trialing') } });

    const summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.activated, 1, 'trialing counts as active');
    assert.equal(await statusOf(id), 'active');
    assert.equal(await tierOf(user.id), TIERS.STEADY);
  });

  test('is idempotent — a second sweep does not re-examine a settled row', async () => {
    const { user } = await registerUser(db, { email: 'twice@kindwell.org', name: 'Twice' });
    await pending(user, TIERS.KIND, 'sub_TWICE');
    const stripe = stubStripe({ subscriptions: { sub_TWICE: stripeSubscription('sub_TWICE', 'active', { tier: 'kind' }) } });

    await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    const second = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(second.examined, 0);
    assert.equal(stripe.calls.retrieve.length, 1, 'Stripe asked exactly once');
    const { count } = await db.prepare('SELECT COUNT(*) as count FROM subscriptions WHERE provider_sub_id = ?').bind('sub_TWICE').first();
    assert.equal(count, 1, 'no duplicate subscription rows');
  });

  test('an incomplete subscription stays pending and grants nothing', async () => {
    const { user } = await registerUser(db, { email: 'stalled@kindwell.org', name: 'Stalled' });
    const id = await pending(user, TIERS.KIND, 'sub_STALLED');
    const stripe = stubStripe({ subscriptions: { sub_STALLED: stripeSubscription('sub_STALLED', 'incomplete', { tier: 'kind' }) } });

    const summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.waiting, 1);
    assert.equal(await statusOf(id), 'pending', 'still pending, still recoverable');
    assert.equal(await tierOf(user.id), 'free');
  });

  test('an expired checkout is recorded as canceled', async () => {
    const { user } = await registerUser(db, { email: 'expired@kindwell.org', name: 'Expired' });
    const id = await pending(user, TIERS.KIND, 'sub_EXPIRED');
    const stripe = stubStripe({ subscriptions: { sub_EXPIRED: stripeSubscription('sub_EXPIRED', 'incomplete_expired') } });

    const summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.activated, 0);
    assert.equal(await statusOf(id), 'canceled');
    assert.equal(await tierOf(user.id), 'free');
  });

  test('a subscription Stripe no longer knows about is abandoned', async () => {
    const { user } = await registerUser(db, { email: 'gone@kindwell.org', name: 'Gone' });
    const id = await pending(user, TIERS.STEADY, 'sub_GONE');
    const stripe = stubStripe({ throwFor: { sub_GONE: 'No such subscription: sub_GONE' } });

    const summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.abandoned, 1);
    assert.equal(await statusOf(id), 'abandoned');
  });

  test('a transient Stripe failure leaves the row pending and does not stop the batch', async () => {
    const { user: bad } = await registerUser(db, { email: 'bad@kindwell.org', name: 'Bad' });
    const { user: good } = await registerUser(db, { email: 'good@kindwell.org', name: 'Good' });
    const badId = await pending(bad, TIERS.STEADY, 'sub_BAD');
    await pending(good, TIERS.STEADY, 'sub_GOOD');
    const stripe = stubStripe({
      subscriptions: { sub_GOOD: stripeSubscription('sub_GOOD', 'active', { tier: 'steady' }) },
      throwFor: { sub_BAD: 'Stripe is having a bad day (500)' }
    });

    const originalError = console.error;
    console.error = () => {};
    try {
      const summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
      assert.equal(summary.failed, 1);
      assert.equal(summary.activated, 1, 'the healthy subscription still completes');
    } finally {
      console.error = originalError;
    }
    assert.equal(await statusOf(badId), 'pending', 'retried on the next sweep');
    assert.equal(await tierOf(good.id), TIERS.STEADY);
  });

  test('a pending row with no Stripe id waits, then is abandoned past the window', async () => {
    const { user } = await registerUser(db, { email: 'noid@kindwell.org', name: 'No Id' });
    const id = await pending(user, TIERS.KIND, null);
    const stripe = stubStripe();

    let summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.waiting, 1, 'a recent abandoned checkout stays pending');
    assert.equal(stripe.calls.factory, 0, 'Stripe is not contacted when there is nothing to ask it');

    const later = new Date(now.getTime() + (ABANDON_AFTER_DAYS + 1) * 86400_000);
    summary = await reconcilePendingSubscriptions(db, env, { now: later, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.abandoned, 1);
    assert.equal(await statusOf(id), 'abandoned');
    assert.equal(await tierOf(user.id), 'free', 'abandoning costs the member nothing');
  });

  test('the user-scoped sweep touches only that member', async () => {
    const a = await registerUser(db, { email: 'a@kindwell.org', name: 'A' });
    const b = await registerUser(db, { email: 'b@kindwell.org', name: 'B' });
    await pending(a.user, TIERS.STEADY, 'sub_A');
    const bId = await pending(b.user, TIERS.STEADY, 'sub_B');
    const stripe = stubStripe({
      subscriptions: {
        sub_A: stripeSubscription('sub_A', 'active', { tier: 'steady' }),
        sub_B: stripeSubscription('sub_B', 'active', { tier: 'steady' })
      }
    });

    await reconcilePendingSubscriptions(db, env, { now, userId: a.user.id, stripeFactory: stripe.stripeFactory });
    assert.deepEqual(stripe.calls.retrieve, ['sub_A'], 'only the named member is reconciled');
    assert.equal(await statusOf(bId), 'pending');
  });

  test('settled rows are never reopened', async () => {
    const { user } = await registerUser(db, { email: 'real-cancel@kindwell.org', name: 'Real Cancel' });
    const id = await pending(user, TIERS.KIND, 'sub_REALCANCEL');
    await db.prepare("UPDATE subscriptions SET status = 'canceled' WHERE id = ?").bind(id).run();
    const stripe = stubStripe({ subscriptions: { sub_REALCANCEL: stripeSubscription('sub_REALCANCEL', 'active', { tier: 'kind' }) } });

    const summary = await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.equal(summary.examined, 0, 'a cancellation is not re-opened by the sweep');
    assert.equal(await statusOf(id), 'canceled');
  });

  test('the batch limit is honoured', async () => {
    for (let i = 0; i < 3; i += 1) {
      const { user } = await registerUser(db, { email: `batch${i}@kindwell.org`, name: `Batch ${i}` });
      await pending(user, TIERS.KIND, null);
    }
    const summary = await reconcilePendingSubscriptions(db, env, { now, limit: 2, stripeFactory: stubStripe().stripeFactory });
    assert.equal(summary.examined, 2);
  });

  test('an unrecognised tier in Stripe metadata never becomes a member tier', {}, async () => {
    const { user } = await registerUser(db, { email: 'meta@kindwell.org', name: 'Meta' });
    await pending(user, TIERS.KIND, 'sub_META');
    const stripe = stubStripe({ subscriptions: { sub_META: stripeSubscription('sub_META', 'active', { tier: 'platinum' }) } });
    await reconcilePendingSubscriptions(db, env, { now, stripeFactory: stripe.stripeFactory });
    assert.ok(Object.values(TIERS).includes(await tierOf(user.id)));
  });
});

describe('Reconciliation endpoints', () => {
  let db;
  let app;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    await seedDatabase(db);
    const { createApp } = await import('../src/app.js');
    app = createApp(db);
  });

  test('the cron endpoint stays closed without a secret and checks it when set', async () => {
    const savedSecret = process.env.CRON_SECRET;
    delete process.env.CRON_SECRET;
    try {
      assert.equal((await app.request('/api/cron/reconcile', { method: 'POST' }, {})).status, 503);

      const env = { CRON_SECRET: 'cron-secret' };
      assert.equal((await app.request('/api/cron/reconcile', { method: 'POST' }, env)).status, 403);
      assert.equal((await app.request('/api/cron/reconcile?secret=wrong', { method: 'POST' }, env)).status, 403);

      const ok = await app.request('/api/cron/reconcile', {
        method: 'POST', headers: { Authorization: 'Bearer cron-secret' }
      }, env);
      assert.equal(ok.status, 200);
      const body = await ok.json();
      assert.equal(body.success, true);
      assert.ok(body.subscriptions);
      assert.equal(body.orders, undefined, 'no retired store polling');
    } finally {
      if (savedSecret !== undefined) process.env.CRON_SECRET = savedSecret;
    }
  });

  test('the manual sweep is admin-only', async () => {
    assert.equal((await app.request('/api/admin/reconcile', { method: 'POST' }, {})).status, 401);

    const member = await registerUser(db, { email: 'member@kindwell.org', name: 'Member' });
    const asMember = await app.request('/api/admin/reconcile', {
      method: 'POST', headers: { cookie: `kindwell_session=${member.session.token}` }
    }, {});
    assert.equal(asMember.status, 403);

    const admin = await registerUser(db, { email: 'admin@kindwell.org', name: 'Admin', role: 'admin' });
    const asAdmin = await app.request('/api/admin/reconcile', {
      method: 'POST', headers: { cookie: `kindwell_session=${admin.session.token}` }
    }, {});
    assert.equal(asAdmin.status, 200);
  });
});
