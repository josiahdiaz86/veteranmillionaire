/**
 * Shared slug helpers for dual-purpose dynamic route segments.
 *
 * Some parent routes (e.g. /discounts/[slug], /benefits/[slug]) accept
 * either a real content slug (Discount.slug, BenefitResource.slug) OR a
 * kebab-case version of a category/state label (e.g. "travel",
 * "home-hardware", "texas"). These helpers keep the kebab-casing and
 * reverse-matching logic in one place so both routes stay in sync.
 */

/**
 * Convert an arbitrary label (a DiscountCategory name, a US state name,
 * etc.) into a kebab-case slug. "&" is dropped rather than converted to
 * "and" so "Home & Hardware" becomes "home-hardware", not
 * "home-and-hardware".
 */
export function toKebabSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Find the item in `items` whose kebab-slugified label matches `slug`.
 * Returns undefined if nothing matches.
 */
export function matchKebabSlug<T>(
  items: readonly T[],
  slug: string,
  getLabel: (item: T) => string
): T | undefined {
  return items.find((item) => toKebabSlug(getLabel(item)) === slug);
}
