import React from "react";

function Product(props) {
  //console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <img src={props.image} alt={props.title} />
      {/* <Link to={`/product/${props.id}`}>Details</Link> */}
      <button onClick={() => props.history.push(`/product/${props.id}`)}>
        Product Details
      </button>
    </div>
  );
}
export default Product;
