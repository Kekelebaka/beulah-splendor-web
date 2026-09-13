import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes and reflections from Beulah Splendor.",
};

export default function JournalPage() {
  return (
    <>
      <Section variant="bone">
        <Heading level={1} eyebrow="From the Practice">
          Journal
        </Heading>
        <p
          className="mt-4 max-w-2xl text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          Notes and reflections from the practice.
        </p>
      </Section>

      <Section variant="light">
        <div className="mx-auto max-w-xl text-center">
          <ButterflyMark
            size="lg"
            color="var(--color-bs-mauve)"
            className="mx-auto mb-6"
          />
          <h2
            className="mb-4 text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            Coming Soon
          </h2>
          <p
            className="mb-8"
            style={{
              color: "var(--color-bs-charcoal)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.8,
            }}
          >
            Notes, reflections and updates from the practice will be shared
            here when available.
          </p>
          <Button href="/contact" variant="primary" size="md">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
