"use server";

import { MongoClient } from "mongodb";
import { headers } from "next/headers";

// Typ für die Idee
type Idea = {
  idea: string;
  kontakt?: string;
  ip: string;
  notified: boolean;
  createdAt: Date;
};

export async function submitIdea(data: { idea: string; kontakt?: string }) {
  if (!data.idea.trim()) throw new Error("Ideenfeld ist leer.");

  let client: MongoClient | null = null;
  
  try {
    // 1. Verbindung zur DB herstellen
    client = new MongoClient(process.env.MONGO_URI || "");
    await client.connect();
    const db = client.db("erpnetDB");

    // 2. IP-Adresse des Clients holen (mit await)
    const headersList = await headers();
    const ip = (headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || 
               headersList.get("x-real-ip") || 
               "unknown");

    if (ip === "unknown") {
      throw new Error("IP-Adresse konnte nicht ermittelt werden.");
    }

    // 3. Rate-Limiting prüfen (optional)
    const lastHour = new Date(Date.now() - 3600 * 1000);
    const existingSubmission = await db.collection<Idea>("ideas").findOne({
      ip,
      createdAt: { $gte: lastHour }
    });

    if (existingSubmission) {
      throw new Error("Nur eine Idee pro Stunde möglich.");
    }

    // 4. Neue Idee speichern
    const newIdea: Idea = {
      idea: data.idea,
      kontakt: data.kontakt || undefined,
      ip,
      notified: false,
      createdAt: new Date()
    };

    await db.collection<Idea>("ideas").insertOne(newIdea);

  } catch (error) {
    console.error("Fehler:", error);
    throw error instanceof Error ? error : new Error("Ein unbekannter Fehler ist aufgetreten");
  } finally {
    // 5. Verbindung schließen
    if (client) {
      await client.close();
    }
  }
}