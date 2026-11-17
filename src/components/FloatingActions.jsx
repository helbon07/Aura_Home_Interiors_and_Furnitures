import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { brandData } from '../data/brandData';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-aura-bg-secondary text-aura-walnut shadow-luxury border border-aura-border flex items-center justify-center hover:bg-aura-gold hover:text-white transition-all transform hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Concierge */}
      <a
        href={`https://wa.me/${brandData.contact.whatsappNumber}?text=Hello%20AURA%20Interiors,%20I%20would%20like%20to%20discuss%20a%20furniture%20manufacturing%20or%20interior%20design%20project.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center space-x-2 transition-all transform hover:scale-105"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase font-sans">
          WhatsApp Concierge
        </span>
      </a>
    </div>
  );
};

