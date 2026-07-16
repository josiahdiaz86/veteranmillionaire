"use client";

import { useState, type FormEvent } from "react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

interface NewsletterSignupFormProps {
  source?: string;
  className?: string;
}

/**
 * Compact email capture form. Mock submission only — no real backend yet.
 * preventDefault + local success state; trackEvent fires on submit so the
 * call site is ready to wire up to a real provider later.
 */
export default function NewsletterSignupForm({ source = "newsletter", className = "" }: NewsletterSignupFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    trackEvent(ANALYTICS_EVENTS.NEWSLETTER_SIGNUP, { source, email });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={`text-sm font-semibold text-green ${className}`.trim()}>
        You're on the list. Watch for the next Veteran Millionaire Brief in your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row ${className}`.trim()}>
      <label htmlFor={`newsletter-email-${source}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-email-${source}`}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@email.com"
        className="w-full flex-1 rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-300"
      />
      <button type="submit" className="btn-primary shrink-0">
        Get the Free Weekly Brief
      </button>
    </form>
  );
}
