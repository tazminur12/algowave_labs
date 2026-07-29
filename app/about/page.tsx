import { CheckCircle2, Eye, Layers3, Target, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CoreValues } from "@/components/sections/CoreValues";
import { CTABanner } from "@/components/sections/CTABanner";
import { Stats } from "@/components/sections/Stats";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how AlgoWave Labs helps growing businesses turn ambitious ideas into scalable websites, ERP systems, SaaS platforms, and digital products.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AlgoWave Labs",
    description:
      "A software solutions partner focused on thoughtful strategy, dependable engineering, and long-term growth.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-background-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              About Us
            </p>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              We Build Digital Solutions That{" "}
              <GradientText>Scale</GradientText>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              AlgoWave Labs partners with growing businesses to design and
              build modern software that simplifies work, creates better
              customer experiences, and supports long-term growth.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                Our Story
              </p>
              <h2 className="font-heading mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                Technology should help businesses move forward—not hold them
                back.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                <p>
                  AlgoWave Labs was created to give growing companies access to
                  the same level of thoughtful design and dependable
                  engineering as established enterprises. We saw too many
                  ambitious teams constrained by outdated tools, disconnected
                  workflows, and software that could not grow with them.
                </p>
                <p>
                  Our mission is to close that gap. We combine business
                  understanding, product strategy, and modern development to
                  create professional solutions that solve today&apos;s needs
                  while preparing for tomorrow&apos;s opportunities.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Business-focused strategy",
                  "Scalable engineering",
                  "Collaborative delivery",
                  "Long-term support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-text-primary"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="size-4.5 shrink-0 text-success"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border-light bg-linear-to-br from-blue-50 via-white to-violet-100 p-6 shadow-xl shadow-slate-900/8 sm:p-8"
              role="img"
              aria-label="Abstract illustration of scalable digital products"
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-12 size-56 rounded-full bg-accent-violet/10 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-12 size-64 rounded-full bg-accent-blue/15 blur-2xl"
              />
              <div className="relative flex h-full flex-col justify-center">
                <div className="ml-auto w-[88%] rounded-xl border border-border-light bg-white/90 p-5 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="gradient-brand flex size-10 items-center justify-center rounded-lg text-white">
                        <Layers3 aria-hidden="true" className="size-5" />
                      </div>
                      <div>
                        <div className="h-2.5 w-24 rounded-full bg-slate-300" />
                        <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-success">
                      Live
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[72, 48, 88].map((height, index) => (
                      <div
                        key={height}
                        className="flex h-24 items-end rounded-lg bg-slate-50 p-2"
                      >
                        <div
                          className="gradient-brand w-full rounded-md opacity-80"
                          style={{ height: `${height}%` }}
                          aria-label={`Growth metric ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative -mt-5 w-[58%] rounded-xl border border-border-light bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-accent-blue">
                      <TrendingUp aria-hidden="true" className="size-4.5" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-16 rounded-full bg-slate-200" />
                      <div className="mt-2 h-4 w-24 rounded-md bg-slate-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background-secondary py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="h-full p-7 sm:p-9">
                <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl text-accent-blue">
                  <span className="gradient-brand absolute inset-0 opacity-10" />
                  <Target
                    aria-hidden="true"
                    className="relative size-6"
                    strokeWidth={1.8}
                  />
                </div>
                <h2 className="font-heading mt-6 text-2xl font-bold text-text-primary md:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                  To help growing businesses operate smarter and compete
                  confidently through accessible, professional software
                  solutions built around their real goals.
                </p>
              </Card>

              <Card className="h-full p-7 sm:p-9">
                <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl text-accent-violet">
                  <span className="gradient-brand absolute inset-0 opacity-10" />
                  <Eye
                    aria-hidden="true"
                    className="relative size-6"
                    strokeWidth={1.8}
                  />
                </div>
                <h2 className="font-heading mt-6 text-2xl font-bold text-text-primary md:text-3xl">
                  Our Vision
                </h2>
                <p className="mt-4 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                  To become a trusted technology partner for ambitious
                  organizations worldwide—turning complex challenges into
                  simple, scalable digital experiences.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Stats />
        <CoreValues />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
