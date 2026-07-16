import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusPill from "@/components/ui/StatusPill";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { benefits } from "@/lib/data/benefits";
import { US_STATES } from "@/lib/data/states";
import type { BenefitResource } from "@/lib/types";
import { toKebabSlug, matchKebabSlug } from "@/lib/slugify";

/**
 * Dual-purpose route: /benefits/[slug] renders either a single
 * BenefitResource detail page (when slug matches a BenefitResource.slug)
 * or a state-program landing page (when slug matches a kebab-case US
 * state name, e.g. "texas"). Exactly one dynamic segment handles both
 * URL shapes from the spec.
 */

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function generateStaticParams(): { slug: string }[] {
  const benefitSlugs = benefits.map((benefit) => ({ slug: benefit.slug }));
  const stateSlugs = US_STATES.map((state) => ({ slug: toKebabSlug(state) }));
  return [...benefitSlugs, ...stateSlugs];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const benefit = benefits.find((b) => b.slug === params.slug);
  if (benefit) {
    return {
      title: benefit.seoTitle,
      description: benefit.metaDescription,
    };
  }

  const state = matchKebabSlug(US_STATES, params.slug, (s) => s);
  if (state) {
    return {
      title: `${state} Veteran Benefits`,
      description: `State-specific veteran benefit programs for ${state} — currently being compiled.`,
    };
  }

  return { title: "Benefit Not Found" };
}

export default function BenefitSlugPage({ params }: { params: { slug: string } }) {
  const benefit = benefits.find((b) => b.slug === params.slug);
  if (benefit) {
    return <BenefitDetail benefit={benefit} />;
  }

  const state = matchKebabSlug(US_STATES, params.slug, (s) => s);
  if (state) {
    return <StateBenefitsPage state={state} />;
  }

  notFound();
}

function BenefitDetail({ benefit }: { benefit: BenefitResource }) {
  return (
    <main>
      <section className="bg-offwhite-200 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Benefits", href: "/benefits" },
              { label: benefit.title, href: `/benefits/${benefit.slug}` },
            ]}
            className="mb-6"
          />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow-vm mb-2">{benefit.benefitType}</p>
              <h1 className="text-3xl sm:text-4xl">{benefit.title}</h1>
              <p className="mt-4 max-w-2xl text-base text-charcoal-400">{benefit.summary}</p>
            </div>
            <StatusPill status={benefit.status} />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-xl">Overview</h2>
              <p className="mt-3 text-base text-charcoal-400">{benefit.body}</p>
            </div>

            <div>
              <h2 className="text-xl">Getting Started</h2>
              <ol className="mt-3 space-y-3">
                {benefit.actionSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-base text-charcoal-400">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-700">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {benefit.sourceLinks.length > 0 ? (
              <div>
                <h2 className="text-xl">Official Sources</h2>
                <ul className="mt-3 space-y-2">
                  {benefit.sourceLinks.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-green underline underline-offset-4"
                      >
                        {source.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6">
            <div className="card-vm">
              <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-300">Administered by</p>
              <p className="mt-2 text-sm text-charcoal-400">{benefit.administeredBy}</p>
              <p className="mt-4 text-xs text-charcoal-300">
                Updated {formatDate(benefit.updatedDate)}
                {benefit.verificationDate ? ` · Last verified ${formatDate(benefit.verificationDate)}` : ""}
              </p>
            </div>

            <div className="card-vm bg-offwhite-200">
              <p className="text-sm font-semibold text-charcoal">Educational information only</p>
              <p className="mt-2 text-xs leading-relaxed text-charcoal-400">
                This page is educational and general in nature, not legal, tax, financial, or benefits advice, and
                Veteran Millionaire is independent of the U.S. Department of Veterans Affairs, Department of
                Defense, and any government agency. Confirm your specific eligibility and current program details
                directly with the administering agency before making decisions.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}

function StateBenefitsPage({ state }: { state: string }) {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Benefits", href: "/benefits" },
              { label: state, href: `/benefits/${toKebabSlug(state)}` },
            ]}
            className="mb-6"
          />
          <SectionHeading eyebrow="State Benefits" heading={`${state} Veteran Benefits`} />

          <div className="card-vm mt-8 max-w-2xl">
            <p className="text-base text-charcoal-400">
              State-specific programs for {state} are being compiled — check back soon. In the meantime, your
              state's official Department of Veterans Affairs (or equivalent agency) website is the most reliable
              source for tuition, employment, recreation, and property tax benefit programs specific to {state}.
            </p>
            <Link href="/benefits" className="btn-tertiary mt-6 inline-flex">
              ← Back to Benefits
            </Link>
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-charcoal-300">
            Veteran Millionaire is an independent educational and media platform, not affiliated with the U.S.
            Department of Veterans Affairs, Department of Defense, or any government agency. Nothing on this page is
            legal, tax, financial, or benefits advice.
          </p>
        </Container>
      </section>
    </main>
  );
}
