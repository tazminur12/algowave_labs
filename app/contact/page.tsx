import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import {
  PageHeader,
  PageHeaderAccent,
} from "@/components/ui/PageHeader";

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
      <PageHeader
        tone="contact"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Build Something{" "}
            <PageHeaderAccent tone="contact">Great</PageHeaderAccent>
          </>
        }
        description="Share your goals, timeline, and challenges. We will help you shape a clear next step toward a scalable digital solution."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <Suspense
            fallback={
              <div className="min-h-96 rounded-xl border border-border-light bg-white" />
            }
          >
            <ContactForm />
          </Suspense>
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
