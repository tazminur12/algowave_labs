import {
  BriefcaseBusiness,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { services } from "@/lib/data/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585001855004",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/algowave-labs/",
    icon: BriefcaseBusiness,
  },
];

const linkStyles =
  "inline-flex min-h-11 items-center text-sm text-footer-text/70 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-4 lg:gap-10">
          <div>
            <Link
              href="/"
              className="font-heading inline-flex min-h-11 items-center text-2xl font-bold tracking-tight text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              AlgoWave Labs
            </Link>
            <p className="font-heading mt-4 text-base font-semibold text-white">
              Turning Ideas into Scalable Digital Solutions
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-footer-text/70">
              We build modern websites, ERP systems, SaaS platforms, and
              digital products that help growing businesses move forward.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-base font-semibold text-white">
              Quick Links
            </h2>
            <ul className="mt-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link className={linkStyles} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-base font-semibold text-white">
              Services
            </h2>
            <ul className="mt-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link className={linkStyles} href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-base font-semibold text-white">
              Contact
            </h2>
            <address className="mt-5 space-y-4 not-italic">
              <a
                href="mailto:hello@algowavelabs.com"
                className={`${linkStyles} flex items-start gap-3`}
              >
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-accent-blue"
                />
                hello@algowavelabs.com
              </a>
              <a
                href="tel:+8801540288718"
                className={`${linkStyles} flex items-start gap-3`}
              >
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-accent-blue"
                />
                01540288718
              </a>
              <p className="flex items-start gap-3 text-sm text-footer-text/70">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-accent-blue"
                />
                Mohammadpur, Dhaka, Bangladesh
              </p>
            </address>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-footer-text transition-all hover:-translate-y-0.5 hover:border-accent-blue hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-center text-sm text-footer-text/60 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} AlgoWave Labs. All rights reserved.
          </p>
          <p className="inline-flex items-center justify-center gap-2 sm:justify-end">
            <Globe aria-hidden="true" className="size-4" />
            Building digital solutions worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
