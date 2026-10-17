// tests/memberships.test.js
import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import Stripe from 'stripe';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { registerUser } from './fixtures.js';
import { renderPricingPage } from '../src/views/pricing.js';
import { createApp } from '../src/app.js';
import {
  TIERS,
  TIER_PRICES,
  canSaveFavorites,
  canReadWellnessLetter,
  canAccessQuizzes,
  canAccessFullPractices,
  canReadCircle,
  canPostInCircle,
  getStoreDiscountRate,
  activateSubscription,
  cancelSubscription,
  recordPendingStripeSubscription,
  applyStripeSubscriptionStatus,
  getStripeCustomerId
} from '../src/services/memberships.js';
import {
  mapStripeStatus,
  buildTierLineItem,
  STRIPE_PENDING_STATUSES,
  STRIPE_ENDED_STATUSES
} from '../src/services/stripe.js';

describe('Membership Tiers & Entitlement Gating', () => {
  let db;
  let user;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    const res = await registerUser(db, { email: 'member_test@kindwell.org', name: 'Member Test' });
    user = res.user;
  });

  test('tier prices match the specification: Free $0, Kind $5, Steady $10, Supported $20', () => {
    assert.equal(TIER_PRICES.free, 0.00);
    assert.equal(TIER_PRICES.kind, 5.00);
    assert.equal(TIER_PRICES.steady, 10.00);
    assert.equal(TIER_PRICES.supported, 20.00);
  });

  test('Stripe inline prices are derived from the canonical tier prices', () => {
    for (const tier of [TIERS.KIND, TIERS.STEADY, TIERS.SUPPORTED]) {
      const item = buildTierLineItem({}, tier);
      assert.equal(item.price_data.unit_amount, Math.round(TIER_PRICES[tier] * 100));
      assert.equal(item.price_data.recurring.interval, 'month');
    }
    assert.deepEqual(buildTierLineItem({ STRIPE_PRICE_STEADY: 'price_123' }, TIERS.STEADY), { price: 'price_123', quantity: 1 });
    assert.throws(() => buildTierLineItem({}, TIERS.FREE), /No price configured/);
  });

  test('Free tier ($0) entitlements', () => {
    assert.equal(canSaveFavorites(user), false);
    assert.equal(canReadWellnessLetter(user), false);
    assert.equal(canAccessQuizzes(user), false);
    assert.equal(canAccessFullPractices(user), false);
    assert.equal(canReadCircle(user), false);
    assert.equal(canPostInCircle(user), false);
    assert.equal(getStoreDiscountRate(user), 0.0);
  });

  test('Kind tier ($5) entitlements', async () => {
    await activateSubscription(db, { userId: user.id, tier: TIERS.KIND });
    const updated = await db.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();

    assert.equal(updated.tier, 'kind');
    assert.equal(canSaveFavorites(updated), true);
    assert.equal(canReadWellnessLetter(updated), true);
    assert.equal(canAccessQuizzes(updated), false);
    assert.equal(canReadCircle(updated), false);
    assert.equal(canPostInCircle(updated), false);
  });

  test('Steady tier ($10) entitlements', async () => {
    await activateSubscription(db, { userId: user.id, tier: TIERS.STEADY });
    const updated = await db.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();

    assert.equal(updated.tier, 'steady');
    assert.equal(canSaveFavorites(updated), true);
    assert.equal(canReadWellnessLetter(updated), true);
    assert.equal(canAccessQuizzes(updated), true);
    assert.equal(canAccessFullPractices(updated), true);
    assert.equal(canReadCircle(updated), true); // Steady can read
    assert.equal(canPostInCircle(updated), false); // Steady cannot post
    assert.equal(getStoreDiscountRate(updated), 0.0);
  });

  test('Supported tier ($20) entitlements', async () => {
    await activateSubscription(db, { userId: user.id, tier: TIERS.SUPPORTED });
    const updated = await db.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();

    assert.equal(updated.tier, 'supported');
    assert.equal(canSaveFavorites(updated), true);
    assert.equal(canAccessQuizzes(updated), true);
    assert.equal(canReadCircle(updated), true);
    assert.equal(canPostInCircle(updated), true); // Supported can post!
    assert.equal(getStoreDiscountRate(updated), 0.15); // 15% discount
  });

  test('activation records the Stripe price and cancellation records intent', async () => {
    const res = await activateSubscription(db, {
      userId: user.id, tier: TIERS.SUPPORTED, providerSubId: 'sub_live_1', providerCustomerId: 'cus_1'
    });
    assert.ok(res.success);
    assert.equal(res.tier, 'supported');

    const subRow = await db.prepare("SELECT * FROM subscriptions WHERE user_id = ? AND status = 'active'").bind(user.id).first();
    assert.ok(subRow);
    assert.equal(subRow.amount, 20.00);
    assert.equal(subRow.provider, 'stripe');
    assert.equal(subRow.provider_sub_id, 'sub_live_1');
    assert.equal(await getStripeCustomerId(db, user.id), 'cus_1');

    await cancelSubscription(db, user.id);
    const afterCancel = await db.prepare('SELECT cancel_at_period_end, status FROM subscriptions WHERE id = ?').bind(subRow.id).first();
    assert.equal(afterCancel.cancel_at_period_end, 1);
    assert.equal(afterCancel.status, 'active', 'access runs to the end of the paid period');
  });

  test('a new activation supersedes the previous active plan', async () => {
    await activateSubscription(db, { userId: user.id, tier: TIERS.KIND });
    await activateSubscription(db, { userId: user.id, tier: TIERS.SUPPORTED });
    const { results } = await db.prepare("SELECT tier FROM subscriptions WHERE user_id = ? AND status = 'active'").bind(user.id).all();
    assert.deepEqual(results.map((r) => r.tier), ['supported'], 'exactly one live subscription');
  });

  test('invalid tiers are refused', async () => {
    await assert.rejects(() => activateSubscription(db, { userId: user.id, tier: 'platinum' }), /Invalid/);
    await assert.rejects(() => recordPendingStripeSubscription(db, { userId: user.id, tier: 'platinum' }), /Invalid/);
  });

  test('Stripe statuses map onto the app states', () => {
    assert.equal(mapStripeStatus('active'), 'active');
    assert.equal(mapStripeStatus('trialing'), 'active');
    assert.equal(mapStripeStatus('incomplete'), 'pending');
    assert.equal(mapStripeStatus('past_due'), 'past_due');
    assert.equal(mapStripeStatus('canceled'), 'canceled');
    assert.equal(mapStripeStatus('incomplete_expired'), 'canceled');
    assert.equal(mapStripeStatus('unpaid'), 'canceled');
    assert.equal(mapStripeStatus('paused'), 'canceled');
    assert.equal(mapStripeStatus(undefined), null);
  });

  test('a pre-payment status must not cancel a subscription awaiting payment', async () => {
    // Regression carried over from the PayPal era: the webhook announcing a
    // subscription's creation must never be read as its cancellation.
    const { user } = await registerUser(db, { email: 'pending@kindwell.org', name: 'Pending Member' });
    await recordPendingStripeSubscription(db, {
      userId: user.id, tier: TIERS.STEADY, stripeSubscriptionId: 'sub_PENDING'
    });

    for (const status of STRIPE_PENDING_STATUSES) {
      const result = await applyStripeSubscriptionStatus(db, {
        stripeSubscriptionId: 'sub_PENDING', tier: TIERS.STEADY, status, userId: user.id
      });
      assert.equal(result.awaitingApproval, true, `${status} must be treated as pre-payment`);

      const row = await db.prepare('SELECT status FROM subscriptions WHERE provider_sub_id = ?')
        .bind('sub_PENDING').first();
      assert.equal(row.status, 'pending', `${status} must leave the row pending, not canceled`);
      const u = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
      assert.equal(u.tier, 'free', 'no access before payment');
    }
  });

  test('payment after an incomplete status still activates the membership', async () => {
    const { user } = await registerUser(db, { email: 'approves@kindwell.org', name: 'Approver' });
    await recordPendingStripeSubscription(db, {
      userId: user.id, tier: TIERS.SUPPORTED, stripeSubscriptionId: 'sub_APPROVES', stripeCustomerId: 'cus_A'
    });
    await applyStripeSubscriptionStatus(db, {
      stripeSubscriptionId: 'sub_APPROVES', tier: TIERS.SUPPORTED, status: 'incomplete', userId: user.id
    });
    await applyStripeSubscriptionStatus(db, {
      stripeSubscriptionId: 'sub_APPROVES', tier: TIERS.SUPPORTED, status: 'active', userId: user.id
    });

    const { results } = await db.prepare('SELECT status, amount FROM subscriptions WHERE provider_sub_id = ?')
      .bind('sub_APPROVES').all();
    assert.equal(results.length, 1, 'the pending row is promoted, not duplicated');
    assert.equal(results[0].status, 'active');
    assert.equal(results[0].amount, 20.00);
    const updated = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
    assert.equal(updated.tier, TIERS.SUPPORTED, 'the member gets the tier they paid for');
  });

  test('an active status for an unknown subscription creates it from metadata', async () => {
    const { user } = await registerUser(db, { email: 'direct@kindwell.org', name: 'Direct' });
    await applyStripeSubscriptionStatus(db, {
      stripeSubscriptionId: 'sub_DIRECT', tier: TIERS.KIND, status: 'active', userId: user.id, customerId: 'cus_D'
    });
    const row = await db.prepare('SELECT status, tier, provider FROM subscriptions WHERE provider_sub_id = ?').bind('sub_DIRECT').first();
    assert.deepEqual({ ...row }, { status: 'active', tier: 'kind', provider: 'stripe' });

    await assert.rejects(
      () => applyStripeSubscriptionStatus(db, { stripeSubscriptionId: 'sub_ORPHAN', status: 'active' }),
      /requires a user and (a valid )?tier/,
      'never grants access without knowing whom and what'
    );
  });

  test('genuine end states revoke access', async () => {
    for (const status of STRIPE_ENDED_STATUSES) {
      const { user } = await registerUser(db, { email: `end_${status}@kindwell.org`, name: 'Ending' });
      const subId = `sub_END_${status}`;
      await recordPendingStripeSubscription(db, { userId: user.id, tier: TIERS.STEADY, stripeSubscriptionId: subId });
      await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: subId, tier: TIERS.STEADY, status: 'active', userId: user.id });
      await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: subId, tier: TIERS.STEADY, status, userId: user.id });

      const row = await db.prepare('SELECT status FROM subscriptions WHERE provider_sub_id = ?').bind(subId).first();
      assert.equal(row.status, 'canceled', `${status} ends the subscription`);
      const downgraded = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
      assert.equal(downgraded.tier, 'free');
    }
  });

  test('ending an old subscription never downgrades a member with another active one', async () => {
    const { user } = await registerUser(db, { email: 'upgrader@kindwell.org', name: 'Upgrader' });
    await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: 'sub_OLD', tier: TIERS.KIND, status: 'active', userId: user.id });
    await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: 'sub_NEW', tier: TIERS.SUPPORTED, status: 'active', userId: user.id });
    await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: 'sub_OLD', status: 'canceled' });

    const u = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
    assert.equal(u.tier, TIERS.SUPPORTED);
  });

  test('past_due is recorded, and an unknown status never changes entitlement', async () => {
    const { user } = await registerUser(db, { email: 'odd@kindwell.org', name: 'Odd' });
    await recordPendingStripeSubscription(db, { userId: user.id, tier: TIERS.STEADY, stripeSubscriptionId: 'sub_ODD' });
    await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: 'sub_ODD', tier: TIERS.STEADY, status: 'active', userId: user.id });

    await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: 'sub_ODD', tier: TIERS.STEADY, status: 'past_due', userId: user.id });
    let row = await db.prepare('SELECT status FROM subscriptions WHERE provider_sub_id = ?').bind('sub_ODD').first();
    assert.equal(row.status, 'past_due');
    const tierAfterPastDue = (await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first()).tier;

    const result = await applyStripeSubscriptionStatus(db, {
      stripeSubscriptionId: 'sub_ODD', tier: TIERS.STEADY, status: 'something_new', userId: user.id
    });
    assert.equal(result.status, 'unchanged');
    row = await db.prepare('SELECT status FROM subscriptions WHERE provider_sub_id = ?').bind('sub_ODD').first();
    assert.equal(row.status, 'past_due', 'an unknown status leaves the subscription untouched');
    const u = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
    assert.equal(u.tier, tierAfterPastDue, 'an unknown status leaves entitlement untouched');
  });

  test('a status for a subscription the app has never seen is ignored unless active', async () => {
    const result = await applyStripeSubscriptionStatus(db, { stripeSubscriptionId: 'sub_NEVER', status: 'canceled' });
    assert.equal(result.ignored, true);
  });
});

