import React from "react";
import Product from "./Product";

const Body = ({ products, setDisplayedProducts, addToCart }) => {
  let displayed = 0;

  return (
    <div className="body">
      <h2>Products:</h2>
      <div className="product-grid">
        {products.map((product) => {
          displayed += 1;
          setDisplayedProducts(displayed);
          return (
            <Product key={product.id} product={product} addToCart={addToCart} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
