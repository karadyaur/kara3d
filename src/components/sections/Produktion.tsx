"use client";

// Figma: node-id=10209:1236
// White bg. Left (flex-1): tagline + H2 + description + partner logos + CTAs.
// Right (flex-1): aspect-[600/640] photo rounded-5xl.
// Mobile: flex-col, image above content.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, imageReveal, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

interface ProduktionProps {
  tagline: string;
  title: string;
  description: string;
  partnerLogos: string[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
}

export function Produktion({
  tagline,
  title,
  description,
  partnerLogos,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  image,
  imageAlt,
}: ProduktionProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-10 md:flex-row md:gap-20 items-center"
        >

          {/* Left — content */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="font-sans font-semibold text-tagline text-neutral-darkest">
                  {tagline}
                </p>
                <div className="flex flex-col gap-6 text-neutral-darkest">
                  <h2 className="font-display font-semibold text-h2 leading-[1.2] tracking-[-0.01em]">
                    {title}
                  </h2>
                  <p className="font-sans font-normal text-medium-body leading-[1.5]">
                    {description}
                  </p>
                </div>
              </div>

              {/* Partner logos */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center py-2">
                {partnerLogos.map((name) => (
                  <span
                    key={name}
                    className="font-sans font-semibold text-regular text-neutral-lighter tracking-wide uppercase"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
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

          {/* Right — image */}
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
