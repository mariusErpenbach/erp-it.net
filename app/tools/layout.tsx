import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tools - Erp-IT",
  description: "Entdecken Sie nützliche Tools und Ressourcen für Entwickler und IT-Profis.",
  keywords: ["Tools", "IT", "Entwickler", "Ressourcen", "Erp-IT"],
};

export default function BlogLayout({ children }: { children: ReactNode }) {

  return (
    <div>
      <header className="mb-6">
      </header>
      <main>{children}</main>
    </div>
  );
}