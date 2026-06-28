import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Resets scroll to the top of the page on every route change.
 * Mounted once globally in app.tsx.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return null;
}
