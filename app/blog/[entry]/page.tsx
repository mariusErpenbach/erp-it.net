'use client';

import { useEffect, useState, use } from 'react';
import { fetchArticleById } from '../../actions/blogActions';
import { ArticleMask } from '@/app/types/blog';

interface ArticlePageProps {
  params: Promise<{ entry: string }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = use(params); // Entpackt das Promise
  const entry = resolvedParams.entry;
  const articleId = Number(entry);

  const [article, setArticle] = useState<ArticleMask | null>(null);
  const [status, setStatus] = useState<string>('Lade Artikel...');

  useEffect(() => {
    if (isNaN(articleId)) {
      setStatus('❌ Ungültige Artikel-ID');
      return;
    }

    const fetchData = async () => {
      try {
        const result = await fetchArticleById(articleId);
        if (result.success) {
          setArticle(result.data || null);
          setStatus('✅ Artikel erfolgreich geladen');
        } else {
          setStatus(result.message || '❌ Fehler beim Laden');
        }
      } catch (error) {
        setStatus('❌ Fehler beim Abrufen des Artikels');
      }
    };

    fetchData();
  }, [articleId]);

  if (isNaN(articleId)) {
    return <div>{status}</div>;
  }

  if (!article) {
    return <div>{status}</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <div>{article.content}</div>
      <p>Veröffentlicht am: {new Date(article.published_date).toLocaleDateString()}</p>
    </div>
  );
}
