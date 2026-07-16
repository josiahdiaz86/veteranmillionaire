import Link from "next/link";
import type { SideHustle } from "@/lib/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SideHustleCard from "@/components/content/SideHustleCard";

interface MakeMoneyProps {
  sideHustles: SideHustle[];
}

export default function MakeMoney({ sideHustles }: MakeMoneyProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Make Money"
            heading="Side Hustles Built Around Your Skills and Schedule"
            subhead="Realistic startup costs and timelines — no income promises, just an honest starting point."
          />
          <Link href="/make-money" className="btn-tertiary shrink-0">
            See All Side Hustles →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sideHustles.map((hustle) => (
            <SideHustleCard key={hustle.slug} sideHustle={hustle} />
          ))}
        </div>
      </Container>
    </section>
  );
}
