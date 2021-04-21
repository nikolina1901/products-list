import React from "react";
import Product from "./components/Product";

function ProductDetails(props) {
  const id = props.match.params.id;
  const filteredProducts = props.products
    .filter((product) => product.id == id)
    .map((product) => <Product key={product.id} {...product} />);
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
}
export default ProductDetails;
