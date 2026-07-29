"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-border-light bg-white transition-all duration-300",
          isScrolled && "bg-white/90 shadow-sm backdrop-blur-md",
        )}
      >
        <div className="mx-auto grid h-19 max-w-7xl grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="font-heading inline-flex min-h-11 items-center gap-2.5 text-xl font-bold tracking-tight text-text-primary sm:text-2xl"
            aria-label="AlgoWave Labs home"
          >
            <span
              aria-hidden="true"
              className="gradient-brand relative size-8 rounded-xl shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8)]"
            >
              <span className="absolute inset-2 rounded-sm border border-white/80" />
            </span>
            AlgoWave Labs
          </Link>

          <nav
            className="hidden items-center gap-5 xl:gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative inline-flex min-h-11 items-center text-sm font-medium text-text-secondary transition-colors hover:text-text-primary",
                    active && "text-accent-blue",
                  )}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="desktop-navigation-active"
                      className="gradient-brand absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button asChild variant="primary">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center justify-self-end rounded-full text-text-primary transition-colors hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            <div className="flex h-19 items-center justify-between border-b border-border-light px-6">
              <Link
                href="/"
                id="mobile-navigation-title"
                className="font-heading inline-flex min-h-11 items-center gap-2.5 text-xl font-bold tracking-tight text-text-primary sm:text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <span
                  aria-hidden="true"
                  className="gradient-brand relative size-8 rounded-xl"
                >
                  <span className="absolute inset-2 rounded-sm border border-white/80" />
                </span>
                AlgoWave Labs
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col justify-center gap-2 px-6 py-10"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "font-heading block border-l-2 border-transparent px-4 py-3 text-3xl font-semibold text-text-primary transition-colors hover:text-accent-blue sm:text-4xl",
                        active && "border-accent-violet text-accent-blue",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-border-light px-6 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <Button asChild variant="primary" className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
