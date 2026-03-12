"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Reviews.module.css";

const REVIEW_IMAGES = [
  { src: "/reviews/NIrPcXBZMPeiKxE7iAQCblyPR1s.avif", alt: "Client review 1" },
  { src: "/reviews/QgcPZT0QjT9J4djhNmQ7CNKjWmQ.avif", alt: "Client review 2" },
  { src: "/reviews/RgkBKlTT69xgZPIkQ168MW4DNdw.avif", alt: "Client review 3" },
  { src: "/reviews/UTli9R8MxqCirlLY8CQBMysbibo.avif", alt: "Client review 4" },
  { src: "/reviews/Xb5QyI4ZMQUDDZHmYKn2I332E0Y.avif", alt: "Client review 5" },
  { src: "/reviews/ikuJYRf4lZDgcXUIffgqU7PhyI.avif", alt: "Client review 6" },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title section-title-centered">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={styles.grid}
        >
          {REVIEW_IMAGES.map((review, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className={styles.reviewCard}
            >
              <img
                src={review.src}
                alt={review.alt}
                className={styles.reviewImage}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
