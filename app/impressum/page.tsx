import MenuBar from "../ui/MenuBar";
import Link from 'next/link';

const ImpressumPage = () => {
  return (
    <div>
      <MenuBar />
      <div className="impressum-page">
        <h1>📄 Impressum</h1>
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p><strong>Marius Erpenbach</strong></p>
        <p>Joseph-Pannenbecker-Straße 17</p>
        <p>Deutschland</p>

        <div className="content-container">
          <h3>Kontakt:</h3>
          <p>E-Mail: <Link href="mailto:Kontakt@erp-it.net">Kontakt@erp-it.net</Link></p>
        </div>

        <div className="contact-container">
          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
          <p>Marius Erpenbach</p>
          <p>Adresse wie oben</p>
        </div>

        <div className="datenschutz-container">
          <h2>🔒 Datenschutzerklärung – Kontakt- und Ideenformular</h2>
          <p>
            Wenn Sie über das Kontaktformular oder das Ideenformular auf unserer Website mit uns in Verbindung treten, werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.
          </p>
          <ul>
            <li>
              Beim Absenden des <strong>Ideenformulars</strong> wird zur Abwehr von Spam-Angriffen die IP-Adresse des Absenders für maximal 24 Stunden in einer Datenbank (MongoDB) gespeichert und anschließend automatisch gelöscht.
            </li>
            <li>
              Beim Absenden des <strong>Kontaktformulars</strong> werden die angegebenen Kontaktdaten (z. B. E-Mail-Adresse) für bis zu 1 Monat gespeichert, um ggf. Rückfragen beantworten zu können. Danach erfolgt eine automatische Löschung.
            </li>
          </ul>
          <p>
            <strong>Keine Weitergabe von Daten:</strong><br />
            Alle übermittelten Daten werden niemals an Dritte weitergegeben und nicht in irgendeiner Form veröffentlicht oder Dritten zugänglich gemacht.
          </p>
          <p>
            <strong>Rechtsgrundlage der Verarbeitung:</strong><br />
            Die Verarbeitung der Daten erfolgt auf Grundlage Ihrer freiwillig erteilten Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p>
            <strong>Widerrufsrecht:</strong><br />
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Eine formlose Mitteilung per E-Mail reicht hierfür aus. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt davon unberührt.
          </p>
          <p>
            <strong>Speicherung & Ort:</strong><br />
            Die Speicherung erfolgt ausschließlich auf Servern, die über MongoDB-Dienste realisiert sind. Eine Übermittlung in Drittländer außerhalb der EU findet nicht statt, sofern dies nicht ausdrücklich erwähnt ist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;