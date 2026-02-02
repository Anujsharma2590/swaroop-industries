export const siteConfig = {
  /* ------------------ BASIC ------------------ */
  name: "Saroop Industries",
  shortName: "Saroop",
  description: "Automotive Solutions: Driving Innovation, Powering Performance",
  url: "https://saroopindustries.com",
  locale: "en-IN",
  country: "India",
  defaultLanguage: "en",

  /* ------------------ BRANDING ------------------ */
  logo: "/logo.png",               // place in /public
  ogImage: "/og-image.jpg",        // 1200x630
  themeColor: "#0f172a",

  /* ------------------ CONTACT ------------------ */
  email: "saroopindustries@gmail.com",
  supportEmail: "saroopindustries@gmail.com",
  phone: ["+91-9810095059", "+91-9911069000", "+91-9310404500"],
  address:
    "B-15, Mangolpuri Industrial Area Phase-II, New Delhi- 110034, India",
  mapLink:
    "https://www.google.com/maps?q=B-15+Mangolpuri+Industrial+Area+Phase-II+New+Delhi",

  /* ------------------ BUSINESS ------------------ */
  yearEstablished: 2015,
  experience: "10+",
  workingHours: "Mon–Sat, 9:00 AM – 6:00 PM IST",

  brochureUrl: "/Catalouge.pdf",

  /* ------------------ SEO KEYWORDS ------------------ */
  keywords: [
    "automotive electrical parts",
    "fuse box manufacturer",
    "wiring harness manufacturer",
    "glass fuse box",
    "square fuse box",
    "brass terminals",
    "battery cables",
    "automotive components india",
    "Saroop Industries",
  ],

  /* ------------------ SOCIAL ------------------ */
  social: {
    facebook: "https://www.facebook.com/saroopindustries",
    instagram: "https://www.instagram.com/saroopindustries",
    linkedin: "https://www.linkedin.com/company/saroop-industries/",
  },

  /* ------------------ BRANCH OFFICE ------------------ */
  branchOffice: {
    address: "579 Candlestick Circle, Mississauga, Ontario, Canada, L4Z0B3",
    phone: "+1 (647) 568-3866",
    email: "saroopindustries.ca@gmail.com",
    country: "Canada",
  },
} as const;

/* ------------------ COMPANY INFO ------------------ */
export const companyInfo = {
  mission:
    "Develop a robust global supply chain to ensure efficient production and distribution for the automotive industry.",
  vision:
    "Commitment to innovation, cutting-edge technology, and staying at the forefront of industry advancements.",
  about:
    "After a successful launch in 2015, Saroop Industries expanded into a comprehensive automotive solutions provider. With state-of-the-art facilities and world-class manufacturing capabilities, Saroop delivers competitive, cost-effective, and reliable products for the global automotive market.",
} as const;
