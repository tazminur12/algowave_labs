"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  CodeXml,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { MouseEvent } from "react";

import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { teamMembers } from "@/lib/data/team";

type SocialIcon = {
  label: string;
  icon: LucideIcon;
};

const socialIcons: SocialIcon[] = [
  { label: "LinkedIn", icon: BriefcaseBusiness },
  { label: "GitHub", icon: CodeXml },
  { label: "Twitter", icon: MessageCircle },
];

export function TeamSection() {
  const reduceMotion = useReducedMotion();

  const handlePlaceholderLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <Card className="group flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1 sm:p-7">
                <div className="gradient-brand rounded-full p-1 shadow-md">
                  <div className="rounded-full bg-white p-1">
                    <div className="relative size-24 overflow-hidden rounded-full bg-background-secondary sm:size-28">
                      <Image
                        src={member.photo}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <h2 className="font-heading mt-6 text-lg font-bold text-text-primary">
                  {member.name}
                </h2>
                <GradientText className="mt-2 text-sm font-bold uppercase tracking-wide">
                  {member.role}
                </GradientText>

                {member.bio ? (
                  <p className="mt-4 flex-1 text-sm leading-6 text-text-secondary">
                    {member.bio}
                  </p>
                ) : null}

                <div className="mt-5 flex items-center justify-center gap-1">
                  {socialIcons.map(({ label, icon: Icon }) => (
                    <a
                      key={label}
                      href="#"
                      onClick={handlePlaceholderLink}
                      aria-label={`${member.name} on ${label}`}
                      title={`${label} profile coming soon`}
                      className="inline-flex size-11 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-blue-50 hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-4.5"
                        strokeWidth={1.8}
                      />
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
