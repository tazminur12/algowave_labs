import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type PageHeaderTone =
  | "services"
  | "portfolio"
  | "about"
  | "team"
  | "contact";

const toneStyles: Record<
  PageHeaderTone,
  {
    section: string;
    glowA: string;
    glowB: string;
    eyebrow: string;
    accent: string;
    grid: string;
  }
> = {
  services: {
    section: "bg-linear-to-br from-sky-50 via-white to-blue-100/70",
    glowA: "bg-sky-400/25",
    glowB: "bg-blue-500/20",
    eyebrow: "text-sky-600",
    accent:
      "bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent",
    grid: "bg-[radial-gradient(rgba(14,165,233,0.12)_1px,transparent_1px)]",
  },
  portfolio: {
    section: "bg-linear-to-br from-violet-50 via-white to-fuchsia-100/60",
    glowA: "bg-violet-400/25",
    glowB: "bg-fuchsia-400/20",
    eyebrow: "text-violet-600",
    accent:
      "bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent",
    grid: "bg-[radial-gradient(rgba(124,58,237,0.12)_1px,transparent_1px)]",
  },
  about: {
    section: "bg-linear-to-br from-teal-50 via-white to-emerald-100/60",
    glowA: "bg-teal-400/25",
    glowB: "bg-emerald-400/20",
    eyebrow: "text-teal-700",
    accent:
      "bg-linear-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent",
    grid: "bg-[radial-gradient(rgba(13,148,136,0.12)_1px,transparent_1px)]",
  },
  team: {
    section: "bg-linear-to-br from-indigo-50 via-white to-cyan-100/50",
    glowA: "bg-indigo-400/25",
    glowB: "bg-cyan-400/20",
    eyebrow: "text-indigo-600",
    accent:
      "bg-linear-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent",
    grid: "bg-[radial-gradient(rgba(79,70,229,0.12)_1px,transparent_1px)]",
  },
  contact: {
    section: "bg-linear-to-br from-orange-50 via-white to-rose-100/60",
    glowA: "bg-orange-400/25",
    glowB: "bg-rose-400/20",
    eyebrow: "text-orange-600",
    accent:
      "bg-linear-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent",
    grid: "bg-[radial-gradient(rgba(249,115,22,0.12)_1px,transparent_1px)]",
  },
};

type PageHeaderProps = {
  tone: PageHeaderTone;
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  tone,
  eyebrow,
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  const styles = toneStyles[tone];

  return (
    <section
      className={cn(
        "relative overflow-hidden py-10 md:py-14",
        styles.section,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-size-[24px_24px] opacity-50 mask-[linear-gradient(to_bottom,black,transparent)]",
          styles.grid,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute -top-24 right-0 size-56 rounded-full blur-3xl md:size-72",
          styles.glowA,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute -bottom-28 left-0 size-48 rounded-full blur-3xl md:size-64",
          styles.glowB,
        )}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p
          className={cn(
            "text-[11px] font-bold tracking-[0.2em] uppercase md:text-xs",
            styles.eyebrow,
          )}
        >
          {eyebrow}
        </p>
        <h1 className="font-heading mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem] md:leading-tight">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-secondary md:mt-4 md:text-base md:leading-7">
          {description}
        </p>
        {actions ? (
          <div className="mt-5 flex justify-center md:mt-6">{actions}</div>
        ) : null}
      </div>
    </section>
  );
}

/** Accent span for page headers — pass the same tone as PageHeader. */
export function PageHeaderAccent({
  tone,
  children,
  className,
}: {
  tone: PageHeaderTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(toneStyles[tone].accent, className)}>{children}</span>
  );
}
