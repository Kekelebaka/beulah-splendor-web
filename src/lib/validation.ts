import { z } from "zod";

/**
 * Beulah Splendor — Server-side validation schemas.
 * All mutation endpoints use zod for input sanitization.
 */

export const bookingSchema = z.object({
  treatmentId: z.string().min(1).max(100),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  preferredTime: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "Invalid time format"),
  customerName: z.string().min(1, "Name is required").max(200),
  customerPhone: z
    .string()
    .min(9, "Phone number must be at least 9 digits")
    .max(20),
  customerEmail: z.string().email().optional().or(z.literal("")),
  notes: z.string().max(1000).optional().or(z.literal("")),
  turnstileToken: z.string().optional(),
});

export const circleInterestSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  phone: z.string().min(9).max(20),
  email: z.string().email().optional().or(z.literal("")),
  turnstileToken: z.string().optional(),
});

export type ValidatedBooking = z.infer<typeof bookingSchema>;
export type ValidatedCircleInterest = z.infer<typeof circleInterestSchema>;
