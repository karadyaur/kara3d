import { NextResponse } from "next/server";

const BASE = "https://kara3d.de";

const pages = [
  { url: BASE,                       changefreq: "monthly", priority: "1.0" },
  { url: `${BASE}/impressum`,        changefreq: "yearly",  priority: "0.3" },
  { url: `${BASE}/datenschutz`,      changefreq: "yearly",  priority: "0.3" },
  { url: `${BASE}/agb`,              changefreq: "yearly",  priority: "0.3" },
];

export function GET() {
  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
