export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope, but most marketing websites launch in 3–6 weeks. Custom ERP or SaaS platforms usually take 8–16 weeks for an MVP, with clear milestones agreed before development begins.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer fixed-scope packages for well-defined projects and flexible retainers for ongoing product work. After a discovery call, you’ll receive a transparent proposal covering deliverables, timeline, and investment.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We primarily build with modern web technologies such as Next.js, React, TypeScript, Node.js, and PostgreSQL. We also integrate tools like Stripe, Shopify, and major cloud platforms based on your product needs.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a post-launch handoff, and we offer optional maintenance plans covering updates, monitoring, bug fixes, and iterative improvements as your business grows.",
  },
  {
    question: "What does your process look like?",
    answer:
      "We follow a clear process: discovery, design, development, testing, and launch. You’ll get regular updates, collaborative reviews, and a shared roadmap so stakeholders always know what’s next.",
  },
];
