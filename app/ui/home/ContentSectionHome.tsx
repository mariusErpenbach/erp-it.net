import Image from 'next/image';
import IdeaForm from './IdeaForm';
import SkillChart from './SkillChart';
export default function ContentSectionHome() {
    return (
      <div id="contentSectionHome">
        <section id="webDevSection" className="contentSectionHome-section">
            <div id="webDevOverview">
            <span><strong>Web-Development</strong></span> 
            <p>Optimierte Struktur und semantisches HTML für bessere SEO und Barrierefreiheit.
                </p>
                <div id="webDev-image-container">
                      <Image 
                        src="https://uploads.erp-it.net/images/webDevPreview.png" 
                        alt="Website mit Statistiken" 
                        width={200} 
                        height={150} 
                      />
                    </div>
              </div>
               <section>
                <div>
            
                </div>
                </section>
                <footer>
                <h1>Mitwirken beim Blog?</h1>
                <p>                Interesse an IT-Themen? Melde dich und werde Autor!
                </p>
                </footer>
        </section>

        <section id="softwareDevSection" className="contentSectionHome-section">
          <div id="softwareDevOverview">
          <span><strong>Software-Solutions</strong></span>
            <p>
            Maßgeschneiderte Software für Effizienz und Zukunftssicherheit.
            </p>
          </div>
         <div id="idea-form-container">
         <h1>Let&apos;s connect&#33;</h1>
          <IdeaForm/>
          </div>
        
        </section>

        <section id="embeddedSoftwareSection" className="contentSectionHome-section">
          <div id="embeddedSoftwareOverview">
          <span><strong>Embedded Software</strong></span>
              <div><h1>VPD Systeme</h1><p>Steuerung von Geräten über Relais.</p></div> 
              <div><h1>Hintergrundbeleuchtung</h1><p>LEDs passen Farben dynamisch an.</p></div>
              <div><h1>Streaming Display</h1><p>ESP32 mit Touchscreen für Steuerung.</p></div>
          </div>
          <div id="embeddedSoftwarePics">
              <Image src="https://uploads.erp-it.net/images/ES1.jpg" alt="Embedded Software 1" width={300} height={200}/>
              <Image src="https://uploads.erp-it.net/images/ES3.jpg" alt="Embedded Software 3" width={300} height={200}/>
              <Image src="https://uploads.erp-it.net/images/ES2.jpg" alt="Embedded Software 2" width={300} height={200}/>
          </div>
        </section>
      </div>
    );
}