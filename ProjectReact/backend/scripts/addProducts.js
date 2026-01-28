const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/foodiego');

const products = [
  {
    name: "Double Beef Burger",
    price: 9.67,
    image: "/images/burger.png",
    category: "burgers",
    description: "Delicious double beef burger with fresh vegetables"
  },
  {
    name: "Veggie Pizza",
    price: 10.99,
    image: "/images/pizza.png",
    category: "pizza",
    description: "Fresh vegetable pizza with mozzarella cheese"
  },
  {
    name: "Fried Chicken",
    price: 13.45,
    image: "/images/fried-chicken.png",
    category: "chicken",
    description: "Crispy fried chicken pieces"
  },
  {
    name: "Chicken Roll",
    price: 7.50,
    image: "/images/chicken-roll.png",
    category: "rolls",
    description: "Spicy chicken roll with fresh vegetables"
  },
  {
    name: "Sub Sandwich",
    price: 6.99,
    image: "/images/sandwich.png",
    category: "sandwiches",
    description: "Fresh sub sandwich with premium ingredients"
  },
  {
    name: "Chicken Lasagna",
    price: 16.45,
    image: "/images/lasagna.png",
    category: "pasta",
    description: "Homemade chicken lasagna with cheese"
  },
  {
    name: "Italian Spaghetti",
    price: 7.65,
    image: "/images/spaghetti.png",
    category: "pasta",
    description: "Authentic Italian spaghetti with tomato sauce"
  },
  {
    name: "Spring Roll",
    price: 9.31,
    image: "/images/spring-roll.png",
    category: "appetizers",
    description: "Crispy spring rolls with vegetables"
  }
];

const insertProducts = async () => {
  try {
    
    await Product.deleteMany({});
    console.log('Cleared existing products');


    const result = await Product.insertMany(products);
    console.log(`${result.length} products added successfully!`);
    
    result.forEach(product => {
      console.log(`- ${product.name}: $${product.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error adding products:', error);
    process.exit(1);
  }
};

insertProducts();
