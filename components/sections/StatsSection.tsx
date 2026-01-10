"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { companyInfo } from "@/config/site.config";
import styles from "./StatsSection.module.scss";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: companyInfo.experience,
      label: "Years of Experience",
      suffix: "+",
    },
    {
      value: "500",
      label: "Products",
      suffix: "+",
    },
    {
      value: "1000",
      label: "Happy Customers",
      suffix: "+",
    },
    {
      value: "50",
      label: "Countries",
      suffix: "+",
    },
  ];

  return (
    <section ref={ref} className={styles.stats}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.statCard}
            >
              <div className={styles.statValue}>
                {stat.value}
                {stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}