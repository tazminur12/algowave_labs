import {
  Handshake,
  Lightbulb,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTABanner } from "@/components/sections/CTABanner";
import { TeamSection } from "@/components/sections/TeamSection";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the AlgoWave Labs team—developers, designers, and strategists building scalable websites, SaaS platforms, and digital solutions for growing businesses.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | AlgoWave Labs",
    description:
      "A dedicated team of developers, designers, and strategists building scalable digital solutions.",
    url: "/team",
    type: "website",
  },
};

type CulturePoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const culturePoints: CulturePoint[] = [
  {
    title: "Client-first mindset",
    description:
      "We listen closely, communicate clearly, and build solutions around real business goals.",
    icon: Handshake,
  },
  {
    title: "Practical innovation",
    description:
      "We use modern technology where it creates value—never complexity for its own sake.",
    icon: Lightbulb,
  },
  {
    title: "Ownership & delivery",
    description:
      "Every project is treated as a shared responsibility from strategy through launch and support.",
    icon: Target,
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-background-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Our Team
            </p>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              The People Behind{" "}
              <GradientText>AlgoWave Labs</GradientText>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
              A dedicated team of developers, designers, and strategists
              building scalable digital solutions for ambitious businesses.
            </p>
          </div>
        </section>

        <TeamSection />

        <section className="bg-background-secondary py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                How We Work
              </p>
              <h2 className="font-heading mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                Built on collaboration and craft
              </h2>
              <p className="mt-4 text-base leading-7 text-text-secondary md:text-lg">
                Our team combines engineering depth, design clarity, and client
                partnership to deliver products that are reliable, usable, and
                ready to grow.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
              {culturePoints.map(({ title, description, icon: Icon }) => (
                <Card
                  key={title}
                  className="h-full p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
                >
                  <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl text-accent-blue">
                    <span className="gradient-brand absolute inset-0 opacity-10" />
                    <Icon
                      aria-hidden="true"
                      className="relative size-6"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="font-heading mt-5 text-xl font-bold text-text-primary">
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

        <CTABanner
          heading="Want to work with our team?"
          subtext="Tell us about your project and we'll bring the right mix of strategy, design, and engineering to help you move forward."
          buttonLabel="Start a Conversation"
        />
      </main>
      <Footer />
    </>
  );
}
