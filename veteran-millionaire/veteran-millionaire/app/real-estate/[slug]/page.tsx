import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusPill from "@/components/ui/StatusPill";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RealEstateTopicCard from "@/components/content/RealEstateTopicCard";
import { realEstateTopics } from "@/lib/data/realEstateTopics";

export function generateStaticParams(): { slug: string }[] {
  return realEstateTopics.map((topic) => ({ slug: topic.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = realEstateTopics.find((t) => t.slug === params.slug);
  if (!topic) {
    return { title: "Topic Not Found" };
  }
  return {
    title: topic.seoTitle,
    description: topic.metaDescription,
  };
}

export default function RealEstateTopicPage({ params }: { params: { slug: string } }) {
  const topic = realEstateTopics.find((t) => t.slug === params.slug);
  if (!topic) {
    notFound();
  }

  const related = realEstateTopics.filter((t) => t.slug !== topic.slug).slice(0, 3);

  return (
    <main>
      <section className="bg-offwhite-200 py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Real Estate", href: "/real-estate" },
              { label: topic.title, href: `/real-estate/${topic.slug}` },
            ]}
            className="mb-6"
          />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow-vm mb-2">{topic.topicArea}</p>
              <h1 className="text-3xl sm:text-4xl">{topic.title}</h1>
              <p className="mt-4 max-w-2xl text-base text-charcoal-400">{topic.summary}</p>
            </div>
            <StatusPill status={topic.status} />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-xl">Overview</h2>
              <p className="mt-3 text-base text-charcoal-400">{topic.body}</p>
            </div>

            <div>
              <h2 className="text-xl">Key Takeaways</h2>
              <ul className="mt-3 space-y-2">
                {topic.keyTakeaways.map((takeaway) => (
                  <li key={takeaway} className="flex items-start gap-2 text-base text-charcoal-400">
                    <span aria-hidden="true" className="mt-1 text-green">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {topic.sourceLinks.length > 0 ? (
              <div>
                <h2 className="text-xl">Sources</h2>
                <ul className="mt-3 space-y-2">
                  {topic.sourceLinks.map((source) => (
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
            <div className="card-vm bg-navy text-offwhite-100">
              <p className="text-base font-headline font-bold text-offwhite-100">Have questions about your situation?</p>
              <p className="mt-2 text-sm text-offwhite-300">
                Talk to Joe and the JoeLendsToVets team about how this applies to your specific numbers.
              </p>
              <Link href="/talk-to-joe" className="btn-primary mt-4 bg-brass-500 hover:bg-brass-600">
                Talk to Joe About a VA Loan
              </Link>
            </div>

            <div className="card-vm bg-offwhite-200">
              <p className="text-xs leading-relaxed text-charcoal-300">
                This page is educational and general in nature, not financial, tax, legal, or mortgage advice, and
                does not represent a commitment to lend. Confirm your specific situation with a licensed loan
                officer.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-offwhite-200 py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related" heading="More Real Estate Topics" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedTopic) => (
                <RealEstateTopicCard key={relatedTopic.slug} topic={relatedTopic} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
