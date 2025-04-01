// types/blog.ts
export interface BlogArticlePreview {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  imageUrl: string;
  publishedDate: string;
}

export interface BlogArticle extends BlogArticlePreview {
  content: string;
  imageAlt: string;
  sources: {
    name: string;
    url: string;
  }[];
}