"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  {
    question: "How do the automations actually work?",
    answer:
      "Our system integrates directly with your WooCommerce store and email platform. It automatically tracks customer behavior — abandoned carts, browsed products, purchase history — and sends personalized, pre-written email sequences to recover those lost sales. Everything runs on autopilot once installed.",
  },
  {
    question: "What do I need to get started with the implementation?",
    answer:
      "Just a 15-minute strategy call to understand your store's needs. After that, we handle everything: from email copywriting to template design to automation setup. You'll just need to approve the emails before launch.",
  },
  {
    question: "Do you do everything, or do I need a technical team?",
    answer:
      "We do everything. You don't need any technical team, developer, or email marketing specialist. Our team handles the complete setup, from strategy to launch, and ongoing optimization.",
  },
  {
    question: "Why do you only charge if it reaches at least 10% of total sales?",
    answer:
      "Because we believe in results. Our pricing model means we only succeed when you succeed. If our system doesn't generate at least 10% of your total sales, you don't pay. This aligns our incentives with yours — we're motivated to maximize your revenue recovery.",
  },
  {
    question: "What if it doesn't reach 10% of sales? Do I pay anything?",
    answer:
      "No. If our automations don't generate at least 10% of your total sales, you pay nothing. The 30-day free trial gives you zero risk to see the results firsthand.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most stores see their first recovered sales within the first week of launch. The full system is installed in 7-10 days, and results compound over time as we optimize the automations based on real data from your store.",
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
            <span className="section-badge">FAQs</span>
            <h2 className="section-title section-title-centered">
              Get Your Questions Answered Before Taking the Next Step
            </h2>
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
