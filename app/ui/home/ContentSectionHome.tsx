import Image from 'next/image';

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
                    <div>
                      <Image 
                        src="https://erp-it.net/uploads/webDevPreview.png" 
                        alt="Three business looking People standing in front of monitor that shows a smooth looking website with some statistics on it."
                        width={250} 
                        height={270} 
                      />
                    </div>
                </section>
                <footer>
                 <p> webdev examples: Shopfolio </p>
                </footer>
        </section>

        <section id="softwareDevSection" className="contentSectionHome-section">
          <div id="softwareDevOverview">
            <p><span><strong>Software-Solutions</strong></span><br />
            Mehr als <strong>Programmieren</strong> – wir entwickeln <strong>maßgeschneiderte Software</strong>, die Ihr Unternehmen <strong>effizienter</strong> und <strong>zukunftssicher</strong> macht. Von der Idee bis zur Umsetzung</p>
          </div>
          <section>
            <Image src="https://erp-it.net/uploads/alienPlanning.png" alt="Three business aliens having an idea." width={150} height={150} />
            <div className="alienPresentationStep">
              <p>Plan</p>
              <i>➡</i>
            </div>
            <Image src="https://erp-it.net/uploads/alienMeeting.png" alt="Two business aliens are planning a new project together." width={150} height={150} />
            <div className="alienPresentationStep">
              <p>Create</p>
              <i>➡</i>
            </div>
            <Image src="https://erp-it.net/uploads/alienStressTest.png" alt="An coder alien is doing some stress tests." width={200} height={150} />
            <div className="alienPresentationStep">
              <p>Present</p>
              <i>➡</i>
            </div>
            <Image src="https://erp-it.net/uploads/alienCelebration.png" alt="Two business aliens and a coder alien celebrating." width={150} height={150} />
          </section>
         <footer>
            <h1>Lets connect and start a project</h1>
            <form action="submit">
              <textarea name="your idea" placeholder="Deine Idee"></textarea>
              <div><input type="text" placeholder="Dein Kontakt"/> <button>Senden</button></div>
            </form>
          </footer> 
        </section>

        <section id="embeddedSoftwareSection" className="contentSectionHome-section">
          <div id="embeddedSoftwareOverview">
            <p><span><strong>Embedded Software</strong></span><br />
            <strong>Arduino</strong>- und <strong>Raspberry Pi</strong>-Mikrocontroller-Projekte für den <strong>Smart-Home</strong>-Bereich.</p>
          </div>
          <div id="embeddedSoftwarePics">
              <Image src="https://erp-it.net/uploads/ES1.jpg" alt="Embedded Software Image 1" width={200} height={150} />
              <Image src="https://erp-it.net/uploads/ES3.jpg" alt="Embedded Software Image 3" width={200} height={150} />
              <Image src="https://erp-it.net/uploads/ES2.jpg" alt="Embedded Software Image 2" width={200} height={150} />
          </div>
        </section>
      </div>
    );
}