import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, ShieldCheck, Clock, Sparkles, Layers, 
  Home, Building, Cpu, Wrench 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { interiorServices } from '../data/interiorsData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const InteriorDesignPage = () => {
  const { openConsultation } = useApp();

  return (
    <div className="bg-aura-bg-primary pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
          Architectural Interior Design
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aura-walnut mt-2 max-w-4xl mx-auto leading-tight">
          Transforming Spaces into Experiences.
        </h1>
        <p className="text-sm text-aura-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          From full luxury villas to corporate headquarters, we choreograph natural light, seasoned wood, and bespoke furniture into unforgettable spatial narratives.
        </p>
      </div>

      {/* Services Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {interiorServices.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Side */}
            <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative group overflow-hidden rounded-3xl shadow-luxury">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8 text-white">
                  <div>
                    <span className="text-[10px] tracking-widest text-aura-gold-light uppercase font-bold">
                      {service.eyebrow}
                    </span>
                    <h3 className="font-serif text-2xl font-normal mt-1">{service.title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
                  {service.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-aura-walnut mt-1">
                  {service.title}
                </h2>
                <p className="text-sm text-aura-text-secondary mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Subcategories list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.subcategories.map((sub, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-aura-bg-secondary border border-aura-border">
                    <p className="text-xs font-semibold text-aura-text-primary">{sub.name}</p>
                    <p className="text-[11px] text-aura-text-secondary mt-1 leading-snug">{sub.desc}</p>
                  </div>
                ))}
              </div>

              {/* Timeline & Budget badges */}
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-aura-text-primary">
                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-aura-beige/40 border border-aura-border">
                  <Clock className="w-3.5 h-3.5 text-aura-gold" />
                  <span>Timeline: <strong>{service.indicativeTimeline}</strong></span>
                </div>
                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-aura-beige/40 border border-aura-border">
                  <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
                  <span>Budget: <strong>{service.indicativeBudgetRange}</strong></span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => openConsultation({ title: service.title })}
                  className="px-6 py-3 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md flex items-center space-x-2"
                >
                  <span>Book Consultation for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        ))}

        {/* Turnkey Renovation Feature */}
        <section className="bg-aura-bg-secondary rounded-3xl p-8 lg:p-12 border border-aura-border shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-aura-gold font-semibold">
                Kitchen Renovation Feature
              </span>
              <h3 className="font-serif text-3xl text-aura-walnut">
                The Calacatta & Walnut Transformation
              </h3>
              <p className="text-xs text-aura-text-secondary leading-relaxed">
                Notice how we transformed this cramped, dated kitchen into an expansive culinary theatre featuring vertical fluted walnut cabinetry, concealed LED profile tracks, and a dramatic waterfall quartz island.
              </p>
              <button
                onClick={() => openConsultation({ title: "Kitchen Transformation Consultation" })}
                className="mt-2 px-6 py-2.5 rounded-lg bg-aura-walnut text-white text-xs uppercase tracking-wider font-semibold"
              >
                Inquire About Kitchen Design
              </button>
            </div>
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage="/images/projects/before-after-kitchen-before.webp"
                afterImage="/images/projects/modular-kitchen.webp"
                beforeLabel="Original Kitchen"
                afterLabel="AURA Modular Transformation"
                className="h-80 sm:h-96 w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

