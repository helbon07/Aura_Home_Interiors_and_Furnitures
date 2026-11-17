export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "living", name: "Living Rooms" },
  { id: "bedrooms", name: "Bedrooms" },
  { id: "kitchens", name: "Kitchens" },
  { id: "dining", name: "Dining Areas" },
  { id: "office", name: "Office Interiors" },
  { id: "commercial", name: "Commercial Spaces" },
  { id: "custom-furniture", name: "Custom Furniture" }
];

export const portfolioProjects = [
  {
    id: "penthouse-elysium",
    title: "Penthouse Elysium: Contemporary Double-Height Residence",
    category: "living",
    roomType: "Living Room & Salon",
    location: "Koramangala, Bengaluru",
    conceptType: "Illustrative Concept",
    isConcept: true,
    coverImage: "/images/projects/living-room.webp",
    fallbackCover: "/images/projects/living-room.jpg",
    approxBudget: "₹38 Lakh",
    area: "1,250 sq.ft (Living & Dining)",
    designConcept: "Emphasizing verticality through fluted American walnut wall paneling, counterbalanced by a low-slung modular oatmeal sectional and warm champagne gold branch chandelier.",
    materials: ["Solid American Walnut", "Calacatta Gold Marble", "Belgian Linen", "Brushed Champagne Brass"],
    palette: [
      { name: "Warm Ivory", hex: "#F7F3EB" },
      { name: "Deep Walnut", hex: "#4A3323" },
      { name: "Champagne Gold", hex: "#B58A52" },
      { name: "Muted Olive", hex: "#72745B" }
    ],
    furnitureBreakdown: [
      "Custom 5-piece Elysian Modular Sectional in oatmeal linen",
      "Monolith dual nesting marble & walnut coffee table",
      "Full-height 20ft fluted walnut acoustic accent wall",
      "Custom Solis linear brass pendant light"
    ],
    summary: "A grand double-height living environment designed for effortless family gathering and sophisticated evening entertaining."
  },
  {
    id: "verdant-modular-kitchen",
    title: "The Fluted Walnut & Quartz Culinary Studio",
    category: "kitchens",
    roomType: "Modular Kitchen",
    location: "Lavelle Road, Bengaluru",
    conceptType: "Illustrative Concept",
    isConcept: true,
    coverImage: "/images/projects/modular-kitchen.webp",
    fallbackCover: "/images/projects/modular-kitchen.jpg",
    hasBeforeAfter: true,
    beforeImage: "/images/projects/before-after-kitchen-before.webp",
    afterImage: "/images/projects/modular-kitchen.webp",
    approxBudget: "₹24 Lakh",
    area: "340 sq.ft",
    designConcept: "A seamless transition from heavy cluttered cabinetry to clean vertical fluted walnut doors, topped with a dramatic 10-foot waterfall Calacatta Gold island and concealed smart appliance garages.",
    materials: ["Fluted Walnut Veneer", "Calacatta Gold Quartz", "BWP Calibrated Birch Plywood", "Blum Legrabox Hardware"],
    palette: [
      { name: "Fluted Walnut", hex: "#4A3323" },
      { name: "Quartz White", hex: "#FAF7F2" },
      { name: "Champagne Brass", hex: "#B58A52" },
      { name: "Warm Greige", hex: "#C7BEB1" }
    ],
    furnitureBreakdown: [
      "Custom 10-foot waterfall island with breakfast bar overhang",
      "Concealed walk-in spice pantry with sensor lighting",
      "Integrated touch-to-open servo-drive wall cabinets",
      "Custom bar stools in cognac leather and walnut legs"
    ],
    summary: "Re-imagining culinary architecture as the warm, social heartbeat of the modern home."
  },
  {
    id: "serenity-master-suite",
    title: "Sanctuary: The Fluted Slatted Master Suite",
    category: "bedrooms",
    roomType: "Master Bedroom & Dressing",
    location: "Jubilee Hills, Hyderabad",
    conceptType: "Illustrative Concept",
    isConcept: true,
    coverImage: "/images/projects/master-bedroom.webp",
    fallbackCover: "/images/projects/master-bedroom.jpg",
    approxBudget: "₹28 Lakh",
    area: "620 sq.ft",
    designConcept: "A warm cocoon of acoustic slatted timber, featuring a curved champagne velvet headboard, floating bedside ledges, and indirect 2700K perimeter cove lighting.",
    materials: ["Champagne Velvet", "Seasoned American Walnut", "Acoustic Slats", "Smoked Fluted Glass"],
    palette: [
      { name: "Soft Champagne", hex: "#D5B98D" },
      { name: "Walnut Brown", hex: "#4A3323" },
      { name: "Warm Beige", hex: "#E9DFD0" },
      { name: "Forest Olive", hex: "#72745B" }
    ],
    furnitureBreakdown: [
      "Velour King platform bed with integrated wall-width headboard",
      "Floating walnut nightstands with wireless charging",
      "Aeris 4-door smoked glass illuminated wardrobe",
      "Sculptural bouclé reading armchair and ottoman"
    ],
    summary: "Crafted to filter out urban chaos and cultivate deep restorative rest through tactile natural surfaces."
  },
  {
    id: "apex-boardroom-headquarters",
    title: "Apex Executive Boardroom & Leadership Suite",
    category: "office",
    roomType: "Executive Boardroom",
    location: "Outer Ring Road, Bengaluru",
    conceptType: "Illustrative Concept",
    isConcept: true,
    coverImage: "/images/projects/boardroom.webp",
    fallbackCover: "/images/projects/boardroom.jpg",
    approxBudget: "₹46 Lakh",
    area: "880 sq.ft",
    designConcept: "An authoritative commercial space commanding respect. Centered around a 16-foot solid walnut conference table equipped with motorized connectivity and flanked by acoustic wall slats.",
    materials: ["Bookmatched American Walnut", "Brushed Champagne Bronze", "Italian Cognac Leather", "Acoustic Fabric Core"],
    palette: [
      { name: "Executive Walnut", hex: "#4A3323" },
      { name: "Cognac Leather", hex: "#8F5835" },
      { name: "Champagne Bronze", hex: "#B58A52" },
      { name: "Graphite Slate", hex: "#2B2826" }
    ],
    furnitureBreakdown: [
      "Zenith 14-Seat solid walnut conference table with concealed AV hubs",
      "14 Ergonomic high-back executive chairs in top-grain cognac leather",
      "Acoustic micro-perforated timber wall slat paneling",
      "Concealed presentation credenza with integrated refrigeration"
    ],
    summary: "Uniting corporate acoustic rigor with warm architectural luxury for high-stakes leadership decisions."
  },
  {
    id: "courtyard-pavilion-villa",
    title: "Aura Residence: Courtyard Villa & Dining Pavilion",
    category: "dining",
    roomType: "Dining Pavilion & Courtyard",
    location: "Sadashivanagar, Bengaluru",
    conceptType: "Illustrative Concept",
    isConcept: true,
    coverImage: "/images/projects/courtyard-residence.webp",
    fallbackCover: "/images/projects/courtyard-residence.jpg",
    approxBudget: "₹52 Lakh",
    area: "1,800 sq.ft",
    designConcept: "Merging traditional South Indian open-courtyard vernacular with contemporary European minimalism. A 10-seater live-edge dining table frames views of a tranquil indoor stone water court.",
    materials: ["Burma Teak", "Sadahalli Granite", "Champagne Brass", "Raw Textured Plaster"],
    palette: [
      { name: "Burma Teak", hex: "#7E5835" },
      { name: "Granite Stone", hex: "#9E9A93" },
      { name: "Muted Olive", hex: "#72745B" },
      { name: "Warm Ivory", hex: "#F7F3EB" }
    ],
    furnitureBreakdown: [
      "Monolith 10-seater live-edge Burma Teak dining table",
      "10 Sculpted minimalist dining chairs with cane backrests",
      "Custom brass water spout and architectural courtyard seating ledges",
      "Full-height sliding slim-profile thermal glass partitions"
    ],
    summary: "An ode to biophilic architectural harmony where sound of water and scent of seasoned timber mingle."
  },
  {
    id: "lumina-flagship-showroom",
    title: "The Gallery: Luxury Design Flagship Showroom",
    category: "commercial",
    roomType: "Commercial & Retail Gallery",
    location: "Indiranagar, Bengaluru",
    conceptType: "Illustrative Concept",
    isConcept: true,
    coverImage: "/images/projects/commercial-showroom.webp",
    fallbackCover: "/images/projects/commercial-showroom.jpg",
    approxBudget: "₹65 Lakh",
    area: "3,200 sq.ft",
    designConcept: "Museum-grade architectural lighting illuminates intimate vignettes of living, bedroom, and kitchen solutions, inviting clients to experience materials at 1:1 scale.",
    materials: ["Honed Microcement", "American Walnut", "Champagne Gold Metal", "Travertine Stone"],
    palette: [
      { name: "Microcement Grey", hex: "#C7C2BA" },
      { name: "Walnut Brown", hex: "#4A3323" },
      { name: "Champagne Gold", hex: "#B58A52" },
      { name: "Soft Ivory", hex: "#FAF7F2" }
    ],
    furnitureBreakdown: [
      "Custom curved reception counter in fluted travertine and walnut",
      "Material exploration library with 200+ physical finish samples",
      "Full-scale mock modular kitchen demonstration stage",
      "Private VIP consultation salon with soundproof acoustic enclosure"
    ],
    summary: "An immersive spatial showcase demonstrating the complete breadth of AURA's manufacturing dexterity."
  },
  {
    id: "bespoke-living-transformation",
    title: "Before & After: Classical Villa Living Room Transformation",
    category: "living",
    roomType: "Living Room Renovation",
    location: "Whitefield, Bengaluru",
    conceptType: "Illustrative Concept",
    isConcept: true,
    coverImage: "/images/projects/before-after-living-after.webp",
    fallbackCover: "/images/projects/before-after-living-after.jpg",
    hasBeforeAfter: true,
    beforeImage: "/images/projects/before-after-living-before.webp",
    afterImage: "/images/projects/before-after-living-after.webp",
    approxBudget: "₹32 Lakh",
    area: "750 sq.ft",
    designConcept: "Replaced an outdated, dim, fragmented layout with a soaring, light-filled open plan grounded by custom walnut millwork and tailored conversational seating.",
    materials: ["American Walnut", "Travertine Stone", "Boucle Fabric", "Champagne Brass Accents"],
    palette: [
      { name: "Warm Ivory", hex: "#F7F3EB" },
      { name: "Walnut", hex: "#4A3323" },
      { name: "Gold", hex: "#B58A52" },
      { name: "Beige", hex: "#E9DFD0" }
    ],
    furnitureBreakdown: [
      "Bespoke curved low sectional in warm boucle",
      "Slatted media wall with invisible wiring",
      "Pair of Sculptura walnut lounge armchairs",
      "Motorized architectural sheer window drapery"
    ],
    summary: "A complete aesthetic and ergonomic rebirth of a dated residential living space into a contemporary architectural sanctuary."
  }
];

