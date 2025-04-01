'use client';
import { useEffect, useState } from 'react';
import { fetchAllArticles } from '../../actions/blogActions';
import { ArticleMask } from '@/app/types/blog';
import Link from 'next/link'; // Importiere Link von Next.js
import DOMPurify from 'dompurify';
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
    <div id="articlesList">
    
        {articles.map((article) => (
          <div key={article.id} className="">
            <h3>{article.title}</h3><span>{new Date(article.published_date).toLocaleDateString()}</span>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.preview) }}></div>
            <p>
              <Link href={`/blog/${article.id}`} className="">read more</Link>
            </p>
            <img src={article.image_url || "default-image.jpg"} alt={article.image_alt || "Article Image"} />
            
          </div>
        ))}

    </div>
  );
}