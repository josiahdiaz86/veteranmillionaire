import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Veteran Millionaire collects, uses, and protects information from visitors and members.",
};

export default function PrivacyPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="eyebrow-vm mb-3">Legal</p>
        <h1 className="text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-charcoal-300">
          Last updated July 16, 2026. This is a policy template pending final legal review — it has not yet been
          reviewed by an attorney and should not be treated as final until that review is complete.
        </p>

        <div className="mt-10 space-y-8 text-base text-charcoal-400">
          <section>
            <h2 className="text-xl text-navy">1. Information We Collect</h2>
            <p className="mt-3">
              We collect information you provide directly, such as your name, email address, state, branch of
              service, and stated interests when you join for free membership, sign up for the newsletter, or submit
              a form (including the mortgage inquiry, discount submission, and business submission forms). We also
              collect standard technical information automatically, such as pages visited, device and browser type,
              and referring URLs, through analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">2. How We Use Information</h2>
            <p className="mt-3">
              We use collected information to operate the site, send the newsletter and membership emails you've
              opted into, respond to submissions and inquiries, improve our content and discount listings, and
              measure how the site is used. If you submit a mortgage inquiry through Talk to Joe, your information
              is shared with JoeLendsToVets so they can follow up with you directly — see our{" "}
              <a href="/mortgage-disclosures" className="font-semibold text-green hover:underline">
                Mortgage Disclosures
              </a>{" "}
              page for more detail.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">3. Sharing of Information</h2>
            <p className="mt-3">
              We do not sell personal information. We share information with service providers who help us operate
              the site (such as email delivery and analytics providers) and, where you've submitted a mortgage
              inquiry, with JoeLendsToVets. We may disclose information if required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">4. Cookies and Analytics</h2>
            <p className="mt-3">
              We use cookies and similar technologies for basic site functionality and analytics. You can control
              cookies through your browser settings; disabling them may affect some site features.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">5. Your Choices</h2>
            <p className="mt-3">
              You can unsubscribe from marketing emails at any time using the link in any email we send. To request
              access to, correction of, or deletion of your personal information, contact us using the details on
              our{" "}
              <a href="/contact" className="font-semibold text-green hover:underline">
                Contact
              </a>{" "}
              page.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">6. Data Retention and Security</h2>
            <p className="mt-3">
              We retain personal information for as long as needed to provide our services and comply with legal
              obligations, and we use reasonable technical and organizational measures to protect it. No method of
              transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">7. Children's Privacy</h2>
            <p className="mt-3">
              Veteran Millionaire is not directed to children under 13, and we do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">8. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. Material changes will be reflected by an updated "Last
              updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">9. Contact Us</h2>
            <p className="mt-3">
              Questions about this policy can be sent through our{" "}
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
