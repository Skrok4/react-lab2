import React from "react";

const Product = (props) => {
  return (
    <div key={props.product.id} className="product-card">
      <div className="imgBlock">
        <img src={props.product.imgUrl} alt={props.product.name} />
      </div>
      <h3>{props.product.name}</h3>
      <p>{props.product.price}$/per one</p>
      <button onClick={() => props.addToCart(props.product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
