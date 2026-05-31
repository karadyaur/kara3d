"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

interface SerienfertigungHeroProps {
  tagline: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function SerienfertigungHero({
  tagline,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: SerienfertigungHeroProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="flex flex-col gap-10 md:gap-12 md:flex-row md:items-center"
        >
          {/* Left — Tagline & Title */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col gap-6">
              <p className="font-sans font-semibold text-tagline text-neutral-darkest">
                {tagline}
              </p>
              <h1 className="font-display font-semibold text-h1 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                {title}
              </h1>
            </div>
          </motion.div>

          {/* Right — Description & CTAs */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            <p className="font-sans font-normal text-medium-body text-neutral-darkest leading-[1.5] max-w-[500px]">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Link
                href={primaryHref}
                className="flex items-center justify-center md:justify-start px-6 py-2.5 rounded-full bg-malachite-dark border border-malachite text-white font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="flex items-center justify-center md:justify-start px-6 py-2.5 rounded-full bg-white-10 text-neutral-darkest font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
