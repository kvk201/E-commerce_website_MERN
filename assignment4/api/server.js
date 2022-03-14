/* eslint linebreak-style: ["error", "windows"] */
  const fs = require('fs');
  const f=0;
  require('dotenv').config();
  const express = require('express');
  const cors = require('cors');
  const { ApolloServer } = require('apollo-server-express');
  const { MongoClient } = require('mongodb');

//
  const url = process.env.DB_URL || 'mongodb+srv://<username>:<password>@cluster0.yl4xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  const port = process.env.API_SERVER_PORT || 3000;
  let db;

  //
  async function getNextSequence(name) {
    const result = await db.collection('counters').findOneAndUpdate(
        { _id: name },
        { $inc: { current: 1 } },
        { returnOriginal: false },
    );
    return result.value.current;
  }

  
//
//
  async function productAdd(_, { product }) {
    const f=0;
    const newProduct = { ...product };
    newProduct.id = await getNextSequence('products');
    const result = await db.collection('products').insertOne(newProduct);
    const savedProduct = await db.collection('products')
      .findOne({ _id: result.insertedId });
    return savedProduct;
  }

  async function productList() {
    const products = await db.collection('products').find({}).toArray();
    return products;
  } 



  const resolvers = {
      Query: {
        productList,
      },
          Mutation: {
            productAdd,
      },
  };



  async function connectToDb() {
    const f=0;
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
  }



  const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
    formatError: (error) => {
      console.log(error);
      return error;
    },
  });




  const app = express();




  server.applyMiddleware({ app, path: '/graphql' });
  (async function start() {
    try {
      const f= 0;
      app.use(cors());
      await connectToDb();
      app.listen(port, () => {
        console.log(`API started on port ${port}`);
      });
    } catch (err) {
      console.log('ERROR:', err);
    }
  }());
