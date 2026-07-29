export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  techStack: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "Code2",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Fast, responsive websites and web apps built to convert visitors into customers.",
    fullDesc:
      "We design and develop modern, high-performance websites tailored to your brand and business goals. From marketing sites to complex web applications, every build is mobile-first, SEO-ready, and engineered for long-term scalability.",
    included: [
      "Custom UI/UX design and responsive development",
      "Performance optimization and Core Web Vitals",
      "CMS or headless content setup",
      "Analytics, SEO foundations, and launch support",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
  },
  {
    slug: "erp-systems",
    title: "ERP Systems",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Centralized business systems that streamline operations, inventory, and reporting.",
    fullDesc:
      "Our custom ERP solutions unify your core workflows—finance, inventory, HR, and operations—into one secure platform. We map your processes, automate repetitive work, and give leadership clear real-time visibility across the organization.",
    included: [
      "Process discovery and system architecture",
      "Modules for inventory, finance, and operations",
      "Role-based access and audit-ready reporting",
      "Training, documentation, and phased rollout",
    ],
    techStack: ["Node.js", "PostgreSQL", "React", "REST APIs", "Docker"],
  },
  {
    slug: "saas-platforms",
    title: "SaaS Platforms",
    icon: "Cloud",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Multi-tenant SaaS products with billing, auth, and scalable cloud infrastructure.",
    fullDesc:
      "We help founders and companies ship production-ready SaaS products—from MVP to growth stage. That includes authentication, subscriptions, dashboards, admin tools, and cloud architecture designed to scale with your user base.",
    included: [
      "Product discovery and technical roadmap",
      "Auth, billing, and multi-tenant architecture",
      "Admin panels and customer dashboards",
      "CI/CD, monitoring, and cloud deployment",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    icon: "ShoppingCart",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Conversion-focused online stores with secure checkout and inventory management.",
    fullDesc:
      "We build e-commerce experiences that look premium and sell effectively. From product catalogs and checkout flows to payment integrations and order management, we deliver stores that are fast, secure, and easy for your team to operate.",
    included: [
      "Custom storefront design and product pages",
      "Secure payments and checkout optimization",
      "Inventory, orders, and customer accounts",
      "Integrations with shipping and marketing tools",
    ],
    techStack: ["Next.js", "Shopify", "Stripe", "Tailwind CSS", "PostgreSQL"],
  },
  {
    slug: "professional-portfolios",
    title: "Professional Portfolios",
    icon: "Briefcase",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    shortDesc:
      "Polished personal and brand portfolios that showcase your work with clarity.",
    fullDesc:
      "Whether you are a freelancer, creative studio, or executive brand, we craft portfolio sites that communicate credibility instantly. Clean layouts, strong typography, and purposeful motion help your best work stand out and convert inquiries.",
    included: [
      "Brand-aligned visual design and storytelling",
      "Project case study layouts and galleries",
      "Contact/lead capture and social integrations",
      "Mobile-optimized performance and hosting setup",
    ],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
  },
];
