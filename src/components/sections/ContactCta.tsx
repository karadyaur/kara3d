"use client";

// Figma: node-id=10209:601 (desktop), 10209:876 (mobile)
// Mobile: flex-col — content above, image below (full width)
// Desktop: flex-row — content left, fixed-size image right

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, imageReveal, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { IMG_BLUR_DATA_URL } from "@/lib/constants";

interface ContactCtaProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
}

export function ContactCta({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  image,
  imageAlt,
}: ContactCtaProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-10 md:flex-row md:gap-20 items-center justify-center"
        >

          {/* Content — centered */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-8 items-center text-center md:py-[52px]">
            <div className="flex flex-col gap-6 text-neutral-darkest">
              <h2 className="font-display font-semibold text-h2 leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
              <p className="font-sans font-normal text-medium-body leading-[1.5]">
                {description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-malachite-dark border border-malachite text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-darkest-5 text-neutral-darkest font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
              >
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>

          {/* Image — full width on mobile, fixed on desktop */}
          <motion.div variants={imageReveal} className="relative w-full h-[240px] rounded-4xl md:h-[356px] md:w-[617px] md:rounded-5xl md:shrink-0 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 617px"
              placeholder="blur"
              blurDataURL={IMG_BLUR_DATA_URL}
            />
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
