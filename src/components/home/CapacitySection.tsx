import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";

/**
 * Section 10 — Intentional Capacity
 *
 * FOUR APPOINTMENTS. ONE DAY. NO ASSEMBLY LINE.
 * [FLAG]: Needs founder approval before production.
 */
export function CapacitySection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        backgroundColor: "var(--color-bs-bone)",
        borderTop: "1px solid rgba(52, 19, 53, 0.04)",
        borderBottom: "1px solid rgba(52, 19, 53, 0.04)",
      }}
    >
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2
          className="mb-6 text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-aubergine)",
            lineHeight: 1.15,
          }}
        >
          Four Appointments.
          <br />
          One Day.
          <br />
          No Assembly Line.
        </h2>

        <p
          className="mx-auto mb-4 max-w-lg text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          Beulah is intentionally personal. Availability is limited so care
          doesn&apos;t have to be rushed.
        </p>

        <p
          className="text-xs italic"
          style={{ color: "var(--color-bs-mauve)" }}
        >
          [Flagged for founder approval — confirm capacity model before
          production]
        </p>
      </div>
    </section>
  );
}
