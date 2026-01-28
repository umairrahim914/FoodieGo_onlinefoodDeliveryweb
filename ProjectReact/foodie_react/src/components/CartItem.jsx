import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    // Handle both database products (_id) and JSON products (id)
    const itemId = item._id || item.id;
    updateQuantity(itemId, newQuantity);
  };

  // Handle both string prices ("$9.67", "Rs 500", "PKR 500") and number prices (500)
  const getPrice = () => {
    if (typeof item.price === 'string') {
      // Remove $, PKR, Rs symbols and spaces
      return parseFloat(item.price.replace(/[$PKRRs\s]/g, ''));
    } else {
      return parseFloat(item.price);
    }
  };

  const itemTotal = (getPrice() * item.quantity).toFixed(2);

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
        <h4 className="item-total">Rs {itemTotal}</h4>
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