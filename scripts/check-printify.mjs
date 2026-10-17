// Read-only Printify preflight (adapted from methspace). Creates nothing,
// changes nothing, charges nothing.
//
//   set -a; . /etc/kindwell.env; set +a; node scripts/check-printify.mjs
//
// Checks: the token works, PRINTIFY_SHOP_ID is one of its shops, every KindWell
// merch product exists there with orderable variants, and Printify can quote
// US shipping for it. Prints money per item (our price − Printify cost) and
// per order (+ the shipping we charge − Printify's shipping), so nothing sells
// at a loss. Exit 0 = all good, 2 = problems listed, 1 = cannot check.

import { readFileSync } from 'node:fs';
import { createPrintifyClient } from '../src/services/printify.js';
import { calculateShipping } from '../src/services/store.js';

const token = process.env.PRINTIFY_API_TOKEN;
const shopId = process.env.PRINTIFY_SHOP_ID;
if (!token || !shopId) { console.error('PRINTIFY_API_TOKEN and PRINTIFY_SHOP_ID must be set.'); process.exit(1); }

const client = createPrintifyClient({ PRINTIFY_API_TOKEN: token });
const read = (f) => JSON.parse(readFileSync(new URL(`../src/db/catalog/${f}`, import.meta.url), 'utf8'));
const products = read('products.json').filter((p) => p.type === 'printify_merch');
const ourVariants = read('printify-variants.json');
const $ = (n) => (n == null ? '    —  ' : `$${Number(n).toFixed(2)}`.padStart(7));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const problems = [];

const shops = await client.listShops();
console.log('Shops on this token:');
for (const s of shops) console.log(`  ${s.id}  ${s.title}${String(s.id) === String(shopId) ? '  <- PRINTIFY_SHOP_ID' : ''}`);
if (!shops.some((s) => String(s.id) === String(shopId))) { console.error(`\nPRINTIFY_SHOP_ID ${shopId} is not one of these shops.`); process.exit(1); }

// The address is a public landmark, used only to ask Printify for a price.
const QUOTE_TO = { first_name: 'Shipping', last_name: 'Quote', email: 'quote@kindwell.org', phone: '6055551234',
  country: 'US', region: 'SD', city: 'Keystone', zip: '57751', address1: '13000 SD-244', address2: '' };
const weCharge = calculateShipping([{ type: 'printify_merch', quantity: 1 }], { destinationCountry: 'US' });

console.log(`\nEach line: our price, Printify cost, profit per item; Printify US shipping; profit per one-item order (we charge ${$(weCharge).trim()} shipping).\n`);
for (const product of products) {
  const pid = product.printify_product_id
    || ourVariants.find((v) => v.product_id === product.id)?.printify_product_id;
  if (!pid) { problems.push(`${product.id}: no Printify product id in the catalogue.`); continue; }
  let remote;
  try { remote = await client.getProduct(shopId, pid); }
  catch (e) { problems.push(`${product.id}: Printify product ${pid} not found (${e.message}).`); continue; }

  const mine = ourVariants.filter((v) => v.product_id === product.id);
  const enabled = new Map((remote.variants || []).filter((v) => v.is_enabled && v.is_available !== false).map((v) => [Number(v.id), v]));
  const dead = mine.filter((v) => !enabled.has(Number(v.variant_id)));
  if (dead.length) problems.push(`${product.id}: ${dead.length} of our ${mine.length} variants are disabled or out of stock in Printify (e.g. "${dead[0].title}").`);

  const live = mine.filter((v) => enabled.has(Number(v.variant_id)));
  if (!live.length) { problems.push(`${product.id}: no orderable variants.`); continue; }
  // Worst case: the variant with the least margin.
  const worst = live.map((v) => ({ v, cost: enabled.get(Number(v.variant_id)).cost / 100 }))
    .reduce((a, b) => ((b.v.retail_price - b.cost) < (a.v.retail_price - a.cost) ? b : a));
  const profit = worst.v.retail_price - worst.cost;

  let ship = null;
  try {
    const q = await client.request(`/shops/${encodeURIComponent(shopId)}/orders/shipping.json`, {
      method: 'POST',
      body: { line_items: [{ product_id: pid, variant_id: Number(worst.v.variant_id), quantity: 1 }], address_to: QUOTE_TO }
    });
    ship = (q.standard ?? null) == null ? null : q.standard / 100;
  } catch (e) { problems.push(`${product.id}: Printify would not quote shipping (${e.message}).`); }

  if (profit <= 0) problems.push(`${product.id}: price ${$(worst.v.retail_price).trim()} does not cover Printify cost ${$(worst.cost).trim()} ("${worst.v.title}").`);
  const perOrder = ship == null ? null : profit + weCharge - ship;
  if (perOrder != null && perOrder < 0) problems.push(`${product.id}: loses ${$(-perOrder).trim()} per one-item US order.`);
  console.log(`${$(worst.v.retail_price)} ${$(worst.cost)} ${$(profit)} | ${$(ship)} | ${$(perOrder)} | ${product.id} (${worst.v.title})`);
  await sleep(150); // well under Printify's rate limit
}

console.log(problems.length ? `\n${problems.length} problem(s):\n  ${problems.join('\n  ')}` : '\nAll merch orderable and shippable. No losses at one item per order.');
process.exit(problems.length ? 2 : 0);
