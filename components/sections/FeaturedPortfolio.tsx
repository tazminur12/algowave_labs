import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  projects,
  type ProjectCategory,
} from "@/lib/data/portfolio";

const categoryDetails: Record<
  ProjectCategory,
  { label: string; icon: LucideIcon }
> = {
  web: { label: "Web Development", icon: Code2 },
  erp: { label: "ERP System", icon: Building2 },
  saas: { label: "SaaS Platform", icon: Cloud },
  ecommerce: { label: "E-commerce", icon: ShoppingBag },
  portfolio: { label: "Portfolio", icon: BriefcaseBusiness },
};

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
          {featuredProjects.map((project) => {
            const { label } = categoryDetails[project.category];

            return (
              <Card
                key={project.id}
                className="group overflow-hidden border-blue-100! bg-linear-to-b! from-white! to-blue-50/70! p-0 shadow-[0_28px_70px_-38px_rgba(37,99,235,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_-30px_rgba(37,99,235,0.35)]"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-200">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <Badge
                    variant="neutral"
                    className="absolute top-4 left-4 z-10 bg-white/90! text-text-primary shadow-sm backdrop-blur-md"
                  >
                    {label}
                  </Badge>

                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-accent-blue/0 transition-colors duration-300 group-hover:bg-accent-blue/20">
                    <Button
                      asChild
                      variant="primary"
                      className="translate-y-2 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                    >
                      <Link href={`/portfolio#${project.id}`}>
                        View Project
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="border-t border-blue-100 p-6">
                  <h3 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
                    {project.description}
                  </p>
                </div>
              </Card>
            );
          })}
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
