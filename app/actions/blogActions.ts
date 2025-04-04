'use server';
import { ArticleMask } from "../types/blog";
import connectDB from "../db/mongoDB";
import { ObjectId } from "mongodb"; // Importiere ObjectId von MongoDB

// Funktion zum Abrufen aller Artikel
export async function fetchAllArticles(): Promise<{ success: boolean; data: ArticleMask[] | null; message?: string }> {
  try {
    const db = await connectDB();
    if (!db) throw new Error("Datenbankverbindung fehlgeschlagen.");

    const articlesCollection = db.collection("articles");
    const articles = await articlesCollection.find().toArray();

    // Konvertiere in ArticleMask-Format
    const formattedArticles: ArticleMask[] = articles.map(article => ({
      id: article._id.toString(), 
      title: article.title ?? "Kein Titel",
      preview: article.preview ?? "Keine Vorschau verfügbar",
      content: article.content ?? "Kein Inhalt",
      author: article.author ?? "Unbekannter Autor",
      image_url: article.image_url ?? "", 
      image_alt: article.image_alt ?? "Kein Bild",
      published_date: article.published_date ?? new Date().toISOString(),
      sources: article.sources ?? "Keine Quellen verfügbar"
    }));
    return { success: true, data: formattedArticles };
  } catch (error) {
    return {
      success: false,
      message: `❌ Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
      data: null
    };
  }
}

export async function fetchArticleById(id: string): Promise<{ success: boolean; data: ArticleMask | null; message?: string }> {
  try {
    const db = await connectDB();
    if (!db) throw new Error("Datenbankverbindung fehlgeschlagen.");

    const articlesCollection = db.collection("articles");
    // Konvertiere die ID von String zu MongoDB's ObjectId
    const objectId = new ObjectId(id);

    // Suchen anhand der _id von MongoDB
    const article = await articlesCollection.findOne({ _id: objectId });

    if (!article) {
      return {
        success: false,
        message: '❌ Artikel nicht gefunden',
        data: null
      };
    }

    // Konvertiere in ArticleMask-Format
    const formattedArticle: ArticleMask = {
      id: article.id,  // Verwende das 'id'-Feld als eindeutige Kennung
      title: article.title ?? "Kein Titel",
      preview: article.preview ?? "Keine Vorschau verfügbar",
      content: article.content ?? "Kein Inhalt",
      author: article.author ?? "Unbekannter Autor",
      image_url: article.image_url ?? "",
      image_alt: article.image_alt ?? "Kein Bild",
      published_date: article.published_date ?? new Date().toISOString(),
      sources: article.sources ?? "Keine Quellen verfügbar"
    };

    return { success: true, data: formattedArticle };
  } catch (error) {
    return {
      success: false,
      message: `❌ Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
      data: null
    };
  }
}