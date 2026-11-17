# AURA INTERIORS & LIVING – Premium Corporate Website

> **Craftsmanship Meets Contemporary Living.**  
> A production-quality, responsive corporate website for **AURA Interiors & Living** — specializing in bespoke solid wood furniture manufacturing and turnkey architectural interior design.

---

## 🏛️ Brand System & Palette

- **Primary Background**: `#F7F3EB` (Warm Ivory)
- **Secondary Background**: `#FFFEFC`
- **Walnut Brown**: `#4A3323`
- **Champagne Gold**: `#B58A52`
- **Light Gold Accent**: `#D5B98D`
- **Muted Olive**: `#72745B`
- **Warm Beige**: `#E9DFD0`
- **Primary Text**: `#352719`
- **Typography**: Cormorant Garamond / Playfair Display (Editorial Headings) + Plus Jakarta Sans (Body)

---

## ✨ Features & Architecture

1. **Cinematic Hero**: Ambient Ken Burns zoom, floating spatial scope deck, architectural typography.
2. **Furniture Manufacturing**: 10 distinct categories (Sofas, Dining, Beds, Wardrobes, TV Units, Office, etc.) with multi-parameter filtering, starting prices, and quick view.
3. **Architectural Interior Design**: Residential, Commercial, Modular Solutions, and Turnkey Execution breakdown.
4. **Before & After Interactive Sliders**: Live comparative visual transformations.
5. **Interactive Space & Budget Estimator**: 5-step property type, area slider, finish tier, and addon selector with live price calculation and printable summary.
6. **Curated Collections Switcher**: AURA Essentials (₹15k–₹75k), AURA Signature (₹1L–₹5L), and AURA Bespoke (₹6L+).
7. **Manufacturing Story**: 6-step interactive production timeline from timber selection to white-glove installation, plus hardwood species guide.
8. **Client Persistence**: Persistent Wishlist and Quotation Registry stored in `localStorage`.
9. **Instant Concierge**: Direct WhatsApp link, multi-channel consultation booking, and global search modal.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Animations
- **Routing**: React Router DOM v6

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 2. Installation
```bash
git clone https://github.com/<your-username>/aura-interiors-and-living.git
cd aura-interiors-and-living
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   ├── furniture/       # Catalogue photography
│   │   ├── hero/            # Cinematic hero imagery
│   │   ├── manufacturing/   # Workshop & machinery imagery
│   │   └── projects/        # Portfolio & before/after transformations
│   └── logo/                # Architectural SVG logos & brandmarks
├── src/
│   ├── components/          # Navbar, Footer, Modals, Sliders, Drawers
│   ├── context/             # AppContext (Wishlist, Quote Cart, Modals)
│   ├── data/                # Editable brand, furniture, projects, pricing data
│   ├── pages/               # Home, About, Furniture, Interiors, Projects, etc.
│   └── styles/              # Global luxury Tailwind styling
└── index.html
```

---

## 📄 License
© AURA INTERIORS & LIVING. All rights reserved.
