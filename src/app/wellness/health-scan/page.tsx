import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Scan",
  description:
    "The Health Scan wellness assessment at Beulah Splendor.",
};

/**
 * HEALTH SCAN CLAIMS SAFETY
 *
 * healthScanClaimsVerified = false
 *
 * Until the founder provides device details:
 * - NO claims about what the device measures
 * - NO diagnostic language
 * - NO disease detection language
 * - NO cure/treatment claims
 * - NO circulation, organ-health, or detoxification claims
 *
 * ALLOWED: "wellness assessment", "understand more about your wellbeing",
 * "learn what the session involves", "ask Beula"
 *
 * MANDATORY DISCLAIMER on every Health Scan page.
 */

const DISCLAIMER =
  "This service does not replace medical diagnosis or professional medical advice. Always consult a qualified healthcare provider for medical concerns.";

export default function HealthScanPage() {
  return (
    <>
      <Section variant="bone">
        <Heading level={1} eyebrow="Wellness">
          Health Scan
        </Heading>
        <p
          className="mt-4 max-w-2xl text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          A wellness assessment at Beulah Splendor.
        </p>
      </Section>

      <Section variant="light">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* What is it */}
          <div>
            <h2
              className="mb-4 text-2xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              What Is It?
            </h2>
            <p
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
              }}
            >
              The Health Scan is a wellness assessment offered at Beulah
              Splendor. It is used to learn more about your wellbeing in an
              informational, wellness context.
            </p>
            <p
              className="mt-3 text-sm italic"
              style={{ color: "var(--color-bs-mauve)" }}
            >
              Details available during your session.
            </p>
          </div>

          {/* What happens */}
          <div>
            <h2
              className="mb-4 text-2xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              What Happens During a Session?
            </h2>
            <p
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
              }}
            >
              Specific session details are being finalised with the founder.
              Contact Beula to learn what the session involves.
            </p>
          </div>

          {/* Combined with Detox */}
          <div>
            <h2
              className="mb-4 text-2xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Health Scan + Detox Machine
            </h2>
            <p
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
              }}
            >
              The Health Scan can be combined with a Detox Machine session.
              Contact Beula for details and current pricing.
            </p>
          </div>

          {/* Disclaimer — MANDATORY */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: "var(--color-bs-bone)",
              border: "1px solid var(--color-bs-soft-lilac)",
            }}
          >
            <h2
              className="mb-4 text-lg"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Important
            </h2>
            <p
              className="text-sm"
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
              }}
            >
              {DISCLAIMER}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="/book" variant="primary" size="lg">
              Book / Ask Beula
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
