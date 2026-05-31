#!/usr/bin/env bash
# Configures Cloudflare zone for kara3d.de:
#   • DNS records (A, CNAME)
#   • SSL/TLS mode: Full Strict + Cloudflare Origin Certificate
#   • Security settings
#   • Performance settings
#
# Required env vars (set in .env):
#   CF_API_TOKEN      — API token with Zone:Edit + SSL:Edit permissions
#   CF_ORIGIN_CA_KEY  — Origin CA key (My Profile → API Tokens → Origin CA Key)
#   CF_ZONE_ID        — Zone ID from Cloudflare dashboard → Overview
#   SERVER_IP         — Public IP of your server

set -euo pipefail

# ─── Colors ───────────────────────────────────────────────────────────────────
R='\033[0;31m'; G='\033[0;32m'; Y='\033[1;33m'
B='\033[0;34m'; N='\033[0m'; BOLD='\033[1m'

ok()   { echo -e "  ${G}✓${N} $*"; }
warn() { echo -e "  ${Y}!${N} $*"; }
err()  { echo -e "  ${R}✗${N} $*"; exit 1; }
h1()   { echo -e "\n${BOLD}${B}$*${N}"; }
h2()   { echo -e "\n${BOLD}$*${N}"; }

# ─── Dependencies ─────────────────────────────────────────────────────────────
for cmd in curl jq; do
  command -v "$cmd" >/dev/null || err "$cmd is required (brew install $cmd)"
done

# ─── Load .env ────────────────────────────────────────────────────────────────
[[ -f .env ]] && { set -a; source .env; set +a; }

: "${CF_API_TOKEN:?CF_API_TOKEN not set}"
: "${CF_ORIGIN_CA_KEY:?CF_ORIGIN_CA_KEY not set}"
: "${CF_ZONE_ID:?CF_ZONE_ID not set}"
: "${SERVER_IP:?SERVER_IP not set}"

CF_API="https://api.cloudflare.com/client/v4"

# ─── API helpers ──────────────────────────────────────────────────────────────
cf() {
  local method=$1 path=$2 data=${3:-}
  local args=(-sf -X "$method" "${CF_API}${path}"
              -H "Authorization: Bearer ${CF_API_TOKEN}"
              -H "Content-Type: application/json")
  [[ -n "$data" ]] && args+=(-d "$data")
  curl "${args[@]}"
}

# Zone setting: value may be a string or JSON object
set_zone() {
  local key=$1 val=$2
  cf PATCH "/zones/${CF_ZONE_ID}/settings/${key}" "{\"value\":${val}}" >/dev/null
  ok "${key} = ${val}"
}

# ─── DNS ──────────────────────────────────────────────────────────────────────
h1 "Cloudflare Setup — kara3d.de"
h2 "1. DNS Records"

upsert_dns() {
  local type=$1 name=$2 content=$3 proxied=$4
  local existing id
  existing=$(cf GET "/zones/${CF_ZONE_ID}/dns_records?type=${type}&name=${name}")
  local count; count=$(echo "$existing" | jq '.result | length')

  if [[ "$count" -gt 0 ]]; then
    id=$(echo "$existing" | jq -r '.result[0].id')
    cf PATCH "/zones/${CF_ZONE_ID}/dns_records/${id}" \
      "{\"type\":\"${type}\",\"name\":\"${name}\",\"content\":\"${content}\",\"proxied\":${proxied},\"ttl\":1}" >/dev/null
    warn "Updated  ${type}  ${name} → ${content} (proxied=${proxied})"
  else
    cf POST "/zones/${CF_ZONE_ID}/dns_records" \
      "{\"type\":\"${type}\",\"name\":\"${name}\",\"content\":\"${content}\",\"proxied\":${proxied},\"ttl\":1}" >/dev/null
    ok "Created  ${type}  ${name} → ${content} (proxied=${proxied})"
  fi
}

upsert_dns "A"     "kara3d.de"     "$SERVER_IP" "true"
upsert_dns "CNAME" "www.kara3d.de" "kara3d.de"  "true"

# ─── SSL / TLS ────────────────────────────────────────────────────────────────
h2 "2. SSL / TLS"

# strict = Full (Strict) — requires valid cert on origin
cf PATCH "/zones/${CF_ZONE_ID}/settings/ssl" '{"value":"strict"}' >/dev/null
ok "ssl = strict (Full Strict)"

set_zone "always_use_https"        '"on"'
set_zone "min_tls_version"         '"1.2"'
set_zone "tls_1_3"                 '"zrt"'   # TLS 1.3 + 0-RTT
set_zone "automatic_https_rewrites" '"on"'
set_zone "ssl_recommender"         '{"enabled":true}'  2>/dev/null || true

# ─── Security ─────────────────────────────────────────────────────────────────
h2 "3. Security"

set_zone "security_level"    '"medium"'
set_zone "browser_check"     '"on"'
set_zone "hotlink_protection" '"on"'
set_zone "email_obfuscation" '"on"'
set_zone "server_side_exclude" '"on"'

# Bot Fight Mode (free plan)
cf PUT "/zones/${CF_ZONE_ID}/bot_management" \
  '{"fight_mode":true}' >/dev/null 2>&1 && ok "bot_management = fight_mode" \
  || warn "Bot Fight Mode — enable manually in dashboard (Security → Bots)"

# ─── Performance ──────────────────────────────────────────────────────────────
h2 "4. Performance"

set_zone "brotli" '"on"'
set_zone "http2"  '"on"'
set_zone "http3"  '"on"'
set_zone "0rtt"   '"on"'
# Next.js already minifies — don't double-minify
set_zone "minify" '{"js":"off","css":"off","html":"off"}'

# ─── Cloudflare Origin Certificate ────────────────────────────────────────────
h2 "5. Origin Certificate"

CERT_DIR="/etc/ssl/kara3d"
mkdir -p "$CERT_DIR"

cert_response=$(curl -sf -X POST "${CF_API}/certificates" \
  -H "X-Auth-User-Service-Key: ${CF_ORIGIN_CA_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"hostnames":["kara3d.de","*.kara3d.de"],"requested_validity":5475,"request_type":"origin-rsa"}')

if echo "$cert_response" | jq -e '.result.certificate' >/dev/null 2>&1; then
  echo "$cert_response" | jq -r '.result.certificate'  > "${CERT_DIR}/fullchain.pem"
  echo "$cert_response" | jq -r '.result.private_key'  > "${CERT_DIR}/privkey.pem"
  chmod 600 "${CERT_DIR}/privkey.pem"
  ok "Origin certificate saved to ${CERT_DIR}/ (valid 15 years)"
  ok "Certificate ID: $(echo "$cert_response" | jq -r '.result.id')"
else
  warn "Could not generate certificate via API."
  warn "Download manually: Cloudflare Dashboard → SSL/TLS → Origin Server → Create Certificate"
  warn "Save as: ${CERT_DIR}/fullchain.pem and ${CERT_DIR}/privkey.pem"
fi

# ─── Done ─────────────────────────────────────────────────────────────────────
echo -e "\n${G}${BOLD}Done!${N}"
echo -e "Run ${BOLD}make nginx-reload${N} to apply the new certificate.\n"
