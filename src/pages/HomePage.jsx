import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Sparkles, ChevronRight, CheckCircle2, 
  Layers, Compass, Award, ArrowUpRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { brandData } from '../data/brandData';
import { furnitureProducts } from '../data/furnitureData';
import { interiorServices } from '../data/interiorsData';
import { collectionsData } from '../data/collectionsData';
import { manufacturingProcess } from '../data/manufacturingProcessData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const HomePage = () => {
  const { openConsultation, setQuickViewProduct, addToQuoteCart } = useApp();
  const [activeCollectionTab, setActiveCollectionTab] = useState('signature');

  const selectedCollection = collectionsData.find((c) => c.id === activeCollectionTab) || collectionsData[1];

  return (
    <div className="relative overflow-x-hidden bg-aura-bg-primary">
      {/* 1. CINEMATIC HERO VIEWPORT */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Hero with subtle Ken Burns zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero/hero-living-room.webp"
            alt="AURA Luxury Living Room"
            className="w-full h-full object-cover object-center animate-ken-burns filter brightness-95"
          />
          {/* Subtle architectural cinematic vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 text-center lg:text-left flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-aura-gold-light text-xs font-semibold tracking-[0.24em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
              <span>{brandData.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight">
              Furniture Crafted to Last.<br />
              <span className="italic font-light text-aura-gold-light">Spaces Designed to Inspire.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl font-sans">
              From custom solid wood furniture manufacturing to complete turnkey interior transformations, we bring artisanal craftsmanship, functional ergonomics, and timeless architectural design together.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/furniture"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-luxury hover:shadow-gold-glow flex items-center justify-center space-x-2"
              >
                <span>Explore Our Furniture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/interior-design"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center justify-center space-x-2"
              >
                <span>Discover Interior Design</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Feature Panel at bottom of viewport */}
        <div className="absolute bottom-4 left-4 right-4 z-20 max-w-7xl mx-auto hidden lg:block">
          <div className="glass-panel-dark text-white rounded-2xl p-4 shadow-luxury border border-white/15 grid grid-cols-5 divide-x divide-white/10 text-center">
            <Link to="/furniture?category=custom" className="px-4 py-2 hover:text-aura-gold-light transition-colors group">
              <p className="text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1">
                <span>Custom Furniture</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </p>
              <p className="text-[11px] text-neutral-300 font-light mt-0.5">Kiln-Dried Hardwoods</p>
            </Link>
            <Link to="/interior-design#residential-interiors" className="px-4 py-2 hover:text-aura-gold-light transition-colors group">
              <p className="text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1">
                <span>Residential Interiors</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
              <p className="text-[11px] text-neutral-300 font-light mt-0.5">Apartments & Villas</p>
            </Link>
            <Link to="/interior-design#commercial-interiors" className="px-4 py-2 hover:text-aura-gold-light transition-colors group">
              <p className="text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1">
                <span>Commercial Interiors</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
              <p className="text-[11px] text-neutral-300 font-light mt-0.5">Corporate & Retail</p>
            </Link>
            <Link to="/interior-design#modular-solutions" className="px-4 py-2 hover:text-aura-gold-light transition-colors group">
              <p className="text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1">
                <span>Modular Kitchens</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
              <p className="text-[11px] text-neutral-300 font-light mt-0.5">German Blum Systems</p>
            </Link>
            <Link to="/interior-design#turnkey-projects" className="px-4 py-2 hover:text-aura-gold-light transition-colors group">
              <p className="text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1">
                <span>Turnkey Projects</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </p>
              <p className="text-[11px] text-neutral-300 font-light mt-0.5">End-to-End Handover</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL BRAND INTRODUCTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
              The AURA Synthesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-aura-walnut leading-[1.15]">
              Where Craftsmanship Meets Contemporary Living.
            </h2>
            <p className="text-sm text-aura-text-secondary leading-relaxed font-sans">
              Most furniture retailers source from third-party manufacturers, while most interior decorators outsource carpentry to disparate local contractors.
            </p>
            <p className="text-sm text-aura-text-secondary leading-relaxed font-sans">
              <strong>AURA INTERIORS & LIVING unites both realms under one roof.</strong> Our high-precision woodworking facility and architectural design studio collaborate seamlessly—ensuring that every sofa dimension, custom wardrobe alcove, and dining slab is millimeter-calibrated for your specific floor plan.
            </p>
            
            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-aura-border pt-6">
              <div>
                <span className="font-serif text-3xl font-bold text-aura-walnut">100%</span>
                <p className="text-xs uppercase tracking-wider text-aura-text-secondary mt-1">In-House Manufacturing</p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-aura-gold">10-Yr</span>
                <p className="text-xs uppercase tracking-wider text-aura-text-secondary mt-1">Solid Frame Warranty</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-aura-walnut hover:text-aura-gold transition-colors"
              >
                <span>Read Our Design & Craft Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <img
                src="/images/manufacturing/workshop-craftsman.webp"
                alt="Woodworking craftsman hand-planing walnut"
                className="w-full h-72 object-cover rounded-2xl shadow-luxury"
              />
              <img
                src="/images/manufacturing/joinery-detail.webp"
                alt="Interlocking solid wood mortise and tenon joinery"
                className="w-full h-56 object-cover rounded-2xl shadow-luxury"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/projects/modular-kitchen.webp"
                alt="AURA Luxury Fluted Modular Kitchen"
                className="w-full h-56 object-cover rounded-2xl shadow-luxury"
              />
              <img
                src="/images/furniture/sectional-sofa.webp"
                alt="Elysian Sectional Sofa in Oatmeal Linen"
                className="w-full h-72 object-cover rounded-2xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE FURNITURE HIGHLIGHTS */}
      <section className="py-20 bg-aura-bg-secondary border-y border-aura-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
                Factory To Living Space
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut mt-1">
                Made with Precision. Designed for Life.
              </h2>
            </div>
            <Link
              to="/furniture"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-widest text-aura-gold hover:text-aura-gold-dark flex items-center space-x-1"
            >
              <span>Explore All 10 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureProducts.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="group bg-aura-bg-primary rounded-2xl border border-aura-border overflow-hidden shadow-subtle hover:shadow-card-hover transition-all duration-400 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-aura-walnut/90 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase font-semibold">
                    {product.collection}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-aura-gold font-semibold block">
                      {product.tag}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-aura-text-primary mt-1 group-hover:text-aura-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-aura-text-secondary line-clamp-2 mt-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-aura-border/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-neutral-400 block font-medium">Starting From</span>
                      <span className="font-serif text-lg font-bold text-aura-walnut">{product.priceFormatted}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="px-3 py-2 rounded-lg border border-aura-border hover:bg-aura-beige/40 text-[11px] font-semibold uppercase tracking-wider text-aura-text-primary transition-colors"
                      >
                        Quick View
                      </button>
                      <button
                        onClick={() => addToQuoteCart(product)}
                        className="px-3.5 py-2 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURATED COLLECTIONS SWITCHER */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
            Curated For Every Ambition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut mt-1">
            Three Tiers of Uncompromising Quality
          </h2>
          <p className="text-xs text-aura-text-secondary mt-3">
            From essential urban furnishings to one-of-a-kind architectural estates.
          </p>

          {/* Collection Tab Selector */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-aura-beige/40 border border-aura-border">
            {collectionsData.map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveCollectionTab(col.id)}
                className={`px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all ${
                  activeCollectionTab === col.id
                    ? 'bg-aura-walnut text-white shadow-md'
                    : 'text-aura-text-secondary hover:text-aura-text-primary'
                }`}
              >
                {col.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Collection Showcase */}
        <div className="bg-aura-bg-secondary rounded-3xl p-8 lg:p-12 border border-aura-border shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="px-3 py-1 rounded-full bg-aura-gold-soft text-aura-gold text-[10px] tracking-widest uppercase font-bold border border-aura-gold/30">
              {selectedCollection.highlightBadge}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-aura-walnut">
              {selectedCollection.name}
            </h3>
            <p className="font-serif text-2xl font-bold text-aura-gold">
              Indicative: {selectedCollection.budgetRange}
            </p>
            <p className="text-xs text-aura-text-secondary leading-relaxed">
              {selectedCollection.description}
            </p>

            <div className="space-y-2 border-t border-aura-border/60 pt-4 text-xs text-aura-text-primary">
              <p><strong>Materials:</strong> {selectedCollection.materialsSummary}</p>
              <p><strong>Lead Time:</strong> {selectedCollection.leadTime}</p>
              <p><strong>Warranty:</strong> {selectedCollection.warranty}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openConsultation({ title: selectedCollection.name })}
                className="px-6 py-3 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
              >
                Inquire for {selectedCollection.name}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {selectedCollection.featuredProducts.map((fp, i) => (
              <div key={i} className="bg-aura-bg-primary rounded-xl border border-aura-border overflow-hidden p-3 space-y-2">
                <img src={fp.image} alt={fp.name} className="w-full h-36 object-cover rounded-lg" />
                <p className="text-xs font-semibold text-aura-text-primary line-clamp-1">{fp.name}</p>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-aura-text-secondary">{fp.category}</span>
                  <span className="font-semibold text-aura-walnut">{fp.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="py-20 bg-aura-walnut text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-aura-gold-light font-semibold">
                Turnkey Metamorphosis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                From Outdated Space to Architectural Masterpiece.
              </h2>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Witness our complete living room transformation in Whitefield, Bengaluru. We stripped away fragmented partition walls and outdated fixtures, replacing them with custom fluted walnut millwork, indirect 2700K perimeter coves, and bespoke conversational furniture.
              </p>
              <div className="pt-2 space-y-3 text-xs text-neutral-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-aura-gold" />
                  <span>Interactive slider: Drag horizontally to compare Before & After</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-aura-gold" />
                  <span>100% in-house fabricated furniture and wall cladding</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  <span>View Full Architectural Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage="/images/projects/before-after-living-before.webp"
                afterImage="/images/projects/before-after-living-after.webp"
                className="h-[380px] sm:h-[460px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING PROCESS TIMELINE TEASER */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
            Honest Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut mt-1">
            From Raw Material to Refined Craftsmanship
          </h2>
          <p className="text-xs text-aura-text-secondary mt-2">
            Every step governed by generational timber wisdom and Italian precision machining.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {manufacturingProcess.map((step) => (
            <div
              key={step.step}
              className="bg-aura-bg-secondary p-5 rounded-2xl border border-aura-border shadow-subtle flex flex-col justify-between space-y-4 hover:border-aura-gold transition-colors"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-aura-gold/50">{step.step}</span>
                <h4 className="font-serif text-lg font-semibold text-aura-walnut mt-1 leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] text-aura-text-secondary mt-2 line-clamp-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-24 object-cover rounded-lg border border-aura-border/60"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/manufacturing"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-aura-walnut hover:text-aura-gold transition-colors"
          >
            <span>Explore Factory Machinery & Timber Species Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. INTERACTIVE ESTIMATOR CALLOUT */}
      <section className="py-20 bg-aura-beige/40 border-t border-aura-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-aura-walnut text-white rounded-3xl p-8 sm:p-14 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-aura-gold-light font-semibold">
              Instant Budget Planning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              Calculate Your Space & Budget in 60 Seconds.
            </h2>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Select your property type (1BHK, 2BHK, 3BHK, Villa), area in square feet, and preferred collection tier to receive an itemized cost estimate and downloadable project summary.
            </p>
          </div>

          <Link
            to="/estimator"
            className="shrink-0 px-8 py-4 rounded-xl bg-aura-gold hover:bg-aura-gold-dark text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Interactive Estimator</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

