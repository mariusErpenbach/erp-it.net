import type { Metadata } from "next";
import "../app/styles/main.scss";
import MenuBar from "./ui/MenuBar";
import FooterMain from "./ui/FooterMain";
// import '../app/styles/Tailwindglobals.css'
import { Roboto } from 'next/font/google'
import { LanguageProvider } from "./ui/LanguageContext";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
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
    <html lang="en" className={roboto.className}>
      <body>
        <LanguageProvider>
          <MenuBar></MenuBar>
          {children}
          <FooterMain></FooterMain>
        </LanguageProvider>
      </body>
    </html>
  );
}
