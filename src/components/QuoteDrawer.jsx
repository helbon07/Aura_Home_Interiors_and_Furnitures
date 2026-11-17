import React, { useState } from 'react';
import { 
  X, Trash2, ArrowRight, Phone, MessageSquare, Download, Check, Plus, Minus
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { brandData } from '../data/brandData';

export const QuoteDrawer = () => {
  const { 
    isQuoteDrawerOpen, setIsQuoteDrawerOpen, 
    quoteItems, removeFromQuoteCart, updateQuoteQuantity, 
    clearQuoteCart, openConsultation 
  } = useApp();

  const [submitted, setSubmitted] = useState(false);

  if (!isQuoteDrawerOpen) return null;

  const totalEstimate = quoteItems.reduce((acc, item) => {
    return acc + (item.indicativePrice || 0) * (item.quantity || 1);
  }, 0);

  const formattedTotal = '₹' + totalEstimate.toLocaleString('en-IN');

  const handleWhatsAppQuote = () => {
    const itemsList = quoteItems.map(
      (item) => `• ${item.name} (${item.quantity}x) - ${item.priceFormatted}`
    ).join('%0A');
    const msg = `Hello AURA Interiors,%0A%0AI would like to request an official quotation for the following items:%0A${itemsList}%0A%0AEstimated Total: ${formattedTotal}%0APlease share delivery lead time and finish options.`;
    window.open(`https://wa.me/${brandData.contact.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-aura-bg-secondary text-aura-text-primary shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-aura-walnut text-white flex items-center justify-between">
            <div>
              <span className="text-[10px] tracking-widest text-aura-gold-light uppercase font-semibold">
                Quotation Registry
              </span>
              <h3 className="font-serif text-2xl font-normal">Your Selected Pieces</h3>
            </div>
            <button
              onClick={() => setIsQuoteDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {quoteItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <p className="font-serif text-xl text-aura-text-secondary">Your quotation list is empty</p>
                <p className="text-xs text-aura-text-secondary">
                  Browse our furniture manufacturing catalogue and click "Request a Quote" on pieces that speak to you.
                </p>
              </div>
            ) : (
              quoteItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex space-x-4 p-3 rounded-xl border border-aura-border bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shrink-0 border border-aura-border/60"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-semibold text-aura-text-primary leading-tight">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromQuoteCart(item.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors ml-2"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-aura-gold font-medium uppercase tracking-wider block mt-1">
                        {item.collection}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-aura-border/40">
                      <div className="flex items-center space-x-2 border border-aura-border rounded-md px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuoteQuantity(item.id, -1)}
                          className="text-neutral-500 hover:text-aura-text-primary"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuoteQuantity(item.id, 1)}
                          className="text-neutral-500 hover:text-aura-text-primary"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs font-semibold text-aura-walnut">
                        {item.priceFormatted}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {quoteItems.length > 0 && (
            <div className="p-6 bg-aura-bg-primary border-t border-aura-border space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-aura-text-secondary uppercase tracking-wider">
                    Indicative Subtotal
                  </span>
                  <p className="text-[10px] text-neutral-500">Excludes taxes, custom dimensions & freight</p>
                </div>
                <span className="font-serif text-2xl font-bold text-aura-walnut">
                  {formattedTotal}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send List via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setIsQuoteDrawerOpen(false);
                    openConsultation({
                      title: `Quotation for ${quoteItems.length} Furniture Commissions`,
                      priceFormatted: formattedTotal
                    });
                  }}
                  className="w-full py-3 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <span>Request In-Home Measurement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={clearQuoteCart}
                className="w-full text-center text-[11px] text-neutral-400 hover:text-red-500 transition-colors"
              >
                Clear Entire List
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

