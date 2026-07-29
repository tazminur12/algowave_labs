"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Landmark,
  Layers3,
  Leaf,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Client = {
  name: string;
  icon: LucideIcon;
};

const clients: Client[] = [
  { name: "Northstar", icon: Sparkles },
  { name: "Meridian", icon: Landmark },
  { name: "Vertigo", icon: Layers3 },
  { name: "Evergreen", icon: Leaf },
  { name: "Marketly", icon: ShoppingBag },
  { name: "Summit", icon: Building2 },
];

function Logo({ client }: { client: Client }) {
  const Icon = client.icon;

  return (
    <div className="flex shrink-0 items-center gap-2.5 text-slate-500 grayscale transition duration-300 hover:scale-[1.03] hover:text-accent-blue">
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
      <span className="font-heading text-base font-semibold tracking-tight sm:text-lg">
        {client.name}
      </span>
    </div>
  );
}

export function ClientLogos() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-y border-blue-100 bg-linear-to-r from-blue-50 via-white to-violet-50 py-8 md:py-10"
      aria-labelledby="client-logos-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="client-logos-heading"
          className="px-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary sm:text-sm"
        >
          Trusted by growing businesses
        </h2>

        {reduceMotion ? (
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 px-6 md:hidden">
            {clients.map((client) => (
              <div key={client.name} className="flex justify-center">
                <Logo client={client} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative mt-6 overflow-hidden md:hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-blue-50 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-violet-50 to-transparent"
            />
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 22,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
            >
              <div className="flex shrink-0 items-center gap-12 pr-12">
                {clients.map((client) => (
                  <Logo key={client.name} client={client} />
                ))}
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-12 pr-12"
              >
                {clients.map((client) => (
                  <Logo key={`duplicate-${client.name}`} client={client} />
                ))}
              </div>
            </motion.div>
          </div>
        )}

        <div className="mt-7 hidden grid-cols-3 items-center gap-x-8 gap-y-6 px-6 md:grid lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <Logo client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
