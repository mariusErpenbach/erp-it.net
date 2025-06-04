import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind Classes - Erp-IT",
  description: "Entdecken Sie nützliche Tailwind CSS-Klassen und Ressourcen für Entwickler.",
  keywords: ["Tailwind", "CSS", "Entwickler", "Ressourcen", "Erp-IT"],
};

export default function TailClassesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
