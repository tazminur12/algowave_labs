import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

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
    icon: MapPin,
  },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: MessageCircle },
  { label: "LinkedIn", href: "#", icon: BriefcaseBusiness },
  { label: "Golegal", href: "#", icon: Scale },
];

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="space-y-4">
        {contactDetails.map(({ label, value, href, icon: Icon }) => {
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
              <div>
                <p className="text-sm font-semibold text-text-secondary">
                  {label}
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-text-primary">
                  {value}
                </p>
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
                  className="flex items-start gap-4 focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-start gap-4">{content}</div>
              )}
            </Card>
          );
        })}
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
        <div
          className="flex min-h-56 flex-col items-center justify-center gap-3 bg-slate-200 px-6 text-center"
          role="img"
          aria-label="Map placeholder. Replace with a real map embed later."
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-white text-accent-blue shadow-sm">
            <MapPin aria-hidden="true" className="size-5" />
          </div>
          <div>
            <p className="font-heading font-bold text-text-primary">
              Map Placeholder
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Replace this box with a Google Maps embed when ready.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
