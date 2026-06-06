"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import styles from "./VideoSection.module.css";
import { ShinyButton } from "@/components/ui/ShinyButton";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const wistiaLoaded = useRef(false);

  // Load Wistia script once
  useEffect(() => {
    if (wistiaLoaded.current) return;
    wistiaLoaded.current = true;

    const jsonpScript = document.createElement("script");
    jsonpScript.src = "https://fast.wistia.com/embed/medias/ijn8tzxiay.jsonp";
    jsonpScript.async = true;
    document.head.appendChild(jsonpScript);

    const evScript = document.createElement("script");
    evScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
    evScript.async = true;
    document.head.appendChild(evScript);
  }, []);

  return (
    <section id="results" className={`section ${styles.section}`} ref={ref}>
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
                className="wistia_responsive_padding"
                style={{ padding: "56.25% 0 0 0", position: "relative" }}
              >
                <div
                  className="wistia_responsive_wrapper"
                  style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="wistia_embed wistia_async_ijn8tzxiay seo=true videoFoam=true"
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
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
