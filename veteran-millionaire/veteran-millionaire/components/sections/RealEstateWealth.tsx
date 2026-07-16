import Link from "next/link";
import type { MortgageResourceTopic } from "@/lib/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface RealEstateWealthProps {
  topics: MortgageResourceTopic[];
}

const FEATURE_TOPICS = [
  "How the VA home loan benefit actually works",
  "What a Certificate of Eligibility (COE) is and how to get one",
  "First-time buyer basics specific to VA loans",
  "House hacking with a multi-unit VA-eligible property",
  "Common VA loan myths, corrected",
  "How VA appraisals and Minimum Property Requirements work",
  "Refinancing options for veterans (educational overview)",
  "Working with a VA-experienced real estate agent",
  "Questions to ask a lender before you start house-hunting",
];

/**
 * Homepage real estate section. Renders the 4 detailed topic entries as
 * cards-lite links, plus the full 9-item feature list from spec as a
 * clean bulleted list (not every topic needs its own dedicated card yet).
 */
export default function RealEstateWealth({ topics }: RealEstateWealthProps) {
  return (
    <section className="bg-navy py-16 text-offwhite-100 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Real Estate"
          heading="Your VA Benefit Can Be More Than a Mortgage."
          subhead="Educational resources on VA loans and homeownership — no guarantees, no rate promises, always pointing you toward a licensed loan officer for your specific situation."
          className="[&_h2]:text-offwhite-100 [&_p]:text-offwhite-300"
        />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {FEATURE_TOPICS.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-sm text-offwhite-200">
                <span aria-hidden="true" className="mt-0.5 text-brass-200">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/real-estate/${topic.slug}`}
                className="rounded-vm border border-navy-400 bg-navy-600 p-5 no-underline transition-colors hover:border-brass-300"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brass-200">{topic.topicArea}</p>
                <p className="mt-2 text-sm font-semibold text-offwhite-100">{topic.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/real-estate" className="btn-primary bg-brass-500 hover:bg-brass-600">
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
  );
}
