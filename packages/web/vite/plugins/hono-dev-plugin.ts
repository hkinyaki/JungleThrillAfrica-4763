import type { Plugin, ViteDevServer } from "vite";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export default function honoDevPlugin(): Plugin {
  return {
    name: "hono-dev-server",
    configureServer(server) {
      // Serve SEO files explicitly with correct content-type BEFORE the SPA
      // fallback, so they can never resolve to the index.html shell in dev.
      // (The managed platform exposes this dev server publicly.)
      server.middlewares.use((req, res, next) => {
        const url = (req.url || "").split("?")[0];
        const publicDir = path.resolve(__dirname, "../../public");
        const seoFiles: Record<string, string> = {
          "/sitemap.xml": "application/xml; charset=utf-8",
          "/robots.txt": "text/plain; charset=utf-8",
          "/llms.txt": "text/plain; charset=utf-8",
        };
        const contentType = seoFiles[url];
        if (!contentType) return next();
        try {
          const file = readFileSync(path.join(publicDir, url.slice(1)));
          res.statusCode = 200;
          res.setHeader("Content-Type", contentType);
          res.end(file);
        } catch {
          next();
        }
      });

      // Serve PRERENDERED PRODUCTION HTML for page routes from dist/, mirroring
      // src/server.ts. The managed platform exposes THIS dev server publicly, so
      // crawlers must receive full prerendered content (not the empty SPA shell).
      // dist/*.html are self-contained: full content in #root + load built
      // /assets/*.js to hydrate, so they work for crawlers AND real browsers.
      // Dev internals (/src, /@, HMR, vite queries) are skipped so HMR still works.
      server.middlewares.use((req, res, next) => {
        if (req.method !== "GET" && req.method !== "HEAD") return next();

        const rawUrl = req.url || "/";
        const pathname = rawUrl.split("?")[0];

        // Skip vite/dev internals + queried requests → let Vite handle them.
        if (
          rawUrl.includes("?") ||
          pathname.startsWith("/src/") ||
          pathname.startsWith("/@") ||
          pathname.startsWith("/node_modules/") ||
          pathname.startsWith("/__vite") ||
          pathname.startsWith("/api")
        ) {
          return next();
        }

        const distDir = path.resolve(__dirname, "../../dist");
        const indexPath = path.join(distDir, "index.html");
        // No build present → normal Vite dev (local dev without a build).
        if (!existsSync(indexPath)) return next();

        const cleanPath = decodeURIComponent(pathname)
          .replace(/^\/+/, "")
          .replace(/\/+$/, "")
          .replaceAll("..", "");

        const sendFile = (filePath: string, contentType: string) => {
          try {
            const file = readFileSync(filePath);
            res.statusCode = 200;
            res.setHeader("Content-Type", contentType);
            res.end(file);
            return true;
          } catch {
            return false;
          }
        };

        if (cleanPath) {
          // 1. Exact static asset (the built /assets/* bundle, images, favicons…).
          // The prerendered dist HTML loads the BUILT /assets/index-*.js to hydrate.
          // Vite dev has no knowledge of dist/assets/*, so we MUST serve them from
          // dist here — otherwise the bundle 404s and React never hydrates.
          const exact = path.join(distDir, cleanPath);
          if (existsSync(exact) && !cleanPath.includes("..")) {
            const ext = path.extname(cleanPath);
            const types: Record<string, string> = {
              ".js": "text/javascript; charset=utf-8",
              ".css": "text/css; charset=utf-8",
              ".svg": "image/svg+xml",
              ".png": "image/png",
              ".jpg": "image/jpeg",
              ".jpeg": "image/jpeg",
              ".webp": "image/webp",
              ".ico": "image/x-icon",
              ".woff": "font/woff",
              ".woff2": "font/woff2",
              ".json": "application/json; charset=utf-8",
              ".txt": "text/plain; charset=utf-8",
              ".xml": "application/xml; charset=utf-8",
            };
            if (sendFile(exact, types[ext] || "application/octet-stream")) return;
          }

          // 2. Prerendered route as "<path>.html" or "<path>/index.html".
          if (!cleanPath.includes(".")) {
            const asHtml = path.join(distDir, `${cleanPath}.html`);
            if (existsSync(asHtml) && sendFile(asHtml, "text/html; charset=utf-8")) return;
            const asIndex = path.join(distDir, cleanPath, "index.html");
            if (existsSync(asIndex) && sendFile(asIndex, "text/html; charset=utf-8")) return;
          }
        } else {
          // 3. Root "/" → prerendered homepage.
          if (sendFile(indexPath, "text/html; charset=utf-8")) return;
        }

        return next();
      });

      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api")) return next();

        try {
          const request = await toWebRequest(req);
          const app = await loadApp(server);
          const response = await app.fetch(request);

          res.statusCode = response.status;
          response.headers.forEach((value: string, key: string) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (err) {
          server.ssrFixStacktrace(err as Error);
          console.error("[hono-dev]", err);
          res.statusCode = 500;
          res.end("Internal Server Error");
        }
      });
    },
  };
}

async function loadApp(server: ViteDevServer) {
  const mod = await server.ssrLoadModule("/src/api/index.ts");
  return mod.default;
}

function toWebRequest(req: import("http").IncomingMessage): Request {
  const url = new URL(req.url!, `http://${req.headers.host}`);
  const headers = new Headers();
  for (const [key, val] of Object.entries(req.headers)) {
    if (val) headers.set(key, Array.isArray(val) ? val.join(", ") : val);
  }

  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  return new Request(url, {
    method: req.method,
    headers,
    body: hasBody ? (req as unknown as ReadableStream) : undefined,
    // @ts-expect-error duplex needed for streaming request bodies
    duplex: hasBody ? "half" : undefined,
  });
}
