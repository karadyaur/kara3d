"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, imageReveal, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { IMG_BLUR_DATA_URL } from "@/lib/constants";

interface ZuverlässigProps {
  tagline: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
}

export function Zuverlässig({
  tagline,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  image,
  imageAlt,
}: ZuverlässigProps) {
  return (
    <section className="bg-malachite-darker py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-10 md:gap-12 md:flex-row md:items-center"
        >
          {/* Left — Content */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col gap-6">
              <p className="font-sans font-semibold text-tagline text-white">
                {tagline}
              </p>
              <h2 className="font-display font-semibold text-h2 text-white leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
              <p className="font-sans font-normal text-medium-body text-white leading-[1.5] max-w-[500px]">
                {description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
              <Link
                href={primaryHref}
                className="flex items-center justify-center px-6 py-2.5 rounded-full bg-malachite border border-malachite-light text-white font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="flex items-center justify-center px-6 py-2.5 rounded-full bg-white-10 text-white font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div variants={imageReveal} className="w-full md:flex-1 relative rounded-4xl md:rounded-5xl overflow-hidden aspect-[600/640] md:aspect-[500/540]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={IMG_BLUR_DATA_URL}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
