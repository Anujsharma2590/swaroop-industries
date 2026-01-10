"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./page.module.scss";

// Placeholder gallery images
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Gallery Image ${i + 1}`,
  category: i % 3 === 0 ? "Products" : i % 3 === 1 ? "Factory" : "Events",
}));

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Products", "Factory", "Events"];

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className={styles.galleryPage}>
      <section className={styles.hero}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>Gallery</h1>
            <p className={styles.description}>
              Explore our products, facilities, and events
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container mx-auto px-4 py-16">
          <div className={styles.filters}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.galleryGrid}>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={styles.galleryItem}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                    <span>{image.title}</span>
                  </div>
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageTitle}>{image.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}