#!/usr/bin/env bash
# Deploy kindwell.org to the shared Debian VPS (same box and layout as methspace.com).
# Run by Apollo, not by Claude.   Usage: bash scripts/deploy.sh [ip] [domain] [port]
# Needs SSH key access to root@<ip>, and Node 22.13+ and Caddy already on the box
# (the cloutdumpster.com deploy installs them).
set -euo pipefail
cd "$(dirname "$0")/.."
IP="${1:-198.98.57.191}"
DOMAIN="${2:-kindwell.org}"
PORT="${3:-8084}"
TARGET="root@$IP"

echo "== 1/3  Uploading the site"
# .env* files never leave this machine; secrets are pasted into /etc/kindwell.env by hand.
tar czf - --exclude=./data --exclude=./.git --exclude=./node_modules --exclude='./.env*' --exclude=./.claude \
  --exclude=./printify_assets --exclude=./tests . \
  | ssh "$TARGET" 'mkdir -p /srv/kindwell && tar xzf - -C /srv/kindwell'

echo "== 2/3  Setting up the service"
ssh "$TARGET" DOMAIN="$DOMAIN" PORT="$PORT" bash -s <<'REMOTE'
set -euo pipefail
command -v node >/dev/null && command -v caddy >/dev/null || { echo "Node or Caddy missing: deploy cloutdumpster.com first (it installs them)."; exit 1; }
node -e 'const [a,b]=process.versions.node.split(".").map(Number); process.exit(a>22||(a===22&&b>=13)?0:1)' \
  || { echo "Node 22.13+ required (have $(node -v))."; exit 1; }

# The port must be free unless it is already ours.
if ss -ltn "( sport = :$PORT )" | grep -q ":$PORT" && ! systemctl is-active --quiet kindwell; then
  echo "Port $PORT is already used by another service. Re-run with a free port: bash scripts/deploy.sh <ip> <domain> <port>"; exit 1
fi

id kindwell >/dev/null 2>&1 || useradd --system --home /var/lib/kindwell --shell /usr/sbin/nologin kindwell
mkdir -p /var/lib/kindwell && chown -R kindwell: /var/lib/kindwell
cd /srv/kindwell && npm ci --omit=dev --no-audit --no-fund >/dev/null
chown -R kindwell:kindwell /srv/kindwell

# Settings file: created once, never overwritten. Secrets get pasted in by hand.
if [ ! -f /etc/kindwell.env ]; then
  cat > /etc/kindwell.env <<ENV
NODE_ENV=production
PORT=$PORT
HOST=127.0.0.1
DB_PATH=/var/lib/kindwell/app.db
APP_ORIGIN=https://$DOMAIN
BETTER_AUTH_URL=https://$DOMAIN
# 32+ random characters:  openssl rand -hex 32
BETTER_AUTH_SECRET=
MEMBERSHIPS_ENABLED=true
EMAIL_MODE=mock
# Stripe (webhook endpoint https://$DOMAIN/api/webhooks/stripe)
STRIPE_MODE=live
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
# Printify (leave PRINTIFY_MODE=mock until scripts/check-printify.mjs passes)
PRINTIFY_MODE=mock
PRINTIFY_API_TOKEN=
PRINTIFY_SHOP_ID=
PRINTIFY_ALLOW_ORDER_CREATION=true
PRINTIFY_PRODUCTION_ENABLED=true
PRINTIFY_ORDER_APPROVAL=auto
ENV
fi
chmod 600 /etc/kindwell.env

cat > /etc/systemd/system/kindwell.service <<'UNIT'
[Unit]
Description=kindwell.org
After=network.target

[Service]
WorkingDirectory=/srv/kindwell
EnvironmentFile=/etc/kindwell.env
ExecStart=/usr/bin/node /srv/kindwell/src/server.js
User=kindwell
Restart=always
RestartSec=2

[Install]
WantedBy=multi-user.target
UNIT

# Per-site Caddy file; the main Caddyfile imports /etc/caddy/conf.d/*.caddy (set up by the methspace deploy).
grep -q '^import /etc/caddy/conf.d/' /etc/caddy/Caddyfile 2>/dev/null \
  || { echo "Caddyfile does not import conf.d yet: deploy methspace.com first (it migrates the layout)."; exit 1; }
cat > /etc/caddy/conf.d/$DOMAIN.caddy <<CADDY
$DOMAIN, www.$DOMAIN {
  encode zstd gzip
  reverse_proxy 127.0.0.1:$PORT
}
CADDY
caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null || {
  echo "Caddy config invalid; removing kindwell's file. Nothing reloaded."; rm -f /etc/caddy/conf.d/$DOMAIN.caddy; exit 1; }

systemctl daemon-reload
systemctl enable kindwell >/dev/null 2>&1
systemctl restart kindwell
systemctl reload caddy || systemctl restart caddy
sleep 3
systemctl is-active --quiet kindwell && echo "app: running" || { echo "app: FAILED"; journalctl -u kindwell -n 30 --no-pager; }
REMOTE

echo "== 3/3  Checking"
curl -s -o /dev/null -w "server answers for $DOMAIN: %{http_code}\n" -H "Host: $DOMAIN" "http://$IP/" || true
echo "Settings: ssh $TARGET nano /etc/kindwell.env   then   ssh $TARGET systemctl restart kindwell"
