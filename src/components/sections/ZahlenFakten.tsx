"use client";

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

interface Stat {
  number: string;
  description: string;
}

interface ZahlenFaktenProps {
  tagline: string;
  title: string;
  description: string;
  stats: Stat[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function ZahlenFakten({
  tagline,
  title,
  description,
  stats,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ZahlenFaktenProps) {
  return (
    <section className="bg-malachite-darker py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-12 md:gap-20 md:flex-row md:items-start"
        >
          {/* Left — Title */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <p className="font-sans font-semibold text-tagline text-white">
              {tagline}
            </p>
            <h2 className="font-display font-semibold text-h2 text-white leading-[1.2] tracking-[-0.01em]">
              {title}
            </h2>
          </motion.div>

          {/* Right — Description, Stats, and CTAs */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            <p className="font-sans font-normal text-medium-body text-white leading-[1.5] max-w-[500px]">
              {description}
            </p>

            {/* Stats Row */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-h2 text-white leading-[1.2] tracking-[-0.01em]">
                    {stat.number}
                  </h3>
                  <p className="font-sans font-normal text-regular text-white leading-[1.5] max-w-[300px]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row gap-6 items-center justify-center md:justify-start">
              <Link
                href={primaryHref}
                className="flex items-center justify-center px-6 py-2.5 rounded-full bg-white-10 text-white font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 text-white font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {secondaryLabel}
                <ChevronRight />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
