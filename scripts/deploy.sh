#!/usr/bin/env bash
# Runs on the Hetzner VPS (called by GitHub Actions deploy job).
# Pulls the new image, replaces the web container, verifies health, rolls back on failure.
#
# Environment (injected by CI):
#   IMAGE        — ghcr.io/owner/kara3d
#   DEPLOY_SHA   — sha-abc1234 (specific tag to deploy)
#   GITHUB_TOKEN — short-lived Actions token with packages:read
#   GITHUB_ACTOR — GitHub username for docker login

set -euo pipefail

IMAGE="${IMAGE:-ghcr.io/karadyaur/kara3d}"
TAG="${DEPLOY_SHA:-latest}"

G='\033[0;32m'; Y='\033[1;33m'; R='\033[0;31m'; B='\033[1m'; N='\033[0m'
ok()   { echo -e "${G}✓${N} $*"; }
warn() { echo -e "${Y}!${N} $*"; }
die()  { echo -e "${R}✗${N} $*"; exit 1; }

echo -e "\n${B}Deploy — ${TAG}${N}"

# ── 1. Login to GHCR ──────────────────────────────────────────────────────────
echo "${GITHUB_TOKEN}" | docker login ghcr.io -u "${GITHUB_ACTOR}" --password-stdin 2>/dev/null
ok "Logged in to ghcr.io"

# ── 2. Save current image for rollback ────────────────────────────────────────
if docker image inspect "${IMAGE}:latest" &>/dev/null; then
  docker tag "${IMAGE}:latest" "${IMAGE}:rollback"
  ok "Saved rollback image"
fi

# ── 3. Pull new image ─────────────────────────────────────────────────────────
docker pull "${IMAGE}:${TAG}"
docker tag  "${IMAGE}:${TAG}" "${IMAGE}:latest"
ok "Pulled ${IMAGE}:${TAG}"

# ── 4. Reload nginx config (non-fatal — nginx may not be running yet) ─────────
docker compose exec -T nginx nginx -s reload 2>/dev/null \
  && ok "Nginx config reloaded" \
  || warn "Nginx reload skipped"

# ── 5. Deploy web container ───────────────────────────────────────────────────
echo "→ Starting new web container..."
if docker compose up -d --no-deps --wait web; then
  ok "Deploy succeeded ($(git -C /opt/kara3d rev-parse --short HEAD 2>/dev/null || echo "${TAG}"))"
else
  warn "Health check failed — rolling back"
  if docker image inspect "${IMAGE}:rollback" &>/dev/null; then
    docker tag "${IMAGE}:rollback" "${IMAGE}:latest"
    docker compose up -d --no-deps web
    ok "Rolled back to previous image"
  fi
  docker logout ghcr.io 2>/dev/null || true
  die "Deploy failed"
fi

# ── 6. Cleanup ────────────────────────────────────────────────────────────────
docker logout ghcr.io 2>/dev/null || true
docker image prune -f --filter "until=24h" > /dev/null 2>&1 || true
ok "Done"
