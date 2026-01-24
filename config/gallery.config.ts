export interface GalleryImage {
  id: number;
  title: string;
  category: "Products" | "Factory" | "Events" | "Team";
  imageUrl: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Automotive Components",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    description: "High-quality automotive parts"
  },
  {
    id: 2,
    title: "Engine Parts",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    description: "Precision engineered components"
  },
  {
    id: 3,
    title: "Brake Systems",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    description: "Advanced brake technology"
  },
  {
    id: 4,
    title: "Suspension Parts",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    description: "Performance suspension systems"
  },
  
  {
    id: 5,
    title: "Manufacturing Facility",
    category: "Factory",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee67e7bf5e1c?w=800&q=80",
    description: "State-of-the-art production line"
  },
  {
    id: 6,
    title: "Quality Control",
    category: "Factory",
    imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    description: "Rigorous quality testing"
  },
  {
    id: 7,
    title: "Assembly Line",
    category: "Factory",
    imageUrl: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    description: "Efficient manufacturing process"
  },
  {
    id: 8,
    title: "Warehouse",
    category: "Factory",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    description: "Modern storage facility"
  },
  
  {
    id: 9,
    title: "Product Launch",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "New product unveiling"
  },
  {
    id: 10,
    title: "Industry Conference",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    description: "Automotive industry exhibition"
  },
  {
    id: 11,
    title: "Team Celebration",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    description: "Company milestone celebration"
  },
  
  {
    id: 12,
    title: "Engineering Team",
    category: "Team",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    description: "Our skilled engineers"
  },
  {
    id: 13,
    title: "Production Team",
    category: "Team",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    description: "Dedicated production staff"
  },
  {
    id: 14,
    title: "Quality Assurance",
    category: "Team",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    description: "Quality control specialists"
  },
  {
    id: 15,
    title: "Management Team",
    category: "Team",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    description: "Leadership and vision"
  },
];

export const galleryCategories = ["All", "Products", "Factory", "Events", "Team"] as const;
export type GalleryCategory = typeof galleryCategories[number];


// TODO: Add more images and categories and chnage gallery.png to actual images