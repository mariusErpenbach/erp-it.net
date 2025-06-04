import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Erp-IT",
  description: "Entdecken Sie spannende Artikel und Neuigkeiten rund um IT, Technologie und Innovation auf unserem Blog.",
  keywords: ["IT Blog", "Technologie", "Innovation", "Artikel", "Neuigkeiten"],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
