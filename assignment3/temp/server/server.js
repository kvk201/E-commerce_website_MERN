const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');


const resolvers = {
    Query: {
        productList,
    },

    Mutation: {
        addProduct,
    },
    
};

function addProduct(_, { product }) {
    product.id = productsDB.length + 1;
    productsDB.push(product);
    return product;
}

function productList() {
    return productsDB;
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
    resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, function () {
    console.log('App running on port 3000!');
});


//products database
const productsDB = [
    {
        id: 1,
        productName: "Dark blue jeans",
        pricePerUnit: 34,
        category: 'Jeans',
        imageUrl: "https://www.northernthreads.co.uk/clothing-c3/jeans-c2/replay-anbass-hyperflex-dark-blue-p40290",
    },
    {
        id: 2,
        productName: "diesel sweatshirt",
        pricePerUnit: 33,
        category: 'Sweaters',
        imageUrl: "https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651",
    },
    {
        id: 3,
        productName: "check shirt",
        pricePerUnit: 20,
        category: 'Shirts',
        imageUrl: "https://www.northernthreads.co.uk/clothing-c3/shirts-c1/pretty-green-check-shirt-navy-p36069",
    },
];
