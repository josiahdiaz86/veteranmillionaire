import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SponsorInquiryForm from "@/components/forms/SponsorInquiryForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Veteran Millionaire partners with a limited number of brands and organizations that want to reach a veteran audience with real value.",
};

export default function PartnerPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Partner"
            heading="Become a Partner"
            subhead="We work with a limited number of brands and organizations — sponsors, employer partners, and content contributors — who bring real value to the veteran community, not just a logo placement."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-base text-charcoal-400">
            <p>
              Partnership types we're building toward include sponsor tiers (Presenting, Featured, Community, and
              Affiliate Partner), employer partnerships for our upcoming job board, and content contributions from
              organizations with genuine veteran expertise. No partnerships have been finalized yet — this page
              describes the categories we're organized to support.
            </p>
            <p>
              If you represent a business, nonprofit, or organization interested in partnering with Veteran
              Millionaire, tell us a bit about what you have in mind.
            </p>
          </div>

          <div className="card-vm">
            <SponsorInquiryForm source="partner_page" />
          </div>
        </Container>
      </section>
    </main>
  );
}
