import {
  BadgeCheck,
  Lightbulb,
  MessagesSquare,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CoreValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description:
      "We stay curious, challenge assumptions, and apply new ideas where they create meaningful business value.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    description:
      "We care about the details—from thoughtful interfaces to maintainable code and dependable performance.",
    icon: BadgeCheck,
  },
  {
    title: "Transparency",
    description:
      "Clear communication, honest guidance, and visible progress keep every partnership aligned from day one.",
    icon: MessagesSquare,
  },
  {
    title: "Reliability",
    description:
      "We follow through on commitments and build solutions our clients can depend on as their businesses grow.",
    icon: ShieldCheck,
  },
];

export function CoreValues() {
  return (
    <section className="bg-background-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What Guides Us"
          heading="Our Core Values"
          subtitle="The principles behind how we make decisions, build products, and work with every client."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {coreValues.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="group h-full p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-xl text-accent-blue">
                <span className="gradient-brand absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20" />
                <Icon
                  aria-hidden="true"
                  className="relative size-5.5 transition-colors duration-300 group-hover:text-accent-violet"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-heading mt-5 text-xl font-bold text-text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
