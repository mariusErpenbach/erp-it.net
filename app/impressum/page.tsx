"use client";

import MenuBar from "../ui/MenuBar";
import Link from 'next/link';
import { useLanguage } from "../ui/LanguageContext";

const ImpressumPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <MenuBar />
      <div className="impressum-page">
        <h1>📄 {t.impressum.title}</h1>
        <p><strong>{t.impressum.section1.title}</strong></p>
        <p><strong>{t.impressum.section1.name}</strong></p>
        <p>{t.impressum.section1.address}</p>
        <p>{t.impressum.section1.country}</p>

        <div className="content-container">
          <h3>{t.impressum.contact.title}</h3>
          <p>{t.impressum.contact.email}: <Link href="mailto:Kontakt@erp-it.net">Kontakt@erp-it.net</Link></p>
        </div>

        <div className="contact-container">
          <h3>{t.impressum.responsible.title}</h3>
          <p>{t.impressum.responsible.name}</p>
          <p>{t.impressum.responsible.address}</p>
        </div>

        <div className="datenschutz-container">
          <h2>🔒 {t.impressum.privacy.title}</h2>
          <p>{t.impressum.privacy.description}</p>
          <ul>
            <li>{t.impressum.privacy.ideaForm}</li>
            <li>{t.impressum.privacy.contactForm}</li>
          </ul>
          <p><strong>{t.impressum.privacy.noSharing.title}</strong><br />{t.impressum.privacy.noSharing.description}</p>
          <p><strong>{t.impressum.privacy.legalBasis.title}</strong><br />{t.impressum.privacy.legalBasis.description}</p>
          <p><strong>{t.impressum.privacy.revocation.title}</strong><br />{t.impressum.privacy.revocation.description}</p>
          <p><strong>{t.impressum.privacy.storage.title}</strong><br />{t.impressum.privacy.storage.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;