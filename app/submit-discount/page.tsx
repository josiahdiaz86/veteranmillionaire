import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DiscountSubmissionForm from "@/components/forms/DiscountSubmissionForm";

export const metadata: Metadata = {
  title: "Submit a Discount",
  description: "Know a veteran or military discount we're missing? Submit it for editorial review.",
};

export default function SubmitDiscountPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contribute"
            heading="Submit a Discount"
            subhead="Know a veteran or military discount we don't have listed yet — or spotted one that's changed? Tell us and our editorial team will review it before it's published or corrected."
          />
          <p className="mt-6 text-sm text-charcoal-400">
            Submissions go through the same verification process as every other listing on the site — they don't
            go live automatically.
          </p>
        </div>

        <div className="card-vm">
          <DiscountSubmissionForm />
        </div>
      </Container>
    </main>
  );
}
