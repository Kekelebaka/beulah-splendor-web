import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Beula — the founder behind Beulah Splendor. Private care for body, beauty and wellbeing in Pretoria.",
};

export default function AboutPage() {
  return (
    <>
      <Section variant="bone">
        <Heading level={1} eyebrow="Personal">
          This Is Personal.
        </Heading>
        <p
          className="mt-4 max-w-2xl text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          Meet the woman behind the hands.
        </p>
      </Section>

      <Section variant="light">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div
            className="aspect-[4/5] rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--color-bs-soft-lilac) 0%, var(--color-bs-bone) 100%)",
            }}
          >
            <div className="text-center px-8">
              <ButterflyMark
                size="lg"
                color="var(--color-bs-mauve)"
                className="mx-auto mb-4"
              />
              <p
                className="text-sm font-medium uppercase tracking-[0.15em]"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                Founder Portrait
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                Founder portrait coming soon.
              </p>
            </div>
          </div>

          {/* Story */}
          <div>
            <h2
              className="mb-6 text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Meet Beula
            </h2>

            <div className="space-y-5">
              <p
                style={{
                  color: "var(--color-bs-charcoal)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.8,
                }}
              >
                Beula is the founder and practitioner behind Beulah
                Splendor — a private, founder-led wellness and beauty
                practice in Pretoria.
              </p>
              <p
                style={{
                  color: "var(--color-bs-charcoal)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.8,
                }}
              >
                Her practice covers massage, facials, makeup, the Health
                Scan wellness assessment, and natural oils. Every session
                is personal, unhurried, and shaped around the person in
                front of her.
              </p>
              <p
                style={{
                  color: "var(--color-bs-charcoal)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.8,
                }}
              >
                Through Beulah Talks, she opens conversations about
                beauty, women, personal growth and life.
              </p>
            </div>

            <p
              className="mt-6 text-xs italic"
              style={{ color: "var(--color-bs-mauve)" }}
            >
              More about Beula coming soon.
            </p>
          </div>
        </div>
      </Section>

      {/* Capacity */}
      <Section variant="bone">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="mb-6 text-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            Four Appointments. Every Day.
          </h2>
          <p
            className="text-lg mb-8"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.8,
            }}
          >
            Beulah Splendor is a private practice. Small numbers, personal
            attention, and the kind of space that allows you to settle.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Book Your Time
          </Button>
        </div>
      </Section>

      {/* Future */}
      <Section variant="light">
        <div className="mx-auto max-w-xl text-center">
          <ButterflyMark
            size="sm"
            color="var(--color-bs-deep-plum)"
            className="mx-auto mb-4"
          />
          <h2
            className="mb-4 text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            Growing Into More
          </h2>
          <p
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            Beulah Splendor is growing — from a private practice toward a
            broader wellness centre, with Beulah Naturals products, Beulah
            Talks conversations, and the Beulah Circle community.
          </p>
          <p
            className="mt-4 text-xs italic"
            style={{ color: "var(--color-bs-mauve)" }}
          >
            Exciting things are in development.
          </p>
        </div>
      </Section>
    </>
  );
}
