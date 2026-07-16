import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SponsorInquiryForm from "@/components/forms/SponsorInquiryForm";

export const metadata: Metadata = {
  title: "Advertise With Us",
  description:
    "Reach a veteran audience with editorial-quality placements, not just banner ads. Learn about advertising with Veteran Millionaire.",
};

export default function AdvertisePage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Advertise"
            heading="Reach Veterans Who Are Actively Building Wealth"
            subhead="Veteran Millionaire works with a limited number of brands who want to reach a veteran audience with real value — not just a banner ad. No advertising partnerships have been finalized yet; this page describes what we're building toward."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-base text-charcoal-400">
            <p>
              Our audience is veterans and military family members actively looking for ways to save money, build
              real estate wealth, start businesses, and grow their income — a high-intent audience for brands in
              financial services, home improvement, real estate, insurance, and veteran-relevant retail.
            </p>
            <p>
              We're building toward a small set of clearly-labeled placement types: newsletter sponsorships,
              featured discount placements, and sponsor sections like the one on our homepage. Every sponsored
              placement will be labeled as such — see our{" "}
              <a href="/affiliate-disclosure" className="font-semibold text-green hover:underline">
                Affiliate Disclosure
              </a>{" "}
              for how we handle compensated content.
            </p>
            <p>Interested in advertising with us? Send an inquiry and we'll follow up.</p>
          </div>

          <div className="card-vm">
            <SponsorInquiryForm source="advertise_page" />
          </div>
        </Container>
      </section>
    </main>
  );
}
