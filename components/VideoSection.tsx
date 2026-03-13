"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./VideoSection.module.css";
import { ShinyButton } from "@/components/ui/ShinyButton";

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
          <span className="section-badge">Results</span>
          <h2 className="section-title section-title-centered">
            The Complete System: How 110+<br />
            Stores Recover 17-41% of Lost<br />
            Revenue
          </h2>
          <p className="section-subtitle section-subtitle-centered">
            See the complete picture: real client dashboards, how the system works, and
            why stores are recovering €2K-€13K monthly in revenue that was being lost.
            3 minutes that could change your business.
          </p>

          {/* Vimeo Video Embed */}
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/1173086461?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                title="ThriveFlows System Overview"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                className={styles.videoIframe}
              />
            </div>
          </div>

          <ShinyButton
            data-cal-link="andre-lopes/revenue-recovery-potential-call"
            data-cal-namespace="revenue-recovery-potential-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className={styles.ctaBtn}
          >
            Book Your Free Strategy Call
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
