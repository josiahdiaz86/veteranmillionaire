import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Veteran Jobs, Training & Certifications",
  description:
    "A job board, training programs, certifications, and employer partners for veterans are coming to Veteran Millionaire. Join free membership for updates.",
};

const COMING_SOON = [
  {
    heading: "Job Board",
    body: "A curated listing of open roles from employers actively looking to hire veterans — not a scraped aggregator feed.",
  },
  {
    heading: "Training Programs",
    body: "Vetted training and certification programs relevant to in-demand fields, with honest information about cost, time commitment, and what the credential actually unlocks.",
  },
  {
    heading: "Certifications",
    body: "Overviews of industry certifications worth considering after service, based on transferable military experience.",
  },
  {
    heading: "Employer Partners",
    body: "Companies with a track record of hiring and supporting veteran employees, verified before being featured — no unconfirmed employer names will be listed.",
  },
];

export default function JobsPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Jobs"
            heading="A Job Board Built for Veterans Is Coming"
            subhead="Nothing is live here yet — no job listings, training programs, or employer names have been invented for this page. Here's what's being built."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {COMING_SOON.map((item) => (
              <div key={item.heading} className="card-vm">
                <h2 className="text-lg font-headline font-bold text-navy">{item.heading}</h2>
                <p className="mt-2 text-sm text-charcoal-400">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-offwhite-100 sm:py-20">
        <Container className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl text-offwhite-100 sm:text-4xl">Be the First to Know When It Launches</h2>
          <p className="mt-4 text-base text-offwhite-300">
            Free members get first access to the job board, training program listings, and employer partner
            announcements as they go live.
          </p>
          <div className="mt-8">
            <Link href="/join" className="btn-primary bg-brass-500 hover:bg-brass-600">
              Become a Free Member
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
