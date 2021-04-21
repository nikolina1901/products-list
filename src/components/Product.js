import React from "react";

function Product({ title, price, image }) {
  return (
    <div>
      <h1>Product</h1>
      <h2>{title}</h2>
      <p>{price}</p>
      <img src={image} alt={title} />
    </div>
  );
}
export default Product;
