"use server";
import puppeteer from 'puppeteer';
import nodemailer from 'nodemailer';
import fs from 'fs';
import os from 'os';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from '@/app/db/mongoDB';
import { ObjectId } from 'mongodb';

dotenv.config();

export async function convertHtmlToPdfAndSendEmail(formData: Record<string, string>, recipientEmail: string) {
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
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Read the temporary HTML file
        const htmlContentFromFile = fs.readFileSync(tempHtmlPath, 'utf-8');
        await page.setContent(htmlContentFromFile);

        // Generate PDF
        const pdfPath = path.join(tempDir, `output-${Date.now()}.pdf`);
        await page.pdf({ path: pdfPath, format: 'A4' });

        // Close the browser
        await browser.close();

        // Configure Nodemailer with SiteGround email from .env
        const transporter = nodemailer.createTransport({
            host: process.env.SITEGROUND_EMAIL_HOST,
            port: parseInt(process.env.SITEGROUND_EMAIL_PORT || '465', 10),
            secure: true, // Use SSL
            auth: {
                user: process.env.SITEGROUND_EMAIL_USER,
                pass: process.env.SITEGROUND_EMAIL_PASSWORD
            }
        });

        // Send email with PDF attachment
        const mailOptions = {
            from: process.env.SITEGROUND_EMAIL_USER,
            to: recipientEmail,
            subject: 'Your PDF Document',
            text: 'Please find the attached PDF document.',
            attachments: [
                {
                    filename: 'output.pdf',
                    path: pdfPath
                }
            ]
        };

        const emailResponse = await transporter.sendMail(mailOptions);

        if (emailResponse.accepted.length > 0) {
            console.log('Email sent successfully with the PDF attachment.');
            // Return a success message only if the email was accepted
            return { success: true, message: 'Email sent successfully!' };
        } else {
            console.error('Email was not accepted by the server.');
            throw new Error('Email was not sent. Please try again.');
        }

        // Clean up temporary files
        fs.unlinkSync(tempHtmlPath);
        fs.unlinkSync(pdfPath);
    } catch (error) {
        console.error('Error occurred:', error);
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