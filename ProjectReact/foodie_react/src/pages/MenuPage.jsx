import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import productsData from '../data/products.json';
import './MenuPage.css';


const MenuPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

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
          <div className="card-list text-center flex mt-4 gap-2 flex-wrap justify-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default MenuPage;