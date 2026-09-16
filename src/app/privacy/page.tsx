import { Section, Heading } from "@/components/ui/Primitives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section variant="bone" className="min-h-[60vh]">
      <Heading level={1}>Privacy Policy</Heading>
      <div
        className="mt-8 max-w-3xl space-y-6"
        style={{
          color: "var(--color-bs-charcoal)",
          fontFamily: "var(--font-body)",
          lineHeight: 1.7,
        }}
      >
        <p>
          Beulah Splendor respects your privacy and is committed to
          protecting your personal information.
        </p>
        <p
          className="text-sm"
          style={{ color: "var(--color-bs-mauve)" }}
        >
          Your privacy matters to us. Full policy details coming soon.
        </p>
      </div>
    </Section>
  );
}
