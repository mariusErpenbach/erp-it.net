'use client';
import { useEffect, useState } from 'react';
import { fetchAllArticles } from '../lib/db-actions';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  image_url: string | null;
  image_alt: string | null;
  published_date: string;
  sources: string;
}

export default function ArticlesList() {
  const [status, setStatus] = useState<string>('Lade Artikel...');
  const [articles, setArticles] = useState<Article[]>([]);  // Verwende den Article Typ

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllArticles();
      if (result.success) {
        setArticles(result.data || []);  // Wenn result.data null ist, leeres Array setzen
        setStatus('✅ Artikel erfolgreich geladen');
      } else {
        setStatus(result.message || '❌ Fehler beim Laden');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="font-bold mb-2">Artikel</h2>
      <p>{status}</p>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-2">
            <h3 className="font-bold">{article.title}</h3>
            <p>{article.excerpt}</p>
            <span>{new Date(article.published_date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
