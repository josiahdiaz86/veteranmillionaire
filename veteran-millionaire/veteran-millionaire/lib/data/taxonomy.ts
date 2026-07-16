import type { Author, Category, Tag } from "@/lib/types";

/**
 * Shared reference data (authors, categories, tags) used across the
 * content mock data files below. In a future phase this becomes its own
 * CMS collection; content items reference these by `slug`.
 */

export const authors: Author[] = [
  {
    slug: "editorial-team",
    name: "Veteran Millionaire Editorial Team",
    title: "Editorial Staff",
    bio: "Our editorial team researches and fact-checks every article before it is published. Sample bio copy — to be finalized by editorial.",
    avatarAlt: "Placeholder avatar icon for Veteran Millionaire Editorial Team",
    isVeteran: true,
  },
  {
    slug: "joe-martinez",
    name: "Joe Martinez",
    title: "Founder, JoeLendsToVets",
    bio: "Joe is the founder of JoeLendsToVets and writes the recurring VA Loan Note in the Veteran Millionaire newsletter. Sample bio copy — to be finalized by editorial.",
    avatarAlt: "Placeholder avatar icon for Joe Martinez",
    isVeteran: true,
    branchOfService: "U.S. Army (Sample — to be confirmed)",
  },
];

export const categories: Category[] = [
  { slug: "money", name: "Money", description: "Saving, budgeting, credit, and everyday financial decisions." },
  { slug: "benefits", name: "Benefits", description: "VA disability, GI Bill, healthcare, and other earned benefits." },
  { slug: "real-estate", name: "Real Estate", description: "VA home loans, homeownership, and building wealth through property." },
  { slug: "side-hustles", name: "Side Hustles", description: "Extra income ideas built around military experience and schedules." },
  { slug: "business", name: "Business", description: "Starting and growing a veteran-owned business." },
  { slug: "jobs", name: "Jobs", description: "Career transition, training, and employer partners." },
  { slug: "news", name: "News", description: "Timely updates on veteran-relevant financial and policy news." },
  { slug: "community", name: "Community", description: "Events, wins, and stories from the Veteran Millionaire community." },
];

export const tags: Tag[] = [
  { slug: "va-loan", name: "VA Loan" },
  { slug: "disability-compensation", name: "Disability Compensation" },
  { slug: "gi-bill", name: "GI Bill" },
  { slug: "credit-score", name: "Credit Score" },
  { slug: "budgeting", name: "Budgeting" },
  { slug: "investing", name: "Investing" },
  { slug: "first-time-buyer", name: "First-Time Buyer" },
  { slug: "house-hacking", name: "House Hacking" },
  { slug: "skilled-trades", name: "Skilled Trades" },
  { slug: "remote-work", name: "Remote Work" },
  { slug: "government-contracting", name: "Government Contracting" },
  { slug: "property-tax", name: "Property Tax" },
  { slug: "survivor-benefits", name: "Survivor Benefits" },
  { slug: "state-benefits", name: "State Benefits" },
  { slug: "discounts", name: "Discounts" },
];
