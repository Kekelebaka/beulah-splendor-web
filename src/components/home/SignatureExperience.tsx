import React from "react";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";

/**
 * Section 04 — Signature Experience
 *
 * THE BEULAH RESET
 * 90 minutes to come back to yourself.
 *
 * Dark aubergine interruption.
 * [CONTENT GAP]: Founder must confirm protocol, duration, price, scope before booking enabled.
 */
export function SignatureExperience() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bs-aubergine)" }}
    >
      {/* Subtle butterfly */}
      <div className="absolute top-8 right-8 opacity-[0.06]">
        <ButterflyMark size="lg" color="var(--color-bs-soft-lilac)" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--color-bs-warm-gold)" }}
        >
          Signature
        </p>

        <h2
          className="mb-4 text-4xl md:text-5xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-white)",
            lineHeight: 1.1,
          }}
        >
          The Beulah Reset
        </h2>

        <p
          className="mx-auto mb-10 max-w-md text-lg"
          style={{
            color: "var(--color-bs-soft-lilac)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
          }}
        >
          90 minutes to come back to yourself.
        </p>

        {/* Disabled until founder confirms protocol */}
        <Button variant="gold" size="lg" href="/treatments">
          Discover the Ritual
        </Button>

        <p
          className="mt-6 text-xs italic"
          style={{ color: "var(--color-bs-mauve)" }}
        >
          Details available on request.
        </p>
      </div>
    </section>
  );
}
