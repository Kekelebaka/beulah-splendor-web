1|# Beulah Splendor — Content Gap Register
2|
3|This document tracks every piece of content that the founder must confirm before the site goes live.
4|
5|**Rule:** Nothing is invented. If it's not confirmed, it's listed here.
6|
7|---
8|
9|## Triage Categories
10|
11|- 🔴 **BLOCKS PRODUCTION** — cannot launch to customers without this
12|- 🟡 **BLOCKS STAGING** — should be resolved before staging review, but won't block if clearly marked
13|- 🟢 **CAN FOLLOW POST-LAUNCH** — nice to have, can be added after initial launch
14|
15|---
16|
17|## 🔴 BLOCKS PRODUCTION
18|
19|| # | Gap | Location | Status |
20||---|-----|----------|--------|
21|| 1 | **WhatsApp phone number** (international format) | `/book`, `/contact` | Configured via `NEXT_PUBLIC_WHATSAPP_NUMBER` env var — needs real value |
22|| 2 | **Physical address** | `/contact`, Footer, SEO | Pending |
23|| 3 | **Operating hours/days** | `/contact` | Pending |
24|| 4 | **Current pricing** — legacy prices require reconfirmation | All treatment pages | Legacy values shown — founder must confirm |
25|| 5 | **Cancellation & deposit policy** | `/book` (step 6), `/booking-policy` | Pending |
26|| 6 | **Turnstile configured** — real site key + secret | Booking + Circle API | `TURNSTILE_STATUS=NOT_CONFIGURED` — needs real keys before production |
27|| 7 | **Domain configured** — `beulahsplendor.co.za` → Workers | DNS + wrangler.jsonc | Pending |
28|| 8 | **Health Scan device wording** — approved by founder | `/wellness/health-scan` | Generic placeholder — needs founder-approved copy |
29|| 9 | **D1 database created** — staging + production | wrangler.jsonc | Placeholder IDs — needs real D1 instances |
30|31|
32|## 🟡 BLOCKS STAGING (should resolve, won't block review)
33|
34|| # | Gap | Location | Status |
35||---|-----|----------|--------|
36|| 11 | **Founder portrait photo** | `/about`, Homepage | ⚠️ Founder has supplied photos — need to be added to repo |
37|| 12 | **Treatment photos** | `/treatments` | No images yet — placeholder comments in code |
38|| 13 | **Interior / practice photos** | Homepage, About | No images yet |
39|| 14 | **Service descriptions** — founder-approved copy | `/treatments/[slug]` | Using generic "Details being finalised" placeholders |
40|| 15 | **Treatment durations** | Treatment pages, booking | Not specified — marked as content gap |
41|| 16 | **Founder bio & certifications** | `/about` | Generic placeholder — needs founder story |
42|| 17 | **Health Scan process steps** | `/wellness/health-scan` | Generic placeholder |
43|| 18 | **Detox Machine details** | `/wellness` | Generic placeholder |
44|| 19 | **Treatment preparation & aftercare** | `/treatments/[slug]` | Generic placeholder |
45|| 20 | **OG/Twitter image** | `layout.tsx` metadata | No branded social image |
46|
47|## 🟢 CAN FOLLOW POST-LAUNCH
48|
49|| # | Gap | Location | Status |
50||---|-----|----------|--------|
51|| 21 | **Beulah Talks editorial content** | `/beulah-talks` | "Coming soon" — no content yet |
52|| 22 | **Journal article content** | `/journal` | "Coming soon" — no content yet |
53|| 23 | **Beulah Circle programme details** | Homepage Circle section | Interest signup works — programme details pending |
54|| 24 | **Beulah Naturals product range** | `/wellness` | Future feature |
55|| 25 | **Social media links** | Footer, Contact | Pending |
56|| 26 | **Location map embed** | `/contact` | Pending |
57|| 27 | **Approved testimonials** | Homepage proof section | Placeholder content removed |
58|| 28 | **Interior / room photos** | Homepage, About | Pending |
59|
60|---
61|
62|## Configuration Checklist (for CI/CD deployment)
63|
64|These environment variables must be set in the Cloudflare Workers environment:
65|
66|```
67|NEXT_PUBLIC_WHATSAPP_NUMBER=27XXXXXXXXX        # Real number, no + prefix
68|NEXT_PUBLIC_TURNSTILE_STATUS=LIVE              # or STAGING
69|NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAA...      # From CF dashboard
70|NEXT_PUBLIC_SITE_URL=https://beulahsplendor.co.za
71|NEXT_PUBLIC_ENVIRONMENT=staging                # or production
72|```
73|
74|Secrets (set via `wrangler secret put`):
75|```
76|TURNSTILE_SECRET_KEY=0x4AAAA...                # From CF dashboard
77|```
78|
79|---
80|
81|## Confirmed Service Families
82|
83|The following are confirmed as services Beula offers:
84|
85|- Massage
86|- Facials
87|- Makeup
88|- Health Scan
89|- Health Scan + Detox Machine
90|- Detox Machine
91|- Beulah Talks (editorial series)
92|
93|**NOT confirmed** (and therefore removed from the site):
94|- Swedish Massage, Deep Tissue Massage, Hot Stone Massage (invented sub-types)
95|- Classic Facial, Glow Facial (invented sub-types)
96|- Lash & Brow Styling (invented)
97|- Any specific treatment technique, duration, or preparation advice
98|
99|---
100|
101|## Historical / Legacy Prices (from existing Beulah collateral)
102|
103|These values are from existing marketing materials. They are **NOT confirmed current**.
104|The founder must reconfirm before production launch.
105|
106|| Service | Legacy Price | Status |
107||---------|-------------|--------|
108|| Facial only | R600 | Unconfirmed |
109|| Facial and massage | R750 | Unconfirmed |
110|| Massage only | R500 | Unconfirmed |
111|| Health scan | R200 | Unconfirmed |
112|| Health scan + detox machine | R550 | Unconfirmed |
113|| Detox machine only | R400 | Unconfirmed |
114|
115|---
116|
117|## Content Rules
118|
119|- **Never invent** treatments, prices, durations, testimonials, certifications, or medical claims
120|- **Never use** script/cursive font for navigation, buttons, forms, prices, or long copy
121|- **Butterfly identity only** — no floral monogram, no botanical B
122|- **Gold is punctuation** — never luxury cliché
123|- **Mobile-first** — 390px baseline, then 768/1024/1440
124|- **Health Scan**: NO diagnostic language, NO disease detection, NO cure claims, NO circulation claims
125|- **Prices shown as "legacy — reconfirmation required"** until founder confirms current pricing
126|- **WhatsApp**: only shown when `NEXT_PUBLIC_WHATSAPP_NUMBER` is configured
127|- **Turnstile**: `TURNSTILE_STATUS` must be LIVE before production; never fake keys
128|
129|---
130|
131|*Last updated: RC-1 Platform Commissioning*
132|