import puppeteer from 'puppeteer';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function convertHtmlToPdfAndSendEmail(htmlFilePath: string, recipientEmail: string) {
    try {
        // Launch Puppeteer browser
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Read the HTML file
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
        await page.setContent(htmlContent);

        // Generate PDF
        const pdfPath = path.join(path.dirname(htmlFilePath), 'output.pdf');
        await page.pdf({ path: pdfPath, format: 'A4' });

        // Close the browser
        await browser.close();

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service provider
            auth: {
                user: 'your-email@gmail.com', // Replace with your email
                pass: 'your-email-password' // Replace with your email password
            }
        });

        // Send email with PDF attachment
        const mailOptions = {
            from: 'your-email@gmail.com',
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
    } catch (error) {
        console.error('Error occurred:', error);
    }
}