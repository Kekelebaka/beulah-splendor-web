import type { NextConfig } from "next";

/**
 * Beulah Splendor — Next.js configuration.
 *
 * vinext handles Cloudflare Workers integration via vite.config.ts.
 * This file is passed through by vinext for Next.js-specific settings only.
 *
 * NOTE: The webpack mock for cloudflare:workers is NOT needed under vinext.
 * @cloudflare/vite-plugin provides the real module at build time.
 * For standard `next build` without vinext, use src/lib/cf-env-mock.ts manually.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
