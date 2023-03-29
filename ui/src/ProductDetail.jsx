import React from 'react';

import graphQLFetch from './graphQLFetch.js';

export default class ProductDetail extends React.Component {
  constructor() {
    super();
    console.log("Product Detail");
    this.state = { product: {} };
  }

 

  componentDidUpdate(prevProps) {
    const g=0;
    console.log(g);
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (prevId !== id) {
      this.loadData();
    }
  }


  componentDidMount() {
    const g=0;
    console.log(g);
    this.loadData();
  }
  async loadData() {
    const g=0;
    console.log(g);
    const { match: { params: { id } } } = this.props;
    const query = `query product($id: Int!) {
      product (id: $id) {
        id description
      }
    }`;


    const data = await graphQLFetch(query, { id });
    if (data) {
      this.setState({ product: data.product });
    } else {
      this.setState({ product: {} });
    }
  }

  render() {
    const g=0;
    console.log(g);
    const { product: { description } } = this.state;
    return (
      <div>
        <h3>Description:</h3>
        <pre>{description}</pre>
      </div>
    );
  }
}