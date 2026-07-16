"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedExternalLinkProps {
  href: string;
  eventName: string;
  eventPayload?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
}

/**
 * Generic outbound-link wrapper that fires a named analytics event on
 * click before navigating. Used for links that don't have a real
 * destination yet (e.g. the Facebook Group, which uses "#" until the
 * group URL exists) but still need their click tracked consistently.
 */
export default function TrackedExternalLink({
  href,
  eventName,
  eventPayload,
  className = "",
  children,
}: TrackedExternalLinkProps) {
  return (
    <a href={href} onClick={() => trackEvent(eventName, eventPayload)} className={className}>
      {children}
    </a>
  );
}
