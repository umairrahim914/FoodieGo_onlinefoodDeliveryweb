import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="flex wrapper gap-4">
          {/* Company Info */}
          <div className="footer-wrapper flex-[2] min-w-[300px]">
            <Link to="/" className="logo text-2xl font-bold text-[var(--lead)] no-underline">FoodieGo.</Link>
            <p className="mt-one-half text-gray-600">
              We will fill your tummy with delicious<br />
              food and fast delivery.
            </p>
            <div className="flex gap-2 mt-4">
              <a href="#" className="social-icon bg-white hover:bg-[var(--lead)] hover:text-white no-underline">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="social-icon bg-white hover:bg-[var(--lead)] hover:text-white no-underline">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-icon bg-white hover:bg-[var(--lead)] hover:text-white no-underline">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon bg-white hover:bg-[var(--lead)] hover:text-white no-underline">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
            </div>
          </div>

          {/* Our Menu */}
          <ul className="footer-wrapper flex-1 min-w-[150px]">
            <li>
              <h4 className="text-lg font-semibold text-[var(--lead)]">Our Menu</h4>
            </li>
            <li className="mt-one-half">
              <a href="/menu" className="footer-link text-gray-600 text-lg hover:text-[var(--lead)] transition-colors no-underline">
                Special
              </a>
            </li>
            <li className="mt-one-half">
              <a href="/menu" className="footer-link text-gray-600 text-lg hover:text-[var(--lead)] transition-colors no-underline">
                Popular
              </a>
            </li>
          </ul>

          {/* Company */}
          <ul className="footer-wrapper flex-1 min-w-[150px]">
            <li>
              <h4 className="text-lg font-semibold text-[var(--lead)]">Company</h4>
            </li>
            <li className="mt-one-half">
              <a href="/service" className="footer-link text-gray-600 text-lg hover:text-[var(--lead)] transition-colors no-underline">
                Why FoodieGo
              </a>
            </li>
            <li className="mt-one-half">
              <a href="/contact" className="footer-link text-gray-600 text-lg hover:text-[var(--lead)] transition-colors no-underline">
                Partner with us
              </a>
            </li>
            <li className="mt-one-half">
              <a href="/about" className="footer-link text-gray-600 text-lg hover:text-[var(--lead)] transition-colors no-underline">
                About
              </a>
            </li>
          </ul>

          {/* Support */}
          <ul className="footer-wrapper flex-1 min-w-[150px]">
            <li>
              <h4 className="text-lg font-semibold text-[var(--lead)]">Support</h4>
            </li>
            <li className="mt-one-half">
            </li>
            <li className="mt-one-half">
              <a href="/contact" className="footer-link text-gray-600 text-lg hover:text-[var(--lead)] transition-colors no-underline">
                Feedback
              </a>
            </li>
            <li className="mt-one-half">
              <a href="/contact" className="footer-link text-gray-600 text-lg hover:text-[var(--lead)] transition-colors no-underline">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;