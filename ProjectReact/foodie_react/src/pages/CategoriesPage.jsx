import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      name: "Burgers",
      image: "/images/burger.png",
      description: "Juicy burgers to satisfy your cravings"
    },
    {
      id: 2,
      name: "Pizza", 
      image: "/images/pizza.png",
      description: "Delicious pizzas to make your taste buds dance"
    },
    {
      id: 3,
      name: "Pasta & Noodles",
      image: "/images/spaghetti.png", 
      description: "Satisfying pasta and noodle dishes"
    },
    {
      id: 4,
      name: "Desserts",
      image: "/images/lasagna.png",
      description: "Sweet treats to satisfy your sweet tooth"
    },
    {
      id: 5,
      name: "Sandwiches & Wraps",
      image: "/images/sandwich.png",
      description: "Delicious sandwiches and wraps to go"
    },
    {
      id: 6,
      name: "Snacks",
      image: "/images/spring-roll.png",
      description: "Crunchy snacks to munch on"
    },
    {
      id: 7,
      name: "Beverages",
      image: "/images/fried-chicken.png",
      description: "Refreshing drinks to quench your thirst"
    }
  ];

  return (
    <div className="categories-wrapper">
      <nav className="categories-nav">
        <div className="categories-nav-logo">
          <p>FoodieGo</p>
        </div>
        <div className="categories-nav-menu">
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/categories" className="link categories-active">Categories</Link></li>
            <li><Link to="/menu" className="link">Food</Link></li>
            <li><Link to="/user-dashboard" className="link">Order</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
            <li><Link to="/login" className="link">Login</Link></li>
          </ul>
        </div>
      </nav>
      
      <div className="categories-section">
        <h1 style={{color: '#fff', textAlign: 'center'}}>Categories</h1>
        <div className="categories-cards">
          {categories.map((category) => (
            <div key={category.id} className="categories-card">
              <img src={category.image} alt={category.name} />
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;