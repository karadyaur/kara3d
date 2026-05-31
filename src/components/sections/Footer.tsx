"use client";

// Figma: node-id=10209:725 (desktop), 10209:1136 (mobile)
// Mobile: card flex-col p-8, newsletter stacks vertically, button full-width, credits stacked
// Desktop: card flex-row gap-32 p-12, credits row

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { shared } from "@/content/content";

const { navLinks, legalLinks, description, newsletter, copyright } = shared.footer;

export function Footer() {
  const [email, setEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletter = async () => {
    if (!email.trim() || nlStatus === "loading") return;
    setNlStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setNlStatus("success");
        setEmail("");
      } else {
        setNlStatus("error");
      }
    } catch {
      setNlStatus("error");
    }
  };

  return (
    <footer className="bg-malachite-darker py-section-md">
      <Container className="flex flex-col gap-6 md:gap-8">

        {/* Card */}
        <div className="bg-malachite-darkest rounded-5xl p-8 md:p-12 flex flex-col gap-12 md:flex-row md:gap-32 items-start">

          {/* Left — logo + nav links */}
          <div className="flex-1 min-w-0 flex flex-col gap-10 md:flex-row md:gap-10 items-start">

            {/* Logo + description */}
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              <CompanyLogo alternate />
              <p className="font-sans font-normal text-tiny text-white leading-[1.5]">
                {description}
              </p>
            </div>

            {/* Nav links */}
            <div className="flex-1 min-w-0 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 font-sans font-normal text-small text-white leading-[1.5] hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — newsletter */}
          <div className="w-full md:w-[400px] md:shrink-0 flex flex-col gap-4 md:gap-6">
            <p className="font-sans font-normal text-small md:text-regular text-white leading-[1.5]">
              {newsletter.description}
            </p>
            <div className="flex flex-col gap-3">
              {nlStatus === "success" ? (
                <p className="font-sans font-normal text-small text-white/80 leading-[1.5]">
                  Danke! Sie sind jetzt angemeldet.
                </p>
              ) : (
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleNewsletter()}
                    placeholder={newsletter.placeholder}
                    className="w-full md:flex-1 bg-white-10 rounded-xl px-3 py-2 font-sans font-normal text-regular text-white leading-[1.5] placeholder:text-white/60 outline-none focus:ring-1 focus:ring-white/30 transition"
                  />
                  <button
                    type="button"
                    onClick={handleNewsletter}
                    disabled={nlStatus === "loading"}
                    className="w-full md:w-auto md:shrink-0 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white-10 text-white font-sans font-medium text-regular leading-[1.5] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer disabled:opacity-50"
                  >
                    {nlStatus === "loading" ? "…" : newsletter.buttonLabel}
                  </button>
                </div>
              )}
              {nlStatus === "error" && (
                <p className="font-sans font-normal text-tiny text-red-300 leading-[1.5]">
                  Fehler. Bitte erneut versuchen.
                </p>
              )}
              <p className="font-sans font-normal text-tiny text-white leading-[1.5]">
                {newsletter.disclaimer}{" "}
                <Link href={newsletter.privacyHref} className="underline hover:opacity-70 transition-opacity">
                  {newsletter.privacyLabel}
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Credits — mobile: stacked, desktop: row */}
        <div className="flex flex-col gap-8 pb-4 md:pb-0 md:flex-row md:items-center md:justify-between">
          {/* Legal links — mobile: stacked, desktop: inline */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 font-sans font-normal text-small text-white leading-[1.5]">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <span className="font-sans font-normal text-small text-white leading-[1.5] whitespace-nowrap">
              {copyright}
            </span>
            <a
              href="https://codebridge.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="font-sans font-normal text-tiny text-white leading-[1.5] whitespace-nowrap">
                Developed by
              </span>
              <Image
                src="/codebridge.png"
                alt="Codebridge"
                height={16}
                width={37}
                className="object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
}
