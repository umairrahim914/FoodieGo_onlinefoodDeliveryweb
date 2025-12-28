import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainPage from './pages/MainPage';
import LoginSignup from './pages/LoginSignup';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;