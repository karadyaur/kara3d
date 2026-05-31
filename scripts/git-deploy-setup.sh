#!/usr/bin/env bash
# Run once from your local machine to wire up git-push deployment.
# Usage: SSH_HOST=<ip> bash scripts/git-deploy-setup.sh
#   or:  SSH_HOST=<ip> make deploy-init

set -euo pipefail

[[ -f .env ]] && { set -a; source .env; set +a; }

SSH_HOST="${SSH_HOST:-${1:-}}"
SSH_USER="${SSH_USER:-deploy}"

test -n "$SSH_HOST" || { echo "Usage: SSH_HOST=<server-ip> bash scripts/git-deploy-setup.sh"; exit 1; }

G='\033[0;32m'; N='\033[0m'; B='\033[1m'
ok() { echo -e "  ${G}✓${N} $*"; }

echo -e "\n${B}Setting up git deploy on ${SSH_USER}@${SSH_HOST}${N}"

# ── 1. Create bare repo on server ─────────────────────────────────────────────
ssh "${SSH_USER}@${SSH_HOST}" '
  set -e
  git init --bare /opt/kara3d.git 2>/dev/null && echo "  ✓ Bare repo created" || echo "  ✓ Bare repo already exists"
  # Ensure app dir exists
  mkdir -p /opt/kara3d
'

# ── 2. Copy post-receive hook ──────────────────────────────────────────────────
scp -q scripts/post-receive.sh "${SSH_USER}@${SSH_HOST}:/opt/kara3d.git/hooks/post-receive"
ssh "${SSH_USER}@${SSH_HOST}" "chmod +x /opt/kara3d.git/hooks/post-receive"
ok "post-receive hook installed"

# ── 3. Copy .env to server (if it exists and not already there) ───────────────
if [[ -f .env ]]; then
  scp -q .env "${SSH_USER}@${SSH_HOST}:/opt/kara3d/.env"
  ok ".env copied to server"
fi

# ── 4. Add git remote locally (idempotent) ────────────────────────────────────
REMOTE_URL="ssh://${SSH_USER}@${SSH_HOST}/opt/kara3d.git"
if git remote get-url prod &>/dev/null 2>&1; then
  git remote set-url prod "$REMOTE_URL"
  ok "git remote 'prod' updated → ${REMOTE_URL}"
else
  git remote add prod "$REMOTE_URL"
  ok "git remote 'prod' added → ${REMOTE_URL}"
fi

# ── Done ──────────────────────────────────────────────────────────────────────
echo ""
echo -e "${B}Ready!${N} Deploy with:"
echo ""
echo "  git push prod main"
echo ""
echo "First push will build the Docker image (~3 min). Subsequent pushes are faster."
echo ""
