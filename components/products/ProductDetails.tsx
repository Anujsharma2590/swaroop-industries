"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Product } from "@/config/products.config";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import styles from "./ProductDetails.module.scss";

interface ProductDetailsProps {
  categoryName: string;
  categoryDescription: string;
  products: Product[];
}

export default function ProductDetails({ categoryName, categoryDescription, products }: ProductDetailsProps) {
  return (
    <div className={styles.productDetails}>
      <section className={styles.header}>
        <div className="container mx-auto px-4 py-12">
          <Button variant="ghost" asChild className={styles.backButton}>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>{categoryName}</h1>
            <p className={styles.description}>{categoryDescription}</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.products}>
        <div className="container mx-auto px-4 py-16">
          {products.length > 0 ? (
            <div className={styles.productGrid}>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.productCard}
                >
                  <div className={styles.productImage}>
                    <span>{product.name}</span>
                  </div>
                  <div className={styles.productContent}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={styles.noProducts}>
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}