import Link from "next/link";
import NewsletterSignupForm from "@/components/content/NewsletterSignupForm";

const FOOTER_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Editorial Standards", href: "/editorial-standards" },
      { label: "Advertise", href: "/advertise" },
      { label: "Partner With Us", href: "/partner" },
    ],
  },
  {
    heading: "Contribute",
    links: [
      { label: "Submit a Discount", href: "/submit-discount" },
      { label: "Submit a Veteran Business", href: "/submit-business" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Mortgage Disclosures", href: "/mortgage-disclosures" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook Group", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-navy-100 bg-navy text-offwhite-200">
      <div className="container-vm py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-headline text-xl font-extrabold text-offwhite-100">Veteran Millionaire</p>
            <p className="mt-3 max-w-sm text-sm text-offwhite-300">
              Helping one million veterans save more, earn more, invest smarter, and build lasting wealth.
            </p>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-offwhite-300">
                Get the Free Weekly Brief
              </p>
              <NewsletterSignupForm source="footer" />
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-xs font-semibold text-offwhite-300 hover:text-offwhite-100"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-offwhite-300">
                {column.heading}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-offwhite-200 hover:text-offwhite-100">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-navy-400 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-offwhite-300">
            Veteran Millionaire is an independent educational and media platform. It is not affiliated with the U.S.
            Department of Veterans Affairs, Department of Defense, or any government agency. Financial, mortgage,
            tax, legal, and benefits information provided is educational and general in nature; consult a qualified
            professional or official government source for your specific situation.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-xs text-offwhite-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Veteran Millionaire. All rights reserved.</p>
            <p>Powered by JoeLendsToVets</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
