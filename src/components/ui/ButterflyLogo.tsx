/**
 * Beulah Splendor — Butterfly Logo System
 *
 * The butterfly is the master brand symbol.
 * It represents: Evolution, Transformation, Care, Nature, Feminine Strength.
 *
 * Usage:
 *   <ButterflyLogo />           — Full logo (butterfly + wordmark)
 *   <ButterflyMark />           — Butterfly icon only
 *   <ButterflyMark size="sm" /> — Small variant for favicon / tight spaces
 *
 * NEVER use a floral monogram or botanical B mark.
 */

import React from "react";

interface ButterflyProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

/**
 * Minimal, elegant butterfly silhouette.
 * Single-path design for performance and consistency.
 */
export function ButterflyMark({
  className = "",
  size = "md",
  color = "currentColor",
}: ButterflyProps) {
  const sizes = {
    sm: { width: 24, height: 24 },
    md: { width: 36, height: 36 },
    lg: { width: 48, height: 48 },
  };
  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Beulah Splendor butterfly"
      role="img"
    >
      {/* Left wing */}
      <path
        d="M24 24C20 18 12 10 8 14C4 18 8 28 16 32C20 34 24 24 24 24Z"
        fill={color}
        opacity={0.85}
      />
      {/* Right wing (mirrored) */}
      <path
        d="M24 24C28 18 36 10 40 14C44 18 40 28 32 32C28 34 24 24 24 24Z"
        fill={color}
        opacity={0.85}
      />
      {/* Lower left wing */}
      <path
        d="M24 24C21 28 14 36 12 34C10 32 14 26 20 24"
        fill={color}
        opacity={0.6}
      />
      {/* Lower right wing */}
      <path
        d="M24 24C27 28 34 36 36 34C38 32 34 26 28 24"
        fill={color}
        opacity={0.6}
      />
      {/* Body */}
      <line
        x1="24"
        y1="12"
        x2="24"
        y2="36"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Antennae */}
      <path
        d="M24 14C22 10 20 8 18 7"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 14C26 10 28 8 30 7"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Full logo: butterfly mark + "BEULAH SPLENDOR" wordmark
 */
export function ButterflyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ButterflyMark size="md" color="var(--color-bs-deep-plum)" />
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-lg tracking-wider"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-aubergine)",
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
  );
}
