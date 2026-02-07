import { Product } from '../../types';

export const bulletSeriesProducts: Product[] = [
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
    tags: ["terminal", "bullet", "male", "brass"],
    applications: ["Automotive", "Electrical Connections"],
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
    tags: ["terminal", "bullet", "female", "brass"],
    applications: ["Automotive", "Electrical Connections"],
  },
];
