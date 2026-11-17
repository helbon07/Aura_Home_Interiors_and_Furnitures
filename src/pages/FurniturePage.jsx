import React, { useState, useMemo } from 'react';
import { 
  Filter, Search, Heart, Sparkles, Check, ArrowRight, 
  Ruler, Eye, SlidersHorizontal, X 
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  furnitureCategories, furnitureProducts, 
  materialFilters, styleFilters, collectionFilters 
} from '../data/furnitureData';

export const FurniturePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState('All Materials');
  const [selectedStyle, setSelectedStyle] = useState('All Styles');
  const [selectedCollection, setSelectedCollection] = useState('All Collections');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-low' | 'price-high'

  const { addToQuoteCart, toggleWishlist, isInWishlist, setQuickViewProduct, openConsultation } = useApp();

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setSearchParams(catId === 'all' ? {} : { category: catId });
  };

  const filteredProducts = useMemo(() => {
    return furnitureProducts
      .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesMaterial = selectedMaterial === 'All Materials' || p.materials.toLowerCase().includes(selectedMaterial.toLowerCase());
        const matchesStyle = selectedStyle === 'All Styles' || p.style === selectedStyle;
        const matchesCollection = selectedCollection === 'All Collections' || p.collection === selectedCollection;
        const matchesSearch = !searchQuery.trim() || 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.materials.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesMaterial && matchesStyle && matchesCollection && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.indicativePrice - b.indicativePrice;
        if (sortBy === 'price-high') return b.indicativePrice - a.indicativePrice;
        return 0;
      });
  }, [selectedCategory, selectedMaterial, selectedStyle, selectedCollection, searchQuery, sortBy]);

  return (
    <div className="bg-aura-bg-primary pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
          Artisanal Manufacturing
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aura-walnut mt-2">
          Made with Precision. Designed for Life.
        </h1>
        <p className="text-sm text-aura-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          Explore our complete collection of handcrafted solid wood furniture, ergonomic modular systems, and bespoke architectural commissions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Horizontal Filter Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-aura-border">
          {furnitureCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
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

        {/* Filter & Search Bar */}
        <div className="bg-aura-bg-secondary rounded-2xl p-4 border border-aura-border shadow-subtle mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search wood, style, name..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-aura-border bg-white focus:outline-none focus:border-aura-gold text-aura-text-primary"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Style Filter */}
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="px-3 py-2 rounded-lg border border-aura-border bg-white text-xs text-aura-text-primary focus:outline-none focus:border-aura-gold"
            >
              {styleFilters.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>

            {/* Collection Filter */}
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="px-3 py-2 rounded-lg border border-aura-border bg-white text-xs text-aura-text-primary focus:outline-none focus:border-aura-gold"
            >
              {collectionFilters.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg border border-aura-border bg-white text-xs text-aura-text-primary focus:outline-none focus:border-aura-gold"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {(selectedCategory !== 'all' || selectedStyle !== 'All Styles' || selectedCollection !== 'All Collections' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedStyle('All Styles');
                  setSelectedCollection('All Collections');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="p-2 text-neutral-400 hover:text-red-500 text-xs flex items-center space-x-1"
                title="Reset Filters"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <p className="font-serif text-2xl text-aura-walnut">No pieces match your exact filter selection</p>
            <p className="text-xs text-aura-text-secondary max-w-md mx-auto">
              We specialize in custom furniture manufacturing. If you have a specific design in mind, our artisans can craft it to your exact specifications.
            </p>
            <button
              onClick={() => openConsultation({ title: "Custom Furniture Commission" })}
              className="px-6 py-3 rounded-lg bg-aura-gold text-white text-xs uppercase tracking-widest font-semibold"
            >
              Request Custom Piece
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-aura-bg-secondary rounded-2xl border border-aura-border overflow-hidden shadow-subtle hover:shadow-card-hover transition-all duration-400 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-3 py-1 rounded-full bg-aura-walnut/90 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase font-semibold">
                      {product.collection}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-aura-walnut hover:bg-white transition-colors shadow-sm"
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-aura-gold text-aura-gold' : ''}`} />
                  </button>
                </div>

                {/* Info */}
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

                    <div className="mt-3 flex items-center space-x-2 text-[11px] text-neutral-500">
                      <Ruler className="w-3.5 h-3.5 text-aura-gold shrink-0" />
                      <span className="truncate">{product.dimensions}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-aura-border/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-neutral-400 block font-medium">Starting At</span>
                      <span className="font-serif text-lg font-bold text-aura-walnut">{product.priceFormatted}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="p-2 sm:px-3 sm:py-2 rounded-lg border border-aura-border hover:bg-aura-beige/40 text-[11px] font-semibold uppercase tracking-wider text-aura-text-primary transition-colors flex items-center space-x-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Quick View</span>
                      </button>
                      <button
                        onClick={() => addToQuoteCart(product)}
                        className="px-3.5 py-2 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Furniture Commission Banner */}
        <div className="mt-20 bg-aura-walnut text-white rounded-3xl p-8 sm:p-12 shadow-luxury flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-aura-gold-light font-semibold">
              Have a Specific Vision?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              Request a Custom Bespoke Furniture Commission
            </h3>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Provide your desired dimensions, preferred hardwood species (American Walnut, Burma Teak, White Oak), fabric swatches, or architectural sketches. Our woodwrights will construct it with millimetric precision.
            </p>
          </div>
          <button
            onClick={() => openConsultation({ title: "Bespoke Custom Furniture Request" })}
            className="shrink-0 px-8 py-4 rounded-xl bg-aura-gold hover:bg-aura-gold-dark text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-md"
          >
            Start Custom Commission
          </button>
        </div>
      </div>
    </div>
  );
};

