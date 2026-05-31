import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Vorteile } from "@/components/sections/Vorteile";
import { Leistungen } from "@/components/sections/Leistungen";
import { LeistungDetails } from "@/components/sections/LeistungDetails";
import { Zuverlässig } from "@/components/sections/Zuverlässig";
import { Dauerhaft } from "@/components/sections/Dauerhaft";
import { Anfang } from "@/components/sections/Anfang";
import { Zahlen } from "@/components/sections/Zahlen";
import { Produktion } from "@/components/sections/Produktion";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { Kontakt } from "@/components/sections/Kontakt";
import { Footer } from "@/components/sections/Footer";
import { home, leistungen, serienfertigung, uberUns } from "@/content/content";

export const metadata: Metadata = {
  title: "3D-Druck & Serienfertigung in Hamburg",
  description:
    "Kara 3D fertigt technische Kunststoffteile per 3D-Druck in Hamburg — Serienfertigung, Prototypen und Kleinserien. Angebot innerhalb von 24 Stunden.",
  alternates: { canonical: "https://kara3d.de" },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero {...home.hero} />
      <Vorteile {...home.vorteile} />
      <div id="leistungen">
        <Leistungen {...home.leistungen} />
        <LeistungDetails {...leistungen.details} />
      </div>
      <div id="serienfertigung">
        <Zuverlässig {...serienfertigung.zuverlässig} />
        <Dauerhaft {...serienfertigung.dauerhaft} />
      </div>
      <Anfang {...home.anfang} />
      <Zahlen {...home.zahlen} />
      <div id="uber-uns">
        <Produktion {...uberUns.produktion} />
      </div>
      <ContactCta {...home.contactCta} />
      <div id="faq">
        <Faq {...home.faq} />
      </div>
      <div id="kontakt">
        <Kontakt {...home.kontakt} />
      </div>
      <Footer />
    </div>
  );
}
