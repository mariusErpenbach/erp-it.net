"use server";

export async function generateBewerbungPdfApi2Pdf() {
  const apiKey = process.env.API2PDF_KEY;
  if (!apiKey) throw new Error('API2PDF_KEY ist nicht gesetzt!');

  // HTML-Template importieren
  const { bewerbungHtml } = await import("@/app/ui/tools/bewerbungshilfe/bewerbungTemplate");

  // Request an Api2Pdf
  const response = await fetch('https://v2.api2pdf.com/chrome/html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiKey,
    },
    body: JSON.stringify({
      html: bewerbungHtml,
      inlinePdf: true,
      fileName: 'bewerbung.pdf',
    }),
  });

  const data = await response.json();
  console.log('Api2Pdf response:', data);
  if (data.pdf) {
    return data.pdf;
  } else {
    throw new Error('PDF konnte nicht generiert werden: ' + JSON.stringify(data));
  }
}