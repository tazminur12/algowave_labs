import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/lib/data/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const serviceIcons: Record<string, LucideIcon> = {
  Briefcase,
  Building2,
  Cloud,
  Code2,
  ShoppingCart,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.fullDesc,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | AlgoWave Labs`,
      description: service.shortDesc,
      url: `/services/${service.slug}`,
      type: "article",
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIcons[service.icon] ?? Code2;
  const related = getRelatedServices(service.slug, 3);
  const contactHref = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-violet-50">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.08)_1px,transparent_1px)] bg-size-[28px_28px] opacity-60 mask-[linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-14 md:pb-20">
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-accent-blue"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All services
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-3">
                <div className="gradient-brand flex size-12 items-center justify-center rounded-xl text-white shadow-lg">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
                </div>
                <Badge className="border border-blue-100 bg-white! text-accent-blue">
                  Service
                </Badge>
              </div>

              <h1 className="font-heading mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                {service.shortDesc}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="primary">
                  <Link href={contactHref}>
                    Get a quote
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/portfolio">View related work</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-blue-100 bg-slate-100 shadow-[0_28px_70px_-40px_rgba(37,99,235,0.45)]">
              <Image
                src={service.image}
                alt={`${service.title} service visual`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
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
              How we deliver this <GradientText>service</GradientText>
            </h2>
            <p className="mt-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              {service.fullDesc}
            </p>

            <h3 className="font-heading mt-10 text-xl font-bold text-text-primary">
              What&apos;s included
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-blue-50 bg-blue-50/40 p-4 text-sm leading-6 text-text-secondary"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-accent-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="font-heading mt-10 text-xl font-bold text-text-primary">
              Ideal for
            </h3>
            <ul className="mt-5 space-y-3">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-text-secondary sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="gradient-brand mt-2 size-2 shrink-0 rounded-full"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-slate-50 p-6 shadow-[0_24px_60px_-40px_rgba(37,99,235,0.45)]">
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Technology stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.techStack.map((tech, index) => (
                  <Badge
                    key={tech}
                    variant={index % 2 === 0 ? "blue" : "violet"}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-violet-100 bg-linear-to-br from-violet-50 via-white to-blue-50 p-6">
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Expected outcomes
              </h3>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 text-sm leading-6 text-text-secondary"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-accent-violet"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-slate-950 p-6 text-white">
              <p className="text-xs font-bold tracking-[0.16em] text-blue-300 uppercase">
                Next step
              </p>
              <h3 className="font-heading mt-2 text-xl font-bold">
                Ready to start {service.title.toLowerCase()}?
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Tell us about your goals and we&apos;ll shape a clear delivery
                plan for this service.
              </p>
              <Button asChild variant="primary" className="mt-5 w-full">
                <Link href={contactHref}>
                  Discuss this service
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-blue-50 bg-background-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] text-accent-blue uppercase">
              Delivery process
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-text-primary md:text-4xl">
              A clear path from idea to launch
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(37,99,235,0.45)]"
              >
                <span className="font-heading text-sm font-bold text-accent-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading mt-3 text-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="primary">
              <Link href={contactHref}>
                Book a free consultation
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-accent-blue uppercase">
                  Explore more
                </p>
                <h2 className="font-heading mt-2 text-3xl font-bold text-text-primary md:text-4xl">
                  Related services
                </h2>
              </div>
              <Link
                href={contactHref}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-accent-blue"
              >
                Or talk to us directly
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <ServiceCard key={item.slug} service={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTABanner
        heading={`Let's build your ${service.title.toLowerCase()} project`}
        subtext="Share your goals and constraints—we'll recommend the right approach and a clear next step."
        buttonLabel="Start a conversation"
        href={contactHref}
      />
    </>
  );
}
