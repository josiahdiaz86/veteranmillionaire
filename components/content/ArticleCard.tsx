import Link from "next/link";
import type { Article } from "@/lib/types";
import { authors, categories } from "@/lib/data/taxonomy";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const author = authors.find((a) => a.slug === article.author);
  const category = categories.find((c) => c.slug === article.category);
  const updated = new Date(article.updatedDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/news/${article.slug}`} className="card-vm flex h-full flex-col no-underline">
      <ImagePlaceholder alt={article.heroImageAlt} aspect="video" className="mb-4" />
      {category ? <p className="eyebrow-vm mb-2">{category.name}</p> : null}
      <h3 className="mb-2 text-lg font-headline font-bold text-navy">{article.title}</h3>
      <p className="mb-4 flex-1 text-sm text-charcoal-400">{article.summary}</p>
      <div className="mt-auto flex items-center justify-between text-xs text-charcoal-300">
        <span>{author ? author.name : "Veteran Millionaire"} · {article.readTimeMinutes} min read</span>
        <span>Updated {updated}</span>
      </div>
    </Link>
  );
}
