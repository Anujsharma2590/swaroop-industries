export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  description: string;
  image?: string;
  featured?: boolean;
  partNumber?: string;
  specifications?: Record<string, string>;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  icon?: string;
  products: Product[];
  subcategories?: ProductSubcategory[];
}

export interface ProductSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

// ============================================
// WIRE & CABLES
// ============================================
const wireProducts: Product[] = [
  {
    id: "wire-1",
    name: "Gold Auto Cables (30 SWG)",
    slug: "gold-auto-cables-30swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Premium quality auto cables available in various sizes: 14/0.3mm (1.00sq mm), 28/0.3mm (1.50sq mm), 35/0.3mm (2.50sq mm), 44/0.3mm (3.00sq mm), 65/0.3mm (4.00sq mm), 120/0.3mm (10sq mm).",
    featured: true,
    specifications: {
      "Wire Gauge": "30 SWG",
      "Available Sizes": "1.00, 1.50, 2.50, 3.00, 4.00, 10.00 sq mm",
      "Material": "Copper with PVC insulation",
    },
  },
  {
    id: "wire-2",
    name: "Gold Thin PVC (AVS Type)",
    slug: "gold-thin-pvc-avs",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Thin wall PVC insulated cables. Available sizes: 16/0.2mm (0.50sq mm), 24/0.2mm (0.75sq mm), 32/0.2mm (1.00sq mm), 30/0.25mm (1.50sq mm), 35/0.3mm (2.50sq mm), 56/0.3mm (4.00sq mm), 84/0.3mm (6.00sq mm).",
    featured: true,
    specifications: {
      "Type": "AVS (Automotive Very thin wall Single core)",
      "Available Sizes": "0.50, 0.75, 1.00, 1.50, 2.50, 4.00, 6.00 sq mm",
    },
  },
  {
    id: "wire-3",
    name: "Silver Wire (031 SWG)",
    slug: "silver-wire-031swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "High-quality silver-coated wires. Available in 4mm, 5mm, 6mm, 7mm, 8mm, and 10mm sizes.",
    specifications: {
      "Wire Gauge": "031 SWG",
      "Available Sizes": "4mm, 5mm, 6mm, 7mm, 8mm, 10mm",
    },
  },
  {
    id: "wire-4",
    name: "Export Thin Wire (036 SWG)",
    slug: "export-thin-036swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Export quality thin wires. Available in 0.75mm, 1.00mm, and 1.50mm sizes.",
    specifications: {
      "Wire Gauge": "036 SWG",
      "Available Sizes": "0.75mm, 1.00mm, 1.50mm",
      "Quality": "Export Grade",
    },
  },
  {
    id: "wire-5",
    name: "Premium Wire (034 SWG)",
    slug: "premium-wire-034swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Premium quality wires available in 4mm, 5mm, 6mm, 7mm, 8mm, and 10mm sizes.",
    specifications: {
      "Wire Gauge": "034 SWG",
      "Available Sizes": "4mm, 5mm, 6mm, 7mm, 8mm, 10mm",
      "Quality": "Premium Grade",
    },
  },
  {
    id: "wire-6",
    name: "Premium Thin Wire (034 SWG)",
    slug: "premium-thin-034swg",
    category: "Wire & Cables",
    subcategory: "Auto Cables",
    description: "Premium thin wires. Available sizes: 0.50sq mm, 0.75sq mm, 1.00sq mm, 1.50sq mm, 2.50sq mm, 4.00sq mm, 6.00sq mm.",
    specifications: {
      "Wire Gauge": "034 SWG",
      "Available Sizes": "0.50, 0.75, 1.00, 1.50, 2.50, 4.00, 6.00 sq mm",
    },
  },
  {
    id: "wire-7",
    name: "Speaker Wire",
    slug: "speaker-wire",
    category: "Wire & Cables",
    subcategory: "Speaker Cables",
    description: "High-quality speaker wires available in Gold, Premium-2, and Premium-3 variants. Available in transparent (23/23 and 16/16) and white colors. Lengths: 25, 40, 50 & 91 meters.",
    specifications: {
      "Variants": "Gold, Premium-2, Premium-3",
      "Colors": "Transparent, White",
      "Available Lengths": "25m, 40m, 50m, 91m",
    },
  },
  {
    id: "wire-8",
    name: "OE Type Battery Cables",
    slug: "oe-battery-cables",
    category: "Wire & Cables",
    subcategory: "Battery Cables",
    description: "Original Equipment type battery cables. Available sizes: 10.00, 16.00, 25.00, 35.00, 50.00, 70.00, 95.00, 120.00 sq mm. Lengths: 25, 50 & 100 meters.",
    featured: true,
    specifications: {
      "Type": "OE (Original Equipment)",
      "Available Sizes": "10, 16, 25, 35, 50, 70, 95, 120 sq mm",
      "Available Lengths": "25m, 50m, 100m",
    },
  },
  {
    id: "wire-9",
    name: "After Market Battery Cables",
    slug: "aftermarket-battery-cables",
    category: "Wire & Cables",
    subcategory: "Battery Cables",
    description: "Aftermarket battery cables. Available in 220 Wire, 325 Wire, and 440 Wire variants. Lengths: 25, 50 & 100 meters.",
    specifications: {
      "Variants": "220 Wire, 325 Wire, 440 Wire",
      "Available Lengths": "25m, 50m, 100m",
    },
  },
];

