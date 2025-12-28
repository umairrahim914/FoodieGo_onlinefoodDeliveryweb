import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="order-card flex-1 min-w-[300px]">
      <div className="text-center">
        <img
          src={product.image}
          alt={product.name}
          className="order-card-img"
        />
      </div>
      <h4 className="order-card-title">
        {product.name}
      </h4>
      <h4 className="price">
        {product.price}
      </h4>
      <div className="text-center">
        <button
          onClick={handleAddToCart}
          className="btn-custom"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;