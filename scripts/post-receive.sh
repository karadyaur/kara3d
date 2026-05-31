#!/usr/bin/env bash
# Git post-receive hook — runs on the server after every `git push prod main`.
# Checks out the new code, rebuilds the Docker image, restarts the web container.

set -euo pipefail

BARE="/opt/kara3d.git"
APP="/opt/kara3d"

G='\033[0;32m'; N='\033[0m'; B='\033[1m'

while read -r oldrev newrev ref; do
  branch="${ref#refs/heads/}"
  [[ "$branch" == "main" ]] || { echo "Skipping branch: $branch"; continue; }

  echo ""
  echo -e "${B}━━━ Deploy: ${newrev:0:7} ━━━${N}"

  # Checkout pushed code into working directory
  GIT_WORK_TREE="$APP" GIT_DIR="$BARE" git checkout -f main

  cd "$APP"

  # Build new image
  echo "→ Building image..."
  docker compose build --quiet web

  # Replace web container; --wait blocks until healthcheck passes
  echo "→ Starting container..."
  docker compose up -d --no-deps --wait web

  # Reload nginx config if it changed (non-fatal)
  docker compose exec -T nginx nginx -t 2>/dev/null \
    && docker compose exec -T nginx nginx -s reload 2>/dev/null \
    && echo "→ Nginx reloaded" \
    || true

  echo -e "${G}✓ Done${N}"
done
