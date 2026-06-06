"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  {
    question: "Como funciona a garantia de resultados?",
    answer:
      "O sistema é desenhado para gerar reuniões qualificadas. Se nos primeiros 30 dias não conseguirmos gerar resultados mensuráveis, devolvemos o seu investimento. A nossa receita depende do seu sucesso — estamos 100% alinhados com os seus objetivos.",
  },
  {
    question: "Quanto tempo demora a implementação completa?",
    answer:
      "A implementação completa demora entre 7 a 14 dias. Isso inclui a definição do ICP, criação das listas, setup da infraestrutura de email, escrita das sequências e lançamento das primeiras campanhas. Após o lançamento, as primeiras respostas costumam chegar na primeira semana.",
  },
  {
    question: "Funciona no meu setor de atividade?",
    answer:
      "O sistema funciona para qualquer negócio B2B que venda serviços ou produtos de médio a alto valor. Já implementamos com sucesso em setores como tecnologia, consultoria, agências, SaaS, e-commerce B2B, indústria e muitos outros. Na consultoria gratuita, analisamos se o sistema é adequado para o seu caso específico.",
  },
  {
    question: "Preciso de conhecimentos técnicos para gerir o sistema?",
    answer:
      "Não. O sistema é 100% Done-For-You. Nós cuidamos de toda a parte técnica — desde a infraestrutura de emails até à criação de copy, personalização com IA e monitoramento das campanhas. A única coisa que precisa fazer é responder às leads qualificadas que chegam à sua caixa de entrada.",
  },
  {
    question: "E se os emails forem para spam ou a conta for suspensa?",
    answer:
      "Utilizamos as melhores práticas de deliverability: domínios dedicados com warm-up progressivo, rotação de contas, volume controlado e monitoramento contínuo da reputação. Cada conta é configurada com SPF, DKIM e DMARC. O risco de suspensão é mínimo porque seguimos todas as diretrizes dos provedores de email.",
  },
];

function FAQItem({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof FAQ_ITEMS)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
      <button className={styles.question} onClick={onClick}>
        <span>{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={styles.icon}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.answerWrapper}
          >
            <p className={styles.answer}>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className={`section ${styles.section}`} ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className="section-badge">FAQ</span>
            <h2 className="section-title section-title-centered">
              Tire as suas dúvidas antes<br />
              de dar o próximo passo
            </h2>
            <p className="section-subtitle section-subtitle-centered">
              Aqui estão as respostas às perguntas mais comuns sobre implementação, resultados e suporte.
            </p>
          </div>

          <div className={styles.list}>
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
