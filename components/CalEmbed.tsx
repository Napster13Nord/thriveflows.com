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
          {/* Title and description centered */}
          <div className={styles.header}>
            <h2 className="section-title section-title-centered">
              Stop Losing Sales Today — Book Your Free Strategy Call
            </h2>
            <p className="section-subtitle section-subtitle-centered" style={{ marginTop: 16 }}>
              15 minutes. No sales pitch. Just a clear look at how much revenue
              your store could be recovering — and whether our system fits.
            </p>
          </div>

          {/* Cal.com embed below, full width */}
          <div className={styles.calContainer}>
            <div
              id="my-cal-inline-revenue-recovery-potential-call"
              className={styles.calEmbed}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
