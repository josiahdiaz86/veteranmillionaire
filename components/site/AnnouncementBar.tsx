import Link from "next/link";

/**
 * Top-of-page announcement bar. Visual only for now (no dismiss state) —
 * spec allows a simple client dismiss later if needed, but a static bar
 * keeps this a server component and avoids unnecessary client JS.
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-navy text-offwhite-100">
      <div className="container-vm flex flex-wrap items-center justify-center gap-2 py-2 text-center text-xs sm:text-sm">
        <span>
          New this week: 27 verified veteran discounts, 4 benefit updates, and 3 real estate classes.
        </span>
        <Link href="/news" className="font-semibold underline underline-offset-4 hover:text-brass-200">
          See What's New →
        </Link>
      </div>
    </div>
  );
}
