import { NextApiRequest, NextApiResponse } from 'next';
import { convertHtmlToPdfAndSendEmail } from '@/app/actions/bewerbungshelper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    console.log('Received request body:', req.body);

    try {
        const formData = req.body;
        console.log('Form data received:', formData);

        const pdfBuffer = await convertHtmlToPdfAndSendEmail(formData);
        console.log('PDF buffer generated successfully.');

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
        res.status(200).send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF.' });
    }
}