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

      Cal("init", "consultoria-gratuita-cold-email-system", {
        origin: "https://app.cal.com",
      });

      Cal.ns["consultoria-gratuita-cold-email-system"]("inline", {
        elementOrSelector: "#my-cal-inline-consultoria-gratuita-cold-email-system",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "andre-lopes/consultoria-gratuita-cold-email-system",
      });

      Cal.ns["consultoria-gratuita-cold-email-system"]("ui", {
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
                Pronto Para Colocar Sua Aquisição de Clientes no Piloto Automático?
              </h2>
              <p className={styles.calSubtitleText}>
                Agende uma conversa rápida para entender como o sistema pode se adaptar ao seu negócio e
                começar a gerar reuniões já nas próximas semanas.
              </p>
            </div>

            {/* Bottom Calendar embed */}
            <div className={styles.calEmbedWrapper}>
              <div
                id="my-cal-inline-consultoria-gratuita-cold-email-system"
                className={styles.calEmbed}
              />
            </div>

          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
