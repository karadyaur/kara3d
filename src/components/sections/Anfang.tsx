"use client";

// Figma: node-id=10209:528 (desktop), 10209:1136 (mobile)
// Mobile: features stacked vertically (flex-col)
// Desktop: 3-column feature grid (flex-row)

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerFast } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

function PlannerReviewIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="size-full">
      <polyline points="4,24 12,24 16,10 24,38 28,20 36,20 40,24 44,24" />
    </svg>
  );
}

function EqualIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className="size-full">
      <rect x="10" y="17" width="28" height="5" rx="2" />
      <rect x="10" y="26" width="28" height="5" rx="2" />
    </svg>
  );
}

function OrderPlayIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className="size-full">
      <rect x="6" y="8" width="20" height="4" rx="2" />
      <rect x="6" y="16" width="20" height="4" rx="2" />
      <rect x="6" y="24" width="14" height="4" rx="2" />
      <circle cx="36" cy="34" r="8" />
      <polygon points="33,30 33,38 41,34" fill="white" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

interface AnfangFeatureResolved {
  icon: ReactNode;
  title: string;
  description: string;
}

interface AnfangProps {
  tagline: string;
  title: string;
  features: { icon: string; title: string; description: string }[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

const iconMap: Record<string, ReactNode> = {
  plannerReview: <PlannerReviewIcon />,
  equal: <EqualIcon />,
  orderPlay: <OrderPlayIcon />,
};

export function Anfang({
  tagline,
  title,
  features,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: AnfangProps) {
  const resolvedFeatures: AnfangFeatureResolved[] = features.map((f) => ({
    icon: iconMap[f.icon] ?? <PlannerReviewIcon />,
    title: f.title,
    description: f.description,
  }));

  return (
    <section className="bg-white py-section-lg">
      <Container className="flex flex-col gap-12 md:gap-20">
          {/* Section title */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-4 max-w-container-md">
            <p className="font-sans font-semibold text-tagline text-neutral-darkest">
              {tagline}
            </p>
            <h2 className="font-display font-semibold text-h2 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
              {title}
            </h2>
          </motion.div>

          {/* Feature columns — mobile: stacked, desktop: row */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerFast} className="flex flex-col gap-10 md:flex-row md:gap-12 items-start">
            {resolvedFeatures.map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-6 md:flex-1">
                <div className="size-12 text-neutral-darkest shrink-0">
                  {feature.icon}
                </div>
                <h4 className="font-display font-semibold text-h4 text-neutral-darkest leading-[1.3] tracking-[-0.01em]">
                  {feature.title}
                </h4>
                <p className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex items-center gap-6">
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
          </motion.div>

      </Container>
    </section>
  );
}
