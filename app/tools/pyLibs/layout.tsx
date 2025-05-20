import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Libraries - Erp-IT",
  description: "Entdecken Sie nützliche Python-Bibliotheken und Ressourcen für Entwickler.",
  keywords: ["Python", "Libraries", "Entwickler", "Ressourcen", "Erp-IT"],
};

export default function PyLibsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
