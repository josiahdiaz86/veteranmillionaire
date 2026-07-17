import Link from "next/link";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import MobileNav from "@/components/site/MobileNav";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Discounts", href: "/discounts" },
  { label: "Benefits", href: "/benefits" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Make Money", href: "/make-money" },
  { label: "Business", href: "/business" },
  { label: "Jobs", href: "/jobs" },
  { label: "News", href: "/news" },
  { label: "Community", href: "/community" },
  { label: "Free Membership", href: "/join" },
];

/**
 * Site header: announcement bar + logo/wordmark + primary nav + mortgage
 * CTA. Server component — the only interactive piece (mobile menu) is
 * isolated in the MobileNav client component.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-offwhite-100/95 backdrop-blur supports-[backdrop-filter]:bg-offwhite-100/80">
      <AnnouncementBar />
      <div className="container-vm flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-headline text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
            Veteran Millionaire
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-charcoal-300">
            Powered by JoeLendsToVets
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-charcoal hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/talk-to-joe" className="btn-secondary px-4 py-2.5 text-xs">
            Talk to a VA Loan Expert
          </Link>
          <Link href="/join" className="text-sm font-semibold text-navy hover:underline">
            Join Free
          </Link>
        </div>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
