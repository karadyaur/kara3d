import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines
      { userAgent: "*", allow: "/" },
      // AI crawlers — explicitly allowed so LLMs index this site
      { userAgent: "GPTBot",         allow: "/" },
      { userAgent: "ChatGPT-User",   allow: "/" },
      { userAgent: "Claude-Web",     allow: "/" },
      { userAgent: "anthropic-ai",   allow: "/" },
      { userAgent: "PerplexityBot",  allow: "/" },
      { userAgent: "Googlebot",      allow: "/" },
      { userAgent: "cohere-ai",      allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
    ],
    sitemap: "https://kara3d.de/sitemap.xml",
  };
}
