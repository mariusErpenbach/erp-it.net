import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art - Erp-IT",
  description: "Willkommen auf der Kunstseite. Entdecken Sie kreative Inhalte und interaktive Kunst.",
  keywords: ["Kunst", "Hypercube", "Kreativität", "Erp-IT"],
};

export default function ArtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
