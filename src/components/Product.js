import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product-price">
        <small>Rs</small>
        <strong>{price}</strong>
      </p>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>&#9733;</p>
          ))}
      </div>
    </div>
  );
}

export default Product;
