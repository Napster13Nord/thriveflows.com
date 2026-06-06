"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { BlurText } from "./BlurText";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated dotted surface background */}
      <DottedSurface />
      
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          {/* Badge */}
          <div className={styles.badgeRow}>
            <span className={styles.badgePill}>New</span>
            <span className={styles.badgeText}>Client Acquisition System</span>
          </div>

          {/* Headline — 3 big bold lines */}
          <h1 className={styles.headline}>
            <div className={styles.line1}>
              <BlurText text="Transforme Cold Emails em" delay={150} animateBy="words" />
            </div>
            <div className={styles.line2}>
              <BlurText text="Clientes de Forma Previsível com" delay={150} animateBy="words" />
            </div>
            <div className={styles.line3}>
              <BlurText text="Inteligência Artificial" delay={150} animateBy="words" />
            </div>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Pare de depender de referências ou anúncios caros que só trazem leads de baixa qualidade.
            Com um sistema comprovado que já trouxe 126 clientes em menos de dois anos, pode preencher
            a sua agenda com reuniões qualificadas todas as semanas, de forma previsível.
          </p>

          {/* Done-for-you line */}
          <p className={styles.doneForYou}>
            Done-For-You, com resultados garantidos.
          </p>

          {/* CTA Button */}
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
