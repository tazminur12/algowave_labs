import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AlgoWave Labs",
    short_name: "AlgoWave",
    description:
      "Turning Ideas into Scalable Digital Solutions. Modern websites, ERP systems, SaaS platforms, and e-commerce for growing businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/Favicon/advertisig-agency.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
