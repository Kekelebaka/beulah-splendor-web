import { Section, Heading } from "@/components/ui/Primitives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Section variant="bone" className="min-h-[60vh]">
      <Heading level={1}>Terms of Service</Heading>
      <div
        className="mt-8 max-w-3xl space-y-6"
        style={{
          color: "var(--color-bs-charcoal)",
          fontFamily: "var(--font-body)",
          lineHeight: 1.7,
        }}
      >
        <p>
          By using the Beulah Splendor website and services, you agree to
          the following terms.
        </p>
        <p
          className="text-sm"
          style={{ color: "var(--color-bs-mauve)" }}
        >
          [Content gap: Full terms of service pending legal review and
          founder approval]
        </p>
      </div>
    </Section>
  );
}
