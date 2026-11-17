export const estimatorPropertyTypes = [
  { id: "single-room", name: "Single Room / Studio", avgSqft: 350, icon: "DoorOpen" },
  { id: "1bhk", name: "1 BHK Apartment", avgSqft: 650, icon: "Home" },
  { id: "2bhk", name: "2 BHK Apartment", avgSqft: 1100, icon: "Building" },
  { id: "3bhk", name: "3 BHK Premium Apartment", avgSqft: 1650, icon: "Building2" },
  { id: "villa", name: "Luxury Villa / Duplex", avgSqft: 3200, icon: "Landmark" },
  { id: "commercial", name: "Commercial / Office Space", avgSqft: 2000, icon: "Briefcase" }
];

export const estimatorScopes = [
  {
    id: "furniture-only",
    name: "Furniture Manufacturing Only",
    desc: "Bespoke sofas, dining sets, beds, credenzas & loose furniture pieces.",
    rateMultiplier: 0.55
  },
  {
    id: "interior-design",
    name: "Interior Design & Styling",
    desc: "Space planning, lighting design, paint/wall treatments & styling consultation.",
    rateMultiplier: 0.45
  },
  {
    id: "turnkey-solution",
    name: "Complete Turnkey Solution",
    desc: "End-to-end design, civil works, modular cabinetry & bespoke loose furniture.",
    rateMultiplier: 1.0
  },
  {
    id: "custom-modular",
    name: "Custom Modular Solutions",
    desc: "Precision modular kitchen, floor-to-ceiling wardrobes & storage units.",
    rateMultiplier: 0.70
  }
];

export const estimatorCollections = [
  {
    id: "essentials",
    name: "AURA Essentials",
    tier: "Accessible Quality",
    baseRatePerSqft: 1400,
    desc: "Solid hardwoods, calibrated ply, clean contemporary lines."
  },
  {
    id: "signature",
    name: "AURA Signature",
    tier: "Premium Tailored",
    baseRatePerSqft: 2400,
    desc: "American walnut, fluted acoustic accents, Italian textiles, Blum hardware."
  },
  {
    id: "bespoke",
    name: "AURA Bespoke",
    tier: "Couture Architectural",
    baseRatePerSqft: 3900,
    desc: "Single-slab live edge, brass inlays, Calacatta marble, 100% custom."
  }
];

export const estimatorAddons = [
  { id: "modular-kitchen", name: "Luxury Modular Kitchen", baseCost: 350000, desc: "Quartz countertops, Blum servo-drive drawers & pantry" },
  { id: "wardrobes", name: "Floor-to-Ceiling Wardrobes", baseCost: 280000, desc: "Smoked fluted glass, sensor LED channels & suede organizers" },
  { id: "lighting", name: "Architectural Lighting Package", baseCost: 140000, desc: "Magnetic tracks, 2700K high-CRI fixtures & custom chandelier" },
  { id: "false-ceiling", name: "False Ceiling & Cove Detailing", baseCost: 160000, desc: "Seamless gypsum drywall, indirect ambient perimeter coves" },
  { id: "smart-home", name: "Smart Automation & Dimming", baseCost: 190000, desc: "Lutron/DALI lighting controls, motorized motorized curtain tracks" },
  { id: "custom-accent", name: "Custom Architectural Wall Cladding", baseCost: 210000, desc: "Vertical fluted walnut slats & honed travertine panels" }
];

