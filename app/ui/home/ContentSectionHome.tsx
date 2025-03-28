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
        <section className="contentSectionHome-section">
          <div>
            <h1>Software Solutions</h1>
            <p></p>
          </div>
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
  