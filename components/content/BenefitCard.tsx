import Link from "next/link";
import type { BenefitResource } from "@/lib/types";

interface BenefitCardProps {
  benefit: BenefitResource;
}

export default function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <Link href={`/benefits/${benefit.slug}`} className="card-vm flex h-full flex-col no-underline">
      <p className="eyebrow-vm mb-2">{benefit.benefitType}</p>
      <h3 className="mb-2 text-lg font-headline font-bold text-navy">{benefit.title}</h3>
      <p className="mb-4 flex-1 text-sm text-charcoal-400">{benefit.summary}</p>
      <p className="mb-4 text-xs text-charcoal-300">Administered by {benefit.administeredBy}</p>
      <span className="btn-tertiary mt-auto">Read More →</span>
    </Link>
  );
}
