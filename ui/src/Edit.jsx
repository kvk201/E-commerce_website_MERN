import React from 'react';

function edi(){
  return (
    <div>
      {<h1>Edit Page</h1>}
    </div>
    )
       
};

function Edit() {
    return (}
        <div>
            {<h1>Edit Page</h1>
            const form = document.forms.productAdd;
            const product = {
              productName: form.productName.value,
              category: form.category.value,
              price: parseFloat(form.price.value.replace(/\$/g, '')),
              image: form.image.value,
              edit: 
            };
            
            const { createProduct } = this.props;
            createProduct(product);
            form.productName.value = '';
            form.category.value = '';
            this.setState({
              defaultPrice: '$',
              URL: [
                {
                  shirts: '',
                  jeans: '',
                  jackets: '',
                  sweaters: '',
                  accessories: '',
                },
              ],
            });}
        </div>
    );
}
function editt(){
return (
    <div>
      
    </div>
    )
       
}


export default Edit;