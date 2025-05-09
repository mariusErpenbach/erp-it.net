"use server";
import { bewerbungHtml } from "@/app/ui/tools/bewerbungshilfe/bewerbungTemplate";
import puppeteer from "puppeteer";

export async function generateBewerbungPdf() {
  console.log("Starte PDF-Generierung...");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  console.log("Setze HTML-Inhalt...");
  await page.setContent(bewerbungHtml, { waitUntil: "networkidle0" });

  console.log("Erstelle PDF...");
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();
  console.log("PDF-Generierung abgeschlossen.");

  return pdfBuffer;
}