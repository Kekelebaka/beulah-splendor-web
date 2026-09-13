/**
 * Beulah Splendor — Cloudflare env mock for local development.
 *
 * This module provides a fallback for `cloudflare:workers` when running
 * outside the Cloudflare Workers runtime (e.g. standard `next build` or
 * `next dev` without vinext).
 *
 * When running via vinext (dev:vinext / build:vinext), the real
 * `cloudflare:workers` module is provided by @cloudflare/vite-plugin.
 */

export const env = {
  DB: undefined as unknown as D1Database,
  TURNSTILE_SECRET_KEY: "",
  TURNSTILE_SITE_KEY: "",
};
