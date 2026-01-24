"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/config/gallery.config";
import styles from "./page.module.scss";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentImageIndex = lightboxImage !== null 
    ? filteredImages.findIndex(img => img.id === lightboxImage)
    : -1;

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setLightboxImage(filteredImages[currentImageIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[currentImageIndex + 1].id);
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrevious();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
    
    // Check for pull down to close
    if (info.offset.y > 100) {
      setLightboxImage(null);
    }
  };

  const currentImage = filteredImages[currentImageIndex];

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, currentImageIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);

  return (
    <div className={styles.galleryPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={styles.heroContent}
          >
            <span className={styles.badge}>Gallery</span>
            <h1 className={styles.title}>Our Visual Story</h1>
            <p className={styles.description}>
              Explore our products, facilities, and the team behind our success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className="container mx-auto px-4 py-12 sm:py-16">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.filters}
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
              >
                {category}
                {category !== "All" && (
                  <span className={styles.count}>
                    {galleryImages.filter(img => img.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className={styles.galleryItem}
                  onClick={() => setLightboxImage(image.id)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.overlayContent}>
                        <ZoomIn className={styles.zoomIcon} />
                        <h3 className={styles.imageTitle}>{image.title}</h3>
                        {image.description && (
                          <p className={styles.imageDescription}>{image.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className={styles.closeButton}
              onClick={() => setLightboxImage(null)}
            >
              <X />
            </button>

            {currentImageIndex > 0 && (
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft />
              </button>
            )}

            {currentImageIndex < filteredImages.length - 1 && (
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight />
              </button>
            )}

            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {filteredImages.length}
            </div>

            <motion.div
              key={currentImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={currentImage.imageUrl}
                  alt={currentImage.title}
                  fill
                  sizes="90vw"
                  className={styles.lightboxImage}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}