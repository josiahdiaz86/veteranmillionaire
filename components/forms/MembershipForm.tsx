"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";
import { US_STATES } from "@/lib/data/states";

const BRANCHES = [
  "Army",
  "Navy",
  "Air Force",
  "Marine Corps",
  "Coast Guard",
  "Space Force",
  "National Guard",
  "Reserve",
  "Family Member / Other",
];

const INTERESTS = [
  "Buying a Home",
  "Real Estate Investing",
  "Veteran Discounts",
  "Starting a Business",
  "Side Hustles",
  "Benefits",
  "Jobs and Career",
  "Credit Improvement",
];

interface MembershipFormProps {
  source?: string;
  className?: string;
}

/**
 * Free membership signup form. Mock submission only — preventDefault,
 * no real backend yet. Fires membership_signup_started once on first
 * field interaction, and membership_signup_completed on submit.
 */
export default function MembershipForm({ source = "membership_form", className = "" }: MembershipFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [branch, setBranch] = useState("");
  const [interest, setInterest] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hasStartedRef = useRef(false);

  function handleFirstInteraction() {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    trackEvent(ANALYTICS_EVENTS.MEMBERSHIP_SIGNUP_STARTED, { source });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!firstName || !email || !state || !branch || !interest || !consent) return;
    trackEvent(ANALYTICS_EVENTS.MEMBERSHIP_SIGNUP_COMPLETED, { source, state, branch, interest });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`card-vm ${className}`.trim()}>
        <p className="text-lg font-headline font-bold text-navy">You're in, {firstName}.</p>
        <p className="mt-2 text-sm text-charcoal-400">
          Check your inbox for a welcome email with your first discount alerts and benefit updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`.trim()}>
      <div>
        <label htmlFor="mf-first-name" className="mb-1 block text-sm font-semibold text-charcoal">
          First name
        </label>
        <input
          id="mf-first-name"
          type="text"
          required
          value={firstName}
          onFocus={handleFirstInteraction}
          onChange={(event) => setFirstName(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="mf-email" className="mb-1 block text-sm font-semibold text-charcoal">
          Email
        </label>
        <input
          id="mf-email"
          type="email"
          required
          value={email}
          onFocus={handleFirstInteraction}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="mf-state" className="mb-1 block text-sm font-semibold text-charcoal">
          State
        </label>
        <select
          id="mf-state"
          required
          value={state}
          onFocus={handleFirstInteraction}
          onChange={(event) => setState(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option value="" disabled>
            Select your state
          </option>
          {US_STATES.map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mf-branch" className="mb-1 block text-sm font-semibold text-charcoal">
          Branch of service
        </label>
        <select
          id="mf-branch"
          required
          value={branch}
          onFocus={handleFirstInteraction}
          onChange={(event) => setBranch(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option value="" disabled>
            Select branch of service
          </option>
          {BRANCHES.map((branchName) => (
            <option key={branchName} value={branchName}>
              {branchName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mf-interest" className="mb-1 block text-sm font-semibold text-charcoal">
          Primary interest
        </label>
        <select
          id="mf-interest"
          required
          value={interest}
          onFocus={handleFirstInteraction}
          onChange={(event) => setInterest(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option value="" disabled>
            Select your primary interest
          </option>
          {INTERESTS.map((interestName) => (
            <option key={interestName} value={interestName}>
              {interestName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="mf-consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-navy-200"
        />
        <label htmlFor="mf-consent" className="text-xs text-charcoal-400">
          I agree to receive emails from Veteran Millionaire, including weekly discount alerts and benefit updates.
          I can unsubscribe anytime. This is not a request for credit and does not enroll me in any mortgage
          program.
        </label>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Join Veteran Millionaire Free
      </button>
    </form>
  );
}
