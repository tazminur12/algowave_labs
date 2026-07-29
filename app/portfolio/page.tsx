import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTABanner } from "@/components/sections/CTABanner";
import { PortfolioProjects } from "@/components/sections/PortfolioProjects";
import { GradientText } from "@/components/ui/GradientText";

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
      <Navbar />
      <main className="flex-1">
        <section className="bg-background-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Portfolio
            </p>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Our <GradientText>Work</GradientText>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              Explore selected websites, platforms, and digital products we have
              built to help growing businesses operate smarter and scale with
              confidence.
            </p>
          </div>
        </section>

        <PortfolioProjects />

        <CTABanner
          heading="Have a project that should be next on this list?"
          subtext="Whether you need a new website, an internal system, or a product MVP, we can help you shape the right solution and get it into production."
          buttonLabel="Start Your Project"
        />
      </main>
      <Footer />
    </>
  );
}
