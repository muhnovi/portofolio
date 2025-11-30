export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://muhfi.my.id";

  const routes = [
    "/",
    "/About",
    "/Contact",
    "/Projects",
    "/page/Last",
  ];

  const urls = routes
    .map(
      (route) => `
<url>
  <loc>${baseUrl}${route}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
