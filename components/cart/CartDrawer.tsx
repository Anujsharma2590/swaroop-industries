"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { siteConfig } from "@/config/site.config";
import { 
  X, 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  MessageCircle,
  Send,
  User,
  Phone,
  Mail,
  Building,
  MapPin
} from "lucide-react";
import Link from "next/link";
import styles from "./CartDrawer.module.scss";

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

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, getItemCount } = useCart();
  const [showInquiryForm, setShowInquiryForm] = useState(false);
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
    setShowInquiryForm(false);
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.backdrop}
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={styles.drawer}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerTitle}>
                <ShoppingBag className="h-5 w-5" />
                <h2>Your Inquiry Cart</h2>
                <span className={styles.itemCount}>{getItemCount()}</span>
              </div>
              <button 
                className={styles.closeButton}
                onClick={() => setIsCartOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className={styles.content}>
              {!showInquiryForm ? (
                <>
                  {items.length === 0 ? (
                    <div className={styles.emptyCart}>
                      <ShoppingBag className="h-16 w-16" />
                      <h3>Your cart is empty</h3>
                      <p>Add products you're interested in to send an inquiry</p>
                      <Link 
                        href="/products" 
                        className={styles.browseButton}
                        onClick={() => setIsCartOpen(false)}
                      >
                        Browse Products
                      </Link>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items */}
                      <div className={styles.cartItems}>
                        {items.map((item) => (
                          <div key={item.product.id} className={styles.cartItem}>
                            <div className={styles.itemImage}>
                              <span>{item.product.name.charAt(0)}</span>
                            </div>
                            <div className={styles.itemDetails}>
                              <h4>{item.product.name}</h4>
                              <p>{item.product.category}</p>
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
                            </div>
                            <button 
                              className={styles.removeButton}
                              onClick={() => removeFromCart(item.product.id)}
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Cart Summary */}
                      <div className={styles.cartSummary}>
                        <div className={styles.summaryRow}>
                          <span>Total Products</span>
                          <span>{items.length}</span>
                        </div>
                        <div className={styles.summaryRow}>
                          <span>Total Quantity</span>
                          <span>{getItemCount()} units</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className={styles.cartActions}>
                        <button 
                          className={styles.clearButton}
                          onClick={clearCart}
                        >
                          Clear Cart
                        </button>
                        <button 
                          className={styles.inquiryButton}
                          onClick={() => setShowInquiryForm(true)}
                        >
                          <MessageCircle className="h-5 w-5" />
                          Send Inquiry on WhatsApp
                        </button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                /* Inquiry Form */
                <div className={styles.inquiryForm}>
                  <button 
                    className={styles.backButton}
                    onClick={() => setShowInquiryForm(false)}
                  >
                    ← Back to Cart
                  </button>
                  
                  <div className={styles.formHeader}>
                    <MessageCircle className="h-8 w-8" />
                    <h3>Send Inquiry via WhatsApp</h3>
                    <p>Fill in your details to send product inquiry directly to our WhatsApp</p>
                  </div>

                  <form onSubmit={handleSendInquiry}>
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

                    <div className={styles.formGroup}>
                      <label>
                        <Building className="h-4 w-4" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="Your company name"
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

                    {/* Products Preview */}
                    <div className={styles.productsPreview}>
                      <h4>Products in your inquiry ({items.length})</h4>
                      <ul>
                        {items.map((item) => (
                          <li key={item.product.id}>
                            {item.product.name} × {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      <Send className="h-5 w-5" />
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

