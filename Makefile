.PHONY: dev build start db-stop db-reset db-studio \
        docker-build docker-run docker-up docker-down docker-logs \
        ssl-init ssl-renew nginx-reload \
        cf-setup \
        server-setup deploy-init rollback

# Start local Supabase + Next.js dev server
dev:
	@bash scripts/dev.sh

build:
	npm run build

start:
	npm run start

# Stop Supabase Docker containers (keeps data)
db-stop:
	npx supabase stop

# Wipe and re-apply all migrations + seed (destructive)
db-reset:
	npx supabase db reset

# Open Supabase Studio in browser
db-studio:
	open http://127.0.0.1:54323

# ─── Docker ───────────────────────────────────────────────────────────────────

# Build the production Docker image
docker-build:
	docker build -t kara3d:latest .

# Run a single container (requires .env in project root)
docker-run:
	docker run --rm -p 3000:3000 --env-file .env kara3d:latest

# Start via Compose (detached)
docker-up:
	docker compose up -d --build

# Stop Compose stack
docker-down:
	docker compose down

# Tail container logs
docker-logs:
	docker compose logs -f web

# ─── Nginx / SSL ──────────────────────────────────────────────────────────────

# First-time Let's Encrypt certificate (run once on the server)
ssl-init:
	docker run --rm \
	  -v /etc/letsencrypt:/etc/letsencrypt \
	  -v certbot-webroot:/var/www/certbot \
	  certbot/certbot certonly \
	  --webroot --webroot-path /var/www/certbot \
	  -d kara3d.de -d www.kara3d.de \
	  --email hello@kara3d.de --agree-tos --no-eff-email

# Renew certificates (add to cron: 0 3 * * * make -C /path/to/project ssl-renew)
ssl-renew:
	docker run --rm \
	  -v /etc/letsencrypt:/etc/letsencrypt \
	  -v certbot-webroot:/var/www/certbot \
	  certbot/certbot renew --quiet
	docker compose exec nginx nginx -s reload

# Reload Nginx config without downtime
nginx-reload:
	docker compose exec nginx nginx -s reload

# ─── Cloudflare ───────────────────────────────────────────────────────────────

# Configure Cloudflare DNS, SSL, security + generate Origin Certificate
# Requires CF_API_TOKEN, CF_ORIGIN_CA_KEY, CF_ZONE_ID, SERVER_IP in .env
cf-setup:
	@bash scripts/cloudflare-setup.sh

# ─── Hetzner / Deploy ─────────────────────────────────────────────────────────

# Step 1 — initial VPS setup (run once as root after provisioning)
# Usage: SSH_HOST=<ip> make server-setup
server-setup:
	@test -n "$(SSH_HOST)" || (echo "Usage: SSH_HOST=<ip> make server-setup" && exit 1)
	ssh root@$(SSH_HOST) "bash -s" < scripts/server-setup.sh

# Step 2 — wire up git-push deployment (run once from local machine)
# Usage: SSH_HOST=<ip> make deploy-init
deploy-init:
	@test -n "$(SSH_HOST)" || (echo "Usage: SSH_HOST=<ip> make deploy-init" && exit 1)
	SSH_HOST=$(SSH_HOST) bash scripts/git-deploy-setup.sh

# Deploy — push current branch to prod server
deploy:
	git push prod main

# Emergency rollback — reverts web container to previous image on server
# Usage: SSH_HOST=<ip> make rollback
rollback:
	@test -n "$(SSH_HOST)" || (echo "Usage: SSH_HOST=<ip> make rollback" && exit 1)
	ssh deploy@$(SSH_HOST) \
	  "cd /opt/kara3d && \
	   docker compose up -d --no-deps web && \
	   echo Rolled back"
