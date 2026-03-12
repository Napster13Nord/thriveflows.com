# ThriveFlows.com — Clone from Framer to Next.js

Clone the single-page landing page at [thriveflows.com](https://thriveflows.com/) from Framer into a Next.js (App Router) project, reusing the existing Framer component logic and review images.

## Proposed Changes

### Project Setup

#### [NEW] Next.js App (App Router)

- Initialize with `npx -y create-next-app@latest ./` in the workspace folder
- TypeScript, App Router, no Tailwind (vanilla CSS)
- Install `framer-motion` for animations
- Google Fonts: **Figtree** (primary) + **Inter** (fallback)

---

### Global Styles & Layout

#### [NEW] `app/globals.css`

- Dark theme: background `#0a0e1a`, card background `rgb(18, 25, 41)`
- Accent purple: `#814ac8` / `rgba(139, 92, 246, …)`
- White text with opacity levels for hierarchy
- CSS custom properties for the design tokens
- Responsive breakpoints: 640px (mobile), 1024px (tablet), 1200px (max-width)

#### [NEW] `app/layout.tsx`

- Root layout with Figtree/Inter fonts, meta tags, OG tags
- SEO: title, description matching the live site

#### [NEW] `app/page.tsx`

- Single page composing all section components

---

### Components (All under `components/`)

#### [NEW] `components/Header.tsx`

- Fixed/sticky nav, dark background with blur
- Logo "Thrive Flows" on left
- Nav links: Results, ROI Calculator, Our Pillars, How It Works, FAQs
- CTA button "Book Your Free Strategy Call" → cal.com link
- Mobile hamburger menu

#### [NEW] `components/Hero.tsx`

- Small badge: "🎯 For WooCommerce"
- Main headline: "Done-For-You Email Automation" (h1)
- Sub-headline: "Recover 10-30% of Lost Revenue Without Ads or Extra Work"
- Body text describing the service
- Primary CTA button (purple gradient) → cal.com
- Trust badges: "✓ 30-Day Free Trial ✓ Zero Risk ✓ Results Guaranteed"

#### [NEW] `components/StatsCards.tsx`

- Adapted from `Cards above the fold.txt` Framer component
- 5 cards in a grid: WooCommerce logo, 110+ Stores, €800K+ Recovered, 20% Increase, Google 5.0 rating
- Rolling number animation on viewport entry
- Uses `framer-motion` for stagger + fade animations

#### [NEW] `components/VideoSection.tsx`

- Section with heading "The Complete System: How 110+ Stores Recover 17-41% of Lost Revenue"
- Description text about client dashboards
- Embedded video (YouTube/Vimeo iframe or placeholder)
- CTA button below

#### [NEW] `components/ROICalculator.tsx`

- Adapted from `Revenue Calculator.txt` Framer component
- Two-column layout: sliders on left, results on right
- Three sliders: Monthly Revenue, Automation Package, Sales Increase
- Results panel with investment, monthly gain, return in 1 year, payback, ROI
- Purple accent color for sliders and highlights

#### [NEW] `components/HowItWorks.tsx`

- Section heading "From Setup to Sales in 7-10 Days"
- 4 steps in a timeline/card layout:
  1. Strategic Audit
  2. Build & Install
  3. Test & Launch
  4. Optimize (Ongoing)
- Each step has a number, title, description, and "You provide:" line
- CTA button at bottom

#### [NEW] `components/UrgencyBanner.tsx`

- Adapted from [Scarcity.txt](file:///c:/Users/Andr%C3%A9%20-%20Business/Desktop/New%20site%20-%20thriveflows/Components/Scarcity.txt) Framer component
- Warning icon with pulse animation
- "Limited Availability - Only X Spots Left This Month"
- Progress bar showing spots taken
- Red accent color scheme within dark card

#### [NEW] `components/Reviews.tsx`

- Display the 6 review images from `Reviews/` folder
- Grid or masonry layout showing review screenshots
- "Real Results" heading

#### [NEW] `components/FAQ.tsx`

- Accordion component with expand/collapse
- 6 questions from the site content
- Smooth open/close animation with framer-motion

#### [NEW] `components/CalEmbed.tsx`

- Final CTA section: "Stop Losing Sales Today"
- Description of what happens on the call (5 numbered points)
- Embedded Cal.com scheduling widget (inline)
- Uses the cal.com embed script from `Embbed cal.com.txt`

#### [NEW] `components/Footer.tsx`

- Logo + company description
- Links column: Results, ROI Calculator, Our Pillars, How it Works, FAQs
- Contact: hello@thriveflows.com, "Based in Finland"
- Credit line: "Visioned and Crafted by WPexperts.pt" + © copyright

---

### Assets

#### Review images

- Copy the 6 [.avif](file:///c:/Users/Andr%C3%A9%20-%20Business/Desktop/New%20site%20-%20thriveflows/Reviews/ikuJYRf4lZDgcXUIffgqU7PhyI.avif) files from `Reviews/` to `public/reviews/`
- Reference them via `/reviews/filename.avif`

#### WooCommerce logo

- Download the WooCommerce logo from the Framer CDN URL and save to `public/images/`

---

## Verification Plan

### Automated

- `npm run build` — ensure the project compiles with zero errors

### Manual (Browser)

1. Run `npm run dev` and open `http://localhost:3000`
2. Verify all sections render from top to bottom
3. Check responsiveness at mobile (375px), tablet (768px), and desktop (1440px) widths
4. Verify rolling number animations trigger
5. Verify ROI calculator sliders work and update results
6. Verify FAQ accordion opens/closes
7. Verify all CTA buttons link to `https://cal.com/andre-lopes/revenue-recovery-potential-call`
8. Verify review images load correctly
9. Compare side-by-side with thriveflows.com for visual accuracy
