"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { IMG_BLUR_DATA_URL } from "@/lib/constants";

interface ArticleCard {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

interface LeistungHeroProps {
  tagline: string;
  title: string;
  description: string;
  cards: ArticleCard[];
}

export function LeistungHero({
  tagline,
  title,
  description,
  cards,
}: LeistungHeroProps) {
  return (
    <section className="bg-white py-section-lg">
      <Container className="flex flex-col gap-16 md:gap-20">
          {/* Section Title */}
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col gap-6 items-center text-center max-w-[768px] mx-auto w-full">
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

          {/* Cards Row */}
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col gap-12 md:flex-row md:gap-8 w-full">
            {cards.map((card) => (
              <motion.div
                key={card.tag}
                variants={fadeUp}
                className="flex-1 min-w-0 bg-neutral-lightest rounded-5xl overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[220px] md:h-[260px] w-full shrink-0">
                  <Image
                    src={card.image}
                    alt={card.imageAlt ?? ""}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={IMG_BLUR_DATA_URL}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 p-6">
                  <p className="font-sans font-semibold text-small text-neutral-darkest">
                    {card.tag}
                  </p>
                  <div className="flex flex-col gap-4">
                    <h5 className="font-display font-semibold text-h5 text-neutral-darkest leading-[1.4] tracking-[-0.01em]">
                      {card.title}
                    </h5>
                    <p className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </Container>
    </section>
  );
}
