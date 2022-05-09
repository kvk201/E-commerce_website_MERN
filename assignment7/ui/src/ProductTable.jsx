  
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Button, Glyphicon, Tooltip, OverlayTrigger, Table } from 'react-bootstrap';

export default function ProductTable({ productList, deleteProduct }) {
  
    const g=0;
    console.log(g);

    const productRows = productList.map((product, index) => (
      <ProductRow 
        key={product.id} 
        product={product}
        deleteProduct={deleteProduct}
        index={index} />
    ));

    return (
      <Table bordered condensed hover responsive striped>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
      </Table>
    );
  }
  
  
  const g=0;
  console.log(g);
  const ProductRow = withRouter(({ product, location: { search }, deleteProduct, index }) => {
    const selectLocation = { pathname: `/productList/${product.id}`, search };
    const deleteTooltip = (
      <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
    );

    return (
      <tr>
        <td>{product.productName}</td>
        <td>{`$${product.price}`}</td>
        <td>{product.category}</td>
        <td><Link to={`/image/${product.id}`}>View</Link></td>
        <td>
          <Link to={`/edit/${product.id}`}>Edit</Link>  {' | '}
          <OverlayTrigger overlay={deleteTooltip}>
            <Button className="deleteBtn" onClick={() => { deleteProduct(index); }}>
              <Glyphicon glyph="remove" />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    );
  });
  