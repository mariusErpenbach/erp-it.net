import Image from 'next/image';
import IdeaForm from './IdeaForm';
import SkillChart from './SkillChart';
export default function ContentSectionHome() {
    return (
      <div id="contentSectionHome">
        <section id="webDevSection" className="contentSectionHome-section">
            <div id="webDevOverview">
            <span><strong>Web-Development</strong></span> 
            <p>
            <strong>Schnelle Ladezeiten und optimierte Assets</strong> sind essenziell für 
             eine gute Nutzererfahrung. Wir setzen auf <strong>Code-Splitting</strong>, <strong>Lazy Loading</strong> und <strong>effiziente API-Anbindungen</strong>,
              um reaktionsschnelle Webanwendungen zu entwickeln.
            </p>
              </div>
               <section>
                <div><p>Eine <strong>Website</strong> sollte nicht nur gut aussehen, sondern auch <strong>gefunden</strong> werden. Wir optimieren <strong>Struktur</strong>, <strong>Ladezeiten</strong> und <strong>semantisches HTML</strong>, um eine gute <strong>SEO-Performance</strong> und <strong>barrierefreie Nutzung</strong> sicherzustellen.
                </p>
                <div id="webDev-image-container">
                      <Image 
                        src="https://uploads.erp-it.net/images/webDevPreview.png" 
                        alt="Three business looking People standing in front of monitor that shows a smooth looking website with some statistics on it."
                        width={250} 
                        height={270} 
                      />
                    </div>
                </div>
             
                </section>
                <footer>
                <h1>Möchtest du mitwirken beim erp-it Blog?</h1>
                <p>                Ich bin immer offen für neue Autoren, die Interesse daran haben, Beiträge rund um Themen aus der IT-Welt zu verfassen. Es geht dabei um den Austausch von Gedanken, Ideen und Erfahrungen – ganz ohne Druck. Falls du Lust hast, deinen Text beizusteuern, melde dich gerne!
                </p>
                </footer>
        </section>

        <section id="softwareDevSection" className="contentSectionHome-section">
          <div id="softwareDevOverview">
          <span><strong>Software-Solutions</strong></span>
            <p>
            Mehr als <strong>Programmieren</strong> – wir entwickeln <strong>maßgeschneiderte Software</strong>, die Ihr Unternehmen <strong>effizienter</strong> und <strong>zukunftssicher</strong> macht. Von der Idee bis zur Umsetzung</p>
          </div>
     
         <div id="idea-form-container">
         <h1>Let&apos;s connect and start a project&#33;</h1>

          <IdeaForm/>
          </div>
          <SkillChart/>

        </section>

        <section id="embeddedSoftwareSection" className="contentSectionHome-section">
          <div id="embeddedSoftwareOverview">
          <span><strong>Embedded Software</strong></span>
            
           
              <div><h1>VPD Systeme</h1><p>Steuerung von Elektronischen Geräten über ein oder mehrere Relais</p></div> 
              <div><h1>Atmospherische Hintergrundbeleuchtung</h1><p>Über Microcontroller gesteuerte LEDs Leuchten, welche die Farben dynamisch in Echtzeit anpassen, abgestimmt auf die Farbpallete des Bildschirminhalts.</p></div>
              <div><h1>Streaming Display</h1><p>Ein ESP32 mit einem Touchscreen als externes Eingabe Gerät zur Programmsteuerung, Navigation, oder Minibildschirm.</p></div>
              
          </div>
          <div id="embeddedSoftwarePics">
              <Image src="https://uploads.erp-it.net/images/ES1.jpg" alt="Embedded Software Image 1" width={300} height={200}/>
              <Image src="https://uploads.erp-it.net/images/ES3.jpg" alt="Embedded Software Image 3" width={300} height={200}/>
              <Image src="https://uploads.erp-it.net/images/ES2.jpg" alt="Embedded Software Image 2" width={300} height={200}/>
              <p>
            <strong>Arduino</strong>- und <strong>Raspberry Pi</strong>-Mikrocontroller-Projekte für den <strong>Smart-Home</strong>-Bereich.
            </p>
          </div>
          
        </section>
      </div>
    );
}