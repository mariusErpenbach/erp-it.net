"use client";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../actions/blogActions"; 
import Link from "next/link";
import Image from "next/image";

type Article = {
  id: string;
  title: string;
  preview: string;
  content: string;
  author: string;
  preview_image_url: string;
  image_alt: string;
  published_date: string;
  sources: string;
};

function BlogSkeletonList({ count = 3 }) {
  return (
    <div className="blog-skeleton-list">
      {Array.from({ length: count }).map((_, i) => (
        <div className="blog-skeleton-card" key={i}>
          <div className="blog-skeleton-image" />
          <div className="blog-skeleton-content">
            <div className="blog-skeleton-title" />
            <div className="blog-skeleton-date" />
            <div className="blog-skeleton-text" />
            <div className="blog-skeleton-text" style={{ width: '80%' }} />
            <div className="blog-skeleton-link" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BlogOverview() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      setIsLoading(true);
      const response = await fetchAllArticles();
      if (response.success) {
        setArticles(response.data ?? []); 
      } else {
        console.error("Fehler beim Laden der Artikel:", response);
      }
      setIsLoading(false);
    }
    loadArticles();
  }, []);

  return (
    <div id="blog-page">
      <main id="articlesList">
        {isLoading ? (
          <BlogSkeletonList count={3} />
        ) : (
          articles.map((article) => (
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
              <div className="preview-image-container">  
                <Image src={article.preview_image_url} alt={article.image_alt} width={500} height={350} />
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
