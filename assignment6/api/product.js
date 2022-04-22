const { userInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function get(_, { id }) {
  const f = 'dbget';
  console.log(f);
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  return product;
}

async function add(_, { product }) {
  const f = 'add';
  console.log(f);
    const db = getDb();
    const newProduct = { ...product };
    newProduct.id = await getNextSequence('products');
    const result = await db.collection('products').insertOne(newProduct);
    const savedProduct = await db.collection('products')
      .findOne({ _id: result.insertedId });
    return savedProduct;
  }

async function list() {
  const f = 'list';
  console.log(f);
    const db = getDb();
    const products = await db.collection('products').find({}).toArray();
    return products;
  }
  

  async function remove(_, { id }) {
    const f = 'remove';
    console.log(f);
    const db = getDb();
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

  async function update(_, { id, changes }) {
    const f = 'update';
    console.log(f);
    const db = getDb();
    if (changes.title || changes.status || changes.owner) {
      const product = await db.collection('products').findOne({ id });
      Object.assign(product, changes);
      validate(product);
    }
    await db.collection('products').updateOne({ id }, { $set: changes });
    const savedProduct = await db.collection('products').findOne({ id });
    return savedProduct;
  }

  

  module.exports = { list, add, get, update, delete: remove };