import fs from "fs";
import path from "path";

export default function sitemap() {
  const baseUrl = "https://muhfi.my.id";
  const appDir = path.join(process.cwd(), "src/app");

  function scanRoutes(dir, prefix = "") {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    let routes = [];

    items.forEach((item) => {
      // Abaikan folder khusus Next.js
      if (item.name.startsWith("_") || item.name.startsWith("(")) return;

      const fullPath = path.join(dir, item.name);

      // Kalau folder, cek apakah ada page.js di dalamnya
      if (item.isDirectory()) {
        const pagePath = path.join(fullPath, "page.js");

        if (fs.existsSync(pagePath)) {
          routes.push(
            `${prefix}/${item.name}`.replace(/\/+/g, "/") // hilangkan double slash
          );
        }

        // Scan folder di dalamnya (rekursif)
        routes = routes.concat(
          scanRoutes(fullPath, `${prefix}/${item.name}`)
        );
      }
    });

    return routes;
  }

  const routes = scanRoutes(appDir);

  // Tambahkan halaman root "/"
  const finalRoutes = ["/", ...routes];

  return finalRoutes.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: url === "/" ? 1.0 : 0.8,
  }));
}
