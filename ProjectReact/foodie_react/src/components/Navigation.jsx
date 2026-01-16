import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalQuantity, toggleCart } = useCart();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to get link classes with active state
  const getLinkClasses = (path) => {
    const isCurrentPage = isActive(path);
    if (isCurrentPage) {
      return "nav-link nav-link-active";
    }
    return "nav-link";
  };

  // Function to get anchor link classes (for Service, Contacts)
  const getAnchorClasses = (path = null) => {
    if (path && isActive(path)) {
      return "nav-link nav-link-active";
    }
    return "nav-link";
  };

  return (
    <header>
      <nav className="navbar flex between wrapper">
        <Link to="/" className="logo font-bold text-white no-underline">
          FoodieGo.
        </Link>

        {/* Desktop Menu */}
        <ul className={`navlist flex gap-3 ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`} id="navList">
          <li><Link to="/" className={getLinkClasses("/")}>Home</Link></li>
          <li><Link to="/menu" className={getLinkClasses("/menu")}>Menu</Link></li>
          <li><Link to="/service" className={getLinkClasses("/service")}>Service</Link></li>
          <li><Link to="/about" className={getLinkClasses("/about")}>About Us</Link></li>
          <li><Link to="/contact" className={getAnchorClasses("/contact")}>Contacts</Link></li>
        </ul>

        <div className="desktop-action flex gap-2">
          {/* Cart Icon */}
          <button
            onClick={toggleCart}
            className="cart-icon text-gray-800 text-xl relative no-underline hover:text-[var(--gold-finger)] transition-colors duration-300"
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
          <li><Link to="/" className={`${getLinkClasses("/")} block py-2`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/menu" className={`${getLinkClasses("/menu")} block py-2`} onClick={() => setIsMobileMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/service" className={`${getLinkClasses("/service")} block py-2`} onClick={() => setIsMobileMenuOpen(false)}>Service</Link></li>
          <li><Link to="/about" className={`${getLinkClasses("/about")} block py-2`} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" className={`${getAnchorClasses("/contact")} block py-2`} onClick={() => setIsMobileMenuOpen(false)}>Contacts</Link></li>
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