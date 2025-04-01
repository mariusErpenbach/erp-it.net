'use client';
import { useEffect, useState } from 'react';
import { fetchAllArticles } from '../../actions/blogActions';
import { ArticleMask } from '@/app/types/blog';
import Link from 'next/link'; // Importiere Link von Next.js

export default function ArticlesList() {
  const [status, setStatus] = useState<string>('Lade Artikel...');
  const [articles, setArticles] = useState<ArticleMask[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllArticles();
      if (result.success) {
        setArticles(result.data || []); 
        console.log(result.data);
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
          <div key={article.id} className="mb-2">
            <h3>{article.title}</h3>
            <p>
              {article.content.slice(0, 666)} ... 
              <Link href={`/blog/${article.id}`} className="text-blue-500">read more</Link>
            </p>
            <img src={article.image_url || "default-image.jpg"} alt={article.image_alt || "Article Image"} />
            <span>{new Date(article.published_date).toLocaleDateString()}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}