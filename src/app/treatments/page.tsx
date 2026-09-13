import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import { CATEGORIES, getVisibleTreatmentsByCategory } from "@/lib/treatments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Body, face, beauty and wellness services at Beulah Splendor. Private care shaped around you.",
};

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="bone">
        <Heading level={1} eyebrow="Your Care">
          Treatments
        </Heading>
        <p
          className="mt-4 max-w-2xl text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          Every treatment at Beulah Splendor is personal. Care shaped
          around you — your body, your skin, your time.
        </p>
      </Section>

      {/* Service listings by category */}
      {CATEGORIES.map((cat) => {
        const treatments = getVisibleTreatmentsByCategory(cat.id);
        if (treatments.length === 0) return null;
        return (
          <Section
            key={cat.id}
            id={cat.id}
            variant={cat.id === "body" || cat.id === "beauty" ? "bone" : "light"}
          >
            <div className="mb-10">
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-bs-warm-gold)" }}
              >
                {cat.tagline}
              </p>
              <Heading level={2}>{cat.name}</Heading>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t) => (
                <a
                  key={t.id}
                  href={`/treatments/${t.slug}`}
                  className="group block rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--color-bs-white)",
                    border: "1px solid var(--color-bs-soft-lilac)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <span className="text-2xl mb-3 block">{t.icon}</span>
                  <h3
                    className="mb-2 text-xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-bs-aubergine)",
                    }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{
                      color: "var(--color-bs-charcoal)",
                      lineHeight: 1.6,
                    }}
                  >
                    {t.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-bs-mauve)" }}
                    >
                      {t.durationLabel}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--color-bs-warm-gold)" }}
                    >
                      {t.priceLabel}
                    </span>
                  </div>
                  {!t.founderConfirmed && (
                    <p
                      className="mt-2 text-xs italic"
                      style={{ color: "var(--color-bs-mauve)" }}
                    >
                      Details being finalised
                    </p>
                  )}
                </a>
              ))}
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section variant="light">
        <div className="text-center">
          <ButterflyMark
            size="sm"
            color="var(--color-bs-mauve)"
            className="mx-auto mb-4"
          />
          <p
            className="text-sm max-w-lg mx-auto mb-2"
            style={{ color: "var(--color-bs-charcoal)" }}
          >
            Prices shown are historical values and may have changed.
            Contact Beula for current pricing.
          </p>
          <div className="mt-6">
            <Button href="/book" variant="primary" size="md">
              Book Your Time
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
