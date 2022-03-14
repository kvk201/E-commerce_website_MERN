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
 * 
 */


//mongo mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db C:\Github\CS648C1\assignment4\api\scripts/init.mongo.js
//mongo mongodb+srv://vivek:kumar@cluster0.yl4xz.mongodb.net/db scripts/init.mongo.js

db.products.remove({});

const productsDB = [
  {
    id: 1,
    productName: 'green jacket',
    price: '15.22',
    category: 'JACKETS',
    image: 'https://www.northernthreads.co.uk/clothing-c3/jackets-c7/pretty-green-soft-shell-jacket-black-p39527',
  },

  {
    id: 2,
    productName: 'yellow sweater',
    price: '12.43',
    category: 'SWEATERS',
    image: 'https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651',
  },

];


db.products.insertMany(productsDB);
const count = db.products.count();
print('Inserted!', count, 'products');
const f =0;
db.counters.remove({ _id: 'products' });

db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ productName: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });
db.products.createIndex({ image: 1 });
