"use client";

import { useState, type FormEvent } from "react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

/**
 * Mock discount submission form — no real backend yet. preventDefault +
 * local success state; fires ANALYTICS_EVENTS.DISCOUNT_SUBMISSION on
 * submit so this call site is ready to wire up to a real intake process.
 */
export default function DiscountSubmissionForm() {
  const [brand, setBrand] = useState("");
  const [offerDetails, setOfferDetails] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [submitterEmail, setSubmitterEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!brand || !offerDetails || !submitterEmail) return;
    trackEvent(ANALYTICS_EVENTS.DISCOUNT_SUBMISSION, { brand });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-vm">
        <p className="text-lg font-headline font-bold text-navy">Thanks for the tip.</p>
        <p className="mt-2 text-sm text-charcoal-400">
          Our editorial team reviews and verifies submissions before publishing — this one goes into the queue as
          "Needs Verification." We'll follow up at {submitterEmail} if we need more detail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="ds-brand" className="mb-1 block text-sm font-semibold text-charcoal">
          Brand / Retailer
        </label>
        <input
          id="ds-brand"
          type="text"
          required
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="ds-details" className="mb-1 block text-sm font-semibold text-charcoal">
          Offer details
        </label>
        <textarea
          id="ds-details"
          required
          rows={4}
          placeholder="What's the discount, and how do you redeem it?"
          value={offerDetails}
          onChange={(event) => setOfferDetails(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="ds-source" className="mb-1 block text-sm font-semibold text-charcoal">
          Source link (optional)
        </label>
        <input
          id="ds-source"
          type="url"
          placeholder="https://"
          value={sourceUrl}
          onChange={(event) => setSourceUrl(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="ds-email" className="mb-1 block text-sm font-semibold text-charcoal">
          Your email
        </label>
        <input
          id="ds-email"
          type="email"
          required
          value={submitterEmail}
          onChange={(event) => setSubmitterEmail(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit Discount
      </button>
    </form>
  );
}
