'use client';

import { useEffect, useState, use } from 'react';
import { fetchArticleById } from '../../actions/blogActions';
import { ArticleMask } from '@/app/types/blog';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';

interface ArticlePageProps {
  params: Promise<{ entry: string }>;
}

interface SourceLink {
  domain: string;
  url: string;
  favicon: string;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = use(params);
  const entry = resolvedParams.entry;
  const articleId = entry;

  const [article, setArticle] = useState<ArticleMask | null>(null);
  const [status, setStatus] = useState<string>('Lade Artikel...');
  const [articleContentHtml, setArticleContentHtml] = useState<string>('');
  const [cleanLinks, setCleanLinks] = useState<SourceLink[]>([]);
  const [articleImgUrls, setArticleImgUrls] = useState<string[]>([]);

  function extractUrlsWithDomains(text: string): SourceLink[] {
    if (!text) return [];
    const urlRegex = /(https?:\/\/[^\s,]+)/g;
    const urls = text.match(urlRegex) || [];

    return urls.map(url => {
      const domain = new URL(url).hostname.replace(/^www\./, '');
      return {
        domain,
        url,
        favicon: `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
      };
    });
  }

  function extractImageUrls(imageString: string): string[] {
    if (!imageString) return [];
    return imageString
      .split(/[\n,]+/)
      .map(url => url.trim())
      .filter(url => url.startsWith('http'));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchArticleById(articleId);
        if (result.success && result.data) {
          setArticle(result.data);
          setStatus('✅ Artikel erfolgreich geladen');
          setCleanLinks(extractUrlsWithDomains(result.data.sources));

          const parsedMarkdown = await marked.parse(result.data.content);
          setArticleContentHtml(DOMPurify.sanitize(parsedMarkdown));
          setArticleImgUrls(extractImageUrls(result.data.main_image_url));
        } else {
          setStatus(result.message || '❌ Fehler beim Laden');
        }
      } catch {
        setStatus('❌ Fehler beim Abrufen des Artikels');
      }
    };

    fetchData();
  }, [articleId]);



  if (!article) {
    return <div>{status}</div>;
  }

  return (
    <div>
  
      <div className="article-wrapper">
        <main className="article-page">
              {/* article meta section */}
          <header>
          <h1>{article.title}</h1>
          <p>Veröffentlicht am: {new Date(article.published_date).toLocaleDateString()}</p>

          </header>
              {/* content section */}
          <div dangerouslySetInnerHTML={{ __html: articleContentHtml }} />
        

          <div id="sources">
            {cleanLinks.length > 0 ? (
              cleanLinks.map(({ domain, url, favicon }) => (
                <Link
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link"
                  title={url}
                >
                  <Image
                    src={favicon}
                    alt={domain}
                    className="favicon"
                    width={32}
                    height={32}
                    onError={(e) => (e.currentTarget.src = 'https://uploads.erp-it.net/images/ufo1.png')}
                  />
                  {domain}
                </Link>
              ))
            ) : (
              <p>Keine Quellen vorhanden</p>
            )}
          </div>
        </main>
        {articleImgUrls.length > 0 && (
  <div>
    {/* image section */}
    {articleImgUrls.map((url, index) => (

<div className="article-image-container" key={url}>

  <Image
    src={url}
    alt={`Artikelbild ${index + 1}`}
    fill
    className="articleImage"
    style={{ objectFit: 'cover' }}
  />
</div>

    ))}
  </div>
)}
      </div>

    </div>
  );
}