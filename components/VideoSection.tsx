"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Script from "next/script";
import styles from "./VideoSection.module.css";
import { ShinyButton } from "@/components/ui/ShinyButton";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className={`section ${styles.section}`} ref={ref}>
      {/* Wistia Player Scripts */}
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/ijn8tzxiay.js" strategy="afterInteractive" type="module" />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <span className="section-badge">O Meu Sistema</span>
          <h2 className="section-title section-title-centered">
            O Sistema em Ação: 6 Minutos de<br />
            Demonstração Real
          </h2>
          <p className="section-subtitle section-subtitle-centered">
            Acompanhe passo a passo como crio emails personalizados com IA, como a automação cria respostas
            em menos de 2 minutos, e como isso se traduz em reuniões no seu calendário.
          </p>

          {/* Wistia Video Embed */}
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <div
                className={styles.wistiaEmbedWrapper}
                dangerouslySetInnerHTML={{
                  __html: `
                    <style>
                      wistia-player[media-id='ijn8tzxiay']:not(:defined) {
                        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ijn8tzxiay/swatch');
                        display: block;
                        filter: blur(5px);
                        padding-top: 56.25%;
                      }
                    </style>
                    <wistia-player media-id="ijn8tzxiay" aspect="1.7777777777777777" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></wistia-player>
                  `
                }}
              />
            </div>
          </div>

          <ShinyButton
            data-cal-link="andre-lopes/consultoria-gratuita-cold-email-system"
            data-cal-namespace="consultoria-gratuita-cold-email-system"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className={styles.ctaBtn}
          >
            Agendar Consultoria Gratuita
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
