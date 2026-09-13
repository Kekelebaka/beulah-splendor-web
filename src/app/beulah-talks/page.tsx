import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beulah Talks",
  description:
    "Conversations around wellbeing, personal growth, women and life. A Beulah Splendor series.",
};

export default function BeulahTalksPage() {
  return (
    <>
      <Section variant="bone">
        <div className="flex items-center gap-3 mb-4">
          <ButterflyMark size="md" color="var(--color-bs-deep-plum)" />
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-bs-warm-gold)" }}
          >
            Beulah Talks
          </p>
        </div>
        <Heading level={1}>
          Conversations Around
          <br />
          Wellbeing, Personal Growth,
          <br />
          Women and Life.
        </Heading>
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
            Beulah Talks is a series of conversations from the practice —
            about beauty, women, personal growth and life. Content will be
            shared here when available.
          </p>
          <Button href="/contact" variant="primary" size="md">
            Stay Connected
          </Button>
        </div>
      </Section>
    </>
  );
}
