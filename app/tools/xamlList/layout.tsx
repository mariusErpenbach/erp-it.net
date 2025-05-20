import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XAML List - Erp-IT",
  description: "Entdecken Sie nützliche XAML-Listen und Ressourcen für Entwickler.",
  keywords: ["XAML", "Listen", "Entwickler", "Ressourcen", "Erp-IT"],
};

export default function XamlListLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
