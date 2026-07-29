import {
  Briefcase,
  Building2,
  Check,
  Cloud,
  Code2,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

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

const serviceIcons: Record<string, LucideIcon> = {
  Briefcase,
  Building2,
  Cloud,
  Code2,
  ShoppingCart,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-background-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              What We Do
            </p>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Our <GradientText>Services</GradientText>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              From high-performance websites to business-critical platforms,
              we create practical digital solutions that improve operations,
              strengthen customer experiences, and support sustainable growth.
            </p>
          </div>
        </section>

        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon] ?? Code2;
          const reversed = index % 2 === 1;

          return (
            <section
              id={service.slug}
              key={service.slug}
              className={cn(
                "scroll-mt-19 py-20 md:py-28",
                reversed ? "bg-background-secondary" : "bg-white",
              )}
            >
              <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
                <div
                  className={cn(
                    "relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-border-light bg-slate-200 shadow-xl shadow-slate-900/8",
                    reversed && "lg:order-2",
                  )}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} service visual`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 flex size-12 items-center justify-center overflow-hidden rounded-xl border border-white/40 bg-white/90 text-accent-blue shadow-lg backdrop-blur-sm">
                    <Icon
                      aria-hidden="true"
                      className="size-6"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <div className={cn(reversed && "lg:order-1")}>
                  <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl text-accent-blue">
                    <span className="gradient-brand absolute inset-0 opacity-10" />
                    <Icon
                      aria-hidden="true"
                      className="relative size-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h2 className="font-heading mt-6 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                    {service.fullDesc}
                  </p>

                  <h3 className="font-heading mt-8 text-lg font-bold text-text-primary">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-text-primary"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-success">
                          <Check
                            aria-hidden="true"
                            className="size-3.5"
                            strokeWidth={2.5}
                          />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.techStack.map((technology, techIndex) => (
                      <Badge
                        key={technology}
                        variant={techIndex % 2 === 0 ? "blue" : "violet"}
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <FAQAccordion />
        <CTABanner
          heading="Have a project that needs the right technical partner?"
          subtext="Tell us what you are building, where you are stuck, or what you want to improve. We will help you find a clear way forward."
          buttonLabel="Discuss Your Project"
        />
      </main>
      <Footer />
    </>
  );
}
