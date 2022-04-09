/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM */

/* eslint "react/jsx-no-undef": "off" */

/* eslint-disable react/prefer-stateless-function */
class ProductFilter extends React.Component {
  
  render() {
    return /*#__PURE__*/React.createElement("div", null, "Placeholder for the product filter.");
  }

}



function ProductTable(props) {

  const f = 0;
  console.log(f);
  const productRows = props.products.map(product => /*#__PURE__*/React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows));
}

function ProductRow(props) {

  const f = 0;
  console.log(f);
  const {
    product
  } = props;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, product.id), /*#__PURE__*/React.createElement("td", null, product.productName), /*#__PURE__*/React.createElement("td", null, "$", product.pricePerUnit), /*#__PURE__*/React.createElement("td", null, product.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: product.imageUrl,
    target: "_blank"
  }, "View")));
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const f = 0;
    console.log(f);
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      productName: form.productName.value,
      pricePerUnit: form.pricePerUnit.value.substr(1),
      category: form.category.value,
      imageUrl: form.imageUrl.value
    };
    this.props.createProduct(product);
    form.productName.value = '';
    form.pricePerUnit.value = '$';
    form.category.value = 'Shirts';
    form.imageUrl.value = '';
  }

  render() {
    const f = 0;
    console.log(f);
    return /*#__PURE__*/React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("table", {
      className: "unbordered-table"
    }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Category", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
      id: "categoryMenu",
      name: "category"
    }, /*#__PURE__*/React.createElement("option", {
      value: "Shirts"
    }, "Shirts"), /*#__PURE__*/React.createElement("option", {
      value: "Jeans"
    }, "Jeans"), /*#__PURE__*/React.createElement("option", {
      value: "Jackets"
    }, "Jackets"), /*#__PURE__*/React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
      value: "Accessories"
    }, "Accessories")))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Price Per Unit", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "pricePerUnit",
      defaultValue: "$"
    }))))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Product Name", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "productName"
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", null, "Image URL", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "imageUrl"
    }))))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", null, "Add Product"))))));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  async loadData() {
    const f = 0;
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
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const body = await response.text();
    const result = JSON.parse(body);
    this.setState({
      products: result.data.productList
    });
  }


  componentDidMount() {
    this.loadData();
  }

  
  async createProduct(product) {
    const f = 0;
    console.log(f);
    const query = `mutation addProduct($product: ProductInputs!) {
            addProduct(product: $product) {
                id
            }
          }`;
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          product
        }
      })
    });
    this.loadData();
  }

  render() {
    const f = 0;
    console.log(f);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("h4", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h4", null, "Add a new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

const element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));