import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-bs-deep-plum)",
    color: "var(--color-bs-white)",
  },
  secondary: {
    backgroundColor: "var(--color-bs-aubergine)",
    color: "var(--color-bs-white)",
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--color-bs-deep-plum)",
    border: "1.5px solid var(--color-bs-deep-plum)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-bs-charcoal)",
  },
  gold: {
    backgroundColor: "var(--color-bs-warm-gold)",
    color: "var(--color-bs-aubergine)",
  },
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 tracking-wide";

  const classes = `${base} ${sizeStyles[size]} ${className}`;

  const style: React.CSSProperties = {
    ...variantStyles[variant],
    fontFamily: "var(--font-body)",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
