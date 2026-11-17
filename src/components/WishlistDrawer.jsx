import React from 'react';
import { X, Heart, ArrowRight, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WishlistDrawer = () => {
  const { isWishlistDrawerOpen, setIsWishlistDrawerOpen, wishlist, toggleWishlist, addToQuoteCart } = useApp();

  if (!isWishlistDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-aura-bg-secondary text-aura-text-primary shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-aura-bg-primary border-b border-aura-border flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-aura-gold fill-aura-gold" />
              <h3 className="font-serif text-2xl text-aura-walnut">Saved Wishlist ({wishlist.length})</h3>
            </div>
            <button
              onClick={() => setIsWishlistDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <Heart className="w-12 h-12 text-neutral-300 mx-auto" />
                <p className="font-serif text-xl text-aura-text-secondary">Your wishlist is empty</p>
                <p className="text-xs text-aura-text-secondary">
                  Tap the heart icon on any design piece or portfolio image to collect your inspirations.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div key={item.id} className="flex space-x-4 p-3 rounded-xl border border-aura-border bg-white">
                  <img
                    src={item.image || item.coverImage}
                    alt={item.name || item.title}
                    className="w-20 h-20 object-cover rounded-lg shrink-0 border border-aura-border/60"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-semibold text-aura-text-primary line-clamp-1">
                          {item.name || item.title}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(item)}
                          className="text-neutral-400 hover:text-red-500 transition-colors ml-2"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-aura-gold font-medium uppercase tracking-wider block mt-0.5">
                        {item.priceFormatted || item.approxBudget || 'Custom Commission'}
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          addToQuoteCart(item);
                          setIsWishlistDrawerOpen(false);
                        }}
                        className="w-full py-1.5 rounded-md bg-aura-walnut hover:bg-aura-walnut-dark text-white text-[11px] font-medium tracking-wider uppercase"
                      >
                        Add to Quotation
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

