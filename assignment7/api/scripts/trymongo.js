/* eslint linebreak-style: ["error", "windows"] */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.DB_URL ||'mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db';

// Atlas URL  - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb+srv://UUU:PPP@cluster0-XXX.mongodb.net/issuetracker?retryWrites=true';

// mLab URL - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb://UUU:PPP@XXX.mlab.com:33533/issuetracker';
async function testWithAsync() {
  const h = 'h';
  console.log(h);
  console.log('\n--- testWithAsync ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB URL', url);
    const db = client.db();
    const collection = db.collection('products');
    const f = 0;
    console.log(f);
    const product = {
      id: 2, productName: 'abc', price: 7.99, category: 'pants', image: 'http://kj',
    };
    const result = await collection.insertOne(product);
    console.log('Result of insert:\n', result.insertedId);
 
    const docs = await collection.find({ _id: result.insertedId })
      .toArray();
    console.log('Result of find:\n', docs);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}


function testWithCallbacks(callback) {
  console.log('\n--- testWithCallbacks ---');
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((connErr) => {
    if (connErr) {
      callback(connErr);
      return;
    }
    console.log('Connected to MongoDB URL', url);

    const db = client.db();
    const collection = db.collection('products');
    const f = 0;
    const product = {
      id: 1, productName: 'abc', price: 6.99, category: 'shirts', image: 'http://google.com',
    };
    collection.insertOne(product, (err, result) => {
      if (err) {
        client.close();
        callback(err);
        return;
      }
      console.log('Result of insert:\n', result.insertedId);
      collection.find({ _id: result.insertedId })
        .toArray((findErr, docs) => {
          if (findErr) {
            client.close();
            callback(findErr);
            return;
          }
          console.log('Result of find:\n', docs);
          client.close();
          callback(err);
        });
    });
  });
}



testWithCallbacks((err) => {
  if (err) {
    console.log(err);
  }
  testWithAsync();
});
