/* global db print */
/* eslint no-restricted-globals: "off" */

const productNames = ['aa', 'bb', 'cc','dd','ee'];
const categories = ['shirts', 'jeans','jackets', 'sweaters','accessories'];
const images = [
    '',
    '',
    '',
    '',
    ''
];


const initialCount = db.products.count();
f=0;
for (let i = 0; i < 100; i += 1) {
  f= f+1;
  const productName = productNames[Math.floor(Math.random() * 5)];
  const category = categories[Math.floor(Math.random() * 4)];
  const price = Math.ceil(Math.random() * 20);
  const image = images[Math.floor(Math.random() * 4)];
  const id = initialCount + i + 1;
  const product = {
    id, price, productName, category, image,
  };
  db.issues.insertOne(product);
}


print("f: "+f);
const count = db.products.count();
db.counters.update({ _id: 'products' }, { $set: { current: count } });
print('New product count:', count);