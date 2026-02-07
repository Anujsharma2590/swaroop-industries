import { Product } from '../../types';

export const batteryTerminalsProducts: Product[] = [
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
    tags: ["terminal", "battery", "brass"],
    applications: ["Automotive", "Battery"],
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
    tags: ["terminal", "battery", "lead"],
    applications: ["Automotive", "Heavy Duty Battery"],
  },
];
