import {
  ArrowRight,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, LucideIcon> = {
  Briefcase,
  Building2,
  Cloud,
  Code2,
  ShoppingCart,
};

export function ServicesGrid() {
  return (
    <section
      className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div
        aria-hidden="true"
        className="absolute top-20 -left-40 size-96 rounded-full bg-blue-200/30 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          id="services-heading"
          eyebrow="What We Do"
          heading={
            <>
              Solutions designed to move your{" "}
              <GradientText>business forward</GradientText>
            </>
          }
          subtitle="From first concept to launch and beyond, we build reliable digital products that solve real problems and scale with your ambitions."
        />

        <div className="relative mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Code2;
            const featured = index === 0;

            return (
              <Card
                key={service.slug}
                className={cn(
                  "group relative flex min-h-72 flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-8",
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2",
                  featured
                    ? "border-blue-200! bg-linear-to-br! from-blue-50! via-white! to-violet-100! shadow-[0_28px_70px_-35px_rgba(37,99,235,0.4)]"
                    : index % 2 === 0
                      ? "border-blue-100! bg-blue-50/70! shadow-[0_24px_60px_-35px_rgba(37,99,235,0.45)]"
                      : "border-violet-100! bg-violet-50/60! shadow-[0_24px_60px_-35px_rgba(124,58,237,0.4)]",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-heading absolute top-5 right-6 text-6xl font-bold tracking-tighter transition-colors",
                    featured ? "text-accent-blue/8" : "text-slate-900/4",
                  )}
                >
                  0{index + 1}
                </span>
                <div
                  className={cn(
                    "relative flex size-13 items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105",
                    featured
                      ? "text-white shadow-lg shadow-blue-200/70"
                      : "text-accent-blue shadow-sm",
                  )}
                >
                  <span
                    className={cn(
                      "gradient-brand absolute inset-0 transition-opacity duration-300",
                      featured ? "opacity-100" : "opacity-12 group-hover:opacity-20",
                    )}
                  />
                  <Icon
                    aria-hidden="true"
                    className="relative size-6"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="font-heading mt-7 text-xl font-bold text-text-primary md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-text-secondary">
                  {service.shortDesc}
                </p>

                <Link
                  href={`/services#${service.slug}`}
                  className={cn(
                    "mt-4 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold transition-colors focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                    "text-accent-blue hover:text-accent-violet",
                  )}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
