"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import testimonialsData from "@/data/testimonials.json";

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonialsData.testimonials, ...testimonialsData.testimonials];

  if (!isMounted) return null;

  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3"></div>
      </div>

      <div className="w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about working with AlgoWave Labs.
          </p>
        </motion.div>

        {/* Infinite Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 px-4"
              animate={
                isMounted
                  ? {
                      x: [0, "-50%"],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 80,
                  ease: "linear",
                },
              }}
              style={{
                width: "fit-content",
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="w-[350px] md:w-[450px] flex-shrink-0 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm relative group hover:border-cyan-500/30 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 text-slate-700 group-hover:text-cyan-500/20 transition-colors duration-300">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-8 leading-relaxed italic relative z-10 text-sm md:text-base line-clamp-4">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden relative border-2 border-slate-600 flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold whitespace-nowrap">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm whitespace-nowrap">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
