import React, { useState } from 'react';
import { 
  X, Sparkles, MapPin, DollarSign, Layers, Palette, Eye, ArrowRight, Info 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { projectCategories, portfolioProjects } from '../data/projectsData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const { openConsultation } = useApp();

  const filteredProjects = portfolioProjects.filter((p) => {
    return selectedCategory === 'all' || p.category === selectedCategory;
  });

  return (
    <div className="bg-aura-bg-primary pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
          Architectural Portfolio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aura-walnut mt-2">
          Spaces Designed to Inspire.
        </h1>
        <p className="text-sm text-aura-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          A curated exhibition of our residential penthouses, luxury villas, executive corporate environments, and bespoke furniture integrations.
        </p>

        {/* Concept Disclaimer Alert */}
        <div className="mt-6 max-w-2xl mx-auto p-3 rounded-xl bg-aura-gold-soft/80 border border-aura-gold/30 flex items-center justify-center space-x-2 text-xs text-aura-walnut">
          <Info className="w-4 h-4 text-aura-gold shrink-0" />
          <span>Note: Displayed portfolio renderings include illustrative design concepts alongside executed projects.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all uppercase tracking-wider ${
                selectedCategory === cat.id
                  ? 'bg-aura-walnut text-white shadow-md'
                  : 'bg-aura-bg-secondary text-aura-text-secondary hover:text-aura-text-primary border border-aura-border'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry-Style Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="group cursor-pointer bg-aura-bg-secondary rounded-2xl border border-aura-border overflow-hidden shadow-subtle hover:shadow-card-hover transition-all duration-400 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-3 py-1 rounded-full bg-aura-walnut/90 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase font-semibold">
                    {project.roomType}
                  </span>
                </div>
                {project.hasBeforeAfter && (
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-aura-gold text-white text-[9px] font-bold uppercase tracking-wider">
                    Before & After Available
                  </span>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-aura-walnut text-xs font-semibold uppercase tracking-wider flex items-center space-x-1 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Case</span>
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-aura-gold font-semibold">
                  {project.location}
                </span>
                <h3 className="font-serif text-xl font-semibold text-aura-text-primary group-hover:text-aura-gold transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-aura-text-secondary line-clamp-2 leading-relaxed">
                  {project.designConcept}
                </p>

                <div className="pt-3 border-t border-aura-border/60 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Budget Scope</span>
                  <span className="font-semibold text-aura-walnut">{project.approxBudget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-aura-bg-secondary rounded-2xl shadow-luxury border border-aura-border overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="p-6 bg-aura-walnut text-white flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-widest text-aura-gold-light uppercase font-bold">
                  {activeProjectModal.location} • {activeProjectModal.roomType}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-normal mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-6">
              {/* Image or Before/After slider */}
              {activeProjectModal.hasBeforeAfter ? (
                <div>
                  <p className="text-xs font-semibold text-aura-gold uppercase tracking-wider mb-2">
                    Interactive Comparison (Drag divider)
                  </p>
                  <BeforeAfterSlider
                    beforeImage={activeProjectModal.beforeImage}
                    afterImage={activeProjectModal.afterImage}
                    className="h-80 sm:h-96 w-full"
                  />
                </div>
              ) : (
                <img
                  src={activeProjectModal.coverImage}
                  alt={activeProjectModal.title}
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-md"
                />
              )}

              {/* Concept & Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="font-serif text-2xl text-aura-walnut">Design Concept</h4>
                  <p className="text-xs text-aura-text-secondary leading-relaxed">
                    {activeProjectModal.designConcept}
                  </p>

                  <h5 className="font-serif text-lg text-aura-walnut pt-2">Furniture & Millwork Breakdown</h5>
                  <ul className="space-y-1.5 text-xs text-aura-text-primary">
                    {activeProjectModal.furnitureBreakdown.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-aura-gold font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Box */}
                <div className="bg-aura-bg-primary p-5 rounded-xl border border-aura-border space-y-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-aura-text-secondary block">Area Footprint</span>
                    <strong className="text-aura-text-primary text-sm">{activeProjectModal.area}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-aura-text-secondary block">Investment Scope</span>
                    <strong className="text-aura-walnut text-sm font-serif">{activeProjectModal.approxBudget}</strong>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-aura-text-secondary block mb-1">Color Palette</span>
                    <div className="flex space-x-2">
                      {activeProjectModal.palette.map((p, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border border-neutral-300"
                          style={{ backgroundColor: p.hex }}
                          title={p.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const proj = activeProjectModal;
                        setActiveProjectModal(null);
                        openConsultation({ title: `Inquiry for ${proj.title}` });
                      }}
                      className="w-full py-2.5 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-xs uppercase tracking-wider font-semibold"
                    >
                      Inquire Similar Space
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

