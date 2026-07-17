import Container from "@/components/ui/Container";

const VALUE_ITEMS = [
  {
    title: "Save Money",
    description:
      "Verified veteran and military discounts across retail, travel, and everyday services — checked by editorial, not just scraped from a list.",
  },
  {
    title: "Buy Real Estate",
    description:
      "Straight talk on VA home loans, first-time buying, and house hacking — education first, sales pitch never.",
  },
  {
    title: "Make More Money",
    description:
      "Realistic side hustles and career moves built around skills and schedules from military service.",
  },
  {
    title: "Maximize Benefits",
    description:
      "Plain-language breakdowns of disability compensation, GI Bill, healthcare, and state programs — always pointing back to official sources.",
  },
  {
    title: "Build With Others",
    description:
      "A community of veterans comparing notes on money, real estate, and business — not a comment section.",
  },
];

export default function ValueStack() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {VALUE_ITEMS.map((item) => (
            <div key={item.title} className="card-vm">
              <h3 className="mb-2 text-lg font-headline font-bold text-navy">{item.title}</h3>
              <p className="text-sm text-charcoal-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
