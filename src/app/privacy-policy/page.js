"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
                Privacy Policy
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
                At AlgoWave Labs, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>

              <div className="space-y-8">
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-gray-400 mb-4">
                    We collect information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Fill out contact forms on our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a quote or consultation</li>
                    <li>Communicate with us via email or social media</li>
                  </ul>
                  <p className="text-gray-400 mt-4">
                    This information may include your name, email address, phone number, company name, and project details.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-400 mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>To provide and improve our services</li>
                    <li>To communicate with you regarding your inquiries</li>
                    <li>To send project updates and proposals</li>
                    <li>To send marketing communications (if you opted in)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                  <p className="text-gray-400">
                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Sharing</h2>
                  <p className="text-gray-400">
                    We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and advertisers.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                  <p className="text-gray-400">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 text-cyan-400">
                    <p>Email: contact@algowavelabs.com</p>
                    <p>Phone: +880 1234-567890</p>
                  </div>
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
