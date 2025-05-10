"use server";

import connectDB from "@/app/db/mongoDB";

export async function generateBewerbungPdfApi2Pdf(form: Record<string, string>) {
  const apiKey = process.env.API2PDF_KEY;
  if (!apiKey) throw new Error('API2PDF_KEY ist nicht gesetzt!');

  // HTML-Template aus der Datenbank holen
  const db = await connectDB();
  if (!db) throw new Error("Datenbankverbindung fehlgeschlagen!");
  const entry = await db.collection("bewerbung").findOne({});
  if (!entry || !entry.indexEntry) throw new Error("Kein HTML-Template in der Datenbank gefunden!");
  let html = entry.indexEntry;

  // Platzhalter ersetzen
  Object.entries(form).forEach(([key, value]) => {
    if (key === "Ansprechpartner" && value.trim() !== "") {
      html = html.replaceAll(`{{${key}}}`, value + '<br/>');
    } else {
      html = html.replaceAll(`{{${key}}}`, value);
    }
  });

  // Request an Api2Pdf
  const response = await fetch('https://v2.api2pdf.com/chrome/html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiKey,
    },
    body: JSON.stringify({
      html,
      inlinePdf: true,
      fileName: 'bewerbung.pdf',
    }),
  });

  const data = await response.json();
  if (data.pdf) {
    return data.pdf;
  } else {
    throw new Error('PDF konnte nicht generiert werden: ' + JSON.stringify(data));
  }
}