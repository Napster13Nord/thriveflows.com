"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ROICalculator.module.css";
import SpotlightCard from "./SpotlightCard";
import { ShinyButton } from "@/components/ui/ShinyButton";

export default function ROICalculator() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [emailsPerDay, setEmailsPerDay] = useState(500);
  const [dealValue, setDealValue] = useState(15000);
  const [closingRate, setClosingRate] = useState(25);

  // Derived from email volume
  const monthlyPrice = emailsPerDay * 2;
  const guaranteedMeetings = Math.round(emailsPerDay / 50);

  const results = useMemo(() => {
    const monthlyRevenue = guaranteedMeetings * (closingRate / 100) * dealValue;
    const yearlyRevenue = monthlyRevenue * 12;
    const yearlyCost = monthlyPrice * 12;
    const roi = yearlyCost > 0 ? Math.round(((yearlyRevenue - yearlyCost) / yearlyCost) * 100) : 0;
    return { monthlyRevenue, yearlyRevenue, roi };
  }, [guaranteedMeetings, closingRate, dealValue, monthlyPrice]);

  // Format: 37 500 € (Portuguese style)
  const fmtEur = (n: number) =>
    Math.round(n).toLocaleString("pt-PT").replace(/\./g, " ") + " €";

  return (
    <section id="calculator" className={`section ${styles.section}`} ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionHeader}>
            <span className="section-badge">Calculadora de ROI</span>
            <h2 className="section-title section-title-centered">
              Descubra Quanto Este Sistema<br />
              Pode Gerar Para o Seu Negócio
            </h2>
            <p className="section-subtitle section-subtitle-centered">
              Use os dados abaixo para simular quanto poderia receber com o
              sistema de cold email + IA, um sistema completo de aquisição de clientes.
            </p>
          </div>

          <div className={styles.layout}>
            {/* ── Left: Inputs ── */}
            <div className={styles.inputs}>
              <h3 className={styles.inputsTitle}>Calculadora de Receita</h3>

              {/* 1. Volume de Emails */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Volume de Emails:</span>
                  <div className={styles.sliderValueStack}>
                    <span className={styles.sliderValue}>
                      Até {emailsPerDay} emails/dia
                    </span>
                    <span className={styles.sliderValueSub}>
                      {fmtEur(monthlyPrice)}/mês
                    </span>
                  </div>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="100"
                  max="1000"
                  step="100"
                  value={emailsPerDay}
                  onChange={(e) => setEmailsPerDay(parseInt(e.target.value))}
                />
                <div className={styles.sliderRange}>
                  <span>100/dia</span>
                  <span>1000/dia</span>
                </div>
                <div className={styles.guarantee}>
                  Garantia: {guaranteedMeetings} reuniões qualificadas/mês
                </div>
              </div>

              {/* 2. Valor Médio do Negócio */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Valor Médio do Negócio:</span>
                  <span className={styles.sliderValue}>
                    {fmtEur(dealValue)}
                  </span>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(parseInt(e.target.value))}
                />
                <div className={styles.sliderRange}>
                  <span>€1.000</span>
                  <span>€100.000</span>
                </div>
              </div>

              {/* 3. Taxa de Fechamento */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Taxa de Fechamento (%):</span>
                  <span className={styles.sliderValue}>{closingRate}%</span>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={closingRate}
                  onChange={(e) => setClosingRate(parseInt(e.target.value))}
                />
                <div className={styles.sliderRange}>
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>

            {/* ── Right: Results ── */}
            <SpotlightCard className={styles.results} spotlightColor="rgba(139, 92, 246, 0.15)">
              <h3 className={styles.resultsTitle}>
                O Seu Potencial de <span className={styles.purple}>Crescimento</span>
              </h3>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Volume de Emails:</span>
                <span className={styles.resultValueOrange}>
                  Até {emailsPerDay} emails/dia
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Mensalidade do Sistema:</span>
                <span className={styles.resultValueOrange}>
                  {fmtEur(monthlyPrice)}
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Reuniões Garantidas/Mês:</span>
                <span className={styles.resultValue}>{guaranteedMeetings}</span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Receita Mensal Gerada:</span>
                <span className={styles.resultValueGreen}>
                  {fmtEur(results.monthlyRevenue)}
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Projeção Anual de Receita:</span>
                <span className={styles.resultValueGreen}>
                  {fmtEur(results.yearlyRevenue)}
                </span>
              </div>

              <div className={styles.roiRow}>
                <span className={styles.roiLabel}>ROI Projetado:</span>
                <span className={styles.roiValue}>{results.roi}%</span>
              </div>
            </SpotlightCard>
          </div>

          <div className={styles.ctaRow}>
            <ShinyButton
              data-cal-link="andre-lopes/consultoria-gratuita-cold-email-system"
              data-cal-namespace="consultoria-gratuita-cold-email-system"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="cta-button"
            >
              Agendar Consultoria Gratuita
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 10h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ShinyButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
