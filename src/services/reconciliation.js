// Stripe subscription reconciliation. Store purchases arrive through Stripe webhooks.
import { applyStripeSubscriptionStatus } from './memberships.js';
import { subscriptionFields } from './stripe.js';
export const MIN_AGE_MS = 2 * 60 * 1000;
export const ABANDON_AFTER_DAYS = 7;
export const DEFAULT_BATCH = 25;
export const ORDER_LOOKBACK_DAYS = 30;

const STRIPE_ACTIVE = ['active', 'trialing'];

function isMissing(error) {
  const message = String(error?.message || error || '');
  return /not found|does not exist|no such|404/i.test(message);
}

function olderThan(createdAt, cutoffMs, nowMs) {
  const created = Date.parse(createdAt);
  return Number.isFinite(created) && nowMs - created > cutoffMs;
}

/**
 * Settle memberships that were started but never confirmed.
 *
 * A pending row with a Stripe subscription id is checked against Stripe, which
 * is authoritative. A pending row with no provider id at all is an abandoned
 * checkout and is retired once it is old enough — it never granted access, so
 * cancelling it costs the member nothing.
 */
export async function reconcilePendingSubscriptions(db, env, {
  limit = DEFAULT_BATCH,
  now = new Date(),
  userId = null,
  stripeFactory = null
} = {}) {
  const nowIso = now.toISOString();
  const nowMs = now.getTime();

  const { results } = await db.prepare(`
    SELECT id, user_id, tier, provider_sub_id, created_at
    FROM subscriptions
    WHERE status = 'pending'
      AND (? IS NULL OR user_id = ?)
    ORDER BY created_at ASC
    LIMIT ?
  `).bind(userId, userId, limit).all();

  const summary = { examined: 0, activated: 0, abandoned: 0, waiting: 0, failed: 0 };
  if (!results.length) return summary;

  let stripe = null;
  if (results.some((row) => row.provider_sub_id)) {
    const { createStripeClient } = await import('./stripe.js');
    stripe = stripeFactory ? stripeFactory(env) : createStripeClient(env);
  }

  for (const row of results) {
    summary.examined += 1;

    if (!row.provider_sub_id) {
      if (olderThan(row.created_at, ABANDON_AFTER_DAYS * 86400_000, nowMs)) {
        await abandonSubscription(db, row.id, nowIso);
        summary.abandoned += 1;
      } else {
        summary.waiting += 1;
      }
      continue;
    }

    try {
      const subscription = await stripe.subscriptions.retrieve(row.provider_sub_id);
      await applyStripeSubscriptionStatus(db, {
        ...subscriptionFields(env, subscription),
        tier: subscriptionFields(env, subscription).tier || row.tier,
        userId: row.user_id
      });

      if (STRIPE_ACTIVE.includes(subscription.status)) summary.activated += 1;
      else summary.waiting += 1;
    } catch (error) {
      if (isMissing(error)) {
        await abandonSubscription(db, row.id, nowIso);
        summary.abandoned += 1;
        continue;
      }
      // Transient (network, rate limit): leave it pending and try next sweep.
      console.error(`Reconcile failed for subscription ${row.id}:`, error.message);
      summary.failed += 1;
    }
  }

  return summary;
}

async function abandonSubscription(db, subscriptionId, nowIso) {
  // Only ever touches a row that is still pending, so an activation landing
  // concurrently wins over abandonment.
  await db.prepare(`
    UPDATE subscriptions SET status = 'abandoned', updated_at = ?
    WHERE id = ? AND status = 'pending'
  `).bind(nowIso, subscriptionId).run();
}

export async function reconcileAll(db, env, options = {}) {
  return { subscriptions: await reconcilePendingSubscriptions(db, env, options) };
}
