"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-white via-white to-blue-50/50">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(rgba(37,99,235,0.14)_1px,transparent_1px)] bg-size-[28px_28px] opacity-50 mask-[linear-gradient(to_bottom,black,transparent_75%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-40 -z-10 h-160 w-160 opacity-20 blur-sm"
        viewBox="0 0 640 640"
        fill="none"
      >
        <defs>
          <linearGradient
            id="hero-blob-gradient"
            x1="80"
            y1="80"
            x2="560"
            y2="560"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path
          d="M536 168C584 243 555 340 510 417C466 494 405 551 327 552C248 553 151 499 105 417C59 335 65 225 129 159C193 93 304 73 386 87C468 101 488 93 536 168Z"
          fill="url(#hero-blob-gradient)"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-48 -z-10 h-128 w-180 opacity-10"
        viewBox="0 0 720 512"
        fill="none"
      >
        <defs>
          <linearGradient
            id="hero-wave-gradient"
            x1="0"
            y1="256"
            x2="720"
            y2="256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path
          d="M-24 330C79 224 150 203 246 251C341 299 418 320 516 249C594 192 670 174 757 220V532H-24V330Z"
          fill="url(#hero-wave-gradient)"
        />
      </svg>

      <div className="mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-7xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="max-w-3xl">
          <motion.p
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-blue shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Software built for what&apos;s next
          </motion.p>

          <motion.h1
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="font-heading text-5xl leading-[1.03] font-bold tracking-[-0.045em] text-text-primary md:text-6xl lg:text-7xl"
          >
            Turn bold ideas into{" "}
            <GradientText>Scalable</GradientText> digital products.
          </motion.h1>

          <motion.div
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          >
            <p className="mt-7 text-lg font-semibold text-text-primary md:text-xl">
              Turning Ideas into Scalable Digital Solutions
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              We design and build high-performance websites, ERP systems, SaaS
              platforms, and digital experiences that help ambitious
              businesses grow.
            </p>
          </motion.div>

          <motion.div
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="primary" className="group w-full sm:w-auto">
              <Link href="/contact">
                Get a Quote
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-border-light rounded-2xl border border-white/80 bg-white/70 px-4 py-4 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:px-6"
          >
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Clients" },
              { value: "100%", label: "Committed" },
            ].map((item) => (
              <span key={item.label} className="px-2 text-center">
                <strong className="font-heading block text-lg text-text-primary sm:text-xl">
                  {item.value}
                </strong>
                <span className="mt-0.5 block text-[11px] font-medium uppercase tracking-wide text-text-secondary sm:text-xs">
                  {item.label}
                </span>
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, x: 36, scale: 0.98 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
          className="relative hidden lg:block lg:rotate-1"
          aria-label="Business analytics dashboard preview"
        >
          <div className="gradient-brand absolute -inset-8 -z-10 rounded-4xl opacity-20 blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_35px_90px_-28px_rgba(37,99,235,0.35)] ring-1 ring-white/80">
            <div className="flex h-12 items-center gap-2 border-b border-border-light bg-slate-50 px-5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-success" />
              <span className="ml-3 h-6 w-44 rounded-md border border-border-light bg-white" />
            </div>

            <div className="grid min-h-105 grid-cols-[5.5rem_1fr]">
              <div className="border-r border-blue-100 bg-blue-50 p-4">
                <div className="gradient-brand mx-auto size-8 rounded-lg" />
                <div className="mt-8 space-y-4">
                  {[true, false, false, false, false].map((active, index) => (
                    <div
                      key={index}
                      className={`mx-auto h-2.5 rounded-full ${
                        active
                          ? "w-10 bg-accent-blue/70"
                          : "w-8 bg-accent-blue/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-white to-blue-50/70 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="h-3 w-24 rounded-full bg-slate-300" />
                    <div className="mt-2 h-2 w-36 rounded-full bg-slate-200" />
                  </div>
                  <div className="gradient-brand size-9 rounded-full ring-4 ring-white/5" />
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-accent-blue">
                        <TrendingUp aria-hidden="true" className="size-4" />
                      </div>
                      <span className="text-xs font-semibold text-success">
                        +24%
                      </span>
                    </div>
                    <div className="mt-4 h-2 w-14 rounded-full bg-slate-200" />
                    <div className="mt-2 h-5 w-20 rounded-md bg-slate-700" />
                  </div>
                  <div className="rounded-xl border border-violet-100 bg-white p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-violet-50 text-accent-violet">
                        <Users aria-hidden="true" className="size-4" />
                      </div>
                      <span className="text-xs font-semibold text-success">
                        +18%
                      </span>
                    </div>
                    <div className="mt-4 h-2 w-14 rounded-full bg-slate-200" />
                    <div className="mt-2 h-5 w-16 rounded-md bg-slate-700" />
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-blue-100 bg-white p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-24 rounded-full bg-slate-300" />
                    <div className="h-2 w-12 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-7 flex h-28 items-end gap-2.5">
                    {[36, 55, 45, 72, 61, 88, 76, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="gradient-brand flex-1 rounded-t-sm opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
