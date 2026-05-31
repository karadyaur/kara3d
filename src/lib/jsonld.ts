export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://kara3d.de/#business",
    name: "Kara 3D",
    alternateName: "Kara3D",
    description:
      "Kara 3D ist Hamburgs Spezialist für 3D-Druck-Serienfertigung technischer Kunststoffteile. Angebot in 6 Stunden, direkter Ansprechpartner, Produktion ausschließlich in Hamburg. Über 1.000 Teile pro Monat, 98 % Liefertreue.",
    url: "https://kara3d.de",
    email: "hello@kara3d.de",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamburg",
      addressRegion: "Hamburg",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "Country", name: "Deutschland" },
      { "@type": "City",    name: "Hamburg" },
    ],
    knowsAbout: [
      "3D-Druck", "Additive Fertigung", "FDM", "Serienfertigung",
      "Prototypenfertigung", "Kunststoffteile", "technische Bauteile",
      "PLA", "PETG", "ASA", "ABS", "TPU", "Nylon PA12",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      reviewCount: "47",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "3D-Druck & Fertigungsleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3D-Druck Serienfertigung",
            description:
              "Reproduzierbare Serien von 10–5.000 Teilen. Lieferzeit 5–10 Werktage. Gleichbleibende Qualität durch dokumentierte Prozessparameter.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prototypen & Kleinserien",
            description:
              "Einzelteile und Kleinserien ab 1 Stück. Angebot innerhalb von 6 Stunden nach STL- oder STEP-Upload.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teileentwicklung & Prozessoptimierung",
            description:
              "Optimierung von Konstruktionen für additive Fertigung. Wandstärken ab 0,8 mm, Hinterschnitte, Innenkanäle möglich.",
          },
        },
      ],
    },
    sameAs: ["https://kara3d.de"],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kara3d.de/#website",
    url: "https://kara3d.de",
    name: "Kara 3D",
    description: "3D-Druck & Serienfertigung in Hamburg",
    inLanguage: "de-DE",
    publisher: { "@id": "https://kara3d.de/#business" },
  };
}
