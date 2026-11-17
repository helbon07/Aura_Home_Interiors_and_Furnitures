import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, Award, Hammer, Sparkles, Check, ArrowRight } from 'lucide-react';
import { brandData } from '../data/brandData';

export const AboutPage = () => {
  return (
    <div className="bg-aura-bg-primary pt-28 pb-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
          About AURA Interiors & Living
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aura-walnut mt-2 max-w-4xl mx-auto leading-tight">
          Where Craftsmanship Meets Contemporary Living.
        </h1>
        <p className="text-sm text-aura-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          AURA was born to bridge the rare divide between industrial manufacturing dexterity and bespoke architectural interior design.
        </p>
      </div>

      {/* Main Narrative Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/manufacturing/workshop-craftsman.webp"
              alt="Master craftsman in AURA workshop"
              className="w-full h-[460px] object-cover rounded-3xl shadow-luxury"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 rounded-2xl bg-aura-walnut text-white shadow-xl max-w-xs border border-white/10">
              <p className="font-serif text-2xl text-aura-gold-light">Generational Woodcraft</p>
              <p className="text-[11px] text-neutral-300 mt-1">Master woodwrights shaping kiln-dried hardwoods with hand-planes and traditional joinery.</p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-aura-gold font-semibold">
              Our Design Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut leading-snug">
              Authentic Materials. Uncompromising Proportions.
            </h2>
            <p className="text-sm text-aura-text-secondary leading-relaxed">
              We reject flat-pack disposability and generic catalog templates. Every project begins with honest raw materials: ethically harvested American Walnut, golden Burma Teak, natural Travertine, and textured Belgian linens.
            </p>
            <p className="text-sm text-aura-text-secondary leading-relaxed">
              Because we own our manufacturing facility, our interior architects design without standard modular constraints. If your dining room demands a 14-foot live-edge slab with brass key inlays, or your master dressing room requires millimeter-exact smoked glass wardrobes, we craft it directly.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-aura-gold shrink-0 mt-0.5" />
                <span><strong>No Middlemen:</strong> Direct from our precision workshops to your residence.</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-aura-gold shrink-0 mt-0.5" />
                <span><strong>Holistic Integration:</strong> Furniture, lighting, and civil interiors designed in total aesthetic harmony.</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-aura-gold shrink-0 mt-0.5" />
                <span><strong>10-Year Framework Warranty:</strong> Solid seasoned frames built for generations.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="bg-aura-bg-secondary py-20 border-y border-aura-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-aura-gold font-semibold">
              The Four Cornerstones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut mt-1">
              The AURA Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandData.pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-aura-bg-primary p-6 rounded-2xl border border-aura-border shadow-subtle flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-aura-gold-soft text-aura-gold text-[10px] uppercase font-bold tracking-wider">
                    {pillar.badge}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-aura-walnut mt-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-aura-text-secondary mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

