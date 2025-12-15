"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const faqSections = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What services does Algowave Labs offer?",
          answer: "We offer four core services: Web Development (business websites, e-commerce, custom applications, WordPress), Digital Marketing (Facebook/Instagram ads, Google Ads, lead generation), Branding & Graphics Design (logo design, visual identity, social media creatives), and Video Editing (promotional videos, social media reels, ad editing). Each service is designed to help businesses grow and achieve measurable results.",
        },
        {
          question: "Who do you typically work with?",
          answer: "We work with startups, entrepreneurs, and businesses of all sizes—both locally and internationally. Whether you're launching a new venture, scaling an existing business, or looking to improve your digital presence, we have the expertise to help. Our clients range from solo entrepreneurs to established companies seeking digital transformation.",
        },
        {
          question: "Do you work with international clients?",
          answer: "Yes, absolutely. We work with clients globally and are experienced in managing projects across different time zones. We use clear communication tools and processes to ensure smooth collaboration regardless of location. Our remote-first approach means we can deliver the same quality service to clients anywhere in the world.",
        },
        {
          question: "How do I get started with a project?",
          answer: "Getting started is simple. Reach out through our contact form or schedule a free consultation. We'll discuss your goals, challenges, and requirements. Based on that conversation, we'll provide a clear proposal with timelines, deliverables, and pricing. Once approved, we begin with a discovery phase to ensure we fully understand your needs before moving forward.",
        },
      ],
    },
    {
      title: "Web Development",
      questions: [
        {
          question: "How long does it take to build a website?",
          answer: "Timeline depends on project scope. A simple business website typically takes 3-6 weeks, while e-commerce sites or custom applications can take 6-12 weeks or more. We provide a detailed timeline during the proposal phase, and we keep you updated throughout the process. Rush projects can be accommodated with adjusted timelines.",
        },
        {
          question: "Do you build custom websites or use templates?",
          answer: "We do both, depending on your needs and budget. For businesses needing unique branding and specific functionality, we build custom solutions. For faster launches and cost-effective options, we can customize premium templates. We'll recommend the best approach during our initial consultation based on your goals and requirements.",
        },
        {
          question: "Will my website be mobile-friendly and fast?",
          answer: "Yes, absolutely. Every website we build is fully responsive and optimized for mobile devices. We prioritize performance, ensuring fast load times, smooth user experience, and SEO best practices. We test across devices and use modern optimization techniques to deliver websites that perform well on all platforms.",
        },
        {
          question: "Can you redesign or improve an existing website?",
          answer: "Yes, we frequently work on redesigns and improvements. We can refresh your design, improve performance, add new features, or rebuild entirely. We start by analyzing your current site to identify areas for improvement, then propose a plan that aligns with your goals and budget.",
        },
      ],
    },
    {
      title: "Digital Marketing",
      questions: [
        {
          question: "How soon can I see results from digital marketing?",
          answer: "Results vary by campaign type and industry. For paid advertising (Facebook, Google Ads), you can see initial results within days, with optimization improving performance over 2-4 weeks. SEO and organic growth take longer—typically 3-6 months for significant results. We provide regular reports so you can track progress and ROI from the start.",
        },
        {
          question: "Which platforms do you work with (Facebook, Google, etc.)?",
          answer: "We work with all major advertising platforms including Facebook, Instagram, Google Ads, LinkedIn, and TikTok. We also handle email marketing, SEO, and content marketing. During our strategy phase, we'll recommend the platforms that best fit your target audience and business goals.",
        },
        {
          question: "Do you offer monthly marketing packages?",
          answer: "Yes, we offer flexible monthly retainer packages for ongoing marketing services. These typically include ad management, content creation, performance monitoring, and optimization. Packages are customized based on your needs and budget. We also work on project-based campaigns for specific goals or launches.",
        },
      ],
    },
    {
      title: "Branding & Design",
      questions: [
        {
          question: "Do you provide complete branding solutions?",
          answer: "Yes, we offer complete branding packages that include logo design, color palette, typography, brand guidelines, and visual identity across all touchpoints. We can also work on specific elements like logo refresh, social media branding, or marketing materials. We ensure consistency across all brand assets.",
        },
        {
          question: "Can you design logos and social media creatives?",
          answer: "Absolutely. We design logos from scratch or refresh existing ones. We also create social media graphics, ad creatives, banners, and other marketing materials. Our design process focuses on creating visuals that align with your brand identity and resonate with your target audience.",
        },
      ],
    },
    {
      title: "Video Editing",
      questions: [
        {
          question: "What type of videos do you edit?",
          answer: "We edit promotional videos, product showcases, explainer videos, testimonial videos, and corporate content. We also create video content for websites, social media, and advertising campaigns. Whether you have raw footage or need guidance on what to film, we can help create professional video content.",
        },
        {
          question: "Can you create short-form content for social media?",
          answer: "Yes, we specialize in creating engaging short-form content for Instagram Reels, TikTok, YouTube Shorts, and other platforms. We edit raw footage, add graphics, music, captions, and effects to create content that captures attention and drives engagement. We can also repurpose longer videos into multiple short-form pieces.",
        },
      ],
    },
    {
      title: "Pricing & Payment",
      questions: [
        {
          question: "How do you price your services?",
          answer: "Pricing is based on project scope, complexity, and requirements. We provide detailed quotes after understanding your needs. Web development projects are typically quoted per project, while marketing and design services can be project-based or monthly retainers. We're transparent about costs upfront—no hidden fees.",
        },
        {
          question: "Do you offer fixed pricing or monthly retainers?",
          answer: "We offer both. Fixed pricing works well for one-time projects like website builds or logo design. Monthly retainers are ideal for ongoing services like digital marketing, content creation, or maintenance. We'll recommend the best pricing structure during our consultation based on your needs.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, credit cards, and digital payment methods. Payment terms are typically 50% upfront for new projects, with the remainder due upon completion. For monthly retainers, we invoice monthly. We're flexible and can discuss payment plans for larger projects if needed.",
        },
      ],
    },
    {
      title: "Support & Communication",
      questions: [
        {
          question: "How do you communicate during a project?",
          answer: "We use email, project management tools, and scheduled calls to keep you updated. You'll receive regular progress updates and have access to a dedicated communication channel. We're responsive and aim to reply within 24 hours. For urgent matters, we provide direct contact options.",
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer: "Yes, we offer ongoing support and maintenance packages. This can include website updates, security monitoring, performance optimization, content updates, and technical support. We also provide training so you can manage basic updates yourself. Support packages are flexible and tailored to your needs.",
        },
      ],
    },
  ];

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
              <span className="text-sm font-medium text-white">FAQs</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              <span className="text-white">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              We're here to help you understand our process and what to expect when working with us. 
              Find answers to common questions below.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-6 py-2.5 text-sm font-semibold text-cyan-400 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-400/20"
                >
                  Still have questions? Contact us
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
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Sections */}
        <section className="relative bg-black px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {faqSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <h2
                    className="text-2xl font-bold text-white md:text-3xl mb-6"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                  >
                    {section.title}
                  </h2>

                  <div className="space-y-3">
                    {section.questions.map((faq, faqIndex) => {
                      const index = `${sectionIndex}-${faqIndex}`;
                      const isOpen = openIndex === index;

                      return (
                        <motion.div
                          key={faq.question}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (faqIndex * 0.05) }}
                          className="group overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 transition-all hover:border-cyan-400/30"
                        >
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-xl"
                            aria-expanded={isOpen}
                          >
                            <span className="text-base font-semibold text-white md:text-lg pr-8">
                              {faq.question}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <svg
                                className="h-5 w-5 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </motion.div>
                          </button>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pt-0">
                              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              Still Have Questions?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              If you didn't find what you're looking for, we're here to help. 
              Reach out and we'll get back to you promptly.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-base font-semibold text-white"
                >
                  Contact Algowave Labs
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

