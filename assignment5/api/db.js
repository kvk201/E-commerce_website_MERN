require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

async function connectToDb() {
  const h = 'connect to db';
  console.log(h);
  const url = process.env.DB_URL || 'mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db?retryWrites=true&w=majority';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getNextSequence, getDb };
