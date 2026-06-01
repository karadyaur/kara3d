"use client";

// Figma: node-id=10205:694 (desktop), 10209:1084 (mobile)
// Mobile: cards stacked vertically (flex-col)
// Desktop: 3-column card grid (flex-row)

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { IMG_BLUR_DATA_URL } from "@/lib/constants";

interface VorteilCard {
  tagline: string;
  title: string;
  description: string;
  href?: string;
  image: string;
  imageAlt?: string;
}

interface VorteileProps {
  tagline: string;
  title: string;
  description: string;
  cards: VorteilCard[];
}

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

export function Vorteile({
  tagline,
  title,
  description,
  cards,
}: VorteileProps) {
  return (
    <section className="bg-malachite-darker py-section-lg">
      <Container className="flex flex-col gap-12 md:gap-20 items-center">
          {/* Section title */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-4 items-center text-center max-w-container-sm">
            <p className="font-sans font-semibold text-tagline text-white">{tagline}</p>
            <div className="flex flex-col gap-6 text-white">
              <h2 className="font-display font-semibold text-h2 leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
              <p className="font-sans font-normal text-medium-body leading-[1.5]">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Cards — mobile: stacked, desktop: row */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="flex flex-col gap-6 md:flex-row md:gap-8 items-stretch w-full">
            {cards.map((card) => (
              <motion.div
                key={card.tagline}
                variants={fadeUp}
                className="flex flex-col bg-malachite-darkest rounded-4xl overflow-hidden md:flex-1"
              >
                {/* Card image */}
                <div className="relative h-[220px] md:h-[233px] shrink-0">
                  <Image
                    src={card.image}
                    alt={card.imageAlt ?? ""}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={IMG_BLUR_DATA_URL}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-col gap-6 p-8 flex-1">
                  <div className="flex flex-col gap-2">
                    <p className="font-sans font-semibold text-tagline text-white whitespace-nowrap">
                      {card.tagline}
                    </p>
                    <div className="flex flex-col gap-4 text-white">
                      <h4 className="font-display font-semibold text-h4 leading-[1.3] tracking-[-0.01em]">
                        {card.title}
                      </h4>
                      <p className="font-sans font-normal text-regular leading-[1.5]">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {card.href && (
                    <Link
                      href={card.href}
                      className="mt-auto inline-flex items-center gap-2 text-white font-sans font-medium text-regular leading-[1.5] hover:opacity-80 transition-opacity"
                    >
                      Mehr
                      <ChevronRight />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

      </Container>
    </section>
  );
}
