"use client";

import { useState, type FormEvent } from "react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

interface SponsorInquiryFormProps {
  source?: string;
  className?: string;
}

/**
 * Simple sponsor/advertiser inquiry form. Mock submission only — no real
 * backend yet. preventDefault + local success state; fires
 * ANALYTICS_EVENTS.SPONSOR_INQUIRY on submit.
 */
export default function SponsorInquiryForm({ source = "sponsor_inquiry_form", className = "" }: SponsorInquiryFormProps) {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!company || !name || !email) return;
    trackEvent(ANALYTICS_EVENTS.SPONSOR_INQUIRY, { source, company });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`card-vm ${className}`.trim()}>
        <p className="text-lg font-headline font-bold text-navy">Thanks, {name.split(" ")[0] || "there"}.</p>
        <p className="mt-2 text-sm text-charcoal-400">
          We'll follow up at {email} about next steps. This form doesn't create a binding agreement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`.trim()}>
      <div>
        <label htmlFor="si-company" className="mb-1 block text-sm font-semibold text-charcoal">
          Company / Brand
        </label>
        <input
          id="si-company"
          type="text"
          required
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="si-name" className="mb-1 block text-sm font-semibold text-charcoal">
          Your name
        </label>
        <input
          id="si-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="si-email" className="mb-1 block text-sm font-semibold text-charcoal">
          Email
        </label>
        <input
          id="si-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="si-message" className="mb-1 block text-sm font-semibold text-charcoal">
          What are you interested in?
        </label>
        <textarea
          id="si-message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Inquiry
      </button>
    </form>
  );
}
