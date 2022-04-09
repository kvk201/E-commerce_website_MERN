/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db?retryWrites=true&w=majority scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker
     scripts/init.mongo.js
 */

// initialize database
//  mongo mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db C:\Github\CS648C1\assignment5\api\scripts/init.mongo.js
//  mongo mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db scripts/init.mongo.js

db.products.remove({});
db.counters.remove({});
f = 1;
const productsDB = [
  {
    id: 1,
    productName: 'green jacket',
    price: 15.22,
    category: 'Jackets',
    image: 'https://www.northernthreads.co.uk/clothing-c3/jackets-c7/pretty-green-soft-shell-jacket-black-p39527',
  },

  {
    id: 2,
    productName: 'yellow sweater',
    price: 12.43,
    category: 'Sweaters',
    image: 'https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651',
  },
  {
    id: 3,
    productName: 'moose sweatshirt',
    pricePerUnit: 30,
    category: 'Sweaters',
    imageUrl: 'https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/moose-knuckles-wabsasso-crewneck-sweatshirt-black-p40504',
  },
];

db.products.insertMany(productsDB);
const count = db.products.count();
f = 0;
print('Inserted', count, 'products');
db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });
db.products.createIndex({ id: 1 }, { unique: true });
console.log(f);
db.products.createIndex({ status: 1 });
db.products.createIndex({ owner: 1 });
db.products.createIndex({ created: 1 });
