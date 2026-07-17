import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const SITE_URL = "https://veteranmillionaire.com";

/**
 * Visible breadcrumb nav plus a matching BreadcrumbList JSON-LD block.
 * `items` should NOT include "Home" — it's always prepended here. The
 * final item renders as plain text (current page), not a link.
 */
export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`.trim()}>
      <JsonLd data={breadcrumbJsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5 text-charcoal-300">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-charcoal">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-navy hover:underline">
                    {item.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
