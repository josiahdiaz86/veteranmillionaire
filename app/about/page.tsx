import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Veteran Millionaire is an independent media and education platform helping veterans save more, earn more, invest smarter, and build lasting wealth.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="About"
            heading="Built for the Money Conversations That Happen After Service."
            subhead="A lot of financial media treats veterans as a footnote — a discount list, a occasional headline. Veteran Millionaire starts from a different premise: veterans already did the hard part. What's often missing afterward is a clear, honest place to figure out what to do with the benefits, discipline, and time left over."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl">Why This Exists</h2>
            <p className="mt-3 text-base text-charcoal-400">
              Veteran-specific discounts, benefits, and financial programs exist in scattered forms across dozens of
              retailer pages, government sites, and forum threads. Most of it is either incomplete, outdated, or
              written for a general audience that doesn't share the specific context of transitioning out of
              military service. Veteran Millionaire brings the discounts, benefit explanations, real estate
              education, side hustle ideas, and community discussion into one place, maintained by an editorial
              process instead of an auto-scraped list.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">How We Work</h2>
            <p className="mt-3 text-base text-charcoal-400">
              Every discount, benefit summary, and educational article on this site moves through an editorial
              workflow before it's treated as current — draft, verification, compliance review where relevant, and
              publish. We say plainly when something is a sample structure pending verification versus a
              editorial-confirmed listing, and we link back to official sources (like va.gov) rather than trying to
              be the final word on programs we don't administer. Read more on our{" "}
              <Link href="/editorial-standards" className="font-semibold text-green hover:underline">
                Editorial Standards
              </Link>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">What We're Not</h2>
            <p className="mt-3 text-base text-charcoal-400">
              Veteran Millionaire is an independent media and education company. We are not the Department of
              Veterans Affairs, the Department of Defense, or any government agency, and nothing here should be
              read as an official benefits determination. We're also not in the business of guaranteeing outcomes —
              not on discounts, not on side hustle income, and not on mortgage terms. Where we do connect readers to
              a business (like our founding mortgage partner, below), we say so clearly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Our Founding Mortgage Partner</h2>
            <p className="mt-3 text-base text-charcoal-400">
              Veteran Millionaire's real estate education content is supported by JoeLendsToVets, our founding
              mortgage partner, which also contributes a recurring VA Loan Note to our weekly newsletter. That
              relationship pays for a meaningful share of what keeps this site free to use, and we're upfront about
              it: JoeLendsToVets is a business, not a government program, and using their services is entirely
              optional. Our editorial content about VA loans is written to be useful whether or not you ever talk
              to them.
            </p>
            <p className="mt-3 text-base text-charcoal-400">
              If you want to talk through your specific numbers, visit{" "}
              <Link href="/talk-to-joe" className="font-semibold text-green hover:underline">
                Talk to Joe
              </Link>
              . If you just want the education, the rest of the site works fine without it.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
