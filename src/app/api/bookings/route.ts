import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { bookingSchema } from "@/lib/validation";
import { insertBooking, generateReference, getDb } from "@/lib/db";

/**
 * POST /api/bookings
 *
 * Creates a booking request in D1.
 * Returns the booking reference for WhatsApp handoff.
 *
 * CRITICAL: This route NEVER returns { ok: true } unless D1 confirms the insert.
 * If DB binding is missing → 503.
 * If D1 insert fails → 500.
 * Only after confirmed insert → { ok: true, reference }.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid input",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // --- Get D1 binding. If missing, return 503 (service unavailable). ---
    let db: D1Database;
    try {
      db = getDb();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Booking service temporarily unavailable" },
        { status: 503 }
      );
    }

    // --- Turnstile verification (mandatory in production) ---
    if (process.env.NODE_ENV === "production") {
      const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
      if (turnstileSecret && data.turnstileToken) {
        const verified = await verifyTurnstile(
          data.turnstileToken,
          turnstileSecret
        );
        if (!verified) {
          return NextResponse.json(
            { ok: false, error: "Spam protection failed" },
            { status: 403 }
          );
        }
      }
    }

    // --- Insert into D1. If this fails, return 500. ---
    const reference = generateReference();
    const id = nanoid(21);

    try {
      await insertBooking(db, {
        id,
        reference,
        treatmentId: data.treatmentId,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail,
        notes: data.notes,
      });
    } catch (err) {
      console.error("[bookings] D1 insert failed:", err);
      return NextResponse.json(
        { ok: false, error: "Failed to save booking. Please try again." },
        { status: 500 }
      );
    }

    // --- Only reached if D1 confirms the insert ---
    return NextResponse.json({ ok: true, reference });
  } catch (err) {
    console.error("[bookings] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Verify a Cloudflare Turnstile token via the Siteverify endpoint.
 */
async function verifyTurnstile(
  token: string,
  secretKey: string
): Promise<boolean> {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}
