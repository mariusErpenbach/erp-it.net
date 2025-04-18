# ERP-IT.net

Willkommen im Repository des ERP-IT.net-Projekts! Dieses Projekt ist eine Webplattform, die sich mit verschiedenen Aspekten der Unternehmensressourcenplanung (ERP) und IT-Lösungen befasst

## Inhaltsverzeichnis
1. [Technologien](#technologien)
2. [Setup & Installation](#setup--installation)
3. [Features](#features)
4. [Projektstruktur](#projektstruktur)
5. [Weiterentwicklung](#weiterentwicklung)
6. [Lizenz](#lizenz)
7. [Kontakt](#kontakt)

## Technologien
Das Projekt basiert auf den folgenden Technologien:

- **Next.js** – Serverseitiges Rendering und optimierte Performance
- **React** – Modulare und wiederverwendbare UI-Komponenten
- **TypeScript** – Statische Typisierung für robuste Codequalität
- **SCSS** – Strukturierte und verschachtelte Styles für eine bessere Wartbarkeit
- **Node.js** – Backend-Integration
- **MongoDB / PostgreSQL** – Datenbankanbindung (abhängig vom jeweiligen Anwendungsfall)

## Setup & Installation
Um das Projekt lokal auszuführen, folge diesen Schritten:

1. **Repository klonen**
   ```sh
   git clone https://github.com/mariusErpenbach/erp-it.net.git
   cd erp-it.net
   ```
2. **Abhängigkeiten installieren**
   ```sh
   npm install
   ```
3. **Entwicklungsserver starten**
   ```sh
   npm run dev
   ```
   Danach ist die Anwendung unter `http://localhost:3000` erreichbar.

## Features
- **Blog-System** mit dynamischen Artikeln
- **Dark Mode UI** mit modernen SCSS-Stilen
- **Interaktive Menüstruktur** für eine intuitive Navigation
- **API-Anbindung** zur dynamischen Datenverwaltung

## Projektstruktur
```
/erp-it.net
│── app/
│   ├── blog/       # Blog-Artikel und dynamische Routen
│   ├── actions/    # API-Aufrufe und Business-Logik
│   ├── ui/         # Wiederverwendbare UI-Komponenten
│── public/         # Statische Dateien und Bilder
│── styles/         # SCSS-Stylesheets
│── pages/          # Next.js-Seiten
│── package.json    # Abhängigkeiten und Skripte
```

## Weiterentwicklung
Geplante Features und Verbesserungen:
## Geplante Features (Stand: 08.04.2025)

🆕 Folgende Features sind in Planung:

- 🗳️ **Umfragemöglichkeit für Blogartikel**  
  Besucher sollen die Möglichkeit erhalten, zu bestimmten Blogposts abzustimmen oder Feedback zu geben.

- 🔗 **Footer-Links: Sitemap**  
  Im Footer wird ein Link zur Sitemap eingebaut, um die Navigation und SEO zu verbessern.


## Lizenz
Dieses Projekt steht unter der **MIT-Lizenz**. Mehr dazu in der Datei `LICENSE.md`.

## Kontakt
Falls du Fragen oder Verbesserungsvorschläge hast, erstelle ein Issue.

Viel Spaß beim Erkunden und Entwickeln! 🚀

