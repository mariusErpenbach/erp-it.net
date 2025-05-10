"use client"

import { generateBewerbungPdfApi2Pdf } from '@/app/actions/bewerbungshelper';

const ChangeFormular: React.FC = () => {
    const handleExportPdf = async () => {
        try {
          const pdfUrl = await generateBewerbungPdfApi2Pdf();
          window.open(pdfUrl, '_blank'); // Öffnet das PDF im neuen Tab
          // Alternativ: Download per fetch und Blob, wenn du es direkt herunterladen willst
        } catch  {
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