import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { conditions } from "@/content/conditions";
import { offerings } from "@/content/services";
import { site } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/about",
    "/approach",
    "/services",
    "/conditions",
    "/insights",
    "/insights/education",
    "/insights/recipes",
    "/insights/women",
    "/start",
    "/billing",
    "/telehealth",
    "/contact",
    "/privacy",
    "/privacy/npp",
    "/privacy/health-data",
    "/terms",
    "/nondiscrimination",
    ...offerings.map((item) => `/services/${item.slug}`),
    ...conditions.map((item) => `/conditions/${item.slug}`),
    ...articles.map((article) => `/insights/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
