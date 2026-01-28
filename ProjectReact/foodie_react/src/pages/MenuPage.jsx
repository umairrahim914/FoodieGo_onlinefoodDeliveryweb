import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import productService from '../services/productService';
import './MenuPage.css';


const MenuPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const result = await productService.getAllProducts();
      if (result.success) {
        setProducts(result.data);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Failed to load products');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="menu-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-title">OUR MENU</h1>
          <h2 className="menu-subtitle">The Most Popular</h2>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="wrapper">
          {loading ? (
            <div className="loading-message text-center">
              <p>Loading delicious food...</p>
            </div>
          ) : error ? (
            <div className="error-message text-center">
              <p>Error: {error}</p>
              <button onClick={fetchProducts} className="btn">Try Again</button>
            </div>
          ) : products.length === 0 ? (
            <div className="no-products-message text-center">
              <p>No products available at the moment.</p>
            </div>
          ) : (
            <div className="card-list text-center flex mt-4 gap-2 flex-wrap justify-center">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default MenuPage;