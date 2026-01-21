import api from '../api/axios';

// AUTHENTICATION SERVICE: All auth-related API calls
const authService = {
  
  // REGISTER: Create new user account
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      
      // Store token and user data in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return {
        success: true,
        data: response.data,
        message: response.data.message
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  },

  // LOGIN: Authenticate existing user
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      
      // Store token and user data in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return {
        success: true,
        data: response.data,
        message: response.data.message
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  },

  // LOGOUT: Clear user data and redirect
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },

  // GET CURRENT USER: From localStorage
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // CHECK: If user is logged in
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return !!token;
  }
};

export default authService;
