"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
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

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="relative z-10 mx-auto max-w-2xl px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 font-bold text-[150px] leading-none bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent opacity-50"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            404
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 text-lg text-gray-400"
          >
            The page you are looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white"
              >
                Go to Homepage
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="group flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-slate-800/50 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm"
              >
                View Services
                <svg
                  className="h-5 w-5"
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
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
