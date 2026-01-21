import React, { useState } from 'react';
import authService from '../services/authService';

const AdminProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await authService.login(credentials);
      console.log('Login result:', result); // Debug log
      
      if (result.success) {
        // Check if user is admin
        const userData = result.data.user;
        console.log('User data:', userData); // Debug log
        
        if (userData.role === 'admin') {
          setIsAuthenticated(true);
        } else {
          alert('Access denied. Admin privileges required.');
        }
      } else {
        alert('Invalid admin credentials');
      }
    } catch (error) {
      console.error('Login error:', error); // Debug log
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="admin-login-container">
          <h2>Admin Login Required</h2>
          <form onSubmit={handleAdminLogin}>
            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              value={credentials.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Admin Password"
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login as Admin'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminProtectedRoute;
