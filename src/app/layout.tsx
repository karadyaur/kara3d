import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { PageTransition } from "@/components/ui/PageTransition";
import { Preloader } from "@/components/ui/Preloader";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/jsonld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600"],
});

const SITE_URL = "https://kara3d.de";
const SITE_NAME = "Kara 3D";
const DEFAULT_TITLE = "Kara 3D — 3D-Druck & Serienfertigung in Hamburg";
const DEFAULT_DESCRIPTION =
  "Professioneller 3D-Druck und additive Serienfertigung für technische Kunststoffteile in Hamburg. Angebot innerhalb von 6 Stunden. Zuverlässig, präzise, langfristig.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,

  keywords: [
    "3D-Druck Hamburg", "Serienfertigung 3D-Druck", "additive Fertigung",
    "Kunststoffteile 3D-Druck", "FDM Serienfertigung", "Prototypen Hamburg",
    "3D-Druckservice", "technische Bauteile", "Kleinserie 3D-Druck",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: { "de-DE": SITE_URL },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Preloader />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
