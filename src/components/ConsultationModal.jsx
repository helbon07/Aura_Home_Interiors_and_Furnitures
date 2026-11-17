import React, { useState } from 'react';
import { 
  X, Check, Send, Phone, Calendar, Upload, MapPin, 
  Home, Ruler, DollarSign, Sparkles, AlertCircle 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ConsultationModal = () => {
  const { isConsultationModalOpen, setIsConsultationModalOpen, consultationPreFill } = useApp();
  
  const [formType, setFormType] = useState('design'); // 'design' | 'custom-furniture' | 'turnkey'
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Bengaluru',
    propertyType: '3BHK',
    serviceRequired: 'Interior Design & Furniture',
    budget: '₹15L – ₹30L',
    notes: '',
    date: '',
    dimensions: '',
    materialPreference: 'American Walnut',
  });

  if (!isConsultationModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg('Please complete your name, phone number, and email.');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    // Save lead persistently to localStorage
    setTimeout(() => {
      try {
        const existingLeads = JSON.parse(localStorage.getItem('aura_inquiries') || '[]');
        const newLead = {
          id: 'lead_' + Date.now(),
          type: formType,
          ...formData,
          prefill: consultationPreFill,
          createdAt: new Date().toISOString()
        };
        localStorage.setItem('aura_inquiries', JSON.stringify([newLead, ...existingLeads]));
        setLoading(false);
        setSubmitted(true);
      } catch (err) {
        setLoading(false);
        setErrorMsg('Could not record submission locally. Please try again or reach out on WhatsApp.');
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-aura-bg-secondary rounded-2xl shadow-luxury border border-aura-border overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-aura-walnut text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-widest text-aura-gold-light uppercase font-semibold">
              Bespoke Inquiries & Concierge
            </span>
            <h3 className="font-serif text-2xl font-normal mt-0.5">
              Connect with AURA Architects
            </h3>
          </div>
          <button
            onClick={() => {
              setIsConsultationModalOpen(false);
              setSubmitted(false);
            }}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-aura-gold/20 text-aura-gold flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-3xl text-aura-walnut">Consultation Request Recorded</h4>
            <p className="text-sm text-aura-text-secondary max-w-md mx-auto">
              Thank you, <strong className="text-aura-text-primary">{formData.name}</strong>. A Senior Design Architect has received your inquiry. We will contact you at <strong className="text-aura-text-primary">{formData.phone}</strong> within 4 business hours to discuss floor plans and material options.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsConsultationModalOpen(false);
                  setSubmitted(false);
                }}
                className="px-6 py-2.5 rounded-lg bg-aura-gold text-white text-xs uppercase tracking-widest font-semibold hover:bg-aura-gold-dark"
              >
                Return to Exploration
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
            {/* Form Type Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-6 border-b border-aura-border pb-4">
              <button
                type="button"
                onClick={() => setFormType('design')}
                className={`py-2 px-3 text-xs uppercase tracking-wider rounded-lg font-medium transition-all ${
                  formType === 'design'
                    ? 'bg-aura-gold text-white shadow-sm font-semibold'
                    : 'bg-aura-beige/40 text-aura-text-secondary hover:text-aura-text-primary'
                }`}
              >
                Interior Consultation
              </button>
              <button
                type="button"
                onClick={() => setFormType('custom-furniture')}
                className={`py-2 px-3 text-xs uppercase tracking-wider rounded-lg font-medium transition-all ${
                  formType === 'custom-furniture'
                    ? 'bg-aura-gold text-white shadow-sm font-semibold'
                    : 'bg-aura-beige/40 text-aura-text-secondary hover:text-aura-text-primary'
                }`}
              >
                Custom Furniture
              </button>
              <button
                type="button"
                onClick={() => setFormType('turnkey')}
                className={`py-2 px-3 text-xs uppercase tracking-wider rounded-lg font-medium transition-all ${
                  formType === 'turnkey'
                    ? 'bg-aura-gold text-white shadow-sm font-semibold'
                    : 'bg-aura-beige/40 text-aura-text-secondary hover:text-aura-text-primary'
                }`}
              >
                Turnkey Project
              </button>
            </div>

            {consultationPreFill && (
              <div className="mb-4 p-3 rounded-lg bg-aura-gold-soft border border-aura-gold/30 text-xs text-aura-walnut flex items-center justify-between">
                <span>Inquiring about: <strong>{consultationPreFill.name || consultationPreFill.title}</strong></span>
                <span className="text-aura-gold font-bold">{consultationPreFill.priceFormatted || ''}</span>
              </div>
            )}

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Sharma"
                    className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. vikram@example.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Indiranagar, Bengaluru"
                    className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">
                    Property / Project Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                  >
                    <option value="2BHK">2 BHK Apartment</option>
                    <option value="3BHK">3 BHK Apartment</option>
                    <option value="4BHK+">4 BHK+ / Penthouse</option>
                    <option value="Villa">Luxury Villa / Duplex</option>
                    <option value="Commercial">Corporate Office / Retail</option>
                    <option value="Single Room">Single Room / Studio</option>
                  </select>
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                  >
                    <option value="₹1 Lakh – ₹5 Lakh">₹1 Lakh – ₹5 Lakh (Furniture / Accent)</option>
                    <option value="₹5 Lakh – ₹15 Lakh">₹5 Lakh – ₹15 Lakh (Modular Solutions)</option>
                    <option value="₹15 Lakh – ₹30 Lakh">₹15 Lakh – ₹30 Lakh (Complete Interiors)</option>
                    <option value="₹30 Lakh – ₹60 Lakh">₹30 Lakh – ₹60 Lakh (Luxury Turnkey)</option>
                    <option value="₹60 Lakh+">₹60 Lakh+ (Bespoke Villa / Estate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">
                  Specific Requirements & Dimensions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe your vision: preferred wood types (Walnut/Teak), upholstery preferences, room dimensions, or timeline expectations..."
                  className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-aura-gold hover:bg-aura-gold-dark text-white font-sans text-xs tracking-widest font-semibold uppercase transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit In-Depth Consultation Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

