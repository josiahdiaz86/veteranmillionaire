import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { events } from "@/lib/data/events";
import { ANALYTICS_EVENTS } from "@/lib/analytics";
import TrackedExternalLink from "@/components/content/TrackedExternalLink";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Free membership and a private Facebook Group for veterans building wealth together — discounts, real estate education, side hustles, and benefit updates in one place.",
};

const WHAT_YOU_GET = [
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

const GROUND_RULES = [
  "Respect and rank don't mix here — no gatekeeping based on branch, MOS, or time in service.",
  "No spam. No repeated self-promotion outside designated threads.",
  "No unsolicited DMs selling products, services, or opportunities to other members.",
  "Keep financial claims honest — no guaranteed returns, no \"get rich\" pitches.",
  "Disagree with ideas, not people. Personal attacks get removed.",
  "What's shared by members about their own finances stays in the group unless they say otherwise.",
];

function formatEventDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function CommunityPage() {
  return (
    <main>
      <section className="bg-green-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Community"
            heading="Build Wealth With Veterans Who Are Doing the Same."
            subhead="Free membership and a private Facebook Group for veterans comparing notes on discounts, real estate, side hustles, and benefits — not a comment section."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedExternalLink
              href="#"
              eventName={ANALYTICS_EVENTS.FACEBOOK_GROUP_CLICK}
              eventPayload={{ source: "community_hero" }}
              className="btn-primary"
            >
              Join the Veteran Millionaire Facebook Group
            </TrackedExternalLink>
            <Link href="/join" className="btn-secondary">
              Become a Free Member
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What's Included" heading="What Free Membership Gets You" />
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {WHAT_YOU_GET.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-charcoal-400">
                <span aria-hidden="true" className="mt-0.5 text-green">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Sample Events"
            heading="Upcoming Community Events"
            subhead="These are sample/upcoming event listings — dates, hosts, and registration links are illustrative and subject to change before confirmation."
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <div key={event.slug} className="card-vm">
                <p className="eyebrow-vm mb-2">{event.isVirtual ? "Virtual" : "In-Person"} · Sample</p>
                <h3 className="text-lg font-headline font-bold text-navy">{event.title}</h3>
                <p className="mt-2 text-sm text-charcoal-400">{event.summary}</p>
                <div className="mt-4 space-y-1 text-xs text-charcoal-300">
                  <p>{formatEventDate(event.startDateTime)}</p>
                  <p>{event.location}</p>
                  <p>Host: {event.hostName}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Community Standards" heading="How We Keep This Useful" />
          <ul className="mt-8 space-y-3">
            {GROUND_RULES.map((rule) => (
              <li key={rule} className="flex items-start gap-3 text-sm text-charcoal-400">
                <span aria-hidden="true" className="mt-0.5 text-green">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy py-16 text-offwhite-100 sm:py-20">
        <Container className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl text-offwhite-100 sm:text-4xl">Ready to Join?</h2>
          <p className="mt-4 text-base text-offwhite-300">
            Free membership takes under a minute. No credit card, no obligation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedExternalLink
              href="#"
              eventName={ANALYTICS_EVENTS.FACEBOOK_GROUP_CLICK}
              eventPayload={{ source: "community_final_cta" }}
              className="btn-primary bg-brass-500 hover:bg-brass-600"
            >
              Join the Facebook Group
            </TrackedExternalLink>
            <Link
              href="/join"
              className="btn-secondary border-offwhite-100 text-offwhite-100 hover:bg-offwhite-100 hover:text-navy"
            >
              Become a Free Member
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
