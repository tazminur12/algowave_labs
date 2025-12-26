"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import portfolioData from "@/data/portfolio.json";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

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

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === selectedCategory
        );

  const getCategoryColor = (category) => {
    const colors = {
      "Web Development": "from-cyan-400 to-blue-500",
      "Digital Marketing": "from-blue-400 to-purple-500",
      "Branding & Design": "from-purple-400 to-pink-500",
      "Video Editing": "from-pink-400 to-red-500",
    };
    return colors[category] || "from-cyan-400 to-blue-500";
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] bg-gradient-to-b from-black via-slate-900 to-black px-6 py-16 md:px-12 md:py-24 overflow-hidden">
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
              <span className="text-sm font-medium text-white">Our Work</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              <span className="text-white">Our</span> <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              Explore our recent projects and see how we've helped businesses grow 
              with modern technology and result-driven solutions.
            </motion.p>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="relative bg-black px-6 py-8 md:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {portfolioData.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                      : "border border-slate-800 bg-slate-900/50 text-gray-300 hover:border-cyan-400/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="relative bg-black px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 transition-all hover:border-cyan-400/50 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`text-6xl font-bold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent`}>
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    <p className="mb-4 text-sm text-gray-400 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs font-medium text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-medium text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Results */}
                    <div className="flex items-center gap-4 border-t border-slate-800 pt-4">
                      <div className="flex-1">
                        <div className={`text-lg font-bold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent`}>
                          {project.results.metric1}
                        </div>
                        <div className="text-xs text-gray-400">
                          {project.results.metric1Label}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`text-lg font-bold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent`}>
                          {project.results.metric2}
                        </div>
                        <div className="text-xs text-gray-400">
                          {project.results.metric2Label}
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                      <span>View Details</span>
                      <svg
                        className="h-4 w-4"
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center"
              >
                <p className="text-lg text-gray-400">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-slate-800 p-2 text-gray-400 transition-colors hover:bg-slate-700 hover:text-white"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white shadow-lg`}>
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="mb-2 text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-400">Client: {selectedProject.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Year</div>
                    <div className="text-lg font-semibold text-white">
                      {selectedProject.year}
                    </div>
                  </div>
                </div>

                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  {selectedProject.description}
                </p>

                {/* Results */}
                <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${getCategoryColor(selectedProject.category)} bg-clip-text text-transparent`}>
                      {selectedProject.results.metric1}
                    </div>
                    <div className="text-sm text-gray-400">
                      {selectedProject.results.metric1Label}
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${getCategoryColor(selectedProject.category)} bg-clip-text text-transparent`}>
                      {selectedProject.results.metric2}
                    </div>
                    <div className="text-sm text-gray-400">
                      {selectedProject.results.metric2Label}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        selectedProject.status === "Live"
                          ? "bg-green-400"
                          : selectedProject.status === "Ongoing"
                          ? "bg-yellow-400"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-400">
                      Status: <span className="text-white">{selectedProject.status}</span>
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className={`rounded-lg bg-gradient-to-r ${getCategoryColor(selectedProject.category)} px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50`}
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}

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
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Let&apos;s discuss how we can help you achieve similar results. 
              Get in touch for a free consultation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white"
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="group flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-slate-800/50 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm"
                >
                  View Our Services
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

