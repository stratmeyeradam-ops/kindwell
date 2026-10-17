# KindWell: best version (assembled 2026-10-13)

## Where this came from
Base: `/run/media/ais/Storage/kindwell.org` (Oct 1), the most complete of the ~10 Kindwell copies on this machine.
It has courses, quizzes, the Circle message board, reiki, crystals, remedies, practitioners, a Stripe membership flow,
a Printify catalogue and fulfillment service, English/Spanish/Portuguese, and 138 passing tests.

Added on top (all in English, Spanish and Portuguese):
- **Black Hills** (`/black-hills`, `src/views/black-hills.js` and `src/db/content/black-hills.js`): living with the seasons,
  8 places to slow down (each with a practice), a forest practice, a respectful note on Lakota land, safety tips, and local
  support lines (988, 211, 911).
- **Homeopathy** (`/homeopathy`, `src/views/homeopathy.js` and `src/db/content/homeopathy.js`): history, how to read a label,
  20 classic remedies, 4 situational guides, a home-kit worksheet, and when to get help. It is written as education about a
  tradition, with no medical claims.
- **Message board (Circle)**: two new spaces, *Black Hills Neighbors* and *Homeopathy & Herbal Tradition*, with 6 pinned
  starter threads (`src/db/content/circle-local.js`).
- The Black Hills identity is now on the home page (new feature band), the About page, the footer, and the tagline.
- Images from this machine are in `public/assets/images/`: hills-well-path, tea-cups-journal, healing-hands, kindwell-banner
  (the original Kindwell art), and pine-river-valley, forest-path, garden-soil (from `~/build`).

Gating on the new pages: free visitors get an overview. Kind ($5) unlocks all remedies, all places, and the full seasons.
Steady ($10) also unlocks the situational guides and the worksheet.

## Run locally
```
PORT=4310 APP_ORIGIN=http://localhost:4310 DB_PATH=$PWD/data/app.db node src/server.js
npm test
```
Without `DB_PATH`, the server defaults to `~/kindwell-data/app.db`, which is shared with older copies.

## Tiers (Stripe): `src/services/memberships.js`
| Tier | Price | Unlocks |
|---|---|---|
| Kind | $5/mo | favorites, wellness letters, full homeopathy guide, all Black Hills places |
| Steady | $10/mo | quizzes, full practices, worksheets, **read** the Circle, course intros, homeopathy guides |
| Supported | $20/mo | full courses, **post** in the Circle, 15% store discount |

Needs: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_MODE`. `STRIPE_PRICE_KIND/STEADY/SUPPORTED` are optional;
without them, Checkout uses the prices in `TIER_PRICES`. The old $15 `STRIPE_PRICE_SUPPORTED` was removed, so the top
tier charges $20. Webhook endpoint: `/api/webhooks/stripe`.

## Store: Stripe Checkout + Printify (no Hostinger)
- `src/services/store-checkout.js`: "Buy now" opens a Stripe Checkout session. The price is set on the server and uses
  the variant's retail price, minus the Supported discount. Merch checkouts collect a US shipping address and charge
  the same shipping the order records.
- On payment, the webhook (`checkout.session.completed`) or the success page records the order. This happens only once
  per session (order id = `ord_<session id>`). Merch goes to Printify, and digital items get private, expiring download links.
- Printify: `PRINTIFY_MODE=live`, `PRINTIFY_API_TOKEN`, `PRINTIFY_SHOP_ID`, `PRINTIFY_ALLOW_ORDER_CREATION=true`.
  In mock mode, paid merch orders are saved as **pending**, so you can see what still needs to ship.
- All Hostinger store code and catalog scripts were removed. Your old config was backed up to `data/.env.hostinger.bak`.

## Secrets
`.env.hostinger` holds live keys. It is gitignored, so keep it out of any upload or zip you share.
