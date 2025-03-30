
export default function ContentSectionHome() {
    return (
      <div id="contentSectionHome">
        <section id="webDevSection" className="contentSectionHome-section">
            <div id="webDevOverview">
           
            <p> <span><strong>Web-Development</strong></span> <br />
            <strong>Schnelle Ladezeiten und optimierte Assets</strong> sind essenziell für 
             eine gute Nutzererfahrung. Wir setzen auf <strong>Code-Splitting</strong>, <strong>Lazy Loading</strong> und <strong>effiziente API-Anbindungen</strong>,
              um reaktionsschnelle Webanwendungen zu entwickeln.
            </p>
              </div>
               <section>
                <div><p>Eine <strong>Website</strong> sollte nicht nur gut aussehen, sondern auch <strong>gefunden</strong> werden. Wir optimieren <strong>Struktur</strong>, <strong>Ladezeiten</strong> und <strong>semantisches HTML</strong>, um eine gute <strong>SEO-Performance</strong> und <strong>barrierefreie Nutzung</strong> sicherzustellen.
                </p></div>
                    <div><img src="./webDevPreview.png" alt="Three business looking People standing infront of monitor that shows a smooth looking website with some statistics on it." /></div>
                </section>
                <footer>
                 <p> webdev examples: Shopfolio </p>
                </footer>
        </section>
        <section id="softwareDevSection"className="contentSectionHome-section">
          <div id="softwareDevOverview">
            <p><span><strong>Software-Solutions</strong></span><br />
            Mehr als <strong>Programmieren</strong> – wir entwickeln <strong>maßgeschneiderte Software</strong>, die Ihr Unternehmen <strong>effizienter</strong> und <strong>zukunftssicher</strong> macht. Von der Idee bis zur Umsetzung</p>
          </div>
          <section>
          <img src="./alienPlanning.png" alt="Three business aliens having an idea. They sitting together at a desk with many strange devices. They look friendly. Photo is very cartoonish. " />
            <div className="alienPresentationStep">
            <p>Plan</p>
            <i>➡</i>
            </div>
            <img src="./alienMeeting.png" alt="two business aliens are planning a new project together with an coder alien. They sit at a white table, while the coder alien has an computer screen in front of him, the other 2 are pitchting the third one their ideas. very abstract and cartoonish picture. All are focused on their job" />
            <div className="alienPresentationStep">
            <p>Create</p>
            <i>➡</i>
            </div>
            <img src="./alienStressTest.png" alt="an coder alien is doing some stress tests for his new software. He is literally fighting the screen as some sort of alien is trying to come out of the screen. Very cartoonish style." />
            <div className="alienPresentationStep">
            <p>Present</p>
            <i>➡</i>
            </div>
            <img src="./alienCelebration.png" alt="Two business aliens and a coder alien celebrating together the release of the new software infront of an big present. All are very happy. cartoonish style." />
          </section>
         <footer>
            <h1>Lets connect and start a project</h1>
            <form action="submit">
              <textarea name="your idea" id="" placeholder="Deine Idee"></textarea>
              <div><input type="text" placeholder="Dein Kontakt"/> <button>Senden</button></div>
            </form>
          </footer> 
        </section>
        <section id="embeddedSoftwareSection"className="contentSectionHome-section">
          <div id="embeddedSoftwareOverview">
            <p><span><strong>Embedded Software</strong></span><br />
            <strong>Arduino</strong>- und <strong>Raspberry Pi</strong>-Mikrocontroller-Projekte für den <strong>Smart-Home</strong>-Bereich. Durch den Einsatz von <strong>Relais</strong> lassen sich verschiedene Geräte steuern und automatisieren – von <strong>Beleuchtungssystemen</strong> über <strong>Heizungsregelungen</strong> bis hin zu intelligenten <strong>Stromzählersystemen</strong> zur <strong>Verbrauchsüberwachung</strong>. <strong>Sensoren</strong> und <strong>drahtlose Kommunikation</strong> ermöglichen zudem eine nahtlose Integration in bestehende Systeme. So entsteht ein <strong>komfortables</strong> und <strong>energieeffizientes</strong> Zuhause, das sich an individuelle Bedürfnisse anpasst.</p>
          </div>
          <div id="embeddedSoftwarePics">
              <img src="./ES1.jpg" alt="" />
           
              <img src="./ES3.jpg" alt="" />
              <img src="./ES2.jpg" alt="" />
          </div>
        </section>
      </div>
    );
  }
  