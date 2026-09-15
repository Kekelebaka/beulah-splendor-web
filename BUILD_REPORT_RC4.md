BEULAH SPLENDOR — RC-4 AWS COMMISSIONING REPORT
=================================================

Generated: 2026-09-15T03:35:00Z


1. SOURCE CONTROL
-----------------

Repository: https://github.com/Kekelebaka/beulah-splendor-web.git
Branch:     beulah-web-v1
Commit SHA: 816db1c
Working tree: Clean (3 files modified locally for build fix)
Code freeze: NOT YET — build fixes pending commit

Delta from baseline 71e3f2a:
  6 CI/workflow commits (beulah-staging.yml + wrangler.jsonc)
  All valid CI/platform fixes, no application code changes.


2. AWS ENVIRONMENT
------------------

OS:           Ubuntu 24.04.5 LTS (Noble Numbat)
Architecture: x86_64
Node:         v24.21.0
npm:          11.19.0
Wrangler:     4.131.1


3. BUILD
--------

TypeScript (tsc --noEmit):  PASS
vinext check:               PASS (92% compatible, 0 issues)
vinext build:               PASS (all 5 environments)

  [1/5] analyze client references  — 4.19s
  [2/5] analyze server references  — 0.82s
  [3/5] build rsc environment      — 2.12s
  [4/5] build client environment   — 1.50s
  [5/5] build ssr environment      — 1.43s

Routes recognized: 13 pages + 2 API routes + 1 dynamic + 1 not-found

BUILD FIXES REQUIRED (committed locally):

  Fix 1: Tailwind CSS v4 + Vite 8 incompatibility
    Problem: Vite 8's internal postcss-import resolves @import "tailwindcss"
    as a file path before @tailwindcss/postcss can intercept it.
    Fix: Added @tailwindcss/vite plugin to vite.config.ts.
    Added: @tailwindcss/vite as devDependency.

  Fix 2: Rolldown cloudflare:workers resolution
    Problem: Vite 8 uses Rolldown bundler which cannot resolve
    cloudflare:workers (a Cloudflare runtime builtin) via the
    @cloudflare/vite-plugin's resolve.builtins config.
    Fix: Added build.rollupOptions.external for all cloudflare:* modules.

  Files changed:
    - vite.config.ts      (added tailwindcss plugin + rollup externals)
    - package.json         (added @tailwindcss/vite dep)
    - package-lock.json    (lock file update)

Warnings:
  - eslint@9.39.5 deprecated (non-blocking)
  - 2 npm vulnerabilities (1 moderate, 1 high — pre-existing)
  - next/image served unoptimized (no Cloudflare Images configured)


4. CLOUDFLARE AUTH
------------------

CLOUDFLARE_API_TOKEN_PRESENT=NO
CLOUDFLARE_ACCOUNT_ID_PRESENT=NO

  *** BLOCKER *** No Cloudflare credentials available in AWS environment.
  GitHub Actions secrets are NOT shared with the AWS terminal.

  To proceed with deployment, set:
    export CLOUDFLARE_API_TOKEN=<token>
    export CLOUDFLARE_ACCOUNT_ID=<account-id>

  Token permissions required:
    - D1 Edit
    - Workers Scripts Edit
    - Account Settings Read


5. STAGING INFRASTRUCTURE
--------------------------

Worker name:     beulah-splendor-web (from wrangler.jsonc)
Worker URL:      BLOCKED — no credentials
Deployment ID:   BLOCKED — no credentials
D1 database:     beulah-splendor-staging
D1 ID:           placeholder-replace-with-real-id (NEEDS REAL ID)
Migrations:      0001_init.sql (5 tables: treatments, booking_requests,
                 talks, journal_posts, circle_interest)
Turnstile:       NOT_CONFIGURED
WhatsApp:        Placeholder (27000000000)
Environment:     staging

CRITICAL: wrangler.jsonc has placeholder database_id.
Must be replaced with real D1 database ID before deployment.

