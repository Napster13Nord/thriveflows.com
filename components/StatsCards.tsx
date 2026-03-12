"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./StatsCards.module.css";
import SpotlightCard from "./SpotlightCard";

type CardItem = {
  type: "normal" | "woocommerce" | "google";
  number?: number;
  prefix?: string;
  suffix?: string;
  title?: string;
  description?: string;
  numberDuration?: number;
  rating?: number;
  reviewCount?: number;
};

const CARDS: CardItem[] = [
  { type: "woocommerce" },
  {
    type: "normal",
    number: 110,
    suffix: "+",
    title: "Stores",
    description: "Using Our System",
    numberDuration: 1500,
  },
  {
    type: "normal",
    number: 800,
    prefix: "€",
    suffix: "K+",
    title: "Recovered",
    description: "For Our Clients",
    numberDuration: 1800,
  },
  {
    type: "normal",
    number: 20,
    suffix: "%",
    title: "Increase",
    description: "Average Revenue Lift",
    numberDuration: 1200,
  },
  {
    type: "google",
    rating: 5.0,
    reviewCount: 32,
  },
];

function useRollingNumber(value: number, durationMs: number, shouldAnimate: boolean) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;
    let startTime: number | null = null;
    let mounted = true;

    const step = (ts: number) => {
      if (!mounted) return;
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / durationMs, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    return () => { mounted = false; };
  }, [value, durationMs, shouldAnimate]);

  return display;
}

function NormalCard({ card, shouldAnimate }: { card: CardItem; shouldAnimate: boolean }) {
  const display = useRollingNumber(
    card.number ?? 0,
    card.numberDuration ?? 1500,
    shouldAnimate
  );

  return (
    <div className={styles.cardInner}>
      <div className={styles.cardNumber}>
        {(card.prefix ?? "") + display.toLocaleString() + (card.suffix ?? "")}
      </div>
      <div className={styles.cardTitle}>{card.title}</div>
      <div className={styles.cardDesc}>{card.description}</div>
    </div>
  );
}

function WooCommerceCard() {
  return (
    <div className={styles.cardInner}>
      <img
        src="/images/woocommerce-logo.png"
        alt="WooCommerce"
        className={styles.wooLogo}
        onError={(e) => {
          // Fallback to text if image doesn't load
          (e.target as HTMLImageElement).style.display = "none";
          (e.target as HTMLImageElement).parentElement!.innerHTML =
            '<div style="font-size:20px;font-weight:700;color:#7f54b3">Woo<br/>Commerce</div>';
        }}
      />
    </div>
  );
}

function GoogleCard({ card }: { card: CardItem }) {
  return (
    <div className={styles.cardInner}>
      <div className={styles.googleLabel}>Google Rating</div>
      <div className={styles.googleRow}>
        <span className={styles.googleScore}>{card.rating || 5.0}</span>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className={styles.star}>★</span>
          ))}
        </div>
      </div>
      {card.reviewCount && (
        <div className={styles.reviewCount}>{card.reviewCount} reviews</div>
      )}
    </div>
  );
}

export default function StatsCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={styles.wrapper} ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={styles.grid}
      >
        {CARDS.map((card, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <SpotlightCard className={styles.card} spotlightColor="rgba(139, 92, 246, 0.15)" style={{ height: "100%" }}>
              {card.type === "woocommerce" && <WooCommerceCard />}
              {card.type === "normal" && <NormalCard card={card} shouldAnimate={inView} />}
              {card.type === "google" && <GoogleCard card={card} />}
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
