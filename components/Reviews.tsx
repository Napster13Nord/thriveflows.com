"use client";

import styles from "./Reviews.module.css";
import SpotlightCard from "./SpotlightCard";

type Review = {
  name: string;
  initial: string;
  color: string;
  timeAgo: string;
  text: string;
  photoSrc?: string;
  stars: number;
};

const REVIEWS: Review[] = [
  {
    name: "Ivan G.",
    initial: "I",
    color: "#009688",
    timeAgo: "2 meses atrás",
    stars: 5,
    text: "Estávamos a perder vendas e nem nos apercebíamos. A ThriveFlows configurou todo o sistema de e-mails numa semana — recuperação de carrinho abandonado, win-backs, tudo. No primeiro mês recuperámos mais de €3.200 em receita. Um game-changer total.",
  },
  {
    name: "Bruno M.",
    initial: "B",
    color: "#2196F3",
    timeAgo: "4 meses atrás",
    stars: 5,
    photoSrc: "/reviews/QgcPZT0QjT9J4djhNmQ7CNKjWmQ.avif",
    text: "It was a pleasure working with André! His expertise in email marketing was fundamental in optimizing our processes. His ideas and the way he implemented the strategies brought significant results and a great positive impact to our campaigns. I highly recommend his work and hope to have the opportunity to collaborate again in the future.",
  },
  {
    name: "Joao M.",
    initial: "J",
    color: "#009688",
    timeAgo: "25 dias atrás",
    stars: 5,
    text: "Excelente profissional, muito responsável, criativo e atento a todos os pormenores. Obrigado André!",
  },
  {
    name: "Pedro G.",
    initial: "P",
    color: "#607D8B",
    timeAgo: "4 meses atrás",
    stars: 5,
    photoSrc: "/reviews/RgkBKlTT69xgZPIkQ168MW4DNdw.avif",
    text: "André understood our goals from day one and provided solutions that have directly increased our online sales. Totally recommend!",
  },
  {
    name: "Inês D.",
    initial: "I",
    color: "#9C27B0",
    timeAgo: "3 meses atrás",
    stars: 5,
    photoSrc: "/reviews/UTli9R8MxqCirlLY8CQBMysbibo.avif",
    text: "Very professional, always available to help and to help dinamize the clientes, with new ideas and new ways of generating more income. We are very grateful for having the chance of André reaching out and giving him this opportunity, has been a very grateful path and we would recommend 100%. You will be very satisfied!",
  },
  {
    name: "Vanessa M.",
    initial: "V",
    color: "#009688",
    timeAgo: "6 meses atrás",
    stars: 5,
    text: "Recomendo sem dúvida os serviços do André. Tem muita experiência na sua área, é super profissional e adapta-se facilmente aos diferentes tipos de negócio.",
  },
  {
    name: "Bruno C.",
    initial: "B",
    color: "#4CAF50",
    timeAgo: "1 ano atrás",
    stars: 5,
    text: "An amazing job he did for us. Highly recommend.",
  },
  {
    name: "Sandra K.",
    initial: "S",
    color: "#F44336",
    timeAgo: "1 mês atrás",
    stars: 5,
    text: "Desde a chamada estratégica até ao lançamento completo, o processo foi impecável. A nossa receita mensal aumentou 17% apenas com os fluxos de e-mail.",
  },
];

// Duplicate for seamless loop
const MARQUEE_ITEMS = [...REVIEWS, ...REVIEWS];

const GoogleIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-label="Google">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {MARQUEE_ITEMS.map((review, i) => (
            <SpotlightCard key={i} className={styles.card} spotlightColor="rgba(139, 92, 246, 0.15)">
              {/* Profile row */}
              <div className={styles.profileRow}>
                {review.photoSrc ? (
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

              {/* Bottom: stars left, Google right */}
              <div className={styles.bottomRow}>
                <div className={styles.stars}>
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <span key={j} className={styles.star}>★</span>
                  ))}
                  {Array.from({ length: 5 - review.stars }).map((_, j) => (
                    <span key={j} className={styles.starEmpty}>★</span>
                  ))}
                </div>
                <GoogleIcon />
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
