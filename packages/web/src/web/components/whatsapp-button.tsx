import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/255655260925?text=Hi%20Hugo%2C%20I%27m%20interested%20in%20planning%20a%20safari%20with%20Jungle%20Thrill%20Africa."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:bg-green-600 transition-colors duration-300">
          <MessageCircle size={24} className="text-white" fill="white" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-surface-light text-cream text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
          Chat with Hugo
        </div>
      </div>
    </a>
  );
}
