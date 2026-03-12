"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import StatsCards from "./StatsCards";
import { SplitText } from "./SplitText";

const CAL_LINK = "https://cal.com/andre-lopes/revenue-recovery-potential-call";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Star particles */}
      <div className={styles.stars} />
      {/* Central purple nebula glow */}
      <div className={styles.nebula} />
      <div className={styles.nebulaSecondary} />

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          {/* Badge */}
          <div className={styles.badgeRow}>
            <span className={styles.badgePill}>🎯 For WooCommerce</span>
            <span className={styles.badgeText}>Store Owners</span>
          </div>

          {/* Headline — 3 big bold lines */}
          <h1 className={styles.headline}>
            <span className={styles.line1}>
              <SplitText text="Done-For-You Email Automation" delay={30} />
            </span>
            <span className={styles.line2}>
              <SplitText text="Recover 10-30% of Lost Revenue" delay={30} />
            </span>
            <span className={styles.line3}>
              <SplitText text="Without Ads or Extra Work" delay={30} />
            </span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Automatically recover abandoned carts, browsed products, and inactive customers.
            Complete system installed in 7 days. You only pay if the automations generate at
            least 10% of your total sales.
          </p>

          {/* CTA Button */}
          <button
            data-cal-link="andre-lopes/revenue-recovery-potential-call"
            data-cal-namespace="revenue-recovery-potential-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className={styles.ctaBtn}
          >
            Book Your Free Strategy Call
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            <span className={styles.trustBadge}>✓ 30-Day Free Trial</span>
            <span className={styles.trustBadge}>✓ Zero Risk</span>
            <span className={styles.trustBadge}>✓ Results Guaranteed</span>
          </div>
        </motion.div>
      </div>

      {/* Put stats cards inside hero to show above fold */}
      <div className={styles.statsContainer}>
        <StatsCards />
      </div>
    </section>
  );
}
