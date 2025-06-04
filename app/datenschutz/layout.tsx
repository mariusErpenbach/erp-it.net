import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Erp-IT",
  description: "Erfahren Sie mehr über unsere Datenschutzerklärung, wie wir Ihre Daten verarbeiten und schützen.",
  keywords: ["Datenschutzerklärung", "Datenschutz", "DSGVO", "Erp-IT"],
};

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