// ============================================
// BRASS TERMINALS
// ============================================
const brassTerminalProducts: Product[] = [
  // Ring Series Terminals
  {
    id: "bt-ring-1",
    name: "Ring Series Terminal - LA103 Small Hole",
    slug: "ring-terminal-la103-small",
    category: "Brass Terminal",
    subcategory: "Ring Series",
    description: "Ring terminal with 7.00mm OD, 3.20mm ID for 1.50-2.20 sq mm cable. Material: CuZn-63/37. Part Number: SWT001003S/M.",
    partNumber: "SWT001003S",
    featured: true,
    specifications: {
      "OD": "7.00mm",
      "ID": "3.20mm",
      "Cable Size": "1.50-2.20 sq mm",
      "Material": "CuZn-63/37",
      "Packing": "Spool-8000 / Cut-1000",
    },
  },
  {
    id: "bt-ring-2",
    name: "Ring Series Terminal - LA103 Big Hole",
    slug: "ring-terminal-la103-big",
    category: "Brass Terminal",
    subcategory: "Ring Series",
    description: "Ring terminal with 7.00mm OD, 4.20mm ID for 1.50-2.20 sq mm cable. Material: CuZn-63/37. Part Number: SWT001003B.",
    partNumber: "SWT001003B",
    specifications: {
      "OD": "7.00mm",
      "ID": "4.20mm",
      "Cable Size": "1.50-2.20 sq mm",
      "Material": "CuZn-63/37",
    },
  },
  {
    id: "bt-ring-3",
    name: "Ring Series Terminals - Complete Range",
    slug: "ring-series-terminals",
    category: "Brass Terminal",
    subcategory: "Ring Series",
    description: "Complete range of ring series terminals with various OD/ID combinations. Available in brass (CuZn-63/37) with tin plating options. Ideal for secure electrical connections in automotive applications.",
    featured: true,
    specifications: {
      "Material": "CuZn-63/37 Brass",
      "Plating Options": "Plain, Tin Plated",
      "Applications": "Automotive, Industrial",
    },
  },
  // Fork/Jointer Series
  {
    id: "bt-fork-1",
    name: "Fork Series Terminals",
    slug: "fork-series-terminals",
    category: "Brass Terminal",
    subcategory: "Fork Series",
    description: "Fork/spade terminals for easy connect-disconnect applications. Multiple sizes available for various cable gauges.",
    featured: true,
    specifications: {
      "Material": "CuZn-63/37 Brass",
      "Type": "Fork/Spade",
      "Applications": "Quick connect/disconnect",
    },
  },
  {
    id: "bt-jointer-1",
    name: "Jointer Series Terminals",
    slug: "jointer-series-terminals",
    category: "Brass Terminal",
    subcategory: "Jointer Series",
    description: "Jointer terminals for wire-to-wire connections. Precision-engineered for reliable electrical joints.",
    specifications: {
      "Material": "Brass",
      "Type": "Jointer/Butt",
      "Applications": "Wire splicing",
    },
  },
  // Bullet Series
  {
    id: "bt-bullet-1",
    name: "Bullet Series Terminals - Male",
    slug: "bullet-terminals-male",
    category: "Brass Terminal",
    subcategory: "Bullet Series",
    description: "Male bullet terminals for automotive wiring. Available in multiple sizes for various applications.",
    featured: true,
    specifications: {
      "Type": "Male Bullet",
      "Material": "Brass",
      "Applications": "Automotive wiring connectors",
    },
  },
  {
    id: "bt-bullet-2",
    name: "Bullet Series Terminals - Female",
    slug: "bullet-terminals-female",
    category: "Brass Terminal",
    subcategory: "Bullet Series",
    description: "Female bullet terminals designed to mate with male bullet connectors. Ensures secure electrical connections.",
    specifications: {
      "Type": "Female Bullet",
      "Material": "Brass",
      "Applications": "Automotive wiring connectors",
    },
  },
  // Fuse Series
  {
    id: "bt-fuse-1",
    name: "Fuse Series Terminals",
    slug: "fuse-series-terminals",
    category: "Brass Terminal",
    subcategory: "Fuse Series",
    description: "Terminals designed specifically for fuse connections. High conductivity brass construction.",
    specifications: {
      "Material": "High Conductivity Brass",
      "Applications": "Fuse holders, Fuse boxes",
    },
  },
  // 090 Series
  {
    id: "bt-090-1",
    name: "090 Series Terminals",
    slug: "090-series-terminals",
    category: "Brass Terminal",
    subcategory: "090 Series",
    description: "090 Series terminals (2.3mm) for automotive connectors. Male and female variants available.",
    featured: true,
    specifications: {
      "Series": "090 (2.3mm)",
      "Variants": "Male, Female",
      "Applications": "Automotive connectors",
    },
  },
  // 0110 Series
  {
    id: "bt-0110-1",
    name: "0110 Series Terminals",
    slug: "0110-series-terminals",
    category: "Brass Terminal",
    subcategory: "0110 Series",
    description: "0110 Series terminals (2.8mm) for automotive applications. Precision-manufactured for reliable connections.",
    specifications: {
      "Series": "0110 (2.8mm)",
      "Variants": "Male, Female",
      "Applications": "Automotive connectors",
    },
  },
  // 0187 Series
  {
    id: "bt-0187-1",
    name: "0187 Series Terminals",
    slug: "0187-series-terminals",
    category: "Brass Terminal",
    subcategory: "0187 Series",
    description: "0187 Series terminals (4.8mm) blade terminals for medium duty applications.",
    specifications: {
      "Series": "0187 (4.8mm)",
      "Type": "Blade Terminal",
      "Applications": "Medium duty connections",
    },
  },
  // 0250 Series
  {
    id: "bt-0250-1",
    name: "0250 Series Terminals",
    slug: "0250-series-terminals",
    category: "Brass Terminal",
    subcategory: "0250 Series",
    description: "0250 Series terminals (6.3mm) for standard automotive connections. High current capacity.",
    featured: true,
    specifications: {
      "Series": "0250 (6.3mm)",
      "Type": "Blade Terminal",
      "Applications": "High current automotive",
    },
  },
  // 0312 Series
  {
    id: "bt-0312-1",
    name: "0312 Series Terminals",
    slug: "0312-series-terminals",
    category: "Brass Terminal",
    subcategory: "0312 Series",
    description: "0312 Series terminals (7.8mm) for heavy-duty automotive applications.",
    specifications: {
      "Series": "0312 (7.8mm)",
      "Type": "Blade Terminal",
      "Applications": "Heavy duty connections",
    },
  },
  // 0375 Series
  {
    id: "bt-0375-1",
    name: "0375 Series Terminals",
    slug: "0375-series-terminals",
    category: "Brass Terminal",
    subcategory: "0375 Series",
    description: "0375 Series terminals (9.5mm) for extra heavy-duty applications.",
    specifications: {
      "Series": "0375 (9.5mm)",
      "Type": "Blade Terminal",
      "Applications": "Extra heavy duty",
    },
  },
  // Special Series
  {
    id: "bt-special-1",
    name: "Special Series Terminals",
    slug: "special-series-terminals",
    category: "Brass Terminal",
    subcategory: "Special Series",
    description: "Specialized terminals for unique applications. Custom designs available.",
    specifications: {
      "Type": "Special/Custom",
      "Applications": "Custom requirements",
    },
  },
  // Brass Lugs
  {
    id: "bt-lugs-1",
    name: "Brass Cable Lugs",
    slug: "brass-cable-lugs",
    category: "Brass Terminal",
    subcategory: "Brass Lugs",
    description: "Heavy-duty brass cable lugs for battery and ground connections. Available in various hole sizes and cable capacities.",
    featured: true,
    specifications: {
      "Material": "High-grade Brass",
      "Applications": "Battery terminals, Ground connections",
      "Variants": "Multiple sizes",
    },
  },
  // Brass Sheet Terminal
  {
    id: "bt-sheet-1",
    name: "Brass Sheet Terminals",
    slug: "brass-sheet-terminals",
    category: "Brass Terminal",
    subcategory: "Sheet Terminals",
    description: "Flat brass sheet terminals. Also available in copper sheet for bulk quantity orders.",
    specifications: {
      "Material": "Brass / Copper (bulk)",
      "Type": "Sheet Terminal",
    },
  },
  // Brass Battery Terminal
  {
    id: "bt-battery-1",
    name: "Brass Battery Terminals",
    slug: "brass-battery-terminals",
    category: "Brass Terminal",
    subcategory: "Battery Terminals",
    description: "Premium brass battery terminals for automotive batteries. Excellent conductivity and corrosion resistance.",
    featured: true,
    specifications: {
      "Material": "Premium Brass",
      "Applications": "Automotive batteries",
      "Features": "Corrosion resistant",
    },
  },
  {
    id: "bt-battery-2",
    name: "Lead Battery Terminals",
    slug: "lead-battery-terminals",
    category: "Brass Terminal",
    subcategory: "Battery Terminals",
    description: "Lead alloy battery terminals for heavy-duty applications.",
    specifications: {
      "Material": "Lead Alloy",
      "Applications": "Heavy duty batteries",
    },
  },
];

