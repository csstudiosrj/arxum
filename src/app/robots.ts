import type { MetadataRoute } from "next";

// Vale para o domínio inteiro, inclusive os produtos em /normato, /edu etc.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      "https://www.arxum.com.br/sitemap.xml",
      "https://www.arxum.com.br/normato/sitemap.xml",
    ],
  };
}
