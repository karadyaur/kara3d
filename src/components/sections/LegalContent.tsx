"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

interface Block {
  type: "paragraph" | "heading" | "list";
  html?: string;
  items?: string[];
}

interface Section {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface LegalContentProps {
  title: string;
  updatedAt: string;
  sections: Section[];
}

export function LegalContent({ title, updatedAt, sections }: LegalContentProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = contentRef.current?.querySelectorAll<HTMLElement>("section[data-section-id]");
    if (!headings) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute("data-section-id") ?? "");
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-section-lg">
      <Container>
        {/* Title row */}
        <div className="flex flex-col gap-2 mb-12 md:flex-row md:items-baseline md:justify-between md:gap-8 border-b border-neutral-lighter pb-8">
          <h1 className="font-display font-semibold text-h2 leading-[1.2] tracking-[-0.01em] text-neutral-darkest">
            {title}
          </h1>
          <p className="font-sans font-normal text-small text-neutral-darkest/50 leading-[1.5] shrink-0">
            Stand: {updatedAt}
          </p>
        </div>

        {/* Body: TOC + content */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 md:items-start">

          {/* TOC — sticky on desktop, flat list on mobile */}
          <nav className="md:w-64 md:shrink-0 md:sticky md:top-24 md:self-start">
            <ul className="flex flex-col gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left font-sans font-normal text-small leading-[1.5] py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                      activeId === s.id
                        ? "text-malachite-dark bg-malachite-lightest font-medium"
                        : "text-neutral-darkest/60 hover:text-neutral-darkest hover:bg-neutral-darkest-5"
                    }`}
                  >
                    {s.heading}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div ref={contentRef} className="flex-1 min-w-0 flex flex-col gap-10">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                data-section-id={s.id}
                className="flex flex-col gap-4 scroll-mt-24"
              >
                <h2 className="font-display font-semibold text-h4 leading-[1.3] tracking-[-0.01em] text-neutral-darkest">
                  {s.heading}
                </h2>
                {s.blocks.map((block, bi) => {
                  if (block.type === "heading") {
                    return (
                      <h3
                        key={bi}
                        className="font-sans font-semibold text-medium-body text-neutral-darkest leading-[1.5] mt-2"
                        dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
                      />
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={bi} className="flex flex-col gap-1.5 pl-5 list-disc">
                        {block.items?.map((item, ii) => (
                          <li
                            key={ii}
                            className="font-sans font-normal text-regular text-neutral-darkest/80 leading-[1.6]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={bi}
                      className="font-sans font-normal text-regular text-neutral-darkest/80 leading-[1.6] [&_a]:underline [&_a]:hover:opacity-70 [&_a]:transition-opacity"
                      dangerouslySetInnerHTML={{ __html: block.html ?? "" }}
                    />
                  );
                })}
              </section>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
