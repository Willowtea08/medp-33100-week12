  const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lindayu246:XhswTwYkeGXjUxuq@cluster1.3fm1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  autoSelectFamily: false
});

// config/db.js
async function connectToDatabase(app) {
  try {
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db("database1"); 
    app.locals.db = db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = connectToDatabase;