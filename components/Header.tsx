"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import { ShinyButton } from "@/components/ui/ShinyButton";

const NAV_LINKS = [
  { label: "Results", href: "#results" },
  { label: "ROI Calculator", href: "#calculator" },
  { label: "How It Works", href: "#how" },
  { label: "FAQs", href: "#faq" },
];

const CAL_LINK = "https://cal.com/andre-lopes/revenue-recovery-potential-call";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#814ac8" />
            <path
              d="M8 10h12M8 14h8M8 18h10"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>Thrive Flows</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <ShinyButton
          alwaysActive
          data-cal-link="andre-lopes/revenue-recovery-potential-call"
          data-cal-namespace="revenue-recovery-potential-call"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className={styles.ctaDesktop}
        >
          Book Your Free Strategy Call
        </ShinyButton>

        {/* Mobile Toggle */}
        <button
          className={styles.burger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.open1 : ""}`} />
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.open2 : ""}`} />
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.open3 : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={styles.mobileMenu}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ShinyButton
              data-cal-link="andre-lopes/revenue-recovery-potential-call"
              data-cal-namespace="revenue-recovery-potential-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              onClick={() => setMobileOpen(false)}
            >
              Book Your Free Strategy Call
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ShinyButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
