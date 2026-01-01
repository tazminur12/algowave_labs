'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import teamData from '@/data/team.json';

export default function TeamPage() {
  const { teamMembers = [], stats = [] } = teamData || {};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[60vh] bg-gradient-to-b from-black via-slate-900 to-black px-6 py-16 md:px-12 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-1.5"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-sm text-white">Meet the Team</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold md:text-6xl"
            >
              <span className="text-white">The People Behind</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Your Success
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg text-gray-300"
            >
              A passionate team of developers, designers & strategists building
              impactful digital experiences.
            </motion.p>
          </motion.div>
        </section>

        {/* ================= STATS ================= */}
        <section className="bg-black px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-2 text-4xl">{stat.icon}</div>
                <div className="text-4xl font-bold text-cyan-400">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
              Our Team
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-800"
                >
                  {/* IMAGE */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-700">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name || 'Team member'}
                        fill
                        priority={index < 3}
                        sizes="(max-width: 640px) 100vw,
                               (max-width: 1024px) 50vw,
                               33vw"
                        className="object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-4xl font-bold text-white">
                        {member?.name
                          ?.split(' ')
                          .map(n => n[0])
                          .join('')}
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="mb-3 text-cyan-400">{member.role}</p>

                    <p className="mb-4 text-sm text-gray-400">{member.bio}</p>

                    {/* SKILLS */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {member.skills?.map((skill, i) => (
                        <span
                          key={`${skill}-${i}`}
                          className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        
        <section className="bg-black px-6 py-20 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Want to Join Our Team?
          </h2>
          <p className="mb-8 text-gray-300">
            We’re always looking for talented people.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 font-semibold text-white"
          >
            Contact Us
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
