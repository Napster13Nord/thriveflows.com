"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import StatsCards from "./StatsCards";
import { BlurText } from "./BlurText";
import Silk from "./Silk";

const CAL_LINK = "https://cal.com/andre-lopes/revenue-recovery-potential-call";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Star particles */}
      <div className={styles.stars} />
      
      {/* Galaxy Background */}
      <div className={styles.galaxyContainer}>
        <Silk
          speed={5}
          scale={1}
          color="#7A5AF8"
          noiseIntensity={0}
          rotation={0}
        />
      </div>

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
            <div className={styles.line1}>
              <BlurText text="Done-For-You Email Automation" delay={150} animateBy="words" />
            </div>
            <div className={styles.line2}>
              <BlurText text="Recover 10-30% of Lost Revenue" delay={150} animateBy="words" />
            </div>
            <div className={styles.line3}>
              <BlurText text="Without Ads or Extra Work" delay={150} animateBy="words" />
            </div>
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
