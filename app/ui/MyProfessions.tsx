"use client";
import Image from 'next/image';
import IdeaForm from './home/IdeaForm';
import { useLanguage } from "./LanguageContext";

export default function MyProfessions() {
  const { t } = useLanguage();

  return (
    <div id="myProfessions">
      <section id="webDevSection" className="myProfessions-section">
        <div id="webDevOverview">
          <span><strong>{t.myProfessions.webDevelopment.title}</strong></span>
          <p>{t.myProfessions.webDevelopment.description}</p>
          <div id="webDev-image-container">
            <Image 
              src="https://uploads.erp-it.net/images/webDevPreview.png" 
              alt={t.myProfessions.webDevelopment.imageAlt} 
              width={200} 
              height={150} 
            />
          </div>
        </div>
        <footer>
          <h1>{t.myProfessions.blogInvitation.title}</h1>
          <p>{t.myProfessions.blogInvitation.description}</p>
        </footer>
      </section>

      <section id="softwareDevSection" className="myProfessions-section">
        <div id="softwareDevOverview">
          <span><strong>{t.myProfessions.softwareSolutions.title}</strong></span>
          <p>{t.myProfessions.softwareSolutions.description}</p>
        </div>
        <div id="idea-form-container">
          <h1>{t.myProfessions.connect.title}</h1>
          <IdeaForm />
        </div>
      </section>

      <section id="embeddedSoftwareSection" className="myProfessions-section">
        <div id="embeddedSoftwareOverview">
          <span><strong>{t.myProfessions.embeddedSoftware.title}</strong></span>
          <div>
            <h1>{t.myProfessions.embeddedSoftware.vpdSystems.title}</h1>
            <p>{t.myProfessions.embeddedSoftware.vpdSystems.description}</p>
          </div>
          <div>
            <h1>{t.myProfessions.embeddedSoftware.backlighting.title}</h1>
            <p>{t.myProfessions.embeddedSoftware.backlighting.description}</p>
          </div>
          <div>
            <h1>{t.myProfessions.embeddedSoftware.streamingDisplay.title}</h1>
            <p>{t.myProfessions.embeddedSoftware.streamingDisplay.description}</p>
          </div>
        </div>
        <div id="embeddedSoftwarePics">
          <Image src="https://uploads.erp-it.net/images/ES1.jpg" alt={t.myProfessions.embeddedSoftware.images[0]} width={300} height={200} />
          <Image src="https://uploads.erp-it.net/images/ES3.jpg" alt={t.myProfessions.embeddedSoftware.images[1]} width={300} height={200} />
          <Image src="https://uploads.erp-it.net/images/ES2.jpg" alt={t.myProfessions.embeddedSoftware.images[2]} width={300} height={200} />
        </div>
      </section>
    </div>
  );
}