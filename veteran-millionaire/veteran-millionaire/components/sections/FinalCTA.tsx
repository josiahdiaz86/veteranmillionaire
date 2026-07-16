import Link from "next/link";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  return (
    <section className="bg-green-50 py-16 sm:py-24">
      <Container className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl">You Earned the Benefits. Now Build With Them.</h2>
        <p className="mt-4 text-base text-charcoal-400 sm:text-lg">
          Join Veteran Millionaire for free and get discounts, education, opportunities, and a community focused on
          helping veterans build lasting wealth.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/join" className="btn-primary">
            Join Free
          </Link>
          <Link href="/discounts" className="btn-secondary">
            Explore the Website
          </Link>
        </div>
      </Container>
    </section>
  );
}
