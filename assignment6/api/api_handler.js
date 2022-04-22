const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const product = require('./product.js');
const f = 1;
console.log(f);

const resolvers = {
    Query: {
      productList: product.list,
      product: product.get,
    },
    Mutation: {
      productAdd: product.add,
      productUpdate: product.update,
      productDelete: product.delete,
    },
  };

  const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
    formatError: (error) => {
      console.log(error);
      return error;
    },
  });

  function installHandler(app) {
    const f = 0;
    console.log(f);

    server.applyMiddleware({app, path: '/graphql'});
  }

  module.exports = { installHandler };