"use client";

import Link from "next/link";
import type { Discount } from "@/lib/types";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";
import StatusPill from "@/components/ui/StatusPill";

interface DiscountCardProps {
  discount: Discount;
}

export default function DiscountCard({ discount }: DiscountCardProps) {
  const lastVerified = discount.verificationDate
    ? new Date(discount.verificationDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="card-vm flex h-full flex-col">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-green">{discount.discountCategory}</p>
          <h3 className="mt-1 text-lg font-headline font-bold text-navy">{discount.brand}</h3>
        </div>
        <StatusPill status={discount.status} />
      </div>

      <p className="mb-3 text-sm font-semibold text-charcoal">{discount.offerTitle}</p>
      <p className="mb-4 flex-1 text-sm text-charcoal-400">{discount.eligibility}</p>

      <div className="mb-4 flex flex-wrap gap-2 text-xs text-charcoal-300">
        {discount.isOnline ? (
          <span className="rounded-full bg-navy-50 px-2.5 py-1 font-semibold text-navy-400">Online</span>
        ) : null}
        {discount.isInStore ? (
          <span className="rounded-full bg-navy-50 px-2.5 py-1 font-semibold text-navy-400">In-Store</span>
        ) : null}
        <span className="rounded-full bg-offwhite-300 px-2.5 py-1 font-semibold">
          {lastVerified ? `Last verified ${lastVerified}` : "Pending verification"}
        </span>
      </div>

      <Link
        href={`/discounts/${discount.slug}`}
        onClick={() => trackEvent(ANALYTICS_EVENTS.DISCOUNT_CLICK, { slug: discount.slug, brand: discount.brand })}
        className="btn-tertiary mt-auto"
      >
        Read More →
      </Link>
    </div>
  );
}
