"use client";

import { useMemo, useState } from "react";
import type { Discount, DiscountCategory } from "@/lib/types";
import DiscountCard from "@/components/content/DiscountCard";

interface DiscountFilterBarProps {
  discounts: Discount[];
}

/**
 * Client-side category filter for a list of discounts. Filter labels map
 * to the DiscountCategory union in lib/types.ts; "All" shows everything.
 */
const FILTERS: { label: string; value: DiscountCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Retail", value: "Retail & Apparel" },
  { label: "Travel", value: "Travel" },
  { label: "Home Improvement", value: "Home & Hardware" },
  { label: "Automotive", value: "Automotive" },
  { label: "Restaurants", value: "Food & Dining" },
  { label: "Entertainment", value: "Entertainment" },
  { label: "Health & Wellness", value: "Health & Wellness" },
  { label: "Services", value: "Services" },
];

export default function DiscountFilterBar({ discounts }: DiscountFilterBarProps) {
  const [activeFilter, setActiveFilter] = useState<DiscountCategory | "All">("All");

  const filteredDiscounts = useMemo(() => {
    if (activeFilter === "All") return discounts;
    return discounts.filter((discount) => discount.discountCategory === activeFilter);
  }, [discounts, activeFilter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter discounts by category">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                isActive
                  ? "border-navy bg-navy text-offwhite-100"
                  : "border-navy-100 bg-offwhite-100 text-navy hover:border-navy"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {filteredDiscounts.length === 0 ? (
        <p className="text-sm text-charcoal-400">No discounts in this category yet — check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDiscounts.map((discount) => (
            <DiscountCard key={discount.slug} discount={discount} />
          ))}
        </div>
      )}
    </div>
  );
}
