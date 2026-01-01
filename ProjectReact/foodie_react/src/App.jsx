import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './main.css';
import MainPage from './pages/MainPage';
import LoginSignup from './pages/LoginSignup';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CategoriesPage from './pages/CategoriesPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;