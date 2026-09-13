import React from "react";
import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";

/**
 * Section 07 — Wellness / Health Scan
 *
 * UNDERSTAND MORE. CARE MORE INTENTIONALLY.
 * [CONTENT GAP]: Health Scan details, device info, price, disclaimer text.
 * healthScanClaimsVerified = false → no diagnosis/disease/cure language.
 */
export function WellnessSection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bs-white)" }}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image placeholder */}
          <div
            className="aspect-[4/3] rounded-2xl flex items-center justify-center order-2 lg:order-1"
            style={{
              background:
                "linear-gradient(135deg, var(--color-bs-soft-lilac) 0%, var(--color-bs-bone) 100%)",
            }}
          >
            <div className="text-center">
              <ButterflyMark
                size="lg"
                color="var(--color-bs-mauve)"
                className="mx-auto mb-3"
              />
              <p
                className="text-sm font-medium uppercase tracking-[0.15em]"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                Media Slot
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-bs-sage)" }}
            >
              Wellness
            </p>

            <h2
              className="mb-6 text-3xl md:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
                lineHeight: 1.15,
              }}
            >
              Understand More.
              <br />
              Care More Intentionally.
            </h2>

            <div
              className="mb-6 rounded-xl p-6"
              style={{
                backgroundColor: "var(--color-bs-bone)",
              }}
            >
              <h3
                className="mb-3 text-lg font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                Health Scan
              </h3>
              <p
                className="mb-4"
                style={{
                  color: "var(--color-bs-charcoal)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.7,
                }}
              >
                A wellness assessment that gives you a deeper understanding
                of your body — so care can be more personal, more
                intentional.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "What it is",
                  "What happens during your scan",
                  "How long it takes",
                  "What information you receive",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--color-bs-charcoal)" }}
                  >
                    <span style={{ color: "var(--color-bs-warm-gold)" }}>
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Disclaimer — required while healthScanClaimsVerified = false */}
              <p
                className="rounded-lg p-3 text-xs"
                style={{
                  backgroundColor: "var(--color-bs-white)",
                  color: "var(--color-bs-mauve)",
                  border: "1px solid var(--color-bs-soft-lilac)",
                }}
              >
                The Health Scan is a wellness tool and does not replace
                professional medical advice, diagnosis or treatment.
                Always consult a qualified healthcare provider for medical
                concerns.
              </p>
            </div>

            <Button href="/wellness/health-scan" variant="outline" size="md">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
