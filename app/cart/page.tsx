"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { siteConfig } from "@/config/site.config";
import { 
  ShoppingBag, 
  Minus, 
  Plus, 
  Trash2, 
  ArrowLeft, 
  MessageCircle, 
  Send,
  User,
  Phone,
  Mail,
  Building,
  MapPin,
  Package
} from "lucide-react";
import styles from "./page.module.scss";

// WhatsApp number (remove + and spaces)
const WHATSAPP_NUMBER = "919891169000";

interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  city: string;
  message: string;
}

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, getItemCount } = useCart();
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateWhatsAppMessage = () => {
    let message = `*🛒 PRODUCT INQUIRY - ${siteConfig.name}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Customer Details
    message += `*📋 CUSTOMER DETAILS*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 Name: ${formData.name}\n`;
    message += `📱 Phone: ${formData.phone}\n`;
    if (formData.email) message += `📧 Email: ${formData.email}\n`;
    if (formData.company) message += `🏢 Company: ${formData.company}\n`;
    if (formData.city) message += `📍 City: ${formData.city}\n`;
    message += `\n`;
    
    // Products
    message += `*📦 PRODUCTS INTERESTED IN*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Category: ${item.product.category}\n`;
      message += `   Quantity: ${item.quantity} units\n`;
      if (item.product.description) {
        message += `   ${item.product.description.substring(0, 50)}...\n`;
      }
      message += `\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*Total Items: ${getItemCount()}*\n\n`;
    
    // Additional Message
    if (formData.message) {
      message += `*💬 ADDITIONAL MESSAGE*\n`;
      message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
      message += `${formData.message}\n\n`;
    }
    
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_Sent from ${siteConfig.url}_`;
    
    return encodeURIComponent(message);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    if (items.length === 0) {
      alert("Please add products to your cart first.");
      return;
    }
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Clear cart and form after sending
    clearCart();
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      city: "",
      message: "",
    });
  };

  return (
    <div className={styles.cartPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
        </div>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <span className={styles.badge}>
              <ShoppingBag className="h-4 w-4" />
              Inquiry Cart
            </span>
            <h1 className={styles.title}>Your Product Inquiry</h1>
            <p className={styles.description}>
              Review your selected products and send inquiry directly via WhatsApp
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className={styles.cartSection}>
        <div className="container mx-auto px-4 py-12">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.emptyCart}
            >
              <ShoppingBag className="h-20 w-20" />
              <h2>Your cart is empty</h2>
              <p>Add products you&apos;re interested in to send an inquiry</p>
              <Link href="/products" className={styles.browseButton}>
                <Package className="h-5 w-5" />
                Browse Products
              </Link>
            </motion.div>
          ) : (
            <div className={styles.cartGrid}>
              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={styles.cartItems}
              >
                <div className={styles.cartHeader}>
                  <h2>
                    <ShoppingBag className="h-5 w-5" />
                    Products ({items.length})
                  </h2>
                  <button className={styles.clearAll} onClick={clearCart}>
                    Clear All
                  </button>
                </div>

                <div className={styles.itemsList}>
                  {items.map((item) => (
                    <div key={item.product.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <span>{item.product.name.charAt(0)}</span>
                      </div>
                      <div className={styles.itemDetails}>
                        <h3>{item.product.name}</h3>
                        <p className={styles.itemCategory}>{item.product.category}</p>
                        <p className={styles.itemDescription}>{item.product.description}</p>
                      </div>
                      <div className={styles.itemActions}>
                        <div className={styles.quantityControls}>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button 
                          className={styles.removeButton}
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/products" className={styles.continueShopping}>
                  <ArrowLeft className="h-4 w-4" />
                  Continue Browsing
                </Link>
              </motion.div>

              {/* Inquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={styles.inquirySection}
              >
                <div className={styles.formCard}>
                  <div className={styles.formHeader}>
                    <MessageCircle className="h-8 w-8" />
                    <h3>Send Inquiry via WhatsApp</h3>
                    <p>Fill in your details to send product inquiry</p>
                  </div>

                  <form onSubmit={handleSendInquiry} className={styles.inquiryForm}>
                    <div className={styles.formGroup}>
                      <label>
                        <User className="h-4 w-4" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>
                        <Phone className="h-4 w-4" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>
                        <Mail className="h-4 w-4" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>
                          <Building className="h-4 w-4" />
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          placeholder="Company name"
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label>
                          <MapPin className="h-4 w-4" />
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          placeholder="Your city"
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>
                        <MessageCircle className="h-4 w-4" />
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Any specific requirements or questions..."
                        rows={3}
                      />
                    </div>

                    {/* Order Summary */}
                    <div className={styles.orderSummary}>
                      <h4>Order Summary</h4>
                      <div className={styles.summaryRow}>
                        <span>Total Products</span>
                        <span>{items.length}</span>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Total Quantity</span>
                        <span>{getItemCount()} units</span>
                      </div>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      <Send className="h-5 w-5" />
                      Send Inquiry on WhatsApp
                    </button>

                    <p className={styles.note}>
                      Your inquiry will be sent directly to our WhatsApp. Our team will respond within 24 hours.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

