import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Erp-IT",
  description: "Erfahren Sie mehr über mich, meine Berufe und meine Erfahrungen.",
  keywords: ["Über mich", "Berufe", "Erfahrungen", "Erp-IT"],
};

export default function AboutMeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
