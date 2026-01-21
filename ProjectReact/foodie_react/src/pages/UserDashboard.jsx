import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import orderService from '../services/orderService';
import './UserDashboard.css';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('orders'); // Default to orders instead of overview
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
  };



  useEffect(() => {
    if (activeSection === 'orders') {
      fetchUserOrders();
    }
  }, [activeSection]);

  const fetchUserOrders = async () => {
    setLoadingOrders(true);
    try {
      const result = await orderService.getUserOrders();
      if (result.success) {
        setOrders(result.data);
      } else {
        console.error('Failed to fetch orders:', result.message);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoadingOrders(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar flex between wrapper">
          <Link to="/" className="logo">FoodieGo.</Link>
          <div className="user-info flex gap-2">
            <div className="user-profile">
              <span>Welcome, User!</span>
            </div>
            <Link to="/" className="btn">Back to Home</Link>
          </div>
        </nav>
      </header>

      <main className="dashboard-main">
        <div className="wrapper">
          {/* Sidebar */}
          <aside className="sidebar">
            <ul className="sidebar-menu">
              <li><button
                onClick={() => handleMenuClick('orders')}
                className={`menu-link ${activeSection === 'orders' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-shopping-bag"></i> My Orders
              </button></li>
            </ul>
          </aside>

          {/* Main Content */}
          <div className="dashboard-content">
            {/* Orders Section */}
            {/* Orders Section */}
            <section id="orders" className={`content-section ${activeSection === 'orders' ? 'active' : ''}`}>
              <h2>My Orders</h2>

              {loadingOrders ? (
                <div className="loading-message">
                  <p>Loading your orders...</p>
                </div>
              ) : orders.length === 0 ? (
                <div className="no-orders-message">
                  <p>You haven't placed any orders yet.</p>
                  <Link to="/menu" className="btn">Browse Menu</Link>
                </div>
              ) : (
                <div className="orders-grid">
                  {orders.map((order) => (
                    <div key={order._id} className="order-card">
                      <div className="order-header">
                        <span className="order-id">#{order._id.slice(-6)}</span>
                        <span className={`order-status status-${order.status}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>

                      <div className="order-items">
                        {order.items.map((item, index) => (
                          <div key={index} className="order-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                              <h4>{item.name}</h4>
                              <p>Quantity: {item.quantity}</p>
                              <p className="item-price">${item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="order-footer">
                        <div className="order-info">
                          <span className="order-date">
                            {new Date(order.orderDate).toLocaleDateString()}
                          </span>
                          <span className="order-total">${order.totalAmount}</span>
                        </div>
                        <div className="delivery-info">
                          <p><strong>Deliver to:</strong> {order.deliveryInfo.name}</p>
                          <p>{order.deliveryInfo.address}</p>
                          <p>{order.deliveryInfo.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;