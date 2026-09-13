"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Section, Heading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";
import { CATEGORIES, getVisibleTreatmentsByCategory, TREATMENTS } from "@/lib/treatments";

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00",
];

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function BookWizard() {
  return (
    <Suspense fallback={
      <Section variant="bone" className="min-h-screen">
        <div className="mx-auto max-w-2xl text-center">
          <ButterflyMark size="sm" color="var(--color-bs-deep-plum)" className="mx-auto mb-3" />
          <Heading level={1}>Book Your Time</Heading>
          <p className="mt-4" style={{ color: "var(--color-bs-mauve)" }}>Loading…</p>
        </div>
      </Section>
    }>
      <BookingWizard />
    </Suspense>
  );
}

function BookingWizard() {
  const searchParams = useSearchParams();
  const preselectedTreatment = searchParams.get("treatment");

  const [step, setStep] = useState<Step>(1);
  const [category, setCategory] = useState("");
  const [treatmentSlug, setTreatmentSlug] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [reference, setReference] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Pre-select treatment from URL
  useEffect(() => {
    if (preselectedTreatment) {
      const t = TREATMENTS.find((tr) => tr.slug === preselectedTreatment);
      if (t) {
        setCategory(t.category);
        setTreatmentSlug(t.slug);
        setStep(3); // Skip to date selection
      }
    }
  }, [preselectedTreatment]);

  const selectedTreatment = TREATMENTS.find((t) => t.slug === treatmentSlug);
  const categoryTreatments = category
    ? getVisibleTreatmentsByCategory(category)
    : [];

  function validateStep5() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your name";
    if (!phone.trim()) errs.phone = "Please enter your phone number";
    if (phone.trim() && phone.replace(/\D/g, "").length < 9)
      errs.phone = "Please enter a valid phone number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          treatmentId: selectedTreatment?.id || treatmentSlug,
          preferredDate: date,
          preferredTime: time,
          customerName: name,
          customerPhone: phone,
          customerEmail: email || undefined,
          notes: notes || undefined,
        }),
      });

      const data = await res.json();

      if (data.ok && data.reference) {
        setReference(data.reference);
        setStep(8);
      } else {
        setSubmitError(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      // API unreachable — show error, do NOT fake success
      setSubmitError(
        "Unable to connect to booking service. Please try again or contact Beula directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function getWhatsAppUrl() {
    const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const text = encodeURIComponent(
      `Hello Beulah Splendor.\n\nI'd like to request:\n\nTreatment: ${selectedTreatment?.name || treatmentSlug}\nPreferred date: ${date}\nPreferred time: ${time}\nName: ${name}\nBooking reference: ${reference}\n\nPlease confirm availability.`
    );
    return `https://wa.me/${whatsappPhone}?text=${text}`;
  }

  const stepLabels = [
    "Category",
    "Treatment",
    "Date",
    "Time",
    "Details",
    "Policy",
    "Review",
    "Sent",
  ];

  return (
    <Section variant="bone" className="min-h-screen">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <ButterflyMark
            size="sm"
            color="var(--color-bs-deep-plum)"
            className="mx-auto mb-3"
          />
          <Heading level={1}>Book Your Time</Heading>
          {step <= 7 && (
            <div className="mt-4">
              <div className="flex justify-center gap-1 mb-2">
                {stepLabels.slice(0, 7).map((label, i) => (
                  <div
                    key={label}
                    className="flex items-center"
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-colors"
                      style={{
                        backgroundColor:
                          i + 1 <= step
                            ? "var(--color-bs-deep-plum)"
                            : "var(--color-bs-soft-lilac)",
                      }}
                    />
                    {i < 6 && (
                      <div
                        className="w-4 h-px"
                        style={{
                          backgroundColor:
                            i + 1 < step
                              ? "var(--color-bs-deep-plum)"
                              : "var(--color-bs-soft-lilac)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <p
                className="text-xs"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                Step {step} of 7 — {stepLabels[step - 1]}
              </p>
            </div>
          )}
        </div>

        {/* Step 1: Category */}
        {step === 1 && (
          <div className="space-y-4">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              What kind of care do you need?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id);
                    setStep(2);
                  }}
                  className="rounded-xl p-6 text-left transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--color-bs-white)",
                    border:
                      category === cat.id
                        ? "2px solid var(--color-bs-deep-plum)"
                        : "1px solid var(--color-bs-soft-lilac)",
                  }}
                >
                  <span className="text-2xl mb-2 block">{cat.icon}</span>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.12em] mb-1"
                    style={{ color: "var(--color-bs-warm-gold)" }}
                  >
                    {cat.tagline}
                  </p>
                  <p
                    className="text-lg font-medium"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-bs-aubergine)",
                    }}
                  >
                    {cat.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Treatment */}
        {step === 2 && (
          <div className="space-y-4">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Choose your treatment
            </h2>
            {categoryTreatments.length > 0 ? (
              categoryTreatments.map((t) => (
                <button
                  key={t.slug}
                  onClick={() => {
                    setTreatmentSlug(t.slug);
                    setStep(3);
                  }}
                  className="w-full rounded-xl p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--color-bs-white)",
                    border:
                      treatmentSlug === t.slug
                        ? "2px solid var(--color-bs-deep-plum)"
                        : "1px solid var(--color-bs-soft-lilac)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{t.icon}</span>
                    <div>
                      <p
                        className="font-medium"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--color-bs-aubergine)",
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--color-bs-charcoal)" }}
                      >
                        {t.shortDescription}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "var(--color-bs-mauve)" }}
                      >
                        {t.durationLabel} · {t.priceLabel}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <p
                className="text-sm"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                [Content gap: Treatment list pending founder confirmation]
              </p>
            )}
            <button
              onClick={() => setStep(1)}
              className="text-sm mt-4"
              style={{ color: "var(--color-bs-mauve)" }}
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Date */}
        {step === 3 && (
          <div className="space-y-6">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              When would you like to come in?
            </h2>
            {selectedTreatment && (
              <div
                className="rounded-lg p-3 flex items-center gap-3"
                style={{
                  backgroundColor: "var(--color-bs-white)",
                  border: "1px solid var(--color-bs-soft-lilac)",
                }}
              >
                <span>{selectedTreatment.icon}</span>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-bs-aubergine)" }}
                  >
                    {selectedTreatment.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-bs-mauve)" }}
                  >
                    {selectedTreatment.durationLabel}
                  </p>
                </div>
              </div>
            )}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-bs-charcoal)" }}
              >
                Preferred date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full rounded-lg px-4 py-3 text-base"
                style={{
                  backgroundColor: "var(--color-bs-white)",
                  border: "1px solid var(--color-bs-soft-lilac)",
                  color: "var(--color-bs-charcoal)",
                }}
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="text-sm"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                ← Back
              </button>
              <Button
                variant="primary"
                size="md"
                disabled={!date}
                onClick={() => setStep(4)}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Time */}
        {step === 4 && (
          <div className="space-y-6">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              What time works for you?
            </h2>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-bs-mauve)" }}
            >
              Limited appointments daily — four per day, so care is never
              rushed.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor:
                      time === t
                        ? "var(--color-bs-deep-plum)"
                        : "var(--color-bs-white)",
                    color:
                      time === t
                        ? "var(--color-bs-white)"
                        : "var(--color-bs-charcoal)",
                    border:
                      time === t
                        ? "1px solid var(--color-bs-deep-plum)"
                        : "1px solid var(--color-bs-soft-lilac)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="text-sm"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                ← Back
              </button>
              <Button
                variant="primary"
                size="md"
                disabled={!time}
                onClick={() => setStep(5)}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Details */}
        {step === 5 && (
          <div className="space-y-6">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Your details
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-bs-charcoal)" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg px-4 py-3"
                  style={{
                    backgroundColor: "var(--color-bs-white)",
                    border: errors.name
                      ? "1px solid #e53e3e"
                      : "1px solid var(--color-bs-soft-lilac)",
                    color: "var(--color-bs-charcoal)",
                  }}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-bs-charcoal)" }}
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg px-4 py-3"
                  style={{
                    backgroundColor: "var(--color-bs-white)",
                    border: errors.phone
                      ? "1px solid #e53e3e"
                      : "1px solid var(--color-bs-soft-lilac)",
                    color: "var(--color-bs-charcoal)",
                  }}
                  placeholder="e.g. 082 000 0000"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-bs-charcoal)" }}
                >
                  Email (optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg px-4 py-3"
                  style={{
                    backgroundColor: "var(--color-bs-white)",
                    border: errors.email
                      ? "1px solid #e53e3e"
                      : "1px solid var(--color-bs-soft-lilac)",
                    color: "var(--color-bs-charcoal)",
                  }}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-bs-charcoal)" }}
                >
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg px-4 py-3 resize-none"
                  style={{
                    backgroundColor: "var(--color-bs-white)",
                    border: "1px solid var(--color-bs-soft-lilac)",
                    color: "var(--color-bs-charcoal)",
                  }}
                  placeholder="Anything we should know?"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(4)}
                className="text-sm"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                ← Back
              </button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (validateStep5()) setStep(6);
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Policy */}
        {step === 6 && (
          <div className="space-y-6">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Booking Policy
            </h2>
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: "var(--color-bs-white)",
                border: "1px solid var(--color-bs-soft-lilac)",
              }}
            >
              <p
                className="mb-4"
                style={{
                  color: "var(--color-bs-charcoal)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.7,
                }}
              >
                This is a <strong>booking request</strong>. Your
                appointment is not confirmed until Beula confirms
                availability via WhatsApp.
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                [Content gap: Full cancellation and deposit policy
                pending founder confirmation]
              </p>
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
                className="mt-1 h-5 w-5 rounded"
                style={{ accentColor: "var(--color-bs-deep-plum)" }}
              />
              <span
                className="text-sm"
                style={{ color: "var(--color-bs-charcoal)" }}
              >
                I understand this is a booking request and not a confirmed
                appointment.
              </span>
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(5)}
                className="text-sm"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                ← Back
              </button>
              <Button
                variant="primary"
                size="md"
                disabled={!policyAccepted}
                onClick={() => setStep(7)}
              >
                Review Booking
              </Button>
            </div>
          </div>
        )}

        {/* Step 7: Review */}
        {step === 7 && (
          <div className="space-y-6">
            <h2
              className="text-xl mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Review your booking
            </h2>
            <div
              className="rounded-xl p-6 space-y-4"
              style={{
                backgroundColor: "var(--color-bs-white)",
                border: "1px solid var(--color-bs-soft-lilac)",
              }}
            >
              <ReviewRow label="Treatment" value={selectedTreatment?.name || treatmentSlug} />
              <ReviewRow label="Date" value={date} />
              <ReviewRow label="Time" value={time} />
              <ReviewRow label="Name" value={name} />
              <ReviewRow label="Phone" value={phone} />
              {email && <ReviewRow label="Email" value={email} />}
              {notes && <ReviewRow label="Notes" value={notes} />}
            </div>

            {submitError && (
              <p className="text-sm text-red-500">{submitError}</p>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setStep(6)}
                className="text-sm"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                ← Back
              </button>
              <Button
                variant="primary"
                size="md"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Sending…" : "Submit Booking Request"}
              </Button>
            </div>
          </div>
        )}

        {/* Step 8: Confirmation */}
        {step === 8 && (
          <div className="text-center space-y-6">
            <ButterflyMark
              size="lg"
              color="var(--color-bs-deep-plum)"
              className="mx-auto"
            />
            <h2
              className="text-2xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bs-aubergine)",
              }}
            >
              Request Received
            </h2>

            <div
              className="rounded-xl p-6 mx-auto max-w-md"
              style={{
                backgroundColor: "var(--color-bs-white)",
                border: "1px solid var(--color-bs-soft-lilac)",
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.15em] mb-2"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                Your reference
              </p>
              <p
                className="text-2xl font-bold tracking-wider"
                style={{ color: "var(--color-bs-aubergine)" }}
              >
                {reference}
              </p>
              <div className="mt-4 space-y-2 text-sm text-left">
                <ReviewRow label="Treatment" value={selectedTreatment?.name || treatmentSlug} />
                <ReviewRow label="Date" value={date} />
                <ReviewRow label="Time" value={time} />
              </div>
            </div>

            <p
              className="text-sm max-w-md mx-auto"
              style={{
                color: "var(--color-bs-charcoal)",
                lineHeight: 1.7,
              }}
            >
              Beula will confirm availability via WhatsApp. Your
              reference number is{" "}
              <strong style={{ color: "var(--color-bs-aubergine)" }}>
                {reference}
              </strong>
              .
            </p>

            {getWhatsAppUrl() ? (
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send Booking on WhatsApp
            </a>
            ) : (
            <p
              className="text-sm rounded-full px-8 py-4 inline-block"
              style={{
                backgroundColor: "var(--color-bs-soft-lilac)",
                color: "var(--color-bs-aubergine)",
                fontFamily: "var(--font-body)",
              }}
            >
              Save your reference — Beula will confirm via WhatsApp.
            </p>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <span
        className="text-xs font-medium uppercase tracking-wider shrink-0"
        style={{ color: "var(--color-bs-mauve)" }}
      >
        {label}
      </span>
      <span
        className="text-sm text-right"
        style={{ color: "var(--color-bs-charcoal)" }}
      >
        {value}
      </span>
    </div>
  );
}
