import React from 'react';
import Carousel from '../Carousel';
import { getTrendingProducts } from '../api/productAPIs';

const TrendingProducts = () => {
  return (
    <Carousel productAPI={getTrendingProducts} title='Trending Products' />
  );
};

export default TrendingProducts;
