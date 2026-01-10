"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Award, TrendingUp } from "lucide-react";
import styles from "./FeaturesSection.module.scss";

const features = [
  {
    icon: Zap,
    title: "BRASS TERMINAL",
    description: "The use of premium materials guarantees longevity and reliability in diverse environments.",
  },
  {
    icon: Shield,
    title: "Battery Cable",
    description: "Designed to securely hold a variety of devices and accessories, our battery cable provides a convenient and safe solution.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "We maintain the highest quality standards in all our products, ensuring customer satisfaction.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Continuously innovating to bring the best solutions for the automotive industry.",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={styles.features}>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.description}>
            We provide innovative automotive solutions with quality and reliability at the core
          </p>
        </motion.div>
        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.featureCard}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}