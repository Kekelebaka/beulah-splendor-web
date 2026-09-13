import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Beulah Splendor — Private Care for Body, Beauty & Wellbeing",
    template: "%s | Beulah Splendor",
  },
  description:
    "Private, founder-led wellness and beauty practice in Pretoria. Facials, massage, makeup, Health Scan and natural care. Come back to yourself.",
  keywords: [
    "wellness Pretoria",
    "beauty practice",
    "facials Pretoria",
    "massage Pretoria",
    "health scan",
    "private beauty care",
    "founder-led wellness",
    "Beulah Splendor",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Beulah Splendor",
    title: "Beulah Splendor — Private Care for Body, Beauty & Wellbeing",
    description:
      "Private, founder-led wellness and beauty practice in Pretoria.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Beulah Splendor — Wellness & Beauty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://beulahsplendor.co.za"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only sr-only-focusable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 9999,
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--color-bs-aubergine)",
            color: "var(--color-bs-white)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "0.875rem",
          }}
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
