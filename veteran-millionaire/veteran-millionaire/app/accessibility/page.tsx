import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Veteran Millionaire's accessibility commitment and how to report an accessibility issue.",
};

export default function AccessibilityPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="eyebrow-vm mb-3">Legal</p>
        <h1 className="text-4xl">Accessibility Statement</h1>
        <p className="mt-4 text-sm text-charcoal-300">
          Last updated July 16, 2026. This is a policy template pending final legal review.
        </p>

        <div className="mt-10 space-y-6 text-base text-charcoal-400">
          <p>
            Veteran Millionaire is committed to making this site usable by as many people as possible, including
            veterans and family members using assistive technology. We aim to meet the Web Content Accessibility
            Guidelines (WCAG) 2.1 Level AA as our target standard.
          </p>
          <p>
            Ongoing efforts include: visible keyboard focus states on interactive elements, descriptive text
            alternatives for non-text content (including our placeholder image blocks, which use accessible labels
            describing what will be there), semantic heading structure, and form labels associated with their
            inputs.
          </p>
          <p>
            This is an ongoing effort, not a finished state. If you encounter a barrier using this site — a page
            that doesn't work well with a screen reader, a control that's hard to operate by keyboard, or anything
            else — we want to know about it.
          </p>
          <p>
            Report accessibility issues through our{" "}
            <a href="/contact" className="font-semibold text-green hover:underline">
              Contact
            </a>{" "}
            page. Please include the page URL and a description of the issue so we can investigate and prioritize a
            fix.
          </p>
        </div>
      </Container>
    </main>
  );
}
