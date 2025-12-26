"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <section className="relative bg-gradient-to-b from-black via-slate-900 to-black px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1
                className="mb-6 text-4xl font-bold text-white md:text-5xl"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Terms of Service
              </h1>
              <p className="text-gray-400">Last Updated: December 26, 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <p className="text-gray-300 leading-relaxed mb-8">
                Welcome to AlgoWave Labs. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>

              <div className="space-y-8">
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Services</h2>
                  <p className="text-gray-400">
                    AlgoWave Labs provides web development, digital marketing, branding, and video editing services. The specific scope of work, deliverables, and timelines will be defined in a separate agreement or proposal for each project.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                  <p className="text-gray-400 mb-4">
                    Unless otherwise agreed upon in writing:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>AlgoWave Labs retains ownership of all pre-existing code, tools, and methodologies.</li>
                    <li>Upon full payment, the client is granted a non-exclusive license to use the final deliverables for their intended purpose.</li>
                    <li>Client materials provided to us remain the property of the client.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">3. Payments and Refunds</h2>
                  <p className="text-gray-400 mb-4">
                    Payment terms are specified in individual project contracts. Generally:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>A deposit is required to commence work.</li>
                    <li>Final payment is due upon project completion or milestones.</li>
                    <li>Refunds are subject to the specific terms outlined in your service agreement.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                  <p className="text-gray-400">
                    AlgoWave Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services or website.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">5. Modifications</h2>
                  <p className="text-gray-400">
                    We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting the new Terms of Service on this page.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
                  <p className="text-gray-400">
                    These terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
