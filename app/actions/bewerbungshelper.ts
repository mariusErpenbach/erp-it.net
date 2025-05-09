"use server";

import connectDB from "@/app/db/mongoDB";

async function embedImagesAsBase64(html: string) {
  // Finde alle <img src="..."> Tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
  let match;
  let newHtml = html;
  const promises = [];
  const replacements: { imgUrl: string; dataUrl: string; }[] = [];

  while ((match = imgRegex.exec(html)) !== null) {
    const imgUrl = match[1];
    // Nur bereits eingebettete base64-Bilder überspringen
    if (imgUrl.startsWith("data:")) continue;
    // Externe und lokale Bilder per fetch holen
    const promise = fetch(imgUrl)
      .then(async res => {
        if (!res.ok) return;
        const arrayBuffer = await res.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');
        // Dateityp bestimmen
        let ext = 'png';
        const extMatch = imgUrl.match(/\.([a-zA-Z0-9]+)(\?|$)/);
        if (extMatch) ext = extMatch[1].toLowerCase();
        // Sonderfall jpg/jpeg
        if (ext === 'jpg') ext = 'jpeg';
        const dataUrl = `data:image/${ext};base64,${base64}`;
        replacements.push({ imgUrl, dataUrl });
      })
      .catch(() => {}); // Fehler ignorieren, falls Bild nicht geladen werden kann
    promises.push(promise);
  }
  await Promise.all(promises);
  // Ersetze alle src durch base64
  for (const { imgUrl, dataUrl } of replacements) {
    newHtml = newHtml.replaceAll(`src=\"${imgUrl}\"`, `src=\"${dataUrl}\"`);
    newHtml = newHtml.replaceAll(`src='${imgUrl}'`, `src='${dataUrl}'`);
  }
  return newHtml;
}

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

  // Debug-Log: HTML-Länge und Platzhalter-Status
  console.log("[BewerbungPDF] HTML-Länge nach Platzhalter:", html.length);
  if (html.length < 1000) console.log("[BewerbungPDF] HTML-Inhalt:", html);

  // Lokale und externe Bilder als Base64 einbetten
  try {
    html = await embedImagesAsBase64(html);
  } catch (err) {
    console.error("[BewerbungPDF] Fehler beim Einbetten der Bilder:", err);
  }
  console.log("[BewerbungPDF] HTML-Länge nach Base64-Embedding:", html.length);

  // Request an Api2Pdf
  try {
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
    console.log("[BewerbungPDF] Api2Pdf Response:", data);
    if (data.pdf) {
      return data.pdf;
    } else {
      throw new Error('PDF konnte nicht generiert werden: ' + JSON.stringify(data));
    }
  } catch (err) {
    console.error("[BewerbungPDF] Fehler beim Api2Pdf-Request:", err);
    throw err;
  }
}

export async function checkBewerbungshelferPasswort(passwort: string): Promise<boolean> {
  const correct = process.env.BEWERBUNGSHILFE_PASSWORD;
  return passwort === correct;
}