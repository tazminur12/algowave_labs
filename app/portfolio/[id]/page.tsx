import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import {
  categoryLabels,
  getContactHrefForCategory,
  getProjectById,
  getRelatedProjects,
  projects,
} from "@/lib/data/portfolio";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | AlgoWave Labs`,
      description: project.description,
      url: `/portfolio/${project.id}`,
      type: "article",
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.id, 3);
  const contactHref = getContactHrefForCategory(project.category);

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-violet-50">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.08)_1px,transparent_1px)] bg-size-[28px_28px] opacity-60 mask-[linear-gradient(to_bottom,black,transparent)]"
          />
          <div
            aria-hidden="true"
            className="gradient-brand absolute -top-40 right-0 size-120 rounded-full opacity-15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 left-0 size-96 rounded-full bg-accent-violet/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-14 md:pb-20">
            <Link
              href="/portfolio"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-accent-blue"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back to portfolio
            </Link>

            <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="border border-blue-100 bg-white! text-accent-blue shadow-sm">
                    {categoryLabels[project.category]}
                  </Badge>
                  {project.year ? (
                    <span className="text-xs font-semibold tracking-[0.16em] text-text-secondary uppercase">
                      {project.year}
                    </span>
                  ) : null}
                </div>

                <h1 className="font-heading mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <Button asChild variant="primary">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit live site
                        <ExternalLink aria-hidden="true" className="size-4" />
                      </a>
                    </Button>
                  ) : null}
                  <Button asChild variant="secondary">
                    <Link href={contactHref}>
                      Start a similar project
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 rounded-3xl border border-blue-100 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(37,99,235,0.45)] backdrop-blur-md sm:grid-cols-2">
                {project.client ? (
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.16em] text-accent-blue uppercase">
                      Client
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-text-primary">
                      {project.client}
                    </p>
                  </div>
                ) : null}
                {project.location ? (
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.16em] text-accent-blue uppercase">
                      Location
                    </p>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary">
                      <MapPin
                        aria-hidden="true"
                        className="size-3.5 text-accent-violet"
                      />
                      {project.location}
                    </p>
                  </div>
                ) : null}
                <div>
                  <p className="text-[11px] font-bold tracking-[0.16em] text-accent-blue uppercase">
                    Category
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-text-primary">
                    {categoryLabels[project.category]}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.16em] text-accent-blue uppercase">
                    Stack
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-text-primary">
                    {project.techStack.slice(0, 3).join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-6 md:-mt-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative aspect-21/9 overflow-hidden rounded-3xl border border-blue-100 bg-slate-200 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.55)] sm:aspect-16/7">
              <Image
                src={project.image}
                alt={`${project.title} showcase`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-slate-950/25 to-transparent"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-accent-blue uppercase">
                <Sparkles aria-hidden="true" className="size-3.5" />
                Overview
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                What we <GradientText>built</GradientText>
              </h2>
              <p className="mt-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                {project.overview}
              </p>

              <div className="mt-10">
                <h3 className="font-heading text-xl font-bold text-text-primary">
                  Key features
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-blue-50 bg-blue-50/40 p-4 text-sm leading-6 text-text-secondary"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-accent-blue"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {project.results && project.results.length > 0 ? (
                <div className="mt-10 rounded-3xl border border-violet-100 bg-linear-to-br from-violet-50/80 via-white to-blue-50/70 p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    Impact
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-3 text-sm leading-6 text-text-secondary sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="gradient-brand mt-2 size-2 shrink-0 rounded-full"
                        />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-slate-50 p-6 shadow-[0_24px_60px_-40px_rgba(37,99,235,0.45)]">
                <h3 className="font-heading text-lg font-bold text-text-primary">
                  Technology stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-text-primary shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-slate-950 p-6 text-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.55)]">
                <p className="text-xs font-bold tracking-[0.16em] text-blue-300 uppercase">
                  Next step
                </p>
                <h3 className="font-heading mt-2 text-xl font-bold">
                  Want something similar?
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Tell us about your product goals and we&apos;ll shape a clear
                  delivery plan.
                </p>
                <Button asChild variant="primary" className="mt-5 w-full">
                  <Link href={contactHref}>
                    Get a quote
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="border-t border-blue-50 bg-background-secondary py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-accent-blue uppercase">
                    More work
                  </p>
                  <h2 className="font-heading mt-2 text-3xl font-bold text-text-primary md:text-4xl">
                    Related projects
                  </h2>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-accent-blue"
                >
                  View all
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item, index) => (
                  <PortfolioCard key={item.id} project={item} index={index} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <CTABanner
          heading="Ready to build your next digital product?"
          subtext="From marketing sites to full SaaS platforms, AlgoWave Labs designs and delivers software that scales with your business."
          buttonLabel="Talk to us"
          href={contactHref}
        />
    </>
  );
}
