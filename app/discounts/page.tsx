import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DiscountFilterBar from "@/components/content/DiscountFilterBar";
import NewsletterSignupForm from "@/components/content/NewsletterSignupForm";
import { discounts } from "@/lib/data/discounts";

export const metadata: Metadata = {
  title: "Veteran & Military Discounts",
  description:
    "Search and filter veteran and military discounts across retail, travel, automotive, home improvement, and more. Editorial-checked, with a clear verification status on every listing.",
};

export default function DiscountsPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Discounts"
            heading="Veteran & Military Discounts, Checked by Editorial"
            subhead="Every listing here starts as a candidate, not a guarantee. Filter by category, then check the verification status and last-checked date before you shop or book."
          />
          <div className="mt-6">
            <Link href="/submit-discount" className="btn-tertiary">
              Know a discount we're missing? Submit a Discount →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <DiscountFilterBar discounts={discounts} />
        </Container>
      </section>

      <section className="bg-navy py-16 text-offwhite-100 sm:py-20">
        <Container className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl text-offwhite-100 sm:text-4xl">Get the Free Weekly Brief</h2>
          <p className="mt-4 text-base text-offwhite-300">
            New and re-verified discounts, benefit updates, and a wealth move — every week, straight to your inbox.
          </p>
          <div className="mt-8">
            <NewsletterSignupForm source="discounts_page" className="mx-auto max-w-md" />
          </div>
        </Container>
      </section>
    </main>
  );
}
