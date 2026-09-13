import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://beulahsplendor.co.za";

  const pages = [
    "",
    "/treatments",
    "/wellness",
    "/wellness/health-scan",
    "/about",
    "/beulah-talks",
    "/journal",
    "/book",
    "/contact",
    "/privacy",
    "/terms",
    "/booking-policy",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
