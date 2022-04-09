//  mongo mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db scripts/trymongo.js
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db?retryWrites=true&w=majority';

//
function testWithCallbacks(callback) {
  const f = 3;
  console.log(f);
  console.log('\n--- test With Call backs ---');
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  // eslint-disable-next-line no-shadow
  client.connect((err, client) => {
    if (err) {
      callback(err);
      return;
    }
    console.log('Connected to MongoDB!');
    const db = client.db();
    const collection = db.collection('employees');
    const employee = { id: 1, name: 'A. Callback', age: 23 };
    // eslint-disable-next-line no-shadow
    collection.insertOne(employee, (err, result) => {
      if (err) {
        client.close();
        callback(err);
        return;
      }
      console.log('Result of insert:\n', result.insertedId);
      collection.find({ _id: result.insertedId })
        // eslint-disable-next-line no-shadow
        .toArray((err, docs) => {
          if (err) {
            client.close();
            callback(err);
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
  const f = 2;
  console.log(f);
  console.log('\n--- testWithAsync ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    const h = 3;
    console.log(h);
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db();
    const collection = db.collection('employees');
    const employee = { id: 2, name: 'B. Async', age: 16 };
    const result = await collection.insertOne(employee);
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

testWithCallbacks((err) => {
  if (err) {
    console.log(err);
  }
  testWithAsync();
});
