"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { ZoomIn } from "lucide-react";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/config/gallery.config";
import styles from "./page.module.scss";


export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const filteredImages = useMemo(() => 
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory),
    [selectedCategory]
  );

  const slides = useMemo(() => 
    filteredImages.map(img => ({
      src: img.imageUrl,
      alt: img.title,
      width: 1200,
      height: 900,
      title: img.title,
      description: img.description,
    })),
    [filteredImages]
  );

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
        {/* Category Filters */}
        <div className={styles.filtersWrapper}>
          <div className="container mx-auto px-4">
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
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 sm:pb-16">
          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.galleryItem}
                onClick={() => setLightboxIndex(index)}
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
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Thumbnails, Zoom, Fullscreen, Captions]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 2,
          borderRadius: 8,
          padding: 0,
          gap: 16,
          showToggle: true,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
        carousel={{
          finite: false,
          preload: 2,
        }}
        animation={{
          fade: 250,
          swipe: 250,
        }}
      />
    </div>
  );
}