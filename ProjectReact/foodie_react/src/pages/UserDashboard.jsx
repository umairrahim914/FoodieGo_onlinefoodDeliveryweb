import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
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
                onClick={() => handleMenuClick('favorites')}
                className={`menu-link ${activeSection === 'favorites' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-heart"></i> Favorites
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
              <li><button
                onClick={() => handleMenuClick('payment')}
                className={`menu-link ${activeSection === 'payment' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-credit-card"></i> Payment Methods
              </button></li>
              <li><button
                onClick={() => handleMenuClick('settings')}
                className={`menu-link ${activeSection === 'settings' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-gear"></i> Settings
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
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="stat-info">
                    <h3>8</h3>
                    <p>Favorites</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="stat-info">
                    <h3>$342</h3>
                    <p>Total Spent</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="stat-info">
                    <h3>4.8</h3>
                    <p>Avg Rating</p>
                  </div>
                </div>
              </div>

              <div className="recent-orders">
                <h3>Recent Orders</h3>
                <div className="order-list">
                  <div className="order-item">
                    <img src="images/burger.png" alt="Order" />
                    <div className="order-details">
                      <h4>Double Beef Burger</h4>
                      <p>Order #12345 • Dec 28, 2024</p>
                      <span className="status delivered">Delivered</span>
                    </div>
                    <div className="order-price">$9.67</div>
                  </div>
                  <div className="order-item">
                    <img src="images/pizza.png" alt="Order" />
                    <div className="order-details">
                      <h4>Veggie Pizza</h4>
                      <p>Order #12344 • Dec 27, 2024</p>
                      <span className="status preparing">Preparing</span>
                    </div>
                    <div className="order-price">$10.99</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Orders Section */}
            <section id="orders" className={`content-section ${activeSection === 'orders' ? 'active' : ''}`}>
              <h2>My Orders</h2>
              <div className="order-filters">
                <button className="filter-btn active">All Orders</button>
                <button className="filter-btn">Delivered</button>
                <button className="filter-btn">Preparing</button>
                <button className="filter-btn">Cancelled</button>
              </div>
              <div className="orders-grid">
                <div className="order-card">
                  <div className="order-header">
                    <span className="order-id">#12345</span>
                    <span className="status delivered">Delivered</span>
                  </div>
                  <div className="order-items">
                    <img src="images/burger.png" alt="Burger" />
                    <div className="item-details">
                      <h4>Double Beef Burger</h4>
                      <p>Quantity: 2</p>
                    </div>
                  </div>
                  <div className="order-footer">
                    <span className="order-date">Dec 28, 2024</span>
                    <span className="order-total">$19.34</span>
                  </div>
                  <div className="order-actions">
                    <button className="btn-secondary">Reorder</button>
                    <button className="btn-primary">Rate Order</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Favorites Section */}
            <section id="favorites" className={`content-section ${activeSection === 'favorites' ? 'active' : ''}`}>
              <h2>My Favorites</h2>
              <div className="favorites-grid">
                <div className="favorite-item">
                  <img src="images/burger.png" alt="Burger" />
                  <div className="favorite-info">
                    <h4>Double Beef Burger</h4>
                    <p className="price">$9.67</p>
                    <div className="favorite-actions">
                      <button className="btn">Add to Cart</button>
                      <button className="remove-favorite"><i className="fa-solid fa-heart-crack"></i></button>
                    </div>
                  </div>
                </div>
                <div className="favorite-item">
                  <img src="images/pizza.png" alt="Pizza" />
                  <div className="favorite-info">
                    <h4>Veggie Pizza</h4>
                    <p className="price">$10.99</p>
                    <div className="favorite-actions">
                      <button className="btn">Add to Cart</button>
                      <button className="remove-favorite"><i className="fa-solid fa-heart-crack"></i></button>
                    </div>
                  </div>
                </div>
              </div>
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

            {/* Payment Methods Section */}
            <section id="payment" className={`content-section ${activeSection === 'payment' ? 'active' : ''}`}>
              <h2>Payment Methods</h2>
              <button className="btn add-payment-btn">+ Add Payment Method</button>
              <div className="payment-methods">
                <div className="payment-card">
                  <div className="card-info">
                    <i className="fa-brands fa-cc-visa"></i>
                    <div className="card-details">
                      <h4>Visa ending in 1234</h4>
                      <p>Expires 12/25</p>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Remove</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Settings Section */}
            <section id="settings" className={`content-section ${activeSection === 'settings' ? 'active' : ''}`}>
              <h2>Settings</h2>
              <div className="settings-groups">
                <div className="settings-group">
                  <h3>Notifications</h3>
                  <div className="setting-item">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                    <div className="setting-info">
                      <h4>Order Updates</h4>
                      <p>Get notified about your order status</p>
                    </div>
                  </div>
                  <div className="setting-item">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <div className="setting-info">
                      <h4>Promotional Offers</h4>
                      <p>Receive deals and special offers</p>
                    </div>
                  </div>
                </div>
                <div className="settings-group">
                  <h3>Privacy</h3>
                  <div className="setting-item">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                    <div className="setting-info">
                      <h4>Location Services</h4>
                      <p>Allow location access for better delivery</p>
                    </div>
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