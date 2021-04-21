import React from "react";

import ProductDetails from "./ProductDetails";

function ProductFiltering(props) {
  const id = props.match.params.id;
  const filteredProducts = props.products
    .filter((product) => product.id === Number(id))
    .map((product) => <ProductDetails key={product.id} {...product} />);
  return <div>{filteredProducts}</div>;
}
export default ProductFiltering;
