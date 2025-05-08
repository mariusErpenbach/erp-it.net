"use server";
import puppeteer from 'puppeteer';
import nodemailer from 'nodemailer';
import fs from 'fs';
import os from 'os';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export async function convertHtmlToPdfAndSendEmail(htmlFilePath: string, formData: Record<string, string>, recipientEmail: string) {
    try {
        // Create a temporary copy of the HTML file
        const tempDir = os.tmpdir();
        const tempHtmlPath = path.join(tempDir, `temp-${Date.now()}.html`);
        let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

        // Replace placeholders in the HTML with form data
        Object.keys(formData).forEach((key) => {
            const placeholder = `{{${key}}}`; // Use {{key}} as placeholder format
            let value = formData[key];

            // Dynamically add <br/> for ansprechpartner if a value exists
            if (key === 'ansprechpartner' && value.trim() !== '') {
                value += '<br/>';
            }

            htmlContent = htmlContent.replace(new RegExp(placeholder, 'g'), value);
        });

        fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');

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

        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully with the PDF attachment.');

        // Clean up temporary files
        fs.unlinkSync(tempHtmlPath);
        fs.unlinkSync(pdfPath);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}