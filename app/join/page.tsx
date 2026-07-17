import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import MembershipForm from "@/components/forms/MembershipForm";

export const metadata: Metadata = {
  title: "Join Free",
  description:
    "Join Veteran Millionaire free — discounts, real estate education, side hustle breakdowns, benefit updates, and a community built for veterans. No credit card required.",
};

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

export default function JoinPage() {
  return (
    <main className="bg-offwhite-200 py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow-vm mb-3">Free Membership</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Everything You Need to Save More and Build More — Free.</h1>
          <p className="mt-6 max-w-xl text-lg text-charcoal-400">
            Create your free account in under a minute. No credit card, no obligation, and you can unsubscribe from
            any email at any time.
          </p>

          <ul className="mt-8 space-y-3">
            {INCLUSIONS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-charcoal-400">
                <span aria-hidden="true" className="mt-0.5 text-green">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-charcoal-300">
            Veteran Millionaire is an independent educational and media platform, not affiliated with the U.S.
            Department of Veterans Affairs, Department of Defense, or any government agency.
          </p>
        </div>

        <div className="card-vm">
          <p className="mb-2 text-lg font-headline font-bold text-navy">Create Your Free Account</p>
          <p className="mb-6 text-sm text-charcoal-400">Takes under a minute. No credit card required.</p>
          <MembershipForm source="join_page" />
        </div>
      </Container>
    </main>
  );
}
