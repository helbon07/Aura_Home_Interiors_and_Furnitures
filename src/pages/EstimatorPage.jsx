import React, { useState } from 'react';
import { 
  Building, Check, Sparkles, Download, ArrowRight, 
  HelpCircle, Home, Layers, DollarSign, Printer 
} from 'lucide-react';
import { 
  estimatorPropertyTypes, estimatorScopes, 
  estimatorCollections, estimatorAddons 
} from '../data/estimatorData';
import { useApp } from '../context/AppContext';

export const EstimatorPage = () => {
  const [propertyType, setPropertyType] = useState('2bhk');
  const [sqft, setSqft] = useState(1100);
  const [scope, setScope] = useState('turnkey-solution');
  const [collection, setCollection] = useState('signature');
  const [selectedAddons, setSelectedAddons] = useState(['modular-kitchen', 'wardrobes']);
  
  const { openConsultation } = useApp();

  const handlePropertyChange = (propId) => {
    setPropertyType(propId);
    const found = estimatorPropertyTypes.find((p) => p.id === propId);
    if (found) setSqft(found.avgSqft);
  };

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Calculation Logic
  const selectedScopeObj = estimatorScopes.find((s) => s.id === scope) || estimatorScopes[2];
  const selectedCollectionObj = estimatorCollections.find((c) => c.id === collection) || estimatorCollections[1];

  const baseRate = selectedCollectionObj.baseRatePerSqft * selectedScopeObj.rateMultiplier;
  const baseCost = sqft * baseRate;

  const addonsCost = selectedAddons.reduce((sum, id) => {
    const addon = estimatorAddons.find((a) => a.id === id);
    return sum + (addon ? addon.baseCost : 0);
  }, 0);

  const minTotal = Math.round((baseCost + addonsCost) * 0.92);
  const maxTotal = Math.round((baseCost + addonsCost) * 1.08);

  const formatPrice = (val) => '₹' + val.toLocaleString('en-IN');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-aura-bg-primary pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
          Interactive Planning Tool
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aura-walnut mt-2">
          Space & Budget Estimator
        </h1>
        <p className="text-sm text-aura-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          Configure your floor plan dimensions and material preferences to view an indicative budget estimation and itemized scope breakdown.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Estimator Configuration Steps (Left Column) */}
        <div className="lg:col-span-7 space-y-10 bg-aura-bg-secondary p-6 sm:p-8 rounded-3xl border border-aura-border shadow-luxury">
          {/* Step 1: Property Type */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-aura-walnut text-white text-xs font-bold flex items-center justify-center">1</span>
              <h3 className="font-serif text-xl font-semibold text-aura-walnut">Select Property Type</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {estimatorPropertyTypes.map((pt) => (
                <button
                  key={pt.id}
                  onClick={() => handlePropertyChange(pt.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    propertyType === pt.id
                      ? 'border-aura-gold bg-aura-gold-soft text-aura-walnut shadow-sm font-semibold'
                      : 'border-aura-border bg-white text-aura-text-secondary hover:border-neutral-300'
                  }`}
                >
                  <p className="text-xs font-semibold">{pt.name}</p>
                  <p className="text-[10px] text-neutral-400 mt-1">~{pt.avgSqft} sq.ft avg</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Approximate Area Slider / Input */}
          <div className="border-t border-aura-border/60 pt-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-aura-walnut text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-serif text-xl font-semibold text-aura-walnut">Approximate Floor Area (Sq.Ft)</h3>
              </div>
              <span className="font-serif text-2xl font-bold text-aura-gold">{sqft} sq.ft</span>
            </div>

            <input
              type="range"
              min="250"
              max="6000"
              step="50"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-aura-gold h-2 bg-aura-beige rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
              <span>250 sq.ft (Studio)</span>
              <span>2,000 sq.ft</span>
              <span>6,000+ sq.ft (Villa)</span>
            </div>
          </div>

          {/* Step 3: Scope of Engagement */}
          <div className="border-t border-aura-border/60 pt-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-aura-walnut text-white text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="font-serif text-xl font-semibold text-aura-walnut">Scope of Requirements</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {estimatorScopes.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setScope(sc.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    scope === sc.id
                      ? 'border-aura-gold bg-aura-gold-soft text-aura-walnut shadow-sm'
                      : 'border-aura-border bg-white text-aura-text-secondary hover:border-neutral-300'
                  }`}
                >
                  <p className="text-xs font-semibold text-aura-text-primary">{sc.name}</p>
                  <p className="text-[11px] text-aura-text-secondary mt-1 leading-snug">{sc.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Collection Tier */}
          <div className="border-t border-aura-border/60 pt-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-aura-walnut text-white text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="font-serif text-xl font-semibold text-aura-walnut">Preferred Finish Tier</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {estimatorCollections.map((col) => (
                <button
                  key={col.id}
                  onClick={() => setCollection(col.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    collection === col.id
                      ? 'border-aura-gold bg-aura-gold-soft text-aura-walnut shadow-sm font-semibold'
                      : 'border-aura-border bg-white text-aura-text-secondary hover:border-neutral-300'
                  }`}
                >
                  <p className="text-xs font-semibold">{col.name}</p>
                  <p className="text-[10px] text-aura-gold font-bold mt-0.5">{col.tier}</p>
                  <p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">{col.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Modular & Specialty Addons */}
          <div className="border-t border-aura-border/60 pt-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-aura-walnut text-white text-xs font-bold flex items-center justify-center">5</span>
              <h3 className="font-serif text-xl font-semibold text-aura-walnut">Specialty Modules & Addons</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {estimatorAddons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border text-left flex items-start space-x-3 transition-all ${
                      isSelected
                        ? 'border-aura-gold bg-aura-gold-soft text-aura-walnut'
                        : 'border-aura-border bg-white text-aura-text-secondary hover:border-neutral-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                      isSelected ? 'bg-aura-gold border-aura-gold text-white' : 'border-neutral-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-aura-text-primary">{addon.name}</p>
                      <p className="text-[10px] text-neutral-500 mt-0.5">{addon.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Estimation Summary Card (Right Column) */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="bg-aura-walnut text-white rounded-3xl p-8 shadow-luxury border border-white/10 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-aura-gold-light font-bold">
                Indicative Estimate Range
              </span>
              <div className="mt-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {formatPrice(minTotal)} – {formatPrice(maxTotal)}
                </span>
                <p className="text-[11px] text-neutral-300 mt-1">
                  Based on {sqft} sq.ft in {selectedCollectionObj.name}
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="border-t border-white/15 pt-4 space-y-3 text-xs">
              <div className="flex justify-between text-neutral-200">
                <span>Base Spatial Scope ({sqft} sq.ft):</span>
                <span className="font-semibold text-white">{formatPrice(baseCost)}</span>
              </div>
              <div className="flex justify-between text-neutral-200">
                <span>Selected Addons ({selectedAddons.length}):</span>
                <span className="font-semibold text-white">{formatPrice(addonsCost)}</span>
              </div>
              <div className="flex justify-between text-neutral-200">
                <span>Scope Tier:</span>
                <span className="text-aura-gold-light font-medium">{selectedScopeObj.name}</span>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() =>
                  openConsultation({
                    title: `Estimated Project: ${sqft} sq.ft (${selectedCollectionObj.name})`,
                    priceFormatted: `${formatPrice(minTotal)} – ${formatPrice(maxTotal)}`
                  })
                }
                className="w-full py-4 rounded-xl bg-aura-gold hover:bg-aura-gold-dark text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Request Site Measurement & Lock Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handlePrint}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center space-x-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Estimate Summary</span>
              </button>
            </div>

            <div className="text-[10px] text-neutral-400 text-center leading-relaxed border-t border-white/10 pt-4">
              * Note: The calculated figures are indicative estimates based on typical space footprints. Final binding estimates require site laser measurement and physical material selection.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

