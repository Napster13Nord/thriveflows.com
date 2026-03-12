import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Results", href: "#results" },
  { label: "ROI Calculator", href: "#calculator" },
  { label: "Our Pillars", href: "#pillars" },
  { label: "How it Works", href: "#how" },
  { label: "FAQs", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#814ac8" />
                <path
                  d="M8 10h12M8 14h8M8 18h10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>Thrive Flows</span>
            </a>
            <p className={styles.brandDesc}>
              Email Automation System for E-commerce. We turn lost visitors into
              recurring customers automatically.
            </p>
            <p className={styles.brandRegion}>
              Serving stores in Europe, the United Arab Emirates, and South Africa.
            </p>
          </div>

          {/* Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Links</h4>
            <nav className={styles.colLinks}>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={styles.colLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.colLinks}>
              <a
                href="mailto:hello@thriveflows.com"
                className={styles.colLink}
              >
                hello@thriveflows.com
              </a>
              <span className={styles.colText}>Based in Finland</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <a
              href="https://wpexperts.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              Visioned and Crafted by{" "}
              <span className={styles.creditName}>WPexperts.pt</span>
            </a>
          </div>
          <div className={styles.bottomRight}>
            © All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
