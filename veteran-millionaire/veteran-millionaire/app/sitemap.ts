import type { MetadataRoute } from "next";
import { discounts } from "@/lib/data/discounts";
import { benefits } from "@/lib/data/benefits";
import { articles } from "@/lib/data/articles";
import { realEstateTopics } from "@/lib/data/realEstateTopics";
import { sideHustles } from "@/lib/data/sideHustles";
import { US_STATES } from "@/lib/data/states";
import type { DiscountCategory } from "@/lib/types";
import { toKebabSlug } from "@/lib/slugify";

const SITE_URL = "https://veteranmillionaire.com";

const DISCOUNT_CATEGORIES: DiscountCategory[] = [
  "Home & Hardware",
  "Travel",
  "Retail & Apparel",
  "Food & Dining",
  "Automotive",
  "Entertainment",
  "Health & Wellness",
  "Services",
];

const STATIC_ROUTES = [
  "",
  "/discounts",
  "/benefits",
  "/real-estate",
  "/real-estate/calculators",
  "/make-money",
  "/business",
  "/jobs",
  "/news",
  "/community",
  "/about",
  "/join",
  "/talk-to-joe",
  "/privacy",
  "/terms",
  "/affiliate-disclosure",
  "/mortgage-disclosures",
  "/accessibility",
  "/editorial-standards",
  "/advertise",
  "/partner",
  "/submit-discount",
  "/submit-business",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
  }));

  const discountEntries: MetadataRoute.Sitemap = discounts.map((discount) => ({
    url: `${SITE_URL}/discounts/${discount.slug}`,
    lastModified: new Date(discount.updatedDate),
  }));

  const discountCategoryEntries: MetadataRoute.Sitemap = DISCOUNT_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/discounts/${toKebabSlug(category)}`,
    lastModified: now,
  }));

  const benefitEntries: MetadataRoute.Sitemap = benefits.map((benefit) => ({
    url: `${SITE_URL}/benefits/${benefit.slug}`,
    lastModified: new Date(benefit.updatedDate),
  }));

  const stateEntries: MetadataRoute.Sitemap = US_STATES.map((state) => ({
    url: `${SITE_URL}/benefits/${toKebabSlug(state)}`,
    lastModified: now,
  }));

  const realEstateEntries: MetadataRoute.Sitemap = realEstateTopics.map((topic) => ({
    url: `${SITE_URL}/real-estate/${topic.slug}`,
    lastModified: new Date(topic.updatedDate),
  }));

  const sideHustleEntries: MetadataRoute.Sitemap = sideHustles.map((hustle) => ({
    url: `${SITE_URL}/make-money/${hustle.slug}`,
    lastModified: new Date(hustle.updatedDate),
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: new Date(article.updatedDate),
  }));

  return [
    ...staticEntries,
    ...discountEntries,
    ...discountCategoryEntries,
    ...benefitEntries,
    ...stateEntries,
    ...realEstateEntries,
    ...sideHustleEntries,
    ...articleEntries,
  ];
}
