import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const sitemapIndex = new URL("sitemap-index.xml", site).href;
  const sitemapSingle = new URL("sitemap.xml", site).href;

  const content = [
    "# FreeVPN.my Multi-Crawler Robots Policy",
    "User-agent: Googlebot",
    "Allow: /",
    "Disallow: /keystatic",
    "Disallow: /api/",
    "",
    "User-agent: bingbot",
    "Allow: /",
    "Disallow: /keystatic",
    "Disallow: /api/",
    "",
    "User-agent: Baiduspider",
    "Allow: /",
    "Disallow: /keystatic",
    "Disallow: /api/",
    "",
    "User-agent: yisouspider",
    "Allow: /",
    "Disallow: /keystatic",
    "Disallow: /api/",
    "",
    "User-agent: 360Spider",
    "Allow: /",
    "Disallow: /keystatic",
    "Disallow: /api/",
    "",
    "User-agent: Bytespider",
    "Allow: /",
    "Disallow: /keystatic",
    "Disallow: /api/",
    "",
    "User-agent: *",
    "Allow: /",
    "Disallow: /keystatic",
    "Disallow: /api/",
    "",
    `Sitemap: ${sitemapSingle}`,
    `Sitemap: ${sitemapIndex}`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
