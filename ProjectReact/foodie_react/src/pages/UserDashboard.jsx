import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import orderService from '../services/orderService';
import './UserDashboard.css';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
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
              <img src="images/profile1.jpeg" alt="User Profile" className="profile-img" />
              <span>Welcome, John!</span>
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
                onClick={() => handleMenuClick('overview')}
                className={`menu-link ${activeSection === 'overview' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-chart-line"></i> Overview
              </button></li>
              <li><button
                onClick={() => handleMenuClick('orders')}
                className={`menu-link ${activeSection === 'orders' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-shopping-bag"></i> My Orders
              </button></li>
              <li><button
                onClick={() => handleMenuClick('profile')}
                className={`menu-link ${activeSection === 'profile' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-user"></i> Profile
              </button></li>
              <li><button
                onClick={() => handleMenuClick('addresses')}
                className={`menu-link ${activeSection === 'addresses' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-location-dot"></i> Addresses
              </button></li>
            </ul>
          </aside>

          {/* Main Content */}
          <div className="dashboard-content">
            {/* Overview Section */}
            <section id="overview" className={`content-section ${activeSection === 'overview' ? 'active' : ''}`}>
              <h2>Dashboard Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fa-solid fa-shopping-bag"></i>
                  </div>
                  <div className="stat-info">
                    <h3>24</h3>
                    <p>Total Orders</p>
                  </div>
                </div>
              </div>
            </section>

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


            {/* Profile Section */}
            <section id="profile" className={`content-section ${activeSection === 'profile' ? 'active' : ''}`}>
              <h2>My Profile</h2>
              <div className="profile-form">
                <div className="profile-avatar">
                  <img src="images/profile1.jpeg" alt="Profile" className="avatar-img" />
                  <button className="change-avatar">Change Photo</button>
                </div>
                <form className="profile-details">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" defaultValue="John Doe" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" defaultValue="john.doe@email.com" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" defaultValue="+1 234 567 8900" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" defaultValue="1990-01-01" className="form-input" />
                  </div>
                  <button type="submit" className="btn">Update Profile</button>
                </form>
              </div>
            </section>

            {/* Addresses Section */}
            <section id="addresses" className={`content-section ${activeSection === 'addresses' ? 'active' : ''}`}>
              <h2>Delivery Addresses</h2>
              <button className="btn add-address-btn">+ Add New Address</button>
              <div className="addresses-list">
                <div className="address-card">
                  <div className="address-header">
                    <h4>Home</h4>
                    <span className="default-badge">Default</span>
                  </div>
                  <p>123 Main Street, Apt 4B<br />New York, NY 10001</p>
                  <div className="address-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
                <div className="address-card">
                  <div className="address-header">
                    <h4>Office</h4>
                  </div>
                  <p>456 Business Ave, Suite 200<br />New York, NY 10002</p>
                  <div className="address-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;