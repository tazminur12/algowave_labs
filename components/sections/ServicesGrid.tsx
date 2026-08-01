import Link from "next/link";

import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";
import { ArrowRight } from "lucide-react";

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

        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={`/contact?service=${encodeURIComponent("Other / Not sure")}`}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-accent-blue transition-colors hover:text-accent-violet"
          >
            Need a custom solution? Contact us
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
