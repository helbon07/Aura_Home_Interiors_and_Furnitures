export const furnitureCategories = [
  { id: "all", name: "All Categories", count: 12 },
  { id: "sofas", name: "Sofas & Sectional Seating", count: 4 },
  { id: "beds", name: "Beds & Bedroom Furniture", count: 2 },
  { id: "dining", name: "Dining Tables & Chairs", count: 3 },
  { id: "wardrobes", name: "Wardrobes & Storage", count: 2 },
  { id: "tv-units", name: "TV Units & Media Consoles", count: 2 },
  { id: "office", name: "Office Furniture", count: 2 },
  { id: "coffee-tables", name: "Coffee & Accent Tables", count: 3 },
  { id: "custom", name: "Custom Furniture", count: 4 },
  { id: "institutional", name: "Institutional Furniture", count: 2 },
  { id: "commercial", name: "Commercial & Hospitality", count: 3 }
];

export const materialFilters = ["All Materials", "American Walnut", "Burma Teak", "Calacatta Gold Marble", "Travertine Stone", "Champagne Brass", "Boucle & Belgian Linen", "Top-Grain Italian Leather"];
export const styleFilters = ["All Styles", "Contemporary Architectural", "Minimalist Modern", "Warm Japandi", "Artisan Mid-Century"];
export const collectionFilters = ["All Collections", "AURA Essentials", "AURA Signature", "AURA Bespoke"];

