'use server';
import mysql from 'mysql2/promise';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  image_url: string | null;
  image_alt: string | null;
  published_date: string;
  sources: string;
}

export async function fetchAllArticles(): Promise<{ success: boolean; data: Article[] | null; message?: string }> {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // SQL-Abfrage, um alle Artikel zu holen
    const [rows] = await connection.execute('SELECT * FROM articles');
    await connection.end();

    // Rückgabe der Artikel-Daten
    return { success: true, data: rows as Article[] };
  } catch (error) {
    return {
      success: false,
      message: `❌ Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
      data: null
    };
  }
}
