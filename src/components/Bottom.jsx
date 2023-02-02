import React from "react";

const Bottom = ({ selectedProducts }) => {
  return (
    <div className="bottom">
      <h2>Selected Products:</h2>
      <div className="cart">
        {selectedProducts.map((product, index) => (
          <div className="cart-item" key={index}>
            <p style={{ margin: 0 }}>
              {product.emoji} {product.name}:{` ${product.quantity}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
