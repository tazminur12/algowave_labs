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
    photo: "/members/tanim1.webp",
    bio: "Leads product architecture and full-stack development, with experience delivering enterprise solutions for clients including Serene Facility Group (Australia).",
  },
  {
    name: "Naeem Haider",
    role: "MERN Stack Developer & Shopify Specialist",
    photo: "/members/naeem-haider1.webp",
    bio: "Specializes in building scalable MERN applications and custom Shopify e-commerce solutions.",
  },
  {
    name: "MD. Jabed Hossain",
    role: "Backend Developer & DevOps Engineer",
    photo: "/members/rafsan.webp",
    bio: "Builds robust backend systems and manages deployment infrastructure for scalable performance.",
  },
  {
    name: "Md. Adnan Wasti",
    role: "Full Stack Engineer",
    photo: "/members/adnan.webp",
    bio: "Focuses on API logic and stack verification across TypeScript, Prisma, and Next.js to keep production systems reliable and maintainable.",
  },
  {
    name: "Injam Hossan Rupom",
    role: "UI/UX Designer",
    photo: "/members/rupom.webp",
    bio: "Crafts clean, modern, and user-centered interfaces across web and mobile products.",
  },
  {
    name: "Maisha Fahmida",
    role: "Digital Marketing & Client Relations Specialist",
    photo: "/members/maisha.webp",
    bio: "Manages client communication and drives growth strategy for AlgoWave Labs partners.",
  },
];
