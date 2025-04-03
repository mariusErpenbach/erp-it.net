"use client";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../actions/blogActions"; // Dein fetchAllArticles importieren
import MenuBar from "../ui/MenuBar";
import FooterMain from "../ui/FooterMain";


// BlogOverview Component
export default function BlogOverview() {
  const [articles, setArticles] = useState();

  const [error, setError] = useState<string | null>(null);

  // useEffect, um die Artikel beim ersten Rendern zu laden
  useEffect(() => {
    async function loadArticles() {
      const response = await fetchAllArticles();
      if (response.success) {
      console.log(response)
      } else {
        setError(response.message || "Ein Fehler ist aufgetreten");
      }
    }
    loadArticles();
  }, []);

  return (
    <div id="blog-page">
      <MenuBar />

      <main id="blog-content">
   
      </main>

      <FooterMain />
    </div>
  );
}
