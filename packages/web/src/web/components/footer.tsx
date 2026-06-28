import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gold mb-4">
              Jungle Thrill Africa
            </h3>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              Personal safari planning by Hugo. Based in Tanzania, designing
              unforgettable wilderness experiences since 2014.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream/40 text-xs tracking-[0.2em] uppercase mb-6">
              Navigate
            </h4>
            <div className="space-y-3">
              <Link to="/" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Home
              </Link>
              <Link to="/destinations" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Destinations
              </Link>
              <Link to="/journeys" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Journeys
              </Link>
              <Link to="/guides" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Safari Guides
              </Link>
              <Link to="/about" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                About Hugo
              </Link>
              <Link to="/contact" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Plan Your Safari
              </Link>
              <Link to="/partners" className="block text-cream/40 hover:text-gold transition-colors text-sm pt-1">
                For Travel Agents
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream/40 text-xs tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+255655260925"
                className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} className="text-gold" />
                +255 655 260 925
              </a>
              <a
                href="mailto:enquiries@junglethrill.africa"
                className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} className="text-gold" />
                enquiries@junglethrill.africa
              </a>
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <MapPin size={16} className="text-gold" />
                Based in Tanzania
              </div>
            </div>
            <p className="mt-6 text-gold/70 text-xs italic">
              I personally reply to every message — usually within a few hours.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} Jungle Thrill Africa. All rights
            reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Hugo | Where the Wild Meets the Soul
          </p>
        </div>
      </div>
    </footer>
  );
}
