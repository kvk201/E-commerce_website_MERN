import React from 'react';
import { Link } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js';
import NumInput from './NumInput.jsx';
import TextInput from './TextInput.jsx';

export default class ProductEdit extends React.Component {
  constructor() {
    const f = 7;
    console.log(f);
    super();
    this.state = {
      product: {},
      invalidFields: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
    
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (id !== prevId) {
      this.loadData();

    }
  }

  onValidityChange(event, valid) {
    const { name } = event.target;
    this.setState((prevState) => {
      const invalidFields = { ...prevState.invalidFields, [name]: !valid };
      if (valid) delete invalidFields[name];
      return { invalidFields };

    });
  }

  onChange(event, naturalValue) {
    //
    const f = 8;
    console.log(f);
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));

  }

  async handleSubmit(e) {
    e.preventDefault();
    const { product, invalidFields } = this.state;
    if (Object.keys(invalidFields).length !== 0) return;

    const query = `mutation updateProduct(
      $id: Int!
      $changes: ProductUpdateInputs!
    ) {
      updateProduct(
        id: $id
        changes: $changes
      ) {
        id productName pricePerUnit imageUrl
        category
      }
    }`;

    const { id, created, ...changes } = product;
    const data = await graphQLFetch(query, { changes, id });
    if (data) {
      this.setState({ product: data.updateProduct });
      alert('Updated product successfully'); // eslint-disable-line no-alert
    }

  }

  async loadData() {
    const query = `query product($id: Int!) {
      product(id: $id) {
        id productName pricePerUnit imageUrl
        category
      }
    }`;

    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });
    this.setState({ product: data ? data.product : {}, invalidFields: {} });

  }

  render() {
    const f = 'edit product render';
    console.log(f);
    const { product: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;
    if (id == null) {
      if (propsId != null) {
        return <h3>{`Product with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }

    const { invalidFields } = this.state;
    let validationMessage;
    if (Object.keys(invalidFields).length !== 0) {
      validationMessage = (

        <div className="error">
          Invalid fields...
        </div>

      );
    }

    const { product: { productName, category } } = this.state;
    const { product: { pricePerUnit, imageUrl } } = this.state;

    return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <h3>{`Editing product: ${id}`}</h3>
        <table className="unbordered-table">
          <tbody>
            <tr>
              <td>
                <div>
                  Category:
                  <br />
                  <select id="categoryMenu" value={category} name="category">
                    <option value="Shirts">Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
              </td>

              <td>
                <div>
                  Price Per Unit:
                  <br />
                  <NumInput
                    name="pricePerUnit"
                    value={pricePerUnit}
                    onChange={this.onChange}
                    key={id}
                  />
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
                  <TextInput
                    name="productName"
                    value={productName}
                    onChange={this.onChange}
                    key={id}
                  />
                </div>
              </td>
              <td>
                <div>
                  Image URL:
                  <br />
                  <TextInput
                    name="imageUrl"
                    value={imageUrl}
                    onChange={this.onChange}
                    key={id}
                  />
                </div>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>
                <button type="submit">Update Product</button>
              </td>
            </tr>
          </tbody>
        </table>
        {validationMessage}
        <Link to={`/edit/${id - 1}`}>Prev</Link>
        {' | '}
        <Link to={`/edit/${id + 1}`}>Next</Link>
      </form>
    );
  }
}