// ============================================
// BATTERY CABLE SETS
// ============================================
const batteryCableSetProducts: Product[] = [
  {
    id: "bcs-1",
    name: "Battery Cable Fitting",
    slug: "battery-cable-fitting",
    category: "Battery Cable Set",
    description: "Complete battery cable fittings for automotive applications.",
    specifications: {
      "Type": "Cable Fitting",
      "Applications": "Automotive",
    },
  },
  {
    id: "bcs-2",
    name: "Battery Jointer Both Side Terminal",
    slug: "battery-jointer-both-side",
    category: "Battery Cable Set",
    description: "Battery jointer with terminals on both sides for easy installation.",
    specifications: {
      "Type": "Double-sided Terminal",
      "Applications": "Battery connections",
    },
  },
  {
    id: "bcs-3",
    name: "Battery Terminal Jointer",
    slug: "battery-terminal-jointer",
    category: "Battery Cable Set",
    description: "Terminal jointer for connecting battery cables.",
    specifications: {
      "Type": "Jointer",
      "Applications": "Battery terminal connections",
    },
  },
  {
    id: "bcs-4",
    name: "Maruti Car Cable Set",
    slug: "maruti-car-cable-set",
    category: "Battery Cable Set",
    description: "Battery cable set specifically designed for Maruti cars.",
    featured: true,
    specifications: {
      "Compatible": "Maruti Cars",
      "Type": "Complete Cable Set",
    },
  },
  {
    id: "bcs-5",
    name: "Maruti Van Cable Set",
    slug: "maruti-van-cable-set",
    category: "Battery Cable Set",
    description: "Battery cable set for Maruti vans.",
    specifications: {
      "Compatible": "Maruti Vans",
      "Type": "Complete Cable Set",
    },
  },
  {
    id: "bcs-6",
    name: "Jumper Cable Set",
    slug: "jumper-cable-set",
    category: "Battery Cable Set",
    description: "Heavy-duty jumper cables for vehicle battery jump starting. High-quality copper conductors.",
    featured: true,
    specifications: {
      "Type": "Jumper Cables",
      "Applications": "Battery jump starting",
      "Material": "Copper conductors",
    },
  },
  {
    id: "bcs-7",
    name: "Flat Earthing Wire",
    slug: "flat-earthing-wire",
    category: "Battery Cable Set",
    description: "Flat braided earthing wire for vehicle grounding applications.",
    specifications: {
      "Type": "Flat Braided",
      "Applications": "Vehicle grounding",
    },
  },
  {
    id: "bcs-8",
    name: "Battery Cable Set for Four Wheeler",
    slug: "battery-cable-four-wheeler",
    category: "Battery Cable Set",
    description: "Complete battery cable set for four-wheeler vehicles.",
    featured: true,
    specifications: {
      "Compatible": "Four Wheelers",
      "Type": "Complete Set",
    },
  },
  {
    id: "bcs-9",
    name: "Battery Cable Set for Earth Moving Vehicle",
    slug: "battery-cable-earthmover",
    category: "Battery Cable Set",
    description: "Heavy-duty battery cable set for earth moving equipment and JCB machines.",
    specifications: {
      "Compatible": "Earth Moving Vehicles, JCB",
      "Type": "Heavy Duty Set",
    },
  },
  {
    id: "bcs-10",
    name: "Charging Clip",
    slug: "charging-clip",
    category: "Battery Cable Set",
    description: "Battery charging clips (crocodile clips) for battery chargers.",
    specifications: {
      "Type": "Crocodile Clip",
      "Applications": "Battery charging",
    },
  },
];

