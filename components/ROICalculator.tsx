"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ROICalculator.module.css";
import SpotlightCard from "./SpotlightCard";
import { ShinyButton } from "@/components/ui/ShinyButton";

const PACKAGES = [
  { price: 500, label: "Essencial", emails: "5.000/mês", key: "essential" },
  { price: 900, label: "Profissional", emails: "15.000/mês", key: "professional" },
  { price: 1500, label: "Escala", emails: "30.000/mês", key: "complete" },
];

export default function ROICalculator() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [clientValue, setClientValue] = useState(2000);
  const [systemPrice, setSystemPrice] = useState(900);
  const [responseRate, setResponseRate] = useState(8);

  const selectedPackage =
    PACKAGES.find((p) => p.price === systemPrice) || PACKAGES[1];

  // Derive email volume from package
  const emailVolume = selectedPackage.key === "essential" ? 5000 : selectedPackage.key === "professional" ? 15000 : 30000;

  const results = useMemo(() => {
    const monthlyResponses = Math.round((emailVolume * responseRate) / 100);
    const meetingsPerMonth = Math.round(monthlyResponses * 0.35); // 35% of responses become meetings
    const clientsPerMonth = Math.round(meetingsPerMonth * 0.25); // 25% of meetings close
    const monthlyRevenue = clientsPerMonth * clientValue;
    const yearlyRevenue = monthlyRevenue * 12;
    const roi = systemPrice > 0 ? ((monthlyRevenue - systemPrice) / systemPrice) * 100 : 0;
    return { monthlyResponses, meetingsPerMonth, clientsPerMonth, monthlyRevenue, yearlyRevenue, roi };
  }, [emailVolume, clientValue, systemPrice, responseRate]);

  const formatCurrency = (num: number) =>
    "€" + Math.round(num).toLocaleString("pt-PT");

  const formatROI = (value: number) => {
    const absValue = Math.abs(value);
    const sign = value > 0 ? "+" : "";
    if (absValue >= 1000000)
      return sign + (absValue / 1000000).toFixed(1) + "M%";
    if (absValue >= 1000)
      return sign + Math.round(value).toLocaleString("pt-PT") + "%";
    return sign + Math.round(value) + "%";
  };

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
            {/* Left: Inputs */}
            <div className={styles.inputs}>
              <h3 className={styles.inputsTitle}>Calculadora de Receita</h3>

              {/* Client Value Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Valor Médio por Cliente:</span>
                  <span className={styles.sliderValue}>
                    {formatCurrency(clientValue)}
                  </span>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={clientValue}
                  onChange={(e) => setClientValue(parseInt(e.target.value))}
                />
                <div className={styles.sliderRange}>
                  <span>€500</span>
                  <span>€50.000</span>
                </div>
              </div>

              {/* Package Selection */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Pacote do Sistema:</span>
                  <span className={styles.sliderValuePurple}>
                    {selectedPackage.label} · {selectedPackage.emails}
                  </span>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={PACKAGES.findIndex((p) => p.price === systemPrice)}
                  onChange={(e) =>
                    setSystemPrice(PACKAGES[parseInt(e.target.value)].price)
                  }
                />
                <div className={styles.sliderRange}>
                  {PACKAGES.map((pkg) => (
                    <span key={pkg.key}>{pkg.label}</span>
                  ))}
                </div>
              </div>

              {/* Response Rate Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Taxa de Resposta:</span>
                  <span className={styles.sliderValue}>{responseRate}%</span>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="3"
                  max="15"
                  step="1"
                  value={responseRate}
                  onChange={(e) => setResponseRate(parseInt(e.target.value))}
                />
                <div className={styles.sliderRange}>
                  <span>3%</span>
                  <span>8%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <SpotlightCard className={styles.results} spotlightColor="rgba(139, 92, 246, 0.15)">
              <h3 className={styles.resultsTitle}>
                O Seu Potencial de <span className={styles.purple}>Crescimento</span>
              </h3>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Pacote:</span>
                <span className={styles.resultValue}>
                  {selectedPackage.label} · {selectedPackage.emails}
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Investimento:</span>
                <span className={styles.resultValueYellow}>
                  €{selectedPackage.price}/mês
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Respostas/mês:</span>
                <span className={styles.resultValue}>{results.monthlyResponses}</span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Reuniões Estimadas:</span>
                <span className={styles.resultValue}>{results.meetingsPerMonth}/mês</span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Novos Clientes:</span>
                <span className={styles.resultValueGreen}>
                  {results.clientsPerMonth}/mês
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Receita Mensal Estimada:</span>
                <span className={styles.resultValueGreenBig}>
                  {formatCurrency(results.monthlyRevenue)}
                </span>
              </div>

              <div className={styles.roiRow}>
                <span className={styles.roiLabel}>ROI Mensal:</span>
                <span className={styles.roiValue}>{formatROI(results.roi)}</span>
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
