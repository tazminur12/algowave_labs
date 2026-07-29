import { ArrowRight, Layers3, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Technology = {
  name: string;
  category: string;
  logo: string;
  tint: string;
  wide?: boolean;
};

const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/react/087EA4",
    tint: "border-cyan-100 bg-cyan-50/70",
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: "https://cdn.simpleicons.org/nextdotjs/0F172A",
    tint: "border-slate-200 bg-slate-50",
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: "https://cdn.simpleicons.org/typescript/3178C6",
    tint: "border-blue-100 bg-blue-50/70",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    tint: "border-cyan-100 bg-cyan-50/70",
  },
  {
    name: "Node.js",
    category: "Runtime",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    tint: "border-emerald-100 bg-emerald-50/70",
  },
  {
    name: "Express",
    category: "Backend",
    logo: "https://cdn.simpleicons.org/express/334155",
    tint: "border-slate-200 bg-slate-50",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
    tint: "border-green-100 bg-green-50/70",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    logo: "/TechLogo/Postgresql_elephant.svg",
    tint: "border-blue-100 bg-blue-50/70",
  },
  {
    name: "Prisma",
    category: "ORM",
    logo: "/TechLogo/prisma.svg",
    tint: "border-violet-100 bg-violet-50/70",
    wide: true,
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
    tint: "border-sky-100 bg-sky-50/70",
  },
  {
    name: "AWS",
    category: "Cloud",
    logo: "/TechLogo/aws.svg",
    tint: "border-amber-100 bg-amber-50/70",
    wide: true,
  },
  {
    name: "VPS Server",
    category: "Deployment",
    logo: "https://cdn.simpleicons.org/digitalocean/0080FF",
    tint: "border-blue-100 bg-blue-50/70",
  },
];

const workflow = [
  { label: "Build", detail: "React · Next.js", icon: Layers3 },
  { label: "Scale", detail: "Node · Databases", icon: Zap },
  { label: "Ship", detail: "Docker · Cloud", icon: ShieldCheck },
] as const;

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        aria-hidden="true"
        className="gradient-brand absolute -top-52 -right-52 size-128 rounded-full opacity-8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.08)_1px,transparent_1px)] bg-size-[32px_32px] opacity-40 mask-[linear-gradient(to_bottom,black,transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            alignment="left"
            eyebrow="Technology Stack"
            heading={
              <>
                Modern tools.{" "}
                <GradientText>Production-grade results.</GradientText>
              </>
            }
            subtitle="We combine a proven full-stack ecosystem to build fast, secure, and maintainable products from interface to infrastructure."
          />

          <div className="hidden items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/60 p-2 lg:flex">
            {workflow.map(({ label, detail, icon: Icon }, index) => (
              <div key={label} className="flex items-center">
                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <div className="gradient-brand flex size-9 items-center justify-center rounded-lg text-white">
                    <Icon aria-hidden="true" className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">
                      {label}
                    </p>
                    <p className="mt-0.5 text-[11px] text-text-secondary">
                      {detail}
                    </p>
                  </div>
                </div>
                {index < workflow.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="mx-1 size-4 text-accent-blue/40"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:grid-cols-4 xl:grid-cols-6">
          {technologies.map((technology, index) => (
            <article
              key={technology.name}
              className={`group relative overflow-hidden rounded-2xl border ${technology.tint} p-4 shadow-[0_16px_45px_-34px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-blue/30 hover:shadow-[0_24px_55px_-32px_rgba(124,58,237,0.38)] sm:p-5`}
            >
              <span className="font-heading absolute top-3 right-3 text-[10px] font-bold text-text-secondary/35">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex h-20 items-center justify-center rounded-xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <Image
                  src={technology.logo}
                  alt={`${technology.name} logo`}
                  width={technology.wide ? 150 : 56}
                  height={technology.wide ? 60 : 56}
                  className={
                    technology.wide
                      ? "h-10 w-28 object-contain"
                      : "size-12 object-contain"
                  }
                  unoptimized
                />
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent-blue">
                  {technology.category}
                </p>
                <h3 className="font-heading mt-1 text-sm font-bold text-text-primary sm:text-base">
                  {technology.name}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-linear-to-r from-blue-50 via-white to-violet-50 px-5 py-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="gradient-brand flex size-10 shrink-0 items-center justify-center rounded-xl text-white">
              <ShieldCheck aria-hidden="true" className="size-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">
                Technology selected around your product
              </p>
              <p className="mt-0.5 text-xs text-text-secondary">
                No unnecessary complexity—only the right tools for performance,
                security, and growth.
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-semibold text-accent-violet shadow-sm">
            Full-stack expertise
          </span>
        </div>
      </div>
    </section>
  );
}
