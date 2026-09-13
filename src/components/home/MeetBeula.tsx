import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";

/**
 * Section 05 — Meet Beula
 *
 * THIS IS PERSONAL.
 * Meet the woman behind the hands.
 *
 * [CONTENT GAP]: Real approved founder photography needed.
 * [CONTENT GAP]: Founder story details (beauty training, massage, natural oils, client relationships).
 */
export function MeetBeula() {
  return (
    <Section variant="light">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Photo placeholder */}
        <div
          className="aspect-[4/5] rounded-2xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-bs-soft-lilac) 0%, var(--color-bs-bone) 100%)",
          }}
        >
          <div className="text-center px-8">
            <p
              className="text-sm font-medium uppercase tracking-[0.15em] mb-2"
              style={{ color: "var(--color-bs-mauve)" }}
            >
              Media Slot
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--color-bs-mauve)" }}
            >
              Founder-approved portrait
              <br />
              of Beula
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-bs-warm-gold)" }}
          >
            Personal
          </p>

          <h2
            className="mb-6 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
              lineHeight: 1.15,
            }}
          >
            This Is Personal.
          </h2>

          <p
            className="mb-4 text-lg"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            Meet the woman behind the hands.
          </p>

          <p
            className="mb-6"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            Beula&apos;s love for beauty and wellness began with a simple
            belief: that care should be personal, unhurried and rooted in
            nature. Through self-learning, beauty training, and years of
            building personal relationships with her clients, she has
            created a practice that feels less like a service and more
            like a return to yourself.
          </p>

          <p
            className="mb-8"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            Her approach combines professional care with natural oils, a
            quiet space, and the kind of attention that can only come from
            someone who genuinely loves what they do.
          </p>

          <Button href="/about" variant="outline" size="md">
            Meet Beula
          </Button>
        </div>
      </div>
    </Section>
  );
}
