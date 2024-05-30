import React from "react";
import "./Card.css";

function Card({ productDesc, productHead,productImg }) {
  return (
    <div className="container-product">
      <div className="product-image">
        <img src={productImg} alt="Product" />
      </div>
      <div className="product-name">
        <h3>{productHead}</h3>
        <div className="product-info">
          <div>{productDesc}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
