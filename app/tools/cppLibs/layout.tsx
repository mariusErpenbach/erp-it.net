import { Metadata } from "next";

export const metadata: Metadata = {
  title: "C++ Libraries - Erp-IT",
  description: "Entdecken Sie nützliche C++-Bibliotheken und Ressourcen für Entwickler.",
  keywords: ["C++", "Libraries", "Entwickler", "Ressourcen", "Erp-IT"],
};

export default function CppLibsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
