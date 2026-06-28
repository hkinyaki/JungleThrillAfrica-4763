import type { Plugin } from "vite";
import { execSync } from "node:child_process";
import path from "node:path";

/**
 * Runs the SEO pipeline (sitemap generation + Chrome prerender) automatically
 * at the END of a production `vite build`.
 *
 * WHY: the managed platform builds with `bunx vite build` only — it does NOT run
 * the package.json `build` script (which chains `&& bun run sitemap && bun run
 * prerender`). Without this hook, dist/*.html ship as the empty SPA shell and
 * crawlers get no content. Hooking into `closeBundle` makes `vite build` alone
 * produce fully prerendered, content-rich HTML for every route.
 *
 * SAFETY: only runs for real builds (apply: "build"), and NEVER throws — if
 * Chrome/Playwright is unavailable or prerender fails, the build still succeeds
 * with the SPA shell (status quo), so we can never break the platform's build.
 */
export default function prerenderBuildPlugin(): Plugin {
  const webDir = path.resolve(__dirname, "../..");
  return {
    name: "prerender-build",
    apply: "build",
    closeBundle() {
      // Skip if explicitly disabled (e.g. the package.json `build` script already
      // runs sitemap+prerender itself; avoid doing it twice).
      if (process.env.SKIP_BUILD_PRERENDER === "1") {
        console.log("[prerender-build] skipped (SKIP_BUILD_PRERENDER=1)");
        return;
      }
      try {
        console.log("[prerender-build] generating sitemap…");
        execSync("bun scripts/generate-sitemap.ts", {
          cwd: webDir,
          stdio: "inherit",
        });
        console.log("[prerender-build] prerendering routes with headless Chrome…");
        execSync("python3 scripts/prerender.py", {
          cwd: webDir,
          stdio: "inherit",
        });
        console.log("[prerender-build] done — dist/*.html now content-rich.");
      } catch (err) {
        // Never fail the build. Worst case = SPA shell (previous behavior).
        console.warn(
          "[prerender-build] prerender step failed; shipping SPA shell instead. " +
            "SEO will be degraded until prerender runs. Error:",
          (err as Error).message,
        );
      }
    },
  };
}
