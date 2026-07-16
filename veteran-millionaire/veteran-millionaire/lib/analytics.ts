/**
 * Analytics event tracking for Veteran Millionaire.
 *
 * trackEvent() is the single call site every component should use. It
 * logs to the console (original phase 1 behavior, preserved so nothing
 * breaks) and fans out to a handful of guarded integration stubs below.
 * Each stub is a no-op until the corresponding script (GTM, gtag.js,
 * Meta Pixel) is actually loaded on the page — none of them are wired
 * up yet, so this file is safe to ship as-is.
 */

/**
 * Canonical event name constants. Components should import and use
 * these instead of passing raw string literals to trackEvent(), so a
 * typo in an event name is a compile error, not a silent analytics gap.
 */
export const ANALYTICS_EVENTS = {
  MEMBERSHIP_SIGNUP_STARTED: "membership_signup_started",
  MEMBERSHIP_SIGNUP_COMPLETED: "membership_signup_completed",
  NEWSLETTER_SIGNUP: "newsletter_signup",
  FACEBOOK_GROUP_CLICK: "facebook_group_click",
  DISCOUNT_CLICK: "discount_click",
  AFFILIATE_CLICK: "affiliate_click",
  MORTGAGE_CTA_CLICK: "mortgage_cta_click",
  MORTGAGE_FORM_STARTED: "mortgage_form_started",
  MORTGAGE_FORM_COMPLETED: "mortgage_form_completed",
  GUIDE_DOWNLOAD: "guide_download",
  COURSE_REGISTRATION: "course_registration",
  SPONSOR_INQUIRY: "sponsor_inquiry",
  BUSINESS_SUBMISSION: "business_submission",
  DISCOUNT_SUBMISSION: "discount_submission",
} as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Google Tag Manager integration stub. Pushes an event onto
 * window.dataLayer when GTM's snippet has initialized it. No-op
 * (and safe) if GTM isn't loaded, e.g. in local dev.
 */
function pushToDataLayer(name: string, payload?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...payload });
  }
}

/**
 * GA4 integration stub. Fires a gtag() event call when gtag.js has been
 * loaded on the page. No-op otherwise.
 */
function sendToGA4(name: string, payload?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }
}

/**
 * Meta Pixel integration stub. Fires an fbq() trackCustom call when the
 * Meta Pixel snippet has been loaded on the page. No-op otherwise.
 */
function sendToMetaPixel(name: string, payload?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", name, payload);
  }
}

// TODO(analytics): posthog-js is not yet an installed dependency (it is not
// in package.json), so do NOT import it here — that would break the build.
// Once it is added, wire it up like this:
//
//   import posthog from "posthog-js";
//   ...
//   if (typeof window !== "undefined" && posthog.__loaded) {
//     posthog.capture(name, payload);
//   }

/**
 * Fire an analytics event. Safe to call from any client component;
 * no-ops on the server. Every integration below is independently
 * guarded, so trackEvent() never throws even if no provider is loaded.
 */
export function trackEvent(name: string, payload?: Record<string, unknown>): void {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[analytics]", name, payload);
  }

  pushToDataLayer(name, payload);
  sendToGA4(name, payload);
  sendToMetaPixel(name, payload);
}
