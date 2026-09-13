/**
 * Beulah Splendor — JSON-LD Structured Data
 *
 * Schema.org structured data for SEO.
 * Only includes confirmed, founder-approved information.
 *
 * Content gaps (address, phone, hours) are omitted — never invented.
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://beulahsplendor.co.za";

/**
 * Organization schema for the homepage.
 * Omits address/phone/hours until founder confirms.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Beulah Splendor",
    description:
      "Private, founder-led wellness and beauty practice in Pretoria.",
    url: SITE_URL,
    // address: CONTENT GAP — awaiting founder confirmation
    // telephone: CONTENT GAP — awaiting founder confirmation
    // openingHours: CONTENT GAP — awaiting founder confirmation
    areaServed: {
      "@type": "City",
      name: "Pretoria",
    },
    geo: {
      "@type": "GeoCoordinates",
      // latitude, longitude: CONTENT GAP — awaiting address confirmation
    },
    priceRange: "$$",
    // image: CONTENT GAP — awaiting founder photography
    sameAs: [],
    founder: {
      "@type": "Person",
      name: "Beula",
    },
  };
}

/**
 * Website schema with SearchAction (for Google sitelinks search box).
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Beulah Splendor",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Breadcrumb list schema.
 */
export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Treatment / Service schema.
 * Only includes confirmed data. Omits price/duration unless founder-approved.
 */
export function serviceJsonLd(treatment: {
  name: string;
  description: string;
  slug: string;
  category: string;
  priceZar?: number;
  durationMinutes?: number;
}) {
  const service: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: treatment.name,
    description: treatment.description,
    url: `${SITE_URL}/treatments/${treatment.slug}`,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: "Beulah Splendor",
    },
    serviceType: treatment.category,
    areaServed: {
      "@type": "City",
      name: "Pretoria",
    },
  };

  // Only include price if confirmed
  if (treatment.priceZar) {
    service.offers = {
      "@type": "Offer",
      price: treatment.priceZar,
      priceCurrency: "ZAR",
    };
  }

  return service;
}

/**
 * FAQ page schema.
 */
export function faqJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
