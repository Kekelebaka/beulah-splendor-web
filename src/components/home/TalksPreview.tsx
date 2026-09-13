import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";

/**
 * Section 08 — Beulah Talks Preview
 *
 * BEAUTY IS MORE THAN WHAT WE SEE.
 * [CONTENT GAP]: No real episodes yet. Show "coming to life" message.
 */
export function TalksPreview() {
  return (
    <Section variant="aubergine">
      <div className="mx-auto max-w-3xl text-center">
        <ButterflyMark
          size="sm"
          color="var(--color-bs-warm-gold)"
          className="mx-auto mb-4"
        />

        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--color-bs-warm-gold)" }}
        >
          Beulah Talks
        </p>

        <h2
          className="mb-6 text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-white)",
            lineHeight: 1.15,
          }}
        >
          Beauty Is More
          <br />
          Than What We See.
        </h2>

        <p
          className="mx-auto mb-8 max-w-lg text-lg"
          style={{
            color: "var(--color-bs-soft-lilac)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
          }}
        >
          Conversations around wellbeing, personal growth, women and
          life.
        </p>

        {/* Coming to life — no real content yet */}
        <div
          className="mx-auto mb-8 max-w-md rounded-xl p-6"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(168, 119, 157, 0.2)",
          }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--color-bs-soft-lilac)" }}
          >
            Beulah Talks is coming to life.
            <br />
            Real conversations. Real stories. Soon.
          </p>
        </div>

        <Button href="/beulah-talks" variant="gold" size="md">
          Explore Beulah Talks
        </Button>
      </div>
    </Section>
  );
}
