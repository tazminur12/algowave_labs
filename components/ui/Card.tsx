import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-border-light bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-6",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";
