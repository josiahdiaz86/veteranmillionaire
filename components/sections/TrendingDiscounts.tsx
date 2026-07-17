import Link from "next/link";
import type { Discount } from "@/lib/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DiscountFilterBar from "@/components/content/DiscountFilterBar";

interface TrendingDiscountsProps {
  discounts: Discount[];
}

export default function TrendingDiscounts({ discounts }: TrendingDiscountsProps) {
  return (
    <section className="bg-offwhite-200 py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Discounts"
            heading="Trending Veteran Discounts"
            subhead="A sample of what's in the full discount library — filter by category to find what's relevant to you."
          />
          <Link href="/discounts" className="btn-tertiary shrink-0">
            See All Discounts →
          </Link>
        </div>

        <DiscountFilterBar discounts={discounts} />
      </Container>
    </section>
  );
}
