"use client";

import { useState } from "react";
import { generateBewerbungPdfApi2Pdf } from "@/app/actions/bewerbungshelper";

const initialForm = {
  Unternehmen: "",
  Straße: "",
  PlzOrt: "",
  Datum: "",
  Ansprechpartner: "",
  Grußzeile: "Sehr geehrte Damen und Herren,",
};

const ChangeFormular: React.FC = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleExportPdf = async () => {
    try {
      const pdfUrl = await generateBewerbungPdfApi2Pdf(form);
      // PDF von der URL laden
      const res = await fetch(pdfUrl);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bewerbung.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch {
      alert("PDF konnte nicht erstellt werden!");
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleExportPdf(); }}>
      <label>
        Unternehmen:
        <input
          name="Unternehmen"
          value={form.Unternehmen}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Straße:
        <input
          name="Straße"
          value={form.Straße}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Ort und Plz:
        <input name="PlzOrt" value={form.PlzOrt} onChange={handleChange} />
      </label>
      <br />
      <label>
        Datum:
        <input name="Datum" value={form.Datum} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ansprechpartner: (optional)
        <input
          name="Ansprechpartner"
          value={form.Ansprechpartner}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Grußzeile:
        <input name="Grußzeile" value={form.Grußzeile} onChange={handleChange} />
      </label>
      
      <br />
      <button type="submit">Bewerbung als PDF herunterladen</button>
    </form>
  );
};

export default ChangeFormular;