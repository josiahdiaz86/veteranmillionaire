import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CommunitySection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="card-vm flex flex-col items-start gap-6 bg-green-50 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          eyebrow="Community"
          heading="Build Wealth With Veterans Who Are Doing the Same."
          subhead="Trade notes on discounts, real estate, and side hustles with people who get the military-to-civilian money transition."
          className="max-w-xl"
        />

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#" className="btn-primary">
            Join the Veteran Millionaire Facebook Group
          </a>
          <Link href="/join" className="btn-secondary">
            Become a Free Member
          </Link>
        </div>
      </Container>
    </section>
  );
}
