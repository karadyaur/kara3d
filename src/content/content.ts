/**
 * Site Content — Kara 3D
 *
 * Single source of truth for all text and images across the site.
 * Organized by page → section → fields.
 *
 * Pages:
 *   - shared      → Navbar + Footer (used on every page)
 *   - home        → /
 *   - uberUns     → /uber-uns
 *   - leistungen  → /leistungen
 *   - serienfertigung → /serienfertigung
 *   - kontakt     → /kontakt
 *
 * SEO-Positionierung: 3D-Druck-Fertigung für Maschinenbau-Zubehör
 * (Vorrichtungen, Halterungen, Ersatzteile, Prototypen) aus Hamburg,
 * deutschlandweiter Versand. Kleinserien 1–500 Stück in ASA, ABS,
 * PETG und PLA.
 *
 * Primary Keywords:
 *   - 3D-Druck Vorrichtungen
 *   - 3D-Druck Halterungen Kleinserie
 *   - 3D-Druck Ersatzteile Maschinenbau
 *   - 3D-Druck Hamburg
 *   - ASA 3D-Druck Auftragsfertigung
 *   - Kleinserienfertigung Kunststoff Deutschland
 */

// ============================================================================
// SHARED — Navbar + Footer (rendered on every page)
// ============================================================================

