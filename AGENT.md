# AGENT.md — AlgoWave Labs Website

## Project Overview

**Company:** AlgoWave Labs
**Tagline:** "Turning Ideas into Scalable Digital Solutions"
**Description:** AlgoWave Labs is a software solutions company delivering modern websites, ERP systems, SaaS platforms, e-commerce solutions, and professional portfolios for growing businesses.

**Project Type:** Frontend-only marketing/agency website (NO backend, NO admin dashboard, NO database)
**Goal:** Build a professional, modern, light-themed agency website that showcases services and captures leads via a contact form (using a form service, not a custom backend).

https://stitch.withgoogle.com/preview/2520083725149358614?node-id=501eeb047f0f43df9549074b42779089

---

## Tech Stack

| Purpose | Technology |
|---|---|
| Framework | Next.js 15 (App Router) — Static/Client rendering only |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk / Sora (headings), Inter (body) — via `next/font/google` |
| Contact Form | Web3Forms or Formspree (no backend required, sends email directly) |
| Deployment | Vercel or Netlify |

**IMPORTANT CONSTRAINTS:**
- NO backend, NO API routes, NO database, NO authentication, NO admin panel.
- All content (services, portfolio, testimonials, team) is static/hardcoded in TypeScript data files (`/lib/data/*.ts`), NOT fetched from any CMS or database.
- Contact form submits directly to Web3Forms/Formspree endpoint via client-side fetch — no custom API route needed.
- Fully responsive: mobile-first, then tablet, then desktop breakpoints.

---

## Design System

### Color Palette (Light Theme)

```css
--background: #FFFFFF;
--background-secondary: #F1F5F9;
--text-primary: #0F172A;
--text-secondary: #64748B;
--accent-blue: #2563EB;
--accent-violet: #7C3AED;
--border-light: #E2E8F0;
--success: #10B981;
--footer-bg: #0F172A;
--footer-text: #F1F5F9;
```

**Gradient (primary brand gradient):** `linear-gradient(90deg, #2563EB, #7C3AED)` — used on:
- Primary CTA buttons
- Key headline words/spans
- Icon badge backgrounds
- Stat numbers
- Section dividers/accent lines
- CTA banner backgrounds (full section)

### Typography

- **Headings:** Space Grotesk (bold, tight tracking) — `font-heading`
- **Body:** Inter — `font-body`
- **Scale:** H1 `text-5xl md:text-6xl`, H2 `text-3xl md:text-4xl`, H3 `text-xl md:text-2xl`, Body `text-base md:text-lg`

### Component Style Rules

- Cards: `bg-white rounded-xl border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow`
- Buttons (Primary): gradient background, white text, `rounded-full` or `rounded-lg`, `px-6 py-3`
- Buttons (Secondary): outline style, `border-2 border-[#0F172A]`, transparent bg
- Section spacing: `py-20 md:py-28`, container `max-w-7xl mx-auto px-6`
- Alternate section backgrounds between `#FFFFFF` and `#F1F5F9` for visual rhythm
- Icon badges: rounded square/circle with gradient background at low opacity (e.g., `bg-blue-50`) and gradient-colored icon

---

## Folder Structure

```
/app
  layout.tsx
  page.tsx                    → Home
  /about
    page.tsx
  /services
    page.tsx
  /portfolio
    page.tsx
  /contact
    page.tsx
  /pricing
    page.tsx                  (optional)
  globals.css

/components
  /layout
    Navbar.tsx
    Footer.tsx
  /sections
    Hero.tsx
    ClientLogos.tsx
    ServicesGrid.tsx
    WhyChooseUs.tsx
    ProcessTimeline.tsx
    FeaturedPortfolio.tsx
    Testimonials.tsx
    CTABanner.tsx
    Stats.tsx
    CoreValues.tsx
    FAQAccordion.tsx
    PricingCards.tsx
    ContactForm.tsx
    ContactInfo.tsx
  /ui
    Button.tsx
    Card.tsx
    Badge.tsx
    SectionHeading.tsx
    GradientText.tsx

/lib
  /data
    services.ts
    portfolio.ts
    testimonials.ts
    pricing.ts
    faq.ts
    stats.ts
  utils.ts

/public
  /images
  /icons
```

---

## Pages & Sections

### 1. Home (`/`)
Navbar → Hero → ClientLogos → ServicesGrid → WhyChooseUs → ProcessTimeline → FeaturedPortfolio → Testimonials → CTABanner → Footer

### 2. About (`/about`)
Page Header → Our Story (2-col) → Mission & Vision (2 cards) → Stats → Core Values (4 cards) → CTABanner

### 3. Services (`/services`)
Page Header → 5 alternating service detail sections (Web Dev, ERP, SaaS, E-commerce, Portfolios) → Pricing cards (optional) → FAQ Accordion → CTABanner

### 4. Portfolio (`/portfolio`)
Page Header → Filter Tabs (category pills) → Projects Grid (3-col, hover overlay) → CTABanner

### 5. Contact (`/contact`)
Page Header → 2-column: ContactForm (left) + ContactInfo + social links + map placeholder (right)

### 6. Pricing (`/pricing`) — optional
Page Header → 3 Pricing Cards (Starter/Growth/Enterprise, middle highlighted) → Note text → FAQ Accordion

---

## Data Models (Static TypeScript, not DB)

```ts
// lib/data/services.ts
type Service = {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  techStack: string[];
};

// lib/data/portfolio.ts
type Project = {
  id: string;
  title: string;
  category: 'web' | 'erp' | 'saas' | 'ecommerce' | 'portfolio';
  image: string;
  description: string;
};

// lib/data/testimonials.ts
type Testimonial = {
  name: string;
  company: string;
  quote: string;
  photo: string;
};

// lib/data/pricing.ts
type PricingPlan = {
  name: string;
  price: string;
  featured: boolean;
  features: string[];
};
```

---

## Contact Form Implementation

Use **Web3Forms** (free, no backend, no signup complexity):

```tsx
const res = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: "YOUR_ACCESS_KEY",
    name, email, phone, service, message,
  }),
});
```

No API route needed — this is a direct client-side fetch call from `ContactForm.tsx`.

---

## SEO & Meta

- Use Next.js Metadata API in each `page.tsx` for title/description per page
- Add Open Graph tags with logo/hero image
- Semantic HTML (`<section>`, `<header>`, proper heading hierarchy)
- Alt text on all images

---

## Deployment

- Push to GitHub → connect to Vercel → auto-deploy
- No environment variables needed except `NEXT_PUBLIC_WEB3FORMS_KEY`
