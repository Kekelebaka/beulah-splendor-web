import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";

/**
 * Section 11 — Beulah Circle
 *
 * WE REMEMBER THE PEOPLE WHO RETURN.
 * [STATUS]: Coming soon. No rewards invented.
 */
export function CircleSection() {
  return (
    <Section variant="light">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--color-bs-warm-gold)" }}
        >
          Beulah Circle
        </p>

        <h2
          className="mb-6 text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-aubergine)",
            lineHeight: 1.15,
          }}
        >
          We Remember
          <br />
          the People Who Return.
        </h2>

        <div
          className="mx-auto mb-8 max-w-md rounded-xl p-8"
          style={{
            backgroundColor: "var(--color-bs-bone)",
            border: "1px solid var(--color-bs-soft-lilac)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.6,
            }}
          >
            Loyalty and care, coming soon. A way to honour the clients
            who make Beulah their home for care.
          </p>
          <p
            className="mt-3 text-lg font-medium"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-deep-plum)",
            }}
          >
            Coming Soon
          </p>
        </div>
      </div>
    </Section>
  );
}
