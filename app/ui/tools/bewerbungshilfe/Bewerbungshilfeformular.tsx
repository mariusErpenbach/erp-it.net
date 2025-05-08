import React, { useState } from 'react';


const Bewerbungshilfeformular: React.FC = () => {
    const [formData, setFormData] = useState({
        firma: '',
        ansprechpartner: '',
        anschrift: '',
        ortPlz: '',
        datum: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <h1>Bewerbungshilfeformular</h1>
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
                    <label>Anschrift:</label>
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
                        type="date"
                        name="datum"
                        value={formData.datum}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Absenden</button>
            </form>
        </div>
    );
};

export default Bewerbungshilfeformular;