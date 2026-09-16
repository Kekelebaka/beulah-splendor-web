import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";

/**
 * Section 09 — Proof / Testimonials
 *
 * HOW DID YOU LEAVE?
 * Only show real testimonials. NEVER invent reviews.
 * [CONTENT GAP]: No real testimonials provided yet.
 */
export function ProofSection() {
  // No real testimonials provided — show empty state honestly.
  const testimonials: Array<{
    quote: string;
    name: string;
  }> = [];

  if (testimonials.length === 0) {
    return (
      <Section variant="light">
        <Heading level={2} align="center" eyebrow="From Our Clients">
          How Did You Leave?
        </Heading>
        <div className="mx-auto mt-8 max-w-md text-center">
          <p
            className="text-base"
            style={{
              color: "var(--color-bs-mauve)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.6,
            }}
          >
            Real stories from real clients — coming soon.
          </p>
          <p
            className="mt-2 text-xs"
            style={{ color: "var(--color-bs-soft-lilac)" }}
          >
            &nbsp;
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section variant="light">
      <Heading level={2} align="center" eyebrow="From Our Clients">
        How Did You Leave?
      </Heading>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-xl p-6"
            style={{
              backgroundColor: "var(--color-bs-bone)",
              borderLeft: "3px solid var(--color-bs-warm-gold)",
            }}
          >
            <p
              className="mb-4 italic"
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <cite
              className="text-sm not-italic font-medium"
              style={{ color: "var(--color-bs-deep-plum)" }}
            >
              — {t.name}
            </cite>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
