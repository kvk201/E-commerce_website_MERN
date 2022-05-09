require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;

async function connectToDb() {
  
    const f = 'dbc';
    console.log(f);
    const url = process.env.DB_URL || 'mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db';
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
  }

  async function getNextSequence(name) {
    const f = 'dbn';
    console.log(f);
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
    return result.value.current;
  }

  function getDb(){
      return db;
  }
  module.exports = { connectToDb, getNextSequence, getDb };