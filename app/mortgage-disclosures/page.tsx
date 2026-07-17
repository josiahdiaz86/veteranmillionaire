import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Mortgage Disclosures",
  description: "NMLS, licensing, and Equal Housing Opportunity disclosures for JoeLendsToVets mortgage content.",
};

export default function MortgageDisclosuresPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="eyebrow-vm mb-3">Legal</p>
        <h1 className="text-4xl">Mortgage Disclosures</h1>
        <p className="mt-4 text-sm text-charcoal-300">
          Last updated July 16, 2026. This page contains placeholder licensing information pending final compliance
          and legal review — do not treat any NMLS number or license status shown here as accurate until that
          review is complete.
        </p>

        <div className="mt-10 space-y-8 text-base text-charcoal-400">
          <section className="rounded-vm border border-navy-100 bg-offwhite-200 p-6">
            <h2 className="text-xl text-navy">Equal Housing Opportunity</h2>
            <p className="mt-3">
              JoeLendsToVets is an Equal Housing Opportunity lender. We do not discriminate on the basis of race,
              color, religion, national origin, sex, disability, or familial status in the extension of credit.
            </p>
          </section>

          <section className="rounded-vm border border-navy-100 bg-offwhite-200 p-6">
            <h2 className="text-xl text-navy">NMLS Identification (Placeholder)</h2>
            <p className="mt-3">
              JoeLendsToVets — NMLS #000000 (placeholder). This number must be replaced with a verified, current
              NMLS Unique Identifier before this page or any mortgage form goes live.
            </p>
          </section>

          <section className="rounded-vm border border-navy-100 bg-offwhite-200 p-6">
            <h2 className="text-xl text-navy">State Licensing (Placeholder Structure)</h2>
            <p className="mt-3">
              JoeLendsToVets is licensed where required by law and is not licensed or offering loans in every
              state. The table below is a structural placeholder for the real, per-state license list required by
              most state mortgage licensing disclosures.
            </p>
            <table className="mt-4 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-navy-200">
                  <th className="py-2 pr-4 font-semibold text-charcoal">State</th>
                  <th className="py-2 font-semibold text-charcoal">License Number</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-100">
                  <td className="py-2 pr-4">Placeholder State</td>
                  <td className="py-2">Placeholder License #</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-xl text-navy">Rate and Approval Disclaimer</h2>
            <p className="mt-3">
              Any rate, APR, payment estimate, or loan term referenced anywhere on this site — including the VA
              loan payment calculator — is an estimate or illustration only, not a rate quote, loan offer, or
              commitment to lend. Actual rate, APR, and terms depend on individual credit profile, loan amount,
              property, and market conditions at the time of application, and are subject to underwriting approval.
              VA loan eligibility does not guarantee approval, and no specific savings, payment, or outcome is
              guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">Relationship to Veteran Millionaire</h2>
            <p className="mt-3">
              JoeLendsToVets is Veteran Millionaire's founding mortgage partner and an independent business, not a
              government agency or program. Using JoeLendsToVets is entirely optional; Veteran Millionaire's
              educational content is not conditioned on it. See our{" "}
              <a href="/affiliate-disclosure" className="font-semibold text-green hover:underline">
                Affiliate Disclosure
              </a>{" "}
              for how this relationship may be compensated.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