describe('Membership availability gate', () => {
  let db;
  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
  });

  test('pricing page shows tiers but no purchase path when memberships are closed', async () => {
    const html = await renderPricingPage(db, {
      locale: 'en', user: null, env: { MEMBERSHIPS_ENABLED: 'false' }
    });
    assert.match(html, /\$5 <span/, 'tiers stay visible for marketing');
    assert.match(html, /\$10 <span/);
    assert.match(html, /\$20 <span/);
    assert.match(html, /Opening soon/);
    assert.match(html, /store is open now/i, 'points people at the thing that does work');
    assert.doesNotMatch(html, /action="\/api\/membership\/subscribe"/, 'no button is wired to a purchase');
    assert.match(html, /disabled aria-disabled="true"/, 'the CTA is genuinely disabled, not just restyled');
  });

  test('pricing page is purchasable when memberships are open', async () => {
    const html = await renderPricingPage(db, {
      locale: 'en', user: null, env: { MEMBERSHIPS_ENABLED: 'true' }
    });
    assert.match(html, /name="tier" value="kind"/);
    assert.match(html, /name="tier" value="steady"/);
    assert.match(html, /name="tier" value="supported"/);
    assert.doesNotMatch(html, /Opening soon/);
  });

  test('defaults to open when the flag is absent, so dev is unaffected', async () => {
    const html = await renderPricingPage(db, { locale: 'en', user: null, env: {} });
    assert.match(html, /action="\/api\/membership\/subscribe"/);
  });

  test('the checkout endpoint requires sign-in, refuses while closed and validates the tier', async () => {
    const app = createApp(db);
    const post = (body, headers = {}, env = {}) => app.request('/api/membership/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body)
    }, env);

    assert.equal((await post({ tier: 'steady' }, {}, { MEMBERSHIPS_ENABLED: 'false' })).status, 401);

    const { session } = await registerUser(db, { email: 'buyer@kindwell.org', name: 'Buyer' });
    const cookie = { cookie: `kindwell_session=${session.token}` };

    const closed = await post({ tier: 'steady' }, cookie, { MEMBERSHIPS_ENABLED: 'false' });
    assert.equal(closed.status, 503);
    assert.equal((await closed.json()).error, 'MEMBERSHIPS_NOT_OPEN');

    const badTier = await post({ tier: 'free' }, cookie, { MEMBERSHIPS_ENABLED: 'true' });
    assert.equal(badTier.status, 400);

    const unconfigured = await post({ tier: 'steady' }, cookie, { MEMBERSHIPS_ENABLED: 'true' });
    assert.equal(unconfigured.status, 503, 'no billing configured means no checkout, not a crash');
    assert.equal((await unconfigured.json()).error, 'CHECKOUT_CREATE_FAILED');
  });

  test('the pricing form post also refuses while memberships are closed', {}, async () => {
    const app = createApp(db);
    const { session } = await registerUser(db, { email: 'form@kindwell.org', name: 'Form' });
    const calls = [];
    const realFetch = globalThis.fetch;
    globalThis.fetch = async (url) => {
      calls.push(String(url));
      return Response.json({ url: 'https://checkout.example/tier' });
    };
    try {
      const res = await app.request('/api/membership/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', cookie: `kindwell_session=${session.token}` },
        body: new URLSearchParams({ tier: 'steady' }).toString()
      }, { MEMBERSHIPS_ENABLED: 'false', HOSTINGER_SALES_CHANNEL_ID: 'chan', HOSTINGER_TIER_VARIANT_STEADY: 'variant_steady' });
      assert.equal(calls.length, 0, 'no checkout is created while memberships are closed');
      assert.notEqual(res.headers.get('location'), 'https://checkout.example/tier');
    } finally {
      globalThis.fetch = realFetch;
    }
  });

  test('the /pricing ROUTE passes env through, not just the view', async () => {
    // Regression: the route once called renderPricingPage without env, so the
    // availability switch was invisible to the page.
    const app = createApp(db);

    const closed = await (await app.request('/pricing', {}, { MEMBERSHIPS_ENABLED: 'false' })).text();
    assert.match(closed, /Opening soon/, 'the route must see MEMBERSHIPS_ENABLED');
    assert.doesNotMatch(closed, /action="\/api\/membership\/subscribe"/);

    const open = await (await app.request('/pricing', {}, { MEMBERSHIPS_ENABLED: 'true' })).text();
    assert.match(open, /name="tier" value="steady"/);
  });

  test('the retired PayPal webhook answers 410 Gone', async () => {
    const app = createApp(db);
    const res = await app.request('/api/webhooks/paypal', { method: 'POST', body: '{}' }, {});
    assert.equal(res.status, 410);
  });
});

