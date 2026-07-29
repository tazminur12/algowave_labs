export type PricingPlan = {
  name: string;
  price: string;
  featured: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$1,499",
    featured: false,
    features: [
      "Up to 5-page marketing website",
      "Responsive mobile-first design",
      "Basic SEO and analytics setup",
      "Contact form integration",
      "2 rounds of revisions",
      "2 weeks of post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "$3,999",
    featured: true,
    features: [
      "Custom UI/UX and brand-aligned design",
      "Up to 12 pages or product sections",
      "CMS or headless content management",
      "Performance & SEO optimization",
      "Lead capture and integrations",
      "4 weeks of post-launch support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    featured: false,
    features: [
      "Custom web apps, ERP, or SaaS builds",
      "Dedicated product and engineering team",
      "Architecture, security, and scalability planning",
      "Third-party and API integrations",
      "Priority support and SLA options",
      "Ongoing roadmap and iteration partnership",
    ],
  },
];
