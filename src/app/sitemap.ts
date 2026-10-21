import type { MetadataRoute } from "next";
import { PRODUCTS, SITE_URL } from "./products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...PRODUCTS.filter((p) => p.sitemap).map((p) => ({ url: `${SITE_URL}${p.href}`, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
