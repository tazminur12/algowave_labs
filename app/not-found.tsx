import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-violet-50 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.08)_1px,transparent_1px)] bg-size-[28px_28px] opacity-60"
      />
      <div
        aria-hidden="true"
        className="gradient-brand absolute -top-32 right-0 size-96 rounded-full opacity-15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
          Error 404
        </p>
        <p className="font-heading mt-4 text-7xl font-bold tracking-tight text-text-primary md:text-8xl">
          <GradientText>404</GradientText>
        </p>
        <h1 className="font-heading mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          This page drifted off the wave
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-text-secondary md:text-lg">
          The page you are looking for does not exist or may have moved. Head
          back home or browse our latest work.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="primary">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
