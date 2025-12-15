"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Result-Focused Approach",
      description: "We measure success by your business outcomes, not just deliverables. Every project is designed to drive growth and deliver measurable ROI.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-cyan-400 to-blue-500",
      stat: "300%",
      statLabel: "Avg. ROI Increase",
    },
    {
      title: "Skilled Team",
      description: "Experienced developers, designers, and marketers who understand both technology and business strategy. We bring expertise across all digital disciplines.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-blue-400 to-purple-500",
      stat: "23+",
      statLabel: "Expert Team Members",
    },
    {
      title: "Clear Communication",
      description: "Regular updates, transparent processes, and honest feedback. You're always in the loop with dedicated project managers and direct access to our team.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
      stat: "24/7",
      statLabel: "Support Available",
    },
    {
      title: "Scalable Solutions",
      description: "We build for today and plan for tomorrow. Your digital infrastructure grows with your business, ensuring long-term success and adaptability.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-pink-400 to-red-500",
      stat: "99.9%",
      statLabel: "Uptime Guarantee",
    },
    {
      title: "Long-Term Support",
      description: "Our relationship doesn't end at launch. We provide ongoing maintenance, optimization, and support to keep you ahead of the competition.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-cyan-400 to-blue-500",
      stat: "150+",
      statLabel: "Projects Delivered",
    },
    {
      title: "Proven Track Record",
      description: "Trusted by startups, entrepreneurs, and businesses worldwide. Our portfolio speaks for itself with successful projects across diverse industries.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-blue-400 to-purple-500",
      stat: "98%",
      statLabel: "Client Satisfaction",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
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
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm font-medium text-white">Why Choose Us</span>
          </motion.div>

          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Why Choose Algowave Labs?
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-300">
            We don&apos;t just deliver projects—we deliver results that drive your business forward.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-800/90 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Animated Gradient Background Effect */}
              <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${reason.gradient} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`}></div>
              
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              {/* Top Border Accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${reason.gradient} opacity-0 transition-opacity group-hover:opacity-100`}></div>

              {/* Icon Container */}
              <div className="relative mb-6 flex items-start justify-between">
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${reason.gradient} text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {reason.icon}
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${reason.gradient} opacity-0 blur-xl transition-opacity group-hover:opacity-50`}></div>
                </div>

                {/* Stat Badge */}
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`} style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                    {reason.stat}
                  </div>
                  <div className="text-xs font-medium text-gray-400 mt-0.5">
                    {reason.statLabel}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-400" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            Get Started Today
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

