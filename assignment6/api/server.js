/* eslint linebreak-style: ["error", "windows"] */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler');

const app = express();

installHandler(app);


const port = process.env.API_SERVER_PORT || 3000;

const f = 0;
console.log(f);


(async function start() {
  
  const f = 'st';
  console.log(f);
  try {
    app.use(cors());
    await connectToDb();
    app.listen(port, () => {
      console.log(`API started on port ${port}`);
    });

  } catch (err) {
    console.log('ERROR:', err);
  }

}());