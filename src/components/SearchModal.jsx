import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { furnitureProducts } from '../data/furnitureData';
import { interiorServices } from '../data/interiorsData';
import { portfolioProjects } from '../data/projectsData';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isSearchOpen) return null;

  const filteredFurniture = query.trim()
    ? furnitureProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.materials.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredInteriors = query.trim()
    ? interiorServices.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredProjects = query.trim()
    ? portfolioProjects.filter(
        (proj) =>
          proj.title.toLowerCase().includes(query.toLowerCase()) ||
          proj.designConcept.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="relative w-full max-w-2xl bg-aura-bg-secondary rounded-2xl shadow-luxury border border-aura-border overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input */}
        <div className="p-4 border-b border-aura-border flex items-center space-x-3 bg-white">
          <Search className="w-5 h-5 text-aura-gold" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search custom furniture, walnut dining, modular kitchens, villas..."
            className="flex-1 bg-transparent text-sm focus:outline-none text-aura-text-primary placeholder:text-neutral-400"
          />
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setQuery('');
            }}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-aura-text-secondary">
              <p className="font-serif text-lg text-aura-walnut mb-1">Search the AURA Collection</p>
              <p>Try searching "Sectional Sofa", "Dining Table", "Modular Kitchen", or "American Walnut".</p>
            </div>
          ) : filteredFurniture.length === 0 && filteredInteriors.length === 0 && filteredProjects.length === 0 ? (
            <div className="py-8 text-center text-xs text-aura-text-secondary">
              <p>No results found for "{query}". You can request a bespoke commission for any custom design.</p>
            </div>
          ) : (
            <>
              {filteredFurniture.length > 0 && (
                <div>
                  <p className="text-[10px] tracking-widest text-aura-gold uppercase font-semibold mb-2">
                    Furniture Catalogue ({filteredFurniture.length})
                  </p>
                  <div className="space-y-2">
                    {filteredFurniture.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setQuickViewProduct(item);
                        }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-aura-gold-soft cursor-pointer transition-colors"
                      >
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-aura-text-primary">{item.name}</p>
                          <p className="text-[11px] text-aura-gold font-medium">{item.priceFormatted}</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredInteriors.length > 0 && (
                <div className="pt-2 border-t border-aura-border/60">
                  <p className="text-[10px] tracking-widest text-aura-gold uppercase font-semibold mb-2">
                    Interior Design Services ({filteredInteriors.length})
                  </p>
                  <div className="space-y-2">
                    {filteredInteriors.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigate(`/interior-design#${srv.id}`);
                        }}
                        className="p-2 rounded-lg hover:bg-aura-gold-soft cursor-pointer transition-colors"
                      >
                        <p className="text-xs font-semibold text-aura-text-primary">{srv.title}</p>
                        <p className="text-[11px] text-aura-text-secondary line-clamp-1">{srv.tagline}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredProjects.length > 0 && (
                <div className="pt-2 border-t border-aura-border/60">
                  <p className="text-[10px] tracking-widest text-aura-gold uppercase font-semibold mb-2">
                    Architectural Projects ({filteredProjects.length})
                  </p>
                  <div className="space-y-2">
                    {filteredProjects.map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigate('/projects');
                        }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-aura-gold-soft cursor-pointer transition-colors"
                      >
                        <img src={proj.coverImage} alt={proj.title} className="w-12 h-12 object-cover rounded-md" />
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-aura-text-primary">{proj.title}</p>
                          <p className="text-[11px] text-neutral-500">{proj.location} • {proj.approxBudget}</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

