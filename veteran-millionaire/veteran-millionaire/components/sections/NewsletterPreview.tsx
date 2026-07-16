import type { NewsletterEdition } from "@/lib/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterSignupForm from "@/components/content/NewsletterSignupForm";

interface NewsletterPreviewProps {
  editions: NewsletterEdition[];
}

export default function NewsletterPreview({ editions }: NewsletterPreviewProps) {
  const previewEditions = editions.slice(0, 2);

  return (
    <section className="bg-navy py-16 text-offwhite-100 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Newsletter"
          heading="Get the Free Weekly Brief"
          subhead="Deal of the week, benefit updates, a real estate tip, a side hustle breakdown, and a note from Joe — every week, straight to your inbox."
          className="[&_h2]:text-offwhite-100 [&_p]:text-offwhite-300"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {previewEditions.map((edition) => (
            <div key={edition.slug} className="rounded-vm border border-navy-400 bg-navy-600 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brass-200">
                Edition {edition.editionNumber}
              </p>
              <p className="mt-2 text-sm font-semibold text-offwhite-100">{edition.title}</p>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-offwhite-300">
                    {edition.sections.dealOfTheWeek.heading}
                  </p>
                  <p className="mt-1 text-sm text-offwhite-200">{edition.sections.dealOfTheWeek.body}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-offwhite-300">
                    {edition.sections.joesVaLoanNote.heading}
                  </p>
                  <p className="mt-1 text-sm text-offwhite-200">{edition.sections.joesVaLoanNote.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-lg">
          <NewsletterSignupForm source="newsletter_preview_section" />
        </div>
      </Container>
    </section>
  );
}
