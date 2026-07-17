import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BusinessSubmissionForm from "@/components/forms/BusinessSubmissionForm";

export const metadata: Metadata = {
  title: "Submit a Veteran Business",
  description: "Submit a veteran-owned business for review and inclusion in the upcoming Veteran Business Directory.",
};

export default function SubmitBusinessPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contribute"
            heading="Submit a Veteran Business"
            subhead="The Veteran Business Directory is opening soon. Submit your business (or one you know) for review, and we'll reach out with next steps as the directory launches."
          />
          <p className="mt-6 text-sm text-charcoal-400">
            We don't verify SDVOSB/VOSB certification status ourselves — that's handled by the Small Business
            Administration and, for some programs, the VA's Center for Verification and Evaluation.
          </p>
        </div>

        <div className="card-vm">
          <BusinessSubmissionForm />
        </div>
      </Container>
    </main>
  );
}
