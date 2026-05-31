"use client";

// Figma: node-id=10209:1220
// bg-malachite-darker with photo overlay. Left-aligned content: tagline + H2 + description + CTAs.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

interface UberUnsHeroProps {
  tagline: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  backgroundImage: string;
}

export function UberUnsHero({
  tagline,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  backgroundImage,
}: UberUnsHeroProps) {
  return (
    <section className="relative overflow-hidden py-section-lg">
      {/* Background photo */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-neutral-darkest/60 pointer-events-none" />

      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: "repeat",
          opacity: 0.12,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="flex flex-col gap-8 max-w-[560px] min-h-[400px] md:min-h-[480px] justify-end"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="font-sans font-semibold text-tagline text-white">
              {tagline}
            </p>
            <div className="flex flex-col gap-6 text-white">
              <h1 className="font-display font-semibold text-h1 leading-[1.2] tracking-[-0.01em]">
                {title}
              </h1>
              <p className="font-sans font-normal text-medium-body leading-[1.5]">
                {description}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white-10 text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
            >
              {secondaryLabel}
              <ChevronRight />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
