import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";

/**
 * Section 06 — Nature / Beulah Naturals
 *
 * EXTRACTING BEAUTY FROM Nature.
 * [CONTENT GAP]: Products not ready. Show "IN DEVELOPMENT". No fake shop.
 */
export function NatureSection() {
  return (
    <Section variant="bone">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-bs-sage)" }}
          >
            Nature
          </p>

          <h2
            className="mb-6 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
              lineHeight: 1.15,
            }}
          >
            Extracting Beauty
            <br />
            from Nature.
          </h2>

          <p
            className="mb-6"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            At the heart of every Beulah treatment is a respect for
            natural ingredients. Botanicals, oils, and careful hands
            working together — because nature has always known how to
            care.
          </p>

          {/* Beulah Naturals — in development */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: "var(--color-bs-white)",
              border: "1px solid var(--color-bs-soft-lilac)",
            }}
          >
            <p
              className="mb-1 text-sm font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Beulah Naturals
            </p>
            <p
              className="text-sm"
              style={{
                color: "var(--color-bs-mauve)",
                fontFamily: "var(--font-body)",
              }}
            >
              In development. Real products, real ingredients — when
              they&apos;re ready.
            </p>
          </div>
        </div>

        {/* Image placeholder */}
        <div
          className="aspect-square rounded-2xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-bs-sage) 0%, #9aab93 100%)",
            opacity: 0.2,
          }}
        >
          <div className="text-center">
            <p
              className="text-sm font-medium uppercase tracking-[0.15em]"
              style={{ color: "var(--color-bs-white)" }}
            >
              Media Slot
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-bs-white)" }}>
              Botanicals · oils · hands · ingredients
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
