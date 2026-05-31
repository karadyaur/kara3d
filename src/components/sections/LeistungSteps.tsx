"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, imageReveal, stagger, staggerFast } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface LeistungStepsProps {
  steps: Step[];
  image: string;
  imageAlt: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function LeistungSteps({
  steps,
  image,
  imageAlt,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: LeistungStepsProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-10 md:gap-20 md:flex-row items-stretch"
        >
          {/* Left — Steps */}
          <motion.div variants={staggerFast} className="w-full md:flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {steps.map((step, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="size-12 rounded-full bg-neutral-lightest shrink-0 flex items-center justify-center">
                    <div className="size-6 text-neutral-darkest">
                      {step.icon === "pattern" && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 3h4v4H3V3m6 0h4v4H9V3m6 0h4v4h-4V3M3 9h4v4H3V9m6 0h4v4H9V9m6 0h4v4h-4V9M3 15h4v4H3v-4m6 0h4v4H9v-4m6 0h4v4h-4v-4z" />
                        </svg>
                      )}
                      {step.icon === "equal" && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 8h18v2H3V8m0 6h18v2H3v-2z" />
                        </svg>
                      )}
                      {step.icon === "orders" && (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex flex-col gap-2">
                    <h5 className="font-display font-semibold text-h5 text-neutral-darkest leading-[1.4] tracking-[-0.01em]">
                      {step.title}
                    </h5>
                    <p className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-4">
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
          </motion.div>

          {/* Right — Image */}
          <motion.div variants={imageReveal} className="w-full md:flex-1 relative rounded-4xl md:rounded-5xl overflow-hidden aspect-[600/640]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
