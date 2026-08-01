import type { Metadata } from "next";

import { ClientLogos } from "@/components/sections/ClientLogos";
import { CTABanner } from "@/components/sections/CTABanner";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: {
    absolute: "AlgoWave Labs | Scalable Digital Solutions",
  },
  description:
    "AlgoWave Labs builds modern websites, ERP systems, SaaS platforms, e-commerce solutions, and professional portfolios for growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AlgoWave Labs | Scalable Digital Solutions",
    description:
      "Turning ideas into scalable websites, business systems, and digital products built for growth.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesGrid />
      <TechStack />
      <WhyChooseUs />
      <ProcessTimeline />
      <FeaturedPortfolio />
      <Testimonials />
      <CTABanner />
    </>
  );
}
