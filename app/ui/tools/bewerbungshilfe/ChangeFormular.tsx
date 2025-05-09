"use client"
import React, { useState } from 'react';
import { generateBewerbungPdf } from '@/app/actions/bewerbungshelper';

const ChangeFormular: React.FC = () => {
    const [formData, setFormData] = useState({
        betrieb: '',
        straße: '',
        ortPlz: '',
        datum: '',
        ansprechpartner: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const pdfBuffer = await generateBewerbungPdf();
          // Blob erzeugen und Download anstoßen
          const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'bewerbung.pdf';
          a.click();
          window.URL.revokeObjectURL(url);
        } catch {
          alert('PDF konnte nicht erstellt werden!');
        }
      };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="betrieb">Betrieb:</label>
                <input
                    type="text"
                    id="betrieb"
                    name="betrieb"
                    value={formData.betrieb}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="straße">Straße:</label>
                <input
                    type="text"
                    id="straße"
                    name="straße"
                    value={formData.straße}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="ortPlz">Ort/PLZ:</label>
                <input
                    type="text"
                    id="ortPlz"
                    name="ortPlz"
                    value={formData.ortPlz}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="datum">Datum:</label>
                <input
                    type="date"
                    id="datum"
                    name="datum"
                    value={formData.datum}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="ansprechpartner">Ansprechpartner (optional):</label>
                <input
                    type="text"
                    id="ansprechpartner"
                    name="ansprechpartner"
                    value={formData.ansprechpartner}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ChangeFormular;