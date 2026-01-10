"use client";

import { notFound } from "next/navigation";
import { productCategories, featuredProducts } from "@/config/products.config";
import { navigationConfig } from "@/config/navigation.config";
import ProductDetails from "@/components/products/ProductDetails";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductCategoryPage({ params }: PageProps) {
  const { slug } = params;
  
  // Find category from navigation config or product categories
  const allCategories = [...productCategories];
  const category = allCategories.find((cat) => cat.slug === slug);
  
  // Check in navigation config for subcategories
  const productsNav = navigationConfig.find((item) => item.title === "Products");
  const findCategoryInNav = (items: any[]): any => {
    for (const item of items) {
      if (item.href?.includes(slug)) {
        return item;
      }
      if (item.children) {
        const found = findCategoryInNav(item.children);
        if (found) return found;
      }
    }
    return null;
  };
  
  const navItem = productsNav ? findCategoryInNav(productsNav.children || []) : null;
  
  // Get products for this category
  const categoryProducts = featuredProducts.filter(
    (product) => product.category.toLowerCase().includes(category?.name.toLowerCase() || "") ||
                 product.slug.includes(slug)
  );

  if (!category && !navItem) {
    notFound();
  }

  const displayName = category?.name || navItem?.title || "";
  const displayDescription = category?.description || "";

  return (
    <ProductDetails
      categoryName={displayName}
      categoryDescription={displayDescription}
      products={categoryProducts.length > 0 ? categoryProducts : featuredProducts.slice(0, 6)}
    />
  );
}