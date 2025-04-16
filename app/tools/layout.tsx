"use client"
import { useEffect, useState } from "react";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setShowButton(window.scrollY > window.innerHeight);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div>
      <header className="mb-6">
      {showButton && (
        <button id="back-to-top-btn" onClick={scrollToTop}>
          ↑ Nach oben
        </button>
      )}
      </header>
      <main>{children}</main>
    </div>
  );
}