// ============================================
// SWITCHES
// ============================================
const switchProducts: Product[] = [
  {
    id: "switch-1",
    name: "Push Pull Switch",
    slug: "push-pull-switch",
    category: "Switches",
    description: "Universal push-pull switches for automotive lighting and accessory control.",
    featured: true,
    specifications: {
      "Type": "Push Pull",
      "Applications": "Lighting, Accessories",
    },
  },
  {
    id: "switch-2",
    name: "Headlight Switch",
    slug: "headlight-switch",
    category: "Switches",
    description: "Headlight control switches for vehicles.",
    specifications: {
      "Type": "Rotary/Push-Pull",
      "Applications": "Headlight control",
    },
  },
];

// ============================================
// FLASHER
// ============================================
const flasherProducts: Product[] = [
  {
    id: "flasher-1",
    name: "Electronic Flasher",
    slug: "electronic-flasher",
    category: "Flasher",
    description: "Electronic turn signal flasher relay. Compatible with LED and incandescent bulbs.",
    featured: true,
    specifications: {
      "Type": "Electronic",
      "Compatibility": "LED, Incandescent",
      "Applications": "Turn signals, Hazard lights",
    },
  },
  {
    id: "flasher-2",
    name: "Musical Flasher",
    slug: "musical-flasher",
    category: "Flasher",
    description: "Musical flasher with melody feature for turn signal indication.",
    specifications: {
      "Type": "Musical/Melody",
      "Feature": "Audio indication",
      "Applications": "Turn signals",
    },
  },
];

// ============================================
// RELAY
// ============================================
const relayProducts: Product[] = [
  {
    id: "relay-1",
    name: "2 Wheeler Relay",
    slug: "2-wheeler-relay",
    category: "Relay",
    description: "Relay designed for two-wheeler motorcycles and scooters.",
    specifications: {
      "Compatible": "2 Wheelers",
      "Voltage": "12V",
    },
  },
  {
    id: "relay-2",
    name: "4 Wheeler Relay",
    slug: "4-wheeler-relay",
    category: "Relay",
    description: "Relay designed for four-wheeler cars and SUVs.",
    featured: true,
    specifications: {
      "Compatible": "4 Wheelers",
      "Voltage": "12V/24V",
    },
  },
  {
    id: "relay-3",
    name: "Starting Relay",
    slug: "starting-relay",
    category: "Relay",
    description: "Starter motor relay for vehicle ignition systems.",
    specifications: {
      "Type": "Starter Relay",
      "Applications": "Ignition system",
    },
  },
  {
    id: "relay-4",
    name: "Head Light Relay",
    slug: "headlight-relay",
    category: "Relay",
    description: "High-power relay for headlight circuits. Improves light output and protects switch.",
    featured: true,
    specifications: {
      "Type": "Headlight Relay",
      "Rating": "30A/40A",
      "Applications": "Headlight upgrade",
    },
  },
];

// ============================================
// TUNER
// ============================================
const tunerProducts: Product[] = [
  {
    id: "tuner-1",
    name: "4 Way Tuner",
    slug: "4-way-tuner",
    category: "Tuner",
    description: "4-way electrical distribution tuner for vehicle wiring.",
    specifications: {
      "Ways": "4",
      "Applications": "Electrical distribution",
    },
  },
  {
    id: "tuner-2",
    name: "7 Way Tuner",
    slug: "7-way-tuner",
    category: "Tuner",
    description: "7-way electrical distribution tuner.",
    specifications: {
      "Ways": "7",
      "Applications": "Electrical distribution",
    },
  },
  {
    id: "tuner-3",
    name: "8 Way Tuner",
    slug: "8-way-tuner",
    category: "Tuner",
    description: "8-way electrical distribution tuner.",
    specifications: {
      "Ways": "8",
      "Applications": "Electrical distribution",
    },
  },
];

// ============================================
// FUSE
// ============================================
const fuseProducts: Product[] = [
  {
    id: "fuse-1",
    name: "Standard Blade Fuse",
    slug: "standard-blade-fuse",
    category: "Fuse",
    description: "Standard automotive blade fuses. Available in various amp ratings from 5A to 30A.",
    featured: true,
    specifications: {
      "Type": "Standard Blade (ATO)",
      "Ratings": "5A, 7.5A, 10A, 15A, 20A, 25A, 30A",
    },
  },
  {
    id: "fuse-2",
    name: "Mini Blade Fuse",
    slug: "mini-blade-fuse",
    category: "Fuse",
    description: "Mini automotive blade fuses for compact fuse boxes.",
    featured: true,
    specifications: {
      "Type": "Mini Blade (ATM)",
      "Ratings": "5A, 7.5A, 10A, 15A, 20A, 25A, 30A",
    },
  },
  {
    id: "fuse-3",
    name: "Slow Blow Female Fuse",
    slug: "slow-blow-female-fuse",
    category: "Fuse",
    description: "Slow blow fuse with female terminal connection.",
    specifications: {
      "Type": "Slow Blow",
      "Terminal": "Female",
    },
  },
  {
    id: "fuse-4",
    name: "Slow Blow Male Fuse",
    slug: "slow-blow-male-fuse",
    category: "Fuse",
    description: "Slow blow fuse with male terminal connection.",
    specifications: {
      "Type": "Slow Blow",
      "Terminal": "Male",
    },
  },
  {
    id: "fuse-5",
    name: "Glass Tube Fuse",
    slug: "glass-tube-fuse",
    category: "Fuse",
    description: "Classic glass tube fuses for older vehicles.",
    specifications: {
      "Type": "Glass Tube",
      "Applications": "Classic/Vintage vehicles",
    },
  },
];

