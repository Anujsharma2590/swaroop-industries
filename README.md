# Saroop Industries - Modern Website Redesign

A modern, scalable Next.js website redesign for Saroop Industries with TypeScript, SCSS modules, and modern UI components.

## Features

- ✨ **Modern Design**: Clean, professional design with smooth animations
- 🚀 **Next.js 14**: Built with Next.js 14 App Router for optimal performance
- 📱 **Responsive**: Fully responsive design for all devices
- 🎨 **SCSS Modules**: Scoped styles with SCSS modules
- 🧩 **Component Library**: Uses Shadcn UI, MUI, Swiper, and Framer Motion
- 📊 **Config-Based Data**: Easy-to-maintain configuration-based data structure
- 🔍 **SEO Optimized**: Proper metadata and SEO setup
- ⚡ **Fast Performance**: Optimized for speed and performance

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: SCSS Modules + Tailwind CSS
- **UI Components**: Shadcn UI, Material UI
- **Animations**: Framer Motion
- **Carousels**: Swiper
- **Icons**: Lucide React

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── products/            # Products pages
│   ├── gallery/             # Gallery page
│   ├── contact/             # Contact page
│   └── inquiry/             # Inquiry page
├── components/              # React components
│   ├── layout/              # Layout components (Header, Footer)
│   ├── sections/            # Page sections
│   ├── products/            # Product components
│   └── ui/                  # UI components (Shadcn)
├── config/                  # Configuration files
│   ├── site.config.ts       # Site configuration
│   ├── navigation.config.ts # Navigation structure
│   ├── products.config.ts   # Products data
│   └── testimonials.config.ts # Testimonials data
├── lib/                     # Utility functions
└── styles/                  # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

All site data is stored in configuration files in the `config/` directory:

- `config/site.config.ts`: Site-wide settings (name, contact info, etc.)
- `config/navigation.config.ts`: Navigation menu structure
- `config/products.config.ts`: Products and categories
- `config/testimonials.config.ts`: Customer testimonials

These can be easily migrated to a database in the future while maintaining the same structure.

## Pages

- **Home** (`/`): Hero section, features, products grid, testimonials
- **About** (`/about`): Company information, mission, vision, values
- **Products** (`/products`): Product categories and listings
- **Gallery** (`/gallery`): Image gallery with filtering
- **Contact** (`/contact`): Contact form and information
- **Inquiry** (`/inquiry`): Product inquiry form

## Customization

### Styling

- Global styles: `app/globals.scss`
- Component styles: Component-specific `.module.scss` files
- Theme colors: Configured in `tailwind.config.ts` and CSS variables

### Content

Update content in the `config/` directory files. The structure is designed to be easily migrated to a CMS or database later.

## Build for Production

```bash
npm run build
npm start
```

## Features Implementation

- ✅ Responsive navigation with dropdown menus
- ✅ Product categories and filtering
- ✅ Image gallery with category filtering
- ✅ Contact and inquiry forms
- ✅ Testimonials carousel
- ✅ Smooth animations with Framer Motion
- ✅ Mobile-friendly design
- ✅ SEO optimization

## Future Enhancements

- Connect forms to backend API
- Integrate with CMS for content management
- Add product search functionality
- Implement shopping cart (if needed)
- Add multi-language support
- Integrate with analytics

## License

Copyright © 2024 Saroop Industries. All Rights Reserved.