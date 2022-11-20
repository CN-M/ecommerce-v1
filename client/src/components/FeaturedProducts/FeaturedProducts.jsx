/* eslint-disable no-unused-vars */
import './FeaturedProducts.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:1337/api/items');
    const productData = await response.data;
    setProducts(productData.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      {
      products?.map((product) => <ProductCard key={product.id} product={product.attributes} />)
      }
    </div>
  );
};

export default FeaturedProducts;
