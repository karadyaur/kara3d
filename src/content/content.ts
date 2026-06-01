/**
 * Site Content — Kara 3D
 *
 * Single source of truth for all text and images across the site.
 */

// ============================================================================
// SHARED — Navbar + Footer (rendered on every page)
// ============================================================================

export const shared = {
  navbar: {
    links: [
      { label: "Über uns", href: "#uber-uns" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Serienfertigung", href: "#serienfertigung" },
    ],
    ctaLabel: "Anfragen",
    ctaHref: "#kontakt",
  },

  footer: {
    description:
      "3D-Druck für Industrie-Teile. Aus Hamburg, versandt in ganz Deutschland.",
    navLinks: [
      { label: "Über uns", href: "#uber-uns" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Serienfertigung", href: "#serienfertigung" },
    ],
    newsletter: {
      description: "Tipps, Materialien, Beispiele — einmal pro Quartal.",
      placeholder: "E-Mail eingeben",
      buttonLabel: "Abonnieren",
      disclaimer: "Mit dem Abonnement akzeptieren Sie unsere",
      privacyLabel: "Datenschutzrichtlinie",
      privacyHref: "/datenschutz",
    },
    legalLinks: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Cookie-Einstellungen", href: "/cookies" },
    ],
    copyright: "© 2026 Kara 3D. Alle Rechte vorbehalten.",
  },
};

// ============================================================================
// HOME
// ============================================================================

export const home = {
  hero: {
    title: "3D-Druck aus Hamburg",
    description:
      "Halterungen, Teile und Prototypen. 1 bis 500 Stück. ASA, ABS, PETG, PLA. Versand per DHL.",
    primaryLabel: "Angebot anfragen",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen ansehen",
    secondaryHref: "#leistungen",
    backgroundImage:
      "https://images.pexels.com/photos/31357903/pexels-photo-31357903.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },

  vorteile: {
    tagline: "Vorteile",
    title: "Warum Kara 3D",
    description:
      "Klarer Fokus, feste Parameter, direkter Kontakt.",
    cards: [
      {
        tagline: "Fokus",
        title: "Nur Teile für die Industrie",
        description:
          "Keine Deko, kein Spielzeug. Halterungen, Gehäuse und Ersatzteile — das ist alles.",
        href: "#leistungen",
        image:
          "https://images.pexels.com/photos/17509941/pexels-photo-17509941.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-gedrucktes Teil wird vom Druckbett entfernt",
      },
      {
        tagline: "Kontakt",
        title: "Ein Ansprechpartner",
        description:
          "Sie schreiben direkt mit dem, der Ihre Teile druckt. Kein Call-Center, keine Plattform.",
        href: "#uber-uns",
        image:
          "https://images.pexels.com/photos/19583534/pexels-photo-19583534.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Tablett mit 3D-gedruckten Teilen",
      },
      {
        tagline: "Prozess",
        title: "Feste Parameter",
        description:
          "Jede Serie hat feste Werte: Material, Schicht, Temperatur. Nachbestellungen sind immer gleich.",
        href: "#serienfertigung",
        image:
          "https://images.pexels.com/photos/19588197/pexels-photo-19588197.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-Drucker in der Werkstatt mit Filamentrolle",
      },
    ],
  },

  leistungen: {
    tagline: "Leistungen",
    title: "Was wir machen",
    primaryLabel: "Zur Serienfertigung",
    primaryHref: "#serienfertigung",
    secondaryLabel: "Alle Leistungen",
    secondaryHref: "#leistungen",
    items: [
      {
        title: "Vorrichtungen & Halterungen",
        description:
          "Nach Ihrer Datei oder Zeichnung. Halterungen, Sensorhalter, Montageteile.",
      },
      {
        title: "Ersatzteile",
        description:
          "Kein Original mehr? Wir drucken nach Muster oder Skizze.",
      },
      {
        title: "Prototypen & Kleinserien",
        description:
          "Vom Einzelteil bis 500 Stück. Für Tests, Muster und Serien.",
      },
    ],
  },

  anfang: {
    tagline: "Ablauf",
    title: "So läuft Ihre Anfrage",
    primaryLabel: "Anfrage starten",
    primaryHref: "#kontakt",
    secondaryLabel: "Häufige Fragen",
    secondaryHref: "#faq",
    features: [
      {
        icon: "plannerReview",
        title: "1. Datei oder Skizze senden",
        description:
          "STL, STEP oder PDF. Eine Skizze reicht oft. Wir prüfen Material und Machbarkeit.",
      },
      {
        icon: "equal",
        title: "2. Angebot in 24 Stunden",
        description:
          "Fester Preis pro Teil — mit Material und Lieferzeit. Kein Kleingedrucktes.",
      },
      {
        icon: "orderPlay",
        title: "3. Druck und Versand",
        description:
          "Nach Freigabe starten wir. Versand per DHL, meist 5–10 Tage.",
      },
    ],
  },

  zahlen: {
    tagline: "Standards",
    title: "Womit wir arbeiten",
    description:
      "Die Eckdaten unserer Anlage.",
    primaryLabel: "Materialien & Verfahren",
    primaryHref: "#leistungen",
    secondaryLabel: "Anfrage senden",
    secondaryHref: "#kontakt",
    stats: [
      {
        title: "Bauraum",
        value: "256 × 256 × 260 mm",
        description:
          "Max. Größe pro Druck. Größere Teile werden geteilt.",
      },
      {
        title: "Materialien",
        value: "PLA · PETG · ASA · ABS",
        description:
          "Vier Kunststoffe im Standard. Weitere auf Anfrage.",
      },
      {
        title: "Lieferzeit",
        value: "5–10 Werktage",
        description:
          "Ab Freigabe. Express auf Anfrage.",
      },
    ],
    images: {
      printer:
        "https://images.pexels.com/photos/20877033/pexels-photo-20877033.jpeg?auto=compress&cs=tinysrgb&w=800",
      printerAlt: "Makroaufnahme einer 3D-Druckerdüse",
      parts:
        "https://images.pexels.com/photos/9242927/pexels-photo-9242927.jpeg?auto=compress&cs=tinysrgb&w=800",
      partsAlt: "3D-gedrucktes Zahnrad auf Werkbank",
    },
  },

  contactCta: {
    title: "Idee oder Datei?",
    description:
      "Schreiben Sie uns. Angebot in 24 Stunden.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "E-Mail schreiben",
    secondaryHref: "mailto:info@kara3d.de",
    image:
      "https://images.pexels.com/photos/26969628/pexels-photo-26969628.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Drucker in einer Industriewerkstatt",
  },

  faq: {
    title: "Häufige Fragen",
    description:
      "Nicht gefunden? Einfach schreiben.",
    items: [
      {
        question: "Wie schnell erhalte ich ein Angebot?",
        answer:
          "Innerhalb von 24 Stunden. STL, STEP oder eine Skizze als PDF reicht.",
      },
      {
        question: "Welche Materialien drucken Sie?",
        answer:
          "PLA, PETG, ASA und ABS. PLA für Prototypen, PETG für Halterungen, ASA für Außenteile, ABS für Hitze. Welches passt, klären wir gemeinsam.",
      },
      {
        question: "Ab welcher Stückzahl lohnt sich 3D-Druck?",
        answer:
          "Ab 1 Stück. Bis 500 Teile günstig — keine Werkzeugkosten wie beim Spritzguss.",
      },
      {
        question: "Wie lange dauert eine Kleinserie?",
        answer:
          "5 bis 10 Tage ab Freigabe. Express auf Anfrage.",
      },
      {
        question: "Können Sie komplexe Geometrien fertigen?",
        answer:
          "Ja. Dünne Wände, Kanäle, komplexe Formen — kein Problem. Wir prüfen vorher und melden uns, wenn etwas nicht passt.",
      },
      {
        question: "Was kostet eine Mindestbestellung?",
        answer:
          "Mindest­bestellung 15 €. Kleine Teile gerne zusammenfassen.",
      },
      {
        question: "Liefern Sie deutschlandweit?",
        answer:
          "Ja, per DHL. In Hamburg auch Express oder Same-Day.",
      },
      {
        question: "Wie wird abgerechnet?",
        answer:
          "Kleinunternehmer nach § 19 UStG. Rechnung ohne MwSt. Zahlung per Überweisung, 14 Tage.",
      },
      {
        question: "Was unterscheidet Kara 3D von großen Online-Plattformen?",
        answer:
          "Große Plattformen: Einzel­teile, kein Kontakt. Kara 3D: Kleinserien, feste Parameter, ein Ansprechpartner, direkte Kommunikation.",
      },
    ],
    ctaTitle: "Etwas nicht beantwortet?",
    ctaDescription: "Schreiben Sie uns Ihre Frage — wir antworten persönlich.",
    ctaLabel: "Kontakt aufnehmen",
    ctaHref: "#kontakt",
  },

  kontakt: {
    tagline: "Kontakt",
    title: "Anfrage senden",
    description:
      "Datei oder Beschreibung reicht. Antwort in 24 Stunden.",
    privacyHref: "/datenschutz",
    formLabels: {
      name: "Name",
      namePlaceholder: "Max Mustermann",
      email: "E-Mail",
      emailPlaceholder: "max@beispiel.de",
      stueckzahl: "Stückzahl",
      stueckzahlPlaceholder: "Bitte wählen",
      stueckzahlOptions: [
        "1–10 Stück",
        "11–50 Stück",
        "51–200 Stück",
        "201–500 Stück",
        "Mehr als 500 Stück",
      ],
      message: "Nachricht",
      messagePlaceholder:
        "Bauteil, Material, Maße, Besonderheiten.",
      upload: "Datei-Upload",
      uploadHint: "STL, STEP oder PDF · max. 20 MB",
      uploadButton: "Datei auswählen",
      privacy: "Ich akzeptiere die",
      privacyLink: "Datenschutzerklärung",
      required: "Pflichtfeld",
      submit: "Anfrage senden",
    },
    contacts: {
      email: {
        title: "E-Mail",
        description: "Direkter Weg",
        value: "info@kara3d.de",
        href: "mailto:info@kara3d.de",
      },
      phone: {
        title: "Telefon",
        description: "Mo–Fr, 9:00–18:00 Uhr",
        value: "+49 152 038 28 002",
        href: "tel:+4915203828002",
      },
      location: {
        title: "Standort",
        value: "Hamburg, Deutschland",
      },
    },
  },
};

// ============================================================================
// ÜBER UNS
// ============================================================================

export const uberUns = {
  hero: {
    tagline: "Über Kara 3D",
    title: "3D-Druck-Werkstatt in Hamburg",
    description:
      "Kleine Fertigung für Industrie-Teile. Inhaber: Oleksandr Karadiaur.",
    primaryLabel: "Zu den Leistungen",
    primaryHref: "#leistungen",
    secondaryLabel: "Anfrage senden",
    secondaryHref: "#kontakt",
    backgroundImage:
      "https://images.pexels.com/photos/33977799/pexels-photo-33977799.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },

  produktion: {
    tagline: "Werkstatt",
    title: "Klein, fokussiert, deutsch dokumentiert",
    description:
      "Keine Großfertigung. Wir machen Teile für die Industrie: Halterungen, Vorrichtungen, Ersatzteile. Jede Anfrage geht direkt an den Inhaber. Rechnung nach § 19 UStG.",
    partnerLogos: [],
    primaryLabel: "Leistungen ansehen",
    primaryHref: "#leistungen",
    secondaryLabel: "Anfrage senden",
    secondaryHref: "#kontakt",
    image:
      "https://images.pexels.com/photos/19871842/pexels-photo-19871842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Drucker fertigt kleine Kunststoffteile",
  },

  grundlagen: {
    tagline: "Grundlagen",
    title: "Worauf Sie sich verlassen können",
    description:
      "Drei Dinge bei jedem Auftrag.",
    cards: [
      {
        tagline: "Klarheit",
        title: "Festpreise statt Schätzungen",
        description:
          "Fester Stückpreis pro Anfrage. Keine 'ab'-Preise.",
        href: "#kontakt",
        image:
          "https://images.pexels.com/photos/31121900/pexels-photo-31121900.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-gedrucktes Teil auf dem Druckbett",
      },
      {
        tagline: "Erreichbarkeit",
        title: "Antwort in 24 Stunden",
        description:
          "Werktags am selben Tag. Sonst am nächsten Werktag.",
        href: "#kontakt",
        image:
          "https://images.pexels.com/photos/22491107/pexels-photo-22491107.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Hochpräziser 3D-Drucker-Mechanismus",
      },
      {
        tagline: "Sorgfalt",
        title: "Vorprüfung jeder Datei",
        description:
          "Wände, Überhänge, Toleranzen — wir prüfen vor dem Druck.",
        href: "#kontakt",
        image:
          "https://images.pexels.com/photos/20877039/pexels-photo-20877039.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Nahaufnahme des 3D-Druckkopfs",
        wide: true,
      },
    ],
  },

  contactCta: {
    title: "Jetzt anfragen",
    description:
      "Wir antworten direkt und konkret.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen ansehen",
    secondaryHref: "#leistungen",
    image:
      "https://images.pexels.com/photos/23533982/pexels-photo-23533982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Drucker-Extruder in Aktion",
  },
};

// ============================================================================
// LEISTUNGEN
// ============================================================================

export const leistungen = {
  hero: {
    tagline: "Leistungen",
    title: "3D-Druck für Maschinenbau-Zubehör und Kleinserien",
    description:
      "Vorrichtungen, Halterungen, Ersatzteile und Prototypen in ASA, ABS, PETG und PLA — von 1 bis 500 Stück.",
    cards: [
      {
        tag: "Auftragsfertigung",
        title: "Bauteile nach Ihrer STEP-Datei",
        description:
          "Wir drucken nach Ihrer CAD-Datei oder bemaßten Zeichnung. Vorprüfung inklusive.",
        image:
          "https://images.pexels.com/photos/32396956/pexels-photo-32396956.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-Drucker fertigt präzise Kunststoffteile",
      },
      {
        tag: "Reverse Engineering",
        title: "Ersatzteile ohne Originalzeichnung",
        description:
          "Wenn nur das defekte Teil als Vorlage existiert: wir nehmen Maß und konstruieren neu.",
        image:
          "https://images.pexels.com/photos/31336922/pexels-photo-31336922.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-Drucker-Extruder mit orangem Filament",
      },
    ],
  },

  grundlagen: {
    tagline: "Grundlagen",
    title: "Worauf Sie sich verlassen können",
    description:
      "Drei Dinge bei jedem Auftrag.",
    cards: uberUns.grundlagen.cards,
  },

  steps: {
    steps: [
      {
        icon: "pattern",
        title: "Druckparameter festlegen",
        description:
          "Material, Schichtdicke, Düsentemperatur und Infill werden pro Bauteil dokumentiert und bei Nachbestellung wiederverwendet.",
      },
      {
        icon: "equal",
        title: "Qualitätskontrolle pro Charge",
        description:
          "Wir prüfen Maße, Oberfläche und Funktion an Stichproben — bei kleinen Serien an jedem Teil.",
      },
      {
        icon: "orders",
        title: "Verpackung und Versand",
        description:
          "Teile werden einzeln verpackt, beschriftet und per DHL versichert versendet. Sendungsverfolgung inklusive.",
      },
    ],
    image:
      "https://images.pexels.com/photos/19588197/pexels-photo-19588197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Drucker in der Werkstatt mit Werkzeug und Filament",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Serienfertigung",
    secondaryHref: "#serienfertigung",
  },

  details: {
    tagline: "Fertigung im Detail",
    title: "Materialien, Verfahren, Einsatz",
    description:
      "Was wir können — und was nicht.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "FAQ",
    secondaryHref: "#faq",
    tabs: [
      {
        label: "Verfahren",
        tagline: "Technologie",
        title: "FFF-Druck, Bambu Lab X2D",
        description:
          "Dual-Nozzle, Bauraum 256 × 256 × 260 mm. Kammer bis 65 °C, Düse bis 300 °C. Geeignet für ASA und ABS.",
        primaryLabel: "Anfrage senden",
        primaryHref: "#kontakt",
        secondaryLabel: "Materialien ansehen",
        secondaryHref: "#leistungen",
        image:
          "https://images.pexels.com/photos/4485456/pexels-photo-4485456.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "3D-Drucker-Düse in der Werkstatt",
      },
      {
        label: "Materialien",
        tagline: "Kunststoffe im Standard",
        title: "PLA, PETG, ASA und ABS",
        description:
          "PLA: Prototypen. PETG: Halterungen bis 70 °C. ASA: Außen, UV-fest. ABS: bis 95 °C. Weitere auf Anfrage.",
        primaryLabel: "Material besprechen",
        primaryHref: "#kontakt",
        secondaryLabel: "Anwendungen",
        secondaryHref: "#leistungen",
        image:
          "https://images.pexels.com/photos/31336838/pexels-photo-31336838.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Filamentrollen für den 3D-Druck",
      },
      {
        label: "Anwendungen",
        tagline: "Einsatzgebiete",
        title: "Vom Werkstattzubehör zum Serienteil",
        description:
          "Halterungen, Sensorhalter, Gehäuse, Ersatzteile, Prototypen. Für Industrie-Betriebe in ganz Deutschland.",
        primaryLabel: "Projekt besprechen",
        primaryHref: "#kontakt",
        secondaryLabel: "Serienfertigung",
        secondaryHref: "#serienfertigung",
        image:
          "https://images.pexels.com/photos/9242916/pexels-photo-9242916.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "3D-gedruckte Zahnräder auf der Werkbank",
      },
    ],
  },

  entwicklung: {
    tagline: "Entwicklung",
    title: "Konstruktion und Reverse Engineering",
    description:
      "Kein CAD-Modell? Kein Problem.",
    contentTagline: "CAD-Service",
    contentTitle: "Wir modellieren auf Basis Ihrer Vorlage",
    contentDescription:
      "Muster, Skizze oder defektes Teil reicht. Wir bauen das Modell in Fusion 360. Sie bekommen die STEP-Datei — die Daten gehören Ihnen.",
    primaryLabel: "CAD-Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Mehr zur Fertigung",
    secondaryHref: "#serienfertigung",
    image:
      "https://images.pexels.com/photos/20877032/pexels-photo-20877032.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Industrielle 3D-Drucker-Düse in dunkler Umgebung",
  },

  cta: {
    title: "Bereit für Ihr Bauteil?",
    description:
      "Senden Sie uns Ihre STEP-Datei oder beschreiben Sie Ihre Anforderung. Antwort innerhalb von 24 Stunden.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "FAQ ansehen",
    secondaryHref: "#faq",
    image:
      "https://images.pexels.com/photos/33977820/pexels-photo-33977820.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "3D-Drucker in der Werkstatt mit Neonbeleuchtung",
  },
};

// ============================================================================
// SERIENFERTIGUNG
// ============================================================================

export const serienfertigung = {
  hero: {
    tagline: "Serienfertigung",
    title: "Kleinserien im 3D-Druck — 1 bis 500 Stück",
    description:
      "Für Teile, die immer wieder bestellt werden. Mit festen Parametern.",
    primaryLabel: "Serien-Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen ansehen",
    secondaryHref: "#leistungen",
  },

  zuverlässig: {
    tagline: "Reproduzierbarkeit",
    title: "Gleiche Teile auch beim zehnten Druck",
    description:
      "Material, Schicht, Temperatur — alles notiert. Jede Nachbestellung ist gleich. Gleiche Maße, gleiche Festigkeit — auch Monate später.",
    primaryLabel: "Serie anfragen",
    primaryHref: "#kontakt",
    secondaryLabel: "Häufige Fragen",
    secondaryHref: "#faq",
    image:
      "https://images.pexels.com/photos/31137405/pexels-photo-31137405.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Drucker extrudiert orange Kunststoff für eine Serie",
  },

  dauerhaft: {
    tagline: "Was inklusive ist",
    title: "Klare Abmachung, klare Erwartung",
    description:
      "Eine Serie bei Kara 3D:",
    bulletPoints: [
      "Druckparameter pro Teil — schriftlich",
      "Fester Preis und Lieferzeit pro Charge",
      "Kapazität für Nachbestellungen reserviert",
      "Ihre STEP-Datei bleibt gespeichert",
      "Foto der Charge vor dem Versand",
    ],
    image:
      "https://images.pexels.com/photos/19376296/pexels-photo-19376296.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Filament-Spulen im Regal der 3D-Druck-Werkstatt",
  },

  ohnegrenzen: {
    tagline: "Skalierung",
    title: "Wo unsere Kapazität endet — und wo nicht",
    description:
      "Wir sind eine kleine Fertigung. Serien bis 500 Stück pro Bauteil sind komfortabel umsetzbar. Größere Volumen besprechen wir gemeinsam: in vielen Fällen lässt sich der Auftrag in Tranchen aufteilen oder über einen längeren Zeitraum produzieren. Wenn Spritzguss wirtschaftlicher wird, sagen wir das offen.",
    primaryLabel: "Serie besprechen",
    primaryHref: "#kontakt",
    secondaryLabel: "FAQ ansehen",
    secondaryHref: "#faq",
    image:
      "https://images.pexels.com/photos/30275792/pexels-photo-30275792.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Drucker in moderner Industrieumgebung",
  },

  zahlenFakten: {
    tagline: "Eckdaten",
    title: "Konkrete Rahmenbedingungen",
    description:
      "Passt Kara 3D zu Ihrer Serie?",
    stats: [
      {
        number: "1–500",
        description:
          "Stück pro Auftrag. Mehr auf Anfrage.",
      },
      {
        number: "5–10",
        description:
          "Tage ab Freigabe, per DHL.",
      },
    ],
    primaryLabel: "Serie anfragen",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen",
    secondaryHref: "#leistungen",
  },

  cta: {
    title: "Serie anfragen",
    description:
      "Datei schicken oder Bauteil beschreiben. Antwort in 24 Stunden.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "E-Mail schreiben",
    secondaryHref: "mailto:info@kara3d.de",
    image:
      "https://images.pexels.com/photos/30482193/pexels-photo-30482193.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "3D-Drucker in lebhafter Werkstattumgebung",
  },
};

// ============================================================================
// KONTAKT
// ============================================================================

export const kontakt = {
  main: home.kontakt,
};

// ============================================================================
// AGGREGATE EXPORT
// ============================================================================

export const siteContent = {
  shared,
  home,
  uberUns,
  leistungen,
  serienfertigung,
  kontakt,
};

export default siteContent;
