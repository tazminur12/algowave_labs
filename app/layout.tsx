import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://algowavelabs.com";
const siteName = "AlgoWave Labs";
const siteTitle = "AlgoWave Labs | Scalable Digital Solutions";
const siteDescription =
  "AlgoWave Labs builds modern websites, ERP systems, SaaS platforms, e-commerce solutions, and professional portfolios for growing businesses. Based in Dhaka, Bangladesh.";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  keywords: [
    "AlgoWave Labs",
    "web development",
    "ERP systems",
    "SaaS development",
    "e-commerce development",
    "software agency",
    "Next.js developers",
    "Dhaka software company",
    "Bangladesh web agency",
    "scalable digital solutions",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/Favicon/advertisig-agency.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/Favicon/advertisig-agency.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: ["/Favicon/advertisig-agency.png"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/Favicon/advertisig-agency.png",
        width: 512,
        height: 512,
        alt: "AlgoWave Labs — Turning Ideas into Scalable Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/Favicon/advertisig-agency.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification tokens when available:
    // google: "your-google-site-verification-token",
    // yandex: "your-yandex-verification-token",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  legalName: siteName,
  url: siteUrl,
  logo: `${siteUrl}/Favicon/advertisig-agency.png`,
  description: siteDescription,
  email: "hello@algowavelabs.com",
  telephone: "+8801540288718",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mohammadpur, Dhaka",
    addressCountry: "BD",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  foundingLocation: {
    "@type": "Place",
    name: "Dhaka, Bangladesh",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: siteName,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/Favicon/advertisig-agency.png`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="font-body min-h-full flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
