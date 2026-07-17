import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SideHustleCard from "@/components/content/SideHustleCard";
import { sideHustles } from "@/lib/data/sideHustles";

export function generateStaticParams(): { slug: string }[] {
  return sideHustles.map((hustle) => ({ slug: hustle.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hustle = sideHustles.find((h) => h.slug === params.slug);
  if (!hustle) {
    return { title: "Side Hustle Not Found" };
  }
  return {
    title: hustle.seoTitle,
    description: hustle.metaDescription,
  };
}

export default function SideHustlePage({ params }: { params: { slug: string } }) {
  const hustle = sideHustles.find((h) => h.slug === params.slug);
  if (!hustle) {
    notFound();
  }

  const related = sideHustles.filter((h) => h.slug !== hustle.slug).slice(0, 3);

  return (
    <main>
      <section className="bg-offwhite-200 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Make Money", href: "/make-money" },
              { label: hustle.title, href: `/make-money/${hustle.slug}` },
            ]}
            className="mb-6"
          />
          <h1 className="text-3xl sm:text-4xl">{hustle.title}</h1>
          <p className="mt-4 max-w-2xl text-base text-charcoal-400">{hustle.summary}</p>

          <dl className="mt-8 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-300">Startup Cost</dt>
              <dd className="mt-1 text-sm font-semibold text-charcoal">{hustle.startupCostRange}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-300">Difficulty</dt>
              <dd className="mt-1 text-sm font-semibold text-charcoal">{hustle.difficulty}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-300">First Revenue</dt>
              <dd className="mt-1 text-sm font-semibold text-charcoal">{hustle.timeToFirstRevenue}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-300">Part-Time Friendly</dt>
              <dd className="mt-1 text-sm font-semibold text-charcoal">{hustle.partTimeFriendly ? "Yes" : "No"}</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-xl">Overview</h2>
          <p className="mt-3 text-base text-charcoal-400">{hustle.body}</p>

          <p className="mt-10 text-xs leading-relaxed text-charcoal-300">
            This is educational information, not a promise or guarantee of income or results. Actual outcomes
            depend on your local market, effort, pricing, and any applicable licensing requirements.
          </p>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-offwhite-200 py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related" heading="More Side Hustles" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedHustle) => (
                <SideHustleCard key={relatedHustle.slug} sideHustle={relatedHustle} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
