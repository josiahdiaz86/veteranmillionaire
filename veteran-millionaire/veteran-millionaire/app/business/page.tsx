import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Veteran-Owned Business Resources",
  description:
    "Educational resources for veteran entrepreneurs — starting a business, government contracting, funding, marketing, business credit, franchises, veteran certifications, and tools.",
};

const SECTIONS = [
  {
    id: "starting",
    heading: "Starting a Veteran-Owned Business",
    body: "Most businesses start the same way regardless of who owns them: a real problem, a specific customer, and a plan for getting the first sale. What's different for veterans is often the transition timing — figuring out entity structure, basic bookkeeping, and licensing while also navigating a career change. Start with a simple business plan, register your entity with your state, and separate personal and business finances from day one.",
  },
  {
    id: "contracting",
    heading: "Government Contracting",
    body: "Federal, state, and local agencies buy an enormous range of goods and services, and veteran-owned businesses have access to specific set-aside programs, including Service-Disabled Veteran-Owned Small Business (SDVOSB) status where eligible. The path generally starts with registering in the federal System for Award Management (SAM.gov) and researching opportunities on SAM.gov and state procurement portals. This is a longer runway than most side hustles — expect months, not weeks, before your first contract.",
  },
  {
    id: "funding",
    heading: "Funding",
    body: "Veteran business funding sources include SBA-backed loans (some with veteran-specific fee reductions), traditional bank financing, and in some cases grants or microloans from veteran-focused nonprofits. Every funding source has real underwriting requirements — a solid business plan and clean financials matter more than which program you apply through. Compare terms carefully before committing to any funding source.",
  },
  {
    id: "marketing",
    heading: "Marketing",
    body: "Veteran-owned status can be a genuine differentiator with customers who prioritize supporting veteran businesses, but it works best paired with a clear value proposition — what you do well, for whom, and why. Basic marketing fundamentals (a clear website, local search presence, referral systems) matter more early on than paid advertising.",
  },
  {
    id: "credit",
    heading: "Business Credit",
    body: "Separating business and personal credit protects your personal finances and makes the business easier to finance later. Basic steps include forming a proper legal entity, getting an EIN, opening a dedicated business bank account, and establishing trade lines with vendors that report to business credit bureaus. This takes time to build — there's no shortcut to a strong business credit profile.",
  },
  {
    id: "franchises",
    heading: "Franchises",
    body: "Franchising can lower some of the startup risk of a first business by providing a tested model, but it comes with real costs (franchise fees, ongoing royalties) and real restrictions on how you operate. Some franchisors offer veteran discount programs on franchise fees — ask directly and read the Franchise Disclosure Document (FDD) carefully before signing anything.",
  },
  {
    id: "certifications",
    heading: "Veteran Certifications (SDVOSB / VOSB)",
    body: "Service-Disabled Veteran-Owned Small Business (SDVOSB) and Veteran-Owned Small Business (VOSB) are formal designations tied to ownership, control, and disability status requirements, verified through the U.S. Small Business Administration and, for some programs, the VA's Center for Verification and Evaluation. Veteran Millionaire does not certify businesses and is not affiliated with these agencies — this section is a general description of what these designations are, not an application or verification service.",
  },
  {
    id: "tools",
    heading: "Business Tools",
    body: "Basic tools worth evaluating early include accounting software, a simple CRM for tracking leads and customers, and e-signature tools for contracts. Choose tools that fit your actual workflow rather than the most feature-heavy option — most early-stage businesses are better served by fewer tools used consistently than many tools used occasionally.",
  },
];

export default function BusinessPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Business"
            heading="Building a Veteran-Owned Business"
            subhead="Educational resources on starting, funding, and growing a veteran-owned business — general information, not legal, tax, or business advice specific to your situation."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.id} id={section.id} className="border-b border-navy-100 pb-10 last:border-0">
                <h2 className="text-2xl">{section.heading}</h2>
                <p className="mt-3 max-w-3xl text-base text-charcoal-400">{section.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container className="text-center">
          <SectionHeading
            eyebrow="Directory"
            heading="Veteran Business Directory"
            subhead="The directory is opening soon. Veteran business owners can submit a listing for review — no businesses are listed yet, so nothing below is invented."
            align="center"
          />
          <div className="mt-8">
            <Link href="/submit-business" className="btn-primary">
              Submit Your Business
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <p className="max-w-3xl text-xs leading-relaxed text-charcoal-300">
            This page is educational and general in nature, not legal, tax, or business advice. Veteran Millionaire
            does not certify SDVOSB/VOSB status and is not affiliated with the U.S. Small Business Administration,
            the Department of Veterans Affairs, or any government agency. Confirm program details directly with the
            administering agency.
          </p>
        </Container>
      </section>
    </main>
  );
}
