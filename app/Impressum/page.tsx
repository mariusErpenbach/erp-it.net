import { motion } from 'framer-motion';

const Impressum = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h1>📄 Impressum</h1>
      <p><strong>Angaben gemäß § 5 TMG</strong></p>
      <p><strong>Marius Erpenbach</strong></p>
      <p>Joseph-Pannenbecker-Straße 17</p>
      <p>Deutschland</p>

      <h3>Kontakt:</h3>
      <p>E-Mail: <a href="mailto:Kontakt@erp-it.net">Kontakt@erp-it.net</a></p>

      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
      <p>Marius Erpenbach</p>
      <p>Adresse wie oben</p>
    </motion.div>
  );
}

export default Impressum;