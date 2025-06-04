import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nutzungsbedingungen - Erp-IT",
    description: "Lesen Sie unsere Nutzungsbedingungen, um mehr über die Regeln und Richtlinien für die Nutzung unserer Website zu erfahren.",
    keywords: ["Nutzungsbedingungen", "Regeln", "Richtlinien", "Erp-IT"],
};

export default function NutzungsbedingungenLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
