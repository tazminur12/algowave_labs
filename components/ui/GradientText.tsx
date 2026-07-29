import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type GradientTextProps = HTMLAttributes<HTMLSpanElement>;

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("gradient-brand-text inline-block", className)}
      {...props}
    />
  ),
);

GradientText.displayName = "GradientText";
