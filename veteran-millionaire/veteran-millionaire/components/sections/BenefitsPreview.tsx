import Link from "next/link";
import type { BenefitResource } from "@/lib/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BenefitCard from "@/components/content/BenefitCard";

interface BenefitsPreviewProps {
  benefits: BenefitResource[];
}

export default function BenefitsPreview({ benefits }: BenefitsPreviewProps) {
  return (
    <section className="bg-offwhite-200 py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Benefits"
            heading="Know What You've Earned"
            subhead="Plain-language overviews of major veteran benefit programs — always pointing back to the official source."
          />
          <Link href="/benefits" className="btn-tertiary shrink-0">
            See All Benefits →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.slug} benefit={benefit} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs text-charcoal-300">
          These summaries are educational and general in nature. They are not official guidance and do not replace
          information from the U.S. Department of Veterans Affairs. Always confirm your specific eligibility and
          benefit details at va.gov or with an accredited Veterans Service Officer.
        </p>
      </Container>
    </section>
  );
}
