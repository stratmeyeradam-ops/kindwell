// src/services/stripe.js
// Stripe membership billing.
//
// Replaces the PayPal subscription client. Stripe is now the single billing
// rail for KindWell: the three membership tiers are monthly subscriptions
// created through Checkout, and every lifecycle change arrives on one webhook.
//
// Prices come from STRIPE_PRICE_<TIER> when the operator has created Price
// objects in the Stripe dashboard. When they have not, Checkout is created from
// inline price data built from TIER_PRICES — so the tiers work on day one
// without a dashboard step, and can be migrated to real Price objects later
// without touching this code.

import Stripe from 'stripe';
import { TIERS, TIER_PRICES } from './memberships.js';

export function getStripeMode(env = {}) {
  return env.STRIPE_MODE
    || (typeof process !== 'undefined' && process.env?.STRIPE_MODE)
    || (env.STRIPE_SECRET_KEY || process.env?.STRIPE_SECRET_KEY ? 'live' : 'mock');
}

function getSecret(env = {}) {
  return env.STRIPE_SECRET_KEY
    || (typeof process !== 'undefined' && process.env?.STRIPE_SECRET_KEY)
    || '';
}

export class StripeConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = 'StripeConfigError';
  }
}

export function createStripeClient(env = {}, options = {}) {
  const secret = getSecret(env);
  if (!secret) throw new StripeConfigError('Stripe secret key is not configured.');
  return new Stripe(secret, {
    httpClient: Stripe.createFetchHttpClient(),
    ...options
  });
}

/** A dashboard-created Price for a tier, if one has been configured. */
export function getPriceIdForTier(env = {}, tier) {
  const key = `STRIPE_PRICE_${String(tier || '').toUpperCase()}`;
  return env[key] || (typeof process !== 'undefined' ? process.env?.[key] : null) || null;
}

export function isStripeConfigured(env = {}) {
  return Boolean(getSecret(env));
}

/**
 * The `line_items` entry for a tier: a real Price when configured, otherwise
 * inline monthly price data derived from the canonical tier price.
 */
export function buildTierLineItem(env, tier) {
  const priceId = getPriceIdForTier(env, tier);
  if (priceId) return { price: priceId, quantity: 1 };
  const amount = TIER_PRICES[tier];
  if (!amount) throw new StripeConfigError(`No price configured for tier "${tier}".`);
  return {
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: Math.round(amount * 100),
      recurring: { interval: 'month' },
      product_data: {
        name: `KindWell ${tier.charAt(0).toUpperCase()}${tier.slice(1)} membership`,
        description: 'Monthly KindWell membership'
      }
    }
  };
}

/**
 * Create a Checkout Session for a membership.
 *
 * The tier is written into both the session and the subscription metadata so
 * every later webhook can resolve the member and their tier without guessing
 * from a price id.
 */
export async function createMembershipCheckout(env, { user, tier, locale = 'en', origin, promo = null, customerId = null }) {
  if (![TIERS.KIND, TIERS.STEADY, TIERS.SUPPORTED].includes(tier)) {
    throw new StripeConfigError(`Unknown membership tier "${tier}".`);
  }
  const stripe = createStripeClient(env);
  const prefix = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt-br');

  return stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [buildTierLineItem(env, tier)],
    ...(customerId ? { customer: customerId } : { customer_email: user?.email || undefined }),
    client_reference_id: user?.id || undefined,
    metadata: { user_id: user?.id || '', tier },
    subscription_data: { metadata: { user_id: user?.id || '', tier } },
    // A comp link (?promo=CODE) pre-applies that code server-side; otherwise
    // buyers can enter one on Stripe's page. Only charge a card when something
    // is actually due, so 100%-off comps complete without one.
    ...(await promotionDiscount(stripe, promo)),
    payment_method_collection: 'if_required',
    // Return through the handler that reads the session from Stripe and grants
    // the tier immediately, instead of waiting on webhook delivery.
    success_url: `${origin}/api/membership/return?locale=${encodeURIComponent(locale)}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}${prefix}/pricing?canceled=true`
  }, user?.id ? { idempotencyKey: `membership:${user.id}:${tier}:${Math.floor(Date.now() / 600000)}` } : undefined);
}

