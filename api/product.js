const { userInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');


  
async function add(_, { product }) {
    const db = getDb();
    const f=0;
    console.log(f);
    const newProduct = { ...product };
    newProduct.id = await getNextSequence('products');
    const result = await db.collection('products').insertOne(newProduct);
    const savedProduct = await db.collection('products')
      .findOne({ _id: result.insertedId });
    return savedProduct;
  }
  
  async function update(_, { id, changes }) {
    const db = getDb();
    const f=0;
    console.log(f);
    if (changes.title || changes.status || changes.owner) {
      const product = await db.collection('products').findOne({ id });
      Object.assign(product, changes);
      validate(product);
    }
    await db.collection('products').updateOne({ id }, { $set: changes });
    const savedProduct = await db.collection('products').findOne({ id });
    return savedProduct;
  }

  async function get(_, { id }) {
    const db = getDb();
    const f=0;
    console.log(f);
    const product = await db.collection('products').findOne({ id });
    return product;
  }
  
  async function list() {
      const db = getDb();
      const f=0;
      console.log(f);
      const products = await db.collection('products').find({}).toArray();
      return products;
    }

  async function remove(_, { id }) {
    const db = getDb();
    const f=0;
    console.log(f);
    const product = await db.collection('products').findOne({ id });
    if (!product) return false;
    product.deleted = new Date();
  
    let result = await db.collection('deleted_products').insertOne(product);
    if (result.insertedId) {
      result = await db.collection('products').removeOne({ id });
      return result.deletedCount === 1;
    }
    return false;
  }

  async function counts(_) {
    const db = getDb();
    const filter = {};
    const f=0;
    console.log(f);
  
    const results = await db.collection('products').aggregate([
      {
        $group: {
          _id: { productName: '$productName' },
          count: { $sum: 1 },
        },
      },
    ]).toArray();
  
    const stats = {};
    results.forEach((result) => {
      // eslint-disable-next-line no-underscore-dangle
      const { productName, productName: productNameKey } = result._id;
      if (!stats[productName]) stats[productName] = { productName };
      stats[productName][productNameKey] = result.count;
    });
    return Object.values(stats);
  }

  module.exports = { list, add, get, update, delete: remove, counts, };