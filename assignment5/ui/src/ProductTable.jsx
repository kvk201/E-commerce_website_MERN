import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const ProductRow = withRouter(({ product, deleteProduct, index }) => (
  <tr>
    <td>{product.id}</td>
    <td>{product.productName}</td>
    <td>
      $
      {product.pricePerUnit}
    </td>
    <td>{product.category}</td>
    {/* { url: encodeURIComponent(${product.imageUrl}) }encodeURIComponent */}
    <td><Link to={`/image/${encodeURIComponent(product.imageUrl)}`}>View</Link></td>
    <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
    <td><button type="button" onClick={() => { deleteProduct(index); }}>Delete</button></td>
  </tr>
));


export default function ProductTable({ products, deleteProduct }) {
  const f = 'table';
  console.log(f);
  const productRows = products.map(product => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={product.id}
    />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
  
}
