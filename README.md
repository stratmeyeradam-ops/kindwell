# KindWell

Portable Node.js wellness membership and store. Stripe handles subscriptions and one-time purchases. No Hostinger deployment or Grok dependency is required.

## Run

Use Node.js 22.13 or later, with npm.

```sh
npm ci
cp .env.example .env
npm start
```

The default address is http://localhost:3000. Set APP_ORIGIN to your public HTTPS address when hosting. Set PORT and HOST as your Node host requires. `npm run dev` uses port 8787. There is no frontend compilation step; `npm run build` checks JavaScript syntax. `npm test` runs isolated databases and simulated provider calls.

SQLite is persistent at `data/app.db`; the supplied database is retained. Set DB_PATH to an absolute path on persistent storage for deployments. Back up the database and private files before replacing a deployment. An installation-specific authentication secret is generated in `.data/auth-secret` if BETTER_AUTH_SECRET is absent; persist that directory or supply the secret yourself. Optional MySQL configuration remains supported.

## Revenue paths

- **Kind: $5/month** — favorites, wellness letters, expanded homeopathy and Black Hills content.
- **Steady: $10/month** — quizzes, practices, worksheets, course introductions and Circle reading.
- **Supported: $20/month** — complete courses, Circle participation and a 15% store discount.
- **Digital products** — Stripe Checkout, private files, expiring download links.
- **Physical merchandise** — Stripe Checkout with shipping, then Printify fulfillment and automatic retries.

English, Spanish and Brazilian Portuguese content remains included. Customers can purchase as guests, then sign in or create an account with their checkout email to link membership access. Returning subscribers use Stripe's billing portal to manage their plan, invoices, payment details and cancellation.

## Stripe configuration

Set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET. Existing Stripe monthly Price IDs can be assigned through STRIPE_PRICE_KIND, STRIPE_PRICE_STEADY and STRIPE_PRICE_SUPPORTED. Otherwise Checkout uses inline monthly prices at $5/$10/$20. Configure Stripe's customer portal in the same Stripe account. To offer portal plan switching, configure the three recurring Prices in Stripe and enable those products in the portal. Inline prices support checkout, invoices, card management and cancellation but are not a substitute for a configured portal product catalog.

Register the HTTPS endpoint `/api/webhooks/stripe` and these events:

- checkout.session.completed
- checkout.session.async_payment_succeeded
- customer.subscription.created / updated / deleted / paused / resumed
- invoice.paid / invoice.payment_failed

Use the matching webhook signing secret and Stripe account/mode. Promotion codes are supported, including 100% comps without requiring a card when no payment is due. No live charge was made as part of rebuilding this package.

## Printify and email

Set PRINTIFY_API_TOKEN and PRINTIFY_SHOP_ID to connect fulfillment. Configured Printify orders are created and sent to production automatically after paid checkout; the catalog must contain your valid product and variant IDs. Optional PRINTIFY_MODE=mock, PRINTIFY_ORDER_APPROVAL=manual, PRINTIFY_ALLOW_ORDER_CREATION=false or PRINTIFY_PRODUCTION_ENABLED=false can explicitly pause fulfillment when you choose. Failed handoffs retry every ten minutes and are visible in `/admin/orders`.

For order emails, configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and EMAIL_FROM with your mail provider. Without SMTP, delivery is not live. Configure tax rules deliberately for your business; local order totals for Stripe purchases follow the amounts Stripe actually collected. The built-in checkout does not enable Stripe Tax automatically.

The ZIP excludes credential files, dependency folders, obsolete deployment scripts and source backups. Supply deployment credentials through your host environment or your local `.env`. No hosting account was changed or deployment performed.
