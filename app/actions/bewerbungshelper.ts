"use server";
import puppeteer from "puppeteer";
import { readFile } from "fs/promises";
import path from "path";

export async function generateBewerbungPdf() {
  // Absoluten Pfad zur index.html bestimmen
  const filePath = path.join(process.cwd(), "app/ui/tools/bewerbungshilfe/index.html");
  const html = await readFile(filePath, "utf-8");

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  // Gib das PDF als Buffer zurück (z.B. für einen API-Download)
  return pdfBuffer;
}