/**
 * Retrieve a Checkout Session with its subscription expanded, so a return-URL
 * handler can read the real subscription state in one call.
 */
async function promotionDiscount(stripe, promo) {
  const code = typeof promo === 'string' && /^[A-Za-z0-9_-]{3,40}$/.test(promo) ? promo : null;
  if (code) {
    const found = await stripe.promotionCodes.list({ code, active: true, limit: 1 });
    if (found.data[0]) return { discounts: [{ promotion_code: found.data[0].id }] };
  }
  return { allow_promotion_codes: true };
}

export async function retrieveCheckoutSession(env, sessionId) {
  const stripe = createStripeClient(env);
  return stripe.checkout.sessions.retrieve(sessionId, { expand: ['subscription'] });
}

/** Stripe's hosted portal: card updates, invoices and cancellation. */
export async function createBillingPortalSession(env, { customerId, origin, returnPath = '/account' }) {
  if (!customerId) throw new StripeConfigError('A Stripe customer is required to open the billing portal.');
  const stripe = createStripeClient(env);
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${origin}${returnPath}`
  });
}

/**
 * Verify and parse a webhook. `rawBody` must be the untouched request body —
 * Stripe signs the exact bytes, so any re-serialisation invalidates it.
 */
export function constructWebhookEvent(env, rawBody, signature) {
  const secret = env.STRIPE_WEBHOOK_SECRET
    || (typeof process !== 'undefined' ? process.env?.STRIPE_WEBHOOK_SECRET : null);
  if (!secret) throw new StripeConfigError('STRIPE_WEBHOOK_SECRET is not configured.');
  if (!signature) throw new StripeConfigError('Missing Stripe signature header.');
  const stripe = createStripeClient(env);
  return stripe.webhooks.constructEvent(rawBody, signature, secret);
}

// Stripe's subscription statuses mapped onto the three states the app knows.
export const STRIPE_ACTIVE_STATUSES = ['active', 'trialing'];
export const STRIPE_PENDING_STATUSES = ['incomplete'];
export const STRIPE_ENDED_STATUSES = ['canceled', 'incomplete_expired', 'unpaid', 'paused'];

export function mapStripeStatus(status) {
  const normalized = String(status || '').toLowerCase();
  if (STRIPE_ACTIVE_STATUSES.includes(normalized)) return 'active';
  if (STRIPE_PENDING_STATUSES.includes(normalized)) return 'pending';
  if (normalized === 'past_due') return 'past_due';
  if (STRIPE_ENDED_STATUSES.includes(normalized)) return 'canceled';
  return null; // unrecognised: record it, change nothing
}

export function tierFromMetadata(metadata) {
  const tier = metadata?.tier;
  return [TIERS.KIND, TIERS.STEADY, TIERS.SUPPORTED].includes(tier) ? tier : null;
}

/** Stripe reports period boundaries as unix seconds. */
export function toIso(unixSeconds) {
  if (!unixSeconds) return null;
  return new Date(Number(unixSeconds) * 1000).toISOString();
}

// Current API periods live on subscription items; older event versions remain readable.
export function subscriptionFields(env, subscription) {
  const item = subscription.items?.data?.[0];
  const priceId = typeof item?.price === 'string' ? item.price : item?.price?.id;
  const configuredTier = ['kind', 'steady', 'supported'].find(tier => priceId && getPriceIdForTier(env, tier) === priceId);
  return {
    stripeSubscriptionId: subscription.id,
    tier: configuredTier || tierFromMetadata(subscription.metadata),
    status: subscription.status,
    userId: subscription.metadata?.user_id || null,
    customerId: typeof subscription.customer === 'string' ? subscription.customer : subscription.customer?.id,
    periodStart: toIso(item?.current_period_start || subscription.current_period_start),
    periodEnd: toIso(item?.current_period_end || subscription.current_period_end),
    cancelAtPeriodEnd: Boolean(subscription.cancel_at_period_end)
  };
}

export function invoiceSubscriptionId(invoice) {
  const sub = invoice.parent?.subscription_details?.subscription || invoice.subscription;
  return typeof sub === 'string' ? sub : sub?.id;
}
