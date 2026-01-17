import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">ABOUT US</h1>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="company-story">
        <div className="wrapper">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                FoodieGo entered the food delivery market in 2020 and since then, it's been a journey full of excitement 
                and delicious goodness! The first FoodieGo service launched in the heart of the city and now our 
                premium food delivery is available in over 50 cities with more than 200 restaurant partners! 
                Being the most loved food delivery service, FoodieGo leaves no stone unturned to provide its customers 
                the most delicious food and an excellent dining experience.
              </p>
            </div>
            <div className="story-highlight">
              <div className="highlight-box">
                <h3>WE PRIDE OURSELVES ON USING QUALITY FRESH INGREDIENTS AND LOCAL SUPPLIERS FROM TRUSTED PARTNERS</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="wrapper">
          <div className="mission-content">
            <div className="mission-logo">
              <h2 className="foodie-brand">
                <span className="foodie-text">Foodie</span>
                <span className="go-text">Go</span>
              </h2>
            </div>
            <p className="mission-text">
              It's FoodieGo's pledge to give back to society. Over the years we have made it our mission to spread the message of hope, bringing positive 
              change in the lives of people and providing better living standards. FoodieGo strengthens the community on the pillars of 
              Education, Inclusion & Diversity.
            </p>
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
      <section className="fast-facts">
        <div className="wrapper">
          <h2 className="facts-title">Fast Facts about FoodieGo</h2>
          <div className="facts-grid">
            <div className="fact-item">
              <div className="fact-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="fact-number">2025</div>
              <div className="fact-description">
                The first FoodieGo service launched in 2025 and was located in the heart of the city
              </div>
            </div>
            
            <div className="fact-item">
              <div className="fact-icon">
                <i className="fas fa-store"></i>
              </div>
              <div className="fact-number">200+</div>
              <div className="fact-description">
                Today FoodieGo has grown to over 200 restaurant partners across the country
              </div>
            </div>
            
            <div className="fact-item">
              <div className="fact-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="fact-number">50</div>
              <div className="fact-description">
                Giving back to the community, FoodieGo serves 50 cities operated by dedicated team members
              </div>
            </div>
            
            <div className="fact-item">
              <div className="fact-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="fact-number">10000+</div>
              <div className="fact-description">
                Our premium food delivery service is trusted by over 10000+ people across the nation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section mt-6">
        <div className="wrapper">
          <h2 className="values-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Quality First</h3>
              <p>We believe in serving only the highest quality food from trusted restaurant partners.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery service to ensure your food arrives fresh and on time.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-smile"></i>
              </div>
              <h3>Customer Satisfaction</h3>
              <p>Your happiness is our priority. We strive to exceed expectations with every order.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default AboutPage;