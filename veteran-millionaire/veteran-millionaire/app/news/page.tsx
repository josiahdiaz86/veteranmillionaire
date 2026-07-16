import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/content/ArticleCard";
import NewsletterSignupForm from "@/components/content/NewsletterSignupForm";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Veteran News & Editorial",
  description:
    "Timely, plain-language coverage of veteran-relevant financial and policy news — benefits, real estate, credit, and business, always pointing back to official sources.",
};

export default function NewsPage() {
  return (
    <main>
      <section className="bg-offwhite-200 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="News"
            heading="Veteran Money & Benefits, Explained"
            subhead="Editorial coverage of benefits, real estate, credit, and business news relevant to veterans — written to be useful, not alarmist, and always pointing back to official sources."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-offwhite-100 sm:py-20">
        <Container className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl text-offwhite-100 sm:text-4xl">Get the Free Weekly Brief</h2>
          <p className="mt-4 text-base text-offwhite-300">
            The stories that matter, in your inbox once a week — no daily noise.
          </p>
          <div className="mt-8">
            <NewsletterSignupForm source="news_page" className="mx-auto max-w-md" />
          </div>
        </Container>
      </section>
    </main>
  );
}
