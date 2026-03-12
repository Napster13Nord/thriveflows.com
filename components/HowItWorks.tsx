"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./HowItWorks.module.css";

const CAL_LINK = "https://cal.com/andre-lopes/revenue-recovery-potential-call";

const STEPS = [
  {
    step: 1,
    title: "Strategic Audit",
    description:
      "We analyze your store and create your custom automation strategy.",
    youProvide: "15-min call",
  },
  {
    step: 2,
    title: "Build & Install",
    description:
      "We write emails, design templates, and set up all automations.",
    youProvide: "Email approval",
  },
  {
    step: 3,
    title: "Test & Launch",
    description:
      "We test everything thoroughly and launch after your final approval.",
    youProvide: "Final go-ahead",
  },
  {
    step: 4,
    title: "Optimize (Ongoing)",
    description: "We monitor, test, and improve your results.",
    youProvide: "Nothing, just watch the revenue grow",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="how" className={`section ${styles.section}`} ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className="section-badge">How It Works</span>
            <h2 className="section-title section-title-centered">
              From Setup to Sales in 7-10 Days{" "}
              <span className={styles.muted}>(We Handle Everything)</span>
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className={styles.grid}
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={styles.card}
              >
                <div className={styles.stepBadge}>Step {step.step}</div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
                <div className={styles.youProvide}>
                  <span className={styles.youProvideLabel}>You provide:</span>
                  <span className={styles.youProvideValue}>
                    {step.youProvide}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className={styles.ctaRow}>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
