"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/config/products.config";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import styles from "./ProductGrid.module.scss";

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
  showViewAll?: boolean;
}

export default function ProductGrid({ 
  products, 
  title = "Our Products",
  description = "Discover our wide range of automotive products",
  showViewAll = true 
}: ProductGridProps) {
  return (
    <section className={styles.productGrid}>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </motion.div>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                    <span>{product.name}</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  <Button variant="ghost" className={styles.viewButton}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.viewAll}
          >
            <Button size="lg" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}