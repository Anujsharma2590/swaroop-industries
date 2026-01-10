"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { navigationConfig } from "@/config/navigation.config";
import styles from "./Footer.module.scss";

export default function Footer() {
  const productCategories = navigationConfig.find(item => item.title === "Products")?.children || [];

  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 py-12">
        <div className={styles.footerGrid}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About Us</h3>
            <p className={styles.footerDescription}>
              With our futuristic vision, we at Saroop, continuously strive to bring forth a product range that is revolutionary in the automotive industry.
            </p>
            <div className={styles.socialLinks}>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Our Products</h3>
            <ul className={styles.footerLinks}>
              {productCategories.slice(0, 9).map((category) => (
                <li key={category.href}>
                  <Link href={category.href}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              {navigationConfig.filter(item => !item.children).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Info</h3>
            <ul className={styles.contactInfo}>
              <li>
                <MapPin className="h-5 w-5" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <Phone className="h-5 w-5" />
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <Mail className="h-5 w-5" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p>
            Copyright ©{new Date().getFullYear()} {siteConfig.name}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}