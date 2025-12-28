import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const itemTotal = (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);

  return (
    <div className="item">
      <div className="item-image">
        <img
          src={item.image}
          alt={item.name}
        />
      </div>
      
      <div className="detail">
        <h4>{item.name}</h4>
        <h4 className="item-total">${itemTotal}</h4>
      </div>

      <div className="flex">
        <a 
          href="#" 
          className="quantity-btn"
          onClick={(e) => {
            e.preventDefault();
            handleQuantityChange(item.quantity - 1);
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </a>
        
        <h4 className="quantity-value">{item.quantity}</h4>
        
        <a 
          href="#" 
          className="quantity-btn"
          onClick={(e) => {
            e.preventDefault();
            handleQuantityChange(item.quantity + 1);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </a>
      </div>
    </div>
  );
};

export default CartItem;