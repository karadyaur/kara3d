"use client";

// Figma: node-id=10205:655 (desktop), 10209:1870 (mobile)
// Desktop: logo left / links center / CTA right
// Mobile: logo left / CTA + hamburger right — opens slide-down menu

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { shared } from "@/content/content";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

function HamburgerIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Navbar({
  links = shared.navbar.links,
  ctaLabel = shared.navbar.ctaLabel,
  ctaHref = shared.navbar.ctaHref,
  className,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 20) {
        setVisible(true);
      } else if (y > prevScrollY.current) {
        setVisible(false);
        setOpen(false);
      } else {
        setVisible(true);
      }
      prevScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    {/* Flow spacer — same height as the bar so content clears the fixed nav */}
    <div className="h-[3.8rem] shrink-0" aria-hidden="true" />
    <nav
      className={cn("fixed top-0 left-0 right-0 z-50 w-full", className)}
    >
      {/* Main bar — transform lives here, not on <nav>, so fixed children work */}
      <motion.div
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: [0.22, 0.03, 0.26, 1] }}
        className="w-full bg-malachite-darker"
      >
        <Container>
          <div className="flex items-center gap-4 py-4">
            {/* Logo */}
            <div className="flex-1 min-w-0">
              <Link href="/" onClick={() => setOpen(false)}>
                <CompanyLogo alternate />
              </Link>
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 shrink-0">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans font-normal text-regular leading-[1.5] text-white whitespace-nowrap transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex-1 min-w-0 hidden md:flex justify-end">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-malachite-dark border border-malachite-dark text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Mobile: CTA + hamburger */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-malachite-dark border border-malachite-dark text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {ctaLabel}
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex items-center justify-center size-12 text-white overflow-hidden"
                aria-label={open ? "Menü schließen" : "Menü öffnen"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
                    transition={{ duration: 0.18, ease: [0.22, 0.03, 0.26, 1] }}
                    className="flex"
                  >
                    {open ? <CloseIcon /> : <HamburgerIcon />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Mobile full-screen menu — fixed inset-0 now covers full viewport */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.38, ease: [0.22, 0.03, 0.26, 1] }}
            className="md:hidden fixed inset-0 z-[60] bg-malachite-darker flex flex-col"
          >
            {/* Top bar — mirrors main navbar */}
            <Container>
              <div className="flex items-center gap-4 py-4">
                <div className="flex-1 min-w-0">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <CompanyLogo alternate />
                  </Link>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={ctaHref}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-malachite-dark border border-malachite-dark text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
                  >
                    {ctaLabel}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center size-12 text-white"
                    aria-label="Menü schließen"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </Container>

            {/* Nav links */}
            <Container className="flex-1 overflow-y-auto">
              <motion.div
                className="flex flex-col border-t border-white-10"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
                }}
              >
                {links.map((link) => (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.32, ease: [0.22, 0.03, 0.26, 1] } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 font-display font-semibold text-h4 text-white border-b border-white-10 transition-opacity active:opacity-60"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
