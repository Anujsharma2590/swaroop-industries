"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";
import styles from "./CartButton.module.scss";

export default function CartButton() {
  const { getItemCount, setIsCartOpen } = useCart();
  const itemCount = getItemCount();

  return (
    <button 
      className={styles.cartButton}
      onClick={() => setIsCartOpen(true)}
      aria-label={`Open cart with ${itemCount} items`}
    >
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <span className={styles.badge}>{itemCount}</span>
      )}
    </button>
  );
}

