"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const CAL_LINK = "https://cal.com/andre-lopes/revenue-recovery-potential-call";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background glow effects */}
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          {/* Badge */}
          <span className={styles.badge}>🎯 For WooCommerce</span>

          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.headlineSub}>Done-For-You Email Automation</span>
            <span className={styles.headlineMain}>
              Recover 10-30% of Lost Revenue{" "}
              <span className={styles.headlineMuted}>Without Ads or Extra Work</span>
            </span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Automatically recover abandoned carts, browsed products, and inactive customers.
            Complete system installed in 7 days. You only pay if the automations generate at
            least 10% of your total sales.
          </p>

          {/* CTA Button */}
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Book Your Free Strategy Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            <span className={styles.trustBadge}>✓ 30-Day Free Trial</span>
            <span className={styles.trustBadge}>✓ Zero Risk</span>
            <span className={styles.trustBadge}>✓ Results Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
