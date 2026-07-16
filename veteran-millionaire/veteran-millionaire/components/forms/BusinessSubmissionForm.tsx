"use client";

import { useState, type FormEvent } from "react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

/**
 * Mock veteran business directory submission form — no real backend yet.
 * preventDefault + local success state; fires
 * ANALYTICS_EVENTS.BUSINESS_SUBMISSION on submit.
 */
export default function BusinessSubmissionForm() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [isServiceDisabledVeteranOwned, setIsServiceDisabledVeteranOwned] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!businessName || !ownerName || !industry || !email) return;
    trackEvent(ANALYTICS_EVENTS.BUSINESS_SUBMISSION, { businessName, industry });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-vm">
        <p className="text-lg font-headline font-bold text-navy">Thanks for submitting {businessName}.</p>
        <p className="mt-2 text-sm text-charcoal-400">
          The Veteran Business Directory is opening soon. Our team reviews submissions before publishing — we'll
          follow up at {email} with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="bs-name" className="mb-1 block text-sm font-semibold text-charcoal">
          Business name
        </label>
        <input
          id="bs-name"
          type="text"
          required
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="bs-owner" className="mb-1 block text-sm font-semibold text-charcoal">
          Owner name
        </label>
        <input
          id="bs-owner"
          type="text"
          required
          value={ownerName}
          onChange={(event) => setOwnerName(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="bs-industry" className="mb-1 block text-sm font-semibold text-charcoal">
          Industry
        </label>
        <input
          id="bs-industry"
          type="text"
          required
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="bs-website" className="mb-1 block text-sm font-semibold text-charcoal">
          Website (optional)
        </label>
        <input
          id="bs-website"
          type="url"
          placeholder="https://"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="bs-email" className="mb-1 block text-sm font-semibold text-charcoal">
          Your email
        </label>
        <input
          id="bs-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="bs-sdvosb"
          type="checkbox"
          checked={isServiceDisabledVeteranOwned}
          onChange={(event) => setIsServiceDisabledVeteranOwned(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-navy-200"
        />
        <label htmlFor="bs-sdvosb" className="text-xs text-charcoal-400">
          This business is Service-Disabled Veteran-Owned (SDVOSB), to the best of my knowledge. We do not verify
          SDVOSB/VOSB certification status — that's handled by the Small Business Administration and, for some
          programs, the VA's Center for Verification and Evaluation.
        </label>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit Business
      </button>
    </form>
  );
}