export const shared = {
  /** Top navigation bar — shown on every page */
  navbar: {
    links: [
      { label: "Über uns", href: "#uber-uns" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Serienfertigung", href: "#serienfertigung" },
    ],
    ctaLabel: "Anfragen",
    ctaHref: "#kontakt",
  },

  /** Footer — shown on every page */
  footer: {
    description:
      "Kara 3D fertigt technische Kunststoffteile im 3D-Druck — Vorrichtungen, Halterungen und Ersatzteile für den Maschinenbau. Hergestellt in Hamburg, versendet deutschlandweit.",
    navLinks: [
      { label: "Über uns", href: "#uber-uns" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Serienfertigung", href: "#serienfertigung" },
    ],
    newsletter: {
      description: "Neue Materialien, Fertigungstipps und Projektbeispiele — etwa einmal im Quartal.",
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
// HOME — / (Hero, Vorteile, Leistungen, Anfang, Zahlen, ContactCta, Faq, Kontakt)
// ============================================================================

export const home = {
  /** Hero — Top of homepage, full-bleed photo with title + buttons */
  hero: {
    title: "3D-Druck für Maschinenbau-Zubehör aus Hamburg",
    description:
      "Vorrichtungen, Halterungen und Ersatzteile in ASA, ABS, PETG und PLA. Kleinserien von 1 bis 500 Stück, gefertigt in Hamburg-Winterhude, versendet deutschlandweit per DHL.",
    primaryLabel: "Angebot anfragen",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen ansehen",
    secondaryHref: "#leistungen",
    backgroundImage:
      "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },

  /** Vorteile — "Was wir bieten" — 3-card grid showcasing benefits */
  vorteile: {
    tagline: "Vorteile",
    title: "Warum Kara 3D",
    description:
      "Direkter Kontakt, dokumentierte Druckparameter und ein klarer Fokus auf technische Kunststoffteile.",
    cards: [
      {
        tagline: "Fokus",
        title: "Maschinenbau-Zubehör statt Allround",
        description:
          "Wir drucken keine Spielzeuge und keine Dekofiguren. Unser Fokus liegt auf Vorrichtungen, Halterungen, Gehäusen und Ersatzteilen für die Industrie.",
        href: "#leistungen",
        image:
          "https://images.pexels.com/photos/30720501/pexels-photo-30720501.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-gedruckte Vorrichtung für den Maschinenbau",
      },
      {
        tagline: "Kontakt",
        title: "Direkter Ansprechpartner in Hamburg",
        description:
          "Sie sprechen mit der Person, die Ihre Teile auch fertigt. Kein Callcenter, kein Outsourcing, keine anonyme Plattform.",
        href: "#uber-uns",
        image:
          "https://images.pexels.com/photos/18296450/pexels-photo-18296450.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-Drucker in Betrieb in Hamburg",
      },
      {
        tagline: "Prozess",
        title: "Dokumentierte Druckparameter",
        description:
          "Jede Serie wird mit denselben Einstellungen gefahren — Material, Schichtdicke, Düsentemperatur, Infill. Das macht Nachbestellungen reproduzierbar.",
        href: "#serienfertigung",
        image:
          "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Mit 3D-Druck gefertigte technische Bauteile",
      },
    ],
  },

  /** Leistungen — Timeline of services with sticky-left layout */
  leistungen: {
    tagline: "Leistungen",
    title: "Was wir für Sie fertigen",
    primaryLabel: "Zur Serienfertigung",
    primaryHref: "#serienfertigung",
    secondaryLabel: "Alle Leistungen",
    secondaryHref: "#leistungen",
    items: [
      {
        title: "Vorrichtungen & Halterungen",
        description:
          "Montagehilfen, Prüfvorrichtungen, Sensorhalter und Kabelführungen — gefertigt nach Ihrer Zeichnung oder STEP-Datei.",
      },
      {
        title: "Ersatzteile aus dem 3D-Druck",
        description:
          "Wenn das Originalteil nicht mehr lieferbar ist: wir drucken nach Muster, Zeichnung oder Reverse-Engineering-Vorlage.",
      },
      {
        title: "Funktionsprototypen & Kleinserien",
        description:
          "Vom Einzelteil bis zur Serie von 500 Stück. Ideal für Tests, Erstmuster und wiederkehrende Bedarfe.",
      },
    ],
  },

  /** Anfang — 3-feature column with icons explaining the process */
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
        title: "1. Datei hochladen oder Skizze senden",
        description:
          "STL, STEP oder PDF — bei einfachen Teilen reicht eine bemaßte Skizze. Wir prüfen Druckbarkeit, Material und Stückzahl.",
      },
      {
        icon: "equal",
        title: "2. Angebot innerhalb von 24 Stunden",
        description:
          "Sie erhalten einen Festpreis pro Stück mit Material, Lieferzeit und Versandkosten. Verbindlich, ohne Kleingedrucktes.",
      },
      {
        icon: "orderPlay",
        title: "3. Fertigung und Versand",
        description:
          "Nach Ihrer Freigabe starten wir die Produktion. Versand erfolgt per DHL deutschlandweit, in der Regel innerhalb von 5 bis 10 Werktagen.",
      },
    ],
  },

  /** Zahlen — Stats section with 3-column card grid and images */
  zahlen: {
    tagline: "Standards",
    title: "Womit wir arbeiten",
    description:
      "Statt großer Versprechen — die konkreten Eckdaten unserer Fertigung. So wissen Sie vor der Anfrage, ob wir zu Ihrem Projekt passen.",
    primaryLabel: "Materialien & Verfahren",
    primaryHref: "#leistungen",
    secondaryLabel: "Anfrage senden",
    secondaryHref: "#kontakt",
    stats: [
      {
        title: "Bauraum",
        value: "256 × 256 × 260 mm",
        description:
          "Maximale Teilegröße in einem Druck. Größere Bauteile werden segmentiert und verbunden.",
      },
      {
        title: "Materialien im Standard",
        value: "PLA · PETG · ASA · ABS",
        description:
          "Vier geprüfte technische Kunststoffe. Weitere Materialien auf Anfrage.",
      },
      {
        title: "Lieferzeit",
        value: "5–10 Werktage",
        description:
          "Standardlieferzeit ab Freigabe. Express auf Anfrage, abhängig von Auslastung.",
      },
    ],
    images: {
      printer:
        "https://images.pexels.com/photos/31336881/pexels-photo-31336881.jpeg?auto=compress&cs=tinysrgb&w=800",
      printerAlt: "3D-Drucker Düse beim Druck eines technischen Bauteils",
      parts:
        "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=800",
      partsAlt: "Im 3D-Druck gefertigte Bauteile aus ASA",
    },
  },

  /** ContactCta — Call-to-action with image */
  contactCta: {
    title: "Sie haben eine STEP-Datei oder eine Idee?",
    description:
      "Schicken Sie uns Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "E-Mail schreiben",
    secondaryHref: "mailto:info@kara3d.de",
    image:
      "https://images.pexels.com/photos/30720501/pexels-photo-30720501.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Druckprozess bei Kara 3D in Hamburg",
  },

  /** Faq — Accordion of frequently asked questions */
  faq: {
    title: "Häufige Fragen zum 3D-Druck-Service",
    description:
      "Antworten auf typische Fragen vor der ersten Anfrage. Wenn etwas fehlt — schreiben Sie uns einfach.",
    items: [
      {
        question: "Wie schnell erhalte ich ein Angebot?",
        answer:
          "Innerhalb von 24 Stunden nach Eingang Ihrer Anfrage. Laden Sie einfach Ihre STL- oder STEP-Datei hoch und geben Sie die gewünschte Stückzahl an. Bei einfachen Teilen reicht auch eine bemaßte Skizze als PDF.",
      },
      {
        question: "Welche Materialien drucken Sie?",
        answer:
          "Im Standard PLA, PETG, ASA und ABS. PLA für Prototypen und Innenanwendungen, PETG für allgemeine Halterungen und Gehäuse, ASA für UV- und witterungsbeständige Außenteile, ABS für Anwendungen mit erhöhter Temperaturbelastung. Die Materialwahl besprechen wir gemeinsam, abhängig von mechanischer Belastung, Temperatur und Einsatzumgebung.",
      },
      {
        question: "Ab welcher Stückzahl lohnt sich 3D-Druck?",
        answer:
          "3D-Druck ist ab 1 Stück wirtschaftlich und gut geeignet für Serien von 1 bis 500 Teilen. Für Prototypen, Kleinserien, Ersatzteile und Bauteile mit komplexer Geometrie ist additive Fertigung fast immer schneller und günstiger als Spritzguss — weil keine Werkzeugkosten anfallen.",
      },
      {
        question: "Wie lange dauert eine Kleinserie?",
        answer:
          "Standardlieferzeit ist 5 bis 10 Werktage ab Freigabe, abhängig von Stückzahl, Material und Auslastung. Bei wiederkehrenden Aufträgen reservieren wir Druckkapazität im Voraus, damit Ihre Serie pünktlich verfügbar ist. Express auf Anfrage.",
      },
      {
        question: "Können Sie komplexe Geometrien fertigen?",
        answer:
          "Ja — Hinterschnitte, Innenkanäle, dünne Wandstärken ab 0,8 mm und organische Formen sind im 3D-Druck umsetzbar. Wir prüfen Ihre Konstruktion vorab auf Druckbarkeit und melden uns, wenn Optimierungen sinnvoll sind, bevor Material verbraucht wird.",
      },
      {
        question: "Was kostet eine Mindestbestellung?",
        answer:
          "Der Mindestauftragswert liegt bei 15 €. Darunter rechnet sich der Einrichtungs- und Versandaufwand für beide Seiten nicht. Bei Kleinteilen empfehlen wir, mehrere Teile in einer Bestellung zusammenzufassen.",
      },
      {
        question: "Liefern Sie deutschlandweit?",
        answer:
          "Ja, Versand erfolgt deutschlandweit per DHL als versichertes Paket. Auf Wunsch auch als Express- oder Same-Day-Lieferung in Hamburg und Umgebung.",
      },
      {
        question: "Wie wird abgerechnet?",
        answer:
          "Kara 3D ist als Kleinunternehmer nach § 19 UStG registriert. Sie erhalten eine ordnungsgemäße deutsche Rechnung ohne ausgewiesene Mehrwertsteuer. Zahlung per Überweisung, in der Regel mit 14 Tagen Zahlungsziel.",
      },
      {
        question: "Was unterscheidet Kara 3D von großen Online-Plattformen?",
        answer:
          "Große Plattformen optimieren auf Einzelteile und Einmalaufträge. Kara 3D ist auf Maschinenbau-Zubehör in Kleinserien spezialisiert: feste Druckparameter pro Bauteil, ein konstanter Ansprechpartner, direkte Kommunikation per E-Mail oder Telefon. Sie bestellen nicht bei einem anonymen Portal, sondern bei einer Fertigung in Hamburg.",
      },
    ],
    ctaTitle: "Etwas nicht beantwortet?",
    ctaDescription: "Schreiben Sie uns Ihre Frage — wir antworten persönlich.",
    ctaLabel: "Kontakt aufnehmen",
    ctaHref: "#kontakt",
  },

  /** Kontakt — Contact form section at bottom of homepage (also used on /kontakt) */
  kontakt: {
    tagline: "Kontakt",
    title: "Anfrage senden",
    description:
      "Schicken Sie uns Ihre Datei oder beschreiben Sie Ihr Bauteil. Antwort innerhalb von 24 Stunden.",
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
        "Beschreiben Sie Ihr Bauteil: Einsatzzweck, gewünschtes Material, Maße, Besonderheiten.",
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
        description: "Direkter Weg zur Anfrage",
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
        value: "Hamburg-Winterhude, Deutschland",
      },
    },
  },
};

// ============================================================================
// ÜBER UNS — /uber-uns (UberUnsHero, Produktion, Grundlagen, ContactCta)
// ============================================================================

export const uberUns = {
  /** UberUnsHero — Hero with background image */
  hero: {
    tagline: "Über Kara 3D",
    title: "Eine 3D-Druck-Werkstatt in Hamburg-Winterhude",
    description:
      "Kara 3D ist eine kleine, spezialisierte Fertigung für technische Kunststoffteile. Geführt von Oleksandr Karadiaur, registriert als Gewerbe in Hamburg.",
    primaryLabel: "Zu den Leistungen",
    primaryHref: "#leistungen",
    secondaryLabel: "Anfrage senden",
    secondaryHref: "#kontakt",
    backgroundImage:
      "https://images.pexels.com/photos/18296450/pexels-photo-18296450.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },

  /** Produktion — Content + image side-by-side */
  produktion: {
    tagline: "Werkstatt",
    title: "Klein, fokussiert, deutsch dokumentiert",
    description:
      "Wir sind keine Großfertigung und behaupten es auch nicht. Kara 3D ist eine 3D-Druck-Werkstatt mit klarem Fokus auf Maschinenbau-Zubehör: Vorrichtungen, Halterungen, Ersatzteile und Funktionsprototypen. Jede Anfrage geht direkt an den Inhaber. Jede Rechnung ist eine korrekte deutsche Geschäftsrechnung nach § 19 UStG. AGB, Widerrufsbelehrung und Datenschutzerklärung sind hinterlegt — Sie wissen, mit wem Sie es zu tun haben.",
    partnerLogos: [],
    primaryLabel: "Leistungen ansehen",
    primaryHref: "#leistungen",
    secondaryLabel: "Anfrage senden",
    secondaryHref: "#kontakt",
    image:
      "https://images.pexels.com/photos/30720501/pexels-photo-30720501.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Druckwerkstatt von Kara 3D in Hamburg-Winterhude",
  },

  /** Grundlagen — 3-card grid showing core values */
  grundlagen: {
    tagline: "Grundlagen",
    title: "Worauf Sie sich verlassen können",
    description:
      "Drei Dinge, die wir in jedem Auftrag liefern — unabhängig von Stückzahl und Budget.",
    cards: [
      {
        tagline: "Klarheit",
        title: "Festpreise statt Schätzungen",
        description:
          "Sie erhalten pro Anfrage einen verbindlichen Stückpreis, keine ‚ab-Preise‘.",
        href: "#kontakt",
        image:
          "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Technisch präzise gefertigtes Bauteil",
      },
      {
        tagline: "Erreichbarkeit",
        title: "Antwort innerhalb von 24 Stunden",
        description:
          "Anfragen werden werktags am selben Tag bearbeitet. Spätestens am nächsten Werktag haben Sie ein Angebot.",
        href: "#kontakt",
        image:
          "https://images.pexels.com/photos/31336881/pexels-photo-31336881.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-Drucker Düse in Betrieb",
      },
      {
        tagline: "Sorgfalt",
        title: "Vorprüfung jeder Datei",
        description:
          "Wir prüfen Wandstärken, Überhänge und Toleranzen, bevor der Druck startet — und melden uns, wenn etwas nicht passt.",
        href: "#kontakt",
        image:
          "https://images.pexels.com/photos/18296450/pexels-photo-18296450.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Fertigungsanlage im Betrieb",
        wide: true,
      },
    ],
  },

  /** ContactCta — same as home but customizable per page */
  contactCta: {
    title: "Lernen Sie unsere Fertigung kennen",
    description:
      "Senden Sie uns Ihre erste Anfrage — wir antworten persönlich und konkret.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen ansehen",
    secondaryHref: "#leistungen",
    image:
      "https://images.pexels.com/photos/30720501/pexels-photo-30720501.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "3D-Druckprozess bei Kara 3D",
  },
};

// ============================================================================
// LEISTUNGEN — /leistungen
// (LeistungHero, Grundlagen, LeistungSteps, LeistungDetails, LeistungEntwicklung, LeistungCta)
// ============================================================================

export const leistungen = {
  /** LeistungHero — Two-card article-style hero */
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
          "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Additive Fertigung eines technischen Bauteils",
      },
      {
        tag: "Reverse Engineering",
        title: "Ersatzteile ohne Originalzeichnung",
        description:
          "Wenn nur das defekte Teil als Vorlage existiert: wir nehmen Maß und konstruieren neu.",
        image:
          "https://images.pexels.com/photos/31336881/pexels-photo-31336881.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "3D-Drucker beim Druck eines Ersatzteils",
      },
    ],
  },

  /** Grundlagen — same shared Grundlagen component, same defaults as uberUns */
  grundlagen: {
    tagline: "Grundlagen",
    title: "Worauf Sie sich verlassen können",
    description:
      "Drei Dinge, die wir in jedem Auftrag liefern — unabhängig von Stückzahl und Budget.",
    cards: uberUns.grundlagen.cards,
  },

  /** LeistungSteps — 3-step process with icons + image */
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
      "https://images.pexels.com/photos/30720501/pexels-photo-30720501.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Produktionsprozess im 3D-Druck",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Serienfertigung",
    secondaryHref: "#serienfertigung",
  },

  /** LeistungDetails — Tabbed content (Verfahren / Materialien / Anwendungen) */
  details: {
    tagline: "Fertigung im Detail",
    title: "Materialien, Verfahren und Einsatzgebiete",
    description:
      "Eine Übersicht über das, was wir konkret können — und das, was wir nicht versprechen.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "FAQ",
    secondaryHref: "#faq",
    tabs: [
      {
        label: "Verfahren",
        tagline: "Technologie",
        title: "FFF-3D-Druck mit Dual-Nozzle-System",
        description:
          "Wir arbeiten mit FFF-Druck (Fused Filament Fabrication) auf einem Bambu Lab X2D mit Dual-Nozzle-Kopf. Bauraum 256 × 256 × 260 mm, beheizte Druckkammer bis 65 °C, beheizte Düse bis 300 °C. Damit fertigen wir auch anspruchsvolle Materialien wie ASA und ABS zuverlässig.",
        primaryLabel: "Anfrage senden",
        primaryHref: "#kontakt",
        secondaryLabel: "Materialien ansehen",
        secondaryHref: "#leistungen",
        image:
          "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "FFF-3D-Drucker mit Dual-Nozzle-Druckkopf",
      },
      {
        label: "Materialien",
        tagline: "Kunststoffe im Standard",
        title: "PLA, PETG, ASA und ABS",
        description:
          "PLA für Prototypen, Modelle und Innenanwendungen ohne Wärmebelastung. PETG für allgemeine Halterungen, Gehäuse und mechanisch belastete Teile bis ca. 70 °C. ASA für witterungs- und UV-beständige Außenanwendungen. ABS für Bauteile mit erhöhter Temperaturbeständigkeit bis ca. 95 °C. Weitere Materialien auf Anfrage prüfbar.",
        primaryLabel: "Material besprechen",
        primaryHref: "#kontakt",
        secondaryLabel: "Anwendungen",
        secondaryHref: "#leistungen",
        image:
          "https://images.pexels.com/photos/31336881/pexels-photo-31336881.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Filamentrollen aus ASA, ABS, PETG und PLA",
      },
      {
        label: "Anwendungen",
        tagline: "Einsatzgebiete",
        title: "Vom Werkstattzubehör zum Serienteil",
        description:
          "Typische Anwendungen: Vorrichtungen und Montagehilfen, Sensorhalter und Kabelführungen, Schaltschrank-Inserts, Schutzkappen und Gehäuse, Ersatzteile für ältere Maschinen, Funktionsprototypen vor dem Spritzguss. Wir fertigen für Maschinenbau, Sondermaschinenbau und kleinere Industriebetriebe in ganz Deutschland.",
        primaryLabel: "Projekt besprechen",
        primaryHref: "#kontakt",
        secondaryLabel: "Serienfertigung",
        secondaryHref: "#serienfertigung",
        image:
          "https://images.pexels.com/photos/30720501/pexels-photo-30720501.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imageAlt: "Anwendungsbeispiele aus dem Maschinenbau",
      },
    ],
  },

  /** LeistungEntwicklung — Development/optimization section */
  entwicklung: {
    tagline: "Entwicklung",
    title: "Konstruktion und Reverse Engineering",
    description:
      "Sie haben kein CAD-Modell? Kein Problem.",
    contentTagline: "CAD-Service",
    contentTitle: "Wir modellieren auf Basis Ihrer Vorlage",
    contentDescription:
      "Wenn Sie nur ein Muster, eine Handskizze oder das defekte Originalteil haben, übernehmen wir die Konstruktion in Fusion 360 oder FreeCAD. Sie erhalten eine fertige STEP-Datei und können das Bauteil später auch bei anderen Fertigern bestellen — Sie behalten die Daten.",
    primaryLabel: "CAD-Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Mehr zur Fertigung",
    secondaryHref: "#serienfertigung",
    image:
      "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "CAD-Konstruktion eines Bauteils für den 3D-Druck",
  },

  /** LeistungCta — Bottom call-to-action banner */
  cta: {
    title: "Bereit für Ihr Bauteil?",
    description:
      "Senden Sie uns Ihre STEP-Datei oder beschreiben Sie Ihre Anforderung. Antwort innerhalb von 24 Stunden.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "FAQ ansehen",
    secondaryHref: "#faq",
    image:
      "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "Bauteilfertigung im 3D-Druck",
  },
};

