"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/config/products.config";
import { testimonials } from "@/config/testimonials.config";
import { companyInfo, siteConfig } from "@/config/site.config";
import HeroSection from "@/components/sections/HeroSection";
import ProductGrid from "@/components/sections/ProductGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductGrid products={featuredProducts} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}