import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/portfolio";
import { ArrowRight } from "lucide-react";

export function FeaturedPortfolio() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-slate-100 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="gradient-brand absolute -top-72 left-1/2 size-160 -translate-x-1/2 rounded-full opacity-8 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          heading={
            <>
              Selected projects built for{" "}
              <GradientText>real-world impact</GradientText>
            </>
          }
          subtitle="Explore a few of the digital products and platforms we have designed to help ambitious businesses work smarter and grow."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Button asChild variant="secondary" className="group">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
