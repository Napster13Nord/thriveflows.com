"use client";

import styles from "./Reviews.module.css";

const REVIEW_IMAGES = [
  { src: "/reviews/NIrPcXBZMPeiKxE7iAQCblyPR1s.avif", alt: "Avaliação de cliente 1" },
  { src: "/reviews/QgcPZT0QjT9J4djhNmQ7CNKjWmQ.avif", alt: "Avaliação de cliente 2" },
  { src: "/reviews/RgkBKlTT69xgZPIkQ168MW4DNdw.avif", alt: "Avaliação de cliente 3" },
  { src: "/reviews/UTli9R8MxqCirlLY8CQBMysbibo.avif", alt: "Avaliação de cliente 4" },
  { src: "/reviews/Xb5QyI4ZMQUDDZHmYKn2I332E0Y.avif", alt: "Avaliação de cliente 5" },
  { src: "/reviews/ikuJYRf4lZDgcXUIffgqU7PhyI.avif", alt: "Avaliação de cliente 6" },
];

// Duplicate the array so the marquee loops seamlessly
const MARQUEE_ITEMS = [...REVIEW_IMAGES, ...REVIEW_IMAGES];

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {MARQUEE_ITEMS.map((img, i) => (
            <div key={i} className={styles.card}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.reviewImg}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
