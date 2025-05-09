"use server";
import { bewerbungHtml } from "@/app/ui/tools/bewerbungshilfe/bewerbungTemplate";
import chromium from 'chrome-aws-lambda';
import puppeteerCore from 'puppeteer-core';

export async function generateBewerbungPdf() {
  const isProd = process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.VERCEL;
  let browser;

  if (isProd) {
    // Vercel/AWS Lambda: chrome-aws-lambda + puppeteer-core
    browser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
  } else {
    // Lokal: normales Puppeteer mit installiertem Chrome
    const puppeteerLocal = await import('puppeteer');
    browser = await puppeteerLocal.default.launch({
      headless: true,
    });
  }

  const page = await browser.newPage();
  console.log("Setze HTML-Inhalt...");
  await page.setContent(bewerbungHtml, { waitUntil: "networkidle0" });

  console.log("Erstelle PDF...");
  const pdfBuffer = await page.pdf({ format: "a4" });
  await browser.close();
  console.log("PDF-Generierung abgeschlossen.");

  return pdfBuffer;
}