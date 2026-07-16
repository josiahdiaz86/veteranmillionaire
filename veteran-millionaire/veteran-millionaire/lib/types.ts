/**
 * Content type definitions for Veteran Millionaire.
 *
 * These types are the contract between mock data (lib/data/*.ts) and the
 * UI. They are intentionally shaped like they could later be swapped for
 * rows from a real CMS/database (e.g. Sanity, Contentful, or a Postgres
 * table) without changing component props — components should always
 * consume these interfaces, never inline literals.
 */

/** Editorial workflow status. Drives what is safe to render publicly. */
export type ContentStatus =
  | "Draft"
  | "Needs Verification"
  | "Needs Compliance Review"
  | "Approved"
  | "Published"
  | "Expired"
  | "Archived";

/** Whether a piece of content contains monetized/affiliate links. */
export type AffiliateStatus =
  | "None"
  | "Affiliate Link"
  | "Sponsored"
  | "Paid Partnership"
  | "Internal Lead Gen";

/** Legal/compliance sign-off status, separate from editorial status. */
export type ComplianceReviewStatus =
  | "Not Required"
  | "Pending Review"
  | "Approved"
  | "Changes Requested";

/** schema.org type used for structured data / SEO markup on the page. */
export type SchemaType =
  | "Article"
  | "NewsArticle"
  | "FAQPage"
  | "Product"
  | "Service"
  | "Event"
  | "JobPosting"
  | "Organization"
  | "WebPage";

export interface SourceLink {
  label: string;
  url: string;
}

export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  avatarAlt: string; // placeholder — swap for real headshot later
  isVeteran: boolean;
  branchOfService?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Tag {
  slug: string;
  name: string;
}

/**
 * Shared editorial/SEO/compliance fields present on nearly every
 * content-item type in the system.
 */
export interface ContentMeta {
  title: string;
  slug: string;
  summary: string;
  body: string;
  heroImageAlt: string; // placeholder image description — swap for real photography later
  category: string; // Category slug
  tags: string[]; // Tag slugs
  author: string; // Author slug
  publishDate: string; // ISO date
  updatedDate: string; // ISO date
  verificationDate?: string; // ISO date — last fact-check pass
  sourceLinks: SourceLink[];
  seoTitle: string;
  metaDescription: string;
  ogImageAlt: string; // placeholder image description
  schemaType: SchemaType;
  status: ContentStatus;
  featured: boolean;
  affiliateStatus: AffiliateStatus;
  complianceReviewStatus: ComplianceReviewStatus;
  aiGenerated: boolean;
  humanReviewed: boolean;
}

export interface Discount extends ContentMeta {
  brand: string;
  offerTitle: string;
  eligibility: string;
  verificationMethod: string;
  promoCode?: string;
  onlineLink?: string;
  inStoreInstructions?: string;
  restrictions: string;
  expirationDate?: string; // ISO date, if the offer is time-bound
  isOnline: boolean;
  isInStore: boolean;
  discountCategory: DiscountCategory;
}

export type DiscountCategory =
  | "Home & Hardware"
  | "Travel"
  | "Retail & Apparel"
  | "Food & Dining"
  | "Automotive"
  | "Entertainment"
  | "Health & Wellness"
  | "Services";

export interface Article extends ContentMeta {
  readTimeMinutes: number;
  subhead?: string;
}

export interface BenefitResource extends ContentMeta {
  benefitType:
    | "Disability Compensation"
    | "Education"
    | "Healthcare"
    | "Property Tax Exemption"
    | "State Benefit"
    | "Survivor & Dependent";
  administeredBy: string; // e.g. "U.S. Department of Veterans Affairs" — informational only
  actionSteps: string[];
}

export interface StateProgram extends ContentMeta {
  state: string; // full state name
  stateAbbreviation: string;
  programName: string;
  benefitSummary: string;
  eligibilityNotes: string;
}

export interface Course extends ContentMeta {
  priceCents: number; // 0 = free
  durationMinutes: number;
  modules: string[];
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
}

export interface Event extends ContentMeta {
  startDateTime: string; // ISO datetime
  endDateTime: string; // ISO datetime
  location: string; // e.g. "Virtual (Zoom)" or city/state
  isVirtual: boolean;
  hostName: string;
  registrationLink?: string;
  capacity?: number;
}

export interface JobResource extends ContentMeta {
  resourceType: "Job Board" | "Training Program" | "Certification" | "Employer Partner";
  industryFocus: string[];
  remoteFriendly: boolean;
  externalLink?: string;
}

export interface VeteranBusiness extends ContentMeta {
  businessName: string;
  ownerName: string;
  industry: string;
  location: string;
  website?: string;
  isServiceDisabledVeteranOwned: boolean;
}

export interface Sponsor extends ContentMeta {
  sponsorName: string;
  tier: "Presenting" | "Featured" | "Community" | "Affiliate Partner";
  logoAlt: string; // placeholder — swap for real sponsor logo later
  website: string;
}

export interface NewsletterSection {
  heading: string;
  body: string;
}

export interface NewsletterEdition extends ContentMeta {
  editionNumber: number;
  sendDate: string; // ISO date
  sections: {
    dealOfTheWeek: NewsletterSection;
    benefitUpdate: NewsletterSection;
    wealthMove: NewsletterSection;
    veteranBusinessSpotlight: NewsletterSection;
    realEstateTip: NewsletterSection;
    sideHustleBreakdown: NewsletterSection;
    communityWin: NewsletterSection;
    joesVaLoanNote: NewsletterSection;
  };
}

export interface SideHustle extends ContentMeta {
  startupCostRange: string; // e.g. "$0 - $500"
  difficulty: "Low" | "Medium" | "High";
  timeToFirstRevenue: string; // e.g. "2-4 weeks"
  partTimeFriendly: boolean;
}

export interface MortgageResourceTopic extends ContentMeta {
  topicArea: "VA Home Loans" | "First-Time Buyers" | "House Hacking" | "VA Loan Myths" | "Refinancing";
  keyTakeaways: string[];
}
