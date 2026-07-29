export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  photo: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    company: "Nova Finance",
    quote:
      "AlgoWave Labs rebuilt our website from the ground up. The new site is faster, clearer, and has already improved our inbound lead quality. Communication was excellent at every stage.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Daniel Okonkwo",
    company: "Harbor Logistics",
    quote:
      "Their ERP work transformed how we manage inventory and operations. What used to take hours of spreadsheet work is now handled in one secure platform our team actually enjoys using.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Shah",
    company: "PulseBoard",
    quote:
      "We needed a reliable partner to ship our SaaS MVP quickly without cutting corners. AlgoWave Labs delivered a clean architecture, polished UI, and a product we were proud to launch.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
];
