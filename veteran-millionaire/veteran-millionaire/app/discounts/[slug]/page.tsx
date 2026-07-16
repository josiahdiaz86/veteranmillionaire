import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusPill from "@/components/ui/StatusPill";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DiscountCard from "@/components/content/DiscountCard";
import NewsletterSignupForm from "@/components/content/NewsletterSignupForm";
import AffiliateLinkButton from "@/components/content/AffiliateLinkButton";
import { discounts } from "@/lib/data/discounts";
import type { Discount, DiscountCategory } from "@/lib/types";
import { toKebabSlug, matchKebabSlug } from "@/lib/slugify";

/**
 * Dual-purpose route: /discounts/[slug] renders either a single
 * Discount detail page (when slug matches a Discount.slug) or a
 * category landing page (when slug matches a kebab-case
 * DiscountCategory, e.g. "travel" or "home-hardware"). Exactly one
 * dynamic segment handles both URL shapes from the spec.
 */
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

const CATEGORY_DESCRIPTIONS: Record<DiscountCategory, string> = {
  "Home & Hardware": "Discounts on home improvement supplies, tools, and hardware store purchases.",
  Travel: "Discounted fares, hotel rates, and travel booking offers for veterans and military families.",
  "Retail & Apparel": "Apparel, footwear, and general retail discounts for the military community.",
  "Food & Dining": "Restaurant and dining discounts, including recurring and holiday-specific offers.",
  Automotive: "Vehicle rental, service, and purchase discounts for veterans and active duty.",
  Entertainment: "Discounts on sports merchandise, tickets, and other entertainment purchases.",
  "Health & Wellness": "Discounts on fitness, wellness, and health-related products and memberships.",
  Services: "Wireless plans, insurance, and other everyday service discounts for the military community.",
};