Worker name isolation:
  Staging worker = beulah-splendor-web
  NO separate staging worker name configured.
  Risk: Could overwrite production if production worker exists.
  RECOMMENDATION: Use beulah-splendor-web-staging for staging.


6. ROUTE TESTS
--------------

BLOCKED — no live deployment available.
Routes exist in source:
  /                       (page)
  /treatments             (page)
  /treatments/:slug       (dynamic)
  /wellness               (page)
  /wellness/health-scan   (page)
  /about                  (page)
  /beulah-talks           (page)
  /book                   (page)
  /contact                (page)
  /privacy                (page)
  /terms                  (page)
  /booking-policy         (page)
  /journal                (page)
  /robots.txt             (generated)
  /sitemap.xml            (generated)
  /api/bookings           (POST)
  /api/circle             (POST)
  /not-found              (404 page)


7. BOOKING GOLDEN TRANSACTION
------------------------------

BLOCKED — requires live D1 and deployed Worker.

Code review findings:
  - Zod validation: treatmentId, preferredDate (YYYY-MM-DD),
    preferredTime (HH:MM), customerName, customerPhone, customerEmail,
    notes, turnstileToken
  - D1 insert only returns { ok: true, reference } AFTER confirmed write
  - Reference format: BS-<base36 timestamp>
  - Turnstile verification: production only, server-side
  - Error handling: 400 (validation), 403 (turnstile), 500 (D1 failure),
    503 (missing DB binding)
  - NO stack traces leaked
  - NO ok:true on failure


8. CIRCLE GOLDEN TRANSACTION
-----------------------------

BLOCKED — requires live D1 and deployed Worker.

Code review findings:
  - Zod validation: name, phone, email, turnstileToken
  - D1 insert only returns { ok: true } AFTER confirmed write
  - Same error pattern as bookings (never returns ok:true on failure)


9. NEGATIVE TESTS
-----------------

BLOCKED — requires live deployment.

Code review (server-side):
  - Empty body: caught by zod → 400
  - Malformed JSON: caught by request.json() → 500 (try/catch)
  - Missing fields: caught by zod → 400
  - Invalid treatmentId: accepted (no FK validation at app level)
  - Invalid date format: caught by zod regex → 400
  - Invalid time format: caught by zod regex → 400

CONCERN: Malformed JSON returns 500 with generic "Internal server error"
rather than 400. The catch block on request.json() should return 400.


10. BRAND
---------

Butterfly: SVG butterfly mark in ButterflyLogo.tsx
  - 4-wing butterfly silhouette with antennae
  - Body line, wing opacity variation
  - aria-label="Beulah Splendor butterfly"
  - NOT a floral monogram or botanical mark
  NEEDS VISUAL REVIEW by founder

Founder imagery: MISSING
  No founder photos in repository (public/ contains only favicon.svg, og-image.svg)
  FOUNDER_PHOTOS=MISSING

Visual Northstar: CODE-REVIEW ONLY (no live rendering)
  - CSS variables: aubergine, deep-plum, royal-purple, mauve, soft-lilac,
    bone, sage, warm-gold, clay, charcoal
  - Fonts: Playfair Display (display), Manrope (body), Caveat (handwritten)
  - System is mobile-first


11. CONTENT INTEGRITY
---------------------

Invented content: NONE FOUND
  - No Swedish/Deep Tissue/Hot Stone massage types
  - No invented testimonials
  - No invented Beulah Talks episodes
  - No invented journal articles
  - No fake contact details

Unsupported health claims: NONE FOUND
  - Health Scan page includes mandatory disclaimer
  - All wellness language uses "assessment", "understanding"
  - No diagnostic/disease/cure language

