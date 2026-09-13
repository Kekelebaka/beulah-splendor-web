# Beulah Splendor — Architecture

## Platform

Cloudflare-first. No Supabase.

```
┌─────────────────────────────────────────┐
│        Cloudflare Workers               │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │  vinext + Vite                   │   │
│  │  (Next.js → Workers adapter)     │   │
│  └──────────────┬───────────────────┘   │
│                 │                       │
│          ┌──────▼───────────┐           │
│          │   D1 Database    │           │
│          │   (SQLite)       │           │
│          └──────────────────┘           │
│                                         │
│  ┌──────────────┐  ┌────────────────┐   │
│  │  Turnstile   │  │  Web Analytics │   │
│  │  (anti-spam) │  │  (privacy)     │   │
│  └──────────────┘  └────────────────┘   │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │  KV (vinext cache)               │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

## Deployment Path

Next.js → vinext → Cloudflare Workers (NOT Pages)

1. `npm run build:vinext` — vinext builds via Vite, generates Worker + static assets
2. `npm run deploy:staging` — deploys to Cloudflare Workers staging environment
3. `npm run deploy:production` — deploys to Cloudflare Workers production environment

## vinext Compatibility

- 73% compatible on initial check (3 issues, all fixable)
- Issues: webpack custom config → migrated to Vite; `__dirname` → removed; `type: module` → added
- App Router: fully supported
- Route handlers: fully supported
- `cloudflare:workers` import: handled by @cloudflare/vite-plugin

## D1 Schema

5 tables: `treatments`, `booking_requests`, `talks`, `journal_posts`, `circle_interest`

All writes via prepared statements. D1 never exposed directly to browser.

## Booking Flow

1. User walks 7-step wizard (client-side)
2. Submit → `POST /api/bookings` → D1 insert → booking reference generated
3. Show WhatsApp handoff with prefilled message including reference
4. Beula confirms via WhatsApp (external to app)

No authentication. No session state. Pure request/response.

## Environments

| Environment | Worker | D1 Database | Domain |
|-------------|--------|-------------|--------|
| Local dev | `npm run dev:vinext` | Local D1 via wrangler | localhost:3001 |
| Staging | `npm run deploy:staging` | beulah-splendor-staging | *.workers.dev |
| Production | `npm run deploy:production` | beulah-splendor-prod | Custom domain |

## Content Strategy

- Real founder photography when supplied
- Placeholder slots clearly marked (never synthetic portraits)
- Content gaps tracked in CONTENT_GAPS.md
- No invented facts, testimonials, prices, or claims

## Security

- Turnstile on booking, contact, circle signup (when configured)
- Server-side validation on all mutations (zod)
- Environment bindings (no secrets in repo)
- Input sanitization via zod

## Performance Targets

- Lighthouse Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95
- LCP < 2.5s
- CLS < 0.1
