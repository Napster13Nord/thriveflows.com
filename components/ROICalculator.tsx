"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ROICalculator.module.css";
import SpotlightCard from "./SpotlightCard";

const PACKAGES = [
  { price: 300, automations: 3, key: "essential" },
  { price: 500, automations: 5, key: "professional" },
  { price: 700, automations: 8, key: "complete" },
];

const CAL_LINK = "https://cal.com/andre-lopes/revenue-recovery-potential-call";

export default function ROICalculator() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [monthlyRevenue, setMonthlyRevenue] = useState(10000);
  const [systemPrice, setSystemPrice] = useState(500);
  const [growthPercentage, setGrowthPercentage] = useState(15);

  const selectedPackage =
    PACKAGES.find((p) => p.price === systemPrice) || PACKAGES[1];

  const results = useMemo(() => {
    const monthlyIncrease = (monthlyRevenue * growthPercentage) / 100;
    const yearlyReturn = monthlyIncrease * 12;
    const roi = ((yearlyReturn - systemPrice) / systemPrice) * 100;
    const paybackMonths =
      monthlyIncrease > 0 ? Math.ceil(systemPrice / monthlyIncrease) : 0;
    return { monthlyIncrease, yearlyReturn, roi, paybackMonths };
  }, [monthlyRevenue, systemPrice, growthPercentage]);

  const formatCurrency = (num: number) =>
    "$" + Math.round(num).toLocaleString("en-US");

  const formatROI = (value: number) => {
    const absValue = Math.abs(value);
    const sign = value > 0 ? "+" : "";
    if (absValue >= 1000000)
      return sign + (absValue / 1000000).toFixed(1) + "M%";
    if (absValue >= 1000)
      return sign + Math.round(value).toLocaleString("en-US") + "%";
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
            <span className="section-badge">ROI Calculator</span>
            <h2 className="section-title section-title-centered">
              Discover How Much This System Can Generate For Your Store
            </h2>
            <p className="section-subtitle section-subtitle-centered">
              Use the data below to simulate how much you could receive with the
              ThriveFlow Framework, a complete customer recovery system.
            </p>
          </div>

          <div className={styles.layout}>
            {/* Left: Inputs */}
            <div className={styles.inputs}>
              <h3 className={styles.inputsTitle}>Revenue Calculator</h3>

              {/* Monthly Revenue Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Monthly Revenue:</span>
                  <span className={styles.sliderValue}>
                    {formatCurrency(monthlyRevenue)}
                  </span>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(parseInt(e.target.value))}
                />
                <div className={styles.sliderRange}>
                  <span>$1,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Package Selection */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Automation Package:</span>
                  <span className={styles.sliderValuePurple}>
                    {selectedPackage.automations} Automations · ${selectedPackage.price}
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
                    <span key={pkg.key}>{pkg.automations} aut.</span>
                  ))}
                </div>
              </div>

              {/* Sales Increase Slider */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Sales Increase:</span>
                  <span className={styles.sliderValue}>{growthPercentage}%</span>
                </div>
                <input
                  className={styles.slider}
                  type="range"
                  min="10"
                  max="20"
                  step="1"
                  value={growthPercentage}
                  onChange={(e) => setGrowthPercentage(parseInt(e.target.value))}
                />
                <div className={styles.sliderRange}>
                  <span>10%</span>
                  <span>15%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <SpotlightCard className={styles.results} spotlightColor="rgba(139, 92, 246, 0.15)">
              <h3 className={styles.resultsTitle}>
                Your Growth <span className={styles.purple}>Potential</span>
              </h3>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Automation Package:</span>
                <span className={styles.resultValue}>
                  {selectedPackage.automations} Automations
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Investment:</span>
                <span className={styles.resultValueYellow}>
                  ${selectedPackage.price}
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Estimated Increase:</span>
                <span className={styles.resultValue}>{growthPercentage}%</span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Monthly Gain:</span>
                <span className={styles.resultValueGreen}>
                  {formatCurrency(results.monthlyIncrease)}
                </span>
              </div>

              <div className={styles.resultRow}>
                <span className={styles.resultLabel}>Return in 1 Year</span>
                <span className={styles.resultValueGreenBig}>
                  {formatCurrency(results.yearlyReturn)}
                </span>
              </div>

              <div className={styles.resultRow}>
                <div>
                  <div className={styles.resultLabel}>Payback</div>
                  <div className={styles.resultSub}>Total return on investment</div>
                </div>
                <span className={styles.resultValueYellowMed}>
                  {results.paybackMonths}{" "}
                  {results.paybackMonths === 1 ? "month" : "months"}
                </span>
              </div>

              <div className={styles.roiRow}>
                <span className={styles.roiLabel}>ROI in 1 Year:</span>
                <span className={styles.roiValue}>{formatROI(results.roi)}</span>
              </div>
            </SpotlightCard>
          </div>

          <div className={styles.ctaRow}>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Book Your Free Strategy Call
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 10h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
