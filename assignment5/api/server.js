require('dotenv').config();
const express = require('express');
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');

const app = express();

installHandler(app);


const h = 'server';
console.log(h);
const port = process.env.API_SERVER_PORT || 3000;

// eslint-disable-next-line func-names
(async function () {
  //
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API started on port ${port}`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
}());
