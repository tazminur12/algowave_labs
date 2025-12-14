"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
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

  const contactMethods = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      content: "hello@algowavelabs.com",
      link: "mailto:hello@algowavelabs.com",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      content: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      content: "Global • Remote First",
      link: null,
    },
  ];

  const services = [
    "Web Development",
    "Digital Marketing",
    "Branding & Design",
    "Video Editing",
    "Consultation",
    "Other",
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
              <span className="text-sm font-medium text-white">Get in Touch</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              <span className="text-white">Let's Start a</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Conversation
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="relative bg-black px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="mb-6 text-3xl font-bold text-white md:text-4xl"
                  style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  Send us a Message
                </h2>
                <p className="mb-8 text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-300">
                      Service Interested In <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    >
                      <option value="" className="bg-slate-900">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-slate-900">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-green-400"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Thank you! Your message has been sent successfully.</span>
                      </div>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2
                    className="mb-6 text-3xl font-bold text-white md:text-4xl"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                  >
                    Contact Information
                  </h2>
                  <p className="mb-8 text-gray-400">
                    Prefer to reach out directly? Use any of the methods below to get in touch with us.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.title}
                      href={method.link || undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`group block rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-cyan-400/50 hover:bg-slate-800 ${!method.link ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-lg font-semibold text-white">{method.title}</h3>
                          <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                            {method.content}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Media */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
                  <p className="mb-4 text-sm text-gray-400">
                    Stay connected with us on social media for updates and insights.
                  </p>
                  <div className="flex gap-3">
                    {[
                      { name: "LinkedIn", icon: "in", href: "https://linkedin.com" },
                      { name: "Twitter", icon: "𝕏", href: "https://twitter.com" },
                      { name: "Instagram", icon: "📷", href: "https://instagram.com" },
                      { name: "Facebook", icon: "f", href: "https://facebook.com" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white transition-all hover:bg-cyan-500 hover:scale-110"
                        aria-label={social.name}
                      >
                        <span className="text-sm font-semibold">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Business Hours</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-cyan-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-cyan-400">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: "How quickly will you respond to my inquiry?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
                },
                {
                  question: "Do you offer free consultations?",
                  answer: "Yes! We offer free initial consultations to discuss your project needs and see how we can help you achieve your goals.",
                },
                {
                  question: "What is your typical project timeline?",
                  answer: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while larger projects can take 2-3 months. We'll provide a detailed timeline during our consultation.",
                },
                {
                  question: "Do you work with clients remotely?",
                  answer: "Absolutely! We're a remote-first agency and work with clients globally. All our communication and collaboration tools are set up for seamless remote collaboration.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border border-slate-800 bg-slate-800/50 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
