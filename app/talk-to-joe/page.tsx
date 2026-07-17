import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import MortgageInquiryForm from "@/components/forms/MortgageInquiryForm";

export const metadata: Metadata = {
  title: "Talk to Joe About a VA Loan",
  description:
    "Connect directly with JoeLendsToVets, Veteran Millionaire's founding mortgage partner, about VA loan options. Not a commitment to lend — rates and terms are not guaranteed.",
};

export default function TalkToJoePage() {
  return (
    <main>
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="eyebrow-vm mb-3">Lender Content</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Talk to Joe About a VA Loan</h1>
          <p className="mt-6 text-lg text-charcoal-400">
            This page connects you directly with JoeLendsToVets, our founding mortgage partner — it is different
            from the educational articles elsewhere on this site. Submitting this form starts a conversation with a
            loan officer, not an application, and it is not a commitment by you or by JoeLendsToVets to move
            forward with a loan.
          </p>
        </Container>
      </section>

      {/*
        Distinct background tint (brass-50) intentionally separates this
        lender-facing section from standard editorial page styling, so it
        reads as clearly-labeled lender content rather than an article.
      */}
      <section className="bg-brass-50 py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">What Happens After You Submit</h2>
            <p className="mt-3 text-base text-charcoal-400">
              A member of the JoeLendsToVets team will follow up to discuss your situation and answer questions
              about VA loan eligibility, the general process, and next steps. They can give you information specific
              to your credit profile, income, and target property — none of which Veteran Millionaire's editorial
              content is able to do.
            </p>

            <div className="mt-8 rounded-vm border border-brass-300 bg-offwhite-100 p-6">
              <p className="text-sm font-semibold text-charcoal">Equal Housing Opportunity</p>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-400">
                JoeLendsToVets is an Equal Housing Opportunity lender. We do not discriminate on the basis of race,
                color, religion, national origin, sex, disability, or familial status in the extension of credit.
              </p>
            </div>

            <div className="mt-6 rounded-vm border border-brass-300 bg-offwhite-100 p-6">
              <p className="text-sm font-semibold text-charcoal">NMLS &amp; State Licensing (Placeholder)</p>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-400">
                JoeLendsToVets — NMLS #000000 (placeholder). Licensed where required by law; not licensed or
                offering loans in all states. The table below is a structural placeholder — real per-state license
                numbers must be supplied and reviewed by compliance before this page goes live.
              </p>
              <table className="mt-4 w-full text-left text-xs text-charcoal-400">
                <thead>
                  <tr className="border-b border-brass-200">
                    <th className="py-2 pr-4 font-semibold text-charcoal">State</th>
                    <th className="py-2 font-semibold text-charcoal">License Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brass-100">
                    <td className="py-2 pr-4">Placeholder State</td>
                    <td className="py-2">Placeholder License #</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-charcoal-300">
              Rates, APR, and loan terms shown anywhere on this site or discussed on a call are not guaranteed and
              are not an advertisement for specific terms. Actual rate, APR, and terms depend on your credit
              profile, loan amount, property, and market conditions at the time of application, and are subject to
              underwriting approval. This is not a commitment to lend. Final legal and compliance review of this
              disclosure block is pending.
            </p>
          </div>

          <div className="card-vm">
            <MortgageInquiryForm source="talk_to_joe_page" />
          </div>
        </Container>
      </section>
    </main>
  );
}
