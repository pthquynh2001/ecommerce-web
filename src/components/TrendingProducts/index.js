import React from 'react';
import Carousel from '../Carousel';
import { getTrendingProducts } from '../api/getAPIs';

const TrendingProducts = () => {
  return (
    <div className='trending-products divider' style={{ position: 'relative' }}>
      <Carousel productAPI={getTrendingProducts} title='Trending Products' />
    </div>
  );
};

export default TrendingProducts;
