"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import teamData from "@/data/team.json";

export default function TeamPage() {
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

  const { teamMembers, departments, stats } = teamData;

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
              <span className="text-sm font-medium text-white">Meet the Team</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              <span className="text-white">The People Behind</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Your Success
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              We're a diverse, talented team of developers, designers, and strategists working together to deliver exceptional digital experiences.
            </motion.p>
          </motion.div>
        </section>

        {/* Team Stats Section */}
        <section className="relative bg-black px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
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

        {/* Team Members Section */}
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
                Our Team
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
                  
                  {/* Professional Image */}
                  <div className="relative h-80 w-full overflow-hidden bg-slate-800">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-4xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="h-3 w-3 rounded-full border-2 border-slate-900 bg-green-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Name and Role */}
                    <div className="mb-3">
                      <h3 className="mb-1 text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-sm font-medium text-cyan-400">{member.role}</p>
                    </div>

                    {/* Bio */}
                    <p className="mb-4 text-sm leading-relaxed text-gray-400">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="mb-4 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-cyan-500 hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <span className="text-sm font-semibold">in</span>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-cyan-500 hover:scale-110"
                        aria-label="Twitter"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-cyan-500 hover:scale-110"
                        aria-label="GitHub"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {member.dribbble && (
                      <a
                        href={member.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-cyan-500 hover:scale-110"
                        aria-label="Dribbble"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm6.344 5.667c1.066 1.422 1.7 3.174 1.7 5.056 0 .744-.096 1.464-.27 2.15-.477-.11-.984-.18-1.508-.18-2.38 0-4.56 1.012-6.304 2.648-1.05-2.04-2.528-3.8-4.264-5.15 1.1-1.35 2.48-2.48 4.06-3.33 1.58.85 2.96 1.98 4.06 3.33-.736 1.35-2.214 3.11-3.264 5.15-1.744-1.636-3.924-2.648-6.304-2.648-.524 0-1.031.07-1.508.18-.174-.686-.27-1.406-.27-2.15 0-1.882.634-3.634 1.7-5.056C7.414 2.348 9.576 1.5 12 1.5s4.586.848 6.344 2.167zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z" />
                        </svg>
                      </a>
                    )}
                    {member.vimeo && (
                      <a
                        href={member.vimeo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-cyan-500 hover:scale-110"
                        aria-label="Vimeo"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.011 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128 1.58-1.364 2.765-2.085 3.553-2.165 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                        </svg>
                      </a>
                    )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
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
                Our Departments
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-slate-800 text-center"
                >
                  <div className="mb-4 text-5xl">{dept.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{dept.name}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-400">{dept.description}</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1">
                    <span className="text-xs font-medium text-cyan-400">{dept.members} Members</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="relative bg-slate-900 px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2
                className="mb-4 text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Our Culture
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Remote First",
                  description: "We believe in flexibility and work-life balance. Our team works from anywhere in the world, bringing diverse perspectives to every project.",
                  icon: "🌐",
                },
                {
                  title: "Continuous Learning",
                  description: "We invest in our team's growth through training, conferences, and opportunities to explore new technologies and methodologies.",
                  icon: "📚",
                },
                {
                  title: "Collaboration",
                  description: "Great ideas come from great teamwork. We foster an environment where everyone's voice is heard and valued.",
                  icon: "🤝",
                },
                {
                  title: "Innovation",
                  description: "We encourage experimentation and creative problem-solving. Every challenge is an opportunity to innovate.",
                  icon: "💡",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border border-slate-800 bg-slate-800/50 p-6"
                >
                  <div className="mb-3 text-3xl">{value.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA Section */}
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
              Want to Join Our Team?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white"
                >
                  View Open Positions
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
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-slate-800/50 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm"
                >
                  Send Your Resume
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
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
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
