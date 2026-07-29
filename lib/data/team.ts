export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Tazminur Rahman Tanim",
    role: "CEO, Owner & Full Stack Developer",
    photo: "/images/team/tazminur-rahman-tanim.jpg",
    bio: "Leads product architecture and full-stack development, with experience delivering enterprise solutions for clients including Serene Facility Group (Australia).",
  },
  {
    name: "Naeem Haider",
    role: "MERN Stack Developer & Shopify Specialist",
    photo: "/images/team/naeem-haider.jpg",
    bio: "Specializes in building scalable MERN applications and custom Shopify e-commerce solutions.",
  },
  {
    name: "Rafiul Islam",
    role: "UI/UX Designer",
    photo: "/images/team/rafiul-islam.jpg",
    bio: "Crafts clean, modern, and user-centered interfaces across web and mobile products.",
  },
  {
    name: "Shahriar Kabir",
    role: "Backend Developer & DevOps Engineer",
    photo: "/images/team/shahriar-kabir.jpg",
    bio: "Builds robust backend systems and manages deployment infrastructure for scalable performance.",
  },
  {
    name: "Farzana Akter",
    role: "Digital Marketing & Client Relations Specialist",
    photo: "/images/team/farzana-akter.jpg",
    bio: "Manages client communication and drives growth strategy for AlgoWave Labs partners.",
  },
];
