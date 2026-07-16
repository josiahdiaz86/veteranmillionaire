import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Veteran Millionaire discloses affiliate links and sponsored content, per FTC guidance.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="eyebrow-vm mb-3">Legal</p>
        <h1 className="text-4xl">Affiliate Disclosure</h1>
        <p className="mt-4 text-sm text-charcoal-300">
          Last updated July 16, 2026. This is a policy template pending final legal review — it has not yet been
          reviewed by an attorney and should not be treated as final until that review is complete.
        </p>

        <div className="mt-10 space-y-6 text-base text-charcoal-400">
          <p>
            In accordance with Federal Trade Commission (FTC) guidance on endorsements and testimonials, Veteran
            Millionaire discloses the following about how this site may be compensated.
          </p>
          <p>
            Some links on Veteran Millionaire — including discount listings, retailer links, and links to
            JoeLendsToVets, our founding mortgage partner — may be affiliate links, sponsored links, or internal
            lead-generation links. If you click one of these links and take an action (such as making a purchase or
            submitting an inquiry), Veteran Millionaire may receive compensation from the business involved, at no
            additional cost to you.
          </p>
          <p>
            Every piece of content in our system is tagged internally with an affiliate status (None, Affiliate
            Link, Sponsored, Paid Partnership, or Internal Lead Gen) so our editorial team knows exactly which
            listings are monetized. Discount detail pages that contain an outbound offer link include an inline
            note referencing this disclosure.
          </p>
          <p>
            Compensation does not influence which discounts we choose to list, how we describe them, or the
            editorial verification status we assign to them. A discount's status (Needs Verification, Approved,
            Published, etc.) reflects whether our editorial team has confirmed it's current — not whether it's
            monetized.
          </p>
          <p>
            We do not currently display any sponsor logos on the homepage because no sponsor partnerships have been
            finalized. If and when sponsor relationships exist, they will be clearly labeled as sponsored content.
          </p>
          <p>
            Questions about a specific listing or this disclosure can be sent through our{" "}
            <a href="/contact" className="font-semibold text-green hover:underline">
              Contact
            </a>{" "}
            page.
          </p>
        </div>
      </Container>
    </main>
  );
}
