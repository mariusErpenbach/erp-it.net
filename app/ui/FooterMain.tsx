"use client";

import Link from "next/link";

export default function FooterMain() {
  return (
    <footer id="footerMain" className="footer-container">
      <div className="footer-columns">
        <div className="footer-section">
          <h3>Rechtliches</h3>
          <ul>
            <li><Link href="/impressum">Impressum</Link></li>
            {/* <li><Link href="/datenschutz">Datenschutz</Link></li> */}
            {/* <li><Link href="/cookie-richtlinie">Cookie-Richtlinie</Link></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Unternehmen</h3>
          <ul>
            {/* <li><Link href="/ueber-uns">Über uns</Link></li> */}
            {/* <li><Link href="/blog">Blog</Link></li> */}
            {/* <li><Link href="/partner">Partner</Link></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            {/* <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/faq">FAQ</Link></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alle Rechte vorbehalten.</p>
        <div className="footer-legal-links">
          {/* <Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link> */}
          {/* <Link href="/sitemap">Sitemap</Link> */}
        </div>
      </div>
    </footer>
  );
}