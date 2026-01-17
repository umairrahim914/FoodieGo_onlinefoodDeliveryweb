import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ReviewsCarousel />
      
      {/* Mobile App Promotion Section - Exact match to original */}
      <section className="py-20 mt-4">
        <div className="wrapper">
          <div className="app-container flex items-center justify-between">
            <div className="image-container">
              <img
                src="/images/mobile-app.png"
                alt="Mobile App"
                className="w-[25rem] max-w-full h-auto"
              />
            </div>
            
            <div className="content">
              <h5 className="section-title text-left mb-4">Order and Enjoy</h5>
              <h2 className="section-heading text-left mb-6">
                Simple Way To <br />
                Order Your Food
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover food wherever and whenever<br />
                and get your food delivery quickly.
              </p>
              <a href="/menu" className="btn-custom mt-2 ">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Exact match to original */}
      <section className="py-20">
        <div className="wrapper">
          <div className="text-center">
            <h5 className="section-title mt-4" >Our Subscribe</h5>
            <h2 className="section-heading">Subscribe To Our Newsletter</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
              We recommend you to subscribe our newspaper, drop your email below to get daily update about us.
            </p>

            <div className="input-container flex max-w-[43rem] mx-auto bg-white p-3 rounded-2xl shadow-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 bg-transparent border-none text-lg px-4 focus:outline-none"
              />
              <a href="#" className="btn-custom">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default MainPage;