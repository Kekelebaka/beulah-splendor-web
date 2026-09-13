import React from "react";

interface SectionProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "aubergine" | "botanical" | "bone";
  className?: string;
  id?: string;
}

const bgMap: Record<string, string> = {
  light: "var(--color-bs-white)",
  dark: "var(--color-bs-aubergine)",
  aubergine: "var(--color-bs-aubergine)",
  botanical: "var(--color-bs-sage)",
  bone: "var(--color-bs-bone)",
};

export function Section({
  children,
  variant = "light",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      style={{ backgroundColor: bgMap[variant] }}
    >
      <div className="mx-auto max-w-7xl px-5">{children}</div>
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  const maxW = {
    narrow: "max-w-3xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  };
  return (
    <div className={`mx-auto ${maxW[size]} px-5 ${className}`}>{children}</div>
  );
}

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function Heading({
  children,
  level = 2,
  eyebrow,
  className = "",
  align = "left",
  light = false,
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const sizes: Record<number, string> = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl lg:text-5xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
  };

  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em]"
          style={{
            color: light
              ? "var(--color-bs-warm-gold)"
              : "var(--color-bs-mauve)",
            fontFamily: "var(--font-body)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={`${sizes[level]} ${className}`}
        style={{
          fontFamily: "var(--font-display)",
          color: light
            ? "var(--color-bs-white)"
            : "var(--color-bs-aubergine)",
          lineHeight: 1.15,
        }}
      >
        {children}
      </Tag>
    </div>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 transition-all duration-300 ${
        hover ? "hover:-translate-y-1" : ""
      } ${className}`}
      style={{
        backgroundColor: "var(--color-bs-white)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {children}
    </div>
  );
}
