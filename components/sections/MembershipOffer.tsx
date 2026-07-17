import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipForm from "@/components/forms/MembershipForm";

const INCLUSIONS = [
  "Weekly discount alerts curated by editorial, not auto-scraped",
  "The Veteran Millionaire Brief — a weekly newsletter covering deals, benefits, and wealth moves",
  "Full access to the real estate education library, including VA loan and house-hacking guides",
  "Side hustle breakdowns with honest startup costs and timelines",
  "Benefit update alerts when programs or rules change",
  "Access to the private Veteran Millionaire Facebook Group",
  "Early notice for free virtual classes and community events",
  "Veteran business directory access and spotlight eligibility",
  "Job board and training program listings focused on veteran-friendly employers",
  "A direct line to ask questions through Talk to Joe",
];

export default function MembershipOffer() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Free Membership"
            heading="Everything You Need to Save More and Build More—Free."
          />
          {/*
            Spec explicitly says: do not show a fake "$X,XXX value" total
            unless it can be supported later with real, defensible pricing
            for each inclusion. Omitting any value claim here on purpose.
          */}
          <ul className="mt-8 space-y-3">
            {INCLUSIONS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-charcoal-400">
                <span aria-hidden="true" className="mt-0.5 text-green">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-vm">
          <p className="mb-6 text-sm text-charcoal-400">
            Create your free account in under a minute. No credit card, no obligation.
          </p>
          <MembershipForm source="membership_offer_section" />
        </div>
      </Container>
    </section>
  );
}
