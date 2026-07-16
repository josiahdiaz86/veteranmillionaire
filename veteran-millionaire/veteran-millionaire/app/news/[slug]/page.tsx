import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArticleCard from "@/components/content/ArticleCard";
import JsonLd from "@/components/seo/JsonLd";
import { articles } from "@/lib/data/articles";
import { authors, categories, tags as allTags } from "@/lib/data/taxonomy";

const SITE_URL = "https://veteranmillionaire.com";

export function generateStaticParams(): { slug: string }[] {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: article.seoTitle,
    description: article.metaDescription,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  const author = authors.find((a) => a.slug === article.author);
  const category = categories.find((c) => c.slug === article.category);
  const articleTags = allTags.filter((tag) => article.tags.includes(tag.slug));
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    author: {
      "@type": "Person",
      name: author ? author.name : "Veteran Millionaire Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Veteran Millionaire",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/news/${article.slug}`,
  };

  return (
    <main>
      <JsonLd data={articleJsonLd} />

      <section className="bg-offwhite-200 py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "News", href: "/news" },
              { label: article.title, href: `/news/${article.slug}` },
            ]}
            className="mb-6"
          />

          {category ? <p className="eyebrow-vm mb-2">{category.name}</p> : null}
          <h1 className="text-3xl sm:text-4xl">{article.title}</h1>
          {article.subhead ? <p className="mt-4 text-lg text-charcoal-400">{article.subhead}</p> : null}

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-charcoal-300">
            <span>{author ? author.name : "Veteran Millionaire Editorial Team"}</span>
            <span>{article.readTimeMinutes} min read</span>
            <span>Published {formatDate(article.publishDate)}</span>
            {article.updatedDate !== article.publishDate ? <span>Updated {formatDate(article.updatedDate)}</span> : null}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-charcoal-400">{article.body}</p>

          {articleTags.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-2">
              {articleTags.map((tag) => (
                <span key={tag.slug} className="rounded-full bg-offwhite-300 px-3 py-1 text-xs font-semibold text-charcoal-400">
                  {tag.name}
                </span>
              ))}
            </div>
          ) : null}

          {article.sourceLinks.length > 0 ? (
            <div className="mt-10 border-t border-navy-100 pt-6">
              <h2 className="text-lg">Sources</h2>
              <ul className="mt-3 space-y-2">
                {article.sourceLinks.map((source) => (
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
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-offwhite-200 py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related" heading="More From This Category" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
