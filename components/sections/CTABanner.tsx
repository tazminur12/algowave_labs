import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface CTABannerProps {
  heading?: ReactNode;
  subtext?: ReactNode;
  buttonLabel?: string;
  href?: string;
  className?: string;
}

export function CTABanner({
  heading = "Let's Build Something Scalable Together",
  subtext = "Tell us what you are working toward, and we will help turn your idea into a reliable digital solution built for growth.",
  buttonLabel = "Start a Conversation",
  href = "/contact",
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "gradient-brand relative isolate overflow-hidden py-20 text-white md:py-28",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -top-28 -left-20 -z-10 size-72 rounded-full border-48 border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -bottom-36 -z-10 size-96 rounded-full border-64 border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute top-10 right-[16%] -z-10 size-20 rounded-full bg-white/5 blur-sm"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 w-full opacity-10"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 82C190 18 357 23 530 72C704 121 867 128 1047 70C1191 24 1313 22 1440 56V120H0V82Z"
          fill="white"
        />
      </svg>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
          {subtext}
        </p>
        <Button
          asChild
          variant="ghost"
          className="group mt-8 bg-white! text-text-primary! shadow-lg shadow-slate-950/10 hover:bg-slate-100!"
        >
          <Link href={href}>
            {buttonLabel}
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </div>
    </section>
  );
}
