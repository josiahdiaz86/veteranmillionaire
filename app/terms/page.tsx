import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern use of the Veteran Millionaire website and free membership.",
};

export default function TermsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="eyebrow-vm mb-3">Legal</p>
        <h1 className="text-4xl">Terms of Use</h1>
        <p className="mt-4 text-sm text-charcoal-300">
          Last updated July 16, 2026. This is a policy template pending final legal review — it has not yet been
          reviewed by an attorney and should not be treated as final until that review is complete.
        </p>

        <div className="mt-10 space-y-8 text-base text-charcoal-400">
          <section>
            <h2 className="text-xl text-navy">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By using Veteran Millionaire, you agree to these Terms of Use. If you do not agree, please don't use
              the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">2. Educational Content, Not Advice</h2>
            <p className="mt-3">
              Content on this site — including articles, discount listings, benefit summaries, real estate
              education, side hustle profiles, and business resources — is provided for general educational
              purposes only. It is not legal, tax, financial, investment, or benefits advice, and it does not
              replace guidance from a qualified professional or an official government source. Nothing on this site
              guarantees any specific outcome, savings amount, approval, or income.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">3. No Government Affiliation</h2>
            <p className="mt-3">
              Veteran Millionaire is an independent educational and media platform. We are not affiliated with, and
              do not represent, the U.S. Department of Veterans Affairs, Department of Defense, or any government
              agency.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">4. Third-Party Content and Links</h2>
            <p className="mt-3">
              We link to third-party businesses, discount programs, and official government resources. We don't
              control those third parties and aren't responsible for their content, accuracy, or availability.
              Discount and offer details can change without notice — always confirm current terms with the
              retailer.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">5. Free Membership and Accounts</h2>
            <p className="mt-3">
              Free membership requires accurate information. You're responsible for keeping your account
              information current and for activity under your account. We may suspend or terminate access for
              misuse of the site or community spaces, including violations of our community standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">6. Submitted Content</h2>
            <p className="mt-3">
              If you submit a discount, business listing, or other content for review, you confirm the information
              is accurate to your knowledge and grant us permission to review, edit, and publish it as part of the
              site. We may decline to publish any submission.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">7. Intellectual Property</h2>
            <p className="mt-3">
              Veteran Millionaire's original content, branding, and design are owned by Veteran Millionaire.
              Third-party trademarks referenced on this site (such as retailer or brand names in discount listings)
              belong to their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">8. Disclaimers and Limitation of Liability</h2>
            <p className="mt-3">
              The site is provided "as is" without warranties of any kind. To the fullest extent permitted by law,
              Veteran Millionaire is not liable for any indirect, incidental, or consequential damages arising from
              use of the site or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">9. Changes to These Terms</h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of the site after changes are posted
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">10. Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent through our{" "}
              <a href="/contact" className="font-semibold text-green hover:underline">
                Contact
              </a>{" "}
              page.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
