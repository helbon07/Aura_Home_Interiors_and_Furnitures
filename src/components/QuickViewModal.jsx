import React, { useState } from 'react';
import { 
  X, Heart, Share2, Ruler, Shield, Sparkles, Check, ArrowRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToQuoteCart, isInWishlist, toggleWishlist, openConsultation } = useApp();
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedWood, setSelectedWood] = useState(0);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-aura-bg-secondary rounded-2xl shadow-luxury border border-aura-border overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-in fade-in zoom-in-95 duration-300">
        {/* Left: Product Image */}
        <div className="relative bg-[#FAF7F2] p-8 flex items-center justify-center">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="w-full h-auto max-h-[380px] object-contain rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-aura-walnut text-white text-[10px] tracking-widest font-semibold uppercase">
            {quickViewProduct.collection}
          </span>
        </div>

        {/* Right: Details & Options */}
        <div className="p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-widest text-aura-gold uppercase font-semibold">
                  {quickViewProduct.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-aura-walnut mt-1">
                  {quickViewProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setQuickViewProduct(null)}
                className="p-1.5 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            <p className="font-serif text-2xl font-bold text-aura-text-primary mt-3">
              {quickViewProduct.priceFormatted}
              <span className="text-xs font-sans font-normal text-aura-text-secondary ml-2">
                (Indicative Starting Price)
              </span>
            </p>

            <p className="text-xs text-aura-text-secondary mt-3 leading-relaxed">
              {quickViewProduct.fullDescription || quickViewProduct.shortDescription}
            </p>

            {/* Finishes */}
            {quickViewProduct.finishes && (
              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-widest text-aura-text-secondary font-semibold mb-2">
                  Finish / Upholstery Tone: <span className="text-aura-text-primary font-bold">{quickViewProduct.finishes[selectedFinish]?.name}</span>
                </p>
                <div className="flex items-center space-x-2">
                  {quickViewProduct.finishes.map((f, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFinish(idx)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        selectedFinish === idx ? 'border-aura-gold scale-110 shadow-sm' : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: f.hex }}
                      title={f.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions & Materials */}
            <div className="mt-5 space-y-2 border-t border-aura-border/60 pt-4 text-xs">
              <div className="flex items-start space-x-2">
                <Ruler className="w-4 h-4 text-aura-gold shrink-0 mt-0.5" />
                <span className="text-aura-text-secondary"><strong>Dimensions:</strong> {quickViewProduct.dimensions}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-aura-gold shrink-0 mt-0.5" />
                <span className="text-aura-text-secondary"><strong>Materials:</strong> {quickViewProduct.materials}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Shield className="w-4 h-4 text-aura-gold shrink-0 mt-0.5" />
                <span className="text-aura-text-secondary"><strong>Warranty:</strong> {quickViewProduct.warranty}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-aura-border space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  addToQuoteCart(quickViewProduct, {
                    finish: quickViewProduct.finishes?.[selectedFinish]?.name,
                    wood: quickViewProduct.woodOptions?.[selectedWood]
                  });
                  setQuickViewProduct(null);
                }}
                className="py-3 rounded-lg bg-aura-walnut hover:bg-aura-walnut-dark text-white text-xs tracking-wider uppercase font-semibold transition-all shadow-md"
              >
                Add to Quotation
              </button>

              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  openConsultation(quickViewProduct);
                }}
                className="py-3 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-xs tracking-wider uppercase font-semibold transition-all shadow-md"
              >
                Custom Dimensions
              </button>
            </div>

            <button
              onClick={() => toggleWishlist(quickViewProduct)}
              className="w-full py-2.5 rounded-lg border border-aura-border hover:bg-aura-beige/30 text-xs tracking-wider uppercase font-medium flex items-center justify-center space-x-2 text-aura-text-primary"
            >
              <Heart className={`w-4 h-4 ${isInWishlist(quickViewProduct.id) ? 'fill-aura-gold text-aura-gold' : ''}`} />
              <span>{isInWishlist(quickViewProduct.id) ? 'Saved in Wishlist' : 'Save to Wishlist'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

