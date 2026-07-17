import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import VaLoanCalculator from "@/components/content/VaLoanCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VA Loan Payment Calculator",
  description:
    "Estimate a VA loan's monthly principal and interest payment based on home price, down payment, interest rate, and loan term. Estimate only — not a rate quote or loan offer.",
};

export default function RealEstateCalculatorsPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Real Estate", href: "/real-estate" },
              { label: "Calculators", href: "/real-estate/calculators" },
            ]}
            className="mb-6"
          />
          <SectionHeading
            eyebrow="Calculator"
            heading="VA Loan Monthly Payment Estimator"
            subhead="A simple principal & interest estimate based on standard amortization math. It does not include taxes, insurance, HOA dues, or the VA funding fee."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <VaLoanCalculator />

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-charcoal-300">
            This calculator is an educational estimate only, not a loan offer, rate quote, or commitment to lend.
            Actual payments depend on your lender, credit profile, property, and the VA funding fee, among other
            factors. Talk to a licensed loan officer for numbers specific to your situation —{" "}
            <Link href="/talk-to-joe" className="font-semibold text-green hover:underline">
              Talk to Joe
            </Link>{" "}
            is a good place to start.
          </p>
        </Container>
      </section>
    </main>
  );
}
