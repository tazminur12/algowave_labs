"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background-secondary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          heading="Everything you need to know before we start"
          subtitle="Have another question? Get in touch and we will be happy to talk through it."
        />

        <div className="mt-12 divide-y divide-border-light overflow-hidden rounded-xl border border-border-light bg-white shadow-sm lg:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-text-primary transition-colors hover:bg-background-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-blue sm:px-7 sm:py-6"
                  >
                    <span className="font-heading text-base font-bold sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-5 shrink-0 text-accent-blue transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-sm leading-7 text-text-secondary sm:px-7 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
