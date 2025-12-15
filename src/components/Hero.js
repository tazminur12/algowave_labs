"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
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

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1],
      x: [0, 50, 0],
      y: [0, 30, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingOrbVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const gridVariants = {
    animate: {
      opacity: [0.05, 0.1, 0.05],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const particleVariants = {
    animate: {
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-900 to-black px-6 pt-12 pb-8 md:px-12 md:pt-16 md:pb-12 overflow-hidden">
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        variants={gridVariants}
        animate="animate"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Background decorative elements - Main Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated orbs */}
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
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
          variants={backgroundVariants}
          animate="animate"
          transition={{ delay: 3 }}
        />

        {/* Floating smaller orbs */}
        <motion.div
          className="absolute left-1/3 top-1/3 h-48 w-48 rounded-full bg-cyan-400/15 blur-2xl"
          variants={floatingOrbVariants}
          animate="animate"
        />
        <motion.div
          className="absolute right-1/3 bottom-1/3 h-56 w-56 rounded-full bg-blue-400/15 blur-2xl"
          variants={floatingOrbVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute left-2/3 top-2/3 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl"
          variants={floatingOrbVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-cyan-400/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: i * 1.2,
              duration: 6 + i * 0.5,
            }}
          />
        ))}

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <motion.div
        className="relative mx-auto flex max-w-7xl flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Digital Excellence Partner Tag */}
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
          <span className="text-sm font-medium text-white">
            Digital Excellence Partner
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={headingVariants}
          className="mb-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-7xl"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          <motion.span
            className="text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Helping Businesses Grow
          </motion.span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Digitally
          </motion.span>
        </motion.h1>

        {/* Service Buttons */}
        <motion.div
          variants={itemVariants}
          className="mb-5 flex flex-wrap items-center justify-center gap-3"
        >
          {["Web Development", "Digital Marketing", "Branding", "Video Editing"].map((service, index) => (
            <motion.button
              key={service}
              className="rounded-lg border border-cyan-400/30 bg-slate-800/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(34, 211, 238, 0.6)",
                backgroundColor: "rgba(34, 211, 238, 0.1)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {service}
            </motion.button>
          ))}
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          variants={itemVariants}
          className="mb-6 max-w-2xl text-3xl leading-relaxed text-gray-300 md:text-base"
        >
          We craft stunning websites, execute result-driven marketing campaigns,
          and build memorable brands that help you stand out in the digital
          landscape.
        </motion.p>

        {/* Technology Logos - Left Side */}
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-8 md:left-8 lg:flex">
          {/* Tailwind Logo */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { delay: 0.8, duration: 0.6 },
              x: { delay: 0.8, duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-lg">
              <Image
                src="/Hero/Tailwind.png"
                alt="Tailwind CSS"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="rounded-lg bg-cyan-500 px-3 py-1">
              <span className="text-xs font-semibold text-white">Tailwind</span>
            </div>
          </motion.div>

          {/* Node.js Logo */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { delay: 0.9, duration: 0.6 },
              x: { delay: 0.9, duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-lg">
              <Image
                src="/Hero/node.png"
                alt="Node.js"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="rounded-lg bg-green-500 px-3 py-1">
              <span className="text-xs font-semibold text-white">Node js</span>
            </div>
          </motion.div>

          {/* React Logo */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { delay: 1.0, duration: 0.6 },
              x: { delay: 1.0, duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-lg">
              <Image
                src="/Hero/react1.png"
                alt="React.js"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="rounded-lg bg-cyan-400 px-3 py-1">
              <span className="text-xs font-semibold text-white">React js</span>
            </div>
          </motion.div>
        </div>

        {/* Technology Logos - Right Side */}
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-8 md:right-8 lg:flex">
          {/* SQL Logo */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { delay: 0.8, duration: 0.6 },
              x: { delay: 0.8, duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-lg">
              <Image
                src="/Hero/Mysql.png"
                alt="MySQL"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="rounded-lg bg-blue-500 px-3 py-1">
              <span className="text-xs font-semibold text-white">SQL</span>
            </div>
          </motion.div>

          {/* Next.js Logo */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { delay: 0.9, duration: 0.6 },
              x: { delay: 0.9, duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-lg">
              <Image
                src="/Hero/nextjs.png"
                alt="Next.js"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="rounded-lg bg-gray-800 px-3 py-1">
              <span className="text-xs font-semibold text-white">Next js</span>
            </div>
          </motion.div>

          {/* MongoDB Logo */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { delay: 1.0, duration: 0.6 },
              x: { delay: 1.0, duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-lg">
              <Image
                src="/Hero/Mongodb.webp"
                alt="MongoDB"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="rounded-lg bg-green-600 px-3 py-1">
              <span className="text-xs font-semibold text-white">MongoDB</span>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/consultation"
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white"
            >
              Get a Free Consultation
              <motion.svg
                className="h-4 w-4"
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-slate-800/50 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm"
            >
              View Our Work
              <motion.svg
                className="h-4 w-4"
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
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-8 sm:flex-row sm:gap-16 md:gap-20"
        >
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="mb-1 text-3xl font-bold text-cyan-400 md:text-4xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs text-gray-300 md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Glowing Blue Dot Indicator */}
        <motion.div
          className="mt-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

