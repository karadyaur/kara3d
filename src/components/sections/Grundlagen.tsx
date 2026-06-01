"use client";

// Figma: node-id=10209:1265
// bg-malachite-darker py-section-lg. Centered title + 3-card row.
// Cards 1+2: flex-1 vertical (image h-[171px] top, content bottom). rounded-4xl.
// Card 3: w-[640px] horizontal split (image left, content right). rounded-4xl.
// Mobile: all cards stack vertically, card 3 becomes vertical too.

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

interface GrundlagenCard {
  tagline: string;
  title: string;
  description: string;
  href?: string;
  image: string;
  imageAlt?: string;
  wide?: boolean;
}

interface GrundlagenProps {
  tagline: string;
  title: string;
  description: string;
  cards: GrundlagenCard[];
}


function VerticalCard({ card }: { card: GrundlagenCard }) {
  return (
    <motion.div variants={fadeUp} className="flex-1 min-w-0 flex flex-col bg-malachite-darkest rounded-4xl overflow-hidden">
      {/* Image */}
      <div className="relative h-[188px] md:h-[171px] shrink-0 w-full">
        <Image
          src={card.image}
          alt={card.imageAlt ?? ""}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={IMG_BLUR_DATA_URL}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 p-6 flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-sans font-semibold text-tagline text-white">{card.tagline}</p>
          <div className="flex flex-col gap-2 text-white">
            <h5 className="font-display font-semibold text-h5 leading-[1.4] tracking-[-0.01em]">
              {card.title}
            </h5>
            <p className="font-sans font-normal text-regular leading-[1.5]">
              {card.description}
            </p>
          </div>
        </div>
        {card.href && (
          <Link
            href={card.href}
            className="inline-flex items-center gap-2 text-white font-sans font-medium text-regular leading-[1.5] hover:opacity-80 transition-opacity"
          >
            Mehr
            <ChevronRight />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

function WideCard({ card }: { card: GrundlagenCard }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:w-[640px] md:shrink-0 bg-malachite-darkest rounded-4xl overflow-hidden">
      {/* Image — full width on mobile, left half on desktop */}
      <div className="relative h-[326px] md:h-auto md:flex-1 w-full shrink-0">
        <Image
          src={card.image}
          alt={card.imageAlt ?? ""}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={IMG_BLUR_DATA_URL}
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Content — right half on desktop */}
      <div className="flex flex-col gap-6 p-6 md:flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-sans font-semibold text-tagline text-white">{card.tagline}</p>
          <div className="flex flex-col gap-2 text-white">
            <h5 className="font-display font-semibold text-h5 leading-[1.4] tracking-[-0.01em]">
              {card.title}
            </h5>
            <p className="font-sans font-normal text-regular leading-[1.5]">
              {card.description}
            </p>
          </div>
        </div>
        {card.href && (
          <Link
            href={card.href}
            className="inline-flex items-center gap-2 text-white font-sans font-medium text-regular leading-[1.5] hover:opacity-80 transition-opacity"
          >
            Mehr
            <ChevronRight />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function Grundlagen({
  tagline,
  title,
  description,
  cards,
}: GrundlagenProps) {
  const verticalCards = cards.filter((c) => !c.wide);
  const wideCard = cards.find((c) => c.wide);

  return (
    <section className="bg-malachite-darker py-section-lg">
      <Container className="flex flex-col gap-12 md:gap-20 items-center">
          {/* Section title */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-6 items-center text-center text-white max-w-[768px] w-full">
            <p className="font-sans font-semibold text-tagline">{tagline}</p>
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-semibold text-h2 leading-[1.2] tracking-[-0.01em]">
                {title}
              </h2>
              <p className="font-sans font-normal text-medium-body leading-[1.5]">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Cards row — mobile: stacked, desktop: row */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="flex flex-col gap-6 md:flex-row md:gap-8 w-full items-stretch">
            {verticalCards.map((card) => (
              <VerticalCard key={card.tagline} card={card} />
            ))}
            {wideCard && <WideCard card={wideCard} />}
          </motion.div>

      </Container>
    </section>
  );
}
