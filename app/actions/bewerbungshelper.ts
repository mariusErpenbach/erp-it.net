"use server";
import puppeteer from 'puppeteer';
import fs from 'fs';
import os from 'os';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from '@/app/db/mongoDB';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

dotenv.config();

export async function convertHtmlToPdfAndSendEmail(formData: Record<string, string>) {
    try {
        // Fetch the first entry from the MongoDB collection
        console.log('Fetching HTML template from database...');
        const htmlContent = await fetchHtmlTemplateFromFirstEntry();
        if (!htmlContent) {
            throw new Error('No template found in the database.');
        }
        console.log('HTML template successfully fetched from database.');

        // Log the length of the fetched HTML content
        console.log(`Fetched HTML content length: ${htmlContent.length}`);

        // Replace placeholders in the HTML with form data
        let updatedHtmlContent = htmlContent;
        Object.keys(formData).forEach((key) => {
            const placeholder = `{{${key}}}`; // Use {{key}} as placeholder format
            let value = formData[key];

            // Dynamically add <br/> for ansprechpartner if a value exists
            if (key === 'ansprechpartner' && value.trim() !== '') {
                value += '<br/>';
            }

            updatedHtmlContent = updatedHtmlContent.replace(new RegExp(placeholder, 'g'), value);
        });

        // Create a temporary file for the updated HTML content
        const tempDir = os.tmpdir();
        const tempHtmlPath = path.join(tempDir, `temp-${Date.now()}.html`);
        fs.writeFileSync(tempHtmlPath, updatedHtmlContent, 'utf-8');

        // Launch Puppeteer browser
        console.log('Launching Puppeteer browser with no-sandbox options...');
        const cacheDir = path.join(os.tmpdir(), 'puppeteer-cache');
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: true,
            executablePath: path.join(cacheDir, 'chrome'),
        });
        console.log('Puppeteer browser launched successfully.');

        const page = await browser.newPage();

        console.log('Reading temporary HTML file...');
        const htmlContentFromFile = fs.readFileSync(tempHtmlPath, 'utf-8');
        console.log('Temporary HTML file read successfully.');

        await page.setContent(htmlContentFromFile);
        console.log('HTML content set in Puppeteer page.');

        console.log('Generating PDF...');
        const pdfBuffer = await page.pdf({ format: 'a4' });
        console.log('PDF generated successfully.');

        // Close the browser
        await browser.close();

        // Ensure the function always returns a Uint8Array
        if (pdfBuffer && pdfBuffer.length) {
            return new Uint8Array(pdfBuffer);
        }
        throw new Error('Failed to generate PDF buffer.');
    } catch (error) {
        console.error('Error occurred:', error);
        throw error; // Rethrow the error for the caller to handle
    }
}

export async function fetchHtmlTemplate(templateName: string): Promise<string | null> {
    try {
        const database = await connectDB();
        if (!database) {
            throw new Error('Failed to connect to the database.');
        }

        const templates = database.collection('bewerbung');
        const template = await templates.findOne({ _id: new ObjectId(templateName) });
        return template ? template.indexEntry : null;
    } catch (error) {
        console.error('Error fetching template:', error);
        return null;
    }
}

export async function fetchHtmlTemplateFromFirstEntry(): Promise<string | null> {
    try {
        const database = await connectDB();
        if (!database) {
            throw new Error('Failed to connect to the database.');
        }

        const collection = database.collection('bewerbung');
        const documents = await collection.find({}).toArray();
        if (documents.length === 0) {
            throw new Error('No entries found in the bewerbung collection.');
        }

        return documents[0].indexEntry || null;
    } catch (error) {
        console.error('Error fetching first entry from bewerbung collection:', error);
        return null;
    }
}

export async function fetchAndWriteIndexHtml() {
    try {
        // Fetch the HTML content from MongoDB
        const htmlContent = await fetchHtmlTemplate('bewerbung');
        if (!htmlContent) {
            throw new Error('Template not found in the database.');
        }

        // Write the fetched content to the index.html file
        const filePath = 'app/ui/tools/bewerbungshilfe/index.html';
        fs.writeFileSync(filePath, htmlContent, 'utf-8');

        console.log('index.html updated successfully from MongoDB.');
    } catch (error) {
        console.error('Error fetching and writing index.html:', error);
    }
}

export async function handlePdfDownload(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Generate the PDF using the existing function
        const pdfBuffer = await convertHtmlToPdfAndSendEmail(req.body);

        // Set headers for file download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');

        // Send the PDF buffer as the response
        res.status(200).send(pdfBuffer);
    } catch (error) {
        console.error('Error generating or sending PDF:', error);
        res.status(500).json({ error: 'Failed to generate or send PDF.' });
    }
}