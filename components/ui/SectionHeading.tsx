import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SectionHeadingAlignment = "left" | "center" | "right";
export type SectionHeadingTone = "light" | "dark";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  alignment?: SectionHeadingAlignment;
  tone?: SectionHeadingTone;
}

const alignmentClasses: Record<SectionHeadingAlignment, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  alignment = "center",
  tone = "light",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3",
        alignmentClasses[alignment],
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm",
          tone === "dark" ? "text-blue-300" : "text-accent-blue",
        )}
      >
        <span className="gradient-brand h-px w-8" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "font-heading max-w-3xl text-3xl font-bold tracking-tight md:text-5xl",
          tone === "dark" ? "text-white" : "text-text-primary",
        )}
      >
        {heading}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed md:text-lg",
            tone === "dark" ? "text-slate-300" : "text-text-secondary",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
