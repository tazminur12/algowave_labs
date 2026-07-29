"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  projects,
  type ProjectCategory,
} from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

type FilterValue = "all" | ProjectCategory;

const filters: Array<{ label: string; value: FilterValue }> = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "ERP", value: "erp" },
  { label: "SaaS", value: "saas" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Portfolio Sites", value: "portfolio" },
];

const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web Development",
  erp: "ERP",
  saas: "SaaS",
  ecommerce: "E-commerce",
  portfolio: "Portfolio Sites",
};

export function PortfolioProjects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 sm:px-5",
                  isActive
                    ? "gradient-brand border-transparent text-white shadow-sm"
                    : "border-border-light bg-white text-text-secondary hover:border-accent-blue hover:text-accent-blue",
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  id={project.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="scroll-mt-19"
                >
                  <Card className="group h-full overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-video overflow-hidden bg-slate-200">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      <Badge
                        variant="neutral"
                        className="absolute top-4 left-4 z-10 bg-white/90 text-text-primary shadow-sm backdrop-blur-sm"
                      >
                        {categoryLabels[project.category]}
                      </Badge>

                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-accent-blue/0 transition-colors duration-300 group-hover:bg-accent-blue/15">
                        <Button
                          asChild
                          variant="primary"
                          className="translate-y-2 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                        >
                          <Link href={`#${project.id}`}>
                            View Project
                            <ArrowRight
                              aria-hidden="true"
                              className="size-4"
                            />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
                        {project.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredProjects.length === 0 ? (
          <p className="mt-12 text-center text-text-secondary">
            No projects found in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
