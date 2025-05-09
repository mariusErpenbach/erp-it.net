import { MongoClient } from "mongodb";

// URI aus der .env-Datei holen
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
});

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Erfolgreich mit MongoDB Atlas verbunden!");
    const db = client.db("erpnetDB");
    return db;
  } catch (error) {
    console.error("❌ Fehler beim Verbinden mit MongoDB:", error);
  }
}

// Removed fetchHtmlTemplate and fetchHtmlTemplateFromFirstEntry functions as they have been moved to bewerbungshelper.ts.

export default connectDB;
