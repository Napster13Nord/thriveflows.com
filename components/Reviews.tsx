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
  image?: string;
};

const REVIEWS: Review[] = [
  {
    name: "Ivan G.",
    initial: "I",
    color: "#4285F4",
    timeAgo: "2 months ago",
    text: "We were losing sales and didn't even realize it. ThriveFlows set up the whole email system in a week — abandoned cart recovery, win-backs, the works. In the first month alone, we recovered over €3,200 in revenue we would've lost. It was completely hands-off for us. Total game-changer.",
    image: "/reviews/NIrPcXBZMPeiKxE7iAQCblyPR1s.avif",
  },
  {
    name: "Vanessa M.",
    initial: "V",
    color: "#EA4335",
    timeAgo: "6 months ago",
    text: "I was spending hours trying to figure out email marketing on my own. André and ThriveFlows took over everything — from writing the emails to setting up the automations. The quality of copy and the design of the templates blew me away. Within two weeks, the automated flows were already bringing back customers who'd left items in their cart.",
    image: "/reviews/QgcPZT0QjT9J4djhNmQ7CNKjWmQ.avif",
  },
  {
    name: "Adnan R.",
    initial: "A",
    color: "#FBBC05",
    timeAgo: "3 months ago",
    text: "I run a niche WooCommerce store and honestly didn't think email automation would make that big of a difference. I was wrong. ThriveFlows built a full recovery system — browse abandonments, post-purchase flows, re-engagement — and it started earning within days.",
    image: "/reviews/RgkBKlTT69xgZPIkQ168MW4DNdw.avif",
  },
  {
    name: "Elena D.",
    initial: "E",
    color: "#34A853",
    timeAgo: "4 months ago",
    text: "The ROI has been incredible. We invested in the professional package and within 3 months recovered over €8,000 in lost revenue. The team is super responsive and the automations just keep working in the background. Best marketing investment we've made this year.",
    image: "/reviews/UTli9R8MxqCirlLY8CQBMysbibo.avif",
  },
  {
    name: "Marco S.",
    initial: "M",
    color: "#4285F4",
    timeAgo: "5 months ago",
    text: "What impressed me most was the zero-risk model. They don't charge unless the system generates at least 10% of total sales. That gave me the confidence to try it. Now it's generating 22% and I couldn't be happier. Highly recommend for any WooCommerce store.",
    image: "/reviews/Xb5QyI4ZMQUDDZHmYKn2I332E0Y.avif",
  },
  {
    name: "Sandra K.",
    initial: "S",
    color: "#EA4335",
    timeAgo: "1 month ago",
    text: "From the strategy call to full launch, the process was seamless. They handled every detail — email copy, designs, automation logic, testing. I barely had to lift a finger. And the results speak for themselves. Our monthly revenue increased by 17% purely from the email flows.",
    image: "/reviews/ikuJYRf4lZDgcXUIffgqU7PhyI.avif",
  },
];

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

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
          <span className="section-badge">Real Results</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={styles.grid}
        >
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={styles.card}
            >
              {/* Profile row */}
              <div className={styles.profileRow}>
                <div
                  className={styles.avatar}
                  style={{ background: review.color }}
                >
                  {review.initial}
                </div>
                <div className={styles.profileInfo}>
                  <div className={styles.profileName}>{review.name}</div>
                  <div className={styles.profileTime}>{review.timeAgo}</div>
                </div>
                <div className={styles.googleIcon}>
                  <GoogleIcon />
                </div>
              </div>

              {/* Stars */}
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={styles.star}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p className={styles.reviewText}>{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
