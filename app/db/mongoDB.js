const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Erfolgreich mit MongoDB Atlas verbunden!");

    // Beispiel: Greife auf eine Datenbank zu
    const db = client.db("erpnetDB"); 
    return db;
  } catch (error) {
    console.error("❌ Fehler beim Verbinden mit MongoDB:", error);
  }
}
connectDB();
module.exports = connectDB;

