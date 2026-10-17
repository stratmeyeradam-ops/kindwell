# kindwell.org — status (2026-10-13)

Read this first in a new session. Rule (same as methspace): Claude designs/writes code locally; **Apollo deploys** (never Claude).
Project folder: `~/Desktop/kindwell-best`. Run locally:
`PORT=4310 HOST=127.0.0.1 APP_ORIGIN=http://localhost:4310 DB_PATH=$PWD/data/app.db node src/server.js` · tests: `npm test` (147 pass).

## Done (local, NOT deployed)
- Built from the most complete copy (`/run/media/ais/Storage/kindwell.org`): 6 courses / 72 lessons, 10 quizzes,
  practices, remedies, Reiki, crystals, the Circle message board. English, Spanish, Portuguese throughout.
- Added: Black Hills page, Homeopathy page (20 remedies, 4 guides, honest no-claims framing), two Circle spaces with starters,
  Black Hills identity on home/about/footer, real images from this machine.
- Memberships $5 / $10 / $20 (Kind / Steady / Supported) via Stripe Checkout.
- Store: Stripe Checkout + Printify. **Hostinger removed entirely** (store code, catalog scripts, config).
- Printify hand-off ported from methspace: order saved first, Printify order id saved before production (no duplicates
  on retry), automatic retry every 10 min up to 6 tries, then `/admin/orders` with a "Send to Printify" button.
- `scripts/check-printify.mjs`: read-only preflight (token, shop, variants, US shipping quote, loss check).
- Site standards: GA4 `G-W9TWGGR66F` on every page; refund / terms / privacy each under 250 words, all 3 languages;
  privacy rewritten to match reality (email sign-in, Stripe, Printify, Analytics, quiz results).
- Layout fixes: hero/grid bugs on 14 pages and 6 home sections, header, phone menu (now includes Sign in).
  No sideways scrolling at 375px on the 10 main pages.

## Needs Adam's decision
- **Crewneck loses ~$3.88 per order**: Printify US shipping is $21.49, we charge $4.50 flat. Options: raise the price
  (~$44.99), charge real shipping, or hide it. Wall print clears only ~$2 an order.
- Membership refund rule written as "full refund if asked within 7 days of first payment" (refund page). Change if wanted.
- Two Hostinger AI Builder sites (`three-tier-subscription-guides-822679` / `-459084.hostingersite.com`) may still be live.

## Deploy handoff (give to Apollo)
1. DNS for kindwell.org (Adam): A @ and www -> 198.98.57.191.
2. `bash scripts/deploy.sh` (defaults: 198.98.57.191, kindwell.org, port 8082; refuses to start if the port is taken).
   Needs methspace deployed first (it moves Caddy to `/etc/caddy/conf.d/`).
3. Fill `/etc/kindwell.env`: `BETTER_AUTH_SECRET` (`openssl rand -hex 32`), `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
   (endpoint `https://kindwell.org/api/webhooks/stripe`, events `checkout.session.completed`,
   `checkout.session.async_payment_succeeded`, `customer.subscription.*`, `invoice.paid`, `invoice.payment_failed`),
   `PRINTIFY_API_TOKEN`, `PRINTIFY_SHOP_ID`. Then `systemctl restart kindwell`.
4. Printify preflight, send Adam the output:
   `cd /srv/kindwell && set -a && . /etc/kindwell.env && set +a && node scripts/check-printify.mjs` (exit 0 = good).
   Only then set `PRINTIFY_MODE=live` and restart.
5. Make Adam admin: he signs up on the site, then
   `cd /srv/kindwell && set -a && . /etc/kindwell.env && set +a && sudo -u kindwell -E node scripts/make-admin.mjs <his email>`.
6. Test end to end: one membership and one cheap merch item with a real card, check `/admin/orders`, then refund in
   Stripe and cancel in Printify.
7. Submit `https://kindwell.org/sitemap.xml` to Google Search Console and Bing.

## Keys
- `.env.hostinger` (local only, gitignored, excluded from deploy) still holds live Stripe keys; old version in `data/.env.hostinger.bak`.
- `~/build/HANDOFF_kindwell.md` has a GitHub token and live Stripe secret in plain text: rotate both.
