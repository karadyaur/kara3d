"use client";

// Figma: node-id=10205:680 (desktop), 10209:783 (mobile)
// Mobile: single column — title+buttons top, description bottom
// Desktop: two columns — title+buttons bottom-left, description top-right

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

interface HeroProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  backgroundImage: string;
}

export function Hero({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  backgroundImage,
}: HeroProps) {
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

      {/* 50% dark overlay */}
      <div className="absolute inset-0 bg-neutral-darkest/50 pointer-events-none" />

      {/* Noise grain overlay */}
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
          className="flex flex-col gap-12 min-h-[500px] md:flex-row md:gap-20 md:min-h-[676px]"
        >

          {/* Title + buttons — mobile: top, desktop: bottom-left */}
          <motion.div variants={fadeUp} className="flex-1 min-w-0 flex flex-col justify-start gap-6 md:justify-end md:gap-8">
            <h1 className="font-display font-semibold text-h1 text-white leading-[1.2] tracking-[-0.01em]">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-malachite-dark border border-malachite text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white-10 border border-white-20 text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>

          {/* Description — mobile: bottom, desktop: top-right */}
          <motion.div variants={fadeUp} className="flex-1 min-w-0 flex flex-col justify-end md:justify-start">
            <p className="font-sans font-normal text-regular md:text-large text-white leading-[1.5]">
              {description}
            </p>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
