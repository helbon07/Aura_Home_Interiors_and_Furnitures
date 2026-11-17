import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { brandData } from '../data/brandData';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-aura-walnut text-[#F7F3EB] pt-20 pb-12 border-t border-aura-walnut-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <Logo light={true} />
            </div>
            <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
              Furniture manufacturing and architectural interior design united under one roof. Handcrafted solid hardwoods, engineered modular precision, and holistic spatial transformations.
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-aura-gold-light font-semibold mb-3">
                Experience Centers
              </p>
              <div className="space-y-2 text-xs text-neutral-300">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-aura-gold shrink-0 mt-0.5" />
                  <span>{brandData.contact.address.line1}, {brandData.contact.address.line2}, {brandData.contact.address.city} – {brandData.contact.address.pincode}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-aura-gold shrink-0" />
                  <span>{brandData.contact.phone}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-aura-gold shrink-0" />
                  <span>{brandData.contact.email}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg tracking-wider text-white mb-6 border-b border-aura-gold/40 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-neutral-300">
              <li><Link to="/" className="hover:text-aura-gold-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-aura-gold-light transition-colors">About AURA</Link></li>
              <li><Link to="/furniture" className="hover:text-aura-gold-light transition-colors">Furniture Catalogue</Link></li>
              <li><Link to="/interior-design" className="hover:text-aura-gold-light transition-colors">Interior Design</Link></li>
              <li><Link to="/projects" className="hover:text-aura-gold-light transition-colors">Our Projects</Link></li>
              <li><Link to="/manufacturing" className="hover:text-aura-gold-light transition-colors">Manufacturing Works</Link></li>
              <li><Link to="/estimator" className="text-aura-gold-light font-semibold hover:underline">Space Estimator</Link></li>
              <li><Link to="/contact" className="hover:text-aura-gold-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg tracking-wider text-white mb-6 border-b border-aura-gold/40 pb-2">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-neutral-300">
              <li><Link to="/furniture?category=custom" className="hover:text-aura-gold-light transition-colors">Custom Furniture</Link></li>
              <li><Link to="/interior-design#residential-interiors" className="hover:text-aura-gold-light transition-colors">Residential Interiors</Link></li>
              <li><Link to="/interior-design#commercial-interiors" className="hover:text-aura-gold-light transition-colors">Commercial & Offices</Link></li>
              <li><Link to="/interior-design#modular-solutions" className="hover:text-aura-gold-light transition-colors">Modular Kitchens</Link></li>
              <li><Link to="/interior-design#turnkey-projects" className="hover:text-aura-gold-light transition-colors">Turnkey Architecture</Link></li>
              <li><Link to="/manufacturing" className="hover:text-aura-gold-light transition-colors">Kiln Drying & Joinery</Link></li>
            </ul>
          </div>

          {/* Collections & Newsletter */}
          <div>
            <h4 className="font-serif text-lg tracking-wider text-white mb-6 border-b border-aura-gold/40 pb-2">
              Collections
            </h4>
            <div className="space-y-3 text-xs text-neutral-300 mb-6">
              <p><strong className="text-aura-gold-light">AURA Essentials:</strong> ₹15k – ₹75k</p>
              <p><strong className="text-aura-gold-light">AURA Signature:</strong> ₹1L – ₹5L</p>
              <p><strong className="text-aura-gold-light">AURA Bespoke:</strong> ₹6L Onwards</p>
            </div>

            <div className="pt-2">
              <p className="text-[11px] tracking-widest uppercase text-aura-gold-light mb-2">Connect</p>
              <div className="flex space-x-3 text-white">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-aura-gold transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-aura-gold transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} AURA INTERIORS & LIVING. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-[11px]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Craftsmanship</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">10-Year Warranty Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

