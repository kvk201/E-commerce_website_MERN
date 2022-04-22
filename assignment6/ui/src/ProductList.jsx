  
import React from 'react';
import { Route } from 'react-router-dom';
import { Label, Panel, Glyphicon } from 'react-bootstrap';

import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.js';
import ProductDetail from './ProductDetail.jsx';

export default class ProductList extends React.Component {
    constructor() {
      super();
      this.state = { products: [] };
      this.createProduct = this.createProduct.bind(this);
      this.deleteProduct = this.deleteProduct.bind(this);
    }
  
    componentDidMount() {
      this.loadData();
    }

    async loadData() {
      const g='load data';
      console.log(g);
      const query = `query {
        productList {
          id productName price category image
        }
      }`;
  
      const data = await graphQLFetch(query);
      if (data) {
        this.setState({ products: data.productList });
      }
    }
  
    
  
    async deleteProduct(index) {
      const g='delete prod';
      console.log(g);
      const query = `mutation productDelete($id: Int!) {
        productDelete(id: $id)
      }`;
      const { products } = this.state;
      const { location: { pathname, search }, history } = this.props;
      const { id } = products[index];
      const data = await graphQLFetch(query, { id });
      if (data && data.productDelete) {
        this.setState((prevState) => {
          const newList = [...prevState.products];
          if (pathname === `/products/${id}`) {
            history.push({ pathname: '/products', search });
          }
          newList.splice(index, 1);
          return { products: newList };
        });
      } else {
        this.loadData();
      }
    }


    
    async createProduct(product) {
      const g='create prod';
      console.log(g);
      const query = `mutation productAdd($product: ProductInput!) {
        productAdd(product: $product) {
          id
        }
      }`;
  
  
      const data = await graphQLFetch(query, { product });
      if (data) {
        this.loadData();
      }
    }

    render() {
      const g='return';
      console.log(g);
      const { products } = this.state;
      const { match } = this.props;
      
      return (
        <React.Fragment>
          <h2>My Company Inventory</h2>
          <br/>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title tag="h6" toggle>
              Showing all available products
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <ProductTable productList={products} deleteProduct={this.deleteProduct}/>
            </Panel.Body>
          </Panel>
          <br/>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title toggle>Add a new product to the inventory (Click to toggle) </Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <ProductAdd createProduct={this.createProduct} />
            </Panel.Body>
          </Panel>
          <Route path={`${match.path}/:id`} component={ProductDetail} />
        </React.Fragment>
        
      );
    }
  }