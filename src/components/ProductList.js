import axios from "axios";
import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  const mapProducts = products.map((product) => (
    <Product key={product.id} {...product} />
  ));
  return <div>{mapProducts}</div>;
}
export default ProductList;
