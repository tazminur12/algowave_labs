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
};

export const projects: Project[] = [
  {
    id: "nova-finance",
    title: "Nova Finance Corporate Site",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "A modern marketing website for a fintech firm with animated product storytelling, lead capture, and multilingual support.",
  },
  {
    id: "harbor-ops",
    title: "HarborOps ERP Platform",
    category: "erp",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description:
      "A custom ERP for a logistics company covering warehouse inventory, purchase orders, and role-based operations dashboards.",
  },
  {
    id: "pulseboard",
    title: "PulseBoard Analytics SaaS",
    category: "saas",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    description:
      "A multi-tenant SaaS product that helps teams track KPIs, automate reports, and collaborate on shared workspaces.",
  },
  {
    id: "atelier-market",
    title: "Atelier Market Storefront",
    category: "ecommerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    description:
      "A high-converting e-commerce experience for a lifestyle brand with custom checkout, subscriptions, and inventory sync.",
  },
  {
    id: "lena-studio",
    title: "Lena Creative Portfolio",
    category: "portfolio",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    description:
      "A refined personal portfolio for a product designer featuring case studies, motion, and inquiry-focused navigation.",
  },
  {
    id: "brightpath-clinic",
    title: "BrightPath Clinic Portal",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description:
      "A patient-facing clinic website with appointment booking, service pages, and an accessible content architecture.",
  },
];
