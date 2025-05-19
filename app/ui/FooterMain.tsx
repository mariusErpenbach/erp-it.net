"use client";
import Hypercube from "./art/Hypercube";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function FooterMain() {
  const { t } = useLanguage();

  return (
    <footer id="footerMain" className="footer-container">
      <div className="footer-columns">
        <div className="footer-section">
          <h3>{t.footer.legal}</h3>
          <ul>
            <li><Link href="/impressum">{t.footer.impressum}</Link></li>
            <li><Link href="/datenschutz">{t.footer.privacy}</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t.footer.company}</h3>
          <ul>
            <div id="hypercube-box"></div><Hypercube></Hypercube>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.support}</h3>
          <ul>
            <li><Link href="/tools">{t.footer.tools}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.socialMedia}</h3>
          <ul>
            <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        <div className="footer-legal-links">
          <Link href="/nutzungsbedingungen">{t.footer.terms}</Link>
          <Link href="/sitemap">{t.footer.sitemap}</Link>
        </div>
      </div>
    </footer>
  );
}