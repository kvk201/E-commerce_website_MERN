const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const product = require('./product');

const f = 'api handler';
console.log(f);
const resolvers = {
  Query: {
    productList: product.list,
    product: product.getProduct,
  },
  Mutation: {
    addProduct: product.add,
    updateProduct: product.update,
    deleteProduct: product.remove,
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
  const h = 'ih';
  console.log(h);
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };
