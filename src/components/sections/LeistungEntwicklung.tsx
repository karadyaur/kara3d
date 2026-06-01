"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { IMG_BLUR_DATA_URL } from "@/lib/constants";

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

interface LeistungEntwicklungProps {
  tagline: string;
  title: string;
  description: string;
  contentTagline: string;
  contentTitle: string;
  contentDescription: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
}

export function LeistungEntwicklung({
  tagline,
  title,
  description,
  contentTagline,
  contentTitle,
  contentDescription,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  image,
  imageAlt,
}: LeistungEntwicklungProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container className="flex flex-col gap-16 md:gap-20">
          {/* Section Title */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-6 items-center text-center max-w-[768px] mx-auto w-full">
            <p className="font-sans font-semibold text-tagline text-neutral-darkest">
              {tagline}
            </p>
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-semibold text-h2 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
              <p className="font-sans font-normal text-medium-body text-neutral-darkest leading-[1.5]">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="bg-neutral-lightest rounded-5xl overflow-hidden w-full flex flex-col md:flex-row md:min-h-[640px]">
            {/* Left — Content */}
            <div className="w-full md:flex-1 flex flex-col gap-8 justify-center p-8 md:p-12">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="font-sans font-semibold text-tagline text-neutral-darkest">
                    {contentTagline}
                  </p>
                  <div className="flex flex-col gap-6">
                    <h3 className="font-display font-semibold text-h3 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                      {contentTitle}
                    </h3>
                    <p className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5]">
                      {contentDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-6 pt-2">
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
            </div>

            {/* Right — Image */}
            <div className="w-full md:flex-1 relative h-[300px] md:h-auto">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={IMG_BLUR_DATA_URL}
              />
            </div>
          </motion.div>

      </Container>
    </section>
  );
}
