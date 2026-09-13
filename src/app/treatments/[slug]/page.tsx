import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import { getTreatmentBySlug, getVisibleTreatments } from "@/lib/treatments";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  serviceJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://beulahsplendor.co.za";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getVisibleTreatments().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: "Service Not Found" };
  return {
    title: treatment.name,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment || !treatment.launchVisible) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: treatment.name,
              description: treatment.shortDescription,
              slug: treatment.slug,
              category: treatment.category,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Treatments", url: `${SITE_URL}/treatments` },
              {
                name: treatment.name,
                url: `${SITE_URL}/treatments/${treatment.slug}`,
              },
            ])
          ),
        }}
      />
      {/* Hero */}
      <Section variant="bone">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{treatment.icon}</span>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-bs-warm-gold)" }}
          >
            {treatment.tagline}
          </p>
        </div>
        <Heading level={1}>{treatment.name}</Heading>
        <p
          className="mt-4 max-w-2xl text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          {treatment.shortDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <span
            className="text-sm px-4 py-2 rounded-full"
            style={{
              backgroundColor: "var(--color-bs-soft-lilac)",
              color: "var(--color-bs-aubergine)",
            }}
          >
            {treatment.durationLabel}
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--color-bs-warm-gold)" }}
          >
            {treatment.priceLabel}
          </span>
        </div>
        {treatment.priceStatus === "legacy-unconfirmed" && (
          <p
            className="mt-2 text-xs"
            style={{ color: "var(--color-bs-mauve)" }}
          >
            Historical price — contact Beula for current pricing.
          </p>
        )}
      </Section>

      {/* Description */}
      <Section variant="light">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2
              className="mb-6 text-2xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              About This Service
            </h2>
            <p
              className="text-base"
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.8,
              }}
            >
              {treatment.longDescription}
            </p>

            {treatment.preparation && (
              <div className="mt-8">
                <h3
                  className="mb-3 text-lg"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-bs-aubergine)",
                  }}
                >
                  How to Prepare
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--color-bs-charcoal)",
                    lineHeight: 1.7,
                  }}
                >
                  {treatment.preparation}
                </p>
              </div>
            )}

            {treatment.aftercare && (
              <div className="mt-6">
                <h3
                  className="mb-3 text-lg"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-bs-aubergine)",
                  }}
                >
                  Aftercare
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--color-bs-charcoal)",
                    lineHeight: 1.7,
                  }}
                >
                  {treatment.aftercare}
                </p>
              </div>
            )}

            {!treatment.founderConfirmed && (
              <p
                className="mt-8 text-xs italic"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                Service details are being finalised with the founder.
                Contact Beula for full information.
              </p>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div
              className="rounded-xl p-6 sticky top-24"
              style={{
                backgroundColor: "var(--color-bs-bone)",
                border: "1px solid var(--color-bs-soft-lilac)",
              }}
            >
              <ButterflyMark
                size="sm"
                color="var(--color-bs-deep-plum)"
                className="mb-4"
              />
              <h3
                className="mb-2 text-lg"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                Ready to book?
              </h3>
              <p
                className="mb-5 text-sm"
                style={{
                  color: "var(--color-bs-charcoal)",
                  lineHeight: 1.6,
                }}
              >
                Request your preferred time. Beula will confirm availability
                with you directly.
              </p>
              <Button
                href={`/book?treatment=${treatment.slug}`}
                variant="primary"
                size="md"
                className="w-full"
              >
                Book {treatment.name}
              </Button>
              <p
                className="mt-4 text-xs text-center"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                Limited appointments — four per day
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Back */}
      <Section variant="bone">
        <div className="text-center">
          <Button href="/treatments" variant="outline" size="md">
            ← All Treatments
          </Button>
        </div>
      </Section>
    </>
  );
}
