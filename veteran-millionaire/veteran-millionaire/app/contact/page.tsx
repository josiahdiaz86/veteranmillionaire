import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Veteran Millionaire team.",
};

export default function ContactPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            heading="Get in Touch"
            subhead="Questions about a discount, a benefit article, accessibility, press, or anything else — send us a message and we'll get back to you."
          />
          <p className="mt-6 text-sm text-charcoal-400">
            For mortgage-specific questions, visit{" "}
            <a href="/talk-to-joe" className="font-semibold text-green hover:underline">
              Talk to Joe
            </a>{" "}
            instead — that connects you directly with our founding mortgage partner, JoeLendsToVets.
          </p>
        </div>

        <div className="card-vm">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
