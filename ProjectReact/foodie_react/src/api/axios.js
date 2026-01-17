import axios from 'axios';

// CREATE: Base axios instance with default settings
const api = axios.create({
  baseURL: 'http://localhost:5000', // Backend server URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST INTERCEPTOR: Automatically add token to all requests
api.interceptors.request.use(
  (config) => {
    // GET: Token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // ADD: Token to Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR: Handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // HANDLE: Token expiration or invalid token
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
