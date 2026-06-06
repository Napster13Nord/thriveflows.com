"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./HowItWorks.module.css";
import SpotlightCard from "./SpotlightCard";
import { ShinyButton } from "@/components/ui/ShinyButton";

const STEPS = [
  {
    step: 1,
    title: "Fundação (Inteligência Estratégica)",
    description:
      "Alinho os seus objetivos de crescimento com inteligência de mercado e um ICP claramente definido. Analiso o seu negócio, concorrência e mercado para criar uma base sólida baseada em dados, não suposições.",
    listLabel: "O que eu faço:",
    items: [
      "Análise profunda do seu negócio e objetivos",
      "Definição do perfil de cliente ideal (ICP)",
      "Research de mercado e análise competitiva",
      "Estratégia de messaging personalizada",
    ],
  },
  {
    step: 2,
    title: "Lista (Targeting de Precisão)",
    description:
      "Uso IA avançada e sinais de intenção de mercado para construir a sua base de prospects verificada. Cada contacto é relevante, qualificado e alinhado com o seu ICP, garantindo máxima eficiência sem esforço desperdiçado.",
    listLabel: "O que eu faço:",
    items: [
      "Criação de listas segmentadas com prospects",
      "Validação de emails e informações de contacto",
      "Enrichment com dados comportamentais",
      "Segmentação por setor, cargo e nicho",
    ],
  },
  {
    step: 3,
    title: "Outreach (Personalizado)",
    description:
      "Não segmento apenas por cargo ou setor. Trato cada prospect como indivíduo único, personalizando cada mensagem com IA baseada na situação específica da empresa — funding rounds, contratações — garantindo relevância máxima.",
    listLabel: "O que eu faço:",
    items: [
      "Scraping automatizado dos websites",
      "Personalização com IA baseada em dados reais",
      "Sequências de follow-up inteligentes",
      "Respostas em menos de 2 minutos",
    ],
  },
  {
    step: 4,
    title: "Wins (Otimização de Resultados)",
    description:
      "Não lanço as campanhas e espero pelo melhor. Cada campanha é monitorizada diariamente — subject lines, reply rates, conversões para reuniões — e ajustada em tempo real. Se algo não performa, corrijo imediatamente, não no próximo trimestre.",
    listLabel: "O que eu faço:",
    items: [
      "Monitoramento diário de todas as métricas",
      "A/B testing contínuo de subject lines e copy",
      "Ajustes em tempo real baseados em performance",
      "Relatórios semanais com insights acionáveis",
    ],
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="how" className={`section ${styles.section}`} ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className="section-badge">O Meu Processo</span>
            <h2 className="section-title section-title-centered">
              Os 4 Pilares Que Fazem Este Sistema<br />
              Gerar Reuniões Consistentemente
            </h2>
            <p className="section-subtitle section-subtitle-centered">
              Cada etapa é pensada para atrair os leads certos, criar abordagens personalizadas e otimizar resultados
              continuamente. Simples de aplicar, poderoso de escalar. Sem esses 4 elementos, qualquer estratégia
              de prospecção vira só mais um chute no escuro.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className={styles.grid}
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
              >
                <SpotlightCard className={styles.card} spotlightColor="rgba(139, 92, 246, 0.15)">
                  <div className={styles.stepBadge}>Step {step.step}</div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.description}</p>
                  <div className={styles.listSection}>
                    <span className={styles.listLabel}>{step.listLabel}</span>
                    <ul className={styles.bulletList}>
                      {step.items.map((item, i) => (
                        <li key={i} className={styles.bulletItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          <div className={styles.ctaRow}>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
