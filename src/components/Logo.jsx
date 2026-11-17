import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ light = false, variant = 'horizontal', className = '' }) => {
  const primaryColor = light ? '#FAF7F2' : '#352719';
  const walnutColor = light ? '#E9DFD0' : '#4A3323';
  const goldColor = '#B58A52';
  const subtitleColor = light ? '#D5B98D' : '#77716A';

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        {/* Emblem */}
        <svg
          viewBox="0 0 100 100"
          className="w-14 h-14 transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Architectural Slender Legs */}
          <path d="M 50 14 L 20 86" stroke={walnutColor} strokeWidth="4.2" strokeLinecap="round" />
          <path d="M 50 14 L 80 86" stroke={walnutColor} strokeWidth="4.2" strokeLinecap="round" />
          {/* Apex Accent */}
          <circle cx="50" cy="14" r="3.2" fill={goldColor} />
          {/* Architectural Crossbar */}
          <line x1="33" y1="58" x2="67" y2="58" stroke={goldColor} strokeWidth="3" strokeLinecap="round" />
          {/* Inner Diamond Geometry */}
          <polygon points="50,44 56,53 50,62 44,53" fill={goldColor} />
          {/* Ground Horizon Datum */}
          <line x1="16" y1="88" x2="84" y2="88" stroke={walnutColor} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 3" opacity="0.4" />
        </svg>

        {/* Brand Name */}
        <span
          className="font-serif text-3xl font-semibold tracking-[0.28em] mt-2 leading-none"
          style={{ color: primaryColor }}
        >
          AURA
        </span>

        {/* Tagline */}
        <div className="flex items-center space-x-2 mt-1.5">
          <span className="w-4 h-px" style={{ backgroundColor: goldColor }} />
          <span
            className="text-[9px] font-sans font-medium tracking-[0.34em] uppercase"
            style={{ color: subtitleColor }}
          >
            Interiors & Living
          </span>
          <span className="w-4 h-px" style={{ backgroundColor: goldColor }} />
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar & Header)
  return (
    <div className={`flex items-center space-x-3.5 group select-none ${className}`}>
      {/* Precision Vector Emblem */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 shrink-0 transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Architectural Slender Legs */}
        <path d="M 50 12 L 20 86" stroke={walnutColor} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 50 12 L 80 86" stroke={walnutColor} strokeWidth="4.5" strokeLinecap="round" />
        {/* Apex Gold Pip */}
        <circle cx="50" cy="12" r="3.5" fill={goldColor} />
        {/* Architectural Crossbar */}
        <line x1="32" y1="58" x2="68" y2="58" stroke={goldColor} strokeWidth="3.2" strokeLinecap="round" />
        {/* Floating Diamond Accent */}
        <polygon points="50,42 56,52 50,62 44,52" fill={goldColor} />
        {/* Subtle Base Datum Line */}
        <line x1="14" y1="88" x2="86" y2="88" stroke={walnutColor} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1 3" opacity="0.45" />
      </svg>

      {/* Vertical Subtle Separator Line */}
      <div className="h-8 w-px bg-aura-gold/40" />

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline space-x-1.5">
          <span
            className="font-serif text-2xl sm:text-[26px] font-semibold tracking-[0.24em] leading-none"
            style={{ color: primaryColor }}
          >
            AURA
          </span>
        </div>
        <span
          className="text-[8.5px] font-sans font-semibold tracking-[0.32em] uppercase mt-1 leading-none"
          style={{ color: subtitleColor }}
        >
          Interiors &amp; Living
        </span>
      </div>
    </div>
  );
};
