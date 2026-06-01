"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { IMG_BLUR_DATA_URL } from "@/lib/constants";

function ChevronRight() {
  return (
    <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
}

interface TabContent {
  label: string;
  tagline: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image: string;
  imageAlt?: string;
}

interface LeistungDetailsProps {
  tagline: string;
  title: string;
  description: string;
  tabs: TabContent[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function LeistungDetails({
  tagline,
  title,
  description,
  tabs,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: LeistungDetailsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activeContent = tabs[activeTab];

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

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
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

          {/* Tabs Container */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col gap-12 md:gap-16 w-full items-center">
            {/* Tab Buttons */}
            <div className="flex gap-6 md:gap-8 items-center border-b border-neutral-light">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative py-2 font-sans font-normal text-regular leading-[1.5] transition-colors cursor-pointer ${
                    activeTab === idx
                      ? "text-neutral-darkest"
                      : "text-neutral-light hover:text-neutral-darkest"
                  }`}
                >
                  {tab.label}
                  {activeTab === idx && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-neutral-darkest"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-neutral-lightest rounded-5xl overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row md:min-h-[640px] w-full"
                >
                  {/* Left — Content */}
                  <div className="w-full md:flex-1 flex flex-col gap-8 justify-center p-8 md:p-12">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <p className="font-sans font-semibold text-tagline text-neutral-darkest">
                          {activeContent.tagline}
                        </p>
                        <div className="flex flex-col gap-6">
                          <h3 className="font-display font-semibold text-h3 text-neutral-darkest leading-[1.2] tracking-[-0.01em]">
                            {activeContent.title}
                          </h3>
                          <p className="font-sans font-normal text-regular text-neutral-darkest leading-[1.5]">
                            {activeContent.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-6 pt-2">
                      <Link
                        href={activeContent.primaryHref || primaryHref}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-darkest-5 text-neutral-darkest font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
                      >
                        {activeContent.primaryLabel || primaryLabel}
                      </Link>
                      <Link
                        href={activeContent.secondaryHref || secondaryHref}
                        className="inline-flex items-center gap-2 text-neutral-darkest font-sans font-medium text-regular leading-[1.5] whitespace-nowrap transition-opacity hover:opacity-80"
                      >
                        {activeContent.secondaryLabel || secondaryLabel}
                        <ChevronRight />
                      </Link>
                    </div>
                  </div>

                  {/* Right — Image */}
                  <div className="w-full md:flex-1 relative h-[300px] md:h-auto">
                    <Image
                      src={activeContent.image}
                      alt={activeContent.imageAlt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={IMG_BLUR_DATA_URL}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

      </Container>
    </section>
  );
}
