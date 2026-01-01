import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPage.css';

const MenuPage = () => {
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        "French Fries ($5)",
        "Chicken Wings ($8)", 
        "Onion Rings ($6)"
      ]
    },
    {
      name: "Main Course",
      items: [
        "Grilled Chicken ($15)",
        "Beef Burger ($12)",
        "Veggie Burger ($10)"
      ]
    },
    {
      name: "Desserts", 
      items: [
        "Ice Cream ($5)",
        "Chocolate Cake ($8)",
        "Fruit Salad ($6)"
      ]
    }
  ];

  return (
    <div className="menu-wrapper">
      <nav className="menu-nav">
        <div className="menu-nav-logo">
          <p>FoodieGo</p>
        </div>
        <div className="menu-nav-menu">
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/menu" className="link menu-active">Menu</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/help" className="link">Help</Link></li>
          </ul>
        </div>
      </nav>
      
      <section className="menu-section">
        <h1>Our Menu</h1>
        <div className="menu-categories">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-category">
              <h2>{category.name}</h2>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;