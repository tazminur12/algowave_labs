import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "gradient-brand rounded-full text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(124,58,237,0.75)] focus-visible:ring-accent-blue",
  secondary:
    "rounded-full border-2 border-text-primary bg-transparent text-text-primary hover:bg-background-secondary focus-visible:ring-text-primary",
  ghost:
    "rounded-full bg-transparent text-text-primary hover:bg-background-secondary focus-visible:ring-text-secondary",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, className, type = "button", variant = "primary", ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:text-base",
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
