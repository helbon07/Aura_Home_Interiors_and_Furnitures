import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, Heart, FileText, Phone, Menu, X, ChevronDown, 
  ArrowRight, ShieldCheck, Sparkles, Layers, Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { brandData } from '../data/brandData';
import { furnitureCategories } from '../data/furnitureData';
import { interiorServices } from '../data/interiorsData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [furnitureDropdown, setFurnitureDropdown] = useState(false);
  const [interiorsDropdown, setInteriorsDropdown] = useState(false);
  const location = useLocation();
  const { wishlist, quoteItems, setIsSearchOpen, setIsWishlistDrawerOpen, setIsQuoteDrawerOpen, openConsultation } = useApp();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setFurnitureDropdown(false);
    setInteriorsDropdown(false);
  }, [location.pathname]);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled || !isHome
      ? 'bg-[#FFFEFC]/95 backdrop-blur-md shadow-sm border-b border-aura-border/60 py-3.5 text-aura-text-primary'
      : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white'
  }`;

  return (
    <>
      <header className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo/aura-symbol.svg" 
                alt="AURA Symbol" 
                className={`h-9 w-auto transition-transform duration-500 group-hover:scale-105 ${
                  !isScrolled && isHome ? 'filter brightness-200' : ''
                }`}
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.26em] font-semibold leading-none">
                  AURA
                </span>
                <span className={`text-[8px] tracking-[0.32em] uppercase font-sans mt-1 font-medium ${
                  isScrolled || !isHome ? 'text-aura-text-secondary' : 'text-neutral-300'
                }`}>
                  Interiors & Living
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium tracking-[0.14em] uppercase">
              <Link 
                to="/" 
                className={`transition-colors hover:text-aura-gold ${
                  location.pathname === '/' ? 'text-aura-gold font-semibold' : ''
                }`}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className={`transition-colors hover:text-aura-gold ${
                  location.pathname === '/about' ? 'text-aura-gold font-semibold' : ''
                }`}
              >
                About Us
              </Link>

              {/* Furniture Mega Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setFurnitureDropdown(true)}
                onMouseLeave={() => setFurnitureDropdown(false)}
              >
                <Link 
                  to="/furniture" 
                  className={`flex items-center space-x-1 transition-colors hover:text-aura-gold ${
                    location.pathname.startsWith('/furniture') ? 'text-aura-gold font-semibold' : ''
                  }`}
                >
                  <span>Furniture</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${furnitureDropdown ? 'rotate-180' : ''}`} />
                </Link>

                {furnitureDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-aura-bg-secondary text-aura-text-primary rounded-xl shadow-luxury border border-aura-border p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-2">
                      <p className="text-[10px] tracking-widest text-aura-gold font-semibold uppercase border-b border-aura-border/60 pb-1">
                        Solid Wood & Seating
                      </p>
                      {furnitureCategories.slice(1, 6).map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/furniture?category=${cat.id}`}
                          className="block text-xs font-normal tracking-normal text-aura-text-primary/90 hover:text-aura-gold hover:translate-x-1 transition-all py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] tracking-widest text-aura-gold font-semibold uppercase border-b border-aura-border/60 pb-1">
                        Bespoke & Commercial
                      </p>
                      {furnitureCategories.slice(6, 11).map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/furniture?category=${cat.id}`}
                          className="block text-xs font-normal tracking-normal text-aura-text-primary/90 hover:text-aura-gold hover:translate-x-1 transition-all py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                      <div className="pt-2">
                        <Link
                          to="/furniture"
                          className="text-[11px] font-medium text-aura-gold flex items-center space-x-1 hover:underline"
                        >
                          <span>Explore Full Catalogue</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Interior Design Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setInteriorsDropdown(true)}
                onMouseLeave={() => setInteriorsDropdown(false)}
              >
                <Link 
                  to="/interior-design" 
                  className={`flex items-center space-x-1 transition-colors hover:text-aura-gold ${
                    location.pathname === '/interior-design' ? 'text-aura-gold font-semibold' : ''
                  }`}
                >
                  <span>Interior Design</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${interiorsDropdown ? 'rotate-180' : ''}`} />
                </Link>

                {interiorsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[460px] bg-aura-bg-secondary text-aura-text-primary rounded-xl shadow-luxury border border-aura-border p-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    {interiorServices.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/interior-design#${srv.id}`}
                        className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-aura-gold-soft transition-colors"
                      >
                        <div className="mt-0.5 p-1.5 rounded-md bg-aura-beige/40 text-aura-gold group-hover:bg-aura-gold group-hover:text-white transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold normal-case tracking-normal text-aura-text-primary">
                            {srv.title}
                          </p>
                          <p className="text-[11px] text-aura-text-secondary font-normal tracking-normal line-clamp-1">
                            {srv.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/projects" 
                className={`transition-colors hover:text-aura-gold ${
                  location.pathname === '/projects' ? 'text-aura-gold font-semibold' : ''
                }`}
              >
                Our Projects
              </Link>

              <Link 
                to="/manufacturing" 
                className={`transition-colors hover:text-aura-gold ${
                  location.pathname === '/manufacturing' ? 'text-aura-gold font-semibold' : ''
                }`}
              >
                Manufacturing
              </Link>

              <Link 
                to="/estimator" 
                className={`flex items-center space-x-1 transition-colors hover:text-aura-gold ${
                  location.pathname === '/estimator' ? 'text-aura-gold font-semibold' : ''
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-aura-gold" />
                <span>Estimator</span>
              </Link>

              <Link 
                to="/contact" 
                className={`transition-colors hover:text-aura-gold ${
                  location.pathname === '/contact' ? 'text-aura-gold font-semibold' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search website"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled || !isHome
                    ? 'text-aura-text-primary hover:bg-aura-beige/40'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlistDrawerOpen(true)}
                aria-label="View Wishlist"
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled || !isHome
                    ? 'text-aura-text-primary hover:bg-aura-beige/40'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-aura-gold text-white text-[9px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Quote Cart */}
              <button
                onClick={() => setIsQuoteDrawerOpen(true)}
                aria-label="Quotation List"
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled || !isHome
                    ? 'text-aura-text-primary hover:bg-aura-beige/40'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <FileText className="w-4 h-4" />
                {quoteItems.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-aura-walnut text-white text-[9px] font-bold flex items-center justify-center">
                    {quoteItems.length}
                  </span>
                )}
              </button>

              {/* Book Consultation Button (Desktop) */}
              <button
                onClick={() => openConsultation()}
                className="hidden md:inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-aura-gold hover:bg-aura-gold-dark text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow-md"
              >
                <span>Book Consultation</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
                className={`lg:hidden p-2 rounded-md ${
                  isScrolled || !isHome ? 'text-aura-text-primary' : 'text-white'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-aura-bg-primary text-aura-text-primary pt-24 px-6 pb-12 overflow-y-auto lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-5 text-base font-serif tracking-widest uppercase">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border">
              Home
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border">
              About AURA
            </Link>
            <Link to="/furniture" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border flex items-center justify-between">
              <span>Furniture Catalogue</span>
              <span className="text-xs font-sans text-aura-gold">10 Categories</span>
            </Link>
            <Link to="/interior-design" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border flex items-center justify-between">
              <span>Interior Design</span>
              <span className="text-xs font-sans text-aura-gold">Residential & Commercial</span>
            </Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border">
              Our Projects & Portfolio
            </Link>
            <Link to="/manufacturing" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border">
              Manufacturing Process
            </Link>
            <Link to="/estimator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border text-aura-gold font-bold">
              ✨ Space & Budget Estimator
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-aura-border">
              Contact & Inquiries
            </Link>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full py-3.5 rounded-lg bg-aura-gold text-white font-sans text-xs tracking-widest font-semibold uppercase shadow-md"
              >
                Book Free Consultation
              </button>
              <a
                href={`https://wa.me/${brandData.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-lg bg-aura-walnut text-white font-sans text-xs tracking-widest font-semibold uppercase flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Design Desk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

