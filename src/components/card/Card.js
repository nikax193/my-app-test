import React from "react";
import './Card.css';



function Card({ title, icon, badge, addToCart, price }) {
  return (
    <div className="card">
        {badge && <div className="card-badge">{badge}</div>}
        {icon && <div className="card-icon">{icon}</div>}
        <p className="product-price">${price.toFixed(2)}</p>
        <h3 className="card-title">{title}</h3>
        <button className="card-button" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Card;