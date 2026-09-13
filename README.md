# Beulah Splendor

Private, founder-led wellness and beauty practice in Pretoria.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Build:** vinext (Vite-based Next.js → Cloudflare Workers adapter)
- **Deployment:** Cloudflare Workers (NOT Pages)
- **Database:** Cloudflare D1 (SQLite)
- **Cache:** Cloudflare KV (vinext managed)
- **Anti-spam:** Cloudflare Turnstile
- **Analytics:** Cloudflare Web Analytics

## Getting Started

```bash
# Install dependencies
npm install

# Run development server (Next.js standard)
npm run dev

# Run development server (vinext + Cloudflare Workers)
npm run dev:vinext

# Build for Cloudflare Workers
npm run build:vinext

# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:production
```

## D1 Database

```bash
# Run migrations (local)
npm run db:migrate:local

# Seed data (local)
npm run db:seed:local

# Run migrations (staging)
npm run db:migrate:staging

# Run migrations (production)
npm run db:migrate
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage (12-section journey) |
| `/treatments` | Treatment categories |
| `/treatments/[slug]` | Treatment detail (7 pages) |
| `/wellness` | Wellness overview |
| `/wellness/health-scan` | Health Scan detail |
| `/about` | About Beula |
| `/beulah-talks` | Beulah Talks editorial |
| `/journal` | Journal |
| `/book` | Booking wizard (7 steps) |
| `/contact` | Contact |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/booking-policy` | Booking policy |

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md)

## Content Gaps

See [CONTENT_GAPS.md](./CONTENT_GAPS.md) — tracked, never invented.

## Brand Rules

- **Butterfly identity only** — no floral monogram, no botanical B
- **Gold is punctuation** — not a luxury cliché
- **Mobile-first** — 390px first, then 768/1024/1440
- **No invented facts** — if not confirmed by founder, mark as content gap
