import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import orderService from '../services/orderService';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  // REDIRECT: If cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderPlaced) {
      navigate('/menu');
    }
  }, [cartItems, navigate, orderPlaced]);

  const handlePlaceOrder = async () => {
  setLoading(true);
  
  try {
    // Get delivery info from form
    const deliveryInfo = {
      name: document.querySelector('input[placeholder="Your Name"]').value,
      phone: document.querySelector('input[placeholder="Phone Number"]').value,
      address: document.querySelector('textarea[placeholder="Delivery Address"]').value
    };
    
    // Validate delivery info
    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
      alert('Please fill all delivery information');
      setLoading(false);
      return;
    }
    
    // Prepare order data
    const orderData = {
      items: cartItems.map(item => ({
        productId: item.id,
        name: item.name,
        price: parseFloat(item.price.toString().replace(/[$PKRRs\s]/g, '')),
        quantity: item.quantity,
        image: item.image
      })),
      deliveryInfo,
      totalAmount: parseFloat(getTotalPrice())
    };
    
    // Place order
    const result = await orderService.placeOrder(orderData);
    
    if (result.success) {
      setOrderPlaced(true);
      clearCart(); // Clear cart after successful order
    } else {
      alert(result.message);
    }
    
  } catch (error) {
    alert('Failed to place order. Please try again.');
    console.error('Order error:', error);
  } finally {
    setLoading(false);
  }
};


  // SUCCESS: Order placed successfully
  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <Navigation />
        
        <div className="checkout-container">
          <div className="success-message">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1>Order Successful!</h1>
            <p>Thank you for your order. Your food will be delivered soon.</p>
            
            <div className="success-actions">
              <button 
                onClick={() => navigate('/')} 
                className="btn-primary"
              >
                Go to Home
              </button>
              <button 
                onClick={() => navigate('/menu')} 
                className="btn-secondary"
              >
                Order More
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Navigation />
      
      <div className="checkout-container">
        <h1>Checkout</h1>
        
        {/* ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p className="item-price">Rs {(parseFloat(item.price.toString().replace(/[$PKRRs\s]/g, '')) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-total">
            <h3>Total: PKR {getTotalPrice()}</h3>
          </div>
        </div>

        {/* CUSTOMER INFO (Simple) */}
        <div className="customer-info">
          <h2>Delivery Information</h2>
          <div className="info-form">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Delivery Address" required></textarea>
          </div>
        </div>

        {/* PLACE ORDER BUTTON */}
        <div className="checkout-actions">
          <button 
            onClick={() => navigate('/menu')} 
            className="btn-secondary"
          >
            Back to Menu
          </button>
          
          <button 
            onClick={handlePlaceOrder}
            disabled={loading}
            className="btn-primary"
          >
            {loading ? 'Processing...' : `Place Order - PKR ${getTotalPrice()}`}
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
