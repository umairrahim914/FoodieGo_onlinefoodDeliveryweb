import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      name: "Burgers",
      image: "/images/burger.png",
      description: "Juicy beef patties with fresh toppings and special sauces",
      itemCount: "15+ items"
    },
    {
      id: 2,
      name: "Pizza",
      image: "/images/pizza.png",
      description: "Wood-fired pizzas with authentic Italian flavors",
      itemCount: "20+ items"
    },
    {
      id: 3,
      name: "Pasta & Noodles",
      image: "/images/spaghetti.png",
      description: "Fresh pasta and Asian noodles with rich sauces",
      itemCount: "12+ items"
    },
    {
      id: 4,
      name: "Desserts",
      image: "/images/lasagna.png",
      description: "Sweet treats and decadent desserts to satisfy your cravings",
      itemCount: "10+ items"
    },
    {
      id: 5,
      name: "Sandwiches & Wraps",
      image: "/images/sandwich.png",
      description: "Fresh sandwiches and wraps with premium ingredients",
      itemCount: "18+ items"
    },
    {
      id: 6,
      name: "Snacks",
      image: "/images/spring-roll.png",
      description: "Quick bites and appetizers perfect for any time",
      itemCount: "25+ items"
    },
    {
      id: 7,
      name: "Beverages",
      image: "/images/fried-chicken.png",
      description: "Refreshing drinks, smoothies, and specialty beverages",
      itemCount: "30+ items"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gold-finger to-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Food Categories
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Browse through our diverse selection of food categories and discover 
            your next favorite meal.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-hint-yellow to-eye-ball p-8 flex justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-lead group-hover:text-gold-finger transition-colors">
                      {category.name}
                    </h3>
                    <span className="bg-gold-finger text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {category.itemCount}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <button className="w-full bg-gold-finger text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 group-hover:shadow-lg">
                    Explore {category.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-lead mb-6">
              Most <span className="text-gold-finger">Popular</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These are the categories our customers order from the most. 
              Join thousands of satisfied customers!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold-finger rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-hamburger text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-lead mb-4">Burgers</h3>
              <p className="text-gray-600">
                #1 Most Ordered Category
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-finger rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-pizza-slice text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-lead mb-4">Pizza</h3>
              <p className="text-gray-600">
                #2 Customer Favorite
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-finger rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-ice-cream text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-lead mb-4">Desserts</h3>
              <p className="text-gray-600">
                #3 Sweet Tooth Choice
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default CategoriesPage;