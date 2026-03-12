"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CalEmbed.module.css";
import SpotlightCard from "./SpotlightCard";

export default function CalEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const calLoaded = useRef(false);

  useEffect(() => {
    if (calLoaded.current) return;
    calLoaded.current = true;

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
          className={styles.inner}
        >
          {/* Main container holding both text and calendar in a single column */}
          <SpotlightCard className={styles.calContainer} spotlightColor="rgba(139, 92, 246, 0.12)">

            {/* Top Text Side */}
            <div className={styles.calTextSide}>
              <h2 className={styles.calTitle}>
                Stop Losing Sales Today - Book Your Free Strategy Call
              </h2>
              
              <div className={styles.calContentWrapper}>
                <h3 className={styles.calSubtitle}>What happens on the call:</h3>
                <ol className={styles.calList}>
                  <li>We calculate your exact revenue loss (2 min)</li>
                  <li>Show you which automations fit your store (5 min)</li>
                  <li>Give you a custom recovery forecast (3 min)</li>
                  <li>Answer all your questions (5 min)</li>
                  <li>You decide if it makes sense</li>
                </ol>
                <p className={styles.noPressure}>No pressure. Just value.</p>
              </div>
            </div>

            {/* Bottom Calendar embed */}
            <div className={styles.calEmbedWrapper}>
              <div
                id="my-cal-inline-revenue-recovery-potential-call"
                className={styles.calEmbed}
              />
            </div>

          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
