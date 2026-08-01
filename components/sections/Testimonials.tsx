import { Quote } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-violet-50/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client Stories"
          heading={
            <>
              Feedback from projects we{" "}
              <GradientText>actually shipped</GradientText>
            </>
          }
          subtitle="Real words shaped around the websites, SaaS platforms, and e-commerce products in our portfolio."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const featured = index === 1;

            return (
              <Card
                key={`${testimonial.company}-${testimonial.project}`}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)] transition-all duration-500 hover:-translate-y-1.5 sm:p-8",
                  featured
                    ? "border-blue-200! bg-linear-to-br! from-blue-50! via-white! to-violet-100! lg:-translate-y-4 lg:hover:-translate-y-5"
                    : index === 0
                      ? "border-blue-100! bg-blue-50/60!"
                      : "border-violet-100! bg-violet-50/60!",
                )}
              >
                {featured ? (
                  <div
                    aria-hidden="true"
                    className="gradient-brand absolute -top-24 -right-24 size-56 rounded-full opacity-20 blur-3xl"
                  />
                ) : null}

                <div className="relative flex items-center justify-between gap-3">
                  <div
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full",
                      featured
                        ? "gradient-brand text-white shadow-lg"
                        : "bg-white text-accent-blue shadow-sm",
                    )}
                  >
                    <Quote
                      aria-hidden="true"
                      className="size-5"
                      fill="currentColor"
                    />
                  </div>
                  <span className="rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-accent-blue uppercase">
                    {testimonial.project}
                  </span>
                </div>

                <blockquote className="mt-6 flex-1">
                  <p className="text-base leading-7 text-text-primary md:text-lg md:leading-8">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <div
                  className={cn(
                    "mt-8 border-t pt-6",
                    featured ? "border-blue-200" : "border-border-light",
                  )}
                >
                  <p className="font-heading font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-sm text-text-secondary">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