// ============================================================================
// SERIENFERTIGUNG — /serienfertigung
// (SerienfertigungHero, Zuverlässig, Dauerhaft, Ohnegrenzen, ZahlenFakten, LeistungCta)
// ============================================================================

export const serienfertigung = {
  /** SerienfertigungHero — Two-column hero with tagline+title left, description+buttons right */
  hero: {
    tagline: "Serienfertigung",
    title: "Kleinserien im 3D-Druck — 1 bis 500 Stück",
    description:
      "Für wiederkehrende Bauteile mit dokumentierten Druckparametern. Ideal für Vorrichtungen, Halterungen und Ersatzteile, die regelmäßig nachbestellt werden.",
    primaryLabel: "Serien-Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen ansehen",
    secondaryHref: "#leistungen",
  },

  /** Zuverlässig — Dark green section: content left, image right */
  zuverlässig: {
    tagline: "Reproduzierbarkeit",
    title: "Gleiche Teile auch beim zehnten Druck",
    description:
      "Für jede Serie hinterlegen wir Material, Schichtdicke, Düsentemperatur, Infill und Druckkammertemperatur. Bei Nachbestellungen werden exakt dieselben Parameter geladen. Das heißt: gleiche Maße, gleiche Festigkeit, gleiches Aussehen — auch Monate später.",
    primaryLabel: "Serie anfragen",
    primaryHref: "#kontakt",
    secondaryLabel: "Häufige Fragen",
    secondaryHref: "#faq",
    image:
      "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Reproduzierbare Serienteile aus dem 3D-Druck",
  },

  /** Dauerhaft — White section with bullet list + image */
  dauerhaft: {
    tagline: "Was eine Serie bei uns ausmacht",
    title: "Klare Vereinbarung, klare Erwartung",
    description:
      "Eine Serie bei Kara 3D bedeutet konkret:",
    bulletPoints: [
      "Schriftlich festgehaltene Druckparameter pro Bauteil",
      "Verbindlicher Stückpreis und Lieferzeit pro Tranche",
      "Reservierte Druckkapazität für regelmäßige Nachbestellungen",
      "Lagerung Ihrer STEP-Datei und Druckhistorie",
      "Foto der fertigen Charge auf Wunsch vor dem Versand",
    ],
    image:
      "https://images.pexels.com/photos/31336881/pexels-photo-31336881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Verpackung einer Serie technischer Kunststoffteile",
  },

  /** Ohnegrenzen — White section with image left, content right */
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
      "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Kleinserienfertigung im 3D-Druck",
  },

  /** ZahlenFakten — Two-column stats section (title left, description + stats + buttons right) */
  zahlenFakten: {
    tagline: "Eckdaten",
    title: "Konkrete Rahmenbedingungen",
    description:
      "Damit Sie vor der Anfrage einschätzen können, ob Kara 3D zu Ihrer Serie passt.",
    stats: [
      {
        number: "1–500",
        description:
          "Stückzahl pro Auftrag im Standardbereich, höhere Volumen auf Anfrage",
      },
      {
        number: "5–10",
        description:
          "Werktage Standardlieferzeit ab Freigabe, deutschlandweit per DHL",
      },
    ],
    primaryLabel: "Serie anfragen",
    primaryHref: "#kontakt",
    secondaryLabel: "Leistungen",
    secondaryHref: "#leistungen",
  },

  /** LeistungCta — Bottom call-to-action (same component as on /leistungen) */
  cta: {
    title: "Ihre Serie beginnt mit einer STEP-Datei",
    description:
      "Schicken Sie uns die Datei oder beschreiben Sie das Bauteil — wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot.",
    primaryLabel: "Anfrage senden",
    primaryHref: "#kontakt",
    secondaryLabel: "E-Mail schreiben",
    secondaryHref: "mailto:info@kara3d.de",
    image:
      "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "Kleinserienfertigung im 3D-Druck bei Kara 3D",
  },
};

// ============================================================================
// KONTAKT — /kontakt (Kontakt form section)
// ============================================================================

export const kontakt = {
  /** Main contact section — form + contact info (same as home.kontakt) */
  main: home.kontakt,
};

// ============================================================================
// AGGREGATE EXPORT — all site content in one object
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