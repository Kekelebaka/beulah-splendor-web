import React from "react";
import Link from "next/link";
import { Section, Heading, Card } from "@/components/ui/Primitives";

/**
 * Section 03 — Customer Needs
 *
 * WHAT DO YOU NEED TODAY?
 * Body · Face · Beauty · Wellness
 */
export function CustomerNeeds() {
  const needs = [
    {
      icon: "✦",
      title: "Body",
      tagline: "Restore",
      description: "Massage and body care",
      href: "/treatments?category=body",
    },
    {
      icon: "✦",
      title: "Face",
      tagline: "Renew",
      description: "Facials and skin care",
      href: "/treatments?category=face",
    },
    {
      icon: "✦",
      title: "Beauty",
      tagline: "Enhance",
      description: "Professional makeup",
      href: "/treatments?category=beauty",
    },
    {
      icon: "✦",
      title: "Wellness",
      tagline: "Understand",
      description: "Health Scan and approved wellness services",
      href: "/wellness",
    },
  ];

  return (
    <Section variant="bone">
      <Heading level={2} align="center" eyebrow="Your Care">
        What Do You Need Today?
      </Heading>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {needs.map((need) => (
          <Link key={need.title} href={need.href} className="group block">
            <Card className="h-full text-center">
              <span
                className="mb-3 block text-lg"
                style={{ color: "var(--color-bs-warm-gold)" }}
              >
                {need.icon}
              </span>
              <h3
                className="mb-1 text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bs-aubergine)",
                }}
              >
                {need.title}
              </h3>
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-[0.12em]"
                style={{ color: "var(--color-bs-mauve)" }}
              >
                {need.tagline}
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-bs-charcoal)", lineHeight: 1.5 }}
              >
                {need.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
