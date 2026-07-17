import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BenefitCard from "@/components/content/BenefitCard";
import { benefits } from "@/lib/data/benefits";
import { toKebabSlug } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Veteran Benefits Explained",
  description:
    "Plain-language overviews of VA disability compensation, the GI Bill, healthcare, property tax exemptions, and state veteran programs — always pointing back to the official source.",
};

const SAMPLE_STATES = ["Texas", "California", "Florida", "Virginia"];

export default function BenefitsPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            heading="Know What You've Earned"
            subhead="Plain-language overviews of major veteran benefit programs. These are educational summaries, not official guidance — always confirm your specific eligibility and current details at va.gov or with an accredited Veterans Service Officer."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.slug} benefit={benefit} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="State Programs"
            heading="Browse by State"
            subhead="Federal VA benefits are only part of the picture — many states run their own veteran programs. Start with a few of the states with the largest veteran populations, or check back as we add more."
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {SAMPLE_STATES.map((state) => (
              <Link
                key={state}
                href={`/benefits/${toKebabSlug(state)}`}
                className="card-vm text-center no-underline"
              >
                <span className="text-base font-headline font-bold text-navy">{state}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <p className="max-w-3xl text-xs leading-relaxed text-charcoal-300">
            Veteran Millionaire is an independent educational and media platform. It is not affiliated with the U.S.
            Department of Veterans Affairs, Department of Defense, or any government agency, and nothing on this
            page is legal, tax, financial, or benefits advice. Benefit rules, amounts, and eligibility criteria
            change and vary by individual circumstance — always confirm current details directly with the
            administering agency before making decisions.
          </p>
        </Container>
      </section>
    </main>
  );
}
