"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, imageReveal, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

interface OhnegrenzenProps {
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

export function Ohnegrenzen({
  tagline,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  image,
  imageAlt,
}: OhnegrenzenProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-10 md:gap-12 md:flex-row-reverse md:items-center"
        >
          {/* Right — Content */}
          <motion.div variants={fadeUp} className="w-full md:flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col gap-6">
              <p className="font-sans font-semibold text-tagline text-neutral-darkest">
                {tagline}
              </p>
              <h2 className="font-display font-semibold text-h2 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
              <p className="font-sans font-normal text-medium-body text-neutral-darkest leading-[1.5] max-w-[500px]">
                {description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
              <Link
                href={primaryHref}
                className="flex items-center justify-center px-6 py-2.5 rounded-full bg-malachite-dark border border-malachite text-white font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="flex items-center justify-center px-6 py-2.5 rounded-full bg-white-10 text-neutral-darkest font-sans font-medium text-regular leading-[1.5] transition-opacity hover:opacity-80"
              >
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>

          {/* Left — Image */}
          <motion.div variants={imageReveal} className="w-full md:flex-1 relative rounded-4xl md:rounded-5xl overflow-hidden aspect-[600/500] md:aspect-[500/480]">
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
