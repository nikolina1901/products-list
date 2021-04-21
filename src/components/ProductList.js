import axios from "axios";
import React from "react";
import Product from "./Product";

function ProductList(props) {
  const mapProducts = props.products.map((product) => (
    <Product key={product.id} {...product} {...props} />
  ));
  return <div>{mapProducts}</div>;
}
export default ProductList;
