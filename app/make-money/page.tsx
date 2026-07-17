import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SideHustleCard from "@/components/content/SideHustleCard";
import { sideHustles } from "@/lib/data/sideHustles";

export const metadata: Metadata = {
  title: "Side Hustles & Extra Income Ideas",
  description:
    "Realistic side hustle ideas built around skills and schedules from military service — honest startup costs, timelines, and difficulty, no income guarantees.",
};

export default function MakeMoneyPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Make Money"
            heading="Side Hustles Built Around Your Skills and Schedule"
            subhead="These are educational starting points, not income guarantees. Startup costs, timelines, and difficulty ratings are realistic ranges — actual results depend on your market, effort, and consistency."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sideHustles.map((hustle) => (
              <SideHustleCard key={hustle.slug} sideHustle={hustle} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <p className="max-w-3xl text-xs leading-relaxed text-charcoal-300">
            Nothing on this page is a promise or guarantee of income, results, or timelines. Side hustle outcomes
            depend on local demand, effort, pricing, licensing requirements, and factors outside our control. This
            content is educational and general in nature, not business, legal, or tax advice.
          </p>
        </Container>
      </section>
    </main>
  );
}
