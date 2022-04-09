const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function getProduct(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  return product;
}

async function list() {
  const h = 'list';
  console.log(h);
  const db = getDb();
  const products = await db.collection('products').find({}).toArray();
  return products;
}

function validate(product) {
  const h = 'validate';
  console.log(h);
  const errors = [];
  if (product.productName.length < 3) {
    errors.push('Field "Product Name" must be at least 3 characters long.');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function add(_, { product }) {
  const h = 'add';
  console.log(h);
  const db = getDb();
  validate(product);

  const newProduct = Object.assign({}, product);
  newProduct.id = await getNextSequence('products');

  const result = await db.collection('products').insertOne(newProduct);
  const savedProduct = await db.collection('products').findOne({ _id: result.insertedId });
  return savedProduct;
}

async function remove(_, { id }) {
  const h = 'remove';
  console.log(h);
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
  const h = 'update';
  console.log(h);
  const db = getDb();
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedProduct = await db.collection('products').findOne({ id });
  return savedProduct;
}

module.exports = {
  list,
  add,
  getProduct,
  update,
  remove,
};
