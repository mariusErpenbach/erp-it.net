require("dotenv").config();
const { MongoClient } = require("mongodb");

// URI aus der .env-Datei holen
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

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

connectDB();
module.exports = connectDB;
