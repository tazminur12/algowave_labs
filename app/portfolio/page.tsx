import type { Metadata } from "next";

import { CTABanner } from "@/components/sections/CTABanner";
import { PortfolioProjects } from "@/components/sections/PortfolioProjects";
import {
  PageHeader,
  PageHeaderAccent,
} from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse AlgoWave Labs portfolio projects across web development, ERP systems, SaaS platforms, e-commerce, and professional portfolio websites.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Work | AlgoWave Labs",
    description:
      "Selected digital products and platforms built for real-world business impact.",
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        tone="portfolio"
        eyebrow="Portfolio"
        title={
          <>
            Our <PageHeaderAccent tone="portfolio">Work</PageHeaderAccent>
          </>
        }
        description="Explore selected websites, platforms, and digital products we have built to help growing businesses operate smarter and scale with confidence."
      />

      <PortfolioProjects />

      <CTABanner
        heading="Have a project that should be next on this list?"
        subtext="Whether you need a new website, an internal system, or a product MVP, we can help you shape the right solution and get it into production."
        buttonLabel="Start Your Project"
      />
    </>
  );
}
