/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-restricted-globals: "off" */
/* global db print */
/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

db.products.remove({});
db.deleted_products.remove({});
const f = 0;
console.log(f);

const productsDB = [
  {
    id: 1,
    productName: 'green jacket',
    price: '15.22',
    category: 'jackets',
    image: 'https://www.northernthreads.co.uk/clothing-c3/jackets-c7/pretty-green-soft-shell-jacket-black-p39527',
  },
  {
    id: 2,
    productName: 'yellow sweater',
    price: '12.43',
    category: 'sweaters',
    image: 'https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651',
  },
];


db.products.insertMany(productsDB);
const count = db.products.count();
print('Inserted', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });
const h = 'h';
console.log(h);
db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ productName: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });
db.products.createIndex({ image: 1 });
db.products.createIndex({ created: 1 });

db.deleted_products.createIndex({ id: 1 }, { unique: true });