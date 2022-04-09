import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductImage from './ProductImage.jsx';
import ProductEdit from './ProductEdit.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  const f = 0;
  console.log(f);
  return (
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductList} />
      <Route path="/edit/:id" component={ProductEdit} />
      <Route path="/image/:url" component={ProductImage} />
      <Route component={NotFound} />
    </Switch>
  );
}
