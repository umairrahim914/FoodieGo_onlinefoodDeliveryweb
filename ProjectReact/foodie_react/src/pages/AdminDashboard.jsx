import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import orderService from '../services/orderService';
import AdminProtectedRoute from '../components/AdminProtectedRoute';
import productsData from '../data/products.json';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('orders'); // Default to orders instead of dashboard
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: 'Food'
  });

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
  if (activeSection === 'orders') {
    fetchAllOrders();
  } else if (activeSection === 'users') {
    fetchAllUsers();
  } else if (activeSection === 'products') {
    fetchAllProducts();
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

const fetchAllProducts = async () => {
  setLoadingProducts(true);
  try {
    const response = await fetch('http://localhost:5000/products');
    if (response.ok) {
      const products = await response.json();
      setProducts(products);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    setProducts([]); // Set empty array on error
  } finally {
    setLoadingProducts(false);
  }
};

const handleAddProduct = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newProduct,
        price: parseFloat(newProduct.price)
      })
    });
    
    if (response.ok) {
      const addedProduct = await response.json();
      setProducts([...products, addedProduct]);
      setShowAddProductForm(false);
      setNewProduct({
        name: '',
        price: '',
        description: '',
        image: '',
        category: 'Food'
      });
      alert('Product added successfully!');
    } else {
      alert('Failed to add product');
    }
  } catch (error) {
    console.error('Error adding product:', error);
    alert('Error adding product');
  }
};

const handleProductInputChange = (e) => {
  setNewProduct({
    ...newProduct,
    [e.target.name]: e.target.value
  });
};

const handleDeleteProduct = async (productId) => {
  if (window.confirm('Are you sure you want to delete this product?')) {
    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setProducts(products.filter(product => product._id !== productId));
        alert('Product deleted successfully!');
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  }
};

const handleDeleteUser = async (userId) => {
  if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setUsers(users.filter(user => user._id !== userId));
        alert('User deleted successfully!');
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  }
};

const fetchAllOrders = async () => {
  setLoadingOrders(true);
  try {
    const result = await orderService.getAllOrders();
    if (result.success) {
      // Filter out admin orders - only show orders from regular users
      const userOrders = result.data.filter(order => {
        // If order has user info, check if user is not admin
        if (order.userId && typeof order.userId === 'object' && order.userId.role) {
          return order.userId.role !== 'admin';
        }
        // If no user info or role, assume it's a regular user order (keep it)
        return true;
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
    Total: PKR ${order.totalAmount}
    Status: ${order.status}
    Date: ${new Date(order.orderDate).toLocaleString()}
    
    Items:
    ${order.items.map(item => `${item.quantity}x ${item.name} - PKR ${item.price}`).join('\n')}
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
                          <td>PKR {order.totalAmount}</td>
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
                <button 
                  className="btn add-product-btn"
                  onClick={() => setShowAddProductForm(true)}
                >
                  + Add New Product
                </button>
              </div>

              {/* Add Product Form Modal */}
              {showAddProductForm && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3>Add New Product</h3>
                      <button 
                        className="close-btn"
                        onClick={() => setShowAddProductForm(false)}
                      >
                        ×
                      </button>
                    </div>
                    <form onSubmit={handleAddProduct} className="product-form">
                      <div className="form-group">
                        <label>Product Name</label>
                        <input
                          type="text"
                          name="name"
                          value={newProduct.name}
                          onChange={handleProductInputChange}
                          required
                          placeholder="Enter product name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Price (PKR)</label>
                        <input
                          type="number"
                          name="price"
                          value={newProduct.price}
                          onChange={handleProductInputChange}
                          required
                          step="0.01"
                          placeholder="Enter price"
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          name="description"
                          value={newProduct.description}
                          onChange={handleProductInputChange}
                          required
                          placeholder="Enter product description"
                          rows="3"
                        />
                      </div>
                      <div className="form-group">
                        <label>Image URL</label>
                        <input
                          type="text"
                          name="image"
                          value={newProduct.image}
                          onChange={handleProductInputChange}
                          required
                          placeholder="Enter image URL (e.g., images/product.png)"
                        />
                      </div>
                      <div className="form-group">
                        <label>Category</label>
                        <select
                          name="category"
                          value={newProduct.category}
                          onChange={handleProductInputChange}
                        >
                          <option value="Food">Food</option>
                          <option value="Beverage">Beverage</option>
                          <option value="Dessert">Dessert</option>
                        </select>
                      </div>
                      <div className="form-actions">
                        <button 
                          type="button" 
                          className="btn-secondary"
                          onClick={() => setShowAddProductForm(false)}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn-primary">
                          Add Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {loadingProducts ? (
                <div className="loading-message">
                  <p>Loading products...</p>
                </div>
              ) : products.length === 0 ? (
                <div className="no-products-message">
                  <p>No products found. Add your first product!</p>
                </div>
              ) : (
                <div className="products-grid">
                  {products.map((product) => (
                    <div key={product._id} className="product-admin-card">
                      <img src={product.image} alt={product.name} />
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p className="product-price">PKR {product.price}</p>
                        <p className="product-category">{product.category}</p>
                        <div className="product-status available">
                          {product.available ? 'Available' : 'Unavailable'}
                        </div>
                      </div>
                      <div className="product-actions">
                        <button 
                          className="action-btn delete" 
                          title="Delete Product"
                          onClick={() => handleDeleteProduct(product._id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                          <td>PKR {user.totalSpent.toFixed(2)}</td>
                          <td>
                            <button 
                              className="action-btn delete" 
                              title="Delete User"
                              onClick={() => handleDeleteUser(user._id)}
                            >
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