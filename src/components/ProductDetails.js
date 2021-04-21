import React from "react";
import { Link } from "react-router-dom";

function ProductDetails({ title, price, image, category, description }) {
  return (
    <div>
      <h3>{category}</h3>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={title} />
      <Link to="/products">Go back</Link>
    </div>
  );
}
export default ProductDetails;
