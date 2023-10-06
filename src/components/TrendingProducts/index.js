import React from 'react';
import Carousel from '../Carousel';

const TrendingProducts = () => {
  return (
    <div className='trending-products divider' style={{ position: 'relative' }}>
      <Carousel
        params={{ collection: 'trending' }}
        title='Trending Products'
        showMoreLink='/collections/featured'
      />
    </div>
  );
};

export default TrendingProducts;
