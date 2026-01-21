import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import orderService from '../services/orderService';
import AdminProtectedRoute from '../components/AdminProtectedRoute';
import productsData from '../data/products.json';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
  if (activeSection === 'orders') {
    fetchAllOrders();
  } else if (activeSection === 'users') {
    fetchAllUsers();
  }
}, [activeSection]);


const fetchAllUsers = async () => {
  setLoadingUsers(true);
  try {
    // Fetch users and orders to calculate order counts and total spent
    const [usersResponse, ordersResult] = await Promise.all([
      fetch('http://localhost:5000/users'),
      orderService.getAllOrders()
    ]);
    
    if (!usersResponse.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const usersResult = await usersResponse.json();
    
    if (ordersResult.success) {
      const allOrders = ordersResult.data;
      
      // Calculate order counts and total spent for each user
      const usersWithStats = usersResult.map(user => {
        const userOrders = allOrders.filter(order => {
          // Handle both populated and non-populated userId
          const orderUserId = order.userId && typeof order.userId === 'object' 
            ? order.userId._id 
            : order.userId;
          return orderUserId === user._id;
        });
        const totalSpent = userOrders.reduce((sum, order) => sum + order.totalAmount, 0);
        
        return {
          ...user,
          orderCount: userOrders.length,
          totalSpent: totalSpent
        };
      });
      
      setUsers(usersWithStats);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    setUsers([]); // Set empty array on error
  } finally {
    setLoadingUsers(false);
  }
};

const fetchAllOrders = async () => {
  setLoadingOrders(true);
  try {
    const result = await orderService.getAllOrders();
    if (result.success) {
      // Filter out admin orders - only show orders from regular users
      const userOrders = result.data.filter(order => {
        // Check if order has user info and user is not admin
        if (order.userId && typeof order.userId === 'object') {
          return order.userId.role !== 'admin';
        }
        return true; // Keep orders without user info (shouldn't happen but safe fallback)
      });
      setOrders(userOrders);
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
  } finally {
    setLoadingOrders(false);
  }
};

const handleStatusUpdate = async (orderId, newStatus) => {
  try {
    const result = await orderService.updateOrderStatus(orderId, newStatus);
    if (result.success) {
      // Update local state
      setOrders(orders.map(order => 
        order._id === orderId ? { ...order, status: newStatus } : order
      ));
      alert('Order status updated successfully');
    } else {
      alert('Failed to update order status');
    }
  } catch (error) {
    console.error('Error updating order status:', error);
    alert('Error updating order status');
  }
};

const handleViewOrder = (order) => {
  // Simple alert with order details (you can make this a modal later)
  const orderDetails = `
    Order ID: #${order._id.slice(-6)}
    Customer: ${order.deliveryInfo.name}
    Phone: ${order.deliveryInfo.phone}
    Address: ${order.deliveryInfo.address}
    Total: $${order.totalAmount}
    Status: ${order.status}
    Date: ${new Date(order.orderDate).toLocaleString()}
    
    Items:
    ${order.items.map(item => `${item.quantity}x ${item.name} - $${item.price}`).join('\n')}
  `;
  alert(orderDetails);
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
                onClick={() => handleMenuClick('users')}
                className={`menu-link ${activeSection === 'users' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-users"></i> Users
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
            </section>

            {/* Orders Section */}
            <section id="orders" className={`content-section ${activeSection === 'orders' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>Order Management</h2>
              </div>

              {loadingOrders ? (
                <div className="loading-message">
                  <p>Loading orders...</p>
                </div>
              ) : orders.length === 0 ? (
                <div className="no-orders-message">
                  <p>No orders found.</p>
                </div>
              ) : (
                <div className="orders-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order._id}>
                          <td>#{order._id.slice(-6)}</td>
                          <td>
                            {order.userId && order.userId.firstName ? 
                              `${order.userId.firstName} ${order.userId.lastName}` : 
                              order.deliveryInfo.name
                            }
                          </td>
                          <td>
                            {order.items.map((item, index) => (
                              <div key={index}>
                                {item.quantity}x {item.name}
                              </div>
                            ))}
                          </td>
                          <td>${order.totalAmount}</td>
                          <td>
                            <span className={`status ${order.status}`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </td>
                          <td>
                            <div className="delivery-address">
                              <div><strong>{order.deliveryInfo.name}</strong></div>
                              <div>{order.deliveryInfo.address}</div>
                              <div>{order.deliveryInfo.phone}</div>
                            </div>
                          </td>
                          <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                          <td>
                            <button 
                              className="action-btn view" 
                              title="View Details"
                              onClick={() => handleViewOrder(order)}
                            >
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <select 
                              value={order.status}
                              onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                              className="status-select"
                            >
                              <option value="pending">Pending</option>
                              <option value="preparing">Preparing</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
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
                  </div>
                ))}
              </div>
            </section>

            {/* Users Section */}
            <section id="users" className={`content-section ${activeSection === 'users' ? 'active' : ''}`}>
              <div className="section-header">
                <h2>User Management</h2>
              </div>

              {loadingUsers ? (
                <div className="loading-message">
                  <p>Loading users...</p>
                </div>
              ) : users.length === 0 ? (
                <div className="no-users-message">
                  <p>No users found.</p>
                </div>
              ) : (
                <div className="users-table">
                  <table>
                    <thead>
                      <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Total Spent</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td>#{user._id.slice(-6)}</td>
                          <td>{user.firstName} {user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.orderCount}</td>
                          <td>${user.totalSpent.toFixed(2)}</td>
                          <td>
                            <button className="action-btn view" title="View Profile">
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <button className="action-btn edit" title="Edit User">
                              <i className="fa-solid fa-edit"></i>
                            </button>
                            <button className="action-btn delete" title="Delete User">
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

const ProtectedAdminDashboard = () => {
  return (
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  );
};

export default ProtectedAdminDashboard;