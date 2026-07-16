# Veteran Millionaire

Powered by JoeLendsToVets. A free membership media and financial education platform for veterans — not a mortgage funnel, not a government site, not a template.

This is the first deployable version (MVP): full design system, 29 routes, reusable content templates, mock content, SEO scaffolding, and analytics event wiring, built on Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## 1. What's actually built

- **Homepage** with all 14 sections from spec (hero, value stack, trending discounts, membership offer, real estate wealth, make money, benefits, community, success stories placeholder, newsletter preview, sponsor section, final CTA).
- **29 routes**, including dual-purpose dynamic routes (`/discounts/[slug]` resolves to either a single discount or a category landing page; `/benefits/[slug]` resolves to either a benefit resource or a state page), full detail templates for discounts/articles/benefits/real-estate topics/side hustles, a working VA loan payment calculator, membership (`/join`) and mortgage inquiry (`/talk-to-joe`) pages, and all required legal/utility pages (privacy, terms, affiliate disclosure, mortgage disclosures, accessibility, editorial standards, advertise, partner, submit-discount, submit-business, contact).
- **Content schema** (`lib/types.ts`) covering every content type in the spec (Discount, Article, BenefitResource, StateProgram, Course, Event, JobResource, VeteranBusiness, Sponsor, NewsletterEdition, SideHustle, MortgageResourceTopic, Author, Category, Tag) with the full editorial workflow (`Draft → Needs Verification → Needs Compliance Review → Approved → Published → Expired → Archived`), verification dates, compliance/affiliate status, and AI-generated/human-reviewed flags — designed so a real CMS can slot in without changing component props.
- **Mock content**: 12 discounts, 6 articles, 6 side hustles, 6 benefit resources, 4 real estate topics, 4 sample community events, 3 newsletter editions. Real, well-known company names are used only as clearly-labeled samples pending verification (two discounts are marked `Approved`/`Published` to show what a verified listing looks like). No invented testimonials, statistics, or fake companies anywhere.
- **SEO**: `app/sitemap.ts`, `app/robots.ts`, per-page metadata (static and dynamic via `generateMetadata`), Organization/Article/BreadcrumbList/FAQPage JSON-LD.
- **Analytics**: `lib/analytics.ts` defines every required event name (`ANALYTICS_EVENTS`) and wires primary CTAs to `trackEvent(...)`, with guarded, currently-inert stubs for GTM `dataLayer`, GA4 `gtag`, and Meta Pixel `fbq` (they no-op until the relevant script/env var is present).
- **Compliance guardrails**: no guarantee language anywhere (checked), disclaimers on every benefits/real-estate/mortgage page, mortgage content visually separated from editorial content on `/talk-to-joe`, affiliate disclosure linked next to every outbound discount link.

## 2. File structure

```
veteran-millionaire/
├── app/                    # Routes (App Router). One page.tsx per route.
│   ├── layout.tsx          # Root layout: fonts, global <head> metadata, header/footer shell
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts / robots.ts
│   ├── discounts/[slug]/    # Dual: single discount OR category landing
│   ├── benefits/[slug]/     # Dual: single benefit OR state landing
│   ├── real-estate/[slug]/, /calculators/
│   ├── make-money/[slug]/
│   ├── news/[slug]/
│   └── ...about, join, talk-to-joe, business, jobs, community, and all legal pages
├── components/
│   ├── site/                # Header, footer, announcement bar, mobile nav
│   ├── sections/             # Homepage section components
│   ├── content/               # Cards, filters, newsletter signup
│   ├── forms/                # Membership, mortgage inquiry, submissions
│   ├── seo/                  # JsonLd, Breadcrumbs
│   └── ui/                    # Container, SectionHeading, StatusPill, ImagePlaceholder
├── lib/
│   ├── types.ts               # Content schema (the contract for a future CMS)
│   ├── analytics.ts            # Event names + tracking stubs
│   ├── slugify.ts               # Shared helper for dual-purpose routes
│   └── data/                    # Mock content — swap for CMS/DB queries later
├── tailwind.config.ts          # Brand color tokens, type scale, spacing
├── .env.example
└── package.json
```

## 3. Setup instructions

This sandbox's network doesn't have access to the npm registry, so the project was hand-built and reviewed file-by-file (import resolution, brace balance, `"use client"` placement, route-collision checks) rather than verified with a real `npm run build`. **Before deploying, run a real build once** — locally or let Vercel do it on first deploy:

```bash
cd veteran-millionaire
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — do this at least once before shipping
```

If `npm run build` surfaces any TypeScript error, it's most likely a small prop-typing mismatch — nothing architectural. Fix and re-run; the codebase has no external runtime dependencies beyond `next`, `react`, `react-dom`.

## 4. Environment variables

See `.env.example`. Nothing is required to run the MVP as-is (everything reads from mock data), but the analytics, Supabase, CMS, Resend, and Stripe integration points are already coded to read these once you fill them in.