// ============================================
// CAPS
// ============================================
const capsProducts: Product[] = [
  {
    id: "caps-1",
    name: "Terminal Caps",
    slug: "terminal-caps",
    category: "Caps",
    description: "Protective caps for electrical terminals. Prevents short circuits and corrosion.",
    featured: true,
    specifications: {
      "Material": "PVC/Rubber",
      "Applications": "Terminal protection",
    },
  },
  {
    id: "caps-2",
    name: "Battery Terminal Caps",
    slug: "battery-terminal-caps",
    category: "Caps",
    description: "Protective covers for battery terminals. Red for positive, black for negative.",
    featured: true,
    specifications: {
      "Colors": "Red (Positive), Black (Negative)",
      "Material": "PVC",
      "Applications": "Battery terminal protection",
    },
  },
  {
    id: "caps-3",
    name: "Rubber Boot Caps",
    slug: "rubber-boot-caps",
    category: "Caps",
    description: "Rubber boot caps for connector and terminal protection.",
    specifications: {
      "Material": "Rubber",
      "Applications": "Connector protection",
    },
  },
];

// ============================================
// RUBBER GROMMET
// ============================================
const grommetProducts: Product[] = [
  {
    id: "grommet-1",
    name: "Rubber Grommets",
    slug: "rubber-grommets",
    category: "Rubber Grommet",
    description: "Rubber grommets for wire protection through metal panels. Various sizes available.",
    featured: true,
    specifications: {
      "Material": "Rubber",
      "Applications": "Wire protection, Panel pass-through",
      "Sizes": "Various",
    },
  },
  {
    id: "grommet-2",
    name: "Firewall Grommets",
    slug: "firewall-grommets",
    category: "Rubber Grommet",
    description: "Large grommets for firewall wire pass-through.",
    specifications: {
      "Material": "Rubber",
      "Applications": "Firewall pass-through",
    },
  },
];

// ============================================
// PLASTIC COMPONENT
// ============================================
const plasticProducts: Product[] = [
  {
    id: "plastic-1",
    name: "Corrugated Pipe",
    slug: "corrugated-pipe",
    category: "Plastic Component",
    description: "Flexible corrugated conduit for wire protection. Available in various diameters.",
    featured: true,
    specifications: {
      "Material": "PP/PA",
      "Type": "Corrugated",
      "Applications": "Wire loom protection",
    },
  },
  {
    id: "plastic-2",
    name: "Flexible Polyamide Conduit",
    slug: "polyamide-conduit",
    category: "Plastic Component",
    description: "High-temperature resistant polyamide conduit for engine bay applications.",
    specifications: {
      "Material": "Polyamide (PA)",
      "Temperature": "High temperature resistant",
      "Applications": "Engine bay wiring",
    },
  },
  {
    id: "plastic-3",
    name: "Metric Gland with Lock Nut",
    slug: "metric-gland-locknut",
    category: "Plastic Component",
    description: "Metric cable glands with lock nuts for secure cable entry.",
    specifications: {
      "Type": "Metric Thread",
      "Includes": "Lock Nut",
      "Applications": "Cable entry points",
    },
  },
  {
    id: "plastic-4",
    name: "PG Gland with Lock Nut",
    slug: "pg-gland-locknut",
    category: "Plastic Component",
    description: "PG size cable glands with lock nuts.",
    specifications: {
      "Type": "PG Thread",
      "Includes": "Lock Nut",
      "Applications": "Cable entry points",
    },
  },
];

// ============================================
// SLEEVE
// ============================================
const sleeveProducts: Product[] = [
  {
    id: "sleeve-1",
    name: "Heat Shrink Sleeve",
    slug: "heat-shrink-sleeve",
    category: "Sleeve",
    description: "Heat shrinkable tubing for wire insulation and protection. Various colors and sizes.",
    featured: true,
    specifications: {
      "Type": "Heat Shrink",
      "Shrink Ratio": "2:1",
      "Colors": "Black, Red, Blue, Yellow, Green",
    },
  },
  {
    id: "sleeve-2",
    name: "Shine PVC Sleeve",
    slug: "shine-pvc-sleeve",
    category: "Sleeve",
    description: "Glossy PVC sleeving for wire identification and protection.",
    specifications: {
      "Type": "PVC",
      "Finish": "Glossy/Shine",
      "Applications": "Wire identification",
    },
  },
  {
    id: "sleeve-3",
    name: "Dull PVC Sleeve",
    slug: "dull-pvc-sleeve",
    category: "Sleeve",
    description: "Matte finish PVC sleeving for wire protection.",
    specifications: {
      "Type": "PVC",
      "Finish": "Matte/Dull",
      "Applications": "Wire protection",
    },
  },
];

// ============================================
// TAPE
// ============================================
const tapeProducts: Product[] = [
  {
    id: "tape-1",
    name: "PVC Electrical Tape",
    slug: "pvc-electrical-tape",
    category: "Tape",
    description: "High-quality PVC electrical insulation tape. Available in multiple colors.",
    featured: true,
    specifications: {
      "Material": "PVC",
      "Width": "19mm",
      "Colors": "Black, Red, Yellow, Blue, Green, White",
    },
  },
  {
    id: "tape-2",
    name: "Insulation Tape",
    slug: "insulation-tape",
    category: "Tape",
    description: "Heavy-duty insulation tape for automotive wiring.",
    specifications: {
      "Type": "Insulation",
      "Applications": "Wire insulation",
    },
  },
  {
    id: "tape-3",
    name: "Cotton Tape",
    slug: "cotton-tape",
    category: "Tape",
    description: "Cotton friction tape for harness wrapping. Provides abrasion resistance.",
    specifications: {
      "Material": "Cotton",
      "Applications": "Harness wrapping",
      "Feature": "Abrasion resistant",
    },
  },
  {
    id: "tape-4",
    name: "Fleece Tape",
    slug: "fleece-tape",
    category: "Tape",
    description: "Noise-dampening fleece tape for wire harness wrapping.",
    specifications: {
      "Material": "Fleece",
      "Feature": "Noise dampening",
      "Applications": "Interior harness",
    },
  },
];

