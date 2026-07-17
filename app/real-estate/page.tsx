import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RealEstateTopicCard from "@/components/content/RealEstateTopicCard";
import JsonLd from "@/components/seo/JsonLd";
import { realEstateTopics } from "@/lib/data/realEstateTopics";

export const metadata: Metadata = {
  title: "VA Loans & Real Estate Education",
  description:
    "Educational resources on VA home loans, house hacking, first-time buying, and building wealth through real estate — no rate promises, always pointing you to a licensed loan officer.",
};

interface FeatureTopic {
  label: string;
  href?: string;
}

const FEATURE_TOPICS: FeatureTopic[] = [
  { label: "Buying a first home", href: "/real-estate/first-time-buyers-va-loan-differences" },
  { label: "VA loan house hacking", href: "/real-estate/house-hacking-multi-unit-va-loan" },
  { label: "Multifamily properties" },
  { label: "VA loan assumptions" },
  { label: "Moving and PCS strategies" },
  { label: "Rental property planning" },
  { label: "Refinancing" },
  { label: "Investing after using VA eligibility" },
  { label: "Understanding occupancy rules", href: "/real-estate/house-hacking-multi-unit-va-loan" },
];

const FAQS = [
  {
    question: "Does a VA loan always mean no down payment?",
    answer:
      "Many eligible borrowers can buy with no down payment using a VA loan, but the exact terms depend on your entitlement, the lender, and the property. This is not a guarantee for every borrower or every purchase price — confirm your specific situation with a licensed loan officer.",
  },
  {
    question: "Can I use a VA loan to buy a rental property?",
    answer:
      "VA loans require you to occupy the property as your primary residence, generally within a set timeframe after closing. House hacking — buying a property with up to four units and renting out the others while living in one — is allowed within that occupancy framework, but a VA loan is not a path to a pure investment property from day one.",
  },
  {
    question: "How many times can I use my VA loan benefit?",
    answer:
      "VA loan entitlement can often be reused and, in many cases, restored after a prior loan is paid off or the entitlement is otherwise freed up. Exactly how much entitlement you have available depends on your service history and prior use — ask your lender to review your Certificate of Eligibility.",
  },
  {
    question: "Will sellers refuse a VA loan offer?",
    answer:
      "Some sellers hold outdated assumptions about VA loans, but many sellers accept them without issue, especially with an experienced agent presenting the offer. There is no guarantee any specific seller will accept any specific offer, regardless of loan type.",
  },
  {
    question: "Do I need a minimum credit score for a VA loan?",
    answer:
      "The VA itself does not set a fixed minimum credit score, but individual lenders set their own underwriting requirements, and your credit profile still affects your rate and terms. Ask a lender directly what they require before assuming you do or don't qualify.",
  },
];

export default function RealEstatePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <section className="bg-navy py-16 text-offwhite-100 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Real Estate"
            heading="Your VA Benefit Can Be More Than a Mortgage."
            subhead="Educational resources on VA loans and homeownership — no guarantees, no rate promises, always pointing you toward a licensed loan officer for your specific situation."
            className="[&_h2]:text-offwhite-100 [&_p]:text-offwhite-300"
          />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/community" className="btn-primary bg-brass-500 hover:bg-brass-600">
              Take a Free VA Homebuyer Class
            </Link>
            <Link
              href="/talk-to-joe"
              className="btn-secondary border-offwhite-100 text-offwhite-100 hover:bg-offwhite-100 hover:text-navy"
            >
              Talk to Joe About a VA Loan
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Topics We Cover" heading="Where Veterans Build Wealth With Real Estate" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_TOPICS.map((topic) =>
              topic.href ? (
                <Link
                  key={topic.label}
                  href={topic.href}
                  className="card-vm flex items-center justify-between no-underline"
                >
                  <span className="text-sm font-semibold text-navy">{topic.label}</span>
                  <span aria-hidden="true" className="text-green">→</span>
                </Link>
              ) : (
                <div
                  key={topic.label}
                  className="rounded-vm border border-dashed border-navy-200 bg-offwhite-100 p-6 text-sm font-semibold text-charcoal-400"
                >
                  {topic.label}
                  <span className="mt-1 block text-xs font-normal text-charcoal-300">Guide coming soon</span>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Guides" heading="Start With These" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {realEstateTopics.map((topic) => (
              <RealEstateTopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Common Questions" heading="VA Loan & House Hacking FAQs" />
          <div className="mt-8 space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border-b border-navy-100 pb-6">
                <p className="text-base font-semibold text-navy">{faq.question}</p>
                <p className="mt-2 text-sm text-charcoal-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <p className="max-w-3xl text-xs leading-relaxed text-charcoal-300">
            This page is educational and general in nature, not legal, tax, financial, or mortgage advice, and does
            not represent a commitment to lend. Veteran Millionaire is independent of the U.S. Department of
            Veterans Affairs, Department of Defense, and any government agency. Rates, terms, and approval depend on
            your individual lender and circumstances — talk to a licensed loan officer about your specific
            situation.
          </p>
        </Container>
      </section>
    </main>
  );
}
