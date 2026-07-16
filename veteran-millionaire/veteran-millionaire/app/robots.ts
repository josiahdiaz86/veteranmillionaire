import type { MetadataRoute } from "next";

const SITE_URL = "https://veteranmillionaire.com";

/**
 * Allow all for now. There's no query-param filtering yet (the discount
 * category filter is a client-side toggle, not a URL param), so there's
 * nothing "thin" to disallow. TODO: once filter-combination URLs exist
 * (e.g. /discounts?category=travel&status=verified), disallow those
 * patterns here to avoid thin/duplicate content getting indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
