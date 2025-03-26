import type { Metadata } from "next";
import "../app/styles/main.scss";


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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
