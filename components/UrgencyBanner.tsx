"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./UrgencyBanner.module.css";

export default function UrgencyBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const spotsLeft = 7;
  const totalSpots = 10;
  const nextCohortDate = "April 15";
  const spotsTaken = totalSpots - spotsLeft;

  return (
    <section id="pillars" className={styles.wrapper} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={styles.card}
      >
        {/* Warning Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={styles.warningIcon}
        >
          ⚠️
        </motion.div>

        {/* Heading */}
        <div className={styles.heading}>Limited Availability</div>

        {/* Spots left */}
        <div className={styles.spotsText}>
          Only <span className={styles.spotsNumber}>{spotsLeft}</span> Spots Left This Month
        </div>

        {/* Explanation */}
        <div className={styles.explanation}>
          We cap at {totalSpots} stores/month to maintain quality.
        </div>

        {/* Next Cohort */}
        <div className={styles.nextCohort}>
          Next cohort starts: <strong>{nextCohortDate}</strong>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressTrack}>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${(spotsTaken / totalSpots) * 100}%` } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className={styles.progressFill}
          />
        </div>

        <div className={styles.spotsTaken}>
          {spotsTaken} / {totalSpots} spots taken
        </div>
      </motion.div>
    </section>
  );
}
