
import MenuBar from "../ui/MenuBar";
const ImpressumPage = () => {
  return (
    <div >
    <MenuBar></MenuBar>
    <div className='impressum-page'>
      
      <h1>📄 Impressum</h1>
      <p><strong>Angaben gemäß § 5 TMG</strong></p>
      <p><strong>Marius Erpenbach</strong></p>
      <p>Joseph-Pannenbecker-Straße 17</p>
      <p>Deutschland</p>
      <div className='content-container'>
        <h3>Kontakt:</h3>
        <p>E-Mail: <a href="mailto:Kontakt@erp-it.net">Kontakt@erp-it.net</a></p>
      </div>
      <div className='contact-container'>
        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
        <p>Marius Erpenbach</p>
        <p>Adresse wie oben</p>
      </div>
    </div>
    </div>
  );
};

export default ImpressumPage;