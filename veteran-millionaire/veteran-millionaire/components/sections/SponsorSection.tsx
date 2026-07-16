import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * No sponsor logos exist yet — per spec, do not fabricate brand logos or
 * imply partnerships that don't exist. This section explains the sponsor
 * program in plain language and drives interested brands to /partner.
 */
export default function SponsorSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="text-center">
        <SectionHeading
          eyebrow="Sponsors"
          heading="Brands That Support Veteran Wealth"
          subhead="Veteran Millionaire partners with a limited number of brands who want to reach a veteran audience with real value — not just a banner ad. No sponsor logos are shown here yet because no partnerships have been finalized."
          align="center"
        />

        <div className="mx-auto mt-8">
          <Link href="/partner" className="btn-primary">
            Become a Partner
          </Link>
        </div>
      </Container>
    </section>
  );
}
