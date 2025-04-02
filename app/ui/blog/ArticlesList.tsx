'use client';

import { useEffect, useState } from 'react';
import { fetchAllArticles } from '../../actions/blogActions';
import { ArticleMask } from '@/app/types/blog';
import Link from 'next/link';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import Image from 'next/image'; // Importiere das Image-Tag von Next.js

export default function ArticlesList() {

  const [articles, setArticles] = useState<ArticleMask[]>([]);
  const [articlePreviews, setArticlePreviews] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllArticles();
      if (result.success) {
        setArticles(result.data || []);
       
        
        // Markdown-Previews umwandeln
        const parsedPreviews: { [key: number]: string } = {};
        for (const article of result.data || []) {
          parsedPreviews[article.id] = DOMPurify.sanitize(await marked.parse(article.preview));
        }
        setArticlePreviews(parsedPreviews);
      } else {
       console.log("error while loading articles")
      }
    };
    fetchData();
  }, []);

  // Hilfsfunktion zum Überprüfen der URL
  const isValidUrl = (url: string) => {
    try {
      new URL(url); // Versucht, die URL zu erstellen
      return true;
    } catch {
      return false; // Ungültige URL
    }
  };

  return (
    <div id="articlesList">
      {articles.map((article) => (
        <div key={article.id} className="articleShort">
          <div className="content-wrapper">
            <div className="article-header-short">
              <h3>{article.title}</h3>
            </div>
            <div className="text-container">
              <span>{new Date(article.published_date).toLocaleDateString()}</span>
              <div className="text-content" dangerouslySetInnerHTML={{ __html: articlePreviews[article.id] || '' }}></div>
            </div>
            <div className="link-container">
              <Link href={`/blog/${article.id}`}>read more</Link>
            </div>
          </div>

          {/* Bild nur anzeigen, wenn eine gültige URL vorhanden ist */}
          {article.image_url && isValidUrl(article.image_url) ? (
            <div className="image-container">
              <Image
                src={article.image_url}
                alt={article.image_alt || "Article Image"}
                width={600} // Beispielgröße
                height={400} // Beispielhöhe
              />
            </div>
          ) : (
            // Fallback-Bild anzeigen, falls keine URL vorhanden oder ungültig
            <div className="image-container">
              <Image
                src="/yellow-default.jpg"
                alt="Default Image"
                width={600} // Beispielgröße
                height={400} // Beispielhöhe
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}