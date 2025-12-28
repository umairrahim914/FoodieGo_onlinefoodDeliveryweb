import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories = {
    appetizers: [
      { id: 1, name: "Chicken Wings", price: "$8.99", description: "Spicy buffalo wings with ranch dip" },
      { id: 2, name: "Mozzarella Sticks", price: "$6.99", description: "Crispy breaded mozzarella with marinara sauce" },
      { id: 3, name: "Nachos Supreme", price: "$9.99", description: "Loaded nachos with cheese, jalapeños, and sour cream" },
      { id: 4, name: "Onion Rings", price: "$5.99", description: "Golden crispy onion rings with special sauce" }
    ],
    mainCourse: [
      { id: 5, name: "Grilled Salmon", price: "$18.99", description: "Fresh Atlantic salmon with lemon butter sauce" },
      { id: 6, name: "Ribeye Steak", price: "$24.99", description: "Premium ribeye steak cooked to perfection" },
      { id: 7, name: "Chicken Parmesan", price: "$16.99", description: "Breaded chicken breast with marinara and mozzarella" },
      { id: 8, name: "Vegetarian Pasta", price: "$14.99", description: "Fresh pasta with seasonal vegetables and herbs" }
    ],
    desserts: [
      { id: 9, name: "Chocolate Cake", price: "$6.99", description: "Rich chocolate cake with vanilla ice cream" },
      { id: 10, name: "Cheesecake", price: "$7.99", description: "New York style cheesecake with berry compote" },
      { id: 11, name: "Tiramisu", price: "$8.99", description: "Classic Italian tiramisu with coffee and mascarpone" },
      { id: 12, name: "Ice Cream Sundae", price: "$5.99", description: "Three scoops with toppings and whipped cream" }
    ]
  };

  const categoryNames = {
    appetizers: "Appetizers",
    mainCourse: "Main Course",
    desserts: "Desserts"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gold-finger to-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Explore our delicious selection of appetizers, main courses, and desserts, 
            all prepared with the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2 flex space-x-2">
              {Object.keys(menuCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-gold-finger text-white'
                      : 'text-gray-600 hover:text-gold-finger'
                  }`}
                >
                  {categoryNames[category]}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuCategories[activeCategory].map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-lead">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold-finger">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <button className="bg-gold-finger text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-lead mb-6">
              Special <span className="text-gold-finger">Offers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-gold-finger to-yellow-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Family Combo</h3>
              <p className="text-xl mb-6 opacity-90">
                Get 2 main courses + 2 appetizers + 2 desserts for just $49.99
              </p>
              <button className="bg-white text-gold-finger px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Order Now
              </button>
            </div>

            <div className="bg-gradient-to-r from-lead to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Weekend Special</h3>
              <p className="text-xl mb-6 opacity-90">
                20% off on all orders above $30 during weekends
              </p>
              <button className="bg-gold-finger text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  );
};

export default MenuPage;