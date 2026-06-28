import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const travelLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Journeys", href: "/journeys" },
];

const flatLinks = [
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [travelOpen, setTravelOpen] = useState(false);
  const [travelMobileOpen, setTravelMobileOpen] = useState(false);
  const [location] = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setTravelOpen(false);
    setTravelMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTravelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const travelActive = travelLinks.some((l) => location.startsWith(l.href));

  const openTravel = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setTravelOpen(true);
  };
  const closeTravelDelayed = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setTravelOpen(false), 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Jungle Thrill Africa"
              className="h-11 w-auto"
            />
            <span className="hidden sm:block text-cream/60 text-xs tracking-[0.15em] uppercase font-body">
              Jungle Thrill Africa
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* TRAVEL dropdown */}
            <div
              className="relative"
              onMouseEnter={openTravel}
              onMouseLeave={closeTravelDelayed}
            >
              <button
                type="button"
                onClick={() => setTravelOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={travelOpen}
                className={`flex items-center gap-1.5 text-sm tracking-[0.1em] uppercase transition-colors duration-300 ${
                  travelActive || travelOpen
                    ? "text-gold"
                    : "text-cream/70 hover:text-gold"
                }`}
              >
                Travel
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    travelOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {travelOpen && (
                <>
                  {/* hover bridge */}
                  <div className="absolute left-0 top-full h-3 w-48" />
                  <div className="absolute left-0 top-[calc(100%+0.5rem)] w-56 bg-dark/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40 py-2">
                    {travelLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block px-5 py-3 text-sm tracking-[0.1em] uppercase transition-colors duration-200 ${
                          location.startsWith(link.href)
                            ? "text-gold bg-white/[0.03]"
                            : "text-cream/70 hover:text-gold hover:bg-white/[0.03]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {flatLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-[0.1em] uppercase transition-colors duration-300 ${
                  location === link.href
                    ? "text-gold"
                    : "text-cream/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gold text-dark text-sm font-bold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Plan Your Safari
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-8 space-y-5">
            {/* Travel accordion */}
            <div>
              <button
                type="button"
                onClick={() => setTravelMobileOpen((v) => !v)}
                aria-expanded={travelMobileOpen}
                className={`flex items-center justify-between w-full text-lg tracking-[0.1em] uppercase ${
                  travelActive ? "text-gold" : "text-cream/70"
                }`}
              >
                Travel
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    travelMobileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {travelMobileOpen && (
                <div className="mt-4 pl-4 space-y-4 border-l border-white/10">
                  {travelLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block text-base tracking-[0.1em] uppercase ${
                        location.startsWith(link.href)
                          ? "text-gold"
                          : "text-cream/60"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {flatLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block text-lg tracking-[0.1em] uppercase ${
                  location === link.href ? "text-gold" : "text-cream/70"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 bg-gold text-dark font-bold tracking-[0.1em] uppercase text-sm"
            >
              Plan Your Safari
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
