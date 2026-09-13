# Beulah Splendor — Deployment Guide

## Architecture

```
Next.js 15 → vinext (Vite) → Cloudflare Workers + D1
```

No Pages. No KV. No R2. Minimal infrastructure.

---

## CI/CD Pipeline

**Trigger:** Push to `beulah-web-v1` branch, or manual `workflow_dispatch`

**Workflow:** `.github/workflows/beulah-staging.yml`

**Runner:** `ubuntu-latest` (Linux x86_64 — required by workerd)

**Pipeline:**
1. Checkout → Node setup → npm ci
2. TypeScript check
3. vinext compatibility check
4. vinext build (the real Cloudflare-targeted build)
5. Create/verify D1 staging database
6. Apply D1 migrations + seed
7. Deploy to Cloudflare Workers staging
8. Smoke test all routes
9. Test booking API + D1 persistence
10. Report deployment URL

---

## GitHub Secrets (required)

| Secret | Description | Example |
|--------|-------------|---------|
| `CLOUDFLARE_API_TOKEN` | CF API token with permissions below | `v1.0-abc123...` |
| `CLOUDFLARE_ACCOUNT_ID` | CF account ID | `c63d3d6d8c17db...` |

## Optional Secrets

| Secret | Description |
|--------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp in international format (no +) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile public site key |
| `TURNSTILE_SECRET_KEY` | Turnstile secret (set via `wrangler secret put`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |

---

## Cloudflare API Token — Minimum Permissions

Create at: https://dash.cloudflare.com/profile/api-tokens

### Required permissions:

| Scope | Resource | Permission |
|-------|----------|------------|
| Account | D1 | Edit |
| Account | Workers Scripts | Edit |
| Account | Account Settings | Read |

### NOT required:

- KV (removed from architecture)
- R2 (not used)
- Pages (deploying to Workers, not Pages)
- DNS (domain not configured yet)
- Administrator (least privilege)

### Token template:

1. Go to Cloudflare Dashboard → Profile → API Tokens
2. Click "Create Token"
3. Use "Edit Cloudflare Workers" template as starting point
4. Add D1:Edit permission
5. Restrict to specific account if desired

---

## Local Development

```bash
# Standard Next.js dev (no Cloudflare runtime)
npm run dev

# vinext dev (Cloudflare Workers runtime)
npm run dev:vinext

# D1 local (requires wrangler + workerd on Linux x86_64)
npm run db:migrate:local
npm run db:seed:local
```

---

## Staging Deployment (manual)

```bash
# On Linux x86_64 with CF_API_TOKEN set:
export CLOUDFLARE_API_TOKEN="your-token"
export CLOUDFLARE_ACCOUNT_ID="your-account-id"

# Build
npm run build:vinext

# Deploy
npm run deploy:staging
```

---

## Production Deployment

**NOT enabled until:**
- [ ] Staging passes human acceptance
- [ ] WhatsApp number confirmed
- [ ] Turnstile configured
- [ ] D1 production database created
- [ ] Domain configured
- [ ] All S1/S2 defects resolved

When ready, create a separate `beulah-production.yml` workflow.

---

## D1 Databases

| Environment | Database Name | Status |
|-------------|---------------|--------|
| Local dev | (wrangler local) | Available |
| Staging | beulah-splendor-staging | Created by CI |
| Production | beulah-splendor-prod | NOT CREATED |

---

## Environment Variables

### Public (bundled into client JS):

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `""` | WhatsApp number, no + prefix |
| `NEXT_PUBLIC_TURNSTILE_STATUS` | `NOT_CONFIGURED` | NOT_CONFIGURED / STAGING / LIVE |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | `""` | Turnstile public key |
| `NEXT_PUBLIC_SITE_URL` | `https://beulahsplendor.co.za` | Canonical URL |
| `NEXT_PUBLIC_ENVIRONMENT` | `""` | staging / production |

### Server-only (Worker env):

| Variable | Binding | Description |
|----------|---------|-------------|
| `DB` | D1 Database | Main database |
| `TURNSTILE_STATUS` | wrangler.jsonc vars | Turnstile status |

### Secrets (set via `wrangler secret put`):

| Secret | Description |
|--------|-------------|
| `TURNSTILE_SECRET_KEY` | Turnstile verification secret |

---

## Commands Reference

```bash
# Development
npm run dev                  # Next.js standard dev
npm run dev:vinext           # vinext + Cloudflare Workers dev

# Build
npm run build                # Standard Next.js build
npm run build:vinext         # vinext Cloudflare-targeted build

# Deploy
npm run deploy:staging       # Deploy to staging Workers
npm run deploy:production    # Deploy to production Workers (manual gate)

# Database
npm run db:migrate           # Apply migrations to production D1
npm run db:migrate:local     # Apply migrations to local D1
npm run db:migrate:staging   # Apply migrations to staging D1
npm run db:seed              # Seed production D1
npm run db:seed:local        # Seed local D1
npm run db:seed:staging      # Seed staging D1

# Type check
npm run typecheck            # tsc --noEmit
```

---

*Last updated: RC-3 Platform Commissioning*