// ============================================
// HOLDERS
// ============================================
const holderProducts: Product[] = [
  {
    id: "holder-1",
    name: "090 Series Sealed Holder",
    slug: "090-series-sealed-holder",
    category: "Holders",
    description: "Sealed connector holder for 090 series terminals. Water resistant.",
    specifications: {
      "Series": "090",
      "Type": "Sealed",
      "Feature": "Water resistant",
    },
  },
  {
    id: "holder-2",
    name: "090 Series Non-Sealed Holder",
    slug: "090-series-non-sealed-holder",
    category: "Holders",
    description: "Non-sealed connector holder for 090 series terminals.",
    specifications: {
      "Series": "090",
      "Type": "Non-Sealed",
    },
  },
  {
    id: "holder-3",
    name: "090 Water Proof Series Holder",
    slug: "090-waterproof-holder",
    category: "Holders",
    description: "Waterproof connector holder for 090 series. IP67 rated.",
    featured: true,
    specifications: {
      "Series": "090",
      "Type": "Waterproof",
      "Rating": "IP67",
    },
  },
  {
    id: "holder-4",
    name: "090 PBT Series Holder",
    slug: "090-pbt-holder",
    category: "Holders",
    description: "High-temperature PBT plastic holder for 090 series.",
    specifications: {
      "Series": "090",
      "Material": "PBT",
      "Feature": "High temperature resistant",
    },
  },
  {
    id: "holder-5",
    name: "0110 Series Holder",
    slug: "0110-series-holder",
    category: "Holders",
    description: "Connector holder for 0110 series (2.8mm) terminals.",
    specifications: {
      "Series": "0110 (2.8mm)",
    },
  },
  {
    id: "holder-6",
    name: "0250 Series Holder",
    slug: "0250-series-holder",
    category: "Holders",
    description: "Connector holder for 0250 series (6.3mm) terminals.",
    featured: true,
    specifications: {
      "Series": "0250 (6.3mm)",
    },
  },
  {
    id: "holder-7",
    name: "Special Holder",
    slug: "special-holder",
    category: "Holders",
    description: "Specialized connector holders for unique applications.",
    specifications: {
      "Type": "Special/Custom",
    },
  },
  {
    id: "holder-8",
    name: "Jointer Holder",
    slug: "jointer-holder",
    category: "Holders",
    description: "Holder for jointer/inline connections.",
    specifications: {
      "Type": "Jointer/Inline",
    },
  },
];

// ============================================
// CONNECTORS
// ============================================
const connectorProducts: Product[] = [
  {
    id: "conn-1",
    name: "Flasher & Relay Base Connector",
    slug: "flasher-relay-connector",
    category: "Connectors",
    description: "Base connector for flasher and relay mounting.",
    featured: true,
    specifications: {
      "Applications": "Flasher, Relay mounting",
    },
  },
  {
    id: "conn-2",
    name: "Head Lamp Connector",
    slug: "headlamp-connector",
    category: "Connectors",
    description: "H4/H7 headlamp connectors for bulb connection.",
    featured: true,
    specifications: {
      "Types": "H4, H7, H1",
      "Applications": "Headlamp bulb connection",
    },
  },
  {
    id: "conn-3",
    name: "Sensor Connector",
    slug: "sensor-connector",
    category: "Connectors",
    description: "Connectors for various automotive sensors.",
    specifications: {
      "Applications": "Temperature, Pressure, Speed sensors",
    },
  },
  {
    id: "conn-4",
    name: "Super Sealed Connector",
    slug: "super-sealed-connector",
    category: "Connectors",
    description: "High-grade sealed connectors for harsh environments.",
    specifications: {
      "Type": "Sealed",
      "Feature": "Waterproof, Dustproof",
    },
  },
  {
    id: "conn-5",
    name: "Single Fuse Connector",
    slug: "single-fuse-connector",
    category: "Connectors",
    description: "Inline single fuse holder connector.",
    specifications: {
      "Type": "Inline Fuse Holder",
      "Fuse Type": "Blade",
    },
  },
  {
    id: "conn-6",
    name: "Combination Connector",
    slug: "combination-connector",
    category: "Connectors",
    description: "Multi-purpose combination connectors.",
    specifications: {
      "Type": "Combination/Multi-purpose",
    },
  },
  {
    id: "conn-7",
    name: "Round Connector",
    slug: "round-connector",
    category: "Connectors",
    description: "Round DIN style connectors for automotive applications.",
    specifications: {
      "Type": "Round/DIN",
    },
  },
  {
    id: "conn-8",
    name: "ECM Connector",
    slug: "ecm-connector",
    category: "Connectors",
    description: "Engine Control Module (ECM) connectors for fuel injection systems.",
    featured: true,
    specifications: {
      "Applications": "ECM, ECU connections",
      "Pins": "Multiple configurations",
    },
  },
  {
    id: "conn-9",
    name: "JCB Connector",
    slug: "jcb-connector",
    category: "Connectors",
    description: "Heavy-duty connectors for JCB and earth moving equipment. Available in 9, 14, 16, 18, 21, 23, 29, 31, 32 pole configurations.",
    featured: true,
    specifications: {
      "Applications": "JCB, Earth Moving Equipment",
      "Poles": "9, 14, 16, 18, 21, 23, 29, 31, 32",
      "Wire": "4mm & 5mm Deluxe Wire",
    },
  },
];

