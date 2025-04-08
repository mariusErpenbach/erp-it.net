"use client";

import { useState } from "react";
import { submitIdea } from "@/app/actions/submitIdea";

export default function IdeaForm() {
  const [idea, setIdea] = useState("");
  const [kontakt, setKontakt] = useState(""); // Einfaches Freitextfeld
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitIdea({ idea, kontakt }); // Beide Felder als Objekt übergeben
      setMessage("Danke für deine Idee! ✌️");
      setIdea("");
      setKontakt("");
    } catch (error) {
      setMessage("Huch, irgendwas ging schief – versuch's später nochmal!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="IdeaForm" onSubmit={handleSubmit}>
      <div>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Deine Idee..."
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={kontakt}
          onChange={(e) => setKontakt(e.target.value)}
          placeholder="Kontakt"
        />
         <button
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet..." : "Senden"}
      </button>
      </div>
     
      {message && <p>{message}</p>}
    </form>
  );
}