# KINDWELL.ORG — SPEC SHEET
## Natural Homeopathic Well-Being | Black Hills, SD
### Last Updated: 2026-10-10

---

## OVERVIEW

Kindwell is a Node.js/Express web application providing homeopathic remedy education, well-being content, stress relief resources, a tiered community message board, and an integrated e-commerce store. Built from scratch, deployed to Hostinger, monetized via Stripe subscriptions.

**Live URL:** https://kindwell.org  
**GitHub:** https://github.com/stratmeyeradam-ops/kindwell  
**Hosting:** Hostinger (Node.js 20, Express)  
**Payments:** Stripe (subscriptions + Ecommerce store via Hostinger)  
**Design:** Light beige (#FDFCF8) + Green (#4A7C59), Georgia serif font

---

## PAGES & ROUTES

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home (hero, features grid, CTA) | No |
| `/about` | About — mission, Black Hills roots, beliefs | No |
| `/remedies` | 10 homeopathic remedies with tiered detail content | No (details locked by tier) |
| `/wellbeing` | 6 well-being topic cards with images | No (full content by tier) |
| `/stress-relief` | 6 stress approaches + protocols | No |
| `/coaches` | 4 coaches, all "not accepting new clients" | No |
| `/store` | E-commerce store (Hostinger Storefront API) | No |
| `/subscribe` | Pricing page — 3 tiers via Stripe Checkout | Redirects if logged in |
| `/login` | Login form | No |
| `/register` | Registration form | No |
| `/dashboard` | Account: subscription status, access level, login history | Yes |
| `/board` | Community message board (tiered visibility) | Yes |
| `/board/:id` | Individual thread with replies | Yes |
| `/legal` | Legal notice / disclaimers | No |
| `/refund` | Refund policy (7-day first purchase, 30-day products) | No |
| `/privacy` | Privacy policy | No |
| `/terms` | Terms of service + board conduct rules | No |
| `/contact` | Contact info (email addresses, Black Hills location) | No |
| `/health` | JSON health check (debug) | No |
| `/api/stripe/checkout` | POST — creates Stripe Checkout session | Yes (or email) |
| `/api/stripe/webhook` | POST — Stripe webhook (tier updates) | Stripe signature |

---

## SUBSCRIPTION TIERS (Stripe)

| Tier | Name | Price | Access Level |
|------|------|-------|--------------|
| 0 | Free | $0 | View Level 1 content only |
| 1 | Sprout | $5/mo | View Levels 1-2, read board in depth |
| 2 | Grow | $10/mo | View all levels, post new topics, reply to threads |
| 3 | Flourish | $15/mo | Full access: view, post, reply across all levels + priority coach notification |

### Stripe Price IDs (LIVE):
- Sprout: `price_1UP6JdBESAZWLwwZxEb6PwFM`
- Grow: `price_1UP6JjBESAZWLwwZOqtBMTRj`
- Flourish: `price_1UP6JlBESAZWLwwZFpMgEXzA`

### How It Works:
1. User clicks tier on `/subscribe`
2. Frontend POSTs to `/api/stripe/checkout` with `{tier: 1|2|3}`
3. Server creates Stripe Checkout Session (mode: subscription)
4. User redirected to Stripe-hosted payment page
5. On success → redirect to `/dashboard?sub=success`
6. Stripe fires webhook → `checkout.session.completed`
7. Webhook updates user's `subscription_tier` in database
8. On cancellation → `customer.subscription.deleted` → tier set to 0

---

## MESSAGE BOARD — TIER LOGIC

| User Tier | Can View | Can Post | Can Reply |
|-----------|----------|----------|-----------|
| 0 (Free) | Messages with tier_level ≤ 1 | No | No |
| 1 ($5) | Messages with tier_level ≤ 2 | Yes (posts at level 2) | No |
| 2 ($10) | Messages with tier_level ≤ 3 | Yes (posts at level 3) | Yes |
| 3 ($15) | All messages (tier_level ≤ 4) | Yes (posts at level 4) | Yes |

Posts are visible to all users at or above the post's tier level. Lower-tier users see a locked preview with an upgrade CTA.

---

## TECHNOLOGY STACK

| Layer | Tech | Notes |
|-------|------|-------|
| Runtime | Node.js 20 | Hostinger managed |
| Framework | Express.js 4 | Server-rendered EJS templates |
| Database | better-sqlite3 | File-based, at `process.cwd()/kindwell.db` |
| Auth | express-session + bcryptjs | Session-based, 7-day cookie |
| Payments | Stripe SDK (server) + Checkout (client redirect) | No card data touches our server |
| Store | Hostinger Ecommerce Storefront API v2 | Client-side fetch, no auth needed for reads |
| Templates | EJS | Views in `/views/`, partials in `/views/partials/` |
| CSS | Custom (no framework) | Single file: `/public/css/styles.css` |
| JS | Vanilla | Single file: `/public/js/main.js` (mobile nav toggle) |
| Images | 7 Unsplash photos | Bundled in `/public/images/`, served from Hostinger |

---

## DATABASE SCHEMA (SQLite)

```sql
users (id, email UNIQUE, password_hash, name, stripe_customer_id, 
       subscription_tier [0-3], stripe_sub_id, created_at, last_login)

messages (id, user_id FK, title, body, tier_level [1-4], created_at)

replies (id, message_id FK, user_id FK, body, created_at)

login_events (id, user_id FK, ip_address, success [bool], created_at)

page_views (id, user_id nullable, path, created_at)
```

---

## CREDENTIALS & KEYS

| Service | Value | Location |
|---------|-------|----------|
| Hostinger API Token | `[in MCP env]` | MCP env var |
| Stripe Secret Key | In `config.json` (not in git) | `/home/ais/build/kindwell.org/config.json` |
| Stripe Publishable Key | `pk_live_51OrKAnBESAZWLwwZaBdy3t4bNw4zSHnIdXhA2UVHBFw7ytpUgJZP5UbvXWQtp0mlBuq06d6zW9oZYPSptD3yq4S7004tM5ToHQ` | For client-side if needed |
| Stripe Webhook ID | `we_1UInm0BESAZWLwwZg0p0dDua` | Points to `/api/stripe/webhook` |
| GitHub PAT | `[in .git-credentials]` | Account: stratmeyeradam-ops |
| Store Sales Channel | `scha_01M4KQFX2ZY0WBRM866BTAAGYC` | In store.ejs + config.json |
| Store ID | `store_01M4KQDJ9AD4E20G3K8B3HP60E` | Hostinger Ecommerce |

### Hostinger Hosting Details:
- Username: `u928433002`
- Domain: `kindwell.org` (addon)
- Order ID: `1010070952`
- Server: `srv1569`
- Root: `/home/u928433002/domains/kindwell.org/public_html`

---

## DEPLOYMENT PROCEDURE

### One-time setup (already done):
1. Website created on Hostinger via MCP: `hosting_websites_create`
2. Stripe products + prices created via API
3. Webhook endpoint created/updated in Stripe Dashboard
4. Ecommerce store + sales channel created via MCP

### To deploy a new version:
```bash
cd /home/ais/build/kindwell.org

# 1. Make changes to code/views/content

# 2. Zip the app (source only, no node_modules)
rm -f /tmp/kindwell_new.zip
zip -r /tmp/kindwell_new.zip src/ public/ views/ package.json package-lock.json config.json

# 3. Upload + Build via Hostinger MCP
#    (Use the script pattern in /tmp/hg-fix2.mjs)
#    - hosting_files_generate-upload-url → TUS upload app.zip
#    - hosting_nodejs_start-build:
#      node_version: 20, app_type: 'express', root_directory: '/',
#      build_script: 'build', entry_file: 'src/server.js', package_manager: 'npm'

# 4. Wait for build to complete (~20-30s)
# 5. Verify: curl https://kindwell.org/health
```

### Build Parameters (Hostinger Node.js):
- `node_version`: 20 (integer)
- `app_type`: "express"
- `root_directory`: "/"
- `output_directory`: ""
- `build_script`: "build" (runs `npm run build` which is a no-op echo)
- `entry_file`: "src/server.js"
- `package_manager`: "npm"

### Key Gotchas:
- `config.json` contains secrets — excluded from git via .gitignore but MUST be in the zip
- `build_script` field: Hostinger runs `npm run <value>`. We have `"build": "echo done"` in package.json
- Views path uses `__dirname` (not `process.cwd()`) for reliability
- DB path uses `process.cwd()` (writable on Hostinger)
- No Cloudflare. Ever.

---

## STORE INTEGRATION (Hostinger Ecommerce)

The store at `/store` uses the **public Storefront API** — no auth needed for reads:

```
Base: https://api-ecommerce.hostinger.com/v2
Products: GET /channels/scha_01M4KQFX2ZY0WBRM866BTAAGYC/products?limit=50
Variants: GET /channels/scha_01M4KQFX2ZY0WBRM866BTAAGYC/variants?limit=100
Checkout: POST /channels/scha_01M4KQFX2ZY0WBRM866BTAAGYC/checkout
```

- Cart stored in `localStorage` as `[{variant_id, quantity}]`
- Checkout redirects to Hostinger's hosted payment page
- Products are managed in hPanel → Ecommerce → Kindwell Natural Store
- To add products: use `ecommerce_products_create-physical` or `-digital` MCP operations

---

## DESIGN SYSTEM

### Colors:
```css
--beige-50: #FDFCF8    (page background)
--beige-100: #F9F6EF   (cards, sections)
--beige-200: #F3EDE0   (borders)
--green-500: #4A7C59   (primary buttons, accents)
--green-700: #2E4F37   (headings, footer bg)
--green-800: #1F3825   (darkest green)
```

### Typography:
- Font: Georgia, Times New Roman, serif
- Headings: Green-700/800
- Body text: #2C2C2C primary, #5A5A5A secondary

### Imagery:
- 7 Unsplash photos in `/public/images/`
- Hero: landscape (Black Hills feel)
- Content cards: breathing, sleep, nutrition, nature, conversation, grounding
- All CC0 licensed, no attribution required

---

## COACHES (Current Status)

All 4 coaches are **not accepting new clients**:
1. Sarah Mitchell — Homeopathic Counseling & Stress Management
2. David Chen — Natural Remedies & Wellness Coaching
3. Emily Hartwell — Mind-Body Integration & Breathwork
4. James Redhawk — Black Hills Herbal Traditions & Grounding

Subscribers get priority notification when a coach opens their practice.

---

## WHAT'S NOT YET DONE (Optional Enhancements)

- [ ] Add actual product images to the store (products need to be created in hPanel first)
- [ ] Enable shipping/payment methods in the Ecommerce store backend
- [ ] Add more remedy detail content for each of the 10 remedies
- [ ] Add audio exercises (guided breathing, etc.) for $10+ tier
- [ ] Add admin panel for managing messages/users
- [ ] Set up email notifications (Resend API key available: `[stored locally]`)
- [ ] Add SSL verification / custom 404 page
- [ ] SEO meta tags per page

---

## FILE STRUCTURE

```
kindwell.org/
├── SPEC.md              ← This file
├── config.json          ← Secrets (gitignored)
├── package.json         ← Dependencies + scripts
├── .env                 ← Local dev env (gitignored)
├── .gitignore
├── src/
│   ├── server.js        ← Express app, all routes, Stripe, auth
│   └── db.js            ← SQLite setup + schema
├── views/
│   ├── partials/
│   │   ├── header.ejs   ← Nav + head
│   │   └── footer.ejs   ← Footer + scripts
│   ├── home.ejs
│   ├── about.ejs
│   ├── remedies.ejs
│   ├── wellbeing.ejs
│   ├── stress-relief.ejs
│   ├── coaches.ejs
│   ├── store.ejs
│   ├── subscribe.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── dashboard.ejs
│   ├── board.ejs
│   ├── board-post.ejs
│   ├── legal.ejs
│   ├── refund.ejs
│   ├── privacy.ejs
│   ├── terms.ejs
│   └── contact.ejs
├── public/
│   ├── css/styles.css   ← Full design system
│   ├── js/main.js       ← Mobile nav toggle
│   └── images/          ← 7 bundled photos
└── kindwell.db          ← SQLite (created at runtime, gitignored)
```

---

## RULES

1. **No Cloudflare.** Not in the stack, not in the deployment, not in the DNS. Ever.
2. **All assets served from Hostinger.** Images bundled with the site. No external CDNs.
3. **config.json stays out of git.** It has the Stripe key.
4. **Better-sqlite3 is native.** If changing Node version on Hostinger, rebuild.
5. **Stripe webhook is already set up.** Don't create a new one (max 16 reached). Update `we_1UInm0BESAZWLwwZg0p0dDua` if needed.
6. **The Ecommerce store is separate from Stripe.** Store uses Hostinger's built-in checkout. Subscriptions use Stripe. Don't mix them.
