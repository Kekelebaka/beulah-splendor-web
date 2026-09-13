import React from "react";
import Link from "next/link";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";

const FOOTER_LINKS = {
  care: [
    { href: "/treatments", label: "Treatments" },
    { href: "/treatments?category=body", label: "Body" },
    { href: "/treatments?category=face", label: "Face" },
    { href: "/treatments?category=beauty", label: "Beauty" },
    { href: "/wellness", label: "Wellness" },
    { href: "/wellness/health-scan", label: "Health Scan" },
  ],
  beulah: [
    { href: "/about", label: "About Beula" },
    { href: "/beulah-talks", label: "Beulah Talks" },
    { href: "/journal", label: "Journal" },
  ],
  support: [
    { href: "/book", label: "Book Your Time" },
    { href: "/contact", label: "Contact" },
    { href: "/booking-policy", label: "Booking Policy" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "var(--color-bs-aubergine)",
        color: "var(--color-bs-soft-lilac)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <ButterflyMark
                size="md"
                color="var(--color-bs-soft-lilac)"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-display text-lg tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-bs-white)",
                    fontWeight: 600,
                  }}
                >
                  BEULAH
                </span>
                <span
                  className="text-[0.6rem] tracking-[0.25em] uppercase"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-bs-mauve)",
                    fontWeight: 500,
                  }}
                >
                  SPLENDOR
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mt-4"
              style={{ color: "var(--color-bs-mauve)" }}
            >
              Private care for body, beauty and wellbeing in Pretoria.
            </p>
            <p
              className="mt-4 text-xs italic"
              style={{
                fontFamily: "var(--font-handwritten)",
                color: "var(--color-bs-warm-gold)",
                fontSize: "0.9rem",
              }}
            >
              Extracting Beauty from Nature.
            </p>
          </div>

          {/* Care Links */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-bs-soft-lilac)" }}
            >
              Care
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.care.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--color-bs-mauve)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Beulah Links */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-bs-soft-lilac)" }}
            >
              Beulah
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.beulah.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--color-bs-mauve)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-bs-soft-lilac)" }}
            >
              Support
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--color-bs-mauve)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: "rgba(168, 119, 157, 0.2)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-bs-mauve)" }}>
            © {new Date().getFullYear()} Beulah Splendor. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-bs-mauve)" }}
          >
            Pretoria, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
