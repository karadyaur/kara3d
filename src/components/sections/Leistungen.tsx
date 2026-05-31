"use client";

// Figma: node-id=10209:480 (desktop), 10209:987 (mobile)
// Desktop: sticky scroll — left title | center progress bar | right items (smaller)
// Mobile: stacked list with icons on left

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

// --- Icons (strokeWidth 3.5 for visual weight) ---

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

// --- Types ---

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

// --- Progress dot ---
// Activates (fills) when scroll reaches the midpoint of the item's section.

function ProgressDot({
  index,
  total,
  scrollYProgress,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  // The fill reaches this dot when scroll = (index + 0.5) / total
  const mid = (index + 0.5) / total;
  const progress = useTransform(scrollYProgress, [mid - 0.07, mid], [0, 1]);
  const topPercent = mid * 100;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${topPercent}%` }}
    >
      {/* Static ring */}
      <div className="w-[9px] h-[9px] rounded-full border border-neutral-lighter bg-white" />
      {/* Animated fill */}
      <motion.div
        className="absolute inset-0 rounded-full bg-neutral-darkest"
        style={{ opacity: progress, scale: progress }}
      />
    </div>
  );
}

// --- Progress bar ---
// Vertical line that fills from top as you scroll. Dots mark each item.

function ProgressBar({
  total,
  scrollYProgress,
  className,
}: {
  total: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}) {
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={`relative flex justify-center ${className ?? ""}`}>
      {/* Background track */}
      <div className="absolute inset-y-0 w-[2px] bg-neutral-lighter" />
      {/* Fill */}
      <motion.div
        className="absolute top-0 w-[2px] bg-neutral-dark origin-top h-full"
        style={{ scaleY }}
      />
      {/* Dots */}
      {Array.from({ length: total }).map((_, i) => (
        <ProgressDot
          key={i}
          index={i}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

// --- Desktop scroll item ---
// Icon left of text, vertically centered to the whole text block.
// y + opacity + scale track scrollYProgress for a rich transition feel.

function ScrollItem({
  item,
  index,
  total,
  scrollYProgress,
  Icon,
}: {
  item: LeistungItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  Icon: React.ComponentType;
}) {
  const N = total;
  const i = index;
  const T = 0.18;

  const entryEnd = i / N;
  const entryStart = entryEnd - T;
  const exitStart = (i + 1) / N - T;
  const exitEnd = (i + 1) / N;

  const keyframes =
    i === 0
      ? [exitStart, exitEnd]
      : i === N - 1
      ? [entryStart, entryEnd]
      : [entryStart, entryEnd, exitStart, exitEnd];

  const yValues =
    i === 0
      ? ["0%", "-110%"]
      : i === N - 1
      ? ["110%", "0%"]
      : ["110%", "0%", "0%", "-110%"];

  const opacityValues =
    i === 0 ? [1, 0] : i === N - 1 ? [0, 1] : [0, 1, 1, 0];

  const scaleValues =
    i === 0 ? [1, 0.94] : i === N - 1 ? [0.94, 1] : [0.94, 1, 1, 0.94];

  const y = useTransform(scrollYProgress, keyframes, yValues);
  const opacity = useTransform(scrollYProgress, keyframes, opacityValues);
  const scale = useTransform(scrollYProgress, keyframes, scaleValues);

  return (
    <motion.div
      className="absolute inset-0 flex items-center gap-6"
      style={{ y, opacity, scale }}
    >
      <div className="size-10 shrink-0 text-neutral-darkest">
        <Icon />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-display font-semibold text-h4 text-neutral-darkest leading-[1.3] tracking-[-0.01em]">
          {item.title}
        </h3>
        <p className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5] max-w-[320px]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// --- Component ---

export function Leistungen({
  tagline,
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  items,
}: LeistungenProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Mobile — stacked list, icon left of text */}
      <section className="md:hidden bg-white py-section-lg">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="font-sans font-semibold text-tagline text-neutral-darkest">{tagline}</p>
                <h2 className="font-display font-semibold text-h2 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                  {title}
                </h2>
              </div>
              <div className="flex items-center gap-6">
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

            <div className="flex flex-col divide-y divide-neutral-lighter">
              {items.map((item, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="flex items-center gap-6 py-6"
                  >
                    <div className="size-10 shrink-0 text-neutral-darkest">
                      <Icon />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-display font-semibold text-h4 text-neutral-darkest leading-[1.3] tracking-[-0.01em]">
                        {item.title}
                      </h4>
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

      {/* Desktop — full-screen sticky scroll */}
      <section
        ref={sectionRef}
        className="hidden md:block relative bg-white"
        style={{ height: `${items.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <Container className="h-full flex items-center">
            <div className="flex gap-14 w-full items-center">

              {/* Left — title + CTAs (static) */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="flex-1 flex flex-col gap-8"
              >
                <div className="flex flex-col gap-4">
                  <p className="font-sans font-semibold text-tagline text-neutral-darkest">
                    {tagline}
                  </p>
                  <h2 className="font-display font-semibold text-h2 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                    {title}
                  </h2>
                </div>
                <div className="flex items-center gap-6">
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

              {/* Center — scroll progress bar */}
              <ProgressBar
                total={items.length}
                scrollYProgress={smoothProgress}
                className="h-[38vh] w-6"
              />

              {/* Right — smaller items animate with y + opacity + scale */}
              <div className="flex-1 relative h-[38vh] overflow-hidden">
                {items.map((item, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  return (
                    <ScrollItem
                      key={item.title}
                      item={item}
                      index={i}
                      total={items.length}
                      scrollYProgress={smoothProgress}
                      Icon={Icon}
                    />
                  );
                })}
              </div>

            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
