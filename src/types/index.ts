/* ================================================================
   BEULAH SPLENDOR — Core Domain Types
   ================================================================ */

// --- Treatments ---

export type TreatmentCategory = "body" | "face" | "beauty" | "wellness";

export type PriceStatus = "legacy-unconfirmed" | "confirmed";

export interface TreatmentData {
  id: string;
  slug: string;
  name: string;
  category: TreatmentCategory;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  priceLabel: string;
  priceStatus: PriceStatus;
  durationLabel: string;
  durationStatus: PriceStatus;
  preparation?: string;
  aftercare?: string;
  icon: string;
  /** If false, treatment is hidden from public pages until founder confirms. */
  launchVisible: boolean;
  /** If true, this service was explicitly confirmed by the founder. */
  founderConfirmed: boolean;
}

// --- Booking ---

export interface BookingRequest {
  id: string;
  reference: string;
  treatmentId?: string;
  preferredDate: string;
  preferredTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  notes?: string;
  status: "requested" | "confirmed" | "cancelled" | "completed";
  createdAt: string;
}

export interface BookingFormData {
  treatmentId: string;
  preferredDate: string;
  preferredTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  notes?: string;
  turnstileToken?: string;
}

// --- Beulah Talks ---

export interface Talk {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  topic?: string;
  durationMinutes?: number;
  videoUrl?: string;
  audioUrl?: string;
  heroImage?: string;
  status: "draft" | "published";
  publishedAt?: string;
  createdAt: string;
}

// --- Journal ---

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  heroImage?: string;
  status: "draft" | "published";
  publishedAt?: string;
  createdAt: string;
}

// --- Circle Interest ---

export interface CircleInterest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  createdAt: string;
}

// --- Health Scan ---

export interface HealthScanConfig {
  claimsVerified: boolean;
}
