"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";
import { US_STATES } from "@/lib/data/states";

const PURCHASE_PRICE_RANGES = [
  "Under $200,000",
  "$200,000 – $349,999",
  "$350,000 – $499,999",
  "$500,000 – $749,999",
  "$750,000+",
];

const TIMELINES = ["0-3 months", "3-6 months", "6-12 months", "Just researching"];

const VA_ELIGIBILITY_OPTIONS = ["Confirmed eligible", "Think I'm eligible", "Not sure", "Not yet eligible"];

const CREDIT_RANGES = ["740+", "700-739", "660-699", "620-659", "Below 620", "Not sure"];

interface MortgageInquiryFormProps {
  source?: string;
  className?: string;
}

/**
 * Mortgage inquiry / lead-gen form. Mock submission only — preventDefault,
 * no real backend, no real lender routing yet. The disclaimer block below
 * is a PLACEHOLDER: NMLS number, licensing language, and Equal Housing
 * Opportunity notice all need to be supplied and reviewed by
 * JoeLendsToVets compliance/legal before this form goes live.
 */
export default function MortgageInquiryForm({ source = "mortgage_form", className = "" }: MortgageInquiryFormProps) {
  const [purpose, setPurpose] = useState<"Purchase" | "Refinance">("Purchase");
  const [state, setState] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [timeline, setTimeline] = useState("");
  const [vaEligibility, setVaEligibility] = useState("");
  const [creditRange, setCreditRange] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hasStartedRef = useRef(false);

  function handleFirstInteraction() {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    trackEvent(ANALYTICS_EVENTS.MORTGAGE_FORM_STARTED, { source });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!state || !purchasePrice || !timeline || !vaEligibility || !creditRange || !name || !email || !phone || !consent) {
      return;
    }
    trackEvent(ANALYTICS_EVENTS.MORTGAGE_FORM_COMPLETED, { source, purpose, state, timeline, vaEligibility });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-vm">
        <p className="text-lg font-headline font-bold text-navy">Thanks, {name.split(" ")[0] || "there"}.</p>
        <p className="mt-2 text-sm text-charcoal-400">
          Someone from the JoeLendsToVets team will follow up with next steps. This is not a commitment to lend and
          does not guarantee approval or terms.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`.trim()}>
      <div>
        <span className="mb-1 block text-sm font-semibold text-charcoal">Purpose</span>
        <div className="flex gap-4">
          {(["Purchase", "Refinance"] as const).map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-charcoal">
              <input
                type="radio"
                name="mortgage-purpose"
                value={option}
                checked={purpose === option}
                onFocus={handleFirstInteraction}
                onChange={() => setPurpose(option)}
                className="h-4 w-4 border-navy-200"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="mi-state" className="mb-1 block text-sm font-semibold text-charcoal">
          State
        </label>
        <select
          id="mi-state"
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
        <label htmlFor="mi-price" className="mb-1 block text-sm font-semibold text-charcoal">
          Estimated purchase price
        </label>
        <select
          id="mi-price"
          required
          value={purchasePrice}
          onFocus={handleFirstInteraction}
          onChange={(event) => setPurchasePrice(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option value="" disabled>
            Select a range
          </option>
          {PURCHASE_PRICE_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mi-timeline" className="mb-1 block text-sm font-semibold text-charcoal">
          Timeline
        </label>
        <select
          id="mi-timeline"
          required
          value={timeline}
          onFocus={handleFirstInteraction}
          onChange={(event) => setTimeline(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option value="" disabled>
            Select a timeline
          </option>
          {TIMELINES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mi-va-eligibility" className="mb-1 block text-sm font-semibold text-charcoal">
          VA eligibility status
        </label>
        <select
          id="mi-va-eligibility"
          required
          value={vaEligibility}
          onFocus={handleFirstInteraction}
          onChange={(event) => setVaEligibility(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option value="" disabled>
            Select your status
          </option>
          {VA_ELIGIBILITY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mi-credit" className="mb-1 block text-sm font-semibold text-charcoal">
          Credit range
        </label>
        <select
          id="mi-credit"
          required
          value={creditRange}
          onFocus={handleFirstInteraction}
          onChange={(event) => setCreditRange(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        >
          <option value="" disabled>
            Select a range
          </option>
          {CREDIT_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mi-name" className="mb-1 block text-sm font-semibold text-charcoal">
          Name
        </label>
        <input
          id="mi-name"
          type="text"
          required
          value={name}
          onFocus={handleFirstInteraction}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="mi-email" className="mb-1 block text-sm font-semibold text-charcoal">
          Email
        </label>
        <input
          id="mi-email"
          type="email"
          required
          value={email}
          onFocus={handleFirstInteraction}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div>
        <label htmlFor="mi-phone" className="mb-1 block text-sm font-semibold text-charcoal">
          Phone
        </label>
        <input
          id="mi-phone"
          type="tel"
          required
          value={phone}
          onFocus={handleFirstInteraction}
          onChange={(event) => setPhone(event.target.value)}
          className="w-full rounded-vm border border-navy-100 bg-offwhite-100 px-4 py-3 text-sm text-charcoal"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="mi-consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-navy-200"
        />
        {/* PLACEHOLDER consent language — requires real TCPA/compliance review before launch. */}
        <label htmlFor="mi-consent" className="text-xs text-charcoal-400">
          By submitting this form, I agree that JoeLendsToVets and its partners may contact me by phone (including
          autodialed or prerecorded calls/texts) and email about mortgage options at the number and email provided.
          Consent is not a condition of purchase. Message and data rates may apply. I can opt out at any time.
          (Placeholder consent language — requires legal/compliance review before this form is used with real leads.)
        </label>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Talk to a VA Loan Expert
      </button>

      {/* PLACEHOLDER mortgage disclosure block — real NMLS ID, state licensing list, and
          Equal Housing Opportunity language must be supplied and reviewed before launch. */}
      <div className="rounded-vm border border-navy-100 bg-offwhite-200 p-4 text-xs leading-relaxed text-charcoal-400">
        <p className="font-semibold text-charcoal">Mortgage Disclosures (Placeholder)</p>
        <p className="mt-1">
          JoeLendsToVets — NMLS #000000 (placeholder). Equal Housing Opportunity. Licensed where required by law; not
          licensed or offering loans in all states. This is not a commitment to lend and does not guarantee approval,
          rate, or terms. This placeholder block must be replaced with verified licensing and NMLS information before
          this form is used in production.
        </p>
      </div>
    </form>
  );
}
