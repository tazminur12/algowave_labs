import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data/stats";
import { cn } from "@/lib/utils";

export interface StatsProps {
  className?: string;
}

export function Stats({ className }: StatsProps) {
  return (
    <section className={cn("bg-white py-20 md:py-28", className)}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="By the Numbers"
          heading="Results built through strong partnerships"
          subtitle="Every number reflects the trust our clients place in us and the care we bring to each engagement."
        />

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-border-light pl-5 text-left sm:border-l-0 sm:pl-0 sm:text-center"
            >
              <dd className="gradient-brand-text font-heading inline-block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-sm font-semibold text-text-secondary sm:text-base">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
