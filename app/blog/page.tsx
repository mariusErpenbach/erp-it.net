"use client";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../actions/blogActions"; 
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../ui/LanguageContext";

type Article = {
  published_date: string ;
  id: string;
  title: string;
  preview: string;
  content: string;
  author: string;
  preview_image_url: string;
  image_alt: string;
};


export default function BlogOverview() {
  const [articles, setArticles] = useState<Article[]>([]);

  const { lang } = useLanguage();

  useEffect(() => {
    async function loadArticles() {

      const response = await fetchAllArticles();
      if (response.success) {
        const sortedArticles = (response.data ?? []).sort((a, b) => 
          new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
        );
        setArticles(sortedArticles);
        console.log("Sortierte Artikel:", sortedArticles.map(a => ({ title: a.title, date: a.published_date })));
      } else {
        console.error("Fehler beim Laden der Artikel:", response);
      }

    }
    loadArticles();
  }, []);

  return (
    <div id="blog-page">
      {lang !== "de" && (
        <div
          className="info-message"
          style={{
            textAlign: "center",
            margin: "1rem 0",
            padding: "0.5rem",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
            borderRadius: "4px",
            transition: "opacity 0.5s ease-in-out",
            opacity: 1,
          }}
        >
          This blog is currently only available in German.
        </div>
      )}
      <main id="articlesList">
      {articles.map((article) => (
        <div key={article.id} className="articleShort">
          <div className="content-wrapper">
            <div className="article-header-short">
              <h3>{article.title}</h3>
              <span className="author">{article.author}</span>
            </div>
            <div className="text-container">
              <span>{new Date(article.published_date).toLocaleDateString()}</span>
              <div className="text-content">{article.preview}</div>
            </div>
            <div className="link-container">
              <Link href={`/blog/${article.id}`}>read more</Link>
            </div>
          </div>
          <div className="preview-image-container">  
            <Image src={article.preview_image_url} alt={article.image_alt} width={500} height={350} />
            </div>

        
        </div>
      ))}
      </main>
    </div>
  );
}
