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
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleExportPdf = async () => {
    setError("");
    setLoading(true);
    setProgress(0);
    let current = 0;
    const progressInterval = setInterval(() => {
      current += 20;
      setProgress((prev) => (prev < 100 ? prev + 20 : 100));
      if (current >= 100) clearInterval(progressInterval);
    }, 2000);
    try {
      const pdfUrl = await generateBewerbungPdfApi2Pdf(form);
      clearInterval(progressInterval);
      setProgress(100);
      setLoading(false);
      // PDF von der URL laden
      const res = await fetch(pdfUrl);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bewerbung.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      clearInterval(progressInterval);
      setLoading(false);
      setProgress(0);
      setError("Oops, das hat nicht funktioniert – bitte erneut versuchen.");
    }
  };

  return (
    <form
      id="bewerbungshilfe-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleExportPdf();
      }}
    >
      <h1>Änderungsformular</h1>

      <label>
        Unternehmen: &nbsp;
        <input
          name="Unternehmen"
          value={form.Unternehmen}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Straße: &nbsp;
        <input
          name="Straße"
          value={form.Straße}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Ort und Plz: &nbsp;
        <input name="PlzOrt" value={form.PlzOrt} onChange={handleChange} />
      </label>
      <br />
      <label>
        Datum: &nbsp;
        <input name="Datum" value={form.Datum} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ansprechpartner: (optional) &nbsp;
        <input
          name="Ansprechpartner"
          value={form.Ansprechpartner}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Grußzeile: &nbsp;
        <input
          id="grußzeile"
          name="Grußzeile"
          value={form.Grußzeile}
          onChange={handleChange}
        />
      </label>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <button
          id="bewerbungsubmitbutton"
          type="submit"
          disabled={loading}
        >
          Bewerbung als PDF herunterladen
        </button>
        {loading && (
          <div
            style={{
              width: 120,
              height: 16,
              border: "1px solid #7a97c9",
              borderRadius: 8,
              overflow: "hidden",
              background: "#f0f0f0",
              position: "relative",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#7a97c9",
                transition: "width 0.5s",
              }}
            />
          </div>
        )}
      </div>
      {error && (
        <div style={{ color: "crimson", marginTop: 12 }}>{error}</div>
      )}
    </form>
  );
};

export default ChangeFormular;