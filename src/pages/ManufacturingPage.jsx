import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Hammer, Cog, CheckCircle2, ShieldCheck, Ruler, Sparkles, 
  ArrowRight, TreeDeciduous, Factory, Wrench 
} from 'lucide-react';
import { manufacturingProcess, woodSpeciesGuide } from '../data/manufacturingProcessData';
import { useApp } from '../context/AppContext';

export const ManufacturingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { openConsultation } = useApp();

  return (
    <div className="bg-aura-bg-primary pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
          In-House Furniture Works
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aura-walnut mt-2 max-w-4xl mx-auto leading-tight">
          From Raw Material to Refined Craftsmanship.
        </h1>
        <p className="text-sm text-aura-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          Take a deep look behind the scenes of our precision woodworking facility, where traditional mortise-and-tenon joinery operates alongside computerized 5-axis German CNC technology.
        </p>
      </div>

      {/* Workshop Visual Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-aura-gold font-semibold">
              The Woodworking Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut leading-snug">
              Master Carpentry Empowered by Modern Digital Accuracy
            </h2>
            <p className="text-sm text-aura-text-secondary leading-relaxed">
              At AURA, there is no assembly line rushing. Seasoned solid timbers undergo natural acclimatization in our kiln chambers before our senior carpenters cut, plane, and hand-assemble every joint.
            </p>
            <p className="text-sm text-aura-text-secondary leading-relaxed">
              Every curve on our lounge chairs and dining slabs is checked with high-precision digital calipers, followed by successive hand-rubbed coats of natural organic oils that allow the wood pores to breathe.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-aura-border pt-4 text-xs">
              <div className="p-3 rounded-xl bg-aura-bg-secondary border border-aura-border">
                <strong className="text-aura-walnut block text-sm font-serif">Kiln-Dried 8-10%</strong>
                <span className="text-aura-text-secondary">Optimal moisture prevents warping or seasonal cracking.</span>
              </div>
              <div className="p-3 rounded-xl bg-aura-bg-secondary border border-aura-border">
                <strong className="text-aura-walnut block text-sm font-serif">&lt; 0.2mm Tolerance</strong>
                <span className="text-aura-text-secondary">Precision CNC joinery ensures rock-solid durability.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/manufacturing/workshop-craftsman.webp"
              alt="Artisan craftsman in workshop"
              className="w-full h-80 object-cover rounded-2xl shadow-luxury"
            />
            <img
              src="/images/manufacturing/modern-machinery.webp"
              alt="CNC Machinery in furniture factory"
              className="w-full h-80 object-cover rounded-2xl shadow-luxury mt-8"
            />
          </div>
        </div>
      </section>

      {/* 6-Stage Process Interactive Timeline */}
      <section className="bg-aura-bg-secondary py-20 border-y border-aura-border mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-aura-gold font-semibold">
              The 6 Production Stages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut mt-1">
              Step-by-Step Manufacturing Journey
            </h2>
          </div>

          {/* Step Selector Tabs (Desktop Horizontal / Mobile Scrollable) */}
          <div className="flex items-center justify-between overflow-x-auto pb-4 border-b border-aura-border mb-12 scrollbar-none gap-2">
            {manufacturingProcess.map((item, idx) => (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 min-w-[140px] text-left p-4 rounded-xl transition-all ${
                  activeStep === idx
                    ? 'bg-aura-walnut text-white shadow-md'
                    : 'bg-aura-bg-primary text-aura-text-secondary hover:text-aura-text-primary'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  activeStep === idx ? 'text-aura-gold-light' : 'text-aura-gold'
                }`}>
                  Stage {item.step}
                </span>
                <p className="font-serif text-base font-semibold mt-0.5 leading-snug">
                  {item.title}
                </p>
              </button>
            ))}
          </div>

          {/* Active Step Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-aura-bg-primary p-8 sm:p-12 rounded-3xl border border-aura-border shadow-luxury">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-aura-gold">
                {manufacturingProcess[activeStep].eyebrow}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-aura-walnut">
                {manufacturingProcess[activeStep].step} – {manufacturingProcess[activeStep].title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-aura-text-secondary font-medium">
                {manufacturingProcess[activeStep].subtitle}
              </p>
              <p className="text-sm text-aura-text-secondary leading-relaxed pt-2">
                {manufacturingProcess[activeStep].description}
              </p>

              <div className="space-y-2 pt-4 border-t border-aura-border/60">
                {manufacturingProcess[activeStep].details.map((d, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-aura-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-aura-gold shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src={manufacturingProcess[activeStep].image}
                alt={manufacturingProcess[activeStep].title}
                className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-lg border border-aura-border/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hardwood Species Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-aura-gold font-semibold">
            Material Authenticity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut mt-1">
            Solid Hardwood Species Guide
          </h2>
          <p className="text-xs text-aura-text-secondary mt-2">
            We only work with solid certified timbers seasoned to withstand ambient humidity fluctuations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {woodSpeciesGuide.map((wood, idx) => (
            <div key={idx} className="bg-aura-bg-secondary p-6 rounded-2xl border border-aura-border shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-full bg-aura-gold-soft text-aura-gold flex items-center justify-center">
                <TreeDeciduous className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-aura-walnut">{wood.name}</h3>
              <p className="text-xs text-aura-text-secondary"><strong>Origin:</strong> {wood.origin}</p>
              <p className="text-xs text-aura-text-secondary leading-relaxed">{wood.grain}</p>
              <div className="pt-2 border-t border-aura-border/60 text-xs">
                <p><strong>Hardness:</strong> {wood.hardness}</p>
                <p className="mt-1"><strong>Best For:</strong> {wood.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => openConsultation({ title: "Custom Timber & Manufacturing Consultation" })}
            className="px-8 py-3.5 rounded-xl bg-aura-gold hover:bg-aura-gold-dark text-white text-xs uppercase tracking-widest font-semibold shadow-md"
          >
            Request Factory Tour or Material Samples
          </button>
        </div>
      </section>
    </div>
  );
};

