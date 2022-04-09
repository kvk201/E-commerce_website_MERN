/* eslint-disable react/jsx-no-undef */
import React from 'react';

import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

export default class ProductList extends React.Component {
  constructor() {
    //
    const f = 7;
    console.log(f);
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    //
    const f = 6;
    console.log(f);
    const query = `query {
            productList {
              id
              productName
              pricePerUnit
              category
              imageUrl
            }
          }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

  async createProduct(product) {
    const query = `mutation addProduct($product: ProductInputs!) {
            addProduct(product: $product) {
                id
            }
          }`;

    const data = await graphQLFetch(query, { product });
    if (data) {
      this.loadData();
    }
  }

  async deleteProduct(id) {
    const query = `mutation deleteProduct($id: Int!) {
      deleteProduct(id: $id)
    }`;

    const data = await graphQLFetch(query, { id });
    if (data) {
      alert('Product Deleted successfully!!');
      this.loadData();
    }
  }

  render() {
    const f = 7;
    console.log(f);
    const { products } = this.state;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <h4>Showing all available products</h4>
        <hr />
        <ProductTable products={products} deleteProduct={this.deleteProduct} />
        <br />
        <h4>Add a new product to inventory</h4>
        <hr />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}
