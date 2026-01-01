import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalQuantity, toggleCart } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="navbar flex between wrapper">
        <Link to="/" className="logo font-bold text-[var(--lead)] no-underline">
          FoodieGo.
        </Link>

        {/* Desktop Menu */}
        <ul className={`navlist flex gap-3 ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`} id="navList">
          <li><Link to="/" className="no-underline text-[var(--lead)] font-bold hover:text-[var(--gold-finger)]">Home</Link></li>
          <li><a href="#menu" className="no-underline text-[var(--lead)] font-bold hover:text-[var(--gold-finger)]">Menu</a></li>
          <li><a href="#service" className="no-underline text-[var(--lead)] font-bold hover:text-[var(--gold-finger)]">Service</a></li>
          <li><a href="#about" className="no-underline text-[var(--lead)] font-bold hover:text-[var(--gold-finger)]">About Us</a></li>
          <li><a href="#contact" className="no-underline text-[var(--lead)] font-bold hover:text-[var(--gold-finger)]">Contacts</a></li>
        </ul>

        <div className="desktop-action flex gap-2">
          {/* Cart Icon */}
          <button
            onClick={toggleCart}
            className="cart-icon text-[var(--lead)] text-xl relative no-underline"
          >
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="cart-value absolute -top-2 -right-3 text-sm w-5 h-5 rounded-full bg-red-800 text-white text-center leading-5">
              {getTotalQuantity()}
            </span>
          </button>

          {/* Dashboard Links */}
          <Link
            to="/user-dashboard"
            className="btn-custom no-underline mr-2"
          >
            User Dashboard &nbsp; <i className="fa-solid fa-user"></i>
          </Link>

          <Link
            to="/admin-dashboard"
            className="btn-custom no-underline mr-2"
          >
            Admin Panel &nbsp; <i className="fa-solid fa-cog"></i>
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="btn-custom no-underline"
          >
            Login &nbsp; <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="hamburger text-2xl hidden"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
          <li><Link to="/" className="no-underline text-[var(--lead)] font-bold" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><a href="#menu" className="no-underline text-[var(--lead)] font-bold" onClick={() => setIsMobileMenuOpen(false)}>Menu</a></li>
          <li><a href="#service" className="no-underline text-[var(--lead)] font-bold" onClick={() => setIsMobileMenuOpen(false)}>Service</a></li>
          <li><a href="#about" className="no-underline text-[var(--lead)] font-bold" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
          <li><a href="#contact" className="no-underline text-[var(--lead)] font-bold" onClick={() => setIsMobileMenuOpen(false)}>Contacts</a></li>
          <li>
            <Link
              to="/user-dashboard"
              className="btn-custom no-underline mb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              User Dashboard &nbsp; <i className="fa-solid fa-user"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard"
              className="btn-custom no-underline mb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin Panel &nbsp; <i className="fa-solid fa-cog"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="btn-custom no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login &nbsp; <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;