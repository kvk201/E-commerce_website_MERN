/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const f = 13;
    console.log(f);
    e.preventDefault();
    const form = document.forms.productAdd;

    const product = {
      productName: form.productName.value, pricePerUnit: form.pricePerUnit.value.substr(1), category: form.category.value, imageUrl: form.imageUrl.value,
    };

    const { createProduct } = this.props;
    createProduct(product);

    form.productName.value = '';
    form.pricePerUnit.value = '$';
    form.category.value = 'Shirts';
    form.imageUrl.value = '';
  }


  render() {
    const f = 14;
    console.log(f);
    return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <table className="unbordered-table">
          <tbody>
            <tr>
              <td>
                <div>
                  Category:
                  <br />
                  <select id="categoryMenu" name="category">
                    <option value="Shirts">Shirts:</option>
                    <option value="Jeans">Jeans:</option>
                    <option value="Jackets">Jackets:</option>
                    <option value="Sweaters">Sweaters:</option>
                    <option value="Accessories">Accessories:</option>
                  </select>
                </div>
              </td>

              <td>
                <div>
                  Price Per Unit:
                  <br />
                  <input type="text" name="pricePerUnit" defaultValue="$" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div>
                  Product Name:
                  <br />
                  <input type="text" name="productName" />
                </div>
              </td>
              <td>
                <div>
                  Image URL:
                  <br />
                  <input type="text" name="imageUrl" />
                </div>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>
                <button>Add Product!</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

const f = 15;
console.log(f);
ProductAdd.propTypes = {
  createProduct: PropTypes.func.isRequired,
};
