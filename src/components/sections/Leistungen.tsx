"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

function PrintIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="size-full">
      <rect x="14" y="4" width="36" height="22" rx="3" />
      <path d="M14 18H10a4 4 0 00-4 4v14a4 4 0 004 4h4" />
      <path d="M50 18h4a4 4 0 014 4v14a4 4 0 01-4 4h-4" />
      <rect x="14" y="36" width="36" height="24" rx="3" />
      <line x1="22" y1="44" x2="42" y2="44" />
      <line x1="22" y1="51" x2="34" y2="51" />
      <circle cx="46" cy="25" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="size-full">
      <circle cx="32" cy="32" r="8" />
      <path d="M32 8v6M32 50v6M8 32h6M50 32h6M16.5 16.5l4.2 4.2M43.3 43.3l4.2 4.2M47.5 16.5l-4.2 4.2M20.7 43.3l-4.2 4.2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="size-full">
      <path d="M32 6L8 16v14c0 12.5 10 23.5 24 27 14-3.5 24-14.5 24-27V16L32 6z" />
      <polyline points="21,32 29,40 44,24" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="size-full">
      <polygon points="32,6 58,20 32,34 6,20" />
      <polyline points="6,32 32,46 58,32" />
      <polyline points="6,44 32,58 58,44" />
    </svg>
  );
}

const ICONS = [PrintIcon, GearIcon, ShieldIcon, LayersIcon];

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

interface LeistungItem {
  title: string;
  description: string;
}

interface LeistungenProps {
  tagline: string;
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  items: LeistungItem[];
}

export function Leistungen({
  tagline,
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  items,
}: LeistungenProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <p className="font-sans font-semibold text-tagline text-neutral-darkest">{tagline}</p>
              <h2 className="font-display font-semibold text-h2 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-darkest-5 text-neutral-darkest font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 text-neutral-darkest font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {secondaryLabel}
                <ChevronRight />
              </Link>
            </div>
          </motion.div>

          {/* Items */}
          <div className="flex flex-col divide-y divide-neutral-lighter">
            {items.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-center gap-6 py-6 md:py-8"
                >
                  <div className="size-10 shrink-0 text-neutral-darkest">
                    <Icon />
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-12">
                    <h3 className="font-display font-semibold text-h4 text-neutral-darkest leading-[1.3] tracking-[-0.01em] md:w-64 shrink-0">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
