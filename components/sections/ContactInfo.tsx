import {
  BriefcaseBusiness,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: LucideIcon;
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mohammadpur%2C+Dhaka%2C+Bangladesh";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Mohammadpur%2C+Dhaka%2C+Bangladesh&z=14&output=embed";

const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: "hello@algowavelabs.com",
    href: "mailto:hello@algowavelabs.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "01540288718",
    href: "tel:+8801540288718",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Mohammadpur, Dhaka, Bangladesh",
    href: MAPS_URL,
    external: true,
    icon: MapPin,
  },
];

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

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="space-y-4">
        {contactDetails.map(
          ({ label, value, href, external, icon: Icon }) => {
            const content = (
              <>
                <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl text-accent-blue">
                  <span className="gradient-brand absolute inset-0 opacity-10" />
                  <Icon
                    aria-hidden="true"
                    className="relative size-5"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-text-secondary">
                    {label}
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold text-text-primary">
                    {value}
                  </p>
                  {external ? (
                    <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent-blue">
                      Open in Google Maps
                      <ExternalLink aria-hidden="true" className="size-3" />
                    </p>
                  ) : null}
                </div>
              </>
            );

            return (
              <Card
                key={label}
                className="p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                {href ? (
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-start gap-4 focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start gap-4">{content}</div>
                )}
              </Card>
            );
          },
        )}
      </div>

      <Card className="p-6">
        <h2 className="font-heading text-xl font-bold text-text-primary">
          Follow us
        </h2>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          Stay connected for product updates, case studies, and industry
          insights.
        </p>
        <div className="mt-5 flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border-light bg-background-secondary text-text-primary transition-all hover:-translate-y-0.5 hover:border-accent-blue hover:bg-accent-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              <Icon aria-hidden="true" className="size-4.5" />
            </a>
          ))}
        </div>
      </Card>

      <Card className="overflow-hidden p-0">
        <div className="relative min-h-56">
          <iframe
            title="AlgoWave Labs location — Mohammadpur, Dhaka"
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 border-t border-border-light px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-background-secondary hover:text-accent-blue"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-4 text-accent-blue" />
            View Mohammadpur on Google Maps
          </span>
          <ExternalLink aria-hidden="true" className="size-4 shrink-0" />
        </a>
      </Card>
    </div>
  );
}
