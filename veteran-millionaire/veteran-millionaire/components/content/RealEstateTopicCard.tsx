import Link from "next/link";
import type { MortgageResourceTopic } from "@/lib/types";

interface RealEstateTopicCardProps {
  topic: MortgageResourceTopic;
}

export default function RealEstateTopicCard({ topic }: RealEstateTopicCardProps) {
  const preview = topic.keyTakeaways.slice(0, 2);

  return (
    <Link href={`/real-estate/${topic.slug}`} className="card-vm flex h-full flex-col no-underline">
      <p className="eyebrow-vm mb-2">{topic.topicArea}</p>
      <h3 className="mb-2 text-lg font-headline font-bold text-navy">{topic.title}</h3>
      <p className="mb-4 flex-1 text-sm text-charcoal-400">{topic.summary}</p>

      {preview.length > 0 ? (
        <ul className="mb-4 space-y-1 text-xs text-charcoal-300">
          {preview.map((takeaway) => (
            <li key={takeaway} className="flex gap-2">
              <span aria-hidden="true" className="text-green">•</span>
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <span className="btn-tertiary mt-auto">Read More →</span>
    </Link>
  );
}
