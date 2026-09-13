/**
 * Beulah Splendor — Treatment Source of Truth
 *
 * RULES:
 * 1. Only confirmed service families appear here.
 * 2. No invented sub-types (e.g. "Swedish", "Deep Tissue") unless founder confirms.
 * 3. Prices are legacy values from existing collateral — marked `legacy-unconfirmed`.
 * 4. `launchVisible: false` means the treatment is hidden from public pages
 *    until the founder explicitly confirms details.
 * 5. `founderConfirmed: true` only when Beula has personally signed off.
 *
 * To add a new treatment:
 *   - Founder must confirm name, description, price, duration.
 *   - Set `founderConfirmed: true` and `launchVisible: true`.
 *
 * Historical/legacy prices (from existing Beulah collateral):
 *   Facial only: R600
 *   Facial and massage: R750
 *   Massage only: R500
 *   Health scan: R200
 *   Health scan + detox machine: R550
 *   Detox machine only: R400
 */

import type { TreatmentData } from "@/types";

export const TREATMENTS: TreatmentData[] = [
  {
    id: "massage",
    slug: "massage",
    name: "Massage",
    category: "body",
    tagline: "Restore",
    shortDescription:
      "Massage and body care at Beulah Splendor. Details being finalised.",
    longDescription:
      "Massage services at Beulah Splendor. Specific techniques, durations, and pricing are being finalised with the founder. Contact Beula to discuss what works best for you.",
    priceLabel: "R500 (legacy — reconfirmation required)",
    priceStatus: "legacy-unconfirmed",
    durationLabel: "Details being finalised",
    durationStatus: "legacy-unconfirmed",
    icon: "🌿",
    launchVisible: true,
    founderConfirmed: false,
  },
  {
    id: "facials",
    slug: "facials",
    name: "Facials",
    category: "face",
    tagline: "Renew",
    shortDescription:
      "Facial treatments at Beulah Splendor. Details being finalised.",
    longDescription:
      "Facial treatments at Beulah Splendor. Specific facial types, durations, and pricing are being finalised with the founder. Contact Beula to discuss what your skin needs.",
    priceLabel: "R600 (legacy — reconfirmation required)",
    priceStatus: "legacy-unconfirmed",
    durationLabel: "Details being finalised",
    durationStatus: "legacy-unconfirmed",
    icon: "✨",
    launchVisible: true,
    founderConfirmed: false,
  },
  {
    id: "facial-and-massage",
    slug: "facial-and-massage",
    name: "Facial and Massage",
    category: "body",
    tagline: "Restore",
    shortDescription:
      "Combined facial and massage session. Details being finalised.",
    longDescription:
      "A combined facial and massage session. Specific details, duration, and approach are being finalised with the founder.",
    priceLabel: "R750 (legacy — reconfirmation required)",
    priceStatus: "legacy-unconfirmed",
    durationLabel: "Details being finalised",
    durationStatus: "legacy-unconfirmed",
    icon: "🌿",
    launchVisible: true,
    founderConfirmed: false,
  },
  {
    id: "makeup",
    slug: "makeup",
    name: "Makeup",
    category: "beauty",
    tagline: "Enhance",
    shortDescription:
      "Professional makeup by Beula. Details being finalised.",
    longDescription:
      "Professional makeup services. Specific offerings (bridal, event, everyday) are being finalised with the founder.",
    priceLabel: "Details being finalised",
    priceStatus: "legacy-unconfirmed",
    durationLabel: "Details being finalised",
    durationStatus: "legacy-unconfirmed",
    icon: "💄",
    launchVisible: true,
    founderConfirmed: false,
  },
  {
    id: "health-scan",
    slug: "health-scan",
    name: "Health Scan",
    category: "wellness",
    tagline: "Understand",
    shortDescription:
      "A wellness assessment. Details being finalised.",
    longDescription:
      "The Health Scan is a wellness assessment offered at Beulah Splendor. Specific details about the device, what it measures, and the process are being finalised with the founder. This service does not replace medical diagnosis or professional medical advice.",
    priceLabel: "R200 (legacy — reconfirmation required)",
    priceStatus: "legacy-unconfirmed",
    durationLabel: "Details being finalised",
    durationStatus: "legacy-unconfirmed",
    icon: "🔬",
    launchVisible: true,
    founderConfirmed: false,
  },
  {
    id: "health-scan-detox",
    slug: "health-scan-and-detox-machine",
    name: "Health Scan + Detox Machine",
    category: "wellness",
    tagline: "Understand",
    shortDescription:
      "Combined Health Scan and Detox Machine session. Details being finalised.",
    longDescription:
      "A combined session including the Health Scan wellness assessment and the Detox Machine. Specific details are being finalised with the founder. This service does not replace medical diagnosis or professional medical advice.",
    priceLabel: "R550 (legacy — reconfirmation required)",
    priceStatus: "legacy-unconfirmed",
    durationLabel: "Details being finalised",
    durationStatus: "legacy-unconfirmed",
    icon: "🔬",
    launchVisible: true,
    founderConfirmed: false,
  },
  {
    id: "detox-machine",
    slug: "detox-machine",
    name: "Detox Machine",
    category: "wellness",
    tagline: "Understand",
    shortDescription:
      "Detox Machine session. Details being finalised.",
    longDescription:
      "Detox Machine sessions at Beulah Splendor. Specific details about the device and process are being finalised with the founder. This service does not replace medical diagnosis or professional medical advice.",
    priceLabel: "R400 (legacy — reconfirmation required)",
    priceStatus: "legacy-unconfirmed",
    durationLabel: "Details being finalised",
    durationStatus: "legacy-unconfirmed",
    icon: "🔬",
    launchVisible: true,
    founderConfirmed: false,
  },
];

export const CATEGORIES = [
  {
    id: "body" as const,
    name: "Body",
    tagline: "Restore",
    description: "Massage and body care.",
    color: "var(--color-bs-deep-plum)",
    icon: "🌿",
  },
  {
    id: "face" as const,
    name: "Face",
    tagline: "Renew",
    description: "Facials and skin care.",
    color: "var(--color-bs-royal-purple)",
    icon: "✨",
  },
  {
    id: "beauty" as const,
    name: "Beauty",
    tagline: "Enhance",
    description: "Makeup and beauty services.",
    color: "var(--color-bs-mauve)",
    icon: "💄",
  },
  {
    id: "wellness" as const,
    name: "Wellness",
    tagline: "Understand",
    description: "Health Scan, Detox Machine, and wellness assessment.",
    color: "var(--color-bs-sage)",
    icon: "🔬",
  },
];

/** Only treatments marked launchVisible for public pages. */
export function getVisibleTreatments() {
  return TREATMENTS.filter((t) => t.launchVisible);
}

export function getVisibleTreatmentsByCategory(category: string) {
  return TREATMENTS.filter(
    (t) => t.category === category && t.launchVisible
  );
}

export function getTreatmentBySlug(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}
