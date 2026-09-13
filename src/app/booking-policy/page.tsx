import { Section, Heading } from "@/components/ui/Primitives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Policy",
};

export default function BookingPolicyPage() {
  return (
    <Section variant="bone" className="min-h-[60vh]">
      <Heading level={1}>Booking Policy</Heading>
      <div
        className="mt-8 max-w-3xl space-y-6"
        style={{
          color: "var(--color-bs-charcoal)",
          fontFamily: "var(--font-body)",
          lineHeight: 1.7,
        }}
      >
        <div
          className="rounded-xl p-6"
          style={{
            backgroundColor: "var(--color-bs-white)",
            border: "1px solid var(--color-bs-soft-lilac)",
          }}
        >
          <h2
            className="mb-3 text-lg"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            Booking Requests
          </h2>
          <p>
            All bookings at Beulah Splendor begin as requests. Your
            appointment is confirmed only when Beula confirms availability
            via WhatsApp.
          </p>
        </div>
        <p
          className="text-sm"
          style={{ color: "var(--color-bs-mauve)" }}
        >
          [Content gap: Cancellation policy, deposit policy, late arrival
          policy — pending founder confirmation]
        </p>
      </div>
    </Section>
  );
}
