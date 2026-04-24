import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://meister-fliesen-zeneli.lovable.app";

const ROUTES: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/leistungen", changefreq: "monthly", priority: "0.9" },
  { path: "/referenzen", changefreq: "monthly", priority: "0.8" },
  { path: "/ueber-uns", changefreq: "yearly", priority: "0.7" },
  { path: "/kontakt", changefreq: "yearly", priority: "0.8" },
  { path: "/impressum", changefreq: "yearly", priority: "0.3" },
  { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const urls = ROUTES.map(
          (r) =>
            `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
        ).join("\n");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(sitemap, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
