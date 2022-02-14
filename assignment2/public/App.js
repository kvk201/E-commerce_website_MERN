//empty initial products list
const initialProductsList = []; //table row

function ProductsRow(props) {
  const products = props.products;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, products.productsName), /*#__PURE__*/React.createElement("td", null, "$" + products.price), /*#__PURE__*/React.createElement("td", null, products.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: products.image
  }, "View:")));
} //table


function ProductsTable(props) {
  const productsRows = props.productsList.map(products => /*#__PURE__*/React.createElement(ProductsRow, {
    key: products.id,
    products: products
  }));
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Products Name:"), /*#__PURE__*/React.createElement("th", null, "Price:"), /*#__PURE__*/React.createElement("th", null, "Category:"), /*#__PURE__*/React.createElement("th", null, "Image:"))), /*#__PURE__*/React.createElement("tbody", null, productsRows));
} //table add


class ProductsAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultPrice: '$',
      categoryValue: '',
      URL: [{
        jackets: "https://www.northernthreads.co.uk/clothing-c3/jackets-c7/pretty-green-soft-shell-jacket-black-p39527",
        sweaters: "https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651",
        accessories: "https://www.northernthreads.co.uk/accessories-c5",
        shirts: "https://www.northernthreads.co.uk/clothing-c3/shirts-c1/pretty-green-check-shirt-navy-p36069",
        jeans: "https://www.northernthreads.co.uk/clothing-c3/jeans-c2/replay-anbass-hyperflex-dark-blue-p40290"
      }]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productsAdd;
    const products = {
      productsName: form.productsName.value,
      category: form.category.value,
      price: form.price.value.replace(/\$/g, ""),
      image: form.image.value
    };
    this.props.createProducts(products);
    form.productsName.value = "";
    form.category.value = "";
    this.setState({
      defaultPrice: '$',
      URL: [{
        jackets: "https://www.northernthreads.co.uk/clothing-c3/jackets-c7/pretty-green-soft-shell-jacket-black-p39527",
        sweaters: "https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651",
        accessories: "https://www.northernthreads.co.uk/accessories-c5",
        shirts: "https://www.northernthreads.co.uk/clothing-c3/shirts-c1/pretty-green-check-shirt-navy-p36069",
        jeans: "https://www.northernthreads.co.uk/clothing-c3/jeans-c2/replay-anbass-hyperflex-dark-blue-p40290"
      }]
    });
  }

  handleChange(e) {
    this.setState({
      defaultPrice: e.target.value
    });
  }

  render() {
    let btnClass = ['btn', 'clearfix'];
    btnClass = btnClass.join(' ');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      name: "productsAdd",
      onSubmit: this.handleSubmit,
      className: "form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "products_list_name_div"
    }, "Category: ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
      name: "category",
      className: "selectBox",
      onChange: e => this.setState({
        categoryValue: e.target.value
      })
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }), /*#__PURE__*/React.createElement("option", {
      value: "jackets"
    }, "Jackets."), /*#__PURE__*/React.createElement("option", {
      value: "sweaters"
    }, "Sweaters."), /*#__PURE__*/React.createElement("option", {
      value: "shirts"
    }, "Shirts."), /*#__PURE__*/React.createElement("option", {
      value: "jeans"
    }, "Jeans."), /*#__PURE__*/React.createElement("option", {
      value: "accessories"
    }, "Accessories")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Products-Name ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "productsName"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "price_image_div"
    }, "Price-Per-Unit ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      ref: "price",
      type: "text",
      name: "price",
      onChange: this.handleChange,
      value: this.state.defaultPrice
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Image-URL", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "image",
      defaultValue: this.state.URL[0][this.state.categoryValue] || ''
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("button", {
      className: btnClass
    }, "Add Products:")));
  }

}

class ProductsList extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: []
    };
    this.createProducts = this.createProducts.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        productsList: initialProductsList
      });
    }, 500);
  }

  createProducts(products) {
    products.id = this.state.productsList.length + 1;
    const newProductsList = this.state.productsList.slice();
    newProductsList.push(products);
    this.setState({
      productsList: newProductsList
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Inventory:"), /*#__PURE__*/React.createElement("h3", null, "Show all available productss:"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductsTable, {
      productsList: this.state.productsList
    }), /*#__PURE__*/React.createElement("h3", null, "Add new products to inventory:"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductsAdd, {
      createProducts: this.createProducts
    }));
  }

}

const element = /*#__PURE__*/React.createElement(ProductsList, null);
ReactDOM.render(element, document.getElementById('content'));