//empty initial products list
const initialProductsList = [];

//table row
function ProductsRow(props){
    const products = props.products;
    return(
        <tr>
            <td>{products.productsName}</td>
            <td>{"$" + products.price}</td>
            <td>{products.category}</td>
            <td><a href={products.image}>View:</a></td>
        </tr>
    );
}

//table
function ProductsTable(props){
    const productsRows = props.productsList.map(products => 
    <   ProductsRow key={ products.id } 
        products={products}/>  );
    return(
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Products Name:</th>
                        <th>Price:</th>
                        <th>Category:</th>
                        <th>Image:</th>
                    </tr>
                </thead>
                <tbody>
                    {productsRows}
                </tbody>
            </table>
    )
}


//table add
class ProductsAdd extends React.Component{
    constructor(){
        super();
        this.state = { defaultPrice: '$',
                        categoryValue: '',
                        URL: [
                            { 
                                jackets: "https://www.northernthreads.co.uk/clothing-c3/jackets-c7/pretty-green-soft-shell-jacket-black-p39527",
                                sweaters: "https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651",
                                accessories: "https://www.northernthreads.co.uk/accessories-c5",
                                shirts: "https://www.northernthreads.co.uk/clothing-c3/shirts-c1/pretty-green-check-shirt-navy-p36069",
                                jeans: "https://www.northernthreads.co.uk/clothing-c3/jeans-c2/replay-anbass-hyperflex-dark-blue-p40290"
                            }
                          ]
                    };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);      
    }   
    handleSubmit(e){
        e.preventDefault();
        const form = document.forms.productsAdd;
        const products = {
            productsName: form.productsName.value, 
            category: form.category.value,
            price: form.price.value.replace(/\$/g,""),
            image: form.image.value
            }
            this.props.createProducts(products);
            form.productsName.value="";
            form.category.value="";
            this.setState({
                defaultPrice: '$',
                                URL: [
                                    {
                                    jackets: "https://www.northernthreads.co.uk/clothing-c3/jackets-c7/pretty-green-soft-shell-jacket-black-p39527",
                                    sweaters: "https://www.northernthreads.co.uk/clothing-c3/sweatshirts-c13/diesel-girk-crew-sweatshirt-yellow-p39651",
                                    accessories: "https://www.northernthreads.co.uk/accessories-c5",
                                    shirts: "https://www.northernthreads.co.uk/clothing-c3/shirts-c1/pretty-green-check-shirt-navy-p36069",
                                    jeans: "https://www.northernthreads.co.uk/clothing-c3/jeans-c2/replay-anbass-hyperflex-dark-blue-p40290"
                                    }
                  ]
              });
        }
    
    handleChange(e){
        this.setState( { defaultPrice: e.target.value });
    }
   
    render(){
        let btnClass = [
            'btn',
            'clearfix'
          ]
          btnClass = btnClass.join(' ');
                
        return(
            <div>
                <form name="productsAdd" onSubmit={this.handleSubmit} className="form">
                    <div className="products_list_name_div">
                        Category: <br/>
                        <select name="category" className="selectBox"  onChange={ (e) => 
                                                        this.setState( { categoryValue: e.target.value }) 
                                                        }>
                            <option value=""></option>
                            <option value="jackets">Jackets.</option>
                            <option value="sweaters">Sweaters.</option>
                            <option value="shirts">Shirts.</option>
                            <option value="jeans">Jeans.</option>
                            <option value="accessories">Accessories</option>
                        </select><br/><br/>

                        Products-Name <br/>
                        <input type="text" name="productsName" /><br/><br/>
                    </div>
                    <div className="price_image_div">
                        Price-Per-Unit <br/>
                        <input ref="price" type="text" name="price" onChange={ this.handleChange } value={this.state.defaultPrice} /><br/><br/>                    
                        Image-URL<br/>
                        <input type="text" name="image" defaultValue={'' || this.state.URL[0][this.state.categoryValue] } /><br/><br/>
                    </div>
                    
                    <button className={btnClass}>Add Products:</button>
                </form>
        </div>
        );
    }
}

class ProductsList extends React.Component{
    constructor(){
        super();
        this.state = { productsList: []};
        this.createProducts = this.createProducts.bind(this);
    }
    
    loadData(){
        setTimeout(() => {
            this.setState({ productsList: initialProductsList });
        }, 500);
    }
    componentDidMount() {
        this.loadData();
    }
    createProducts(products) {
        products.id = this.state.productsList.length + 1;
        const newProductsList = this.state.productsList.slice();
        newProductsList.push(products);
        this.setState({productsList: newProductsList});
    }
    render(){
        return(
            <React.Fragment>
                <h1>My Inventory:</h1>
                <h3>Show all available productss:</h3>
                <hr/>
                <ProductsTable productsList={
                        this.state.productsList
                    }/>
                <h3>Add new products to inventory:</h3>
                <hr/>
                <ProductsAdd createProducts={
                        this.createProducts
                    }/>
            </React.Fragment>
        )
    }
}
//render
const element = <ProductsList/>
ReactDOM.render(element, document.getElementById('content'));