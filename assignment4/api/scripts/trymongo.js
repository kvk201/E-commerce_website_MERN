/* eslint linebreak-style: ["error", "windows"] */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.DB_URL || 'mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db?retryWrites=true&w=majority';

// Atlas URL  - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb+srv://UUU:PPP@cluster0-XXX.mongodb.net/issuetracker?retryWrites=true';

// mLab URL - replace UUU with user, PPP with password, XXX with hostname
// const url = 'mongodb://UUU:PPP@XXX.mlab.com:33533/issuetracker';


function testWithCallbacks(callback) {
  console.log('\n--- test-With-Callbacks ---');
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect((connErr) => {
    if (connErr) {
      callback(connErr);
      return;
    }
    console.log('Connected to MongoDB URL', url);

    const db = client.db();
    const collection = db.collection('products');

    const product = {
      id: 1, productName: 'test1', price: 64.49, category: 'SHIRTS', image: 'http://google.com',
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

async function testWithAsync() {
  console.log('\n--- test-With-Async ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB URL', url);
    const db = client.db();
    const collection = db.collection('products');

    const product = {
        id: 2, productName: 'test2', price: 21.33, category: 'PANTS', image: 'http://google.com',
    };
    const result = await collection.insertOne(product);
    console.log('Result of insert: \n', result.insertedId);

    const docs = await collection.find({ _id: result.insertedId })
      .toArray();
    console.log('Result of find: \n', docs);
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

testWithCallbacks((err) => {
  if (err) {
    console.log(err);
  }
  testWithAsync();
});
