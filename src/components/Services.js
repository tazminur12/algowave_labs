"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Build fast, scalable, and conversion-focused websites that drive business growth.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["Business Websites", "E-commerce", "Custom Apps", "WordPress"],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable growth and ROI.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: ["Facebook Ads", "Google Ads", "Lead Generation", "SEO"],
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Branding & Design",
      description: "Create a cohesive visual identity that builds trust and resonates with your audience.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ["Logo Design", "Visual Identity", "Social Media", "Brand Assets"],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Video Editing",
      description: "Engaging video content that tells your story and drives action.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Promotional Videos", "Social Reels", "Ad Editing", "Storytelling"],
      gradient: "from-pink-400 to-red-500",
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
    <section className="relative bg-gradient-to-b from-black via-slate-900 to-black pt-4 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
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
            <span className="text-sm font-medium text-white">Our Services</span>
          </motion.div>

          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            What We Offer
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-300">
            Comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-800/90 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Animated Gradient Background Effect */}
              <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`}></div>
              
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              {/* Top Border Accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity group-hover:opacity-100`}></div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {service.icon}
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 blur-xl transition-opacity group-hover:opacity-50`}></div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-400" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-300 min-h-[3rem]">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-2.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-400 transition-colors group-hover:text-gray-300">
                    <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} opacity-80`}>
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/services"
                className={`group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${service.gradient} px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.02]`}
              >
                <span className="relative z-10">Learn More</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-8 py-3 text-base font-semibold text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-400/20"
          >
            View All Services
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

