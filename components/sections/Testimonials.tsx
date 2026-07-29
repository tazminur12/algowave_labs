import Image from "next/image";
import { Quote } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-violet-50/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client Stories"
          heading="What Our Clients Say"
          subtitle="We measure our work by the value it creates and the partnerships we build along the way."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const featured = index === 1;

            return (
              <Card
                key={testimonial.name}
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
                <div
                  className={cn(
                    "relative flex size-11 items-center justify-center rounded-full",
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

                <blockquote className="mt-6 flex-1">
                  <p className="text-base leading-7 text-text-primary md:text-lg md:leading-8">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <div
                  className={cn(
                    "mt-8 flex items-center gap-4 border-t pt-6",
                    featured ? "border-blue-200" : "border-border-light",
                  )}
                >
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                    <Image
                      src={testimonial.photo}
                      alt={`${testimonial.name} photo`}
                      fill
                      sizes="48px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-sm text-text-secondary">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
