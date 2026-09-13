import React from "react";
import { Button } from "@/components/ui/Button";

/**
 * Section 12 — Final CTA
 *
 * YOUR TIME IS YOURS.
 * Choose your care. Find your time. Come back to yourself.
 */
export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bs-deep-plum)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--color-bs-warm-gold) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <h2
          className="mb-4 text-4xl md:text-5xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-white)",
            lineHeight: 1.1,
          }}
        >
          Your Time
          <br />
          Is Yours.
        </h2>

        <p
          className="mx-auto mb-10 max-w-md text-lg"
          style={{
            color: "var(--color-bs-soft-lilac)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
          }}
        >
          Choose your care. Find your time. Come back to yourself.
        </p>

        <Button href="/book" variant="gold" size="lg">
          Book Your Time
        </Button>
      </div>
    </section>
  );
}
