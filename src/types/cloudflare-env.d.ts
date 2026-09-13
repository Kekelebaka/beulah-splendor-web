/**
 * Minimal Cloudflare Workers type declarations.
 *
 * These cover the D1Database interface used by Beulah Splendor.
 * Full types are available via @cloudflare/workers-types on compatible platforms.
 */

// --- D1Database ---

interface D1Response {
  success: boolean;
  meta: Record<string, unknown>;
  results?: unknown[];
}

interface D1Result<T = unknown> {
  results: T[];
  success: boolean;
  meta: Record<string, unknown>;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T>;
  run(): Promise<D1Response>;
  all<T = unknown>(): Promise<D1Result<T>>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(
    statements: D1PreparedStatement[]
  ): Promise<D1Result<T>[]>;
  exec(query: string): Promise<D1ExecResult>;
}

interface D1ExecResult {
  count: number;
  duration: number;
}

// --- Cloudflare Workers env module ---

declare module "cloudflare:workers" {
  interface CloudflareBindings {
    DB: D1Database;
    TURNSTILE_SECRET_KEY: string;
    TURNSTILE_SITE_KEY: string;
  }

  export const env: CloudflareBindings;
}
