"use client";

import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

interface AffiliateLinkButtonProps {
  href: string;
  label: string;
  eventPayload?: Record<string, unknown>;
  className?: string;
}

/**
 * External offer link that fires an `affiliate_click` analytics event on
 * click. Used for discount "online link" buttons — these are potential
 * affiliate/lead links even though no affiliate program is active yet,
 * so the tracking call site is ready for when one is.
 */
export default function AffiliateLinkButton({ href, label, eventPayload, className = "" }: AffiliateLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackEvent(ANALYTICS_EVENTS.AFFILIATE_CLICK, eventPayload)}
      className={`btn-primary ${className}`.trim()}
    >
      {label}
    </a>
  );
}
