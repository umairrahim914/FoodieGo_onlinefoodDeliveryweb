import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductMenu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <section>
      <div className="wrapper p-top">
        <div className="text-center">
          <h5 className="section-title">Our Menu</h5>
          <h2 className="section-heading">The Most Popular</h2>
        </div>
        <div className="card-list text-center flex mt-4 gap-2 flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductMenu;