"use client";

// Figma: node-id=10209:561 (desktop), 10209:837 (mobile)
// Mobile: top section flex-col, stats grid stacked vertically (no fixed height)
// Desktop: 2-col top, h-[611px] 3-col stats grid

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

interface ZahlenProps {
  tagline: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  stats: { title: string; value: string; description: string }[];
  images: { printer: string; printerAlt: string; parts: string; partsAlt: string };
}

function StatContent({ value, description }: { value: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="font-display font-semibold text-h1 text-white leading-[1.2] tracking-[-0.01em] text-right">
        {value}
      </p>
      <div className="w-full border-t border-white-20" />
      <p className="font-sans font-normal text-regular text-white leading-[1.5] text-right">
        {description}
      </p>
    </div>
  );
}

export function Zahlen({
  tagline,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  stats,
  images,
}: ZahlenProps) {

  return (
    <section className="bg-malachite-darker py-section-lg">
      <Container className="flex flex-col gap-12 md:gap-20">
          {/* Top: title left, description + CTAs right */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-8 md:flex-row md:gap-20 items-start">
            <div className="w-full md:flex-1 flex flex-col gap-4">
              <p className="font-sans font-semibold text-tagline text-white">{tagline}</p>
              <h2 className="font-display font-semibold text-h2 text-white leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
            </div>
            <div className="w-full md:flex-1 flex flex-col gap-8">
              <p className="font-sans font-normal text-large text-white leading-[1.5]">
                {description}
              </p>
              <div className="flex items-center gap-6">
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
              </div>
            </div>
          </motion.div>

          {/* Stats grid — mobile: stacked, desktop: 3-col fixed height */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="flex flex-col gap-6 md:flex-row md:gap-8 md:h-[611px] md:items-start">

            {/* Col 1 — tall stat card */}
            <motion.div variants={fadeUp} className="md:flex-1 md:h-full flex flex-col justify-between bg-malachite-darkest rounded-4xl p-8">
              <h6 className="font-display font-semibold text-h6 text-white leading-[1.4] tracking-[-0.01em]">
                {stats[0].title}
              </h6>
              <StatContent
                value={stats[0].value}
                description={stats[0].description}
              />
            </motion.div>

            {/* Col 2 — image top, stat card bottom */}
            <motion.div variants={fadeUp} className="md:flex-1 md:h-full flex flex-col gap-6 md:gap-8">
              <div className="relative w-full h-[220px] md:h-[270px] shrink-0 rounded-4xl overflow-hidden">
                <Image
                  src={images.printer}
                  alt={images.printerAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between bg-malachite-darkest rounded-4xl p-8">
                <h6 className="font-display font-semibold text-h6 text-white leading-[1.4] tracking-[-0.01em]">
                  {stats[1].title}
                </h6>
                <StatContent
                  value={stats[1].value}
                  description={stats[1].description}
                />
              </div>
            </motion.div>

            {/* Col 3 — stat card top, image bottom */}
            <motion.div variants={fadeUp} className="md:flex-1 md:h-full flex flex-col gap-6 md:gap-8">
              <div className="flex-1 flex flex-col justify-between bg-malachite-darkest rounded-4xl p-8">
                <h6 className="font-display font-semibold text-h6 text-white leading-[1.4] tracking-[-0.01em]">
                  {stats[2].title}
                </h6>
                <StatContent
                  value={stats[2].value}
                  description={stats[2].description}
                />
              </div>
              <div className="relative w-full h-[220px] md:h-[270px] shrink-0 rounded-4xl overflow-hidden">
                <Image
                  src={images.parts}
                  alt={images.partsAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>

          </motion.div>

      </Container>
    </section>
  );
}
