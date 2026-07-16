import Link from "next/link";
import type { SideHustle } from "@/lib/types";

interface SideHustleCardProps {
  sideHustle: SideHustle;
}

const DIFFICULTY_STYLES: Record<SideHustle["difficulty"], string> = {
  Low: "bg-green-50 text-green-700 border border-green-200",
  Medium: "bg-brass-50 text-brass-700 border border-brass-200",
  High: "bg-alert-50 text-alert-600 border border-alert-200",
};

export default function SideHustleCard({ sideHustle }: SideHustleCardProps) {
  return (
    <Link href={`/make-money/${sideHustle.slug}`} className="card-vm flex h-full flex-col no-underline">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-headline font-bold text-navy">{sideHustle.title}</h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${DIFFICULTY_STYLES[sideHustle.difficulty]}`}
        >
          {sideHustle.difficulty} difficulty
        </span>
      </div>

      <p className="mb-4 flex-1 text-sm text-charcoal-400">{sideHustle.summary}</p>

      <dl className="mb-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <dt className="font-semibold uppercase tracking-wide text-charcoal-300">Startup Cost</dt>
          <dd className="text-charcoal">{sideHustle.startupCostRange}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-wide text-charcoal-300">First Revenue</dt>
          <dd className="text-charcoal">{sideHustle.timeToFirstRevenue}</dd>
        </div>
      </dl>

      {sideHustle.partTimeFriendly ? (
        <p className="mb-4 text-xs font-semibold text-green">Part-time friendly</p>
      ) : null}

      <span className="btn-tertiary mt-auto">Read More →</span>
    </Link>
  );
}