// ============================================
// FUSE BOX
// ============================================
const fuseBoxProducts: Product[] = [
  {
    id: "fb-1",
    name: "Square Fuse Box",
    slug: "square-fuse-box",
    category: "Fuse Box",
    description: "Universal square fuse box for blade fuses.",
    specifications: {
      "Type": "Square",
      "Fuse Type": "Blade",
    },
  },
  {
    id: "fb-2",
    name: "Eicher Canter Fuse Box",
    slug: "eicher-canter-fuse-box",
    category: "Fuse Box",
    description: "Fuse box compatible with Eicher Canter trucks.",
    specifications: {
      "Compatible": "Eicher Canter",
    },
  },
  {
    id: "fb-3",
    name: "Ashok Leyland Fuse Box",
    slug: "ashok-leyland-fuse-box",
    category: "Fuse Box",
    description: "Fuse box for Ashok Leyland commercial vehicles.",
    specifications: {
      "Compatible": "Ashok Leyland",
    },
  },
  {
    id: "fb-4",
    name: "Maruti Fuse Box - Car Type",
    slug: "maruti-fuse-box-car",
    category: "Fuse Box",
    description: "Fuse box for Maruti cars.",
    featured: true,
    specifications: {
      "Compatible": "Maruti Cars",
      "Type": "Car Type",
    },
  },
  {
    id: "fb-5",
    name: "Maruti Fuse Box - Van Type",
    slug: "maruti-fuse-box-van",
    category: "Fuse Box",
    description: "Fuse box for Maruti Omni and vans.",
    specifications: {
      "Compatible": "Maruti Vans",
      "Type": "Van Type",
    },
  },
  {
    id: "fb-6",
    name: "Glass Fuse Box",
    slug: "glass-fuse-box",
    category: "Fuse Box",
    description: "Fuse box for glass tube fuses. Available in 6, 8, 10 pole configurations.",
    specifications: {
      "Fuse Type": "Glass Tube",
      "Poles": "6, 8, 10",
    },
  },
  {
    id: "fb-7",
    name: "JCB Fuse Box",
    slug: "jcb-fuse-box",
    category: "Fuse Box",
    description: "Heavy-duty fuse box for JCB machinery.",
    featured: true,
    specifications: {
      "Compatible": "JCB Equipment",
      "Type": "Heavy Duty",
    },
  },
  {
    id: "fb-8",
    name: "Tata Indica Fuse Box",
    slug: "tata-indica-fuse-box",
    category: "Fuse Box",
    description: "Universal Tata Indica Diesel fuse box with 60A fuse and deluxe wire.",
    specifications: {
      "Compatible": "Tata Indica Diesel",
      "Fuse Rating": "60A",
    },
  },
  {
    id: "fb-9",
    name: "Mahindra Bolero Fuse Box",
    slug: "mahindra-bolero-fuse-box",
    category: "Fuse Box",
    description: "Mini fuse box for Mahindra Bolero Camper with 4 relay configuration.",
    specifications: {
      "Compatible": "Mahindra Bolero Camper",
      "Relays": "4",
      "Points": "40",
    },
  },
];

// ============================================
// HEAD LIGHT RELAY WIRING
// ============================================
const headlightWiringProducts: Product[] = [
  {
    id: "hlw-1",
    name: "Head Light Wiring Without Relay",
    slug: "headlight-wiring-without-relay",
    category: "Head Light Relay Wiring",
    description: "Universal headlight wiring harness without relay. Direct connection setup.",
    partNumber: "SI2100",
    specifications: {
      "Type": "Without Relay",
      "Application": "Universal",
    },
  },
  {
    id: "hlw-2",
    name: "Head Light Wiring Without Relay - Bakelite Holder",
    slug: "headlight-wiring-bakelite",
    category: "Head Light Relay Wiring",
    description: "Headlight wiring with bakelite bulb holder for heat resistance.",
    partNumber: "SI2101",
    specifications: {
      "Type": "Without Relay",
      "Holder": "Bakelite",
    },
  },
  {
    id: "hlw-3",
    name: "Head Light Wiring - Extra Long Wire",
    slug: "headlight-wiring-extra-long",
    category: "Head Light Relay Wiring",
    description: "Extended length headlight wiring for larger vehicles.",
    partNumber: "SI2103",
    specifications: {
      "Type": "Extra Long",
      "Application": "Large vehicles",
    },
  },
  {
    id: "hlw-4",
    name: "Head Light Wiring With 12V Relay",
    slug: "headlight-wiring-with-relay",
    category: "Head Light Relay Wiring",
    description: "Universal headlight relay wiring kit with 12V relay. Improves light output and protects switches.",
    partNumber: "SI2100R",
    featured: true,
    specifications: {
      "Type": "With 12V Relay",
      "Application": "Universal",
      "Benefit": "Improved light output",
    },
  },
  {
    id: "hlw-5",
    name: "Head Light Wiring - H1/H7 Holder",
    slug: "headlight-wiring-h1-h7",
    category: "Head Light Relay Wiring",
    description: "Headlight wiring with H1/H7 bulb holders.",
    partNumber: "SI2109",
    specifications: {
      "Holder Type": "H1/H7",
      "Application": "Modern headlights",
    },
  },
  {
    id: "hlw-6",
    name: "Head Light Wiring - 60A Single Fuse",
    slug: "headlight-wiring-60a-fuse",
    category: "Head Light Relay Wiring",
    description: "Headlight wiring with 60 Amp single fuse protection.",
    partNumber: "SI2106",
    specifications: {
      "Fuse Rating": "60A",
      "Protection": "Single Fuse",
    },
  },
];

// ============================================
// COMBINED FEATURED PRODUCTS
// ============================================
export const featuredProducts: Product[] = [
  wireProducts[0],  // Gold Auto Cables
  wireProducts[7],  // OE Battery Cables
  brassTerminalProducts[0],  // Ring Terminal
  brassTerminalProducts[8],  // 090 Series
  brassTerminalProducts[14], // 0250 Series
  brassTerminalProducts[18], // Brass Battery Terminal
  batteryCableSetProducts[3], // Maruti Car Cable Set
  batteryCableSetProducts[5], // Jumper Cable Set
  switchProducts[0], // Push Pull Switch
  flasherProducts[0], // Electronic Flasher
  relayProducts[3], // Head Light Relay
  fuseProducts[0], // Standard Blade Fuse
  capsProducts[1], // Battery Terminal Caps
  plasticProducts[0], // Corrugated Pipe
  sleeveProducts[0], // Heat Shrink Sleeve
  tapeProducts[0], // PVC Electrical Tape
  holderProducts[2], // 090 Waterproof Holder
  connectorProducts[1], // Head Lamp Connector
  connectorProducts[8], // JCB Connector
  fuseBoxProducts[3], // Maruti Fuse Box
  headlightWiringProducts[3], // Headlight Wiring with Relay
];

