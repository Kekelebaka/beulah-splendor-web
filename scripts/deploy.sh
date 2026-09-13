#!/bin/bash
# ================================================================
# Beulah Splendor — CI/CD Deployment Script
# Must run on Linux x86_64 (workerd requirement)
# ================================================================
set -euo pipefail

ENVIRONMENT="${1:-staging}"
echo "=== Beulah Splendor Deploy: $ENVIRONMENT ==="

# Validate environment
if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
  echo "ERROR: Environment must be 'staging' or 'production'"
  exit 1
fi

# Production safety gate
if [[ "$ENVIRONMENT" == "production" ]]; then
  echo "WARNING: Production deployment requires human acceptance."
  echo "Ensure HUMAN_TEST.md has been completed and approved."
  read -p "Type 'GO' to confirm production deployment: " CONFIRM
  if [[ "$CONFIRM" != "GO" ]]; then
    echo "Aborted."
    exit 1
  fi
fi

# Step 1: TypeScript check
echo ""
echo "--- Step 1: TypeScript ---"
npx tsc --noEmit
echo "✅ TypeScript clean"

# Step 2: Standard build (catches webpack issues)
echo ""
echo "--- Step 2: Next.js build ---"
npm run build
echo "✅ Next.js build pass"

# Step 3: vinext build (the real Cloudflare-targeted build)
echo ""
echo "--- Step 3: vinext build ---"
npm run build:vinext
echo "✅ vinext build pass"

# Step 4: Create D1 database if needed
echo ""
echo "--- Step 4: D1 database ---"
if [[ "$ENVIRONMENT" == "staging" ]]; then
  DB_NAME="beulah-splendor-staging"
else
  DB_NAME="beulah-splendor-prod"
fi

echo "Checking D1 database: $DB_NAME"
# Check if database exists
DB_LIST=$(npx wrangler d1 list --json 2>/dev/null || echo "[]")
DB_EXISTS=$(echo "$DB_LIST" | python3 -c "import sys,json; dbs=json.load(sys.stdin); print('yes' if any(d.get('name')=='$DB_NAME' for d in dbs) else 'no')" 2>/dev/null || echo "unknown")

if [[ "$DB_EXISTS" == "no" ]]; then
  echo "Creating D1 database: $DB_NAME"
  npx wrangler d1 create "$DB_NAME"
  echo "⚠️  Update wrangler.jsonc with the new database_id"
fi

# Step 5: Run migrations
echo ""
echo "--- Step 5: D1 migrations ---"
npx wrangler d1 execute "$DB_NAME" --remote --file=./src/lib/db/migrations/0001_init.sql
echo "✅ Migrations applied"

# Step 6: Seed data
echo ""
echo "--- Step 6: D1 seed ---"
npx wrangler d1 execute "$DB_NAME" --remote --file=./src/lib/db/seed.sql
echo "✅ Seed data applied"

# Step 7: Create KV namespace if needed
echo ""
echo "--- Step 7: KV namespace ---"
KV_LIST=$(npx wrangler kv namespace list 2>/dev/null || echo "[]")
echo "KV namespaces checked. Ensure VINEXT_KV_CACHE ID is in wrangler.jsonc."

# Step 8: Deploy
echo ""
echo "--- Step 8: Deploy to $ENVIRONMENT ---"
if [[ "$ENVIRONMENT" == "staging" ]]; then
  npm run deploy:staging
else
  npm run deploy:production
fi
echo "✅ Deployed to $ENVIRONMENT"

# Step 9: Get deployment URL
echo ""
echo "--- Step 9: Deployment info ---"
echo "Worker: beulah-splendor-web"
echo "Environment: $ENVIRONMENT"
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "Commit: $(git rev-parse --short HEAD 2>/dev/null || echo 'unknown')"

if [[ "$ENVIRONMENT" == "staging" ]]; then
  echo ""
  echo "Staging URL: https://beulah-splendor-web.$(npx wrangler whoami 2>/dev/null | grep 'Account ID' | awk '{print $NF}' || echo 'ACCOUNT').workers.dev"
  echo ""
  echo "Next steps:"
  echo "1. Test all routes on the staging URL"
  echo "2. Run POST /api/bookings and POST /api/circle tests"
  echo "3. Complete HUMAN_TEST.md"
  echo "4. Only then proceed to production"
fi

echo ""
echo "=== Deploy complete ==="
