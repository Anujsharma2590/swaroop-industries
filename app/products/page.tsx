"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { productCategories, featuredProducts } from "@/config/products.config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import styles from "./page.module.scss";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = productCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.productsPage}>
      <section className={styles.hero}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>Our Products</h1>
            <p className={styles.description}>
              Discover our comprehensive range of automotive products designed for quality and performance
            </p>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className="container mx-auto px-4 py-16">
          <h2 className={styles.sectionTitle}>Product Categories</h2>
          <div className={styles.categoryGrid}>
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${category.slug}`} className={styles.categoryCard}>
                  <div className={styles.categoryImage}>
                    <span>{category.name}</span>
                  </div>
                  <div className={styles.categoryContent}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                    <Button variant="ghost" className={styles.viewButton}>
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featuredProducts}>
        <div className="container mx-auto px-4 py-16">
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.productGrid}>
            {featuredProducts.slice(0, 8).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${product.slug}`} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <span>{product.name}</span>
                  </div>
                  <div className={styles.productContent}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}