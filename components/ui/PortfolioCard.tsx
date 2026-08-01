import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import {
  categoryLabels,
  type Project,
} from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

type PortfolioCardProps = {
  project: Project;
  index?: number;
  featured?: boolean;
  className?: string;
};

export function PortfolioCard({
  project,
  index = 0,
  featured = false,
  className,
}: PortfolioCardProps) {
  const href = `/portfolio/${project.id}`;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100/80 bg-white shadow-[0_24px_60px_-40px_rgba(37,99,235,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-accent-blue/25 hover:shadow-[0_36px_80px_-36px_rgba(124,58,237,0.45)]",
        featured && "bg-linear-to-b from-white via-white to-blue-50/80",
        className,
      )}
    >
      <Link href={href} className="relative block overflow-hidden">
        <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
          />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
            <Badge className="border border-white/30 bg-white/90! text-text-primary shadow-sm backdrop-blur-md">
              {categoryLabels[project.category]}
            </Badge>
            <span className="font-heading rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[11px] font-bold tracking-wider text-white backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
            <div className="min-w-0">
              {project.client ? (
                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  {project.client}
                </p>
              ) : null}
              <h3 className="font-heading mt-1 line-clamp-2 text-lg font-bold text-white sm:text-xl">
                {project.title}
              </h3>
            </div>

            <span className="gradient-brand flex size-11 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="line-clamp-3 flex-1 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-[11px] font-semibold text-accent-blue"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 ? (
            <span className="rounded-full border border-violet-100 bg-violet-50/70 px-3 py-1 text-[11px] font-semibold text-accent-violet">
              +{project.techStack.length - 3}
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-blue-50 pt-5">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-text-primary transition-colors hover:text-accent-blue"
          >
            View case study
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-text-secondary transition-colors hover:text-accent-violet"
            >
              Live
              <ExternalLink aria-hidden="true" className="size-3.5" />
            </a>
          ) : (
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary/60">
              {project.year ?? "Case study"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
