'use client';

import { useEffect, useState, use } from 'react';
import { fetchArticleById } from '../../actions/blogActions';
import { ArticleMask } from '@/app/types/blog';
import MenuBar from '@/app/ui/MenuBar';
import FooterMain from '@/app/ui/FooterMain';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import Image from 'next/image'; // Importiere das Image-Tag von Next.js

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
  const articleId = Number(entry);

  const [article, setArticle] = useState<ArticleMask | null>(null);
  const [status, setStatus] = useState<string>('Lade Artikel...');
  const [articleContentHtml, setArticleContentHtml] = useState<string>('');
  const [cleanLinks, setCleanLinks] = useState<SourceLink[]>([]);
  const [hoveredLink, setHoveredLink] = useState<SourceLink | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

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

  useEffect(() => {
    if (isNaN(articleId)) {
      setStatus('❌ Ungültige Artikel-ID');
      return;
    }

    const fetchData = async () => {
      try {
        const result = await fetchArticleById(articleId);
        if (result.success && result.data) {
          setArticle(result.data);
          setStatus('✅ Artikel erfolgreich geladen');

          // Links extrahieren & speichern
          setCleanLinks(extractUrlsWithDomains(result.data.sources));

          // Markdown zu HTML konvertieren
          const parsedMarkdown = await marked.parse(result.data.content);
          setArticleContentHtml(DOMPurify.sanitize(parsedMarkdown));
        } else {
          setStatus(result.message || '❌ Fehler beim Laden');
        }
      } catch {
        setStatus('❌ Fehler beim Abrufen des Artikels');
      }
    };

    fetchData();
  }, [articleId]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  if (isNaN(articleId) || !article) {
    return <div>{status}</div>;
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <MenuBar />
      <main className="article-page">
        <h1>{article.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: articleContentHtml }} />

        <p>Veröffentlicht am: {new Date(article.published_date).toLocaleDateString()}</p>

        <div id="sources">
          {cleanLinks.length > 0 ? (
            cleanLinks.map(({ domain, url, favicon }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
                onMouseEnter={() => setHoveredLink({ domain, url, favicon })}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Ersetze das img-Tag durch das Image-Tag von Next.js */}
                <Image
                  src={favicon}
                  alt={domain}
                  className="favicon"
                  width={32}
                  height={32}
                  onError={(e) => (e.currentTarget.src = '/fallback-icon.png')}
                />
                {domain}
              </a>
            ))
          ) : (
            <p>Keine Quellen vorhanden</p>
          )}
        </div>

        {hoveredLink && (
          <div
            className="link-preview"
            style={{
              top: `${cursorPos.y}px`,
              left: `${cursorPos.x}px`,
            }}
          >
            <Image
              src={hoveredLink.favicon}
              alt="Favicon"
              className="preview-favicon"
              width={32}
              height={32}
            />
            <span>{hoveredLink.url}</span>
          </div>
        )}
      </main>
      <FooterMain />
    </div>
  );
}
