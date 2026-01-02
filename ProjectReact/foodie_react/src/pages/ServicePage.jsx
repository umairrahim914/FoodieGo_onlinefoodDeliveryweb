import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import './ServicePage.css';

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Easy To Order",
      description: "you only need a few steps in ordering food.",
      image: "/images/easy-to-order.png"
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "delivery that is always ontime even faster.",
      image: "/images/fast-delivery.png"
    },
    {
      id: 3,
      title: "Best Quality",
      description: "Not only fast for us in quality is also number one.",
      image: "/images/best-quality.png"
    }
  ];

  return (
    <div className="service-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1 className="service-title">OUR SERVICE</h1>
          <h2 className="service-subtitle">How Does It Work?</h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="wrapper">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                </div>
                <h3 className="service-card-title">
                  {service.title}
                </h3>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default ServicePage;