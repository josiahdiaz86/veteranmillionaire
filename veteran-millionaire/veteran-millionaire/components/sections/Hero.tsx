"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

/**
 * Homepage hero. Primary CTA (Join Free) links to /join and fires
 * membership_signup_started with source: "hero" on click. That onClick
 * handler is why this section is a client component.
 */
export default function Hero() {
  return (
    <section className="bg-offwhite-200">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow-vm mb-4">Veteran Millionaire</p>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Build More With the Benefits You Earned.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-charcoal-400">
            Veteran discounts, real estate education, business ideas, benefit updates, investing resources, and a
            community built to help veterans create lasting wealth.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join"
              onClick={() => trackEvent(ANALYTICS_EVENTS.MEMBERSHIP_SIGNUP_STARTED, { source: "hero" })}
              className="btn-primary"
            >
              Join Free
            </Link>
            <Link href="/discounts" className="btn-secondary">
              Explore Veteran Discounts
            </Link>
          </div>

          <p className="mt-4 text-sm text-charcoal-300">
            Free membership. No credit card. Built for veterans and military families.
          </p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-charcoal-300">
            Powered by JoeLendsToVets
          </p>
        </div>

        <div className="rounded-vm bg-navy p-8 text-offwhite-100 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brass-200">This week in the Brief</p>
          <ul className="mt-4 space-y-3 text-sm text-offwhite-200">
            <li>27 verified veteran discounts across retail, travel, and services.</li>
            <li>A plain-language update on GI Bill transferability rules.</li>
            <li>3 upcoming real estate classes, including a free VA homebuyer 101 session.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