function formatDate(iso?: string): string | null {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function generateStaticParams(): { slug: string }[] {
  const discountSlugs = discounts.map((discount) => ({ slug: discount.slug }));
  const categorySlugs = DISCOUNT_CATEGORIES.map((category) => ({ slug: toKebabSlug(category) }));
  return [...discountSlugs, ...categorySlugs];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const discount = discounts.find((d) => d.slug === params.slug);
  if (discount) {
    return {
      title: discount.seoTitle,
      description: discount.metaDescription,
    };
  }

  const category = matchKebabSlug(DISCOUNT_CATEGORIES, params.slug, (c) => c);
  if (category) {
    return {
      title: `${category} Veteran Discounts`,
      description: `Browse veteran and military discounts in the ${category} category. ${CATEGORY_DESCRIPTIONS[category]}`,
    };
  }

  return { title: "Discount Not Found" };
}

export default function DiscountSlugPage({ params }: { params: { slug: string } }) {
  const discount = discounts.find((d) => d.slug === params.slug);
  if (discount) {
    return <DiscountDetail discount={discount} />;
  }

  const category = matchKebabSlug(DISCOUNT_CATEGORIES, params.slug, (c) => c);
  if (category) {
    return <DiscountCategoryPage category={category} />;
  }

  notFound();
}

function DiscountDetail({ discount }: { discount: Discount }) {
  const related = discounts
    .filter((d) => d.discountCategory === discount.discountCategory && d.slug !== discount.slug)
    .slice(0, 3);

  const lastVerified = formatDate(discount.verificationDate);
  const expires = formatDate(discount.expirationDate);
  const categorySlug = toKebabSlug(discount.discountCategory);

  return (
    <main>
      <section className="bg-offwhite-200 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Discounts", href: "/discounts" },
              { label: discount.discountCategory, href: `/discounts/${categorySlug}` },
              { label: discount.brand, href: `/discounts/${discount.slug}` },
            ]}
            className="mb-6"
          />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow-vm mb-2">{discount.discountCategory}</p>
              <h1 className="text-3xl sm:text-4xl">{discount.brand}</h1>
              <p className="mt-2 text-lg font-semibold text-charcoal">{discount.offerTitle}</p>
            </div>
            <StatusPill status={discount.status} />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-xl">Overview</h2>
              <p className="mt-3 text-base text-charcoal-400">{discount.body}</p>
            </div>

            <div>
              <h2 className="text-xl">Eligibility</h2>
              <p className="mt-3 text-base text-charcoal-400">{discount.eligibility}</p>
            </div>

            <div>
              <h2 className="text-xl">How to Verify / Redeem</h2>
              <p className="mt-3 text-base text-charcoal-400">{discount.verificationMethod}</p>
              {discount.promoCode ? (
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-charcoal">Promo code: </span>
                  <span className="rounded bg-offwhite-300 px-2 py-1 font-mono text-sm text-navy">
                    {discount.promoCode}
                  </span>
                </p>
              ) : null}
              {discount.inStoreInstructions ? (
                <p className="mt-3 text-base text-charcoal-400">
                  <span className="font-semibold text-charcoal">In-store: </span>
                  {discount.inStoreInstructions}
                </p>
              ) : null}
            </div>

            <div>
              <h2 className="text-xl">Restrictions</h2>
              <p className="mt-3 text-base text-charcoal-400">{discount.restrictions}</p>
            </div>

            {discount.onlineLink ? (
              <div className="card-vm bg-offwhite-200">
                <AffiliateLinkButton
                  href={discount.onlineLink}
                  label={`Get the ${discount.brand} Offer`}
                  eventPayload={{ slug: discount.slug, brand: discount.brand }}
                />
                <p className="mt-3 text-xs text-charcoal-300">
                  Some links on this page may be affiliate links. See our{" "}
                  <Link href="/affiliate-disclosure" className="underline">
                    Affiliate Disclosure
                  </Link>
                  .
                </p>
              </div>
            ) : null}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy-100 pt-6 text-xs text-charcoal-300">
              {lastVerified ? <span>Last verified {lastVerified}</span> : <span>Pending editorial verification</span>}
              {expires ? <span>Offer noted through {expires}</span> : null}
              <Link href="/submit-discount" className="font-semibold text-green hover:underline">
                Submit a Correction →
              </Link>
            </div>
          </div>

          <aside>
            <div className="card-vm">
              <p className="text-sm font-semibold text-charcoal">Don't miss the next one.</p>
              <p className="mt-2 text-sm text-charcoal-400">
                Get new and re-verified discounts like this one in your inbox every week.
              </p>
              <div className="mt-4">
                <NewsletterSignupForm source="discount_detail_sidebar" />
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-offwhite-200 py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related" heading={`More ${discount.discountCategory} Discounts`} />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedDiscount) => (
                <DiscountCard key={relatedDiscount.slug} discount={relatedDiscount} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}

function DiscountCategoryPage({ category }: { category: DiscountCategory }) {
  const categoryDiscounts = discounts.filter((d) => d.discountCategory === category);

  return (
    <main>
      <section className="bg-offwhite-200 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Discounts", href: "/discounts" },
              { label: category, href: `/discounts/${toKebabSlug(category)}` },
            ]}
            className="mb-6"
          />
          <SectionHeading eyebrow="Discount Category" heading={`${category} Discounts`} subhead={CATEGORY_DESCRIPTIONS[category]} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {categoryDiscounts.length === 0 ? (
            <p className="text-sm text-charcoal-400">
              No {category.toLowerCase()} discounts are listed yet — check back soon, or{" "}
              <Link href="/submit-discount" className="font-semibold text-green hover:underline">
                submit one
              </Link>
              .
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryDiscounts.map((discount) => (
                <DiscountCard key={discount.slug} discount={discount} />
              ))}
            </div>
          )}

          <div className="mt-10">
            <Link href="/discounts" className="btn-tertiary">
              ← Browse All Discounts
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
