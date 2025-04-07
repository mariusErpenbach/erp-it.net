"use client";
import { useState } from "react";
import { submitIdea } from "../actions"; 

export default function IdeaForm() {
  const [idea, setIdea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitIdea(idea);
      setMessage("Idee erfolgreich gesendet! 🎉");
      setIdea("");
    } catch (error) {
      setMessage("Fehler: " + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Deine brillante Idee..."
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sendet..." : "Idee einreichen"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}