Legacy pricing state: ALL UNCONFIRMED
  - Massage: R500 (legacy — reconfirmation required)
  - Facials: R600 (legacy — reconfirmation required)
  - Facial and Massage: R750 (legacy — reconfirmation required)
  - Health Scan: R200 (legacy — reconfirmation required)
  - Health Scan + Detox: R550 (legacy — reconfirmation required)
  - Detox Machine: R400 (legacy — reconfirmation required)
  - Makeup: no price (Details being finalised)
  All treatments marked founderConfirmed=false
  Treatments page warns: "Prices shown are historical values and may
  have changed. Contact Beula for current pricing."


12. MOBILE
----------

BLOCKED — requires live deployment for viewport testing.

Code review: Uses Tailwind CSS responsive classes (md:, lg:).


13. LIVE QUALITY
----------------

BLOCKED — requires live deployment for Lighthouse.


14. SECURITY
------------

Secrets in code: NONE
  - No committed credentials
  - .env.example has placeholders only
  - .gitignore covers .env, .env.local, .env.*.local
  - TURNSTILE_SECRET_KEY only read server-side (route.ts:49)
  - Never exposed to client

Input validation: ACTIVE
  - Zod schemas for bookings and circle
  - Max lengths on all string fields
  - Regex validation on date/time formats

Database failure behavior: CORRECT
  - Returns 500 on D1 insert failure
  - Returns 503 on missing DB binding
  - Never returns ok:true without confirmed D1 write

Turnstile: NOT_CONFIGURED (staging acceptable, production blocker)

Production resources isolated: PARTIAL
  - Staging D1 name: beulah-splendor-staging
  - BUT wrangler.jsonc worker name: beulah-splendor-web
  - No separate staging worker name → risk of overwriting production

No debug endpoints: CONFIRMED (only /api/bookings and /api/circle)


15. DEFECTS
-----------

S1 (blocks release):
  NONE

S2 (blocks core functionality):
  1. Cloudflare credentials missing — cannot deploy or test
  2. D1 database_id is placeholder — cannot deploy
  3. No separate staging worker name — production risk

S3 (non-critical):
  1. Malformed JSON returns 500 instead of 400
  2. No founder photos in repository
  3. WhatsApp number is placeholder
  4. Turnstile not configured

S4 (polish):
  1. eslint deprecated warning
  2. next/image unoptimized
  3. Build rollupOptions.external workaround may need
     removal when @cloudflare/vite-plugin fixes Rolldown support


16. CONTENT BLOCKERS
--------------------

BLOCKS PRODUCTION:
  1. Real WhatsApp number
  2. Physical address (if published)
  3. Operating hours (if published)
  4. Current prices (founder must confirm)
  5. Current treatment list (founder must confirm)
  6. Deposit policy (founder must confirm)
  7. Cancellation policy (founder must confirm)
  8. Health Scan device specifics (founder must confirm)
  9. Turnstile keys (production requirement)
  10. Founder approval of all content
  11. Founder photography

BLOCKS FEATURE:
  1. Beulah Talks episodes (currently empty)
  2. Journal articles (currently empty)

POST-LAUNCH:
  1. Future products
  2. Beulah Naturals commerce
  3. Circle programme sophistication


17. HUMAN ACCEPTANCE
--------------------

URL:      BLOCKED (no deployment)
Checklist: HUMAN_TEST_RC3.md exists, needs RC4 update
Status:   PENDING — requires deployment first


18. PRODUCTION READINESS
-------------------------

CONDITIONAL GO — with explicit conditions:

  Technical staging build: PASS
  Source code integrity:   PASS
  Content integrity:       PASS
  Security (code-level):   PASS

  BLOCKED BY:
    1. Cloudflare credentials (deploy blocker)
    2. D1 database_id (deploy blocker)
    3. Founder content confirmation (production blocker)
    4. Founder human acceptance (production blocker)


19. NEXT EXACT ACTION
---------------------

Supply Cloudflare credentials to this AWS environment:

  export CLOUDFLARE_API_TOKEN=<staging-token>
  export CLOUDFLARE_ACCOUNT_ID=<account-id>

Then commissioning resumes at Phase D and proceeds through
full live deployment, route testing, golden transaction testing,
and human acceptance build.
