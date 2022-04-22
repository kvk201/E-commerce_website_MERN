
import React from 'react';

import PropTypes from 'prop-types';

import { Button, Glyphicon, Tooltip, OverlayTrigger, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';


export default class ProductAdd extends React.Component {

    constructor() {
      super();
      this.priceRef = React.createRef();
      this.state = {
        defaultPrice: '$',
        categoryValue: '',
        URL: [
          {
            shirts: 'http://cdn.http.businesswear.com.au/images/D/E161_CNVB_1_M-1412813354.jpg',
            jeans: 'https://www.pngmart.com/files/7/Denim-Jean-PNG-Transparent-Image.png',
            jackets: 'https://i5.walmartimages.com/asr/f75c8a93-a122-46db-918e-36c2a3ba52c8_1.5c3d273a4800b6f3337e82da0861f2fa.jpeg',
            sweaters: 'https://image.sportsmansguide.com/adimgs/l/1/127651_ts.jpg',
            accessories: 'https://www.fashiondivadesign.com/wp-content/uploads/2013/06/01collection.jpg',
          },
        ],
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);


    }
  
  
    handleSubmit(e) {
      const f=0;
      console.log(f);
      
      e.preventDefault();
      const form = document.forms.productAdd;
      console.log(document);
      console.log(document.forms.productName);
      const product = {
        productName: form.productName.value,
        category: form.category.value,
        price: parseFloat(form.price.value.replace(/\$/g, '')),
        image: form.image.value,
      };
      const { createProduct } = this.props;
      createProduct(product);
      
      const g='create';
      console.log(g);
      form.productName.value = '';
      form.category.value = '';
      this.setState({
        defaultPrice: '$',
        URL: [
          {
            shirts: 'http://cdn.http.businesswear.com.au/images/D/E161_CNVB_1_M-1412813354.jpg',
            jeans: 'https://www.pngmart.com/files/7/Denim-Jean-PNG-Transparent-Image.png',
            jackets: 'https://i5.walmartimages.com/asr/f75c8a93-a122-46db-918e-36c2a3ba52c8_1.5c3d273a4800b6f3337e82da0861f2fa.jpeg',
            sweaters: 'https://image.sportsmansguide.com/adimgs/l/1/127651_ts.jpg',
            accessories: 'https://www.fashiondivadesign.com/wp-content/uploads/2013/06/01collection.jpg',
          },
        ],
      });
    }
  
    handleChange(e) {
      const g=0;
      console.log(g);
      this.setState({ defaultPrice: e.target.value });
    }
  
    render() {
      let btnClass = [
        'btn',
        'clearfix',
      ];
      btnClass = btnClass.join(' ');
      const { defaultPrice } = this.state;
      const { categoryValue } = this.state;
      const g=0;
      console.log(g);
      const { URL } = this.state;
      const addTooltip = (
        <Tooltip id="add-tooltip" placement="top">Add Product</Tooltip>
      );

      return (
        <div>
          <form name="productAdd" onSubmit={this.handleSubmit} className="form">
            <FormGroup>
              <ControlLabel>Category:</ControlLabel>
              <FormControl  name="category" componentClass="select" onChange={(e) => this.setState({ categoryValue: e.target.value })}>
                <option aria-label="None" value="" />
                <option aria-label="shirts" value="shirts">shirts!</option>
                <option aria-label="shirts" value="jeans">jeans!</option>
                <option aria-label="jackets" value="jackets">jackets!</option>
                <option aria-label="sweaters" value="sweaters">sweaters!</option>
                <option aria-label="accessories" value="accessories">accessories!</option>
              </FormControl>
              
            </FormGroup>

            <FormGroup>
                <ControlLabel>Product Name:</ControlLabel>
                <FormControl
                  type="text"
                  name="productName"
                />             
            </FormGroup>

            <FormGroup>
              <ControlLabel>Price Per Unit:</ControlLabel>
              <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl 
                  name="price"
                  type="text"
                  ref={this.priceRef}
                  onChange={this.handleChange}
                />
              </InputGroup>

            </FormGroup>

            <FormGroup>

              <ControlLabel>Image URL:</ControlLabel>
              <FormControl 
                name="image" 
                type="text"
                defaultValue={URL[0][categoryValue] || ''} 
              />
            </FormGroup>

            <Button bsStyle="primary" type="submit" className={btnClass}>
              Add Product!
            </Button>
          </form>
        </div>
      );
    }
  }
  