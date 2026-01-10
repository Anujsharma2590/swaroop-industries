"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>
              Automotive Solutions: Driving Innovation, Powering Performance
            </h1>
            <p className={styles.heroDescription}>
              With our futuristic vision, we at Saroop, continuously strive to bring forth a product range that is revolutionary in the automotive industry.
            </p>
            <div className={styles.heroButtons}>
              <Button size="lg" className={styles.primaryButton} asChild>
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className={styles.secondaryButton} asChild>
                <Link href="/contact">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.heroImage}
          >
            <div className={styles.imagePlaceholder}>
              <span>Hero Image</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}