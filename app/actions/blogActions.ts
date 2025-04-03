'use server';
import { ArticleMask } from "../types/blog";
import mysql from 'mysql2/promise';

// Funktion für alle Artikel
export async function fetchAllArticles(): Promise<{ success: boolean; data: ArticleMask[] | null; message?: string }> {
  console.log('DB User:', process.env.DB_USER || 'DUMMY_DB_USER');
  console.log('DB Password:', process.env.DB_PASSWORD || 'DUMMY_DB_PASSWORD');
  console.log('DB Name:', process.env.DB_NAME || 'DUMMY_DB_NAME');
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    
    // SQL-Abfrage, um alle Artikel zu holen
    const [rows] = await connection.execute('SELECT * FROM articles');
    await connection.end();

    // Rückgabe der Artikel-Daten
    return { success: true, data: rows as ArticleMask[] };
  } catch (error) {
    return {
      success: false,
      message: `❌ Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
      data: null
    };
  }
}

// Neue Funktion, um einen Artikel nach ID zu holen
export async function fetchArticleById(id: number): Promise<{ success: boolean; data: ArticleMask | null; message?: string }> {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // SQL-Abfrage, um einen Artikel basierend auf der ID zu holen
    const [rows] = await connection.execute('SELECT * FROM articles WHERE id = ?', [id]);

    await connection.end();

    // Wenn kein Artikel gefunden wurde, Rückgabe einer Fehlermeldung
    if ((rows as ArticleMask[]).length === 0) {
      return {
        success: false,
        message: '❌ Artikel nicht gefunden',
        data: null
      };
    }

    // Rückgabe des gefundenen Artikels
    return { success: true, data: (rows as ArticleMask[])[0] };
  } catch (error) {
    return {
      success: false,
      message: `❌ Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
      data: null
    };
  }
}
