
export default function ContentSectionHome() {
    return (
      <div id="contentSectionHome">
        <section id="webDevSection" className="contentSectionHome-section">
            <div id="webDevOverview">
            <p><span>
            Schnelle Ladezeiten und optimierte Assets sind essenziell für 
             eine gute Nutzererfahrung. Ich setze auf Code-Splitting, Lazy Loading und effiziente API-Anbindungen,
              um reaktionsschnelle Webanwendungen zu entwickeln.
            </span></p>
              </div>
               <section>
                <div><p><span>Eine Website sollte nicht nur gut aussehen, sondern auch gefunden werden. Ich optimiere Struktur, Ladezeiten und semantisches HTML, um eine gute SEO-Performance und barrierefreie Nutzung sicherzustellen.</span></p></div>
                    <div><img src="./webDevPreview.png" alt="Three business looking People standing infront of monitor that shows a smooth looking website with some statistics on it." /></div>
                </section>
                <footer>
                 <p> webdev examples: Shopfolio </p>
                </footer>
        </section>
        <section id="softwareDevSection"className="contentSectionHome-section">
          <div id="softwareDevOverview">
            <h1>Software Solutions</h1>
            <p><span>Die richtige Softwarelösung zu finden, bedeutet mehr als nur Programmieren. Es geht darum, Ihre individuellen Anforderungen genau zu verstehen und gemeinsam eine Lösung zu entwickeln, die perfekt auf Ihr Unternehmen abgestimmt ist.
Wir arbeiten eng zusammen, um Software zu schaffen, die nicht nur funktioniert, sondern Ihr Unternehmen effizienter, produktiver und zukunftssicher macht. Von der ersten Idee bis zur finalen Umsetzung – gemeinsam bringen wir Ihre Vision zum Leben.
</span></p>
          
          <div><p>lets plan together</p> <a href="#">contact me</a></div>  
          </div>
          <footer>
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
          </footer>
        </section>
        <section className="contentSectionHome-section">
          <div>
            <h1>Embedded Software</h1>
            <p></p>
          </div>
        </section>
      </div>
    );
  }
  