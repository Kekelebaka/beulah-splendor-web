import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { WHATSAPP_NUMBER, WHATSAPP_CONFIGURED } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Beulah Splendor. Private care for body, beauty and wellbeing in Pretoria.",
};

export default function ContactPage() {
  return (
    <>
      <Section variant="bone">
        <Heading level={1}>Get in Touch</Heading>
        <p
          className="mt-4 max-w-2xl text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          Choose the way that works best for you.
        </p>
      </Section>

      <Section variant="light">
        <div className="mx-auto max-w-2xl space-y-6">
          {/* Book */}
          <div
            className="rounded-xl p-6 flex items-start gap-4"
            style={{
              backgroundColor: "var(--color-bs-bone)",
              border: "1px solid var(--color-bs-soft-lilac)",
            }}
          >
            <span className="text-2xl mt-1">📅</span>
            <div>
              <h2
                className="mb-2 text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                Request an Appointment
              </h2>
              <p
                className="mb-4 text-sm"
                style={{ color: "var(--color-bs-charcoal)", lineHeight: 1.6 }}
              >
                Use our booking form to request your preferred time.
                Beula confirms via WhatsApp.
              </p>
              <Button href="/book" variant="primary" size="md">
                Book Your Time
              </Button>
            </div>
          </div>

          {/* WhatsApp */}
          {WHATSAPP_CONFIGURED ? (
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-6 flex items-start gap-4 transition-all duration-200 hover:-translate-y-0.5 block"
            style={{
              backgroundColor: "var(--color-bs-bone)",
              border: "1px solid var(--color-bs-soft-lilac)",
              textDecoration: "none",
            }}
          >
            <span className="text-2xl mt-1">💬</span>
            <div>
              <h2
                className="mb-2 text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                WhatsApp
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-bs-charcoal)", lineHeight: 1.6 }}
              >
                Prefer WhatsApp? Send a message directly.
              </p>
            </div>
          </a>
          ) : (
          <div
            className="rounded-xl p-6 flex items-start gap-4"
            style={{
              backgroundColor: "var(--color-bs-bone)",
              border: "1px solid var(--color-bs-soft-lilac)",
              opacity: 0.6,
            }}
          >
            <span className="text-2xl mt-1">💬</span>
            <div>
              <h2
                className="mb-2 text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                WhatsApp
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-bs-charcoal)", lineHeight: 1.6 }}
              >
                WhatsApp booking will be available soon.
              </p>
            </div>
          </div>
          )}

          {/* Location */}
          <div
            className="rounded-xl p-6 flex items-start gap-4"
            style={{
              backgroundColor: "var(--color-bs-bone)",
              border: "1px solid var(--color-bs-soft-lilac)",
            }}
          >
            <span className="text-2xl mt-1">📍</span>
            <div>
              <h2
                className="mb-2 text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                Visit
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-bs-charcoal)", lineHeight: 1.6 }}
              >
                Pretoria, South Africa
              </p>
              <p
                className="mt-2 text-xs"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                [Content gap: Full physical address pending founder
                confirmation]
              </p>
            </div>
          </div>

          {/* Hours */}
          <div
            className="rounded-xl p-6 flex items-start gap-4"
            style={{
              backgroundColor: "var(--color-bs-bone)",
              border: "1px solid var(--color-bs-soft-lilac)",
            }}
          >
            <span className="text-2xl mt-1">🕐</span>
            <div>
              <h2
                className="mb-2 text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                Hours
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--color-bs-charcoal)", lineHeight: 1.6 }}
              >
                By appointment. Four sessions per day.
              </p>
              <p
                className="mt-2 text-xs"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                [Content gap: Specific operating days and hours pending
                founder confirmation]
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