// ============================================
// ALL PRODUCTS BY CATEGORY
// ============================================
export const allProducts: Product[] = [
  ...wireProducts,
  ...brassTerminalProducts,
  ...batteryCableSetProducts,
  ...switchProducts,
  ...flasherProducts,
  ...relayProducts,
  ...tunerProducts,
  ...fuseProducts,
  ...capsProducts,
  ...grommetProducts,
  ...plasticProducts,
  ...sleeveProducts,
  ...tapeProducts,
  ...holderProducts,
  ...connectorProducts,
  ...fuseBoxProducts,
  ...headlightWiringProducts,
];

// ============================================
// PRODUCT CATEGORIES
// ============================================
export const productCategories: ProductCategory[] = [
  {
    id: "wire-cables",
    name: "Wire & Cables",
    slug: "wire-cables",
    description: "High-quality automotive wires and cables including auto cables, battery cables, and speaker wires.",
    icon: "🔌",
    products: wireProducts,
  },
  {
    id: "brass-terminal",
    name: "Brass Terminals",
    slug: "brass-terminal",
    description: "Precision-engineered brass terminals including Ring, Fork, Bullet, and various series terminals.",
    icon: "⚡",
    products: brassTerminalProducts,
    subcategories: [
      { id: "ring-series", name: "Ring Series", slug: "ring-series", description: "Ring terminals for secure connections", products: brassTerminalProducts.filter(p => p.subcategory === "Ring Series") },
      { id: "fork-series", name: "Fork Series", slug: "fork-series", description: "Fork/spade terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Fork Series") },
      { id: "bullet-series", name: "Bullet Series", slug: "bullet-series", description: "Bullet connectors", products: brassTerminalProducts.filter(p => p.subcategory === "Bullet Series") },
      { id: "090-series", name: "090 Series", slug: "090-series", description: "090 (2.3mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "090 Series") },
      { id: "0250-series", name: "0250 Series", slug: "0250-series", description: "0250 (6.3mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0250 Series") },
      { id: "brass-lugs", name: "Brass Lugs", slug: "brass-lugs", description: "Cable lugs", products: brassTerminalProducts.filter(p => p.subcategory === "Brass Lugs") },
      { id: "battery-terminals", name: "Battery Terminals", slug: "battery-terminals", description: "Battery terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Battery Terminals") },
    ],
  },
  {
    id: "battery-cable-set",
    name: "Battery Cable Sets",
    slug: "battery-cable-set",
    description: "Complete battery cable sets, jumper cables, and charging accessories.",
    icon: "🔋",
    products: batteryCableSetProducts,
  },
  {
    id: "switches",
    name: "Switches",
    slug: "switches",
    description: "Automotive switches including push-pull and rotary switches.",
    icon: "🎛️",
    products: switchProducts,
  },
  {
    id: "flasher",
    name: "Flashers",
    slug: "flasher",
    description: "Electronic and musical flashers for turn signal indication.",
    icon: "💡",
    products: flasherProducts,
  },
  {
    id: "relay",
    name: "Relays",
    slug: "relay",
    description: "Automotive relays for 2-wheelers and 4-wheelers.",
    icon: "⚙️",
    products: relayProducts,
  },
  {
    id: "tuner",
    name: "Tuners",
    slug: "tuner",
    description: "Electrical distribution tuners in 4, 7, and 8 way configurations.",
    icon: "🔧",
    products: tunerProducts,
  },
  {
    id: "fuse",
    name: "Fuses",
    slug: "fuse",
    description: "Circuit protection fuses including blade and glass tube types.",
    icon: "🔌",
    products: fuseProducts,
  },
  {
    id: "caps",
    name: "Caps & Covers",
    slug: "caps",
    description: "Protective caps for terminals and battery connections.",
    icon: "🧢",
    products: capsProducts,
  },
  {
    id: "rubber-grommet",
    name: "Rubber Grommets",
    slug: "rubber-grommet",
    description: "Wire protection grommets for panel pass-through.",
    icon: "⭕",
    products: grommetProducts,
  },
  {
    id: "plastic-component",
    name: "Plastic Components",
    slug: "plastic-component",
    description: "Corrugated pipes, conduits, and cable glands.",
    icon: "🧩",
    products: plasticProducts,
  },
  {
    id: "sleeve",
    name: "Sleeves",
    slug: "sleeve",
    description: "Heat shrink and PVC sleeves for wire protection.",
    icon: "📦",
    products: sleeveProducts,
  },
  {
    id: "tape",
    name: "Tapes",
    slug: "tape",
    description: "Electrical and insulation tapes for automotive applications.",
    icon: "🎞️",
    products: tapeProducts,
  },
  {
    id: "holders",
    name: "Holders",
    slug: "holders",
    description: "Connector holders for various terminal series.",
    icon: "📎",
    products: holderProducts,
  },
  {
    id: "connectors",
    name: "Connectors",
    slug: "connectors",
    description: "Automotive connectors including sensor, ECM, and JCB connectors.",
    icon: "🔗",
    products: connectorProducts,
  },
  {
    id: "fuse-box",
    name: "Fuse Boxes",
    slug: "fuse-box",
    description: "Fuse boxes for various vehicle makes including Maruti, Tata, Mahindra, and JCB.",
    icon: "📦",
    products: fuseBoxProducts,
  },
  {
    id: "head-light-relay-wiring",
    name: "Head Light Relay Wiring",
    slug: "head-light-relay-wiring",
    description: "Complete headlight wiring harnesses with and without relay.",
    icon: "💡",
    products: headlightWiringProducts,
  },
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(categorySlug: string): Product[] {
  const category = productCategories.find((cat) => cat.slug === categorySlug);
  return category?.products || [];
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug);
}

// Total product count
export const totalProductCount = allProducts.length;
