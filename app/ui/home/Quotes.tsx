"use client";
import { useState, useEffect } from "react";

// Zitate als Array von Objekten
const quotes = [
  { text: "The future is already here – it’s just not evenly distributed.", author: "William Gibson" },
  { text: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
  { text: "The real question is not whether machines think, but whether men do.", author: "B.F. Skinner" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "We are limited only by our imagination and our ability to innovate.", author: "Unknown" },
  { text: "Innovation is the ability to see change as an opportunity – not a threat.", author: "Steve Jobs" },
  { text: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "We are all explorers in the vast digital universe.", author: "Unknown" },
  { text: "If you failed to plan, you planned to fail.", author: "Benjamin Franklin" }
];

export default function QuoteComponent() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Alle 10 Sekunden Zitat wechseln
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true); // Beginnt den Fade-Out-Effekt
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Wechselt das Zitat
        setIsFading(false); // Beginnt den Fade-In-Effekt
      }, 500); // Der Fade-Out dauert 500ms
    }, 10000); // 10 Sekunden Wechselzeit

    // Intervall beim Verlassen der Komponente löschen
    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = quotes[quoteIndex];

  return (
    <div className="quote-container">
      <p
        className={`quote-text ${isFading ? "fade-out" : "fade-in"}`}
      >
        "{currentQuote.text}"
      </p>
      <p className={`quote-author ${isFading ? "fade-out" : "fade-in"}`}>
        – {currentQuote.author}
      </p>
    </div>
  );
}
