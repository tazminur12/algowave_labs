"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Newspaper,
  Plane,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  type LucideIcon,
} from "lucide-react";

type Client = {
  name: string;
  icon: LucideIcon;
};

const clients: Client[] = [
  { name: "IELTS AtoZ", icon: GraduationCap },
  { name: "Flyoval", icon: Plane },
  { name: "Salma Air Travels", icon: Plane },
  { name: "Looklify", icon: Sparkles },
  { name: "Shilpalay", icon: Store },
  { name: "Well Health", icon: Stethoscope },
  { name: "Bogura Bashi", icon: Newspaper },
  { name: "Ness-Wear", icon: ShoppingBag },
];

function Logo({ client }: { client: Client }) {
  const Icon = client.icon;

  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-full border border-white/70 bg-white/70 px-5 py-2.5 shadow-[0_10px_30px_-18px_rgba(37,99,235,0.45)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-accent-blue/25 hover:shadow-[0_16px_40px_-18px_rgba(124,58,237,0.4)]">
      <span className="flex size-8 items-center justify-center rounded-full bg-linear-to-br from-blue-50 to-violet-50 text-slate-500 transition duration-300 group-hover:text-accent-blue">
        <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
      </span>
      <span className="font-heading text-sm font-semibold tracking-tight text-slate-600 transition duration-300 group-hover:text-text-primary sm:text-base">
        {client.name}
      </span>
    </div>
  );
}

function LogoTrack({
  prefix,
  ariaHidden,
}: {
  prefix: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5"
    >
      {clients.map((client) => (
        <Logo key={`${prefix}-${client.name}`} client={client} />
      ))}
    </div>
  );
}

export function ClientLogos() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-y border-blue-100/80 bg-linear-to-r from-blue-50 via-white to-violet-50 py-9 md:py-11"
      aria-labelledby="client-logos-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-blue-50 via-blue-50/80 to-transparent sm:w-16 md:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-violet-50 via-violet-50/80 to-transparent sm:w-16 md:w-24"
      />

      <div className="mx-auto max-w-7xl">
        <h2
          id="client-logos-heading"
          className="px-6 text-center text-[11px] font-bold tracking-[0.2em] text-text-secondary uppercase sm:text-xs"
        >
          Trusted by growing businesses
        </h2>

        {reduceMotion ? (
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-3 px-6 sm:gap-4">
            {clients.map((client) => (
              <li key={client.name}>
                <Logo client={client} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative mt-6 overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 32,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
            >
              <LogoTrack prefix="a" />
              <LogoTrack prefix="b" ariaHidden />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
