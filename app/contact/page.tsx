"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
              Get in touch with us for any inquiries or support
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="container mx-auto px-4 py-20">
          <div className={styles.contactGrid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.contactInfo}
            >
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.sectionDescription}>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <h3>Address</h3>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <h3>Phone</h3>
                    <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <h3>Email</h3>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Clock className={styles.icon} />
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.contactForm}
            >
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className={styles.submitButton}>
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}