// Verifies the real Stripe configuration: that the tiers resolve to live Price
// objects and that a Checkout Session can actually be created. Read-only — it
// creates a session and immediately expires nothing, it just proves the rail.
import fs from 'node:fs';
import { createMembershipCheckout, buildTierLineItem, isStripeConfigured } from '../src/services/stripe.js';

const env = Object.fromEntries(
  fs.readFileSync('.env.hostinger', 'utf8')
    .split('\n')
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i), l.slice(i + 1)];
    })
);

console.log('stripe configured :', isStripeConfigured(env));
console.log('STRIPE_MODE       :', env.STRIPE_MODE);
console.log('APP_ORIGIN        :', env.APP_ORIGIN);
console.log('');

for (const tier of ['kind', 'steady', 'supported']) {
  const item = buildTierLineItem(env, tier);
  console.log(`  ${tier.padEnd(10)} ->`, item.price ? `Price ${item.price}` : 'inline price_data');
}

console.log('\ncreating a real Checkout Session for the steady tier...');
try {
  const session = await createMembershipCheckout(env, {
    user: { id: 'usr_probe', email: 'probe@example.com' },
    tier: 'steady',
    locale: 'en',
    origin: env.APP_ORIGIN
  });
  console.log('  session id :', session.id);
  console.log('  mode       :', session.mode);
  console.log('  url        :', session.url ? session.url.slice(0, 88) + '...' : '(none)');
  console.log('\nSTRIPE CHECKOUT: WORKING');
} catch (err) {
  console.error('  FAILED:', err.type || err.name, '-', err.message);
  process.exitCode = 1;
}
