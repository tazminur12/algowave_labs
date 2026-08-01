"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { PortfolioCard } from "@/components/ui/PortfolioCard";
import {
  categoryLabels,
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
    <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50/80 to-white py-20 md:py-28">
      <div
        aria-hidden="true"
        className="gradient-brand absolute -top-40 right-0 size-96 rounded-full opacity-10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-0 size-80 rounded-full bg-accent-violet/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            const count =
              filter.value === "all"
                ? projects.length
                : projects.filter((p) => p.category === filter.value).length;

            if (filter.value !== "all" && count === 0) return null;

            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 sm:px-5",
                  isActive
                    ? "gradient-brand border-transparent text-white shadow-[0_12px_30px_-12px_rgba(37,99,235,0.7)]"
                    : "border-border-light bg-white/80 text-text-secondary backdrop-blur-sm hover:border-accent-blue hover:text-accent-blue",
                )}
              >
                {filter.label}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-text-secondary",
                  )}
                >
                  {count}
                </span>
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
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  <PortfolioCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredProjects.length === 0 ? (
          <p className="mt-12 text-center text-text-secondary">
            No {activeFilter === "all" ? "" : categoryLabels[activeFilter].toLowerCase()}{" "}
            projects found yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