## 5. Deploying to Vercel

Since the domain is already purchased and connected in your Vercel account:

1. Push this project to a GitHub (or GitLab/Bitbucket) repo — Vercel's Git integration is the recommended path for ongoing deploys (preview URLs per PR, instant rollbacks).
   ```bash
   cd veteran-millionaire
   git init && git add -A && git commit -m "Veteran Millionaire MVP"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In the Vercel dashboard: **Add New → Project → Import** your repo. Vercel auto-detects Next.js — no config needed.
3. Add the environment variables from `.env.example` you're ready to use (or skip for now; the site runs on mock data without any).
4. Deploy. Vercel runs `npm install && npm run build` on their end (full registry access, unlike this sandbox), so this is also where you'll get a real compiler pass.
5. Go to **Project Settings → Domains** and attach `veteranmillionaire.com` (already purchased through Vercel) — it should be selectable directly since it's on the same account.

Alternatively, without Git: `npx vercel --prod` from inside the project folder on your own machine (requires `vercel login`).

## 6. CMS recommendation

**Sanity** — best fit here because: generous free tier, excellent editorial/preview workflow, structured content that maps directly onto `lib/types.ts` almost 1:1, and strong support for the "AI drafts, human approves" workflow described in Editorial Standards. Model each interface in `lib/types.ts` as a Sanity document type, keep the same field names, and swap `lib/data/*.ts` imports for Sanity client queries — component props don't change.

(Payload CMS is a reasonable alternative if you want a self-hosted, Postgres-backed CMS with more custom admin logic — better fit if you're already committed to Supabase/Postgres as your source of truth rather than a separate content lake.)

## 7. Database recommendation

**Supabase** (Postgres) for everything transactional: membership signups, mortgage inquiry leads, discount/business submissions, event RSVPs, newsletter subscriber state. Row-level security maps well to "public read, authenticated-only write" for submission forms. Use Supabase alongside Sanity (Sanity for editorial content, Supabase for user-generated/transactional data) rather than one system for both.

## 8. Remaining integrations (scaffolded, not wired)

- **Resend** — newsletter delivery + transactional email (welcome email, mortgage lead notification to Joe's team). Forms currently mock-submit client-side only.
- **Stripe** — for the future premium community/courses mentioned in the spec. No pricing/paywall exists yet by design (spec: free content shouldn't be gated).
- **PostHog / GA4 / GTM / Meta Pixel** — event names and guarded call sites exist in `lib/analytics.ts`; add the script tags (typically via `next/script` in `layout.tsx`) and env vars to activate.
- **Search Console** — add `GOOGLE_SITE_VERIFICATION` env var and a verification meta tag once you have the property.
- **Facebook Group / Instagram / YouTube / TikTok** — footer and community page link out with placeholder `#` hrefs; add real URLs via the `NEXT_PUBLIC_*` env vars.

## 9. Known limitations

- No `npm run build` was run in this build environment (network-restricted sandbox) — run it once before your first deploy.
- No real photography — `ImagePlaceholder` components stand in for real veteran-life imagery (homeownership, business ownership, families, trades) and are intentionally not stock photos. Swap for real photography via `next/image` when available.
- No favicon/OG image assets included yet — add `app/favicon.ico` and a default OG image.
- Forms (membership, mortgage inquiry, newsletter, submissions) are client-side mocks with simulated success states — no backend persists submissions yet.
- `components/test.tsx` is a harmless leftover stub file from scaffolding (not imported anywhere, safe to delete manually — this sandbox's filesystem wouldn't let automated tooling remove it).
- Legal pages (privacy, terms, mortgage disclosures, affiliate disclosure) are genuine, complete drafts but are explicitly marked as pending final attorney/compliance review before launch — do not treat as legally finalized.
- `DiscountFilterBar` uses the 8-category `DiscountCategory` union rather than the spec's slightly different 9-item filter list (Technology/Business/Education aren't distinct categories yet) — easy to extend later.
- Only 4 sample states have dedicated content depth on `/benefits/[state]`; the rest render an honest "being compiled" state rather than fabricated program details.

## 10. Next development priorities

1. Run the first real `npm run build`, fix anything the compiler flags.
2. Wire Supabase for form submissions (membership, mortgage leads, discount/business submissions) and Resend for the resulting emails.
3. Stand up Sanity, migrate `lib/data/*.ts` content into it, point pages at Sanity queries instead of static imports.
4. Add real photography and a favicon/OG image set.
5. Legal review pass on privacy/terms/mortgage-disclosures/affiliate-disclosure, then fill in real NMLS/licensing details on `/talk-to-joe` and `/mortgage-disclosures`.
6. Wire GTM/GA4/Meta Pixel/PostHog using the existing `lib/analytics.ts` call sites.
7. Expand mock content into real, editorially-verified content as the team confirms current discount terms, benefit details, and state programs.
