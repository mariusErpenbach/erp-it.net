"use client"

import { generateBewerbungPdfApi2Pdf } from '@/app/actions/bewerbungshelper';

const ChangeFormular: React.FC = () => {
    const handleExportPdf = async () => {
        try {
          const pdfUrl = await generateBewerbungPdfApi2Pdf();
          // PDF von der URL laden
          const res = await fetch(pdfUrl);
          const blob = await res.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'bewerbung.pdf';
          a.click();
          window.URL.revokeObjectURL(url);
        } catch (error) {
          alert('PDF konnte nicht erstellt werden!');
        }
      };
  return (
    <div>
      <button onClick={handleExportPdf}>Bewerbung als PDF herunterladen</button>
    </div>
  );
};

export default ChangeFormular;