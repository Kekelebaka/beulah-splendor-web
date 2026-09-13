import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";

/**
 * Section 02 — Brand Difference
 *
 * SOME CARE CANNOT BE RUSHED.
 * Private. Personal. Restorative.
 *
 * [CONTENT GAP]: Tactile imagery (hands, oil, skin, towels, quiet room detail).
 */
export function BrandDifference() {
  const truths = [
    {
      label: "Private",
      description: "Space to settle.",
    },
    {
      label: "Personal",
      description: "Care shaped around you.",
    },
    {
      label: "Restorative",
      description: "Leave calmer than you arrived.",
    },
  ];

  return (
    <Section variant="light">
      <Heading level={2} align="center">
        Some Care
        <br />
        Cannot Be Rushed.
      </Heading>

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
        {truths.map((truth) => (
          <div key={truth.label} className="text-center">
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-[0.15em]"
              style={{
                color: "var(--color-bs-warm-gold)",
                fontFamily: "var(--font-body)",
              }}
            >
              {truth.label}
            </p>
            <p
              className="text-lg"
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.6,
              }}
            >
              {truth.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
