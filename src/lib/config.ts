/**
 * Beulah Splendor — Runtime configuration.
 *
 * All business-specific values that may change between environments.
 * NEVER hard-code real values here — always read from environment.
 */

/** WhatsApp phone number in international format (no + prefix). */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

/** Whether a real WhatsApp number is configured. */
export const WHATSAPP_CONFIGURED = WHATSAPP_NUMBER.length > 0;

/** Turnstile status: NOT_CONFIGURED | STAGING | LIVE */
export const TURNSTILE_STATUS =
  process.env.NEXT_PUBLIC_TURNSTILE_STATUS || "NOT_CONFIGURED";

/** Turnstile site key (public, safe for client). */
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

/** Base URL for the site. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://beulahsplendor.co.za";

/** Whether this is a staging deployment. */
export const IS_STAGING =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "staging";
