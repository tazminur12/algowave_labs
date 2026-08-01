export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  techStack: string[];
  idealFor: string[];
  process: Array<{ title: string; detail: string }>;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "Code2",
    image: "/services/web-development.webp",
    shortDesc:
      "Fast, responsive websites and web apps built to convert visitors into customers.",
    fullDesc:
      "We design and develop modern, high-performance websites tailored to your brand and business goals. From marketing sites to complex web applications, every build is mobile-first, SEO-ready, and engineered for long-term scalability. Our process balances visual craft with measurable conversion so your site becomes a reliable growth channel—not just a brochure.",
    included: [
      "Custom UI/UX design and responsive development",
      "Performance optimization and Core Web Vitals",
      "CMS or headless content setup",
      "Analytics, SEO foundations, and launch support",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    idealFor: [
      "Growing businesses that need a professional online presence",
      "Startups launching a marketing site or product landing page",
      "Teams replacing a slow or outdated website",
      "Brands that need SEO-ready, conversion-focused pages",
    ],
    process: [
      {
        title: "Discover",
        detail:
          "We clarify goals, audiences, and messaging so the site structure supports real business outcomes.",
      },
      {
        title: "Design",
        detail:
          "Wireframes and premium UI explore hierarchy, brand feel, and the conversion path before development.",
      },
      {
        title: "Build",
        detail:
          "We develop a fast, accessible Next.js experience with clean components and production-ready performance.",
      },
      {
        title: "Launch",
        detail:
          "SEO basics, analytics, QA, and deployment wrap up so you go live with confidence and room to iterate.",
      },
    ],
    outcomes: [
      "A polished website that loads quickly on mobile and desktop",
      "Clear paths for leads, bookings, or product discovery",
      "A maintainable foundation you can grow without rebuilding",
    ],
  },
  {
    slug: "erp-systems",
    title: "ERP Systems",
    icon: "Building2",
    image: "/services/erp-solution.webp",
    shortDesc:
      "Centralized business systems that streamline operations, inventory, and reporting.",
    fullDesc:
      "Our custom ERP solutions unify your core workflows—finance, inventory, HR, and operations—into one secure platform. We map your processes, automate repetitive work, and give leadership clear real-time visibility across the organization. Instead of forcing your team into rigid software, we shape modules around how you actually work.",
    included: [
      "Process discovery and system architecture",
      "Modules for inventory, finance, and operations",
      "Role-based access and audit-ready reporting",
      "Training, documentation, and phased rollout",
    ],
    techStack: ["Node.js", "PostgreSQL", "React", "REST APIs", "Docker"],
    idealFor: [
      "Companies drowning in spreadsheets and disconnected tools",
      "Operations teams that need inventory and order visibility",
      "Businesses preparing to scale without process chaos",
      "Leaders who want role-based control and reliable reports",
    ],
    process: [
      {
        title: "Map workflows",
        detail:
          "We interview stakeholders and document current processes, bottlenecks, and reporting needs.",
      },
      {
        title: "Architect modules",
        detail:
          "Prioritized modules and data models are designed around your operations—not generic templates.",
      },
      {
        title: "Build & integrate",
        detail:
          "We implement secure dashboards, permissions, and integrations with phased delivery milestones.",
      },
      {
        title: "Train & hand over",
        detail:
          "Your team gets documentation, training, and a rollout plan that reduces disruption.",
      },
    ],
    outcomes: [
      "One system of record for core business operations",
      "Faster reporting and fewer manual handoffs",
      "A scalable ERP foundation ready for future modules",
    ],
  },
  {
    slug: "saas-platforms",
    title: "SaaS Platforms",
    icon: "Cloud",
    image: "/services/erp-solution.webp",
    shortDesc:
      "Multi-tenant SaaS products with billing, auth, and scalable cloud infrastructure.",
    fullDesc:
      "We help founders and companies ship production-ready SaaS products—from MVP to growth stage. That includes authentication, subscriptions, dashboards, admin tools, and cloud architecture designed to scale with your user base. We focus on clean product foundations so you can iterate features without rewriting the platform every quarter.",
    included: [
      "Product discovery and technical roadmap",
      "Auth, billing, and multi-tenant architecture",
      "Admin panels and customer dashboards",
      "CI/CD, monitoring, and cloud deployment",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    idealFor: [
      "Founders validating a SaaS idea with a production-ready MVP",
      "Teams adding billing, roles, and multi-tenant structure",
      "Products that need admin tools and customer dashboards",
      "Startups preparing infrastructure for real user growth",
    ],
    process: [
      {
        title: "Product scope",
        detail:
          "We define MVP boundaries, user roles, and the first revenue-ready feature set.",
      },
      {
        title: "Core platform",
        detail:
          "Auth, tenancy, billing, and dashboard shells are built as reusable product foundations.",
      },
      {
        title: "Feature delivery",
        detail:
          "Priority workflows ship in iterations with QA, monitoring, and clean release cycles.",
      },
      {
        title: "Scale readiness",
        detail:
          "We harden deployment, observability, and admin tooling for ongoing growth.",
      },
    ],
    outcomes: [
      "A SaaS product users can sign up for and pay for",
      "Reliable auth, billing, and admin operations",
      "Architecture that can grow from MVP to scale",
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    icon: "ShoppingCart",
    image: "/services/e-commerce.webp",
    shortDesc:
      "Conversion-focused online stores with secure checkout and inventory management.",
    fullDesc:
      "We build e-commerce experiences that look premium and sell effectively. From product catalogs and checkout flows to payment integrations and order management, we deliver stores that are fast, secure, and easy for your team to operate. Every storefront decision is guided by trust, clarity, and conversion.",
    included: [
      "Custom storefront design and product pages",
      "Secure payments and checkout optimization",
      "Inventory, orders, and customer accounts",
      "Integrations with shipping and marketing tools",
    ],
    techStack: ["Next.js", "Shopify", "Stripe", "Tailwind CSS", "PostgreSQL"],
    idealFor: [
      "Brands launching a modern online store",
      "Retailers needing better checkout and product UX",
      "Teams managing inventory, orders, and customer accounts",
      "Businesses integrating payments and shipping workflows",
    ],
    process: [
      {
        title: "Catalog strategy",
        detail:
          "We structure products, categories, and merchandising for browsing that feels effortless.",
      },
      {
        title: "Storefront design",
        detail:
          "Premium product pages and mobile-first shopping flows are designed around conversion.",
      },
      {
        title: "Commerce build",
        detail:
          "Checkout, payments, inventory, and account features are implemented with operational clarity.",
      },
      {
        title: "Optimize & launch",
        detail:
          "We test purchase flows, connect tools, and launch with room for campaigns and growth.",
      },
    ],
    outcomes: [
      "A storefront that feels trustworthy and easy to buy from",
      "Smooth checkout with secure payment options",
      "Back-office flows your team can actually manage daily",
    ],
  },
  {
    slug: "professional-portfolios",
    title: "Professional Portfolios",
    icon: "Briefcase",
    image: "/services/portfolio.webp",
    shortDesc:
      "Polished personal and brand portfolios that showcase your work with clarity.",
    fullDesc:
      "Whether you are a freelancer, creative studio, or executive brand, we craft portfolio sites that communicate credibility instantly. Clean layouts, strong typography, and purposeful motion help your best work stand out and convert inquiries. The goal is simple: make visitors understand your value in seconds.",
    included: [
      "Brand-aligned visual design and storytelling",
      "Project case study layouts and galleries",
      "Contact/lead capture and social integrations",
      "Mobile-optimized performance and hosting setup",
    ],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    idealFor: [
      "Freelancers and creatives who need a stronger personal brand",
      "Agencies showcasing case studies and capabilities",
      "Professionals who want inquiries—not just a gallery",
      "Founders building a polished personal or studio site",
    ],
    process: [
      {
        title: "Positioning",
        detail:
          "We define the story, audience, and proof points your portfolio should communicate.",
      },
      {
        title: "Case study craft",
        detail:
          "Projects are structured for clarity—problem, approach, outcome—so work feels credible.",
      },
      {
        title: "Polished build",
        detail:
          "Elegant UI, motion, and responsive performance bring the brand experience to life.",
      },
      {
        title: "Inquiry ready",
        detail:
          "Contact flows and social proof are set up so visitors can reach out immediately.",
      },
    ],
    outcomes: [
      "A portfolio that looks premium and feels intentional",
      "Clear project storytelling that builds trust quickly",
      "A contact path designed to convert visitors into leads",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3) {
  return services.filter((service) => service.slug !== slug).slice(0, limit);
}
