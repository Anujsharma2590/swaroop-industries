import { productCategories } from './products.config';

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Products",
    href: "/products",
    children: productCategories.map(cat => ({
      title: cat.name,
      href: `/products/${cat.slug}`,
      description: cat.description,
    })),
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];