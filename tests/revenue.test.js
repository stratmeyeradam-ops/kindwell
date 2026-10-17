import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import Stripe from 'stripe';
import { createApp } from '../src/app.js';
import { createLocalD1, initSchema } from '../src/db/index.js';
import { registerUser } from './fixtures.js';
import { activateSubscription, applyStripeSubscriptionStatus } from '../src/services/memberships.js';
import { subscriptionFields } from '../src/services/stripe.js';

const env = { APP_ORIGIN: 'http://localhost', BETTER_AUTH_SECRET: 'test-secret-test-secret-test-secret', STRIPE_SECRET_KEY: 'sk_test_example', STRIPE_WEBHOOK_SECRET: 'whsec_example', STRIPE_PRICE_SUPPORTED: 'price_supported' };
let db, app, member, originalFetch, subscription, checkout, calls;
beforeEach(async () => {
  db = createLocalD1(':memory:'); await initSchema(db); app = createApp(db);
  member = await registerUser(db, { email: 'buyer@example.com' });
  subscription = { id: 'sub_revenue', status: 'active', customer: 'cus_revenue', metadata: { user_id: member.user.id, tier: 'kind' }, items: { data: [{ price: { id: 'price_supported' }, current_period_start: 1790000000, current_period_end: 1792592000 }] }, cancel_at_period_end: true };
  checkout = { id: 'cs_revenue', mode: 'subscription', subscription: 'sub_revenue', metadata: { user_id: member.user.id }, customer_details: { email: member.user.email } };
  calls = []; originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options = {}) => {
    const path = new URL(String(url)).pathname; calls.push({ path, body: String(options.body || '') });
    if (path.startsWith('/v1/subscriptions/')) return Response.json(subscription);
    if (path === '/v1/checkout/sessions/cs_revenue') return Response.json(checkout);
    if (path === '/v1/billing_portal/sessions') return Response.json({ url: 'https://billing.stripe.com/p/session_test' });
    if (path === '/v1/checkout/sessions') return Response.json({ id: 'cs_new', url: 'https://checkout.stripe.com/c/pay/test' });
    throw new Error(`Unexpected provider call: ${path}`);
  };
});
afterEach(() => { globalThis.fetch = originalFetch; db._raw.close(); });
function signedIn() { return { Cookie: `kindwell_session=${member.session.token}` }; }
async function event(type, object) {
  const payload = JSON.stringify({ id: 'evt_revenue', type, data: { object } });
  const signature = new Stripe(env.STRIPE_SECRET_KEY).webhooks.generateTestHeaderString({ payload, secret: env.STRIPE_WEBHOOK_SECRET });
  return app.request('/api/webhooks/stripe', { method: 'POST', headers: { 'stripe-signature': signature }, body: payload }, env);
}
async function tier() { return (await db.prepare('SELECT tier FROM user WHERE id = ?').bind(member.user.id).first()).tier; }

test('modern price and item periods override stale metadata', () => {
  const f = subscriptionFields(env, subscription);
  assert.equal(f.tier, 'supported'); assert.equal(f.periodEnd, new Date(1792592000000).toISOString()); assert.equal(f.cancelAtPeriodEnd, true);
});
test('unpaid completed checkout does not activate an incomplete subscription', async () => {
  subscription.status = 'incomplete';
  assert.equal((await event('checkout.session.completed', { ...checkout, payment_status: 'unpaid' })).status, 200);
  assert.equal(await tier(), 'free');
});
test('modern invoice renewals read current subscription and preserve cancellation intent', async () => {
  const res = await event('invoice.paid', { parent: { subscription_details: { subscription: subscription.id } } });
  assert.equal(res.status, 200); assert.equal(await tier(), 'supported');
  const row = await db.prepare('SELECT * FROM subscriptions WHERE provider_sub_id = ?').bind(subscription.id).first();
  assert.equal(row.cancel_at_period_end, 1); assert.equal(row.current_period_end, new Date(1792592000000).toISOString());
});
test('delayed active event cannot resurrect a canceled subscription', async () => {
  await activateSubscription(db, { userId: member.user.id, tier: 'supported', providerSubId: subscription.id });
  subscription.status = 'canceled';
  assert.equal((await event('customer.subscription.updated', { ...subscription, status: 'active' })).status, 200);
  assert.equal(await tier(), 'free');
});
test('pause revokes and resume restores access from current provider status', async () => {
  await event('customer.subscription.created', subscription);
  subscription.status = 'paused'; await event('customer.subscription.paused', subscription); assert.equal(await tier(), 'free');
  subscription.status = 'active'; await event('customer.subscription.resumed', subscription); assert.equal(await tier(), 'supported');
});
test('return cannot log into an existing buyer account from the checkout URL', async () => {
  const res = await app.request('/api/membership/return?session_id=cs_revenue', {}, env);
  assert.equal(res.status, 302); assert.match(res.headers.get('location'), /checkout_session=cs_revenue/);
  assert.equal(res.headers.get('set-cookie'), null); assert.equal(calls.length, 0);
});
test('guest purchase links after account sign-in and rejects another email', async () => {
  checkout.metadata = {}; subscription.metadata = { tier: 'kind' };
  let res = await app.request('/api/membership/return?session_id=cs_revenue', { headers: signedIn() }, env);
  assert.equal(res.status, 302); assert.equal(await tier(), 'supported');
  checkout.customer_details.email = 'someoneelse@example.com';
  res = await app.request('/api/membership/return?session_id=cs_revenue', { headers: signedIn() }, env);
  assert.match(decodeURIComponent(res.headers.get('location')), /Sign in with the account/);
});
test('existing subscriber opens portal rather than another subscription', async () => {
  await activateSubscription(db, { userId: member.user.id, tier: 'kind', providerSubId: subscription.id, providerCustomerId: 'cus_revenue' });
  const res = await app.request('/api/membership/checkout', { method: 'POST', headers: { ...signedIn(), 'Content-Type': 'application/json' }, body: JSON.stringify({ tier: 'supported' }) }, env);
  assert.equal(res.status, 200); assert.match((await res.json()).url, /billing.stripe.com/);
  assert.equal(calls.some(c => c.path === '/v1/checkout/sessions'), false);
  const portal = await app.request('/api/membership/portal', { method: 'POST', headers: signedIn() }, env);
  assert.equal(portal.status, 303); assert.match(portal.headers.get('location'), /billing.stripe.com/);
});
test('guest checkout still goes straight to Stripe', async () => {
  const res = await app.request('/api/membership/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'tier=kind' }, env);
  assert.equal(res.status, 303); assert.match(res.headers.get('location'), /checkout.stripe.com/);
});

test('simultaneous subscription confirmations create one local subscription', async () => {
  const fields = { ...subscriptionFields(env, subscription), userId: member.user.id };
  await Promise.all([applyStripeSubscriptionStatus(db, fields), applyStripeSubscriptionStatus(db, fields)]);
  const row = await db.prepare('SELECT COUNT(*) AS count FROM subscriptions WHERE provider_sub_id = ?').bind(subscription.id).first();
  assert.equal(row.count, 1); assert.equal(await tier(), 'supported');
});

test('a failed renewal keeps billing management reachable for recovery', async () => {
  await event('customer.subscription.created', subscription);
  subscription.status = 'past_due';
  await event('invoice.payment_failed', { parent: { subscription_details: { subscription: subscription.id } } });
  assert.equal(await tier(), 'free');
  const account = await app.request('/account', { headers: signedIn() }, env);
  assert.match(await account.text(), /action="\/api\/membership\/portal"/);
});
