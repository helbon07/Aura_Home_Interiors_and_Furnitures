import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, Check, AlertCircle, Factory 
} from 'lucide-react';
import { brandData } from '../data/brandData';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Consultation Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const inquiries = JSON.parse(localStorage.getItem('aura_general_inquiries') || '[]');
      localStorage.setItem('aura_general_inquiries', JSON.stringify([formData, ...inquiries]));
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-aura-bg-primary pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-aura-gold font-semibold">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aura-walnut mt-2">
          Connect with AURA Concierge
        </h1>
        <p className="text-sm text-aura-text-secondary max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          Whether planning an architectural residential redesign, requesting a custom furniture commission, or scheduling a visit to our factory works, our design directors are at your service.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-aura-bg-secondary p-8 rounded-3xl border border-aura-border shadow-subtle space-y-6">
            <h3 className="font-serif text-2xl text-aura-walnut">Experience Center & Design Pavilion</h3>
            
            <div className="space-y-4 text-xs text-aura-text-secondary">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-aura-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-aura-text-primary block text-sm font-sans">{brandData.contact.address.line1}</strong>
                  <span>{brandData.contact.address.line2}, {brandData.contact.address.city}, {brandData.contact.address.state} – {brandData.contact.address.pincode}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Factory className="w-5 h-5 text-aura-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-aura-text-primary block text-sm font-sans">{brandData.contact.manufacturingUnit.line1}</strong>
                  <span>{brandData.contact.manufacturingUnit.line2}, {brandData.contact.manufacturingUnit.city} – {brandData.contact.manufacturingUnit.pincode}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-aura-gold shrink-0" />
                <div>
                  <span className="text-aura-text-primary font-semibold">{brandData.contact.phone}</span>
                  <span className="text-neutral-400 block">{brandData.contact.secondaryPhone}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-aura-gold shrink-0" />
                <div>
                  <span className="text-aura-text-primary font-semibold">{brandData.contact.email}</span>
                  <span className="text-neutral-400 block">{brandData.contact.salesEmail}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-aura-gold shrink-0 mt-0.5" />
                <span>{brandData.contact.hours}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-aura-border">
              <a
                href={`https://wa.me/${brandData.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly with Design Architect</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-aura-bg-secondary p-8 sm:p-10 rounded-3xl border border-aura-border shadow-luxury">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-aura-gold/20 text-aura-gold flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-aura-walnut">Message Dispatched</h3>
              <p className="text-xs text-aura-text-secondary max-w-md mx-auto">
                Thank you for contacting AURA. A senior design advisor will review your notes and reach out within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h3 className="font-serif text-2xl text-aura-walnut mb-4">Direct Concierge Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Menon"
                    className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">Contact Phone *</label>
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

              <div>
                <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. radhika@example.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">Inquiry Purpose</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                >
                  <option value="Consultation Inquiry">Book Interior Design Consultation</option>
                  <option value="Custom Furniture Commission">Custom Furniture Manufacturing Commission</option>
                  <option value="Turnkey Architectural Project">Turnkey Architectural Villa / Apartment Project</option>
                  <option value="Commercial & Office Project">Commercial, Office or Retail Space</option>
                  <option value="Factory Visit">Request Factory & Workshop Tour</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-aura-text-secondary mb-1">Project Details & Vision</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your property location, rooms requiring design or furniture, preferred timbers, or intended move-in timeline..."
                  className="w-full px-3 py-2.5 rounded-lg border border-aura-border bg-white text-aura-text-primary focus:outline-none focus:border-aura-gold"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-aura-gold hover:bg-aura-gold-dark text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                {loading ? <span>Dispatching...</span> : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Design Concierge</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

