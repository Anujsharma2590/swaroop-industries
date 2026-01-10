"use client";

import { motion } from "framer-motion";
import { companyInfo, siteConfig } from "@/config/site.config";
import { Award, Target, Eye, TrendingUp } from "lucide-react";
import styles from "./page.module.scss";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: companyInfo.mission,
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: companyInfo.vision,
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest quality standards in all our products, ensuring customer satisfaction and reliability.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously innovating to bring the best solutions for the automotive industry.",
    },
  ];

  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.subtitle}>
              Driving Innovation, Powering Performance
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container mx-auto px-4 py-20">
          <div className={styles.aboutGrid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.aboutContent}
            >
              <h2 className={styles.sectionTitle}>Depending on your needs</h2>
              <p className={styles.description}>{companyInfo.about}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.aboutImage}
            >
              <div className={styles.imagePlaceholder}>
                <span>About Us Image</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.valuesHeader}
          >
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.description}>
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.valueCard}
                >
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container mx-auto px-4 py-20">
          <div className={styles.statsGrid}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.statItem}
            >
              <div className={styles.statValue}>{companyInfo.experience}+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.statItem}
            >
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Products</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.statItem}
            >
              <div className={styles.statValue}>1000+</div>
              <div className={styles.statLabel}>Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.statItem}
            >
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Countries</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}