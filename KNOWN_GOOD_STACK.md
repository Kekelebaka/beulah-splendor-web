# Beulah Splendor — Known-Good Cloudflare Stack

Proven working on: 2026-09-15

## Runtime

- Node: 24.21.0
- OS: Ubuntu 24.04.5 LTS (x86_64)

## Package Set

| Package | Version | Role |
|---------|---------|------|
| vinext | 1.0.0-beta.10 | Next.js → Vite runtime |
| @vinext/cloudflare | 1.0.0-beta.8 | Cloudflare Workers deploy pipeline |
| @cloudflare/vite-plugin | 1.54.9 | Vite ↔ Workers integration |
| vite | 8.3.0 | Build toolchain |
| wrangler | 4.131.2 | Cloudflare CLI |
| next | 15.5.25 | React framework |
| react | 19.x | UI library |

## Critical Configuration

### wrangler.jsonc MUST include:

```jsonc
{
  "main": "vinext/server/fetch-handler",
  // ... other config
}
```

Without `main`, the @cloudflare/vite-plugin generates `dist/client/wrangler.json`
(assets-only config). With `main`, it generates `dist/server/wrangler.json`
(proper Worker entry point with `main: index.js`).

### Deploy command:

```
npx @vinext/cloudflare deploy --name <worker-name>
```

NOT `vinext-cloudflare deploy --config dist/server/wrangler.json` (old pattern).

### Compatibility date:

```
"compatibility_date": "2025-09-01"
```

## Known Issues

- Wrangler 4.131.x requires `main` in wrangler.jsonc when `assets.binding` is present
- The deploy script in package.json uses old `--config dist/server/wrangler.json` pattern;
  the correct command is `npx @vinext/cloudflare deploy` (uses source config)
- `dist/server/wrangler.json` is only generated when `main` is set in source config
