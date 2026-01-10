export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  description: string;
  image?: string;
  featured?: boolean;
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
  subcategories?: ProductCategory[];
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "BRASS TERMINAL",
    slug: "brass-terminal",
    category: "Terminals",
    description: "Our brass terminals are precision-engineered using high-quality brass, ensuring excellent conductivity and corrosion resistance.",
    featured: true,
    image: "/images/products/brass-terminal.jpg",
  },
  {
    id: "2",
    name: "BATTERY CABLE SET",
    slug: "battery-cable-set",
    category: "Cables",
    description: "Designed to securely hold a variety of devices and accessories, our battery cable provides a convenient and safe solution.",
    featured: true,
    image: "/images/products/battery-cable.jpg",
  },
  {
    id: "3",
    name: "RELAY & FUSE HOLDER",
    slug: "relay-fuse-holder",
    category: "Electronics",
    description: "Our relay & Fuse are versatile and adaptable, suitable for a wide range of applications, including automotive, industrial, and electronic systems.",
    featured: true,
    image: "/images/products/relay-fuse.jpg",
  },
  {
    id: "4",
    name: "TAPE",
    slug: "tape",
    category: "Accessories",
    description: "High-quality tapes for various automotive applications.",
    featured: true,
    image: "/images/products/tape.jpg",
  },
  {
    id: "5",
    name: "SWITCHES",
    slug: "switches",
    category: "Electronics",
    description: "Reliable switches for automotive applications.",
    featured: true,
    image: "/images/products/switches.jpg",
  },
  {
    id: "6",
    name: "RING SERIES TERMINALS",
    slug: "ring-series-terminals",
    category: "Terminals",
    description: "Premium ring terminals for secure connections.",
    featured: true,
    image: "/images/products/ring-terminals.jpg",
  },
  {
    id: "7",
    name: "PLASTIC COMPONENT",
    slug: "plastic-component",
    category: "Components",
    description: "Durable plastic components for automotive use.",
    featured: true,
    image: "/images/products/plastic.jpg",
  },
  {
    id: "8",
    name: "HOLDERS",
    slug: "holders",
    category: "Accessories",
    description: "Secure holders for various components.",
    featured: true,
    image: "/images/products/holders.jpg",
  },
  {
    id: "9",
    name: "HEAD LIGHT RELAY WIRING",
    slug: "head-light-relay-wiring",
    category: "Wiring",
    description: "Professional head light relay wiring solutions.",
    featured: true,
    image: "/images/products/headlight-wiring.jpg",
  },
  {
    id: "10",
    name: "FUSE BOX",
    slug: "fuse-box",
    category: "Electronics",
    description: "Protective fuse boxes for vehicle electrical systems.",
    featured: true,
    image: "/images/products/fuse-box.jpg",
  },
  {
    id: "11",
    name: "FUSE",
    slug: "fuse",
    category: "Electronics",
    description: "Reliable fuses for circuit protection.",
    featured: true,
    image: "/images/products/fuse.jpg",
  },
  {
    id: "12",
    name: "FLASHER",
    slug: "flasher",
    category: "Electronics",
    description: "Electronic and musical flashers for vehicles.",
    featured: true,
    image: "/images/products/flasher.jpg",
  },
  {
    id: "13",
    name: "CAPS",
    slug: "caps",
    category: "Accessories",
    description: "Protective caps for terminals and connections.",
    featured: true,
    image: "/images/products/caps.jpg",
  },
  {
    id: "14",
    name: "BRASS TERMINAL",
    slug: "brass-terminal-main",
    category: "Terminals",
    description: "The use of premium materials guarantees longevity and reliability in diverse environments.",
    featured: true,
    image: "/images/products/brass-terminal-main.jpg",
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: "brass-terminal",
    name: "BRASS TERMINAL",
    slug: "brass-terminal",
    description: "Precision-engineered brass terminals with excellent conductivity",
    image: "/images/categories/brass-terminal.jpg",
    products: [],
  },
  {
    id: "battery-cable-set",
    name: "BATTERY CABLE SET",
    slug: "battery-cable-set",
    description: "Reliable battery cable sets for automotive applications",
    image: "/images/categories/battery-cable.jpg",
    products: [],
  },
  {
    id: "wire",
    name: "WIRE",
    slug: "wire",
    description: "High-quality wires for various applications",
    image: "/images/categories/wire.jpg",
    products: [],
  },
  {
    id: "switches",
    name: "SWITCHES",
    slug: "switches",
    description: "Durable switches for automotive systems",
    image: "/images/categories/switches.jpg",
    products: [],
  },
  {
    id: "flasher",
    name: "FLASHER",
    slug: "flasher",
    description: "Electronic and musical flashers",
    image: "/images/categories/flasher.jpg",
    products: [],
  },
  {
    id: "relay",
    name: "RELAY",
    slug: "relay",
    description: "Reliable relays for automotive electrical systems",
    image: "/images/categories/relay.jpg",
    products: [],
  },
  {
    id: "tuner",
    name: "TUNER",
    slug: "tuner",
    description: "Professional tuners for electrical connections",
    image: "/images/categories/tuner.jpg",
    products: [],
  },
  {
    id: "fuse",
    name: "FUSE",
    slug: "fuse",
    description: "Circuit protection fuses",
    image: "/images/categories/fuse.jpg",
    products: [],
  },
  {
    id: "caps",
    name: "CAPS",
    slug: "caps",
    description: "Protective caps and covers",
    image: "/images/categories/caps.jpg",
    products: [],
  },
  {
    id: "rubber-grommet",
    name: "RUBBER GROMMET",
    slug: "rubber-grommet",
    description: "Rubber grommets for wire protection",
    image: "/images/categories/grommet.jpg",
    products: [],
  },
  {
    id: "plastic-component",
    name: "PLASTIC COMPONENT",
    slug: "plastic-component",
    description: "Durable plastic components",
    image: "/images/categories/plastic.jpg",
    products: [],
  },
  {
    id: "sleeve",
    name: "SLEEVE",
    slug: "sleeve",
    description: "Protective sleeves for wires",
    image: "/images/categories/sleeve.jpg",
    products: [],
  },
  {
    id: "tape",
    name: "TAPE",
    slug: "tape",
    description: "High-quality tapes",
    image: "/images/categories/tape.jpg",
    products: [],
  },
  {
    id: "holders",
    name: "HOLDERS",
    slug: "holders",
    description: "Component holders and mounts",
    image: "/images/categories/holders.jpg",
    products: [],
  },
  {
    id: "connectors",
    name: "CONNECTORS",
    slug: "connectors",
    description: "Professional electrical connectors",
    image: "/images/categories/connectors.jpg",
    products: [],
  },
  {
    id: "fuse-box",
    name: "FUSE BOX",
    slug: "fuse-box",
    description: "Protective fuse boxes",
    image: "/images/categories/fuse-box.jpg",
    products: [],
  },
  {
    id: "head-light-relay-wiring",
    name: "HEAD LIGHT RELAY WIRING",
    slug: "head-light-relay-wiring",
    description: "Professional headlight wiring solutions",
    image: "/images/categories/headlight-wiring.jpg",
    products: [],
  },
];