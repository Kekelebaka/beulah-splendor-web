import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness",
  description:
    "Wellness services at Beulah Splendor. Health Scan, Detox Machine, and more.",
};

export default function WellnessPage() {
  return (
    <>
      <Section variant="bone">
        <Heading level={1} eyebrow="Wellness">
          Understand More.
          <br />
          Care More Intentionally.
        </Heading>
        <p
          className="mt-4 max-w-2xl text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          Wellness services at Beulah Splendor start with understanding —
          so every treatment can be more personal.
        </p>
      </Section>

      {/* Health Scan */}
      <Section variant="light">
        <div
          className="mx-auto max-w-2xl rounded-2xl p-8"
          style={{
            backgroundColor: "var(--color-bs-white)",
            border: "1px solid var(--color-bs-soft-lilac)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <span className="text-3xl mb-4 block">🔬</span>
          <h2
            className="mb-4 text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            Health Scan
          </h2>
          <p
            className="mb-4"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            A wellness assessment offered at Beulah Splendor. Specific
            details about the device, what it measures, and the process
            are being finalised with the founder.
          </p>
          <p
            className="mb-6 text-sm"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            This service does not replace medical diagnosis or professional
            medical advice. Always consult a qualified healthcare provider
            for medical concerns.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/wellness/health-scan" variant="primary" size="md">
              Learn About Health Scan
            </Button>
            <Button href="/book" variant="outline" size="md">
              Book a Session
            </Button>
          </div>
        </div>
      </Section>

      {/* Detox Machine */}
      <Section variant="bone">
        <div className="mx-auto max-w-2xl">
          <span className="text-3xl mb-4 block">🔬</span>
          <h2
            className="mb-4 text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            Detox Machine
          </h2>
          <p
            className="mb-4"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            Detox Machine sessions are available at Beulah Splendor —
            standalone or combined with the Health Scan. Specific details
            are being finalised with the founder.
          </p>
          <p
            className="text-xs italic"
            style={{ color: "var(--color-bs-mauve)" }}
          >
            Details available during your session.
          </p>
        </div>
      </Section>

      {/* Beulah Naturals */}
      <Section variant="light">
        <div className="mx-auto max-w-2xl">
          <span className="text-3xl mb-4 block">🌿</span>
          <h2
            className="mb-4 text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            Beulah Naturals
          </h2>
          <p
            className="mb-4"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.8,
            }}
          >
            Beula has a growing expertise in natural oils. Beulah Naturals
            is the future product line born from this work. Details coming
            soon.
          </p>
          <p
            className="text-xs italic"
            style={{ color: "var(--color-bs-mauve)" }}
          >
            Launching when ready.
            pending founder confirmation]
          </p>
        </div>
      </Section>

      <Section variant="bone">
        <div className="text-center">
          <ButterflyMark
            size="sm"
            color="var(--color-bs-deep-plum)"
            className="mx-auto mb-4"
          />
          <Button href="/book" variant="primary" size="lg">
            Book Your Time
          </Button>
        </div>
      </Section>
    </>
  );
}
