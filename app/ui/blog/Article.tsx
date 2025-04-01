import { BlogArticle } from "@/app/types/blog";

interface ArticleProps {
  article: BlogArticle;
}

export default function Article({ article }: ArticleProps) {
  return (
    <div id="article">
      <article>
        <header>
          <h1>{article.title}</h1>
          <time dateTime={article.publishedDate}>
            {new Date(article.publishedDate).toLocaleDateString('de-DE')}
          </time>
        </header>

        <section>
          <div className="article-img-container">
            <img 
              src={article.imageUrl} 
              alt={article.imageAlt}
            />
          </div>
          
          <div className="article-content">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={`para-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <div className="article-sources">
          <h3>Quellen:</h3>
          <div className="sources-list">
            {article.sources.map((source) => (
              <div key={source.url} className="source-item">
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {source.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}