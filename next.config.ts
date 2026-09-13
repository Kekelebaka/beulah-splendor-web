import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Beulah Splendor — Next.js configuration.
 *
 * vinext handles the Cloudflare Workers runtime via vite.config.ts.
 * This file only contains Next.js-specific settings.
 *
 * The webpack plugin below aliases `cloudflare:workers` to a local mock
 * so that `next build` works without the Workers runtime.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const mockPath = resolve(__dirname, "src/lib/cf-env-mock.ts");
      config.plugins = config.plugins || [];
      config.plugins.push(
        new (require("webpack").NormalModuleReplacementPlugin)(
          /^cloudflare:workers$/,
          (resource: { request: string }) => {
            resource.request = mockPath;
          }
        )
      );
    }
    return config;
  },
};

export default nextConfig;
