import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant = "blue" | "violet" | "neutral" | "success";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: "bg-blue-50 text-accent-blue",
  violet: "bg-violet-50 text-accent-violet",
  neutral: "bg-background-secondary text-text-secondary",
  success: "bg-emerald-50 text-success",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "blue", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-none sm:text-sm",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  ),
);

Badge.displayName = "Badge";
