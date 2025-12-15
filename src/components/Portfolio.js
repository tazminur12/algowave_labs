"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import portfolioData from "@/data/portfolio.json";

export default function Portfolio() {
  // Get first 6 projects for homepage showcase
  const featuredProjects = portfolioData.projects.slice(0, 6);
  const [hoveredProject, setHoveredProject] = useState(null);

  const getCategoryColor = (category) => {
    const colors = {
      "Web Development": "from-cyan-400 to-blue-500",
      "Digital Marketing": "from-blue-400 to-purple-500",
      "Branding & Design": "from-purple-400 to-pink-500",
      "Video Editing": "from-pink-400 to-red-500",
    };
    return colors[category] || "from-cyan-400 to-blue-500";
  };

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
    <section className="relative bg-gradient-to-b from-black via-slate-900 to-black py-16 md:py-24 overflow-hidden">
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
            <span className="text-sm font-medium text-white">Portfolio & Case Studies</span>
          </motion.div>

          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Our Recent Work
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-300">
            Explore our successful projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-800/90 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent`}>
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg`}>
                    {project.category}
                  </span>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Live" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                      : project.status === "Ongoing"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  {project.title}
                </h3>
                <p className="mb-1 text-sm text-gray-400">Client: {project.client}</p>

                {/* Results */}
                <div className="mb-4 flex items-center gap-4 border-t border-slate-800 pt-4">
                  <div className="flex-1">
                    <div className={`text-lg font-bold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent`}>
                      {project.results.metric1}
                    </div>
                    <div className="text-xs text-gray-400">{project.results.metric1Label}</div>
                  </div>
                  <div className="flex-1">
                    <div className={`text-lg font-bold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent`}>
                      {project.results.metric2}
                    </div>
                    <div className="text-xs text-gray-400">{project.results.metric2Label}</div>
                  </div>
                </div>

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

                {/* View Details Link */}
                <Link
                  href="/portfolio"
                  className={`group/link inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-800/50 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400`}
                >
                  View Case Study
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
              </div>
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
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            View All Projects
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

