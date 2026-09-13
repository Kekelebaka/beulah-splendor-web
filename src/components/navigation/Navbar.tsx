"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ButterflyLogo, ButterflyMark } from "@/components/ui/ButterflyLogo";

const NAV_LINKS = [
  { href: "/treatments", label: "Treatments" },
  { href: "/wellness", label: "Wellness" },
  { href: "/about", label: "About" },
  { href: "/beulah-talks", label: "Beulah Talks" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor: "rgba(247, 241, 233, 0.92)",
        borderBottom: "1px solid rgba(52, 19, 53, 0.06)",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Home">
          <ButterflyLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: "var(--color-bs-charcoal)",
                fontFamily: "var(--font-body)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300"
            style={{
              backgroundColor: "var(--color-bs-deep-plum)",
              color: "var(--color-bs-white)",
              fontFamily: "var(--font-body)",
            }}
          >
            Book Your Time
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          <span
            aria-hidden="true"
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-bs-charcoal)",
              transform: isOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            aria-hidden="true"
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-bs-charcoal)",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            aria-hidden="true"
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-bs-charcoal)",
              transform: isOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t px-5 pb-6 pt-4 lg:hidden"
          style={{
            backgroundColor: "var(--color-bs-bone)",
            borderColor: "rgba(52, 19, 53, 0.06)",
          }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium py-2"
                style={{
                  color: "var(--color-bs-charcoal)",
                  fontFamily: "var(--font-body)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold"
              style={{
                backgroundColor: "var(--color-bs-deep-plum)",
                color: "var(--color-bs-white)",
              }}
              onClick={() => setIsOpen(false)}
            >
              Book Your Time
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
