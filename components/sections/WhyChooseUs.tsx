import {
  Code2,
  Headphones,
  Network,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Scalable Architecture",
    description:
      "We build on solid foundations so your product stays reliable as users, data, and business requirements grow.",
    icon: Network,
  },
  {
    title: "Fast Delivery",
    description:
      "Focused sprints, clear milestones, and regular reviews keep projects moving without sacrificing quality.",
    icon: Rocket,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Proven, current technologies deliver better performance, stronger security, and easier long-term maintenance.",
    icon: Code2,
  },
  {
    title: "Dedicated Support",
    description:
      "We stay available after launch with responsive guidance, maintenance, and improvements as your needs evolve.",
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-blue-50 via-white to-violet-50 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="gradient-brand absolute -top-48 -right-48 -z-10 size-128 rounded-full opacity-12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-size-[48px_48px] opacity-60 mask-[linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Built for long-term success"
          heading="Why Choose AlgoWave Labs"
          subtitle="We combine thoughtful strategy, dependable engineering, and close collaboration to deliver products that create lasting value."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }, index) => (
            <Card
              key={title}
              className={cn(
                "group relative h-full overflow-hidden p-6 shadow-[0_20px_60px_-35px_rgba(37,99,235,0.35)] transition-all duration-500 hover:-translate-y-1.5 sm:p-7",
                index % 2 === 0
                  ? "border-blue-100! bg-blue-50/75!"
                  : "border-violet-100! bg-violet-50/75!",
              )}
            >
              <span className="font-heading absolute top-5 right-5 text-sm font-bold text-accent-blue/20">
                0{index + 1}
              </span>
              <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-2xl text-white shadow-lg shadow-blue-950/40">
                <span className="gradient-brand absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <Icon
                  aria-hidden="true"
                  className="relative size-6"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-heading mt-6 text-xl font-bold text-text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
