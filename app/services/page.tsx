import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Button } from "@/components/ui/Button";
import {
  PageHeader,
  PageHeaderAccent,
} from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Explore AlgoWave Labs services for web development, ERP systems, SaaS platforms, e-commerce solutions, and professional portfolio websites.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | AlgoWave Labs",
    description:
      "Scalable digital solutions designed and built around your business goals.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        tone="services"
        eyebrow="What We Do"
        title={
          <>
            Our <PageHeaderAccent tone="services">Services</PageHeaderAccent>
          </>
        }
        description="From high-performance websites to business-critical platforms, we create practical digital solutions that improve operations, strengthen customer experiences, and support sustainable growth."
        actions={
          <Button asChild variant="primary">
            <Link href="/contact">
              Talk about your project
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        }
      />

      <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50/80 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="secondary">
              <Link
                href={`/contact?service=${encodeURIComponent("Other / Not sure")}`}
              >
                Not sure which service fits?
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQAccordion />
      <CTABanner
        heading="Have a project that needs the right technical partner?"
        subtext="Tell us what you are building, where you are stuck, or what you want to improve. We will help you find a clear way forward."
        buttonLabel="Discuss Your Project"
      />
    </>
  );
}
