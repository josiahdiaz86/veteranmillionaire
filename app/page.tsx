import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueStack from "@/components/sections/ValueStack";
import TrendingDiscounts from "@/components/sections/TrendingDiscounts";
import MembershipOffer from "@/components/sections/MembershipOffer";
import RealEstateWealth from "@/components/sections/RealEstateWealth";
import MakeMoney from "@/components/sections/MakeMoney";
import BenefitsPreview from "@/components/sections/BenefitsPreview";
import CommunitySection from "@/components/sections/CommunitySection";
import SuccessStories from "@/components/sections/SuccessStories";
import NewsletterPreview from "@/components/sections/NewsletterPreview";
import SponsorSection from "@/components/sections/SponsorSection";
import FinalCTA from "@/components/sections/FinalCTA";

import { discounts } from "@/lib/data/discounts";
import { sideHustles } from "@/lib/data/sideHustles";
import { benefits } from "@/lib/data/benefits";
import { realEstateTopics } from "@/lib/data/realEstateTopics";
import { newsletterEditions } from "@/lib/data/newsletterEditions";

export const metadata: Metadata = {
  title: "Build More With the Benefits You Earned",
  description:
    "Helping one million veterans save more, earn more, invest smarter, and build lasting wealth. Verified veteran discounts, real estate education, side hustles, benefit updates, and a community built for veterans.",
};

const FEATURED_DISCOUNTS = discounts.slice(0, 8);

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Veteran Millionaire",
    description:
      "Helping one million veterans save more, earn more, invest smarter, and build lasting wealth.",
    url: "https://veteranmillionaire.com",
  };

  return (
    <main>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Hero />
      <ValueStack />
      <TrendingDiscounts discounts={FEATURED_DISCOUNTS} />
      <MembershipOffer />
      <RealEstateWealth topics={realEstateTopics} />
      <MakeMoney sideHustles={sideHustles} />
      <BenefitsPreview benefits={benefits} />
      <CommunitySection />
      <SuccessStories />
      <NewsletterPreview editions={newsletterEditions} />
      <SponsorSection />
      <FinalCTA />
    </main>
  );
}
