import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { circleInterestSchema } from "@/lib/validation";
import { insertCircleInterest, getDb } from "@/lib/db";

/**
 * POST /api/circle
 *
 * Registers interest in the Beulah Circle programme.
 *
 * CRITICAL: This route NEVER returns { ok: true } unless D1 confirms the insert.
 * If DB binding is missing → 503.
 * If D1 insert fails → 500.
 */

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const parsed = circleInterestSchema.safeParse(body);

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

    // --- Get D1 binding. If missing, return 503. ---
    let db: D1Database;
    try {
      db = getDb();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Service temporarily unavailable" },
        { status: 503 }
      );
    }

    // --- Insert into D1. If this fails, return 500. ---
    const id = nanoid(21);

    try {
      await insertCircleInterest(db, {
        id,
        name: data.name,
        phone: data.phone,
        email: data.email,
      });
    } catch (err) {
      console.error("[circle] D1 insert failed:", err);
      return NextResponse.json(
        { ok: false, error: "Failed to save. Please try again." },
        { status: 500 }
      );
    }

    // --- Only reached if D1 confirms the insert ---
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[circle] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
