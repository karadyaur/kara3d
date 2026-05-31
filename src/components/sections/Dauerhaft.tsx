"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, imageReveal, stagger } from "@/lib/animations";
import { Container } from "@/components/ui/Container";

interface DauerhaftProps {
  tagline: string;
  title: string;
  description: string;
  bulletPoints: string[];
  image: string;
  imageAlt: string;
}

export function Dauerhaft({
  tagline,
  title,
  description,
  bulletPoints,
  image,
  imageAlt,
}: DauerhaftProps) {
  return (
    <section className="bg-white py-section-lg">
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

            {/* Bullet Points */}
            <ul className="flex flex-col gap-4 max-w-[500px]">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-malachite flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Image */}
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
