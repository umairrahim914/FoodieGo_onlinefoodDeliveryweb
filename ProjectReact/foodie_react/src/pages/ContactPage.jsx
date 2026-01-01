import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Contact Us</h1>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="wrapper">
          <div className="contact-grid">
            
            {/* Head Office */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Head Office</h3>
              <p className="phone-number">021-5877976</p>
              
              <div className="contact-icon location-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p className="address">
                Ocean Tower, 20th Floor, G-3, Block -9,<br />
                Scheme 5, Main Clifton Road, Karachi,<br />
                Pakistan
              </p>
            </div>

            {/* Regional Office Lahore */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Regional Office Lahore</h3>
              <p className="phone-number">042-35884570</p>
              
              <div className="contact-icon location-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p className="address">
                27-A Ali Block New Garden Town<br />
                Opposite Barkat Market Lahore
              </p>
            </div>

            {/* Regional Office Islamabad */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Regional Office Islamabad</h3>
              <p className="phone-number">0512726877</p>
              
              <div className="contact-icon location-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p className="address">
                United Bakery Building, 11, School Rd, F-<br />
                6 Markaz F-6, Islamabad, Islamabad<br />
                Capital Territory 44000
              </p>
            </div>

          </div>

          {/* Additional Contact Info */}
          <div className="additional-contact">
            <div className="contact-row">
              
              {/* Helpline */}
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>Helpline</h3>
                <p className="contact-detail">UAN: 111 532 532</p>
              </div>

              {/* Complaints Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Complaints Email</h3>
                <p className="contact-detail">customercare@foodiego.com</p>
              </div>

            </div>
          </div>

          {/* Social Media Section */}
          <div className="social-media-section">
            <h2>Follow Us</h2>
            <div className="social-icons-large">
              <a href="#" className="social-icon-large youtube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-icon-large instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon-large facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon-large twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn-custom">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default ContactPage;