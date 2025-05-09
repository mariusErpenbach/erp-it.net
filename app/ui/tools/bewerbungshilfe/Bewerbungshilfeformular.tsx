"use client";
import React, { useState } from 'react';
import { convertHtmlToPdfAndSendEmail } from '@/app/actions/bewerbungshelper';


const Bewerbungshilfeformular: React.FC = () => {
    const [formData, setFormData] = useState({
        firma: '',
        ansprechpartner: '',
        anschrift: '',
        ortPlz: '',
        datum: '',
    });
    const [recipientEmail, setRecipientEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const correctPassword = 'kölle-alaaf'; // Replace with your secure password
        if (password === correctPassword) {
            setIsPasswordValid(true);
            alert('Password is correct. You are now allowed to use the form. Willkommen lieber Bewerbungshelfer');
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    const resetForm = () => {
        setFormData({
            firma: '',
            ansprechpartner: '',
            anschrift: '',
            ortPlz: '',
            datum: '',
        });
        setRecipientEmail('');
        setPassword('');
        setIsPasswordValid(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isPasswordValid) {
            alert('Please enter the correct password before submitting.');
            return;
        }

        setIsSubmitting(true);

        try {
            await convertHtmlToPdfAndSendEmail(formData, recipientEmail);
            
            alert('Email with PDF sent successfully!');
            resetForm();
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="bewerbungshilfe-form">
            <h1>Bewerbungshilfeformular</h1>

            {!isPasswordValid && (
                <form onSubmit={handlePasswordSubmit}>
                    <div>
                        <label htmlFor="password">Enter Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit Password</button>
                </form>
            )}

            {isPasswordValid && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Firma:</label>
                        <input
                            type="text"
                            name="firma"
                            value={formData.firma}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Ansprechpartner (optional):</label>
                        <input
                            type="text"
                            name="ansprechpartner"
                            value={formData.ansprechpartner}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Straße + Hausnummer:</label>
                        <input
                            type="text"
                            name="anschrift"
                            value={formData.anschrift}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Ort + PLZ:</label>
                        <input
                            type="text"
                            name="ortPlz"
                            value={formData.ortPlz}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Datum:</label>
                        <input
                            type="text"
                            name="datum"
                            value={formData.datum}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Bewerbungshelfer Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send PDF'}
                    </button>
                </form>
            )}

            {isSubmitting && (
                <div className="loading-animation">
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};

export default Bewerbungshilfeformular;