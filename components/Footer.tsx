import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "O Meu Sistema", href: "#results" },
  { label: "Calculadora de Receitas", href: "#calculator" },
  { label: "O Meu Processo", href: "#how" },
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
              <img src="/logo.webp" alt="Thrive Flows Logo" width={24} height={24} style={{ borderRadius: '6px' }} />
              <span>Thrive Flows</span>
            </a>
            <p className={styles.brandDesc}>
              Sistemas automatizados de cold email + IA
              para empresas B2B. Transformamos
              prospects frios em reuniões qualificadas
              com garantia de resultados.
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
            <h4 className={styles.colTitle}>Contacto</h4>
            <div className={styles.colLinks}>
              <a
                href="mailto:hello@thriveflows.com"
                className={styles.colLink}
              >
                hello@thriveflows.com
              </a>
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
            © All right reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
