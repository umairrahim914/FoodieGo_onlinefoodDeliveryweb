import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRecipes = [
    {
      id: 1,
      title: "Spicy Chicken Wings",
      image: "/images/recipe1.jpg",
      description: "Crispy and spicy chicken wings with our special sauce"
    },
    {
      id: 2,
      title: "Gourmet Burger",
      image: "/images/recipe2.jpg",
      description: "Juicy beef patty with fresh vegetables and cheese"
    },
    {
      id: 3,
      title: "Fresh Pasta",
      image: "/images/recipe3.jpg",
      description: "Homemade pasta with rich tomato and herb sauce"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hint-yellow to-eye-ball py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-lead mb-6">
            Welcome to <span className="text-gold-finger">FoodieGo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing recipes and order your favorite dishes from the best restaurants in town.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for restaurants, dishes, or cuisines..."
                className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold-finger focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gold-finger text-white px-8 py-4 rounded-r-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                <i className="fas fa-search text-lg"></i>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-lead mb-6">
              Featured <span className="text-gold-finger">Recipes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out our chef's special recipes and popular dishes that our customers love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-lead mb-3">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {recipe.description}
                  </p>
                  <button className="bg-gold-finger text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-finger mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-finger mb-2">50+</div>
              <div className="text-gray-600">Restaurant Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-finger mb-2">1000+</div>
              <div className="text-gray-600">Orders Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-finger mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default HomePage;