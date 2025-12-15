"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your goals, audience, and constraints so we can propose the right solution from day one.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We align on roadmap, success metrics, tech stack, and timelines. Clear milestones keep everyone on track.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "Design, development, and marketing work in parallel with frequent updates and rapid iterations.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We ship with QA, performance checks, and analytics in place to ensure a smooth, reliable release.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "Post-launch optimization, maintenance, and growth experiments to keep results improving over time.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-black py-16 md:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/3 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1.5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-cyan-400"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-medium text-white">Our Process</span>
          </motion.div>

          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            How We Deliver Results
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-300">
            A clear, collaborative process that keeps you informed and ensures quality at every step.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-800/90 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-40"></div>

              {/* Number + Title */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
                    {step.number}
                  </div>
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            See How We Work
            <motion.svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


