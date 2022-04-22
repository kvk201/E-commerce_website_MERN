  
import React from 'react';
import { Link } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js';

import NumInput from './NumInput.jsx';

import TextInput from './TextInput.jsx';
import { Label, Panel, Glyphicon, Button, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';

export default class ProductEdit extends React.Component {
  constructor() {

    super();
    this.state = {
      product: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  componentDidUpdate(prevProps) {
    const g='component update';
    console.log(g);
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;

    if (id !== prevId) {
      this.loadData();
    }
  }

  componentDidMount() {
    this.loadData();
  }
  
  onChange(event, naturalValue) {
    const g=0;
    console.log(g);
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));
  }
  
  async handleSubmit(e) {
    const g=0;
    console.log(g);
    e.preventDefault();
    const { product, invalidFields } = this.state;
    if (Object.keys(invalidFields).length !== 0) return;

    const query = `mutation productUpdate(
      $id: Int!
      $changes: ProductUpdateInputs!
    ) {
      productUpdate(
        id: $id
        changes: $changes
      ) {
        id productName price category image
      }
    }`;

    const { id, created, ...changes } = product;
    const f=0;
    console.log(f);
    const data = await graphQLFetch(query, { changes, id });
    if (data) {
      this.setState({ product: data.productUpdate });
      alert('Updated product successfully'); // eslint-disable-line no-alert
    }
  }
  
  async loadData() {
    const g=0;
    console.log(g);
    const query = `query product($id: Int!) {
      product(id: $id) {
        id productName price category image
      }
    }`;
    
    const id = parseInt(this.props.match.params.id);
    const data = await graphQLFetch(query, { id });
    
     if (data) {
       const { product } = data;
       product.category = product.category != null ? product.category.toString() : '';
       product.image = product.image != null ? product.image.toString() : '';
     }
    this.setState({ product: data ? data.product : {}, invalidFields: {} });
  }

  render() {
    const g=0;
    console.log(g);
    const { product: { id } } = this.state;
    var { match: { params: { id: propsId } } } = this.props;

    if (id == null) {
      if (propsId != null) {
        return <h3>{`Product with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }

    const { product: { productName, price, category, image } } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit} className="form">


            <FormGroup>
                <ControlLabel>Product Name</ControlLabel>
                <FormControl
                  type="text"
                  name="productName"
                  onChange={this.onChange}
                  value={productName}
                  key={id}
                />             
            </FormGroup>


            <FormGroup>
              <ControlLabel>price per Unit:</ControlLabel>
              <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl 
                    name="price"
                    type="text"
                    onChange={this.onChange}
                    value={price}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Category</ControlLabel>
              <FormControl  name="category" componentClass="select" onChange= {this.onChange} value={category}>
                <option aria-label="None" value="" />
                <option aria-label="shirts" value="shirts">shirts.</option>
                <option aria-label="shirts" value="jeans">jeans.</option>
                <option aria-label="jackets" value="jackets">jackets.</option>
                <option aria-label="sweaters" value="sweaters">sweaters.</option>
                <option aria-label="accessories" value="accessories">accessories.</option>
              </FormControl>
            </FormGroup>

            
            <FormGroup>
              <ControlLabel>Image URL::</ControlLabel>
              <FormControl 
                name="image"
                type="text"
                onChange={this.onChange}
                value={image}
              />
            </FormGroup>
            <Button bsStyle="primary" type="submit">
              submit change!
            </Button>
          </form>
    );
  }
}