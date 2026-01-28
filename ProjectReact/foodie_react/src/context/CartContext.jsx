import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Handle both database products (_id) and JSON products (id)
      const productId = product._id || product.id;
      const existingItem = prevItems.find(item => {
        const itemId = item._id || item.id;
        return itemId === productId;
      });
      
      if (existingItem) {
        return prevItems.map(item => {
          const itemId = item._id || item.id;
          return itemId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };


  

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => {
      const itemId = item._id || item.id;
      return itemId !== productId;
    }));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item => {
        const itemId = item._id || item.id;
        return itemId === productId
          ? { ...item, quantity: newQuantity }
          : item;
      })
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // Handle both string prices ("$9.67", "Rs 500", "PKR 500") and number prices (500)
      let price;
      if (typeof item.price === 'string') {
        // Remove $, PKR, Rs symbols and spaces
        price = parseFloat(item.price.replace(/[$PKRRs\s]/g, ''));
      } else {
        price = parseFloat(item.price);
      }
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalQuantity,
    clearCart,
    isCartOpen,
    toggleCart,
    setIsCartOpen
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};