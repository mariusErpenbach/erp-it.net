"use client";

export default function FooterMain() {
  return (
    <footer id="footerMain" className="footer-container">
      <div className="footer-columns">
        <div className="footer-section">
          <h3>Rechtliches</h3>
          <ul>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/datenschutz">Datenschutz</a></li>
            <li><a href="/cookie-richtlinie">Cookie-Richtlinie</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Unternehmen</h3>
          <ul>
            <li><a href="/ueber-uns">Über uns</a></li>
         
            <li><a href="/blog">Blog</a></li>

            <li><a href="/partner">Partner</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/faq">FAQ</a></li>

          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alle Rechte vorbehalten.</p>
        <div className="footer-legal-links">
          <a href="/nutzungsbedingungen">Nutzungsbedingungen</a>
          {/* <a href="/sitemap">Sitemap</a> */}
        </div>
      </div>
    </footer>
  );
}