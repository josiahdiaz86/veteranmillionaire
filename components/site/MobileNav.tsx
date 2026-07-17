"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
}

/**
 * Mobile hamburger menu. Client component so it can hold open/close
 * state. Accessible: aria-expanded on the toggle button, aria-label on
 * both the toggle and the panel, and Escape closes the menu. No focus
 * trap (kept simple per spec), but focus returns naturally since the
 * toggle button remains in the DOM.
 */
export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-vm border border-navy-100 text-navy"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-[var(--vm-header-offset,0px)] bottom-0 z-40 overflow-y-auto bg-offwhite-100 px-5 py-6"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-vm px-3 py-3 text-base font-semibold text-navy hover:bg-navy-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-navy-100 pt-6">
            <Link
              href="/talk-to-joe"
              onClick={() => setIsOpen(false)}
              className="btn-secondary w-full"
            >
              Talk to a VA Loan Expert
            </Link>
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
            >
              Join Free
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
