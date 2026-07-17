import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description:
    "How Veteran Millionaire researches, verifies, and reviews content — including our AI-assisted content workflow and correction process.",
};

const WORKFLOW_STEPS = [
  {
    stage: "Draft",
    body: "Content is written — sometimes with AI assistance for research and first drafts — but has not yet been fact-checked or reviewed.",
  },
  {
    stage: "Needs Verification",
    body: "The content is complete but specific facts (a discount percentage, a program detail, a source link) still need to be checked against a primary source before we'd stand behind it.",
  },
  {
    stage: "Needs Compliance Review",
    body: "Content involving lending, financial claims, or other regulated topics is routed to compliance review before it can be published, in addition to standard editorial verification.",
  },
  {
    stage: "Approved",
    body: "Editorial (and compliance, where required) has signed off on the content's accuracy and framing. It's ready to publish.",
  },
  {
    stage: "Published",
    body: "The content is live on the site and treated as current.",
  },
  {
    stage: "Expired",
    body: "The content was accurate at one point but has since lapsed (e.g. an offer's expiration date passed) and needs a refresh before it should be trusted again.",
  },
  {
    stage: "Archived",
    body: "The content is retired and no longer shown as current — kept for internal record only.",
  },
];

export default function EditorialStandardsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="eyebrow-vm mb-3">Legal</p>
        <h1 className="text-4xl">Editorial Standards</h1>
        <p className="mt-4 text-sm text-charcoal-300">Last updated July 16, 2026.</p>

        <div className="mt-10 space-y-8 text-base text-charcoal-400">
          <section>
            <h2 className="text-xl text-navy">Our Editorial Workflow</h2>
            <p className="mt-3">
              Every piece of content on Veteran Millionaire — discount listings, benefit summaries, articles, real
              estate topics, and side hustle profiles — carries an internal status that reflects exactly how far
              it's progressed through our review process. That status isn't decorative: it drives what's safe to
              show publicly, and where relevant, we surface it directly (like the "Needs Verification" badges on
              discount listings) so readers can judge for themselves.
            </p>
            <ol className="mt-6 space-y-4">
              {WORKFLOW_STEPS.map((step, index) => (
                <li key={step.stage} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-700">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal">{step.stage}</p>
                    <p className="mt-1 text-sm text-charcoal-400">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl text-navy">AI-Assisted Content Disclosure</h2>
            <p className="mt-3">
              Some content on this site is drafted with AI assistance — used for research organization, first
              drafts, and structural consistency across similar content types (like discount listings following the
              same format). AI-assisted drafts are not published as-is: they move through the same Draft →
              Verification → (Compliance Review) → Approved → Published workflow as any other content, and a human
              editor reviews the final version before it's marked Approved. We track this internally (an
              "AI-generated" and "human-reviewed" flag on every item) so we can be transparent about it here.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">How We Handle Corrections</h2>
            <p className="mt-3">
              If you spot something wrong — a discount that's expired, a benefit detail that's changed, a broken
              link — tell us. Discount pages include a "Submit a Correction" link, and you can also reach us through
              our{" "}
              <a href="/contact" className="font-semibold text-green hover:underline">
                Contact
              </a>{" "}
              page. Confirmed corrections are reflected in the content's "updated" date, and where the correction is
              significant, we move the content back to "Needs Verification" until it's rechecked.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-navy">What We Won't Do</h2>
            <p className="mt-3">
              We won't publish specific discount percentages, benefit dollar amounts, or loan terms we haven't
              verified are current, and we won't let compensation from a business (see our{" "}
              <a href="/affiliate-disclosure" className="font-semibold text-green hover:underline">
                Affiliate Disclosure
              </a>
              ) influence a listing's accuracy or verification status.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
