export type Testimonial = {
  name: string;
  company: string;
  project: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Operations Team",
    company: "Pristine Home & Commercial Cleaning",
    project: "Marketing Website",
    quote:
      "AlgoWave Labs built a conversion-focused website around our bond cleaning services in Sydney. Quote enquiries are clearer, the SEO landing pages perform well, and the site finally matches the professionalism of our brand.",
  },
  {
    name: "Product Team",
    company: "IELTS Practice Pro",
    project: "AI SaaS Platform",
    quote:
      "They delivered a full IELTS prep platform with mock tests, AI speaking evaluation, and subscription billing. The architecture is solid, the speaking module feels exam-ready, and we launched with confidence.",
  },
  {
    name: "Founder",
    company: "Looklify BD",
    project: "E-commerce Store",
    quote:
      "Our beauty and skincare storefront is fast, mobile-friendly, and easy to manage. AlgoWave Labs understood the brand and turned it into a clean shopping experience our customers actually enjoy using.",
  },
];