describe('Stripe webhook', () => {
  const env = { STRIPE_SECRET_KEY: 'sk_test_dummy', STRIPE_WEBHOOK_SECRET: 'whsec_test_secret' };
  const stripe = new Stripe('sk_test_dummy');
  let db;
  let app;
  let originalFetch;
  let currentSubscription;

  beforeEach(async () => {
    db = createLocalD1(':memory:');
    await initSchema(db);
    app = createApp(db);
    originalFetch = globalThis.fetch;
    globalThis.fetch = async (url) => {
      assert.match(String(url), /^https:\/\/api.stripe.com\/v1\/subscriptions\//);
      return Response.json(currentSubscription);
    };
  });

  afterEach(() => { globalThis.fetch = originalFetch; });

  function send(event, { signature } = {}) {
    if (event.data?.object?.object === 'subscription') currentSubscription = event.data.object;
    const payload = JSON.stringify(event);
    const header = signature ?? stripe.webhooks.generateTestHeaderString({ payload, secret: env.STRIPE_WEBHOOK_SECRET });
    return app.request('/api/webhooks/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'stripe-signature': header },
      body: payload
    }, env);
  }

  function subscriptionEvent(type, { id, status, userId, tier }) {
    return {
      id: `evt_${Math.random().toString(36).slice(2)}`,
      object: 'event',
      type,
      data: {
        object: {
          id, object: 'subscription', status, customer: 'cus_W',
          metadata: { user_id: userId, tier },
          current_period_start: 1_790_000_000,
          current_period_end: 1_792_592_000
        }
      }
    };
  }

  test('rejects unsigned and forged events', async () => {
    const event = subscriptionEvent('customer.subscription.updated', { id: 'sub_X', status: 'active', userId: 'u', tier: 'kind' });
    assert.equal((await send(event, { signature: '' })).status, 401);
    assert.equal((await send(event, { signature: 't=1,v1=deadbeef' })).status, 401);
    const { count } = await db.prepare('SELECT COUNT(*) as count FROM subscriptions').first();
    assert.equal(count, 0, 'nothing is written for an unverified event');
  });

  test('subscription lifecycle events grant and revoke the tier', async () => {
    const { user } = await registerUser(db, { email: 'hook@kindwell.org', name: 'Hook' });

    const created = await send(subscriptionEvent('customer.subscription.updated', {
      id: 'sub_HOOK', status: 'active', userId: user.id, tier: 'steady'
    }));
    assert.equal(created.status, 200);
    let u = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
    assert.equal(u.tier, 'steady');
    const row = await db.prepare('SELECT current_period_end, provider_customer_id FROM subscriptions WHERE provider_sub_id = ?').bind('sub_HOOK').first();
    assert.equal(row.current_period_end, new Date(1_792_592_000 * 1000).toISOString());
    assert.equal(row.provider_customer_id, 'cus_W');

    const deleted = await send(subscriptionEvent('customer.subscription.deleted', {
      id: 'sub_HOOK', status: 'canceled', userId: user.id, tier: 'steady'
    }));
    assert.equal(deleted.status, 200);
    u = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
    assert.equal(u.tier, 'free');
  });

  test('metadata with an unknown tier never grants access', async () => {
    const { user } = await registerUser(db, { email: 'forged@kindwell.org', name: 'Forged' });
    const res = await send(subscriptionEvent('customer.subscription.updated', {
      id: 'sub_FORGED', status: 'active', userId: user.id, tier: 'platinum'
    }));
    assert.equal(res.status, 503, 'processing fails so Stripe retries, rather than guessing a tier');
    const u = await db.prepare('SELECT tier FROM user WHERE id = ?').bind(user.id).first();
    assert.equal(u.tier, 'free');
  });

  test('unhandled event types are acknowledged', async () => {
    const res = await send({ id: 'evt_other', object: 'event', type: 'customer.created', data: { object: {} } });
    assert.equal(res.status, 200);
  });
});
