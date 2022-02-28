class ProductFilter extends React.Component {
  render() {
    return React.createElement("div", null, "Product filter placeholder");
  }

}

function ProductTable(props) {
  const productRows = props.products.map(product => React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));

  function ProductRow(props) {
    const product = props.product;
    return React.createElement("tr", null, React.createElement("td", null, product.productName), React.createElement("td", null, "$", product.pricePerUnit), React.createElement("td", null, product.category), React.createElement("td", null, React.createElement("a", {
      href: product.imageUrl,
      target: "_blank"
    }, "View:")));
  }

  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Product Name:"), React.createElement("th", null, "Price:"), React.createElement("th", null, "Category:"), React.createElement("th", null, "Image:"))), React.createElement("tbody", null, productRows));
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, React.createElement("table", {
      className: "unbordered-table"
    }, React.createElement("tr", null, React.createElement("td", null, React.createElement("div", null, "Category:", React.createElement("br", null), React.createElement("select", {
      id: "categoryMenu",
      name: "category"
    }, React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters:"), React.createElement("option", {
      value: "Accessories"
    }, "Accessories:"), React.createElement("option", {
      value: "Shirts"
    }, "Shirts:"), React.createElement("option", {
      value: "Jeans"
    }, "Jeans:"), React.createElement("option", {
      value: "Jackets"
    }, "Jackets:")))), React.createElement("br", null), React.createElement("td", null, React.createElement("div", null, "Price:", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "pricePerUnit",
      defaultValue: "$"
    })))), React.createElement("br", null), React.createElement("tr", null, React.createElement("td", null, React.createElement("div", null, "Product Name:", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "productName"
    }))), React.createElement("br", null), React.createElement("td", null, React.createElement("div", null, "Image URL:", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "imageUrl"
    }))), React.createElement("br", null)), React.createElement("br", null), React.createElement("tr", null, React.createElement("td", null, React.createElement("button", null, "Add Products:")))));
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      productName: form.productName.value,
      pricePerUnit: form.pricePerUnit.value.substr(1),
      category: form.category.value,
      imageUrl: form.imageUrl.value
    };
    this.props.createProduct(product);
    form.category.value = "Shirts";
    form.imageUrl.value = "";
    form.productName.value = "";
    form.pricePerUnit.value = "$";
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

  componentDidMount() {
    this.loadData();
  }

  async createProduct(product) {
    const query = `mutation addProduct($product: ProductInputs!) 
                    {
                        addProduct(product: $product) 
                        {
                            id
                        }
                    }`;
    const response = await fetch('/graphql', {
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

  async loadData() {
    const query = `query 
                    {
                        productList 
                        {
                        id
                        productName
                        pricePerUnit
                        category
                        imageUrl
                        }
                    }`;
    const response = await fetch('/graphql', {
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

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "Company Inventory:"), React.createElement("h4", null, "All available products:"), React.createElement("hr", null), React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement("br", null), React.createElement("h4", null, "Add new product in inventory:"), React.createElement("hr", null), React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

const element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));