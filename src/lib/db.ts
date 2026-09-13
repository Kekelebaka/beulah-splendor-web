/**
 * Beulah Splendor — DB helper for D1.
 *
 * Uses the `cloudflare:workers` env binding.
 * At build time, vinext + @cloudflare/vite-plugin provide the real module.
 * During standard `next build`, a local mock is used instead.
 *
 * All writes use prepared statements.
 * D1 is never exposed directly to the browser.
 */

import { env } from "cloudflare:workers";

/** Access the D1 database binding. Throws if binding is missing. */
export function getDb(): D1Database {
  const db = env.DB;
  if (!db) {
    throw new Error(
      "D1 binding 'DB' is not available. " +
      "Run with wrangler dev or deploy to Cloudflare."
    );
  }
  return db;
}

/**
 * Generate a booking reference: BS-<base36 timestamp>
 */
export function generateReference(): string {
  return `BS-${Date.now().toString(36).toUpperCase()}`;
}

/**
 * Insert a booking request into D1.
 * Returns the D1 result on success, throws on failure.
 */
export async function insertBooking(
  db: D1Database,
  booking: {
    id: string;
    reference: string;
    treatmentId: string;
    preferredDate: string;
    preferredTime: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    notes?: string;
  }
) {
  return db
    .prepare(
      `INSERT INTO booking_requests
       (id, reference, treatment_id, preferred_date, preferred_time,
        customer_name, customer_phone, customer_email, notes, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'requested')`
    )
    .bind(
      booking.id,
      booking.reference,
      booking.treatmentId,
      booking.preferredDate,
      booking.preferredTime,
      booking.customerName,
      booking.customerPhone,
      booking.customerEmail || null,
      booking.notes || null
    )
    .run();
}

/**
 * Insert circle interest into D1.
 * Returns the D1 result on success, throws on failure.
 */
export async function insertCircleInterest(
  db: D1Database,
  data: { id: string; name: string; phone: string; email?: string }
) {
  return db
    .prepare(
      `INSERT INTO circle_interest (id, name, phone, email)
       VALUES (?, ?, ?, ?)`
    )
    .bind(data.id, data.name, data.phone, data.email || null)
    .run();
}
