"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./VideoSection.module.css";

const CAL_LINK = "https://cal.com/andre-lopes/revenue-recovery-potential-call";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className={`section ${styles.section}`} ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <span className="section-badge">Real Results</span>
          <h2 className="section-title section-title-centered">
            The Complete System: How 110+ Stores Recover 17-41% of Lost Revenue
          </h2>
          <p className="section-subtitle section-subtitle-centered">
            See the complete picture: real client dashboards, how the system works, and
            why stores are recovering €2K-€13K monthly in revenue that was being lost.
            3 minutes that could change your business.
          </p>

          {/* Video Embed */}
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/placeholder"
                title="ThriveFlows System Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoIframe}
              />
            </div>
          </div>

          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            style={{ marginTop: 32 }}
          >
            Book Your Free Strategy Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
