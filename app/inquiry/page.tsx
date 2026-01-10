"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import styles from "./page.module.scss";

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    productInterest: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Inquiry submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      productInterest: "",
      quantity: "",
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
    <div className={styles.inquiryPage}>
      <section className={styles.hero}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1 className={styles.title}>Send Inquiry</h1>
            <p className={styles.description}>
              Interested in our products? Send us an inquiry and we&apos;ll get back to you with a quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.inquiry}>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.inquiryForm}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="companyName">Company Name</label>
                  <Input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Your Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contactPerson">Contact Person</label>
                  <Input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Your Name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="productInterest">Product of Interest</label>
                  <Input
                    type="text"
                    id="productInterest"
                    name="productInterest"
                    placeholder="Product Name"
                    value={formData.productInterest}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="quantity">Quantity</label>
                  <Input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="Estimated Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Details</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide any additional information..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className={styles.submitButton}>
                <Send className="mr-2 h-5 w-5" />
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}