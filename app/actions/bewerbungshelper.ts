"use server";
import { readFile } from "fs/promises";
import path from "path";
import puppeteer from "puppeteer";

export async function generateBewerbungPdf() {
  // Absoluter Pfad zur Datei im public-Ordner
  const filePath = path.join(process.cwd(), "public", "index.html");
  const html = await readFile(filePath, "utf-8");

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  return pdfBuffer;
}