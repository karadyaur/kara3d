"use client";

// Figma: node-id=10209:614 (desktop), 10209:900 (mobile)
// Mobile: full-width accordion list (same structure, just narrower)
// max-w-[768px] centers on desktop, takes full width on mobile

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerFast } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

// + rotated 45° = ×  — single icon, no swap needed
function PlusIcon() {
  return (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  description: string;
  items: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
}

export function Faq({
  title,
  description,
  items,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref,
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-malachite-darker py-section-lg">
      <Container className="flex flex-col gap-12 md:gap-20 items-center">
          {/* Section title */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-6 items-center text-center text-white w-full max-w-[768px]">
            <h2 className="font-display font-semibold text-h2 leading-[1.2] tracking-[-0.01em]">
              {title}
            </h2>
            <p className="font-sans font-normal text-medium-body leading-[1.5]">
              {description}
            </p>
          </motion.div>

          {/* Accordion list */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerFast} className="flex flex-col gap-4 w-full max-w-[768px]">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div key={i} variants={fadeUp} className="bg-malachite-darkest rounded-5xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex gap-6 items-center px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="flex-1 font-sans font-bold text-medium-body text-white leading-[1.5]">
                      {item.question}
                    </span>
                    {/* + rotates 45° → × */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 0.03, 0.26, 1] }}
                      className="text-white shrink-0 flex"
                    >
                      <PlusIcon />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 0.03, 0.26, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="font-sans font-normal text-regular text-white leading-[1.5]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-6 items-center text-center w-full max-w-[560px]">
            <div className="flex flex-col gap-4 text-white">
              <h4 className="font-display font-semibold text-h4 leading-[1.3] tracking-[-0.01em]">
                {ctaTitle}
              </h4>
              <p className="font-sans font-normal text-medium-body leading-[1.5]">
                {ctaDescription}
              </p>
            </div>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white-10 text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
            >
              {ctaLabel}
            </Link>
          </motion.div>

      </Container>
    </section>
  );
}
