import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Sample structure — future case studies. No testimonials exist yet, so
 * this section intentionally shows only the planned case-study
 * categories as headings. Do not add quotes, names, dollar figures, or
 * any other invented specifics here — replace this whole section with
 * real, consented case studies once they exist.
 */
const FUTURE_CASE_STUDY_TYPES = [
  "First-time VA homebuyer purchase story",
  "House hacking with a multi-unit VA loan",
  "Side hustle grown into a full business",
  "Veteran-owned business landing a government contract",
  "Disability claim increase and how it changed a budget",
  "Community member debt payoff or savings milestone",
];

export default function SuccessStories() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Coming Soon"
          heading="Real Stories From Real Veterans — In Progress"
          subhead="Sample structure — future case studies. These are the categories of stories we plan to feature once real, consented member stories are collected. Nothing below is a testimonial, quote, or claim of results."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE_CASE_STUDY_TYPES.map((type) => (
            <div
              key={type}
              className="rounded-vm border border-dashed border-navy-200 bg-offwhite-100 p-6 text-sm font-semibold text-charcoal-400"
            >
              {type}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
