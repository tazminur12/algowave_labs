import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { type Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, LucideIcon> = {
  Briefcase,
  Building2,
  Cloud,
  Code2,
  ShoppingCart,
};

type ServiceCardProps = {
  service: Service;
  index?: number;
  className?: string;
};

export function ServiceCard({
  service,
  index = 0,
  className,
}: ServiceCardProps) {
  const href = `/services/${service.slug}`;
  const contactHref = `/contact?service=${encodeURIComponent(service.title)}`;
  const Icon = serviceIcons[service.icon] ?? Code2;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100/80 bg-white shadow-[0_24px_60px_-40px_rgba(37,99,235,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-accent-blue/25 hover:shadow-[0_36px_80px_-36px_rgba(124,58,237,0.45)]",
        className,
      )}
    >
      <Link href={href} className="relative block overflow-hidden">
        <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
          <Image
            src={service.image}
            alt={`${service.title} service`}
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
              Service
            </Badge>
            <span className="font-heading rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[11px] font-bold tracking-wider text-white backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
            <div className="min-w-0">
              <div className="mb-2 flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </div>
              <h3 className="font-heading line-clamp-2 text-lg font-bold text-white sm:text-xl">
                {service.title}
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
          {service.shortDesc}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-[11px] font-semibold text-accent-blue"
            >
              {tech}
            </span>
          ))}
          {service.techStack.length > 3 ? (
            <span className="rounded-full border border-violet-100 bg-violet-50/70 px-3 py-1 text-[11px] font-semibold text-accent-violet">
              +{service.techStack.length - 3}
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-blue-50 pt-5">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-text-primary transition-colors hover:text-accent-blue"
          >
            View details
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href={contactHref}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-violet transition-colors hover:text-accent-blue"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </article>
  );
}
