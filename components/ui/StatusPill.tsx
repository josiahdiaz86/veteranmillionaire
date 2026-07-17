import type { ContentStatus } from "@/lib/types";

interface StatusPillProps {
  status: ContentStatus;
  className?: string;
}

/**
 * Colored pill representing an editorial ContentStatus value. Mapping:
 * Published / Approved   -> green (verified/live)
 * Needs Verification     -> brass/amber (needs a check before trusting)
 * Expired / Archived     -> muted alert red (no longer current)
 * Draft / Needs Compliance Review -> charcoal (not public-ready)
 */
const STATUS_STYLES: Record<ContentStatus, string> = {
  Published: "bg-green-50 text-green-700 border border-green-200",
  Approved: "bg-green-50 text-green-700 border border-green-200",
  "Needs Verification": "bg-brass-50 text-brass-700 border border-brass-200",
  Expired: "bg-alert-50 text-alert-600 border border-alert-200",
  Archived: "bg-alert-50 text-alert-600 border border-alert-200",
  Draft: "bg-charcoal-50 text-charcoal-500 border border-charcoal-100",
  "Needs Compliance Review": "bg-charcoal-50 text-charcoal-500 border border-charcoal-100",
};

const STATUS_LABELS: Record<ContentStatus, string> = {
  Published: "Verified",
  Approved: "Verified",
  "Needs Verification": "Needs Verification",
  Expired: "Expired",
  Archived: "Archived",
  Draft: "Draft",
  "Needs Compliance Review": "Under Review",
};

export default function StatusPill({ status, className = "" }: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[status]} ${className}`.trim()}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
