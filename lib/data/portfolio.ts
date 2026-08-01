export type ProjectCategory =
  | "web"
  | "erp"
  | "saas"
  | "ecommerce"
  | "portfolio";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  overview: string;
  liveUrl?: string;
  client?: string;
  location?: string;
  year?: string;
  techStack: string[];
  features: string[];
  results?: string[];
};

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web Development",
  erp: "ERP",
  saas: "SaaS",
  ecommerce: "E-commerce",
  portfolio: "Portfolio Sites",
};

/** Maps portfolio categories to contact-form service titles. */
export const categoryServiceTitles: Record<ProjectCategory, string> = {
  web: "Web Development",
  erp: "ERP Systems",
  saas: "SaaS Platforms",
  ecommerce: "E-commerce Solutions",
  portfolio: "Professional Portfolios",
};

export function getContactHrefForCategory(category: ProjectCategory) {
  return `/contact?service=${encodeURIComponent(categoryServiceTitles[category])}`;
}

export const projects: Project[] = [
  {
    id: "pristine-home-commercial-cleaning",
    title: "Pristine Home & Commercial Cleaning",
    category: "web",
    image:
      "/Portfolio/phacc.webp",
    description:
      "A conversion-focused marketing website for a Sydney cleaning company specialising in bond and end of lease cleaning.",
    overview:
      "Pristine Home & Commercial Cleaning needed a high-converting marketing site for bond cleaning and end of lease services across Sydney. We built a SEO-ready Next.js platform with dedicated landing pages, quote forms, and policy content—designed to generate enquiries from tenants, landlords, and property managers. Slogan: Clean Spaces. Better Places.",
    liveUrl: "https://www.phacc.com.au",
    client: "Pristine Home & Commercial Cleaning",
    location: "Sydney, Australia",
    year: "2025",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Nodemailer",
      "Vercel",
    ],
    features: [
      "Conversion-first homepage with quote form and trust signals",
      "Dedicated SEO landing page for bond & end of lease cleaning",
      "Full service catalogue and policy pages",
      "Validated contact and quote forms delivered via email",
      "Sitemap, robots.txt, and per-page metadata",
    ],
    results: [
      "Clear enquiry paths for residential and commercial cleaning",
      "SEO structure built around Sydney bond-cleaning intent",
      "Fast static marketing site with no database overhead",
    ],
  },
  {
    id: "bin-rashid-group-erp",
    title: "BIN Rashid Group – Smart ERP",
    category: "erp",
    image: "/Portfolio/erp.webp",
    description:
      "An enterprise ERP platform for BIN Rashid Group—unified operations, finance, HR, and supply chain with AI-driven insights.",
    overview:
      "BIN Rashid Group's Smart ERP is a modern enterprise resource planning platform built for global business operations. The system unifies finance, HR, supply chain, and day-to-day operations behind a clean portal experience designed for reliability, uptime, and executive clarity.",
    client: "BIN Rashid Group",
    year: "2026",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Enterprise Portal",
    ],
    features: [
      "Unified ERP portal for global operations",
      "Modules covering finance, HR, and supply chain",
      "AI-driven operational insights",
      "Secure enterprise authentication and status monitoring",
      "Responsive admin and executive dashboard experience",
    ],
    results: [
      "Centralised enterprise operations under one Smart ERP",
      "Premium landing experience for a global business platform",
    ],
  },
  {
    id: "ielts-practice-pro",
    title: "IELTS Practice Pro",
    category: "saas",
    image:
      "/Portfolio/IELTS.webp",
    description:
      "An AI-powered IELTS prep platform with mock tests, speaking evaluation, band scoring, and student/admin dashboards.",
    overview:
      "IELTS Practice Pro is a full exam-prep SaaS covering Reading, Writing, Listening, and Speaking. Students practise with authentic mock tests while an OpenAI-powered speaking module simulates interviews, transcribes answers, and scores against official IELTS rubrics. Stripe subscriptions, Redis queues, and S3 audio storage keep the platform production-ready.",
    client: "IELTS Practice Pro",
    year: "2026",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "MongoDB",
      "OpenAI",
      "Stripe",
      "AWS S3",
      "Redis",
    ],
    features: [
      "500+ mock tests across all four IELTS modules",
      "AI speaking interview with Whisper transcription and TTS",
      "Rubric-based band scoring (fluency, lexical, grammar, pronunciation)",
      "Vocabulary builder and progress analytics",
      "Student dashboard and admin speaking question builder",
      "Stripe subscriptions and background job processing",
    ],
    results: [
      "End-to-end exam simulation with instant feedback",
      "Scalable AI evaluation pipeline for speaking attempts",
      "Monetisation ready via subscription plans",
    ],
  },
  {
    id: "well-health-trade-international",
    title: "Well Health Trade International",
    category: "ecommerce",
    image:
      "/Portfolio/wellhealthtradeinternational.com.webp",
    description:
      "An e-commerce website for a Bangladesh health brand offering science-backed supplements and nature-minded care.",
    overview:
      "Well Health Trade International is a trust-focused e-commerce experience for families across Bangladesh. The storefront presents science-backed supplements with a calm, premium brand voice—Better Health, Better Life—and a shopping flow built for clarity and conversion.",
    client: "Well Health Trade International",
    location: "Bangladesh",
    year: "2025",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    features: [
      "Product catalogue tailored for health & wellness",
      "Trust-led brand storytelling and about experience",
      "Responsive storefront for mobile-first shoppers",
      "SEO-friendly product and category structure",
    ],
    results: [
      "Clear brand presence for a growing supplements business",
      "Shopping experience aligned with family trust signals",
    ],
  },
  {
    id: "shilpalay",
    title: "Shilpalay – Fashion & Lifestyle",
    category: "ecommerce",
    image:
      "/Portfolio/shilpalay.com.webp",
    description:
      "A full-featured fashion & lifestyle e-commerce platform with storefront, checkout, and a powerful admin dashboard.",
    overview:
      "Shilpalay is built for high-end fashion brands that need a clean, fast storefront and serious back-office control. Customers get wishlist, cart, checkout, and My Account flows; admins manage products, inventory, orders, campaigns, and content from a structured dashboard.",
    client: "Shilpalay",
    year: "2025",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "NextAuth",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
    ],
    features: [
      "Dynamic home layout with hero, collections, and campaigns",
      "Product gallery, variations, wishlist, and live cart",
      "Checkout with shipping, VAT, and multi-payment UI",
      "My Account area for profile, addresses, and wishlist",
      "Admin dashboard for products, inventory, orders, and offers",
    ],
    results: [
      "Retail-grade storefront for fashion & lifestyle brands",
      "Centralised admin for catalogue and order operations",
    ],
  },
  {
    id: "looklify",
    title: "Looklify – Beauty & Skincare",
    category: "ecommerce",
    image:
      "/Portfolio/looklifybd.com.webp",
    description:
      "A modern beauty & skincare e-commerce website—fast, responsive, and SEO-optimized for Looklify BD.",
    overview:
      "Looklify is a beauty and skincare commerce experience built to feel polished on every device. Shoppers can browse and purchase products through a fast Next.js storefront backed by MongoDB, with SEO foundations that help the brand grow online.",
    liveUrl: "https://looklifybd.com",
    client: "Looklify BD",
    location: "Bangladesh",
    year: "2025",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Beauty product browsing and purchase flows",
      "Responsive, SEO-optimized storefront",
      "Clean product presentation for skincare brands",
      "Performance-focused Next.js architecture",
    ],
    results: [
      "Live storefront at looklifybd.com",
      "Mobile-ready shopping experience for beauty buyers",
    ],
  },
  {
    id: "career-ostad",
    title: "CareerOstad – AI Job Matching",
    category: "saas",
    image:
      "/Portfolio/career-ostad.webp",
    description:
      "An AI-powered career platform with job matching, interview prep, LMS, messaging, and role-based dashboards.",
    overview:
      "CareerOstad connects candidates and companies through AI-driven matching, career tools, and a built-in LMS. Google Gemini powers cover letters, interview practice, quizzes, and roadmaps, while Socket.io enables real-time messaging and notifications across candidate, company, and admin roles.",
    client: "CareerOstad",
    year: "2025",
    techStack: [
      "Next.js 16",
      "React 19",
      "MongoDB",
      "Google Gemini",
      "NextAuth",
      "Socket.io",
      "Stripe",
      "Cloudinary",
    ],
    features: [
      "AI job matching and skill-gap analysis",
      "Cover letter, resume, and interview practice tools",
      "LMS with enrollment, progress, and PDF certificates",
      "Real-time messaging and notifications",
      "Dashboards for candidates, companies, and admins",
      "Stripe payments and OAuth authentication",
    ],
    results: [
      "Unified career ecosystem for seekers and employers",
      "AI tools that accelerate application readiness",
    ],
  },
  {
    id: "salma-air-travels",
    title: "Salma Air Travels",
    category: "web",
    image:
      "/Portfolio/salmaair.webp",
    description:
      "A trusted travel agency website for Hajj, Umrah, and international travel—government-approved and IATA-accredited.",
    overview:
      "Salma Air Travels is a Bangladesh government–approved and IATA-accredited travel agency. The website communicates trust and accountability for Hajj, Umrah, and international journeys—emphasising clear written agreements and dependable service for travellers.",
    client: "Salma Air Travels",
    location: "Bangladesh",
    year: "2025",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Brand-focused marketing site for travel packages",
      "Highlight of IATA accreditation and government approval",
      "Hajj, Umrah, and international travel service pages",
      "Trust-building content around contracts and accountability",
    ],
    results: [
      "Professional digital presence for a regulated travel agency",
      "Clear messaging for pilgrims and international travellers",
    ],
  },
  {
    id: "tazminur-rahman-tanim-portfolio",
    title: "Tazminur Rahman Tanim — Portfolio",
    category: "portfolio",
    image:
      "/Portfolio/tazminur.webp",
    description:
      "A modern full-stack personal portfolio with a public site and secure admin dashboard for dynamic content.",
    overview:
      "A developer portfolio built with Next.js 16 featuring animated public pages and a JWT-protected admin dashboard. Projects, certificates, testimonials, messages, and profile media are managed dynamically through MongoDB and Cloudinary—with Open Graph metadata powered by the live profile image.",
    liveUrl: "https://tazminur.me",
    client: "Tazminur Rahman Tanim",
    year: "2026",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    features: [
      "Animated hero with dynamic profile and typewriter effect",
      "Projects, certificates, testimonials, and contact flows",
      "Password-protected admin dashboard with CRUD",
      "Messages inbox for contact form submissions",
      "Cloudinary-powered profile and project images",
    ],
    results: [
      "Live personal brand at tazminur.me",
      "Fully editable portfolio without redeploying content",
    ],
  },
  {
    id: "bogura-bashi",
    title: "Bogura Bashi Website",
    category: "web",
    image:
      "/Portfolio/bogurabashi.webp",
    description:
      "A community platform for Bogura—emergency contacts, healthcare, transport, businesses, news, and admin CMS.",
    overview:
      "Bogura Bashi is a digital hub for residents of the Bogura region. From emergency and healthcare directories to transport, utilities, local businesses, and news, the platform centralises everyday community information behind a responsive UI and a comprehensive admin CMS.",
    liveUrl: "https://bogurabashi.com",
    client: "Bogura Bashi",
    location: "Bogura, Bangladesh",
    year: "2024",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
      "React Query",
    ],
    features: [
      "Emergency, healthcare, transport, and utility directories",
      "Local business and service listings",
      "News, notices, and community events",
      "Auth with role-based admin content management",
      "Mobile-first responsive experience",
    ],
    results: [
      "Centralised access to Bogura community services",
      "Live platform at bogurabashi.com",
    ],
  },
  {
    id: "blood-donation-management",
    title: "Blood Donation Management System",
    category: "saas",
    image:
      "/Portfolio/blood.webp",
    description:
      "A full-stack blood donation platform for donors, volunteers, and admins with matching, inventory, and certificates.",
    overview:
      "This blood donation management system connects donors, volunteers, and administrators around urgent and regular blood requests. Features include donor matching by group and location, appointments, campaigns, inventory tracking, certificates, and role-based dashboards.",
    liveUrl: "https://blood-donation-3x3q.vercel.app/",
    year: "2024",
    techStack: [
      "Next.js 16",
      "React 19",
      "MongoDB",
      "NextAuth",
      "Tailwind CSS",
      "Nodemailer",
    ],
    features: [
      "Multi-role access for admin, donor, and volunteer",
      "Blood request creation with status tracking",
      "Donor search by blood group and location",
      "Appointments, campaigns, and blood drives",
      "Inventory alerts and donation certificates",
      "Email notifications and analytics dashboards",
    ],
    results: [
      "End-to-end digital workflow for donation logistics",
      "Live demo deployed on Vercel",
    ],
  },
  {
    id: "ness-wear",
    title: "Ness-Wear",
    category: "ecommerce",
    image:
      "/Portfolio/nesswear.webp",
    description:
      "A modern fashion e-commerce frontend with product browsing, detail galleries, and an admin dashboard scaffold.",
    overview:
      "Ness-Wear is a fashion-forward e-commerce frontend built with React and Vite. Shoppers get product listing, category, and detail experiences with a polished DaisyUI interface, while an admin scaffold covers overview, orders, products, categories, customers, and settings.",
    liveUrl: "https://nesswearforyou.netlify.app",
    client: "Ness-Wear",
    year: "2025",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "DaisyUI",
      "React Query",
      "Axios",
    ],
    features: [
      "Product listing, categories, and filtering UI",
      "Product detail pages with image gallery",
      "Auth context scaffold for protected routes",
      "Admin dashboard layout and core sections",
      "React Query data-fetching patterns",
    ],
    results: [
      "Live fashion storefront on Netlify",
      "Fast Vite-powered development and builds",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getRelatedProjects(id: string, limit = 3) {
  const current = getProjectById(id);
  if (!current) return projects.slice(0, limit);

  const sameCategory = projects.filter(
    (project) => project.id !== id && project.category === current.category,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = projects.filter(
    (project) =>
      project.id !== id && project.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
