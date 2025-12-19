import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Algowave Labs | Premier Web Development & Digital Marketing Agency",
    template: "%s | Algowave Labs - Digital Excellence Partner",
  },
  description:
    "Algowave Labs transforms businesses with custom web development, data-driven digital marketing, creative branding, and professional video editing services. Partner with us for digital growth.",
  keywords: [
    "Algowave Labs",
    "Web Development Agency",
    "Digital Marketing Services",
    "SEO Agency Bangladesh",
    "Custom Website Design",
    "React Next.js Developers",
    "Social Media Marketing",
    "Brand Identity Design",
    "Professional Video Editing",
    "E-commerce Solutions",
    "IT Consultancy Firm"
  ],
  authors: [{ name: "Algowave Labs Team", url: "https://www.algowavelabs.com" }],
  creator: "Algowave Labs",
  publisher: "Algowave Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/Favicon/advertisig-agency.png",
    shortcut: "/Favicon/advertisig-agency.png",
    apple: "/Favicon/advertisig-agency.png",
  },
  openGraph: {
    title: "Algowave Labs | Accelerate Your Business Growth Digitally",
    description:
      "We build high-performance websites and execute winning marketing strategies. Discover how Algowave Labs can elevate your brand's digital presence today.",
    url: "https://www.algowavelabs.com",
    siteName: "Algowave Labs",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Algowave Labs - Digital Agency Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Algowave Labs | Expert Web & Marketing Solutions",
    description:
      "From code to content, we deliver excellence. Web Development, SEO, Branding & more. Let's build your digital future together.",
    images: ["/twitter-image.jpg"], // Ensure this image exists
    creator: "@algowavelabs", // Add your actual handle if available
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "your-google-verification-code", // Add actual code when available
  },

  metadataBase: new URL("https://www.algowavelabs.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
