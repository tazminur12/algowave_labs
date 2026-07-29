import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AlgoWave Labs to discuss websites, ERP systems, SaaS platforms, e-commerce solutions, and professional portfolios for your business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AlgoWave Labs",
    description:
      "Let's build something great together. Reach out to discuss your next digital project.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-background-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Contact
            </p>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Let&apos;s Build Something{" "}
              <GradientText>Great</GradientText>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              Share your goals, timeline, and challenges. We will help you
              shape a clear next step toward a scalable digital solution.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
