import { Router } from 'express';
import express from 'express';
import Stripe from 'stripe';
import db from '../db.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
const router = Router();

export const TIERS = {
  bronze: { price: process.env.STRIPE_PRICE_BRONZE, amount: 500, name: 'Bronze', desc: 'Additional info + view medium board' },
  silver: { price: process.env.STRIPE_PRICE_SILVER, amount: 1000, name: 'Silver', desc: 'Full info + write to medium board' },
  gold: { price: process.env.STRIPE_PRICE_GOLD, amount: 1500, name: 'Gold', desc: 'Everything + full writable access' }
};

// Create subscription checkout
router.post('/checkout/:tier', async (req, res) => {
  try {
    const tier = req.params.tier;
    if (!TIERS[tier]) return res.status(400).json({ error: 'Invalid tier' });
    if (!req.user) return res.status(401).json({ error: 'Must be logged in' });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: req.user.email,
      client_reference_id: String(req.user.id),
      line_items: [{ price: TIERS[tier].price, quantity: 1 }],
      success_url: `${process.env.APP_URL || 'http://localhost:3000'}/account?sub=success&tier=${tier}`,
      cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/subscribe?canceled=true`,
      subscription_data: { metadata: { user_id: String(req.user.id), tier } },
      metadata: { user_id: String(req.user.id), tier }
    });

    res.json({ url: session.url });
  } catch (e) {
    console.error('Stripe checkout error:', e.message);
    res.status(500).json({ error: 'Payment setup failed' });
  }
});

// Webhook (raw body needed for signature verification)
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test'
    );
  } catch (e) {
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const s = event.data.object;
      const userId = s.metadata?.user_id || s.client_reference_id;
      const tier = s.metadata?.tier || 'bronze';
      await db.query(
        'UPDATE users SET subscription_tier = ?, stripe_sub_id = ?, role = ? WHERE id = ?',
        [tier, s.subscription, tier, userId]
      );
      break;
    }
    case 'customer.subscription.deleted': {
      const sub = event.data.object;
      await db.query(
        'UPDATE users SET subscription_tier = NULL, stripe_sub_id = NULL, role = "free" WHERE stripe_sub_id = ?',
        [sub.id]
      );
      break;
    }
  }
  res.json({ received: true });
});

// Current sub status
router.get('/status', async (req, res) => {
  if (!req.user) return res.json({ subscribed: false });
  if (!req.user.stripe_sub_id) return res.json({ subscribed: false, tier: null });
  try {
    const sub = await stripe.subscriptions.retrieve(req.user.stripe_sub_id);
    res.json({ subscribed: sub.status === 'active', tier: req.user.subscription_tier });
  } catch {
    res.json({ subscribed: false, tier: null });
  }
});

export default router;
