    //We use jsx instead of JS because we can write our components like its written here (markup inside of javascript = jsx)
    //otherwise we would have to write something like : const element = React.createElement('p',{},"hello world")
    class ProductFilter extends React.Component {
        render() {
            return (
                <div>Placeholder for product filter.</div>
            );
        }
    }
    
        function ProductTable(props) {
            const productRows = props.products.map(product =>
                <ProductRow key={product.id} product={product} />
            );
                
            return (
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productRows}
                    </tbody>
                </table>
            );
        }
    
        function ProductRow(props) {
            const product = props.product;
            return (
                <tr>
                    <td>{product.productName}</td>
                    <td>${product.pricePerUnit}</td>
                    <td>{product.category}</td>
                    <td><a href={product.imageUrl} target="_blank">View</a></td>
                </tr>
            );
        }
    


    //adding product    
    class ProductAdd extends React.Component {
        constructor() {
            super();
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        render() {
            return (
                <form name="productAdd" onSubmit={this.handleSubmit}>
                    <table className="unbordered-table">
                        <tr>
                            <td>
                                <div>category:
                                    <br />
                                    <select id="categoryMenu" name="category">
                                        <option value="Shirts">shirts!</option>
                                        <option value="Jeans">jeans!</option>
                                        <option value="Jackets">jackets!</option>
                                        <option value="Sweaters">sweaters!</option>
                                        <option value="Accessories">accessories!</option>
                                    </select>
                                </div>
                            </td>

                            <br />
                            <td>
                                <div>Price Per Unit:
                                    <br /><input type="text" name="pricePerUnit" defaultValue="$" />
                                </div>
                            </td>
                        </tr>

                        <br />
                        <tr>
                            <td>
                                <div>Product Name:
                                    <br /><input type="text" name="productName" />
                                </div>
                            </td>
                            <br />
                            <td>
                                <div>Image-URL:
                                    <br /><input type="text" name="imageUrl" />
                                </div>
                            </td>
                            <br />
                        </tr>

                        <br />
                        <tr>
                            <td>
                                <button>Add Product:</button>
                            </td>
                        </tr>
                    </table>
                </form>
            );
        }

        handleSubmit(e) {
            e.preventDefault();
            const form = document.forms.productAdd;
    
            const product = {
                productName: form.productName.value, pricePerUnit: form.pricePerUnit.value.substr(1), category: form.category.value, imageUrl: form.imageUrl.value,
            }
    
            this.props.createProduct(product);
            form.pricePerUnit.value = "$";
            form.productName.value = "";        
            form.imageUrl.value = "";
            form.category.value = "";
        }
    
    }
    
    class ProductList extends React.Component {
        constructor() {
            super();
            this.state = { products: [] };
            this.createProduct = this.createProduct.bind(this);
        }

        componentDidMount() {
            this.loadData();
        }
        
        loadData() {
            setTimeout(() => {
                this.setState({ products: [] });
            }, 500);
        }
    
    
        createProduct(product) {
            product.id = this.state.products.length + 1;
            const newProductList = this.state.products.slice();
            newProductList.push(product);
            this.setState({ products: newProductList });
        }
    
        render() {
            return (
                <React.Fragment>
                    <h1>My Company Inventory:</h1>
                    <h4>Show all available products:</h4>
                    <hr />
                    <ProductTable products={this.state.products} />
                    <br />
                    <h4>Add a new product to inventory:</h4>
                    <hr />
                    <ProductAdd createProduct={this.createProduct} />
                </React.Fragment>
            );
        }
    }
    const element = <ProductList />;
    //render
    ReactDOM.render(element, document.getElementById('contents'));
    