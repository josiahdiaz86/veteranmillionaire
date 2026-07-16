import type { NewsletterEdition } from "@/lib/types";

/**
 * Sample newsletter editions. Each edition's eight sections follow the
 * required recurring structure. Content is written as representative
 * sample copy — deal specifics, business spotlights, and community wins
 * are illustrative placeholders, not verified current facts. Treat as a
 * structural template for the editorial/newsletter team, not as
 * publish-ready content.
 */
export const newsletterEditions: NewsletterEdition[] = [
  {
    title: "The Veteran Millionaire Brief — Edition 1",
    slug: "veteran-millionaire-brief-edition-1",
    summary:
      "Sample edition — a verified apparel discount, a GI Bill transferability reminder, one wealth move, a business spotlight, a house-hacking tip, a pressure-washing side hustle breakdown, a community win, and Joe's VA loan note.",
    body:
      "This is the first sample structure for the weekly Veteran Millionaire Brief newsletter, showing all eight required recurring sections in one edition. Section content below is representative sample copy for layout and tone purposes and needs a full editorial pass — including reverification of any discount or benefit details — before it would go out to real subscribers.",
    heroImageAlt: "Placeholder image block representing an email newsletter layout",
    category: "news",
    tags: ["discounts", "va-loan"],
    author: "editorial-team",
    publishDate: "2026-06-15",
    updatedDate: "2026-06-15",
    sourceLinks: [],
    seoTitle: "The Veteran Millionaire Brief — Edition 1 (Sample)",
    metaDescription: "Sample structure for the first edition of the Veteran Millionaire weekly newsletter.",
    ogImageAlt: "Placeholder graphic for newsletter edition 1",
    schemaType: "Article",
    status: "Draft",
    featured: true,
    affiliateStatus: "None",
    complianceReviewStatus: "Pending Review",
    aiGenerated: true,
    humanReviewed: false,
    editionNumber: 1,
    sendDate: "2026-06-15",
    sections: {
      dealOfTheWeek: {
        heading: "Deal of the Week",
        body:
          "Under Armour's ID.me military discount is live on full-price gear — a solid one to bookmark before back-to-school shopping starts. As always, confirm the current percentage at checkout since exclusions can shift without notice.",
      },
      benefitUpdate: {
        heading: "Benefit Update",
        body:
          "Reminder: Post-9/11 GI Bill transferability generally has to be requested while you're still serving, and it comes with its own service-obligation conditions. If you've been meaning to check your transfer status, this week's a good week to do it.",
      },
      wealthMove: {
        heading: "This Week's Wealth Move",
        body:
          "If you got a VA disability COLA increase this year, resist the urge to let it blend into your regular spending. Move the increase into a separate savings line for 90 days before deciding what to do with it — you'll make a better decision with some distance from the deposit.",
      },
      veteranBusinessSpotlight: {
        heading: "Veteran Business Spotlight",
        body:
          "Sample spotlight slot — this section profiles a veteran-owned business each edition. No business has been selected for this sample edition; submissions can be sent through the Submit a Veteran Business page.",
      },
      realEstateTip: {
        heading: "Real Estate Tip",
        body:
          "Thinking about house hacking with a VA loan? Start the conversation with a lender who can point to actual closed multi-unit VA transactions, not just general familiarity with the loan type. Experience with the specific property type matters here.",
      },
      sideHustleBreakdown: {
        heading: "Side Hustle Breakdown",
        body:
          "Pressure washing remains one of the lowest-barrier service side hustles: modest equipment cost, a short skill curve, and steady seasonal demand in most climates. See this week's full breakdown on the Make Money page.",
      },
      communityWin: {
        heading: "Community Win",
        body:
          "Sample section — this is where a real member story or milestone from the Veteran Millionaire Facebook Group would be featured, with their permission. No specific member story is included in this sample edition.",
      },
      joesVaLoanNote: {
        heading: "Joe's VA Loan Note",
        body:
          "A question I get a lot: 'Do I need a perfect credit score for a VA loan?' No — but your credit profile still shapes your rate and terms, so it's worth a real look before you start house-hunting, not after. Happy to talk through your specific situation — reach out through Talk to Joe.",
      },
    },
  },
  {
    title: "The Veteran Millionaire Brief — Edition 2",
    slug: "veteran-millionaire-brief-edition-2",
    summary:
      "Sample edition — a travel discount, a healthcare enrollment reminder, a credit-building wealth move, a business spotlight, a first-time buyer tip, a mobile detailing breakdown, a community win, and Joe's VA loan note.",
    body:
      "This is the second sample structure for the weekly Veteran Millionaire Brief newsletter. As with edition 1, section content is representative sample copy for layout and tone purposes only and requires a full editorial and compliance pass before real distribution.",
    heroImageAlt: "Placeholder image block representing an email newsletter layout",
    category: "news",
    tags: ["discounts", "credit-score"],
    author: "editorial-team",
    publishDate: "2026-06-22",
    updatedDate: "2026-06-22",
    sourceLinks: [],
    seoTitle: "The Veteran Millionaire Brief — Edition 2 (Sample)",
    metaDescription: "Sample structure for the second edition of the Veteran Millionaire weekly newsletter.",
    ogImageAlt: "Placeholder graphic for newsletter edition 2",
    schemaType: "Article",
    status: "Draft",
    featured: false,
    affiliateStatus: "None",
    complianceReviewStatus: "Pending Review",
    aiGenerated: true,
    humanReviewed: false,
    editionNumber: 2,
    sendDate: "2026-06-22",
    sections: {
      dealOfTheWeek: {
        heading: "Deal of the Week",
        body:
          "Amtrak's veterans fare discount is worth checking if you've got late-summer travel on the calendar. Route eligibility and blackout dates vary, so confirm specifics at booking rather than assuming a flat percentage applies everywhere.",
      },
      benefitUpdate: {
        heading: "Benefit Update",
        body:
          "If you haven't enrolled in VA healthcare yet, priority group placement is based on several factors including service history and income — it's worth applying even if you're not sure where you'll land. Enrollment itself is the first step.",
      },
      wealthMove: {
        heading: "This Week's Wealth Move",
        body:
          "Pull your credit report (not just your score) before you talk to any lender. Reporting errors are common and fixable, but only if you catch them ahead of time instead of during underwriting.",
      },
      veteranBusinessSpotlight: {
        heading: "Veteran Business Spotlight",
        body:
          "Sample spotlight slot — no business has been selected for this sample edition. This section is intended to rotate weekly once real submissions come in through Submit a Veteran Business.",
      },
      realEstateTip: {
        heading: "Real Estate Tip",
        body:
          "First-time buyer using a VA loan? Ask your agent directly how they plan to position a VA offer in a competitive situation — the strategy for that conversation matters more than the loan type itself.",
      },
      sideHustleBreakdown: {
        heading: "Side Hustle Breakdown",
        body:
          "Mobile detailing keeps showing up as a strong low-cost option because it removes the customer's biggest friction point: driving somewhere and waiting. Full breakdown of startup costs and realistic timelines is on the Make Money page.",
      },
      communityWin: {
        heading: "Community Win",
        body:
          "Sample section — placeholder for a real, permission-cleared member story or milestone from the Facebook Group. None included in this sample edition.",
      },
      joesVaLoanNote: {
        heading: "Joe's VA Loan Note",
        body:
          "Another common one: 'Can I use my VA loan again after I already used it once?' In many cases, yes — entitlement can often be reused or restored, but the specifics depend on your situation. Don't rule it out without asking.",
      },
    },
  },
  {
    title: "The Veteran Millionaire Brief — Edition 3",
    slug: "veteran-millionaire-brief-edition-3",
    summary:
      "Sample edition — a retail discount, a property tax exemption reminder, a savings-rate wealth move, a business spotlight, a house-hacking follow-up, a consulting side hustle breakdown, a community win, and Joe's VA loan note.",
    body:
      "This is the third sample structure for the weekly Veteran Millionaire Brief newsletter, again shown for layout and tone purposes. All section content requires a full editorial and compliance review pass before it is used in a real send.",
    heroImageAlt: "Placeholder image block representing an email newsletter layout",
    category: "news",
    tags: ["discounts", "property-tax"],
    author: "editorial-team",
    publishDate: "2026-06-29",
    updatedDate: "2026-06-29",
    sourceLinks: [],
    seoTitle: "The Veteran Millionaire Brief — Edition 3 (Sample)",
    metaDescription: "Sample structure for the third edition of the Veteran Millionaire weekly newsletter.",
    ogImageAlt: "Placeholder graphic for newsletter edition 3",
    schemaType: "Article",
    status: "Draft",
    featured: false,
    affiliateStatus: "None",
    complianceReviewStatus: "Pending Review",
    aiGenerated: true,
    humanReviewed: false,
    editionNumber: 3,
    sendDate: "2026-06-29",
    sections: {
      dealOfTheWeek: {
        heading: "Deal of the Week",
        body:
          "Nike's military discount through ID.me is active online and at participating stores. Sale items and certain collaborations are typically excluded — worth checking before you assume an item qualifies.",
      },
      benefitUpdate: {
        heading: "Benefit Update",
        body:
          "Property tax exemption programs for disabled veterans are handled at the state and county level, so the rules where you live may differ a lot from a neighboring state. If you haven't checked your county assessor's site, add it to this week's list.",
      },
      wealthMove: {
        heading: "This Week's Wealth Move",
        body:
          "Pick one fixed expense this month and actually shop it — insurance, a phone plan, a subscription bundle. Small, boring savings compound the same way big ones do, and they're usually easier to find.",
      },
      veteranBusinessSpotlight: {
        heading: "Veteran Business Spotlight",
        body:
          "Sample spotlight slot — reserved for a real, submitted veteran-owned business in future editions. Nothing to feature yet in this sample edition.",
      },
      realEstateTip: {
        heading: "Real Estate Tip",
        body:
          "If you're exploring house hacking, get clear on the occupancy timeline before you write an offer — most VA-backed multi-unit purchases require you to move in within a defined window, not just eventually.",
      },
      sideHustleBreakdown: {
        heading: "Side Hustle Breakdown",
        body:
          "Independent consulting in your former field can pay well, but the real work is the business side — finding clients and pricing your time. Full breakdown of how to start small on the Make Money page.",
      },
      communityWin: {
        heading: "Community Win",
        body:
          "Sample section — placeholder slot for a future permission-cleared community milestone. None included in this sample edition.",
      },
      joesVaLoanNote: {
        heading: "Joe's VA Loan Note",
        body:
          "I get asked whether it's worth waiting for rates to move before starting the VA loan process. My honest answer: start the eligibility and credit-review conversation now regardless of rate — that part doesn't cost you anything and it's what actually determines your timeline.",
      },
    },
  },
];
