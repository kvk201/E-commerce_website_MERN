import React from 'react';

export default function ProductImage({ match }) {
  const { url } = match.params;
  // eslint-disable-next-line no-lone-blocks
  { console.log(decodeURIComponent(url)); }

  return (
    <div>
      <br />
      <br />
      <img src={decodeURIComponent(url)} alt="" />
    </div>
  );
}
