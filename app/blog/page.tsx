"use client";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../actions/blogActions"; 
import MenuBar from "../ui/MenuBar";
import FooterMain from "../ui/FooterMain";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  preview: string;
  content: string;
  author: string;
  image_url: string;
  image_alt: string;
  published_date: string;
  sources: string;
};

export default function BlogOverview() {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function loadArticles() {
      const response = await fetchAllArticles();
      if (response.success) {
        console.log(response);
        setArticles(response.data ?? []); 
      } else {
        console.error("Fehler beim Laden der Artikel:", response);
      }
    }
    loadArticles();
  }, []);

  return (
    <div id="blog-page">
      <MenuBar />

      <main id="articlesList">
      {articles.map((article) => (
        <div key={article.id} className="articleShort">
          <div className="content-wrapper">
            <div className="article-header-short">
              <h3>{article.title}</h3>
            </div>
            <div className="text-container">
              <span>{new Date(article.published_date).toLocaleDateString()}</span>
              <div className="text-content">{article.preview}</div>
            </div>
            <div className="link-container">
              <Link href={`/blog/${article.id}`}>read more</Link>
            </div>
          </div>

          {/* Bild nur anzeigen, wenn eine gültige URL vorhanden ist */}
          <img src={article.image_url} alt={article.image_alt} />
        </div>
      ))}
      </main>

      <FooterMain />
    </div>
  );
}
