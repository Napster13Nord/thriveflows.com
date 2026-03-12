"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Reviews.module.css";

type Review = {
  name: string;
  initial: string;
  color: string;
  timeAgo: string;
  text: string;
  hasPhoto?: boolean;
  photoSrc?: string;
};

const REVIEWS: Review[] = [
  {
    name: "Ivan G.",
    initial: "I",
    color: "#009688",
    timeAgo: "2 meses atrás",
    text: "Estávamos a perder vendas e nem nos apercebíamos. A ThriveFlows configurou todo o sistema de e-mails numa semana — recuperação de carrinho abandonado, win-backs, tudo. No primeiro mês recuperámos mais de €3.200 em receita que teríamos perdido. Foi completamente hands-off. Um game-changer total.",
  },
  {
    name: "Vanessa M.",
    initial: "V",
    color: "#009688",
    timeAgo: "6 meses atrás",
    text: "Recomendo sem dúvida os serviços do André. Tem muita experiência na sua área, é super profissional e adapta-se facilmente aos diferentes tipos de negócio.",
  },
  {
    name: "Bruno C.",
    initial: "B",
    color: "#4CAF50",
    timeAgo: "1 ano atrás",
    text: "An amazing job he did for us. Highly recommend.",
  },
  {
    name: "Inês D.",
    initial: "I",
    color: "#9C27B0",
    timeAgo: "3 meses atrás",
    text: "Very professional, always available to help dinamize the clientes, with new ideas and new ways of generating more income, we are very grateful for having the chance of reaching out and giving him this opportunity, it has been a very grateful path and we would recommend 100%. You will be very satisfied with his work!",
    hasPhoto: true,
    photoSrc: "/reviews/UTli9R8MxqCirlLY8CQBMysbibo.avif",
  },
  {
    name: "Marco S.",
    initial: "M",
    color: "#2196F3",
    timeAgo: "5 meses atrás",
    text: "O que mais me impressionou foi o modelo sem risco. Não cobram a menos que o sistema gere pelo menos 10% das vendas totais. Isso deu-me confiança para experimentar. Agora está a gerar 22% e não podia estar mais satisfeito. Recomendo para qualquer loja WooCommerce.",
  },
  {
    name: "Sandra K.",
    initial: "S",
    color: "#F44336",
    timeAgo: "1 mês atrás",
    text: "Desde a chamada estratégica até ao lançamento completo, o processo foi impecável. Trataram de cada detalhe — copy dos e-mails, designs, lógica de automação, testes. Mal tive de levantar um dedo. E os resultados falam por si. A nossa receita mensal aumentou 17% apenas com os fluxos de e-mail.",
  },
];

const GoogleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className={styles.scrollContainer}
      >
        <div className={styles.scrollTrack}>
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.card}
            >
              {/* Profile row */}
              <div className={styles.profileRow}>
                {review.hasPhoto && review.photoSrc ? (
                  <img
                    src={review.photoSrc}
                    alt={review.name}
                    className={styles.avatarPhoto}
                  />
                ) : (
                  <div
                    className={styles.avatar}
                    style={{ background: review.color }}
                  >
                    {review.initial}
                  </div>
                )}
                <div className={styles.profileInfo}>
                  <div className={styles.profileName}>{review.name}</div>
                  <div className={styles.profileTime}>{review.timeAgo}</div>
                </div>
              </div>

              {/* Review text */}
              <p className={styles.reviewText}>{review.text}</p>

              {/* Bottom row: stars left, Google icon right */}
              <div className={styles.bottomRow}>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className={styles.star}>★</span>
                  ))}
                </div>
                <GoogleIcon />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
