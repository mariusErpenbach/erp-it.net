import type { Metadata } from "next";
import "../app/styles/main.scss";
import MenuBar from "./ui/MenuBar";
import FooterMain from "./ui/FooterMain";
// import '../app/styles/Tailwindglobals.css'
import { IBM_Plex_Serif } from 'next/font/google'

// IBM Plex Serif einbinden
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'], // Sprachen, die die Schriftart unterstützen
  weight: ['500', '700'], // Du kannst die gewünschten Gewichtungen angeben
  display: 'swap', // Optimiere die Schriftanzeige
})
export const metadata: Metadata = {
  title: "erp-it",
  description: "Personal Portfolio/Blog to represent my coding experiences and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en"  className={ibmPlexSerif.className}>

      <body>
        <MenuBar></MenuBar>
        {children}
        <FooterMain></FooterMain>
      </body>
    </html>
  );
}
