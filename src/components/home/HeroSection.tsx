import React from "react";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";

/**
 * Section 01 — Hero
 *
 * COME BACK TO YOURSELF.
 * Private care for body, beauty and wellbeing in Pretoria.
 *
 * No slider. No rotating banners. No crowding.
 *
 * [CONTENT GAP]: Founder-approved care photography needed.
 * Current: Structured placeholder with brand-consistent styling.
 */
export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bs-bone)" }}
    >
      {/* Subtle butterfly watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <ButterflyMark size="lg" />
      </div>

      {/* Media placeholder — will be replaced with founder photography */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, var(--color-bs-soft-lilac) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {/* Heritage line */}
        <p
          className="mb-6 text-sm tracking-[0.2em] uppercase"
          style={{
            color: "var(--color-bs-mauve)",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}
        >
          Extracting Beauty from Nature
        </p>

        {/* Main headline */}
        <h1
          className="mb-6 text-5xl md:text-6xl lg:text-7xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-aubergine)",
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Come Back
          <br />
          to Yourself.
        </h1>

        {/* Support */}
        <p
          className="mx-auto mb-10 max-w-lg text-lg md:text-xl"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
          }}
        >
          Private care for body, beauty and wellbeing in Pretoria.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/book" variant="primary" size="lg">
            Book Your Time
          </Button>
          <Button href="/treatments" variant="outline" size="lg">
            Explore Treatments
          </Button>
        </div>
      </div>
    </section>
  );
}
