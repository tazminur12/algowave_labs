"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import clientsData from "@/data/clients.json";

export default function Clients() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clientsData.clients, ...clientsData.clients];

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2
            className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Companies We Work With
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        </motion.div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          {/* Scrolling Logos */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={
                isMounted
                  ? {
                      x: [0, -50 * clientsData.clients.length * 16],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-24 w-32 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-cyan-400/50 hover:bg-slate-800/50 md:h-28 md:w-40"
                  >
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={80}
                        className="h-auto w-full object-contain opacity-70 transition-opacity group-hover:opacity-100"
                      />
                    ) : (
                      <span className="text-sm font-medium text-gray-400 group-hover:text-cyan-400">
                        {client.name}
                      </span>
                    )}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {clientsData.clients.slice(0, Math.min(8, clientsData.clients.length)).map((_, index) => (
            <motion.div
              key={index}
              className="h-2 w-2 rounded-full bg-slate-700"
              animate={{
                opacity: index === 0 ? 1 : 0.3,
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

