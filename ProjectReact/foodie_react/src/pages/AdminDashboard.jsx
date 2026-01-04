import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar flex between wrapper">
          <Link to="/" className="logo">FoodieGo. <span className="admin-badge">Admin</span></Link>
          <div className="admin-info flex gap-2">
            <div className="notifications">
              <i className="fa-solid fa-bell"></i>
              <span className="notification-count">3</span>
            </div>
            <div className="admin-profile">
              <img src="images/profile2.jpeg" alt="Admin Profile" className="profile-img" />
              <span>Admin Panel</span>
            </div>
            <Link to="/" className="btn">Back to Site</Link>
          </div>
        </nav>
      </header>

      <main className="admin-main">
        <div className="wrapper">
          {/* Sidebar */}
          <aside className="admin-sidebar">
            <ul className="admin-menu">
              <li><button
                onClick={() => handleMenuClick('dashboard')}
                className={`menu-link ${activeSection === 'dashboard' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-chart-pie"></i> Dashboard
              </button></li>
              <li><button
                onClick={() => handleMenuClick('orders')}
                className={`menu-link ${activeSection === 'orders' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-shopping-cart"></i> Orders
              </button></li>
              <li><button
                onClick={() => handleMenuClick('products')}
                className={`menu-link ${activeSection === 'products' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-utensils"></i> Products
              </button></li>
              <li><button
                onClick={() => handleMenuClick('categories')}
                className={`menu-link ${activeSection === 'categories' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-tags"></i> Categories
              </button></li>
              <li><button
                onClick={() => handleMenuClick('users')}
                className={`menu-link ${activeSection === 'users' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-users"></i> Users
              </button></li>
              <li><button
                onClick={() => handleMenuClick('reviews')}
                className={`menu-link ${activeSection === 'reviews' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-star"></i> Reviews
              </button></li>
              <li><button
                onClick={() => handleMenuClick('settings')}
                className={`menu-link ${activeSection === 'settings' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-cog"></i> Settings
              </button></li>
            </ul>
          </aside>

          {/* Main Content */}
          <div className="admin-content">
            {/* Dashboard Section */}
            <section id="dashboard" className={`content-section ${activeSection === 'dashboard' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Dashboard Overview</h2>
                <div className="date-filter">
                  <select id="dateRange">
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month" selected>This Month</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
              </div>

              <div className="admin-stats-grid">
                <div className="admin-stat-card revenue">
                  <div className="stat-icon">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="stat-info">
                    <h3>$12,450</h3>
                    <p>Total Revenue</p>
                    <span className="trend positive">+12.5%</span>
                  </div>
                </div>
                <div className="admin-stat-card orders">
                  <div className="stat-icon">
                    <i className="fa-solid fa-shopping-bag"></i>
                  </div>
                  <div className="stat-info">
                    <h3>342</h3>
                    <p>Total Orders</p>
                    <span className="trend positive">+8.2%</span>
                  </div>
                </div>
                <div className="admin-stat-card users">
                  <div className="stat-icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className="stat-info">
                    <h3>1,248</h3>
                    <p>Active Users</p>
                    <span className="trend positive">+15.3%</span>
                  </div>
                </div>
                <div className="admin-stat-card products">
                  <div className="stat-icon">
                    <i className="fa-solid fa-utensils"></i>
                  </div>
                  <div className="stat-info">
                    <h3>8</h3>
                    <p>Total Products</p>
                    <span className="trend neutral">+2.1%</span>
                  </div>
                </div>
              </div>

              <div className="recent-activity">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon order">
                      <i className="fa-solid fa-shopping-cart"></i>
                    </div>
                    <div className="activity-details">
                      <p><strong>New order #12345</strong> from John Doe</p>
                      <span className="activity-time">2 minutes ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon user">
                      <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <div className="activity-details">
                      <p><strong>New user registered:</strong> Jane Smith</p>
                      <span className="activity-time">15 minutes ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon review">
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="activity-details">
                      <p><strong>New 5-star review</strong> for Double Beef Burger</p>
                      <span className="activity-time">1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Orders Section */}
            <section id="orders" className={`content-section ${activeSection === 'orders' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Order Management</h2>
                <div className="order-actions">
                  <input type="search" placeholder="Search orders..." className="search-input" />
                  <select className="status-filter">
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="preparing">Preparing</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12345</td>
                      <td>John Doe</td>
                      <td>2x Double Beef Burger</td>
                      <td>$19.34</td>
                      <td><span className="status pending">Pending</span></td>
                      <td>Dec 28, 2024</td>
                      <td>
                        <button className="action-btn view" title="View Details">
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button className="action-btn edit" title="Edit Order">
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        <button className="action-btn delete" title="Cancel Order">
                          <i className="fa-solid fa-times"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>#12344</td>
                      <td>Jane Smith</td>
                      <td>1x Veggie Pizza</td>
                      <td>$10.99</td>
                      <td><span className="status preparing">Preparing</span></td>
                      <td>Dec 28, 2024</td>
                      <td>
                        <button className="action-btn view" title="View Details">
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button className="action-btn edit" title="Edit Order">
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        <button className="action-btn delete" title="Cancel Order">
                          <i className="fa-solid fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Products Section */}
            <section id="products" className={`content-section ${activeSection === 'products' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Product Management</h2>
                <button className="btn add-product-btn">+ Add New Product</button>
              </div>

              <div className="products-grid">
                {productsData.map((product) => (
                  <div key={product.id} className="product-admin-card">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p className="product-price">{product.price}</p>
                      <p className="product-category">Food</p>
                      <div className="product-status available">Available</div>
                    </div>
                    <div className="product-actions">
                      <button className="action-btn edit" title="Edit Product">
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      <button className="action-btn delete" title="Delete Product">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button className="action-btn toggle" title="Toggle Availability">
                        <i className="fa-solid fa-toggle-on"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className={`content-section ${activeSection === 'categories' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Category Management</h2>
                <button className="btn add-category-btn">+ Add New Category</button>
              </div>

              <div className="categories-grid">
                <div className="category-admin-card">
                  <div className="category-info">
                    <h4>Burgers</h4>
                    <p>3 products</p>
                    <div className="category-status active">Active</div>
                  </div>
                  <div className="category-actions">
                    <button className="action-btn edit" title="Edit Category">
                      <i className="fa-solid fa-edit"></i>
                    </button>
                    <button className="action-btn delete" title="Delete Category">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="category-admin-card">
                  <div className="category-info">
                    <h4>Pizza</h4>
                    <p>2 products</p>
                    <div className="category-status active">Active</div>
                  </div>
                  <div className="category-actions">
                    <button className="action-btn edit" title="Edit Category">
                      <i className="fa-solid fa-edit"></i>
                    </button>
                    <button className="action-btn delete" title="Delete Category">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="category-admin-card">
                  <div className="category-info">
                    <h4>Chicken</h4>
                    <p>2 products</p>
                    <div className="category-status active">Active</div>
                  </div>
                  <div className="category-actions">
                    <button className="action-btn edit" title="Edit Category">
                      <i className="fa-solid fa-edit"></i>
                    </button>
                    <button className="action-btn delete" title="Delete Category">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="category-admin-card">
                  <div className="category-info">
                    <h4>Pasta</h4>
                    <p>1 product</p>
                    <div className="category-status active">Active</div>
                  </div>
                  <div className="category-actions">
                    <button className="action-btn edit" title="Edit Category">
                      <i className="fa-solid fa-edit"></i>
                    </button>
                    <button className="action-btn delete" title="Delete Category">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Users Section */}
            <section id="users" className={`content-section ${activeSection === 'users' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>User Management</h2>
                <input type="search" placeholder="Search users..." className="search-input" />
              </div>

              <div className="users-table">
                <table>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Orders</th>
                      <th>Total Spent</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>John Doe</td>
                      <td>john.doe@email.com</td>
                      <td>24</td>
                      <td>$342.50</td>
                      <td><span className="status active">Active</span></td>
                      <td>
                        <button className="action-btn view" title="View Profile">
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button className="action-btn edit" title="Edit User">
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        <button className="action-btn delete" title="Suspend User">
                          <i className="fa-solid fa-ban"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className={`content-section ${activeSection === 'reviews' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Customer Reviews</h2>
                <div className="review-filters">
                  <select className="rating-filter">
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </div>

              <div className="reviews-list">
                <div className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <img src="images/profile1.jpeg" alt="Reviewer" />
                      <div>
                        <h4>John Doe</h4>
                        <div className="rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <span className="review-date">Dec 28, 2024</span>
                  </div>
                  <div className="review-content">
                    <h5>Double Beef Burger</h5>
                    <p>Amazing burger! The meat was perfectly cooked and the ingredients were fresh. Delivery was quick too!</p>
                  </div>
                  <div className="review-actions">
                    <button className="action-btn approve">
                      <i className="fa-solid fa-check"></i> Approve
                    </button>
                    <button className="action-btn delete">
                      <i className="fa-solid fa-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Settings Section */}
            <section id="settings" className={`content-section ${activeSection === 'settings' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>System Settings</h2>
              </div>

              <div className="settings-tabs">
                <button className="tab-btn active">General</button>
                <button className="tab-btn">Delivery</button>
                <button className="tab-btn">Payment</button>
                <button className="tab-btn">Notifications</button>
              </div>

              <div className="settings-content">
                <div id="general" className="tab-content active">
                  <div className="settings-form">
                    <div className="form-group">
                      <label>Restaurant Name</label>
                      <input type="text" defaultValue="FoodieGo" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label>Contact Email</label>
                      <input type="email" defaultValue="support@foodiego.com" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" defaultValue="+92 300 123457" className="form-input" />
                    </div>
                    <button className="btn">Save Changes</button>
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

export default AdminDashboard;