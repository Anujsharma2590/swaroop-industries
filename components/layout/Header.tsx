"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { navigationConfig } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styles from "./Header.module.scss";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.nav}>
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigationConfig.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger className={styles.navLink}>
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.children.map((child) => {
                        if (child.children) {
                          return (
                            <DropdownMenuSub key={child.href}>
                              <DropdownMenuSubTrigger>
                                {child.title}
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent>
                                {child.children.map((subChild) => (
                                  <DropdownMenuItem key={subChild.href} asChild>
                                    <Link href={subChild.href}>{subChild.title}</Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          );
                        }
                        return (
                          <DropdownMenuItem key={child.href} asChild>
                            <Link href={child.href}>{child.title}</Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <div className="container mx-auto px-4 py-4">
              {navigationConfig.map((item) => (
                <div key={item.href} className={styles.mobileNavItem}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.children && (
                    <div className={styles.mobileSubmenu}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={styles.mobileSubmenuLink}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}