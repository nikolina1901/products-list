import React from "react";
import Product from "./Product";

function ProductDetails(props) {
  const id = props.match.params.id;
  const filteredProducts = props.products
    .filter((product) => product.id === Number(id))
    .map((product) => <Product key={product.id} {...product} />);
  return <div>{filteredProducts}</div>;
}
export default ProductDetails;
