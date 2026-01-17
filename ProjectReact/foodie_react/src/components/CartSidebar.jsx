import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const CartSidebar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, getTotalPrice, getTotalQuantity } = useCart();

  return (
    <div className={`cart-tab ${isCartOpen ? 'cart-tab-active' : ''}`}>
      <h3>Your Cart</h3>
      
      <div className="cart-list">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-lg">Your cart is empty</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>

      <div className="total-container">
        <h4>Total: </h4>
        <h4 className="cart-total">${getTotalPrice()}</h4>
      </div>
      
      <div className="btn-container flex gap-2">
        <a 
          href="#" 
          className="btn close-btn"
          onClick={(e) => {
            e.preventDefault();
            setIsCartOpen(false);
          }}
        >
          Close
        </a>
        <Link 
         to="/checkout" 
         className="btn"
         onClick={() => setIsCartOpen(false)}
         >
    Check out
  </Link>
      </div>
    </div>
  );
};

export default CartSidebar;