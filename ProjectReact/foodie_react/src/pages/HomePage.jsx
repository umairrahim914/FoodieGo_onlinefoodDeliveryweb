import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRecipes = [
    {
      id: 1,
      title: "Recipe 1",
      image: "/images/recipe1.jpg",
      description: "Delicious recipe to try at home"
    },
    {
      id: 2,
      title: "Recipe 2", 
      image: "/images/recipe2.jpg",
      description: "Amazing flavors in every bite"
    },
    {
      id: 3,
      title: "Recipe 3",
      image: "/images/recipe3.jpg", 
      description: "Perfect for any occasion"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="home-wrapper">
      <nav className="home-nav">
        <div className="home-nav-logo">
          <p>FoodieGo</p>
        </div>
        <div className="home-nav-menu">
          <ul>
            <li><Link to="/" className="link home-active">Home</Link></li>
            <li><Link to="/categories" className="link">Categories</Link></li>
            <li><Link to="/menu" className="link">Food</Link></li>
            <li><Link to="/user-dashboard" className="link">Order</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
            <li><Link to="/login" className="link">Login</Link></li>
          </ul>
        </div>
      </nav>
      
      <div className="home-search-bar">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="home-search-btn">Search</button>
        </form>
      </div>
      
      <section className="home-hero">
        <h1>Welcome to FoodieGo!</h1>
        <p>Discover the best food in town</p>
      </section>
      
      <section className="home-featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="home-recipe-cards">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="home-recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;