import app from "./api";

const port = Number(process.env.PORT ?? 3000);
const distDir = `${import.meta.dir}/../dist`;
const indexPath = `${distDir}/index.html`;

const server = Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api")) {
      return app.fetch(request);
    }

    // Always serve sitemap.xml / robots.txt from dist with the correct
    // content-type. Never let them fall through to the SPA HTML shell.
    if (url.pathname === "/sitemap.xml" || url.pathname === "/robots.txt") {
      const f = Bun.file(`${distDir}${url.pathname}`);
      if (await f.exists()) {
        return new Response(f, {
          headers: {
            "Content-Type": url.pathname.endsWith(".xml")
              ? "application/xml; charset=utf-8"
              : "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }
    }

    const cleanPath = getCleanPath(url.pathname);

    // 1. Exact static asset (js, css, images, robots.txt, sitemap.xml, favicons…)
    if (cleanPath) {
      const exact = Bun.file(`${distDir}/${cleanPath}`);
      if (await exact.exists()) {
        return new Response(exact);
      }

      // 2. Prerendered route as "<path>.html" or "<path>/index.html"
      if (!cleanPath.includes(".")) {
        const asHtml = Bun.file(`${distDir}/${cleanPath}.html`);
        if (await asHtml.exists()) {
          return new Response(asHtml, {
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        }
        const asIndex = Bun.file(`${distDir}/${cleanPath}/index.html`);
        if (await asIndex.exists()) {
          return new Response(asIndex, {
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        }
      }
    }

    // 3. SPA fallback to root index.html
    const index = Bun.file(indexPath);
    if (await index.exists()) {
      return new Response(index, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response("Build output not found. Run `bun run build` first.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
});

console.log(`Web server listening on http://localhost:${server.port}`);

function getCleanPath(pathname: string) {
  return decodeURIComponent(pathname)
    .replace(/^\/+/, "")
    .replace(/\/+$/, "")
    .replaceAll("..", "");
}
