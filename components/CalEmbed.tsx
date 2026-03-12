"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CalEmbed.module.css";

export default function CalEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const calLoaded = useRef(false);

  useEffect(() => {
    if (calLoaded.current) return;
    calLoaded.current = true;

    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      const Cal = (window as any).Cal;
      if (!Cal) return;

      Cal("init", "revenue-recovery-potential-call", {
        origin: "https://app.cal.com",
      });

      Cal.ns["revenue-recovery-potential-call"]("inline", {
        elementOrSelector: "#my-cal-inline-revenue-recovery-potential-call",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "andre-lopes/revenue-recovery-potential-call",
      });

      Cal.ns["revenue-recovery-potential-call"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h2 className="section-title section-title-centered">
              Stop Losing Sales Today - Book Your Free Strategy Call
            </h2>
          </div>

          <div className={styles.layout}>
            {/* Left: What happens on the call */}
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>What happens on the call:</h3>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>1.</span>
                  <span>We calculate your exact revenue loss (2 min)</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>2.</span>
                  <span>Show you which automations fit your store (5 min)</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>3.</span>
                  <span>Give you a custom recovery forecast (3 min)</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>4.</span>
                  <span>Answer all your questions (5 min)</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>5.</span>
                  <span>You decide if it makes sense</span>
                </div>
              </div>
              <p className={styles.noPressure}>No pressure. Just value.</p>
            </div>

            {/* Right: Cal.com embed */}
            <div className={styles.calContainer}>
              <div
                id="my-cal-inline-revenue-recovery-potential-call"
                className={styles.calEmbed}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
