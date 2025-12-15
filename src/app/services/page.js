"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
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

  const services = [
    {
      title: "Web Development",
      description: "Build fast, scalable, and conversion-focused websites that drive business growth. We create digital experiences that perform.",
      features: [
        "Business & Corporate Websites",
        "E-commerce Development",
        "Custom Web Applications",
        "WordPress Development",
        "Website Performance & Security",
      ],
      benefits: [
        "Lightning-fast load times",
        "Mobile-responsive design",
        "SEO-optimized structure",
        "Secure & scalable architecture",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable growth and ROI. We turn ad spend into real business results.",
      features: [
        "Facebook & Instagram Ads",
        "Google Ads",
        "Lead Generation Campaigns",
        "Conversion-Focused Marketing",
      ],
      benefits: [
        "Measurable ROI tracking",
        "Targeted audience reach",
        "Optimized ad performance",
        "Continuous campaign refinement",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Branding & Graphics Design",
      description: "Create a cohesive visual identity that builds trust and resonates with your audience. Consistency drives recognition.",
      features: [
        "Logo Design",
        "Visual Identity",
        "Social Media Creatives",
        "Marketing Design Assets",
      ],
      benefits: [
        "Professional brand consistency",
        "Memorable visual identity",
        "Clear brand messaging",
        "Assets ready for all platforms",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Video Editing",
      description: "Engaging video content that tells your story and drives action. Professional editing that captures attention.",
      features: [
        "Promotional Videos",
        "Social Media Reels",
        "Ad Video Editing",
        "Brand Storytelling",
      ],
      benefits: [
        "High engagement rates",
        "Professional production quality",
        "Platform-optimized formats",
        "Compelling brand narratives",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const whyWeWork = [
    {
      title: "Result-Focused Approach",
      description: "We measure success by your business outcomes, not just deliverables. Every project is designed to drive growth.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Skilled Team",
      description: "Experienced developers, designers, and marketers who understand both technology and business strategy.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Clear Communication",
      description: "Regular updates, transparent processes, and honest feedback. You're always in the loop.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Scalable Solutions",
      description: "We build for today and plan for tomorrow. Your digital infrastructure grows with your business.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Long-Term Support",
      description: "Our relationship doesn't end at launch. We provide ongoing maintenance and optimization to keep you ahead.",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and challenges. This foundation ensures we build the right solution.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "We develop a clear plan with timelines, milestones, and success metrics. You'll know exactly what to expect.",
    },
    {
      number: "03",
      title: "Execution",
      description: "Our team brings the strategy to life with regular updates and opportunities for feedback at every stage.",
    },
    {
      number: "04",
      title: "Launch",
      description: "We ensure everything is tested, optimized, and ready. Your solution goes live smoothly and successfully.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "We monitor performance, make improvements, and provide support to ensure long-term success.",
    },
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
              <span className="text-sm font-medium text-white">Our Services</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              <span className="text-white">Our Services</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              We help businesses grow with modern technology and result-driven digital solutions. 
              From web development to digital marketing, we deliver measurable outcomes.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white"
                >
                  Get a Free Consultation
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
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
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
                What We Offer
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
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
                  
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400">
                    {service.icon}
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mb-6 text-gray-300 leading-relaxed">{service.description}</p>

                  <div className="mb-6 space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-6 py-2.5 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/20"
                    >
                      Discuss Your Project
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Services Work Section */}
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
                Why Our Services Work
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-300">
                We don't just deliver projects—we deliver results that drive your business forward.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyWeWork.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-slate-800"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our Process
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-300">
                A proven methodology that ensures clarity, quality, and results at every step.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line - Hidden on mobile, visible on desktop */}
              <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 md:block lg:left-1/2 lg:-translate-x-0.5"></div>

              <div className="space-y-8 md:space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } lg:flex-row lg:justify-center lg:gap-12`}
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xl font-bold text-white shadow-lg shadow-cyan-500/50 md:h-20 md:w-20 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      {step.number}
                    </div>

                    {/* Content Card */}
                    <div
                      className={`flex-1 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 ${
                        index % 2 === 0 ? "md:ml-8 lg:mr-auto lg:max-w-md lg:pr-20" : "md:mr-8 lg:ml-auto lg:max-w-md lg:pl-20"
                      }`}
                    >
                      <h3 className="mb-3 text-2xl font-semibold text-white">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
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
              Ready to Grow Your Business?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Let's discuss how our services can help you achieve your goals. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white"
                >
                  Start Your Project
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
                  href="/about"
                  className="group flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-slate-800/50 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm"
                >
                  Learn More About Us
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
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

