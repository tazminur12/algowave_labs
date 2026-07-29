import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Discover",
    description:
      "We learn your goals, users, and workflows to define the right scope and a clear path forward.",
  },
  {
    title: "Design",
    description:
      "We turn strategy into intuitive flows and polished interfaces, with your feedback built into every review.",
  },
  {
    title: "Develop",
    description:
      "Our team builds the product in focused milestones using scalable architecture and modern engineering practices.",
  },
  {
    title: "Deliver",
    description:
      "After thorough testing, we launch smoothly, document everything, and stay available for ongoing support.",
  },
] as const;

export function ProcessTimeline() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Process"
          heading="How We Work"
          subtitle="A transparent, collaborative process keeps every project focused—from the first conversation through launch."
        />

        <div className="relative mt-12 lg:mt-16">
          <div
            aria-hidden="true"
            className="gradient-brand absolute top-6 bottom-6 left-6 w-0.5 -translate-x-1/2 md:right-[12.5%] md:bottom-auto md:left-[12.5%] md:h-0.5 md:w-auto md:translate-x-0"
          />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <div
                  className="gradient-brand relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-md ring-8 ring-white"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>
                <div className="pt-1 md:pt-0">
                  <h3 className="font-heading text-xl font-bold text-text-primary md:mt-7 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary md:mx-auto md:mt-3 md:text-base md:leading-7">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
