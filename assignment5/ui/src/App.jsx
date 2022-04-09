import 'idempotent-babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';

const element = (
  <Router>
    <Page />
  </Router>
);
const h = 'react dom';
console.log(h);
ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}