export const furnitureProducts = [
  {
    id: "elysian-sectional-sofa",
    name: "Elysian Modular Sectional Sofa",
    category: "sofas",
    collection: "AURA Bespoke",
    indicativePrice: 185000,
    priceFormatted: "₹1,85,000",
    image: "/images/furniture/sectional-sofa.webp",
    fallbackImage: "/images/furniture/sectional-sofa.jpg",
    tag: "Signature Bestseller",
    shortDescription: "An expansive architectural modular sofa wrapped in textured Belgian oatmeal linen, anchored by an integrated solid walnut base.",
    fullDescription: "Designed for grand residential spaces, the Elysian Sectional combines deep feather-down blend seating with precision engineered high-resilience ergonomic core support. The perimeter reveals an undercut solid American walnut shadow plinth, giving the generous silhouette an effortless floating presence.",
    materials: "Solid kiln-dried American Walnut frame, high-density HR foam core with goose down-blend topper, Belgian linen upholstery, concealed powder-coated steel connectors.",
    dimensions: "138\" W × 84\" D × 31\" H (Seat Height: 17\")",
    style: "Contemporary Architectural",
    finishes: [
      { name: "Oatmeal Linen", hex: "#E3DAC9" },
      { name: "Warm Sand Boucle", hex: "#D6CAB7" },
      { name: "Cognac Top-Grain Leather", hex: "#8A5232" },
      { name: "Slate Olive Velvet", hex: "#5D6352" }
    ],
    woodOptions: ["Natural American Walnut", "Dark Smoked Walnut", "Bleached White Oak", "Golden Burma Teak"],
    customizationOptions: [
      "Custom overall length and L-orientation (Left or Right chaise)",
      "Choice of 48+ premium upholstery textiles or client's own material (COM)",
      "Integrated side walnut console with wireless fast-charging pad",
      "Firmness customization: Cloud Soft, Balanced Medium, or Architectural Firm"
    ],
    leadTime: "3 to 4 weeks",
    warranty: "10-Year Structural Frame Warranty"
  },
  {
    id: "monolith-dining-table",
    name: "Monolith Live-Edge Walnut Dining Table",
    category: "dining",
    collection: "AURA Bespoke",
    indicativePrice: 220000,
    priceFormatted: "₹2,20,000",
    image: "/images/furniture/dining-table.webp",
    fallbackImage: "/images/furniture/dining-table.jpg",
    tag: "Artisan Masterpiece",
    shortDescription: "A monumental 8-seater dining table sculpted from single-slab solid walnut, elevated by champagne gold architectural brass pillars.",
    fullDescription: "Each Monolith dining table begins with ethically sourced American walnut timber carefully kiln-dried for 45 days. Hand-shaped by our senior woodwrights, the natural live edges are preserved while butterfly key joinery in solid brass secures the grain with timeless sculptural elegance.",
    materials: "45mm solid American Walnut live-edge slab, architectural champagne brass support columns, hand-rubbed organic hardwax oil finish.",
    dimensions: "96\" L × 42\" W × 30\" H (Custom lengths up to 144\")",
    style: "Artisan Mid-Century",
    finishes: [
      { name: "Matte Organic Oil Walnut", hex: "#4A3323" },
      { name: "Charcoal Ebonized Walnut", hex: "#23201F" },
      { name: "Golden Natural Teak", hex: "#7E5835" }
    ],
    woodOptions: ["American Walnut", "Burma Teak", "European White Oak"],
    customizationOptions: [
      "Custom table lengths (6-seater, 8-seater, 10-seater, or 12-seater)",
      "Choice of edge profile: Natural Organic Live-Edge, Chamfered Architectural Knife, or Soft Pillowed Radius",
      "Leg accents in Brushed Champagne Gold, Antiqued Bronze, or Matte Black Iron"
    ],
    leadTime: "4 weeks",
    warranty: "15-Year Timber Integrity Warranty"
  },
  {
    id: "sculptura-lounge-chair",
    name: "Sculptura Curved Accent Armchair",
    category: "sofas",
    collection: "AURA Signature",
    indicativePrice: 68000,
    priceFormatted: "₹68,000",
    image: "/images/furniture/lounge-chair.webp",
    fallbackImage: "/images/furniture/lounge-chair.jpg",
    tag: "Design Icon",
    shortDescription: "Fluid organic geometry carved from solid walnut, upholstered in tactile cream wool boucle with 360-degree sculptural balance.",
    fullDescription: "A statement piece conceived at the intersection of sculpture and comfort. The sinuous continuous timber armrest is hand-carved from select walnut stock, cradling a cocooning curved backrest engineered to relieve lumbar fatigue.",
    materials: "Hand-sculpted American Walnut frame, high-resilience memory foam cushioning, textured Italian boucle upholstery.",
    dimensions: "34\" W × 33\" D × 29\" H (Seat Height: 16.5\")",
    style: "Minimalist Modern",
    finishes: [
      { name: "Cream Boucle", hex: "#F3EDE4" },
      { name: "Forest Olive Velvet", hex: "#4F5342" },
      { name: "Terracotta Linen", hex: "#A7654C" },
      { name: "Espresso Leather", hex: "#38281E" }
    ],
    woodOptions: ["Warm Walnut", "Smoked Oak", "Natural Ash"],
    customizationOptions: [
      "Fixed 4-leg stance or concealed 360° smooth brass swivel mechanism",
      "Fabric selection across 30+ European wools and textured weaves",
      "Matching sculpted ottoman companion"
    ],
    leadTime: "2 to 3 weeks",
    warranty: "5-Year Craftsmanship Warranty"
  },
  {
    id: "aeris-fluted-wardrobe",
    name: "Aeris Floor-to-Ceiling Fluted Wardrobe",
    category: "wardrobes",
    collection: "AURA Bespoke",
    indicativePrice: 340000,
    priceFormatted: "₹3,40,000",
    image: "/images/furniture/custom-wardrobe.webp",
    fallbackImage: "/images/furniture/custom-wardrobe.jpg",
    tag: "Modular Architectural",
    shortDescription: "Bespoke floor-to-ceiling modular wardrobe system featuring smoked fluted glass doors and integrated warm illumination.",
    fullDescription: "Engineered to elevate bedroom architecture, the Aeris system features acoustic micro-fluted tinted glass panels set into slim champagne anodized aluminum extrusions. Inside, sensor-activated warm 2700K perimeter LED lighting illuminates plush suede-lined jewelry drawers, pull-out trouser racks, and cedar-lined shelving.",
    materials: "Anodized Champagne Gold aluminum frames, 8mm tempered acoustic fluted glass, marine-grade birch plywood carcass with walnut veneer, Blum soft-close runners.",
    dimensions: "120\" W × 24\" D × 108\" H (Custom configured to room height)",
    style: "Contemporary Architectural",
    finishes: [
      { name: "Smoked Bronze Fluted Glass", hex: "#5C4F44" },
      { name: "Frosted Champagne Glass", hex: "#B8A896" },
      { name: "Fluted Walnut Solid Wood", hex: "#4A3323" }
    ],
    woodOptions: ["American Walnut Interior", "Light Natural Oak Interior", "Graphite Ash Interior"],
    customizationOptions: [
      "100% bespoke spatial layout (Hanger rods, velvet watch trays, biometric safe, illuminated shoe displays)",
      "Integrated full-height smart mirror with touch dimming",
      "Air-circulation ventilation slots and dehumidification pre-wiring"
    ],
    leadTime: "4 to 5 weeks",
    warranty: "10-Year Hardware & Structure Warranty"
  },
  {
    id: "lignum-floating-tv-unit",
    name: "Lignum Slatted Floating Media Console",
    category: "tv-units",
    collection: "AURA Signature",
    indicativePrice: 85000,
    priceFormatted: "₹85,000",
    image: "/images/furniture/modern-tv-unit.webp",
    fallbackImage: "/images/furniture/modern-tv-unit.jpg",
    tag: "Acoustic Friendly",
    shortDescription: "Cantilevered wall-mounted entertainment credenza with precision slatted walnut doors allowing remote IR signal passthrough.",
    fullDescription: "A clean floating focal point for modern media lounges. The continuous vertical timber slats conceal acoustic speaker fabric behind, permitting soundbars and gaming consoles to operate invisibly while maintaining immaculate airflow and wire containment.",
    materials: "Solid American Walnut slatted face, high-grade birch core with matching walnut grain match, integrated German heavy-duty wall cleats.",
    dimensions: "84\" W × 18\" D × 16\" H (Custom widths from 72\" to 120\")",
    style: "Minimalist Modern",
    finishes: [
      { name: "Natural Satin Walnut", hex: "#4A3323" },
      { name: "Smoked Ebonized Ash", hex: "#2E2B29" },
      { name: "Warm Honey Teak", hex: "#875C34" }
    ],
    woodOptions: ["Walnut", "Teak", "White Oak"],
    customizationOptions: [
      "Concealed cable raceways and brush grommets for zero cord clutter",
      "Integrated lower indirect cove ambient lighting strip (warm 2700K)",
      "Choice of matching full-height marble or timber fluted TV backdrop panel"
    ],
    leadTime: "2 to 3 weeks",
    warranty: "5-Year Structural Warranty"
  },
  {
    id: "velour-platform-bed",
    name: "Velour Fluted King Platform Bed",
    category: "beds",
    collection: "AURA Signature",
    indicativePrice: 135000,
    priceFormatted: "₹1,35,000",
    image: "/images/furniture/upholstered-bed.webp",
    fallbackImage: "/images/furniture/upholstered-bed.jpg",
    tag: "Quiet Luxury",
    shortDescription: "An expansive low-profile platform bed with a channel-tufted velvet headboard extending to host floating walnut nightstands.",
    fullDescription: "Grounding the master suite in serene luxury, the Velour bed features an architectural fluted headboard wrapped in stain-resistant champagne velvet. The reinforced internal solid wood frame incorporates flexible beechwood orthopaedic slats for zero-squeak, optimal spinal support.",
    materials: "Solid seasoned hardwood subframe, Italian velvet upholstery, solid walnut floating cantilever bedside wings with wireless charging.",
    dimensions: "92\" W × 88\" L × 48\" H (Fits King Mattress 78\" × 72\")",
    style: "Contemporary Architectural",
    finishes: [
      { name: "Champagne Velvet", hex: "#D2C2AD" },
      { name: "Oatmeal Chenille", hex: "#DFD7CA" },
      { name: "Midnight Olive Velvet", hex: "#434739" }
    ],
    woodOptions: ["American Walnut Accents", "Natural White Oak Accents"],
    customizationOptions: [
      "Custom headboard width to span full accent wall with integrated reading lights",
      "Hydraulic gas-lift under-bed storage compartment option",
      "Custom mattress size configurations (Standard King, Super King, California King)"
    ],
    leadTime: "3 to 4 weeks",
    warranty: "10-Year Framework Warranty"
  },
  {
    id: "atrium-executive-desk",
    name: "Atrium Executive Architectural Desk",
    category: "office",
    collection: "AURA Bespoke",
    indicativePrice: 145000,
    priceFormatted: "₹1,45,000",
    image: "/images/furniture/executive-desk.webp",
    fallbackImage: "/images/furniture/executive-desk.jpg",
    tag: "Commercial / Office",
    shortDescription: "A commanding executive desk pairing a cantilevered dark walnut worktop with brushed champagne gold architectural legs.",
    fullDescription: "Constructed for discerning leaders and home studios. Includes soft-touch wireless charging embedded flush within the walnut work surface, concealed dual-channel cable management, and magnetic privacy access modesty panel.",
    materials: "Selected American Walnut timber, brushed champagne gold stainless steel base, soft-close dovetailed walnut drawers with leather lining.",
    dimensions: "78\" L × 36\" W × 30\" H",
    style: "Contemporary Architectural",
    finishes: [
      { name: "Dark Walnut & Champagne Gold", hex: "#4A3323" },
      { name: "Smoked Oak & Matte Bronze", hex: "#3D342C" }
    ],
    woodOptions: ["American Walnut", "Smoked Oak"],
    customizationOptions: [
      "Left or right return credenza for high-capacity file and hardware storage",
      "Leather writing pad inlay in cognac, saddle tan, or carbon black",
      "Motorized height-adjustable sit-stand concealed dual-motor variant"
    ],
    leadTime: "3 weeks",
    warranty: "10-Year Craftsmanship Warranty"
  },
  {
    id: "travertine-nesting-tables",
    name: "Aethel Travertine & Walnut Coffee Tables",
    category: "coffee-tables",
    collection: "AURA Essentials",
    indicativePrice: 48000,
    priceFormatted: "₹48,000",
    image: "/images/furniture/coffee-table.webp",
    fallbackImage: "/images/furniture/coffee-table.jpg",
    tag: "Organic Modern",
    shortDescription: "Pair of nesting organic coffee tables uniting honed Roman travertine stone with a sculpted solid walnut pedestal.",
    fullDescription: "A dialogue of geological texture and warm timber grain. The larger table features an unsealed matte-honed travertine top with natural textural voids, while the companion lower table nestles gracefully beneath with a solid oiled walnut disc.",
    materials: "Natural honed Roman Travertine slab, solid American Walnut turned base, protective stain-resistant stone impregnator.",
    dimensions: "Large: 36\" Dia × 16\" H | Small: 24\" Dia × 13.5\" H",
    style: "Warm Japandi",
    finishes: [
      { name: "Honed Beige Travertine & Walnut", hex: "#DDD2C1" },
      { name: "Calacatta Gold Marble & Smoked Oak", hex: "#EAE6DE" }
    ],
    woodOptions: ["Natural American Walnut", "Light White Oak"],
    customizationOptions: [
      "Available as a single standalone table or 2-piece nesting ensemble",
      "Alternative marble options: Nero Marquina, Verde Guatemala, or Grey Emperador"
    ],
    leadTime: "10 to 14 days",
    warranty: "3-Year Warranty"
  },
  {
    id: "solis-sculptural-chandelier",
    name: "Solis Architectural Pendant Chandelier",
    category: "custom",
    collection: "AURA Bespoke",
    indicativePrice: 95000,
    priceFormatted: "₹95,000",
    image: "/images/furniture/decorative-lighting.webp",
    fallbackImage: "/images/furniture/decorative-lighting.jpg",
    tag: "Sculptural Lighting",
    shortDescription: "Custom linear brass branch lighting fixture with mouth-blown champagne glass globes casting a warm museum-grade glow.",
    fullDescription: "Handmade in our metalcraft studio, the Solis chandelier balances cantilevered brass arms with mouth-blown frosted glass orbs. Engineered for double-height living rooms, stairwells, and grand dining pavilions.",
    materials: "Solid champagne brass with brushed lacquer finish, hand-blown triplex opal glass, custom high-CRI 95+ warm LED elements.",
    dimensions: "64\" L × 28\" W × 36\" H (Drop height adjustable up to 12 ft)",
    style: "Contemporary Architectural",
    finishes: [
      { name: "Brushed Champagne Gold", hex: "#B58A52" },
      { name: "Burnished Bronze", hex: "#5C4A36" },
      { name: "Matte Architectural Black", hex: "#1C1B1A" }
    ],
    woodOptions: ["Brass & Hand-Blown Glass"],
    customizationOptions: [
      "Custom overall span from 48\" up to 96\" for grand dining settings",
      "Smart home integration (0-10V, DALI, Lutron, and Caseta dimming)",
      "Choice of globe glass: Frosted Matte, Champagne Smoked, or Clear Seeded"
    ],
    leadTime: "3 weeks",
    warranty: "5-Year Electrical & Finish Warranty"
  },
  {
    id: "kanso-bookshelf-divider",
    name: "Kanso Open Architectural Bookshelf & Room Divider",
    category: "custom",
    collection: "AURA Signature",
    indicativePrice: 110000,
    priceFormatted: "₹1,10,000",
    image: "/images/furniture/bookshelf-unit.webp",
    fallbackImage: "/images/furniture/bookshelf-unit.jpg",
    tag: "Spatial Partition",
    shortDescription: "Double-sided architectural room divider shelf composed of staggered solid walnut uprights and champagne brass separator rods.",
    fullDescription: "A rhythmic room partition allowing natural light to filter through while defining functional zones in open-concept residences. Each shelf is reinforced to comfortably display art volumes, ceramics, and sculpture collections.",
    materials: "Solid American Walnut shelves and uprights, internal solid steel reinforcement pins, champagne gold brushed hardware.",
    dimensions: "72\" W × 16\" D × 84\" H",
    style: "Warm Japandi",
    finishes: [
      { name: "Natural Matte Walnut", hex: "#4A3323" },
      { name: "Golden Burma Teak", hex: "#7E5835" }
    ],
    woodOptions: ["Walnut", "Teak", "White Oak"],
    customizationOptions: [
      "Custom height to extend floor-to-ceiling with spring-loaded compression ceiling mounts",
      "Optional integrated lower storage cabinets with touch-latch doors",
      "Concealed LED edge illumination for display niches"
    ],
    leadTime: "3 weeks",
    warranty: "10-Year Framework Warranty"
  },
  {
    id: "zenith-boardroom-table",
    name: "Zenith 14-Seat Architectural Conference Table",
    category: "commercial",
    collection: "AURA Bespoke",
    indicativePrice: 420000,
    priceFormatted: "₹4,20,000",
    image: "/images/projects/boardroom.webp",
    fallbackImage: "/images/projects/boardroom.jpg",
    tag: "Commercial & Office",
    shortDescription: "Expansive 16-foot solid walnut executive boardroom table with integrated motorized pop-up connectivity and acoustic dampening.",
    fullDescription: "Engineered for corporate headquarters and design studios. Incorporates concealed under-table raceways, motorized flush-mount power modules, and acoustic leather inserts to eliminate table resonance during video meetings.",
    materials: "Bookmatched American Walnut top with chamfered knife-edge, heavy-gauge steel chassis clad in champagne bronze, integrated AV connectivity.",
    dimensions: "192\" L × 54\" W × 30\" H (16-Foot span)",
    style: "Contemporary Architectural",
    finishes: [
      { name: "Executive Walnut & Champagne Bronze", hex: "#4A3323" },
      { name: "Dark Ebonized Oak & Matte Black", hex: "#22201F" }
    ],
    woodOptions: ["American Walnut", "European White Oak"],
    customizationOptions: [
      "Custom lengths from 10-seater (120\") to 24-seater (288\")",
      "Integration of Crestron, Biamp, or Extron conferencing flush hardware",
      "Wireless device charging pads embedded invisibly beneath wood veneer"
    ],
    leadTime: "5 to 6 weeks",
    warranty: "15-Year Commercial Duty Warranty"
  },
  {
    id: "aurora-credenza",
    name: "Aurora Art Deco Bar & Dining Credenza",
    category: "institutional",
    collection: "AURA Signature",
    indicativePrice: 125000,
    priceFormatted: "₹1,25,000",
    image: "/images/manufacturing/completed-furniture.webp",
    fallbackImage: "/images/manufacturing/completed-furniture.jpg",
    tag: "Hospitality & Dining",
    shortDescription: "Sculptural dining sideboard featuring radiused tambour wood doors, Calacatta marble countertop, and mirrored bar interior.",
    fullDescription: "A showpiece of cabinetmaking dexterity. The curved tambour doors roll smoothly along precision tracks to reveal an illuminated interior with stemware holders, mirrored bar back, and wine storage slots.",
    materials: "Solid Teak tambour slats, Calacatta Gold marble top, birch ply carcass with walnut veneer, solid brass hardware.",
    dimensions: "72\" W × 20\" D × 34\" H",
    style: "Artisan Mid-Century",
    finishes: [
      { name: "Natural Teak & Calacatta Gold", hex: "#7E5835" },
      { name: "Smoked Walnut & Nero Marquina", hex: "#3A291E" }
    ],
    woodOptions: ["Burma Teak", "American Walnut"],
    customizationOptions: [
      "Internal layout configured as Wine & Liquor Bar or Dining Tableware Storage",
      "Integrated pull-out marble serving prep ledge",
      "Choice of marble or solid wood top"
    ],
    leadTime: "3 to 4 weeks",
    warranty: "5-Year Craftsmanship Warranty"
  }
];

