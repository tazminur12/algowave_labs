"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const values = [
    {
      icon: "🎯",
      title: "Client-Centric",
      description: "Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      icon: "⚡",
      title: "Innovation First",
      description: "We stay ahead of the curve, leveraging cutting-edge technologies and creative strategies.",
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "Clear communication, honest feedback, and transparent processes throughout every project.",
    },
    {
      icon: "🚀",
      title: "Results-Driven",
      description: "We measure success by the impact we create for your business, not just deliverables.",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks",
      tech: ["Next.js", "React", "Node.js"],
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that drive growth and engagement",
      tech: ["SEO", "Social Media", "PPC"],
    },
    {
      title: "Branding & Design",
      description: "Memorable brand identities that resonate with your audience",
      tech: ["UI/UX", "Logo Design", "Brand Strategy"],
    },
    {
      title: "Video Editing",
      description: "Professional video content that tells your story effectively",
      tech: ["Motion Graphics", "Animation", "Post-Production"],
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: "📦" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "98%", label: "Client Satisfaction", icon: "💯" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-b from-black via-slate-900 to-black px-6 py-16 md:px-12 md:py-24 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
              variants={backgroundVariants}
              animate="animate"
            />
            <motion.div
              className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
              variants={backgroundVariants}
              animate="animate"
              transition={{ delay: 1.5 }}
            />
          </div>

          <motion.div
            className="relative mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1.5 backdrop-blur-sm"
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
              <span className="text-sm font-medium text-white">About Algowave Labs</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              <span className="text-white">We Transform</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ideas Into Digital Success
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              At Algowave Labs, we're more than just a digital agency. We're your strategic partner in navigating the digital landscape, crafting solutions that drive real business results.
            </motion.p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="relative bg-black px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2
                className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Our Story
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-cyan-400">The Beginning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Founded with a vision to bridge the gap between innovative technology and business success, Algowave Labs emerged from a simple belief: every business deserves access to world-class digital solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  What started as a small team of passionate developers and designers has grown into a full-service digital agency, serving clients across various industries and helping them achieve their digital transformation goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-cyan-400">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  We empower businesses to thrive in the digital age by delivering exceptional web experiences, strategic marketing campaigns, and compelling brand identities that resonate with their target audience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our commitment extends beyond project delivery. We build long-term partnerships, continuously evolving our services to meet the ever-changing needs of the digital landscape.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative bg-slate-900 px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2
                className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Our Core Values
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-slate-800"
                >
                  <div className="mb-4 text-4xl">{value.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services/Expertise Section */}
        <section className="relative bg-black px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2
                className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                What We Do
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 transition-all hover:border-cyan-400/50"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
                  <h3 className="mb-3 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mb-4 text-gray-300 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative bg-slate-900 px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2
                className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Our Impact
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-3 text-4xl">{stat.icon}</div>
                  <motion.div
                    className="mb-2 text-4xl font-bold text-cyan-400 md:text-5xl"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-300 md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative bg-black px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2
                className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Why Choose Algowave Labs?
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Proven Track Record</h3>
                <p className="text-gray-400">150+ successful projects delivered across diverse industries and use cases.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Cutting-Edge Technology</h3>
                <p className="text-gray-400">We leverage the latest tools and frameworks to build scalable, future-proof solutions.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Dedicated Support</h3>
                <p className="text-gray-400">Your success is our priority. We provide ongoing support and maintenance to ensure your digital presence thrives.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-b from-black via-slate-900 to-black px-6 py-16 md:px-12 md:py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <h2
              className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Let's discuss how we can help you achieve your business goals with innovative digital solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white"
                >
                  Get in Touch
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/portfolio"
                  className="group flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-slate-800/50 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm"
                >
                  View Our Work
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
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
